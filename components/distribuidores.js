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
  AsyncStorage,
} from 'react-native';

import { Container, List, ListItem, Grid, Col, Row, Card, CardItem, Thumbnail, Header, Content, Title, Button, Icon } from 'native-base';

import * as firebase from 'firebase'

const detalleElemento = require ('./detalleElementoView')
const Cabeza = require ('./cabezaView')
//const REQUEST_URL = 'http://ranking.bhekel.com/noviembre/distribuidores.json'
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
    loaded:false,
    nombreMes:''
  }
}

componentDidMount(){
   this.fetchData()
}
//
fetchData(){
  //AsyncStorage.removeItem('mesDistribuidorCacheado')
  try {
    AsyncStorage.getItem('nombreMesDistribuidor',(err,result)=>{
      this.setState({
        nombreMes:result
      })
    })
    AsyncStorage.getItem('mesDistribuidorCacheado',(err,result)=>{
      if(result){
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(JSON.parse(result))
        })
      }else{

        var ref = firebase.database().ref('distribuidores/').limitToLast(1)
        .once('value',(snap)=>{
          snap.forEach((childKey)=>{
            var ref = firebase.database().ref('distribuidores/'+childKey.key)
            var mesConvertido = "Mes Bhekel N°" +childKey.key.slice(0,-4)
            ref.once('value',(snap)=>{
              console.log("FETCHE")
              this.setState({
                dataSource : this.state.dataSource.cloneWithRows(snap.val()),
                nombreMes: mesConvertido
              })
              try {
                var mesDistribuidor = JSON.stringify(snap.val())
                AsyncStorage.setItem('mesDistribuidorCacheado',mesDistribuidor)
                AsyncStorage.setItem('nombreMesDistribuidor', mesConvertido)
              } catch (e) {
                console.log(e)
              }
            })
          })
        })

      }
    })
  }catch(e){
    console.log(e)
  }
  /*
  fetch(REQUEST_URL)
  .then((response)=>response.json())
  .then((responseData)=>{
   firebase.database().ref('distribuidores/122016').set(responseData)
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(responseData),
       loaded:true
     })
*/




//     })

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
   return(
     <TouchableOpacity>
           <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:styles.constants.colorBase, margin:15}}>
             <View style={{backgroundColor:styles.constants.colorBase, flex:1, alignItems:'center', padding:10, margin:5, borderRadius:5}}>
               <Text style={{fontSize:20, color:'white'}}>{elemento.Puesto}</Text>
             </View>
             <View style={{flex:3}}>
               <Text style={{fontSize:16, color:'black', fontWeight:'600'}}>{elemento.Nombre}</Text>
               <Text style={{fontSize:14, color:'black', fontWeight:'600'}}>{elemento.Puntos} puntos</Text>
             </View>
             <View style={{flex:4}}>
               <Text style={{fontSize:12}}>{elemento.Escritorio}</Text>
               <Text style={{fontSize:10}}>{elemento.Pais}</Text>
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
<MenuTop navigator={this.props.navigator} title="Ranking Escritorios" color="#dd5d5d"/>
<Cabeza fondo="ESCRITORIO" titulo="DISTRIBUIDORES"/>
  <Text style={{padding:10, fontSize:20, textAlign:'center'}}>{this.state.nombreMes}</Text>
  <View style={{flex:2, backgroundColor:'white'}}>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => this.renderElemento(rowData)}
    />
  </View>
  <Footer icon1="ios-people" icon2="ios-calendar" navigator={this.props.navigator}/>
</View>
    )
  }

}
module.exports = dashboardView
