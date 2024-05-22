/**
exam final Bettina Janesch
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


function App(){

  const [response, setResponse] = useState(false);
  const styleResponse = response ? styles.textAppear : null;

  const joueur = require('./images/caufield.jpg');
  
  return (
    <View style={styles.main}>
      
      <Text style={styles.text}>Cliquez sur la photo pour savoir mon nom !</Text>
      <TouchableOpacity onPress={() => { setResponse(!response) }}>
        <Image source={joueur}></Image>
      </TouchableOpacity>
      <Text style={[styles.textDisappear, styleResponse]}>Cole Caufield, #22</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  image: {
  wdith:30,
  height:40
  },
  text:{
    margin:20,
    fontSize: 18,
  },
  textAppear: {
    display:'block',
    margin:20,
    fontSize: 18,
    color: 'red'
    },
  textDisappear:{
    display: 'none'
  }
});

export default App;
