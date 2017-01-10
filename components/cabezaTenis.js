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

 import * as firebase from 'firebase'

//Obtener la Horario
//Case para el icono a mostrar

//RECIBE EL PRIMER OBJETO DEL ARRAY DE PARTICIPANTES
//RESALTA EL PARTICIPANTE ELEGIDO (MODIFICA LA PROPIEDAD EN EL OBJETO)


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

//var storage = firebase.storage();
//var storageRef = storage.ref();
//var spaceRef = storageRef.child('tenis/masculino/Bhekel.jpg');
//var url = spaceRef.getDownloadURL()




//var gsReference = storage.refFromURL(spaceRef)

//console.log(gsReference)

//Case para Mostrar fondo


class CabezaTenis extends Component{
  constructor(props){
    super(props)
    this.state = {
      titulo: "",
      fondo:"https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Fmasculino%2FBhekel.jpg?alt=media&token=ae57e408-cdb6-4f70-9199-d94c0c4c229a",
      nombre:"",
      pais:"",
      puesto:"",
      edad:"",
      altura:"",
      paisOrigen:"",
      juego:"",
      categoria:"",
      foto:"https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Fmasculino%2Fdefaultplayer.png?alt=media&token=5f159ef6-3592-496a-95f0-f219e340aff5"
    }

}


componentDidMount(){
/*
myTimer = setInterval(()=>{
    var hB = moment().tz("America/Sao_Paulo").format('h:mm:ss')
    var hLP = moment().tz("America/La_Paz").format('h:mm:ss')
    var hAs = moment().tz("America/Asuncion").format('h:mm:ss')
    this.setState({ horarioBrasilia: hB, horarioLaPaz: hLP , horarioAsuncion: hAs})
  },1000)
*/

}
componentWillUnmount(){

}
  render(){
    return(
      <View style={{ flex:1, elevation:2}}>
        <Image style={{flex:1, flexDirection:'row'}} source={{uri:this.state.fondo}}>
          <View style={{position:'absolute', top: 0, left: 0, width: 400, height: 500, backgroundColor:'black', opacity:.3 }}>
          </View>

          <View style={{flexDirection:'row', position:'absolute', left:10, margin:10}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Text style={{fontSize:40, fontWeight:'800', color:'white'}}>{this.props.elemento.puesto}</Text>
              <Text style={{fontSize:20, fontWeight:'300', color:'white'}}>PUESTO</Text>
              <Text style={{fontSize:15, color:'white'}}>{this.props.elemento.puntos} PUNTOS</Text>
              <Image style={{height:40, width:60}} source={{uri:this.props.elemento.fondo}}/>
              <Text style={{fontSize:10, color:'white'}}>{this.props.elemento.pais}</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Text style={{fontSize:30, opacity:1, fontWeight:'600', color:'white'}}>{this.props.elemento.nombre}</Text>
                <Text style={{fontSize:15, color:'white'}}>{this.props.elemento.edad}</Text>
                <Text style={{fontSize:15, color:'white'}}>{this.props.elemento.altura}</Text>
                <Text style={{fontSize:15, color:'white'}}>{this.props.elemento.juego}</Text>
            </View>
          </View>
          <Image style={{width:100, height:170, position:'absolute', right:15}} source={{uri:this.props.elemento.foto}}>
          </Image>
        </Image>
      </View>
    )
  }
}

module.exports = CabezaTenis
