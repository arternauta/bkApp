const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};




var styles = StyleSheet.create({
  //Login
  unTercio:{
    flex:1,
    justifyContent:'center',
    padding:100,
    backgroundColor:'blue',
  },
  dosTercios:{
    flex:2,
    justifyContent:'center',
    padding:60,
  },
  centradoContainer:{
    flex:1,
  },
  bhekelLogin:{
    fontFamily: 'Harabara',
    fontWeight:'normal',
    fontSize:60,
    textAlign:'center',
    color:'#ff6c6c',
  },
  aLogin:{
    fontSize:20,
    textAlign:'center',
  },
  aBienvenido:{
    fontSize:20,
    fontWeight:"100",
    textAlign:'center',
  },
  textoBlanco:{
    fontSize:30,
    fontFamily:'Lato-Thin',
    color:'white',
  },
  //FIN LOGIN
  container: {
      flex: 1,
      backgroundColor: '#eaeaea',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'stretch',
  },
  headerWrap:{
  flex:1,
  backgroundColor:'white'
  },
  rankingWrap:{
    flex:1,
    backgroundColor:'white'
  },
  logo:{
    flex:1,
  },
  bhekelWrap:{
    flex:3
  },
  menuTop:{
    margin:10,
    padding:20,
    borderRadius:5,
    backgroundColor:'#44b39d'
  },
  logoWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  medioTop:{
    backgroundColor:'#2a8472',
    padding:15,
  },
  bhekel:{
    flex:3,
  },
  fontBhekel:{
    fontWeight:'bold',
    fontSize:60,
    color:'white',
  },
  botonFrase:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginRight:10,
    width:200,
    borderRadius:5,
    alignItems:'center',
    backgroundColor:'#44b39d',
    backgroundColor:'rgba(0,0,0,1)'
  },
  corazonWrap:{
    flex:1,
    padding:5,
    backgroundColor:'#bf4a67',
    borderRadius:5
  },
  corazon:{
    fontSize:20,
    color:'white',
  },
  frase:{
    flex:8,
    marginLeft:10,
    color:'white',
  },
  descripcionWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'#8aa3ff',
    padding:10
  },
  puntosWrap:{
    flexDirection:'column',
    alignItems:'flex-end'
  },
  puesto:{
    color:'#bf4a67',
    fontSize:80
  },
  datos:{
    flexDirection:'column'
  },
  headerEscritorios:{
    flex:2,
    justifyContent:'center',
    borderBottomWidth:3,
    borderColor:'white',
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  circulo:{

    backgroundColor:'red',
    borderRadius:50/2,

  },
  elementoContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#17927a',
    margin:5,
    borderRadius:5,
  },
  puestoWrap:{
    backgroundColor:'#bf4a67',
    padding:10,
    borderRadius:5
  },
  icono:{
    color:'white',
    fontSize:20,
    marginRight:5,
  },
  pais:{
    color:'white',
    fontSize:20,
  },
  chart: {
      marginRight: 20,
      height: 200,
  },
  centrado:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  fondo:{
    flex:1,
  },

title1: {
  textAlign:'center',
   fontSize: 28,
   fontWeight: '300',
   lineHeight: 34,
   letterSpacing: 0.364,
   color:'#FEFEFE',
 },
 title2: {
   fontSize: 22,
   fontWeight: '400',
   lineHeight: 28,
   letterSpacing: 0.352
 },
 title3: {
   fontSize: 20,
   fontWeight: '400',
   lineHeight: 24,
   letterSpacing: 0.38
 },
 headline: {
   fontSize: 17,
   fontWeight: '600',
   lineHeight: 22,
   letterSpacing: -0.408
 },
 body: {
   fontSize: 17,
   fontWeight: '400',
   lineHeight: 22,
   letterSpacing: -0.408
 },
 callout: {
   fontSize: 16,
   fontWeight: '400',
   lineHeight: 21,
   letterSpacing: -0.32
 },
 subhead: {
   fontSize: 15,
   fontWeight: '400',
   lineHeight: 20,
   letterSpacing: -0.24
 },
 footnote: {
   fontSize: 13,
   fontWeight: '400',
   lineHeight: 18,
   letterSpacing: -0.078
 },
 caption1: {
   fontSize: 12,
   fontWeight: '400',
   lineHeight: 16,
 },
 caption2: {
   fontSize: 11,
   fontWeight: '400',
   lineHeight: 16,
   letterSpacing: 0.066
 },
 stretch: {
   flex:2,
   justifyContent:'center',
   alignItems:'center',
  },
logo:{
  height:135,
  width:117
},
  talkBubble: {
  backgroundColor: 'transparent'
},
talkBubbleSquare: {
  width: 330,
  height: 40,
  backgroundColor: '#44b39d',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:10,
  borderRadius:5,
},
talkBubbleTriangle: {
  left: 150,
  top: -7,
  width: 0,
  height: 0,
  borderTopColor: 'transparent',
  borderTopWidth: 13,
  borderRightWidth: 13,
  borderRightColor: '#44b39d',
  borderBottomWidth: 13,
  borderBottomColor: 'transparent',
  transform: [
      {rotate: '-90deg'}
    ]
}

})
module.exports = styles
module.exports.constants = constants;
