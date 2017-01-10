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
  Navigator,
  TouchableHighlight,
  ToolbarAndroid,
  TouchableOpacity,
} from 'react-native';

import { Container, List, ListItem, Grid, Col, Row, Card, CardItem, Thumbnail, Header, Content, Title, Button, Icon } from 'native-base';

import * as firebase from 'firebase'

const detalleElemento = require ('./detalleElementoView')
const Cabeza = require ('./cabezaView')
//const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/listamess.json'
const styles = require ('../styles')

const MenuTop = require('./menuTop')
const Footer = require('./footer')

class Listameses extends Component{
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
  /*
 fetch(REQUEST_URL)
 .then((response)=>response.json())
   .then((responseData)=>{
     firebase.database().ref('listameses').set(responseData)
    this.setState({
       dataSource: this.state.dataSource.cloneWithRows(responseData),
       loaded:true
     })
*/

     firebase.database().ref('listameses/').once('value')
     .then((snap)=>{
       this.setState({
         dataSource : this.state.dataSource.cloneWithRows(snap.val()),
       })
  //   })
   })
 }
//split array de donos

 onElementoPressed(elemento){
   this.props.navigator.push({
     name: 'Dashboard',
     passProps: {
       elemento: elemento,
       mes:elemento.id
     }

 })
 }
// //
 renderElemento(elemento){
   var urlImage = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/SantaCruzRank.png'
     urlImage += '?random_number='+new Date().getTime()
   return(
     <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
           <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:styles.constants.colorBase, margin:15}}>
             <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
             </View>
             <View style={{backgroundColor:styles.constants.colorBase, flex:2, alignItems:'center', padding:10, margin:5, borderRadius:5}}>
               <Text style={{fontSize:20, color:'white', fontWeight:'600'}}>{elemento.mesBhekel}</Text>
               <Text style={{fontSize:15, color:'white'}}>{elemento.mesGrego}</Text>
               <Text style={{fontSize:15, textAlign:'left'}}>{elemento.ano}</Text>
             </View>
             <View style={{flex:1, flexDirection:'column'}}>

             </View>
           </View>
     </TouchableOpacity>

     )
 }

render(){
//definir de donde viene, para devolver
  // var urlHeader = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/header.jpg'
  //   urlHeader += '?random_number='+new Date().getTime()

    return(
<View style={{flex:1}}>
<MenuTop navigator={this.props.navigator} title="Listado de Meses" color="#dd5d5d"/>
<Cabeza fondo="ESCRITORIO" titulo="Lista Meses"/>
  <View style={{flex:2, backgroundColor:'white'}}>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => this.renderElemento(rowData)}
    />
  </View>

</View>
    )
  }

}
module.exports = Listameses
