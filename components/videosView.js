'use strict'
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

import * as firebase from 'firebase'

const VIMEO_ID = '179859217';
//var user = firebase.auth().currentUser
//var MenuTop = require('./menuTop')

class VideosView extends Component{
  constructor() {
    super();

    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }
  render(){
    return(
      <View style={{flex:1}}>
          <Text style={{ fontSize: 22, marginTop: 22 }}>React Native Video Player</Text>

            <VideoPlayer
              seekColor={ '#FFF' }
                resizeMode={ 'contain' }
                source={{ uri: 'http://ranking.bhekel.com/bhekelApp/apertura_1.mp4' }}
                navigator={ this.props.navigator }
            />

        </View>
    )
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

module.exports = VideosView
