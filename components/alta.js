'use strict'

import React, {Component} from 'react'

import {
  Text,
  Image,
  View
} from 'react-native'

import {
  InputGroup,
  Icon,
  Input,
  Button,
} from 'native-base'

import * as firebase from 'firebase'

class Alta extends Component{
  constructor(props){
    super(props)
    this.state={
      usuario:'',
      nombre:'',
      pass:'',
      repass:'',
      mail:'',
      error:''
    }
  }
//FIREBASE

  render(){
    return(
      <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/loginBack.jpg'}} style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center', padding:60}}>

        <InputGroup borderType="underline" >
          <Icon name="ios-mail" style={{ color: 'white' }} />
          <Input
            placeholder={"Ingrese su mail"}
            onChangeText={(mail)=>{this.setState({mail})}}
            />
        </InputGroup>

        <InputGroup borderType="underline" >
          <Icon name="ios-key" style={{ color: 'white' }} />
          <Input
            placeholder={"Ingrese una Contraseña"}
            onChangeText={(pass)=>{this.setState({pass})}}
            />
        </InputGroup>

        <InputGroup borderType="underline" >
          <Icon name="ios-key" style={{ color: 'white' }} />
          <Input
            placeholder={"Repita su Contraseña"}
            onChangeText={(repass)=>{this.setState({repass})}}
            />
        </InputGroup>
        <Button block rounded style={{backgroundColor:'#ff6c6c', margin:15}} onPress={()=>this.onAlta()}> Crear Usuario </Button>

      <Text style={{color:'red', fontSize:20}}>{this.state.error}</Text>
      </Image>
    )
  }

  onAlta(){

    //Chequear si todos los campos estan commpletos
    //Chequear si los pass coninciden
    //Chequear si el mail ya existe
    console.log("on ALTA")
    this.setState({error:''})
    var mail =this.state.mail
    var pass =this.state.pass
    firebase.auth().createUserWithEmailAndPassword(mail,pass)
    .then(()=>{
      this.props.navigator.replace({
        title:'Login de Usuario',
        name:'Login',
        passProps:{}
      })
    })
    .catch((error)=>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      this.setState({error:error.message})
        //treducir los errores
      // ...
    });


  }

}

module.exports = Alta
