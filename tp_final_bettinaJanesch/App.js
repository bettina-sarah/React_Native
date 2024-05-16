/**
 * TP Final - Bettina Janesch
 *
 * @format
 */

import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MontTremblant from './MontTremblant';
import MontBlanc from './MontBlanc';
import ValDavid from './ValDavid';
import QRCodeScanner from './QRCodeScanner';

const Stack = createNativeStackNavigator();

function App() {


  return (
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="QR-CodeScanner" component= {QRCodeScanner}/>
    <Stack.Screen name="Mont-Tremblant" component= {MontTremblant}/>
    <Stack.Screen name ="Mont-Blanc" component = {MontBlanc}/>
    <Stack.Screen name="Val-David" component = {ValDavid}/>
</Stack.Navigator>
</NavigationContainer>
  );
}

export default App;
