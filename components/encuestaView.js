//muestra el arte de la encuesta
// muestra el campo nombre
//muestra las opciones, si la persona no esta en las opciones, ver de agregar un campo extra

import React,{Component} from 'React'

const Item = Picker.Item;

import {
  View,
  Text,
  Image,
  navigator,
  Modal,
TouchableOpacity,
TouchableHighlight,
} from 'react-native'

import
{
Picker,
List,
Input,
InputGroup,
ListItem,
Icon,
Button,
} from 'native-base'

import * as firebase from 'firebase'
const MenuTop = require('./menuTop')

class Encuesta extends Component{
  constructor(props){
    super(props)
    this.state = {
           nEncuesta:'',
           modalVisible: false,
           imagen:'https://firebasestorage.googleapis.com/v0/b/bhekel-51204.appspot.com/o/misc%2Fencuesta_fondo.jpg?alt=media&token=2c84c8cf-071f-429c-8b31-ea90b9201f04',
           candidatos:'',
           abierta:'',
           items:['uno','dos','tres'],
           selectedItem: undefined,
           selected1: 'NINGUNO',
           suNombre: '',
           disabled:false,
           alerta:'INGRESA TU NOMBRE',
           results: {
               items: [],
           },
         }


  }

setModalVisible(visible) {
  this.setState({modalVisible: visible});
  this.props.navigator.push({
    title:'ENCUESTA',
    name:'Encuesta',
    passProps:{
      mes:"ULTIMO"
    }
  })
}



  componentDidMount(){
    var ref = firebase.database().ref('encuestas/daParaRefrescar')

    ref.on('value',(snap)=>{
      banderaRefrescar = snap.val().daParaRefrescar
      switch (banderaRefrescar) {
        case 'si':


        var ref = firebase.database().ref('encuestas')
        ref.once('value',(snap)=>{
          snap.forEach((childSnap)=>{
            var encuestaAbierta = childSnap.val().abierta
            if(encuestaAbierta){
              var aCandidatos = childSnap.val().candidatos.split(',')
              console.log(aCandidatos)
                this.setState({
                  items: aCandidatos,
                  nEncuesta: childSnap.val().nEncuesta

                })
            }
          })

        })


          break;
        case 'limpiar':
          this.setState({
            nEncuesta:'NINGUNA ENCUESTA CARGADA',
            items:['NINGUNA ENCUESTA CARGADA']
          })

      }





    })
  }
votarPressed(){
  if(this.state.suNombre == ''){
    this.setState({
      alerta:'DEBES INGRESAR TU NOMBRE'
    })
  }else{
    var ref = firebase.database().ref('encuestas/resultados/'+this.state.nEncuesta)
    ref.push({
      nombre:this.state.suNombre,
      votoPor:this.state.selected1
    })
    this.setModalVisible(true)
  }

}
  onValueChange(value: string) {
    this.setState({
        selected1: value,
    });

}
enviarVoto(){

  console.log("aprete boton")
  this.setState={
    ustedVotoPor: this.state.selected1
  }

}

//Cargar el objeto encuestas
//
  render(){
    return(
        <View style={{flex:1, backgroundColor:'gainsboro'}}>
        <MenuTop navigator={this.props.navigator} title="Zona Encuestas" color="#dd5d5d"/>
        <Image source={{uri:this.state.imagen}} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:25, elevation:2, color:'white',fontWeight:'600',textAlign:'center'}}>{this.state.nEncuesta}</Text>
        </Image>
        <View style={{padding:15}}>
        <InputGroup  bordertype='regular'>
        <Input
        onChangeText={(suNombre)=>this.setState({suNombre})}
        placeholder={this.state.alerta}
        />
        </InputGroup>


</View>
<List>
        <ListItem iconLeft>
            <Icon name="ios-person" style={{ color: 'black' }} />
            <Text> Elige un candidato</Text>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)} >
              {this.state.items.map((s)=>{
                return <Item label={s} value={s} key={s}/>
              })}
            </Picker>
        </ListItem>
</List>

    <View style={{justifyContent:'center', flexDirection:'row', alignItems:'center', flex:1}}>
<TouchableOpacity disabled={this.state.disabled} onPress={this.votarPressed.bind(this)}>
      <View style={{backgroundColor:'salmon',height:100, width:100, borderRadius:50, alignItems:'center', justifyContent:'center', elevation:5, margin:20 }}>
        <Text style={{fontSize:15,fontWeight:'900', color:'whitesmoke'}}>VOTAR</Text>
      </View>
</TouchableOpacity>
    </View>

    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {

        this.props.navigator.push({
          title:'ENCUESTA',
          name:'Encuesta',
          passProps:{
            mes:"ULTIMO"
          }
        })
        this.setState({modalVisible: false})
      }}
      >
     <View style={{flex:1}}>
      <View style={{alignItems:'center', justifyContent:'center', flexDirection:'column', backgroundColor:'gainsboro', flex:1}}>
        <Text>SU VOTO FUE PARA..</Text>

        <Text style={{fontSize:25}}>{this.state.selected1}</Text>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(!this.state.modalVisible)
        }}>
          <View style={{backgroundColor:'lightblue', borderRadius:20, padding:10 }}><Text>VOLVER A LA PANTALLA DE ENCUESTA</Text></View>
        </TouchableHighlight>

      </View>
     </View>
    </Modal>

        </View>
    )
  }
}

module.exports = Encuesta
