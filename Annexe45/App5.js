/**
 * Annexe 5 - flat list
 */

import React, { useState } from 'react';

import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatLst,
} from 'react-native';

import { merveillesDuMondeModerne } from './donneesMerveilles';

function App5() {

  return(
    <View>
      <FlatLst data={merveillesDuMondeModerne} renderItem = { ( {item}   ) => 
        <TouchableOpacity>
          <View>
          <Text>{item.nom}</Text>
          <Text>{item.lieu}</Text>
          </View>
          
        </TouchableOpacity> }
        keyExtractor = {(item) => item.nom} />
    </View>
  );
}

export default App5;


// const styles = StyleSheet.create(
//   {
//     image : {
//       width:160,
//       height:160,
//     },

//     main : {
//       flex:1,
//       alignItems:'center',
//       justifyContent:'center' 
//     },
//     wrapper: {
//       display:'flex',
//       flexDirection:'row',
//       justifyContent:'space-evenly'
//     },
//     button:{
//       backgroundColor: 'pink',
//       margin:10,
//       padding:10,
//       borderStyle:'solid',
//       borderColor:'black',
//       borderWidth: 2
//     },
//     descriptionHidden:{
//       display:'none'
//     },
//     descriptionShow:{
//       display:'block',
//       fontSize:25
//     }
//   }
// )


