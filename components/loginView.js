'use strict'

import React, { Component } from 'react';
import * as firebase from 'firebase'
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
  TextInput,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Image,
 AsyncStorage,
} from 'react-native';


//FIREBASE
const FirebaseConfig = {
  apiKey: "AIzaSyAKu-VdPJOSD-ix-yCOGAeKqykJPqaAgaU",
  authDomain: "bhekel-51204.firebaseapp.com",
  databaseURL: "https://bhekel-51204.firebaseio.com",
  storageBucket: "bhekel-51204.appspot.com",
  messagingSenderId: "931255684939"
};
firebase.initializeApp(FirebaseConfig)


//VISTAS


const styles = require('../styles')

class loginView extends Component{
  /*
  componentDidMount(){
      database.once('value')
      .then((snap)=>{
        console.log(snap.val())
      })

  }
  */
  constructor(props){
    super(props)
    this.state={
      mail:'',
      pass:'',
      error:''
    }
  }


  componentDidMount(){

    try {
        AsyncStorage.getItem('userID',(err,result)=>{
            if(result){
              //get credentials
              //this.setState({error:result})
              this.props.navigator.push({
                title:'MENU',
                name:'Menu',
                passProps:{}
              })
            }
          })
        } catch (e) {
        }
  }

  render(){

//chequear el cache de usuerio
return(
      <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/loginBack.jpg'}} style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center', padding:60}}>
        <Text><H1>Bienvenido</H1></Text>
        <Text>a</Text>
        <Text style={styles.bhekelLogin}>Bhekel</Text>
            <InputGroup>
              <Icon name="ios-contact" style={{ color: 'white' }} />
              <Input
                onChangeText={(mail)=>this.setState({mail})}
                value={this.state.usuario}
                placeholder="Usuario"/>
            </InputGroup>
            <InputGroup borderType="underline" >
            <Icon name="ios-key" style={{ color: 'white' }} />
            <Input
              onChangeText={(pass)=>this.setState({pass})}
              value={this.state.pass}
              placeholder="Contraseña" secureTextEntry={true} />
            </InputGroup>
            <Text>{this.state.error.toString()}</Text>
        <Button block rounded style={{backgroundColor:'#ff6c6c', margin:15}} onPress={()=>this.onLogin("MENU")}> Ya soy Usuario </Button>
        <Text underline style={{margin:15, color:'#ff6c6c'}} onPress={()=>this.onAlta("ALTA")}> Crear Usuario </Text>
    </Image>
    )
}
//Ese usuario no esta registrado, desea registrarlo?
onAlta(param){
    this.props.navigator.push({
      title:"Registro de nuevo Usuario",
      name:"Alta",
      passProps:{}
    })
}

onLogin(){
this.setState({error:''})
var mail = this.state.mail
var pass = this.state.pass

  firebase.auth().signInWithEmailAndPassword(mail, pass).then(
    ()=>{
      this.setState({error:"ningun error"})
      this.props.navigator.replace({
        title:'MENU',
        name:'Menu',
        passProps:{}
      })
      var user = firebase.auth().currentUser
      //mandando el nombre al cache
      try {
        AsyncStorage.setItem('userID',user.uid)
      } catch (e) {

      }

    }
  ).catch((error)=>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    this.setState({error:error.message})

  });

}
}


module.exports = loginView
