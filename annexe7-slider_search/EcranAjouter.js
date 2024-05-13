import React, { useState } from 'react';
import { Slider } from '@react-native-assets/slider';

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

  function EcranAjouter({navigation}){
    //navigation: permet de la faire
    return (
        <View>
            <Text>Ajouter évaluation</Text>
            <TextInput placeholder = "entrez nom de la bière à évaluer "></TextInput>
            <Slider minimumValue={0} maximumValue={5}></Slider>
        </View>
    );

  }

export default EcranAjouter;