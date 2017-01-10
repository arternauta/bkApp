import React,{Component} from 'React'

import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'

import{
  Icon
}from 'native-base'

import * as firebase from 'firebase'


//const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/oficinas.json'

class RenderLista extends Component{
  constructor(props){
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
      }),
      loaded:false,
      nombreMes:'',
    }
  }

  componentDidMount(){
         this.fetchData()
      }

seleccionarMes(){

}
//CONVERSOR DE Meses
//QUITAR LOS ULTIMOS 4 caracteres del nombre



fetchData(){
try {
  //AsyncStorage.removeItem('cachedMes')
  //AsyncStorage.removeItem('cachedNombreUltimoMes')
  try {
    AsyncStorage.getItem('cachedNombreUltimoMes',(err,result)=>{
      this.setState({
        nombreMes: result
      })
    })
  } catch (e) {
    console.log(e)
  } finally {

  }

} catch (e) {

} finally {

}
  //RECIBE EL TIPO DE LISTA QUE QUIERE RENDERIZAR - ESCRITORIO, TENISM..
  switch (this.props.nameSource) {
    case "ESCRITORIOS":
    try {
      AsyncStorage.getItem('cachedMes',(err,result)=>{
          if(result){
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(JSON.parse(result))
            })
          }else{
            if(this.props.mes == "ULTIMO"){
              var ref = firebase.database().ref('oficinas/').limitToLast(1)
                    ref.once('value',(snap)=>{
                      snap.forEach((childKey)=>{
                       var ref = firebase.database().ref('oficinas/'+childKey.key)
                       ref.once('value',(snap)=>{
                         mesConvertido = "Mes Bhekel N°" +childKey.key.slice(0,-4)
                         try {
                           console.log(typeof(mesConvertido))
                            AsyncStorage.setItem('cachedNombreUltimoMes',mesConvertido)
                         } catch (e) {
                           console.log(e)
                         } finally {

                         }

                         this.setState({
                         dataSource : this.state.dataSource.cloneWithRows(snap.val()),
                         nombreMes:mesConvertido
                         })
                         try {
                           mesCacheado = JSON.stringify(snap.val())
                           AsyncStorage.setItem('cachedMes',mesCacheado)
                         } catch (e) {
                           console.log(e)
                         }
                       })
                      })
                  })
            }else{

              var ref = firebase.database().ref('oficinas/'+ this.props.mes)
                       ref.once('value',(snap)=>{
                         this.setState({
                         dataSource : this.state.dataSource.cloneWithRows(snap.val()),
                  })
            })
          }

          }

        })
    } catch (e) {
console.log("UN ERROR" + e)
    }


      break;
      case "MESES":
        var ref = firebase.database().ref('listameses/')
        ref.once('value',(snap)=>{
          this.setState({
          dataSource : this.state.dataSource.cloneWithRows(snap.val()),
          })
        })
      break
  }
         /*fetch(REQUEST_URL)
         .then((response)=>response.json())
         .then((responseData)=>{
         firebase.database().ref('oficinas/112017').set(responseData)
           this.setState({
             dataSource: this.state.dataSource.cloneWithRows(responseData),
             loaded:true
           })
*/
//FUNCION PARA HACER EL UPDATE DE PUESTOS

//RECIBE EL MES QUE QUIERE RENDERIZAR
//OBTENER EL ULTIMO MES

       }

       onElementoPressed(elemento){
         this.props.navigator.push({
           name: 'Detalles',
           passProps: {
             elemento: elemento,
           }
         })
       }

       renderElemento(elemento){
         //var urlImage = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/SantaCruzRank.png'
        // urlImage += '?random_number='+new Date().getTime()
         return(
           <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
                 <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'white', margin:15}}>
                   <View style={{backgroundColor:'#dd5d5d', flex:1, alignItems:'center', padding:10, margin:5, borderRadius:5}}>
                     <Text style={{fontSize:20, color:'white'}}>{elemento.Puesto}</Text>
                   </View>
                   <View style={{flex:3, alignItems:'flex-start', justifyContent:'center'}}>
                     <Text style={{fontSize:16, color:'black', fontWeight:'600'}}>{elemento.Escritorio}</Text>
                   </View>
                   <View style={{flex:4, flexDirection:'column'}}>
                     <Text style={{fontSize:10, textAlign:'left'}}>{elemento.Nombre}</Text>
                     <Text style={{fontSize:10, fontWeight:'600', textAlign:'left'}}>{elemento.Puntos} Puntos</Text>
                   </View>
                   <View style={{flex:1, justifyContent:'center'}}>
                   <Icon name="ios-stats"/>
                   </View>
                 </View>
           </TouchableOpacity>
           )
       }
  render(){
    return(
      <View style={{flex:2, backgroundColor:'white'}}>
        <Text style={{padding:10, fontSize:20, textAlign:'center'}}>{this.state.nombreMes}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderElemento(rowData)}
        />
      </View>


    )
  }
}

module.exports = RenderLista
