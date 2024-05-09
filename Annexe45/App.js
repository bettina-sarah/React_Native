/**
 * Annexe 4 - cours C54
 * App de départ à modifier par les étudiants
 * 
 */

import React, { useState } from 'react';

import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { liste } from './donnees.js';

function Galerie() {

  const [index,setIndex]=useState(0);

  let oeuvre = liste[index];
  const remoteImage = { uri: oeuvre.url };

  const [display,setDisplay]=useState(false);
  const displayRule = display ? styles.descriptionHidden : styles.descriptionShow;


  function handleClick() {
    if(index<3){
      setIndex(index+1);
    }
    else{
      setIndex(0);
    }
  }

  function reverse() {
    if(index>0){
      setIndex(index-1);
    }
    else{
      setIndex(3);
    }
  }

  //Alert.alert(...)

  return (
   
    <ScrollView>
    <View style={styles.main}>
      <View style ={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={reverse}>
        <Text>Precedent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text>Suivant</Text>
      </TouchableOpacity>
      </View>

   
      
      <Text>
        {oeuvre.name + "de " +oeuvre.artist}
      </Text>
      <Text>  
        ({index + 1} of {liste.length})
      </Text>

      <Image style={styles.image} source={remoteImage} />

      <TouchableOpacity style={styles.button} onPress={() => {setDisplay(!display)}}>
      <Text>afficher description</Text> 

      </TouchableOpacity>
      
      <Text style={[styles.descriptionHidden,displayRule]}>  
        {oeuvre.description}
      </Text>
      
     
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create(
  {
    image : {
      width:160,
      height:160,
    },

    main : {
      flex:1,
      alignItems:'center',
      justifyContent:'center' 
    },
    wrapper: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    button:{
      backgroundColor: 'pink',
      margin:10,
      padding:10,
      borderStyle:'solid',
      borderColor:'black',
      borderWidth: 2
    },
    descriptionHidden:{
      display:'none'
    },
    descriptionShow:{
      display:'block',
      fontSize:25
    }
  }
)
export default Galerie;
