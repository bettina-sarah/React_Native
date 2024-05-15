/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

//tintColor: 
//usestate true, false
//setNomVariable, Varianle ..

//usestate: import du react pur !!

function App() {
  const imageLike = require('./images/heart.png')
  const [like, setLike] = useState(false);
  const styleCoeur = like ? styles.aime : null;
  return (

    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => { setLike(!like) }}>
        <Image source={imageLike} style={[styles.image, styleCoeur]}></Image>
      </TouchableOpacity>

      <Text>J'aime?</Text>
    </View>
  )
};

const styles = StyleSheet.create({


  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tan',
    height: "100%",
    width: "100%",
  },
  image: {
    tintColor: '#f1f1f1'
  },
  aime: {
    tintColor: 'red'
  }
});

export default App;
