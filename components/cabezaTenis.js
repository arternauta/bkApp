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
      fondo:"https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Ffondos%2FBhekel.jpg?alt=media&token=58be9706-a8ae-4e26-9f0e-ac8ea1e3ed85",
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

static get defaultProps() {
    return {
      foto:'https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Ffondos%2FBhekel.jpg?alt=media&token=58be9706-a8ae-4e26-9f0e-ac8ea1e3ed85'
    }
  }


componentDidMount(){
  /*
  var objeto = '[{"fechaInicio":"","puesto":"1","nombre":"Cileide","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"3000","categoria":""},{"fechaInicio":"","puesto":"2","nombre":"Asuncion","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"2000","categoria":""},{"fechaInicio":"","puesto":"3","nombre":"Lorena","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"1800","categoria":""},{"fechaInicio":"","puesto":"4","nombre":"Andrea","pais":"Bolivia","edad":"20","altura":"1.52","nacimiento":"Argentina","juego":"Diestro","foto":"","puntos":"1200","categoria":"B"},{"fechaInicio":"","puesto":"5","nombre":"Romina","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"1080","categoria":""},{"fechaInicio":"","puesto":"6","nombre":"Flaviana","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"1080","categoria":""},{"fechaInicio":"","puesto":"7","nombre":"Veronica","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"720","categoria":""},{"fechaInicio":"","puesto":"8","nombre":"Sonia","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"720","categoria":""},{"fechaInicio":"","puesto":"9","nombre":"Fatima","pais":"Bolivia","edad":"","altura":"","nacimiento":"Paraguay","juego":"","foto":"","puntos":"540","categoria":""},{"fechaInicio":"","puesto":"10","nombre":"Melisa","pais":"Brasil","edad":"3/14/86","altura":"1.49","nacimiento":"Argentina","juego":"Diestro","foto":"","puntos":"540","categoria":"A"},{"fechaInicio":"","puesto":"11","nombre":"Araceli","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"12","nombre":"Cecilia","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"13","nombre":"Mixelle","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"","nombre":"","pais":"","edad":"","altura":"","nacimiento":"","juego":"","foto":"","puntos":"","categoria":""}]'
  var ref = firebase.database().ref('tenis/femenino')
  ref.set(JSON.parse(objeto))

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

  if(this.props.elemento.foto != ""){
    this.setState({
      foto: this.props.elemento.foto
    })
  }

}
  render(){
    return(

        <Image style={{flex:1, flexDirection:'row'}} source={{uri:this.state.fondo}}>
          <View style={{flex:2}}>
            <View style={{position:'absolute', top: 0, left: 0, width: 400, height: 400, backgroundColor:'black', opacity:.3 }}>
            </View>
          </View>
          <View style={{flex:2}}>
            <Image style={{flex:3, height:10}} source={{uri:this.props.elemento.foto}}>
            </Image>
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
        </Image>

    )
  }
}

module.exports = CabezaTenis
