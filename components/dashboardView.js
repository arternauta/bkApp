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

import { Container, List, ListItem, Grid, Col, Row, Card, CardItem, Thumbnail, Header, Content, Title, Button, Icon } from 'native-base';

const detalleElemento = require ('./detalleElementoView')
const Cabeza = require ('./cabezaView')
const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/oficinas.json'
const styles = require ('../styles')

const MenuTop = require('./menuTop')
const Footer = require('./footer')

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
//split array de donos

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
     <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
           <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:styles.constants.colorBase, margin:15}}>
             <View style={{backgroundColor:styles.constants.colorBase, flex:1, alignItems:'center', padding:10, margin:5, borderRadius:5}}>
               <Text style={{fontSize:20, color:'white'}}>{elemento.Puesto}</Text>
             </View>
             <View style={{flex:3, alignItems:'flex-start', justifyContent:'center'}}>
               <Text style={{fontSize:16, color:'black', fontWeight:'600'}}>{elemento.Escritorio}</Text>
             </View>
             <View style={{flex:4, flexDirection:'column'}}>
               <Text style={{fontSize:10, textAlign:'left'}}>{elemento.Nombre}</Text>
             </View>
             <View style={{flex:1, justifyContent:'center'}}>
             <Icon name="ios-stats"/>
             </View>
           </View>
     </TouchableOpacity>

     )
 }

render(){

  // var urlHeader = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/header.jpg'
  //   urlHeader += '?random_number='+new Date().getTime()

    return(
<View style={{flex:1}}>
<MenuTop navigator={this.props.navigator}/>
<Cabeza fondo="ESCRITORIO" titulo="ESCRITORIOS"/>
  <View style={{flex:2, backgroundColor:'white'}}>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => this.renderElemento(rowData)}
    />
  </View>
  <Footer />
</View>
    )
  }

}
module.exports = dashboardView
