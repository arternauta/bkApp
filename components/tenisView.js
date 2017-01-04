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
  Icon
} from 'native-base'

const Cabeza = require('./cabezaView')
const MenuTop = require('./menuTop')
const styles = require('../styles')
const Footer = require('./footer')

const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/tenis.json'



class tenisView extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      }),
      loaded:false
    }
  }
  componentDidMount(){
     this.fetchData()
  }
  fetchData(){
     fetch(REQUEST_URL)
     .then((response)=>response.json())
     .then((responseData)=>{
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(responseData),
         loaded:true
       })
     })
   }

   renderElemento(elemento){
     var urlImage = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/SantaCruzRank.png'
       urlImage += '?random_number='+new Date().getTime()
     return(
       <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
             <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:styles.constants.colorBase, margin:15}}>
                 <Image source={{uri:('http://ranking.bhekel.com/bhekelApp/images/tenis/arlindo.jpg')}} style={{flex:1, alignItems:'center', padding:5, margin:5, height:40, borderRadius:20}} />
               <View style={{flex:6, alignItems:'flex-start', justifyContent:'center', flexDirection:'column'}}>
                 <Text style={{fontSize:16, color:'black', fontWeight:'600'}}>{elemento.nombre}</Text>
                 <Text style={{fontSize:13, textAlign:'left', fontWeight:'600'}}>{elemento.puntos} Puntos</Text>
               </View>
               <View style={{flex:1, justifyContent:'center'}}>
               <Icon name="ios-stats"/>
               </View>
               <View style={{flex:1, justifyContent:'center', backgroundColor:'#32f81d', padding:5, borderRadius:20, margin:15}}>
                  <Text style={{textAlign:'center', fontSize:15, color:'white', fontWeight:'800'}}>{elemento.puesto}</Text>
               </View>

             </View>
       </TouchableOpacity>

       )
   }

  render(){
    return(
      <View style={{flex:1}}>
        <MenuTop navigator={this.props.navigator} color="#01a9bd"/>
        <Cabeza fondo="TENISMASCULINO" titulo="MASCULINO"/>
        <View style={{flex:2, backgroundColor:'white'}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderElemento(rowData)}
          />
        </View>
        <Footer />
      </View>
    )
  }
}

module.exports = tenisView
