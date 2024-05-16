import React, { useState } from 'react';
import { montBlanc } from './info_villes';
import { AttractionListView } from './composantes_utils';
import { styles } from './css_styles';

import {
  Text,
  Image,
  View,
} from 'react-native';


function MontBlanc({ navigation }) {
  //navigation: permet de la faire
  return (
    <View style={styles.main}>
      <View style={styles.item}>
        <Text style={styles.title}>Mont Blanc</Text>
      </View>
      <AttractionListView list={montBlanc} />

      <View style={styles.viewImage}>
        <Image style={styles.image} source={{ uri: 'https://www.quebecvacances.com/images/photos/photos_600_400/station_mont_blanc_1_h.jpg' }}></Image>
      </View>

    </View>
  );
}

export default MontBlanc;

