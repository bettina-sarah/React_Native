import React, { useState } from 'react';

import {

    Text,
    Button,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Alert,
    TextInput
  } from 'react-native';

  function ValDavid({navigation}){
    //navigation: permet de la faire
    return (
      <View style={styles.main}>
      <View style={styles.item}>
      <Text style={styles.text}>Val David</Text>
      </View>
  </View>
    );
  }


const styles = StyleSheet.create(
    {
      main: {
        backgroundColor: "pink"
      },
      item:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      text:{
        fontSize:25
      }
    }
  );

export default ValDavid;