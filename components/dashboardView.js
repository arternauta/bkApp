'use strict'

import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  Image,

  TouchableHighlight,
  ToolbarAndroid,
  TouchableOpacity,
} from 'react-native';

import { Container, Card, CardItem, Thumbnail, Footer, FooterTab, Header, Content, Title, Button, Icon } from 'native-base';

const detalleElemento = require ('./detalleElementoView')
const styles = require ('../styles')
const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/oficinas.json'
const moment = require('moment')

require('moment/locale/pt')
moment.locale('es')

var dia = moment().format("DD");
var mes = moment().format("MMMM")

var primerDia = moment("20161020", "YYYYMMDD")

class dashboardView extends Component{
constructor(props){
  super(props)
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    }),
    loaded:false
  }
}

componentDidMount(){
   this.fetchData()
}
//
fetchData(){
   fetch(REQUEST_URL)
   .then((response)=>response.json())
   .then((responseData)=>{
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(responseData),
       loaded:true
     })
   })
 }
//
 onElementoPressed(elemento){

   this.props.navigator.push({
     name: 'Detalles',
     passProps: {elemento: elemento}
   })

 }
// //
 renderElemento(elemento){
   var urlImage = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/SantaCruzRank.png'
     urlImage += '?random_number='+new Date().getTime()
   return(
     <TouchableOpacity>
           <View style={styles.elementoContainer}>
             <View style={styles.puestoWrap}>
               <Text style={styles.corazon}>{elemento.Puesto}</Text>
             </View>
             <Text style={styles.pais}>{elemento.Escritorio}</Text>
             <Icon style={styles.icono} name="ios-menu" onPress={()=>this.onElementoPressed(elemento)}/>
           </View>
     </TouchableOpacity>

     )
 }
render(){
  // var urlHeader = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/header.jpg'
  //   urlHeader += '?random_number='+new Date().getTime()
    return(
      <Container>
        <Header backgroundColor="#ff6c6c">
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

          <Title>Ranking Escritorios</Title>

            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
        </Header>
            <View style={styles.centrado}>
              <View style={styles.unTercio}>


                <Card style={{ flex: 0 }}>
                     <CardItem>
                         <Thumbnail source={{uri:'http://ranking.bhekel.com/bhekelApp/images/fondoRanking.jpg'}} />
                         <Text>NativeBase</Text>
                         <Text note>GeekyAnts</Text>
                     </CardItem>

                     <CardItem>
                         <Image style={{ resizeMode: 'cover', width: null }} source={{uri:'http://ranking.bhekel.com/bhekelApp/images/fondoRanking.jpg'}} />
                     </CardItem>

                     <CardItem>
                         <Button transparent>
                             <Icon name="logo-github" />
                             1,926
                         </Button>
                     </CardItem>
                </Card>


                  <Text>1</Text>


              </View>
              <View style={styles.dosTercios}>
                <Text>2</Text>
              </View>
            </View>
          <Footer backgroundColor="#ff6c6c">
              <FooterTab>
                  <Button transparent>
                      <Icon name='ios-call' />
                  </Button>
              </FooterTab>
          </Footer>
      </Container>
    )
  }

}
module.exports = dashboardView
