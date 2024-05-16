import React, { useState } from 'react';
import { montTremblant } from './info_villes';
import { AttractionListView } from './composantes_utils';
import { styles } from './css_styles';

import {
  Text,
  Image,
  View,
  } from 'react-native';

  function MontTremblant({ navigation }) {
    //navigation: permet de la faire
    return (
      <View style={styles.main}>
        <View style={styles.item}>
          <Text style={styles.title}>Mont Tremblant</Text>
        </View>
        <AttractionListView list={montTremblant} />
  
        <View style={styles.viewImage}>
          <Image style={styles.image} source={{ uri: 'https://michelnaud.com/files/2023/01/Capture-de%CC%81cran-le-2023-01-26-a%CC%80-15.31.16.png' }}></Image>
        </View>
  
      </View>
    );
  }


export default MontTremblant;