import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../src/colorconfig';
import Icon from '@expo/vector-icons/Ionicons';

export default class MyProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.profileavatar} source={require('../assets/MWJbillede.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Malthe Wejnold Jørgensen</Text>
              <Text style={styles.info}>D@D</Text>
              <Text style={styles.info}>mwjoergensen@deloitte.dk</Text>
              <Text style={styles.info}>15541</Text>
            </View>
        </View>
        <View style={styles.linebreaker}/>
        <View style={{alignItems:'center'}}>
          <Text style={styles.name}>Buddy</Text>
          <Image style={styles.buddyavatar} source={require('../assets/buddypic.png')}/>
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop:80,}}>
              <Text style={styles.name}>Buddy navn</Text>
              <Text style={styles.info}>Buddy afdeling</Text>
              <Text style={styles.info}>Buddy mail</Text>
              <Text style={styles.info}>Buddy telefon nr.</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: COLORS.main,
    height:120,
  },
  profileavatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  buddyavatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:40
  },
  body:{
    marginTop:60,
    flexDirection: 'row',
  },
  bodyContent: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
  name:{
    marginBottom: 30,
    fontSize: 28,
    color: COLORS.white,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  info:{
    fontSize:16,
    color: COLORS.main,
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  linebreaker: {
    width: '100%',
    height: '0.5%',
    backgroundColor: COLORS.blue
  }
});