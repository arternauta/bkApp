import React, {Component} from 'react'

import {
  Navigator,
} from 'react-native'

import {
  Header,
  Button,
  Icon,
  Title,
}from 'native-base'


const styles = require('../styles')

class MenuTop extends Component{
  popView(){
    this.props.navigator.pop()
  }
alMenu(){
  this.props.navigator.push({
    title:'MENU',
    name:'Menu',
    passProps:{}
  })
}
  render(){
    return(
      <Header backgroundColor={this.props.color}>
        <Button transparent onPress={()=>this.popView()}>
          <Icon name='ios-arrow-back'/>
        </Button>
        <Title>{this.props.title}</Title>
          <Button transparent>
            <Icon name='ios-menu' onPress={()=>this.alMenu()}/>
          </Button>
      </Header>
    )
  }
}

module.exports = MenuTop
