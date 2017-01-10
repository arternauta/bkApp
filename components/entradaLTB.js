import React,{Component} from 'react'

import {
  View,
  Text,
  Image,
  navigator,
} from 'react-native'

import * as firebase from 'firebase'

const MenuTop = require('./menuTop')

class EntradaLTB extends Component {
  femenino(){
    this.props.navigator.push({
      title:'TENIS Femenino',
      name:'TenisFemenino',
      passProps:{}
    })
  }

  masculino(){
    this.props.navigator.push({
      title:'TENIS MASCULINO',
      name:'Tenis',
      passProps:{}
    })
  }
  render(){
    return(
      <View style={{flex:1}}>
        <MenuTop navigator={this.props.navigator} title="Bienvenidos a la zona LTB" color="#34a4fa"/>
        <View style={{flex:1}}>
          <Image
            style={{flex:1, justifyContent:'flex-end'}}
            source={{uri:('https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Ffondos%2Fmasculino.jpg?alt=media&token=d7289f9e-d694-487f-ad69-717e77ba2adb')}}>
            <Text
              onPress={()=>this.masculino()}
              style={{fontSize:40, textAlign:'center', color:'white', fontWeight:'100'}}>
              RANKING MASCULINO
            </Text>
          </Image>
        </View>
        <View style={{flex:1}}
          >
          <Image
            style={{flex:1, justifyContent:'flex-end'}}
            source={{uri:('https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Ffondos%2Ffemenino.jpg?alt=media&token=48e23f51-901e-4d1b-8ada-c94527d036b8')}}>
            <Text onPress={()=>this.femenino()} style={{fontSize:40, textAlign:'center', color:'white', fontWeight:'100'}}>
              RANKING FEMENINO
            </Text>
          </Image>
        </View>

      </View>

    )
  }
}

module.exports = EntradaLTB
