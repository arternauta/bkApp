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
    }


  }
render(){
  return(
    <Navigator
      initialRoute={{name:'Login'}}
      renderScene={this.renderScene }
      >
    </Navigator>
  );
}
}

//Show react component on the screen
AppRegistry.registerComponent('bkApp', () => bkApp);
