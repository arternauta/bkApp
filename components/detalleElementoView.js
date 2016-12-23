'use strict'
import React, { Component } from 'react';
import Chart from 'react-native-chart';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  Image,
  TouchableHightlight,
  BackAndroid,
} from 'react-native';
//filter para filtrar el historico

const styles = require('../styles')

class detalleElementoView extends Component{
constructor(props){
  super(props)
  this.passProps = this.props.route.passProps.elemento
  var puntosHistorico = this.passProps.historico.split(',');
  const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== row2})
  this.state = {
    dataSource: ds.cloneWithRows(puntosHistorico),
    puntosHistorico: puntosHistorico
  }
}
  render(){
    var mes = 10
    var axes = this.state.puntosHistorico.map(function (item){
      if (mes === 13){
        mes = 1
      }
      item = ["Mes " + mes, item]
      mes++
      return item
    })
   return(
          <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/'+this.passProps.foto+'.jpg'}} style={styles.container}>
              <Text>{this.passProps.Escritorio}</Text>
              <Text>{this.passProps.Nombre}</Text>
              <Text>{this.passProps.Puntos}</Text>
              <Text>{this.passProps.Pais}</Text>

                <Chart
                    data={axes}
                    style={styles.chart}
                    verticalGridStep={5}
                    type="line"
                 />
               <Text>HISTORICO</Text>
                 <ListView
                   dataSource={this.state.dataSource}
                   renderRow={(rowData) => <Text>{rowData} puntos</Text>}
                 />
               </Image>
    )
  }
}

module.exports = detalleElementoView
