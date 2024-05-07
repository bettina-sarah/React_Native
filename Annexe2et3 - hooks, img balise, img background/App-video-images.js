/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image
} from 'react-native';

// const imgPlay = require('./images/play.png');
// const imgSound = require('./images/sound.png');
// const imgHd = require('./images/hd-sign.png');
// const imgFullScreen = require('./images/full-screen.png');


// const style = StyleSheet.create({
//   buttons: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#000'
//   },
//   container:{
//     height: 150,
//     width: '100%'
//   },
//   wrapper:{
//     flex:1,
//     justifyContent:'center',
//     height:'100%'
//   }
// })

function App(){
  const imageVideo = require('./images/video.jpg')
  const imageFullScreen = require('./images/full-screen.png')
  const imageHDSign = require('./images/hd-sign.png')
  const imagePlay = require('./images/play.png')
  const imageSound = require('./images/sound.png')

  return(

    <View style={styles.mainView}>
      <ImageBackground source={imageVideo} style={styles.videoContainer}>
        <View style={styles.bar}>
          <Image source={imagePlay}></Image>
          <View style={styles.scrollwrapper}>
             <View style={styles.scroll1}></View> 
          </View>
          <Image source={imageHDSign}></Image>
          <Image source={imageSound}></Image>
          <Image source={imageFullScreen}></Image>
        </View>
      </ImageBackground>

    </View>
  )
};

const styles = StyleSheet.create({


    mainView:{

      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'blue',
      height:"100%",
      width:"100%",
    },


    videoContainer:{

      flexDirection:'row',
      width:"100%",
      justifyContent:'end',
    },
//     flex: 1 & justify_content ensembke, prend tt lespace et  centre

    scroll1:{
      width:200,
      backgroundColor:'red',

      borderRadius:10
    },
    scrollwrapper:{
      width:300,
      backgroundColor: 'grey',
      justifyContent:'flex-start',
      borderRadius:10
    },

    bar:{
      width:"100%",
      //on donne le margin pour agrandir le div du background
      marginTop:250, 
      flexDirection:'row',
      justifyContent: 'space-between',
      backgroundColor:'black',
      padding:20

    },

});

export default App;
