import React, {Component} from 'react'

import {
  Text,
  View,
  Image,
  Navigator,
  ScrollView,
} from 'react-native'

import {
  Icon,
  Header,
  Button,
  Title,

 } from 'native-base';

const routeador = require('../index.android')
const styles = require ('../styles')

class Menu extends Component{
popView(){
  this.props.navigator.pop()
}
  onLogin(param){
    switch (param) {
      case "OFFICIAL":{
        this.props.navigator.push({
          title:'OFFICIAL',
          name:'Dashboard',
          passProps:{
            mes:"ULTIMO"
          }
        })
        break
      }
      case "TENIS":{
        this.props.navigator.push({
          title:'ZONA LTB',
          name:'EntradaLTB',
          passProps:{}
        })
        break
      }
      case "UNIVERSITY":{
        this.props.navigator.push({
          title:'Bhekel University',
          name:'Videos',
          passProps:{}
        })
        break
      }
     case "DISTRIBUIDORES":{
        this.props.navigator.push({
          title:'Ranking Distribuidores',
          name:'Distribuidores',
          passProps:{}
        })
        break
      }
      case "ENCUESTAS":{
         this.props.navigator.push({
           title:'ENCUESTA DEL DIA',
           name:'Encuesta',
           passProps:{}
         })
         break
       }
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
      <Header backgroundColor={styles.constants.colorBase}>
        <Title>Menu General</Title>
      </Header>

      <Image source={{uri:('http://ranking.bhekel.com/bhekelApp/images/fondoMenu.jpg')}} style={{backgroundColor:'red', flex:1, alignItems:'center'}}>
        <ScrollView>
      <View style={{alignItems:'center'}}>
        <View style={{alignItems:'center', justifyContent:'center', margin:30}}>
          <Icon tranparent name="ios-podium-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("OFFICIAL")}/>
          <Text style={{color:'white', fontSize:20}}>RANKING ESCRITORIOS</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', margin:30}}>
          <Icon transparent name="ios-contacts-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("DISTRIBUIDORES")}/>
          <Text style={{color:'white', textAlign:'center', fontSize:20}}>RANKING DISTRIBUIDORES</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', margin:30}}>
          <Icon transparent name="ios-tennisball-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("TENIS")}/>
          <Text style={{color:'white', fontSize:20}}>ZONA L.T.B</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', margin:30}}>
          <Icon transparent name="ios-school-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("UNIVERSITY")}/>
          <Text style={{color:'white', fontSize:20}}>BHK UNIVERSITY</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', margin:30}}>
          <Icon transparent name="ios-film-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("HISTORY")}/>
          <Text style={{color:'white', fontSize:20}}>BHK HISTORY</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', margin:30}}>
          <Icon transparent name="ios-grid-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("ENCUESTAS")}/>
          <Text style={{color:'white', fontSize:20}}>ENCUESTAS</Text>
        </View>

      </View>
    </ScrollView>
      </Image>

    </View>
    )
  }
}
module.exports = Menu
