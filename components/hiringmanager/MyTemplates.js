import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import COLORS from '../../src/colorconfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from '@expo/vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Trainee 1',
    navigation: 'FindWay'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Trainee 2',
    navigation: 'ServiceDesk'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Equity partner',
    navigation: 'Benefitss'
  },
  {
    id: '58694a0f-3da1-471f-bd96-123456776543',
    title: 'Senior Manager',
    navigation: 'Benefitss'
  },
];


export default class MyTemplates extends React.Component {
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
                <Icon name="ios-arrow-forward" color={COLORS.inputbox} size={25}/>  
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity>
            <View style={styles.addnew}>
                <Text>+ Add New</Text>
            </View>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  addnew:{
    backgroundColor: COLORS.blue,
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
  },
});