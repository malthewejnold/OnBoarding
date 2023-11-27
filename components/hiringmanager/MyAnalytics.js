import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import COLORS from '../../src/colorconfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MyAnalytics extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
          <Text>My Analytics</Text>
      </SafeAreaView>
    );
  }
}