'use strict'

import React, { Component } from 'react';
import { Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Button,
  H1,
 } from 'native-base';

import {
  AppRegistry,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';

const styles = require('../styles')


class loginView extends Component{
  render(){

return(
        <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/loginBack.jpg'}} style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center', padding:60}}>
            <Text><H1>Bienvenido</H1></Text>
            <Text>a</Text>
            <Text style={styles.bhekelLogin}>Bhekel</Text>
                <InputGroup>
                  <Icon name="ios-contact" style={{ color: 'white' }} />
                  <Input placeholder="Usuario"/>
                </InputGroup>
                <InputGroup borderType="underline" >
                <Icon name="ios-key" style={{ color: 'white' }} />
                <Input placeholder="Contraseña" secureTextEntry={true} />
                </InputGroup>
            <Button block rounded style={{backgroundColor:'#ff6c6c', margin:15}} onPress={()=>this.onLogin("MENU")}> Ingresar </Button>
        </Image>
    )
}
onLogin(param){
  switch (param) {
    case "MENU":{
      this.props.navigator.push({
        title:'MENU',
        name:'Menu',
        passProps:{}
      })
      break
    }
  }
}
}


module.exports = loginView
