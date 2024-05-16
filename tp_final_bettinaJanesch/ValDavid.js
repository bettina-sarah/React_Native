import React, { useState } from 'react';
import { valDavid } from './info_villes';
import { AttractionListView } from './composantes_utils';
import { styles } from './css_styles';

import {
  Text,
  Image,
  View,
  } from 'react-native';

  function ValDavid({ navigation }) {
    //navigation: permet de la faire
    return (
      <View style={styles.main}>
        <View style={styles.item}>
          <Text style={styles.title}>Val-Davidc</Text>
        </View>
        <AttractionListView list={valDavid} />
  
        <View style={styles.viewImage}>
          <Image style={styles.image} source={{ uri: 'https://mto.media.tourinsoft.eu/upload/parc-regional-de-val-david-val-morin-secteur-dufresne-escalade.jpg?width=1200' }}></Image>
        </View>
      </View>
    );
  }

export default ValDavid;