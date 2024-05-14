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

  function MontTremblant(){
    //navigation: permet de la faire
    return (
        <View style={styles.main}>
            <View style={styles.item}>
            <Text style={styles.text}>Mt Tremblant</Text>
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

export default MontTremblant;