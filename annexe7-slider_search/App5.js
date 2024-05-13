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
  FlatList,
  Alert,
  TextInput
} from 'react-native';

import { merveillesDuMondeModerne } from './donneesMerveilles';

function click(item) {
Alert.alert("description: ", item.description);
}

const myItemSeparator = () => {
  return <View style={styles.separator}/>
}

function App5() {

  const [texteRecherche, setTexteRecherche] = useState(' ');
  const [data, setData] = useState(merveillesDuMondeModerne); //par defaut, merveille du monde complet

  const recherche = (text) => {
    setTexteRecherche(text); //je peux filtrer
    text = text.toLowerCase();
    if (text===''){ //2eme state
      setData(merveillesDuMondeModerne)
    }
    else{
      let filtrees = merveillesDuMondeModerne.filter(merveille => merveille.nom.toLowerCase().startsWith(text))
      //il va filtrer pour chaque objet s'il commence avec qsq on avait ecrit dans le champs de recherche
      setData(filtrees)
    } 
  }

  return(
    <View>
      <TextInput placeholder = "Rechercher"
      value={texteRecherche}
      onChangeText={(text) => recherche(text)}></TextInput>
      <FlatList
      data={data} renderItem = { ( {item}   ) => 
        <TouchableOpacity onPress = { () => click(item)}>
          <View style={styles.listItem}  >
          <Text style={styles.listItem}>{item.nom}</Text>
          <Text style={styles.listItem}>{item.lieu}</Text>
          </View>
          
        </TouchableOpacity>
      }
        keyExtractor = {(item) => item.nom} 
        ItemSeparatorComponent={myItemSeparator}
      />
    </View>
  )
}

export default App5;


const styles = StyleSheet.create(
  {
    separator: {
      height:5,
      backgroundColor: "blueviolet"
    },
    listItem:{
      fontSize:25,
      backgroundColor: "pink"
    }
  }
)


