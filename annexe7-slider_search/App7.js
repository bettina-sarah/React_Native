/**
 * Annexe 7 - navigation
 */

import React, { useState } from 'react';
import EcranAccueil from './EcranAccueil';
import EcranAjouter from './EcranAjouter';
import EcranListe from './EcranListe';

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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App7() {

  return(
<NavigationContainer>
      	<Stack.Navigator>
        		<Stack.Screen name="Accueil" component= {EcranAccueil}/>
       		 <Stack.Screen name = "Ajouter" component = {EcranAjouter}/>
        		<Stack.Screen name="Liste" component = {EcranListe}/>
     	 </Stack.Navigator>
 </NavigationContainer>

  );
}

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

export default App7;





