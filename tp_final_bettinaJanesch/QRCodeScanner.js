/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const QRCodeScanner = ({navigation}) => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({data }) => {
    setScanned(true);
    alert(`Scanned QR Code: ${data}`);
    navigation.navigate(data);
  }

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: 'white',
              borderRadius: 8,
            }}
            onPress={() => setScanned(false)}
          >
            <Text style={{ fontSize: 18, color: 'black' }}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
}

export default QRCodeScanner;