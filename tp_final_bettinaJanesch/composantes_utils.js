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

export const ListeElement = ({ item }) => (
    <TouchableOpacity>
      <View>
        <Text style={styles.attraction}>{item.nom}</Text>
      </View>
      <View>
        <Text style={styles.text}>{item.description}</Text>
      </View>
      <View>
        <Text style={styles.text}>{item.addresse}</Text>
      </View>

      <View>
        <Text style={styles.text}>{item.telephone}</Text>
      </View>
    </TouchableOpacity>
  );
  
  // !! if func with (), implicit return; with {} return() necessary
export const AttractionListView = ({ list }) => {
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
        fontSize: 18,
        padding:3,
        marginLeft:20
      },
      text: {
        fontSize: 15,
        margin: 3,
        padding:2,
        marginLeft:10
      },
      image: {
        margin: 50,
        width: 200,
        height: 200
      }
    }
  );