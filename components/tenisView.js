'use strict'

import React, {Component} from 'react'

import {
  Text,
  View,
  Navigator,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native'

import {
  Icon,
  Footer,
  FooterTab,
  Button,
  Container,
} from 'native-base'

import * as firebase from 'firebase'

const Cabeza = require('./cabezaView')
const CabezaTenis = require('./cabezaTenis')
const MenuTop = require('./menuTop')
const styles = require('../styles')
//const Footer = require('./footer')
var ref = firebase.database().ref('tenis/masculino')


//var jsonData = [{"fechaInicio":"",fondo:"https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Ffondos%2FBolivia.jpeg?alt=media&token=0052e16d-79c8-490b-baa8-55c2ef3d22b7","puesto":"1","nombre":"Arlindo","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/tenis%2Fmasculino%2Farlindo.png?alt=media&token=3165b089-b95a-4528-9e88-8ef6be62b896","puntos":"3000","categoria":""},{"fechaInicio":"","puesto":"2","nombre":"Adolfino","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"adolfino","puntos":"2000","categoria":""},{"fechaInicio":"","puesto":"3","nombre":"Pablo","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"pablo","puntos":"1800","categoria":""},{"fechaInicio":"","puesto":"4","nombre":"Javier","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"javier","puntos":"1200","categoria":""},{"fechaInicio":"","puesto":"5","nombre":"Gustavo","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"gustavo","puntos":"1080","categoria":""},{"fechaInicio":"","puesto":"6","nombre":"Juan","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"juan","puntos":"1000","categoria":""},{"fechaInicio":"","puesto":"7","nombre":"Ruben","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"ruben","puntos":"720","categoria":""},{"fechaInicio":"","puesto":"8","nombre":"Matias","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"matias","puntos":"720","categoria":""},{"fechaInicio":"","puesto":"9","nombre":"Wislley","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"wislley","puntos":"600","categoria":""},{"fechaInicio":"","puesto":"10","nombre":"Cassiano","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"cassiano","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"11","nombre":"Nahir","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"nahir","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"12","nombre":"Cesar","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"cesar","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"13","nombre":"David","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"david","puntos":"360","categoria":""},{"fechaInicio":"","puesto":"14","nombre":"Diogo","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"diogo","puntos":"360","categoria":""},{"fechaInicio":"10/21/16","puesto":"15","nombre":"Ezequiel","pais":"Brasil","edad":"1983","altura":"1.83","nacimiento":"Argentina","juego":"Diestro","foto":"ezequiel","puntos":"360","categoria":"\"C\" MASCULINO"},{"fechaInicio":"","puesto":"16","nombre":"Gaston","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"gaston","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"17","nombre":"Pedro","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"pedro","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"18","nombre":"Alexis","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"alexis","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"19","nombre":"David C","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"davidc","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"20","nombre":"Mateo","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"mateo","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"21","nombre":"Ewerton","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"ewerton","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"22","nombre":"Gabriel","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"gabriel","puntos":"180","categoria":""},{"fechaInicio":"","puesto":"23","nombre":"Arnaldo","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"arnaldo","puntos":"90","categoria":""},{"fechaInicio":"","puesto":"24","nombre":"Ailton","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"ailton","puntos":"90","categoria":""},{"fechaInicio":"","puesto":"25","nombre":"Robson","pais":"Brasil","edad":"","altura":"","nacimiento":"","juego":"","foto":"robson","puntos":"90","categoria":""},{"fechaInicio":"","puesto":"26","nombre":"Agustin","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"agustin","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"27","nombre":"Ale M","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"alem","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"28","nombre":"Ale Valdez","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"alevaldez","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"29","nombre":"Dani Rodas","pais":"Paraguay","edad":"","altura":"","nacimiento":"","juego":"","foto":"danirodas","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"30","nombre":"Derlis","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"derlis","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"31","nombre":"Ernesto","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"ernesto","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"32","nombre":"Eugenio","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"eugenio","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"33","nombre":"Gabi M","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"gabim","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"34","nombre":"Ilde","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"ilde","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"35","nombre":"Lautaro","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"lautaro","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"36","nombre":"Leo M","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"leom","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"37","nombre":"Luis Carlos","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"luiscarlos","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"38","nombre":"Nahuel","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"nahuel","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"39","nombre":"Nicolas","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"nicolas","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"40","nombre":"Santiago","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"santiago","puntos":"0","categoria":""},{"fechaInicio":"","puesto":"41","nombre":"Victor","pais":"Bolivia","edad":"","altura":"","nacimiento":"","juego":"","foto":"victor","puntos":"0","categoria":""}]
//ref.set(jsonData)

class tenisView extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      }),
      loaded:false,
      elemento:""
    }
  }
  componentDidMount(){
     this.fetchData()
  }
  fetchData(){
    ref.on('value',(snap)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(snap.val()),
        loaded:true
    })
    })

   }
   irFemenino(){
     this.props.navigator.push({

       title:'Tenis Femenino',
       name:'TenisFemenino',
       passProps:{}
   })
 }

onElementoPressed(elemento){
  this.setState({
    elemento: elemento
  })
}
   renderElemento(elemento){
     console.log(elemento.fondo)
     return(
       <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
             <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:styles.constants.colorBase, margin:15}}>
               <View style={{flex:1, justifyContent:'center', backgroundColor:'#32f81d', padding:5, borderRadius:20, margin:15}}>
                  <Text style={{textAlign:'center', fontSize:15, color:'white', fontWeight:'800'}}>{elemento.puesto}</Text>
               </View>
                 <Image source={{uri:elemento.foto}} style={{flex:1, alignItems:'center', padding:10, margin:5, height:60, borderRadius:30}} />
               <View style={{flex:6, alignItems:'flex-start', justifyContent:'center', flexDirection:'column'}}>
                 <Text style={{fontSize:16, color:'black', fontWeight:'600'}}>{elemento.nombre}</Text>
                 <Text style={{fontSize:13, textAlign:'left', fontWeight:'600'}}>{elemento.puntos} Puntos</Text>
               </View>
               <Text style={{textAlign:'center', fontSize:15, fontWeight:'800'}}>Categoria: {elemento.categoria}</Text>
               </View>

       </TouchableOpacity>

       )
   }

  render(){
    return(

      <View style={{flex:1}}>
        <MenuTop navigator={this.props.navigator} title="Ranking LTB Masculino" color="#01a9bd"/>
        <CabezaTenis style={{flex:2}} fondo="TENISMASCULINO" titulo="MASCULINO" elemento={this.state.elemento}/>
        <View style={{flex:2, backgroundColor:'white'}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderElemento(rowData)}
          />
        </View>
        <View style={{backgroundColor:'#01a9bd',flexDirection:'row', justifyContent:'space-around'}}>
          <View>
            <Button transparent textStyle={{color:'white'}} onPress={()=>{this.irFemenino()}}>
              FEMENINO
              <Icon style={{color:'white'}} name='ios-female' />
            </Button>
          </View>
          <View>
            <Button textStyle={{color:'white'}} transparent>
              NOTICIAS
              <Icon style={{color:'white'}} name='ios-globe' />
            </Button>
          </View>
        </View>
      </View>

    )
  }
}

module.exports = tenisView
