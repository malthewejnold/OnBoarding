import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import COLORS from '../src/colorconfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Find your way in DeloitteHuset',
    navigation: 'FindWay'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'ServiceDesk',
    navigation: 'ServiceDesk'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Benefits',
    navigation: 'Benefitss'
  },
];


export default class MyDeloitte extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
            <View style={styles.item}>
                <Text>
                  {item.title}
                </Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: COLORS.main,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
  },
});