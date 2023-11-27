import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import COLORS from '../../src/colorconfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MyEmployees extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.topnav}>
            <TouchableOpacity>
                <View style={styles.navchoice}>
                <Text style={{color:'#FFF'}}>
                    New (2)
                </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navchoiceMid}>
                <Text style={{color:'#FFF'}}>
                    Ongoing (4)
                </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navchoice}>
                <Text style={{color:'#FFF'}}>
                    Completed (30)
                </Text>
                </View>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    topnav:{
        height: 50,
        width: '90%',
        backgroundColor: '#000',
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    navchoice:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: '100%',
        marginHorizontal: 10,
    },
    navchoiceMid:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 115,
        height: '100%',
        marginHorizontal: 10,
        borderWidth: 1,
        borderRightColor: 'white',
        borderLeftColor: 'white'
    }
});