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
    clearInterval(myTimer)
  }

  render(){
    return(
      <View backgroundColor={styles.constants.colorBase} style={{flexDirection:'row', padding:10}}>
          <Icon name='ios-film'  style={{flex:1, textAlign:'center', color:'white', borderRightWidth:1, borderColor:'white'}}/>
          <Icon name='ios-tennisball' style={{flex:1, textAlign:'center', color:'white'}}/>
      </View>
    )
  }
}

module.exports = FooterView
