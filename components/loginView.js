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
<View style={styles.fondo}>
        <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/loginBack.jpg'}} style={styles.centradoContainer}>

          <View style={styles.unTercio}>
            <Text style={styles.aBienvenido}><H1>Bienvenido</H1></Text>
            <Text style={styles.aLogin}>a</Text>
            <Text style={styles.bhekelLogin}>Bhekel</Text>
          </View>
          <View style={styles.unTercio}>
            <Container>
              <Content>
                <InputGroup>
                  <Icon name="ios-contact" style={{ color: 'white' }} />
                  <Input placeholder="Usuario"/>
                </InputGroup>
                <InputGroup borderType="underline" >
                <Icon name="ios-key" style={{ color: 'white' }} />
                <Input placeholder="Contraseña" secureTextEntry={true} />
                </InputGroup>
              </Content>
            </Container>
          </View>
          <View style={styles.unTercio}>
            <Button block rounded style={{backgroundColor:'#ff6c6c'}} onPress={()=>this.onLogin("OFICIAL")}> Ingresar </Button>
          </View>
        </Image>
</View>

    )
}
onLogin(param){

  switch (param) {
    case "OFICIAL":{
      this.props.navigator.push({
        title:'Dashboard',
        name:'Dashboard',
        passProps:{}
      })
      break
    }

    case "TENIS":{
      this.props.navigator.push({
        title:'Ranking LTB',
        name:'Tenis',
        passProps:{}
      })
      break
    }

    case "VIDEOS":{
      this.props.navigator.push({
        title:'Videos',
        name:'Videos',
        passProps:{}
      })
      break
    }
  }
}
}


module.exports = loginView
