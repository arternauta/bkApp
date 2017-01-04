import React, {Component} from 'react'

import {
  Text,
  View,
  Image,
  Navigator,
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
          passProps:{}
        })
        break
      }
      case "TENIS":{
        this.props.navigator.push({
          title:'ZONA LBT',
          name:'Tenis',
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
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
      <Header backgroundColor={styles.constants.colorBase}>
        <Title>Menu General</Title>
      </Header>

      <Image source={{uri:('http://ranking.bhekel.com/bhekelApp/images/fondoMenu.jpg')}} style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center', padding:60}}>
      <View style={{flex:1, alignItems:'center'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Icon tranparent name="ios-podium-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("OFFICIAL")}/>
          <Text style={{color:'white', fontSize:20}}>RANKING OFICIAL</Text>
        </View>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Icon transparent name="ios-tennisball-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("TENIS")}/>
          <Text style={{color:'white', fontSize:20}}>ZONA L.B.T</Text>
        </View>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Icon transparent name="ios-school-outline" style={{color:'white', fontSize:60}} onPress={()=>this.onLogin("UNIVERSITY")}/>
          <Text style={{color:'white', fontSize:20}}>Bhekel University</Text>
        </View>
      </View>
      </Image>
    </View>
    )
  }
}
module.exports = Menu
