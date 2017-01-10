import React, {Component} from 'react'

import {
  Navigator,
  View,
  Text,
} from 'react-native'

import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Title,
}from 'native-base'


const styles = require('../styles')

class FooterView extends Component{
  popView(){
    this.props.navigator.pop()
  }

selector(elemento){
  console.log(elemento)
  switch (elemento) {
    case "ios-calendar":
    this.props.navigator.push({
      title:'Listado de Meses',
      name:'Listameses',
      passProps:{origen:this.props.origen}
    })
    break;
    case "ios-person":
    this.props.navigator.push({
      title:'DISTRIBUIDORES',
      name:'Distribuidores',
      passProps:{origen:this.props.origen}
    })
    break
    case "ios-people":
    this.props.navigator.push({
      title:'ESCRITORIOS',
      name:'Dashboard',
      passProps:{
        mes:"ULTIMO"
      }
    })
    break
  }


}

  render(){
    return(
      <View backgroundColor={styles.constants.colorBase} style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Button transparent navigator={this.props.navigator} onPress={()=>this.selector(this.props.icon1)} style={{alignItems:'center', flexDirection:'column', flex: 1, padding:5, margin:5}}>
          <Icon name={this.props.icon1} style={{color:'white', padding:5}}/>
        </Button>
      </View>
    )
  }
}

module.exports = FooterView
