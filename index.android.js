//Import some code we need


import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Text,
  Navigator,
  TouchableHightlight,
} from 'react-native';


const styles = require('./styles.js')
const DetalleElemento = require ('./components/detalleElementoView')
const Login = require('./components/loginView')
const Dashboard = require('./components/dashboardView')
const Tenis = require('./components/tenisView')
const Videos = require('./components/videosView')
const Menu = require('./components/menu')
const Alta = require('./components/alta')
const Distribuidores = require('./components/distribuidores')
const Listameses = require('./components/listameses')
const Encuesta = require('./components/encuestaView')
const EntradaLTB = require('./components/entradaLTB')
const TenisFemenino = require('./components/tenisFemenino')

//Create component
class bkApp extends Component{
  renderScene(route,navigator){
    switch(route.name){
      case 'Login':{
        return <Login navigator={navigator} route={route}/>
        break
      }
      case 'Dashboard':{
        return <Dashboard {...route.props} navigator={navigator} route={route}/>
        break
      }
      case 'Detalles':{
        return <DetalleElemento {...route.props} navigator={navigator} route={route}/>
        break
      }
      case 'Tenis':{
        return <Tenis {...route.props} navigator={navigator} route={route}/>
        break
      }
     case 'Videos':{
        return <Videos {...route.props} navigator={navigator} route={route}/>
        break
      }
      case 'Menu':{
         return <Menu {...route.props} navigator={navigator} route={route}/>
         break
       }
       case 'Alta':{
          return <Alta {...route.props} navigator={navigator} route={route}/>
          break
        }
      case 'Distribuidores':{
           return <Distribuidores {...route.props} navigator={navigator} route={route}/>
           break
         }
      case 'Listameses':{
          return <Listameses {...route.props} navigator={navigator} route={route}/>
            break
        }
      case 'Encuesta':{
            return <Encuesta {...route.props} navigator={navigator} route={route}/>
              break
          }
      case 'EntradaLTB':{
                return <EntradaLTB {...route.props} navigator={navigator} route={route}/>
                  break
              }
      case 'TenisFemenino':{
              return <TenisFemenino {...route.props} navigator={navigator} route={route}/>
                    break
                      }
    }


  }
render(){
  return(
    <Navigator
      initialRoute={{name:'Menu'}}
      renderScene={this.renderScene }
      >
    </Navigator>
  );
}
}

//Show react component on the screen
AppRegistry.registerComponent('bkApp', () => bkApp);
