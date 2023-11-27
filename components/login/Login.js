import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { Container, Form, Input, Item, Label } from 'native-base';
import COLORS from '../../src/colorconfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <Image style={styles.plane} source={require('../../assets/plane.png')}/>
            <Image style={styles.logo} source={require('../../assets/deloittelogo.png')}/>
            <Text style={styles.logotext}>Onboarding</Text>
            <Item floatingLabel>
              <Label style={{color:COLORS.inputbox}}>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none" 
                style={{color:COLORS.inputbox}}
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{color:COLORS.inputbox}}>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                style={{color:COLORS.inputbox}}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {this.props.screenProps.login(this.state.email, this.state.password)}}
              >
              <Text style={{color:'white'}}> Log in</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    width: '90%',
    height:70,
    resizeMode:'contain'
  },
  logotext:{
    fontSize: 40
  },
  plane:{
    marginTop: 30,
    resizeMode:'contain',
    height: 300,
    width: 300
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.main,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    fontSize: 30,
    width: 200
  }
});