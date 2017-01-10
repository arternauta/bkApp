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

import { H1, H2, H3, H4, Thumbnail, Button } from 'native-base';

//filter para filtrar el historico
/*                <Chart
                    data={axes}
                    style={styles.chart}
                    verticalGridStep={5}
                    type="line"
                 /> */
const styles = require('../styles')


const moment = require('moment')
const tz = require('moment-timezone')

require('moment/locale/pt')
moment.locale('es')

var diaSemana = moment().format("dddd");
var dia = moment().format("DD");
var mesActual = moment().format("MMMM")
var ano = moment().format("YYYY")
var primerDia = moment("20161020", "YYYYMMDD")
var timer = ''



class detalleElementoView extends Component{
constructor(props){
  super(props)
  this.passProps = this.props.route.passProps.elemento

  var puntosHistorico = this.passProps.historico.split(',');
  function getSum(total, num){
    return parseInt(total) + parseInt(num)
  }

  var sum = puntosHistorico.reduce(getSum)
console.log(sum)

  const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== row2})
  this.state = {
    puntosHistorico: sum,
    hora: "00:00:00",
    fotoFondo: 'http://ranking.bhekel.com/bhekelApp/images/'+this.passProps.foto+'.jpg'
  }
}

componentDidMount(){
timer = setInterval(()=>{
    this.setState({ hora: moment().tz(this.passProps.huso).format('h:mm:ss')})
  },1000)

}
componentWillUnmount(){
  clearInterval(timer)
}


  render(){
    /*
    var ran = '?random_number='+new Date().getTime()
    var mes = 10
    var axes = this.state.puntosHistorico.map(function (item){
      if (mes === 13){
        mes = 1
      }
      item = ["Mes " + mes, item]
      mes++
      return item
    })
*/

   return(
          <Image source={{uri:this.state.fotoFondo}} style={{flex:1,alignItems:'stretch'}}>
            <View style={{alignItems:'flex-end', padding:15}}>
              <Text style={{fontSize:30, color:'#31ff2c'}}>{this.passProps.Escritorio}</Text>
              <Text style={{fontSize:20, color:'#31ff2c'}}>{this.passProps.Pais}</Text>
              <Text><H1 style={{color:'white'}}>{diaSemana}</H1></Text>
              <Text><H1 style={{color:'white'}}>{dia}</H1></Text>
              <Text><H1 style={{color:'white'}}>{mesActual}</H1></Text>
              <Text><H1 style={{color:'white'}}>Horario Local {this.state.hora}</H1></Text>
            </View>
            <View style={{margin: 25, padding:5, alignItems:'center', borderTopWidth:1, borderBottomWidth:1, borderColor:'white'}}>
              <Text style={{color:'#31ff2c', fontSize:60}}>{this.passProps.Puntos} PUNTOS</Text>
              <Text style={{color:'white', fontSize:20, fontWeight:'900'}}>{this.passProps.mes}</Text>
            </View>
            <View style={{alignItems:'flex-end', padding:15}}>
              <Text style={{color:'white'}}>NUMERO {this.passProps.Puesto} DEL RANKING</Text>
              <Text style={{color:'white'}}>{this.state.puntosHistorico} Puntos desde el inicio de los tiempos</Text>

            </View>
          </Image>
    )
  }
}

module.exports = detalleElementoView
