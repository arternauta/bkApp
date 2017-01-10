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
} from 'react-native';

import { Container, List, ListItem, Grid, Col, Row, Card, CardItem, Thumbnail, Header, Content, Title, Button, Icon } from 'native-base';

const detalleElemento = require ('./detalleElementoView')
const Cabeza = require ('./cabezaView')
const styles = require ('../styles')
const MenuTop = require('./menuTop')
const Footer = require('./footer')
const RenderLista = require('./renderLista')

class dashboardView extends Component{
constructor(props){
  super(props)
}


//

//split array de donos

// //

render(){

  // var urlHeader = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/header.jpg'
  //   urlHeader += '?random_number='+new Date().getTime()

    return(
<View style={{flex:1}}>
  <MenuTop navigator={this.props.navigator} title="Ranking Escritorios" color="#dd5d5d"/>
  <Cabeza fondo="ESCRITORIO" titulo="ESCRITORIOS"/>
  <RenderLista navigator={this.props.navigator} nameSource="ESCRITORIOS" mes={this.props.route.passProps.mes}/>
  <Footer style={{flex:1}} icon1="ios-person" icon2="ios-calendar" navigator={this.props.navigator} origen="DISTRIBUIDORES" />
</View>
    )
  }

}
module.exports = dashboardView
