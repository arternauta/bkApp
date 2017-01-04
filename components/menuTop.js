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
    clearInterval(myTimer)
  }

  render(){
    return(
      <Header backgroundColor={this.props.color}>
        <Button transparent onPress={()=>this.popView()}>
          <Icon name='ios-arrow-back'/>
        </Button>
        <Title>Ranking Escritorios</Title>
          <Button transparent>
            <Icon name='ios-menu'/>
          </Button>
      </Header>
    )
  }
}

module.exports = MenuTop
