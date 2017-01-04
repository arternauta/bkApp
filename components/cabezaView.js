
import React, {Component} from 'react'

import{
  View,
  Text,
  Image,
}from 'react-native'

 import{
   Icon,
   Header,
   Button,
   Title,
 } from 'native-base'
//Obtener la Horario
//Case para el icono a mostrar

const moment = require('moment')
const tz = require('moment-timezone')
const styles = require ('../styles')

require('moment/locale/pt')
moment.locale('es')

var diaSemana = moment().format("dddd");
var dia = moment().format("DD");
var mes = moment().format("MMMM")
var ano = moment().format("YYYY")
var primerDia = moment("20161020", "YYYYMMDD")

//fondo = 'http://ranking.bhekel.com/bhekelApp/images/fondoRanking.jpg'

//var saoPaulo = moment.tz("2014-10-01 12:00:00", "America/Sao_Paulo").toISOString()

//Case para Mostrar fondo
function elegirFondo(propiedad){
  switch(propiedad){
    case 'ESCRITORIO':{
      return 'http://ranking.bhekel.com/bhekelApp/images/fondoRanking.jpg'
      break
    }
    case "TENISMASCULINO":{
      return 'http://www.tennis.com.au/wp-content/uploads/2013/12/f4-700x450.jpg'
      break
    }
  }
}

class cabezaView extends Component{
  constructor(props){
    super(props)
    this.state = {
      horarioBrasilia : '00:00:00',
      horarioLaPaz : '00:00:00',
      titulo: ""
    }
}

componentDidMount(){
myTimer = setInterval(()=>{
    var hB = moment().tz("America/Sao_Paulo").format('h:mm:ss')
    var hLP = moment().tz("America/La_Paz").format('h:mm:ss')
    var hAs = moment().tz("America/Asuncion").format('h:mm:ss')
    this.setState({ horarioBrasilia: hB, horarioLaPaz: hLP , horarioAsuncion: hAs})
  },1000)
}

componentWillUnmount(){
  clearInterval(myTimer)
}
  render(){
    return(
      <View style={{ flex:1, elevation:2}}>
        <Image style={{flex:1, flexDirection:'column', justifyContent:'center'}} source={{uri:elegirFondo(this.props.fondo)}}>
          <View style={{alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:25, color:'#c0392b'}}>RANKING</Text>
            </View>
            <Icon name="ios-stats" style={{fontSize:50, color:'black'}}/>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:25, color:'#c0392b'}}>{this.props.titulo}</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'800', color:'black'}}> {diaSemana},{dia} de {mes} de {ano}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Text style={{fontSize:10}}>{this.state.horarioBrasilia} en Brasilia - </Text>
              <Text style={{fontSize:10}}>{this.state.horarioAsuncion} en Paraguay - </Text>
              <Text style={{fontSize:10}}>{this.state.horarioLaPaz} en Bolivia</Text>
          </View>
        </Image>
      </View>
    )
  }
}

module.exports = cabezaView
