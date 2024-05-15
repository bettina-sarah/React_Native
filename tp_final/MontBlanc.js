import React, { useState } from 'react';
import { montBlanc } from './info_villes';

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


const ListeElement = ({ item }) => (
  <TouchableOpacity>
    <View>
      <Text style={styles.attraction}>{item.nom}</Text>
    </View>
    <View>
      <Text style={styles.text}>{item.description}</Text>
    </View>
    <View>
      <Text style={styles.text}>{item.telephone}</Text>
    </View>
  </TouchableOpacity>
);

// !! if func with (), implicit return; with {} return() necessary
const AttractionListView = ({ list }) => {
  // in case we need to process list before returning
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item }) => <ListeElement item={item} />}
        keyExtractor={(item) => item.nom}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};


function MontBlanc({ navigation }) {
  //navigation: permet de la faire
  return (
    <View style={styles.main}>
      <View style={styles.item}>
        <Text style={styles.title}>Mont Blanc</Text>
      </View>
      <AttractionListView list={montBlanc} />

      <View>
        <Image style={styles.image} source={{ uri: 'https://officialmonttremblant.com/wp-content/uploads/2022/08/Miss-Patate-main.jpg' }}></Image>
      </View>

    </View>
  );
}


const styles = StyleSheet.create(
  {
    main: {
      backgroundColor: "pink",
      padding: 10
    },
    separator: {
      backgroundColor: 'grey',
      height: 4,
    },
    item: {
      // flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 25,
      margin: 10
    },
    attraction: {
      fontSize: 18
    },
    text: {
      fontSize: 15,
      margin: 3
    },
    image: {
      margin: 100,
      width: 200,
      height: 200
    }
  }
);

export default MontBlanc;

