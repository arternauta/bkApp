//muestra el arte de la encuesta
// muestra el campo nombre
//muestra las opciones, si la persona no esta en las opciones, ver de agregar un campo extra

import React,{Component} from 'React'

const Item = Picker.Item;

import {
  View,
  Text,
  Image,
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


class Encuesta extends Component{
  constructor(props){
    super(props)
    this.state = {
           selectedItem: undefined,
           selected1: 'NINGUNO',
           suNombre: '',
           results: {
               items: [],
           },
         }
  }
  onValueChange(value: string) {
    this.setState({
        selected1: value,
    });

}
enviarVoto(){
  this.setState={
    ustedVotoPor: this.state.selected1
  }
}
  render(){
    return(
        <View style={{flex:1}}>
        <Image source={{uri:'https://media.licdn.com/mpr/mpr/p/8/005/0ac/089/16dde75.jpg'}} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'600',textAlign:'center'}}>Gerente de Marketing</Text>
        </Image>
        <InputGroup  bordertype="regular">
        <Input
        onChangeText={(suNombre)=>this.setState({suNombre})}
        />
        </InputGroup>
        <View style = {{ flex:2}}>
          <List>
                  <ListItem iconLeft>

                      <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                      <Text>GERENTE MARKETING</Text>
                      <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)} >
                          <Item label="NINGUNO" value="NINGUNO" />
                          <Item label="EZEQUIEL FLORES" value="EZEQUIEL" />
                          <Item label="MARTIN MARCIANO" value="MARTIN" />
                          <Item label="SOLEDAD SOLITA" value="SOLEDAD" />
                          <Item label="ARMANDO MESAS" value="ARMANDO" />
                      </Picker>
                  </ListItem>
          </List>
          <Button rounded onPressed={()=>{enviarVoto()}}>VOTAR</Button>
    </View>
    <Text>Su nombre es: {this.state.suNombre}</Text>
    <Text>USTED VOTO POR {this.state.selected1}</Text>
        </View>
    )
  }
}

module.exports = Encuesta
