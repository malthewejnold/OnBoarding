import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import COLORS from '../src/colorconfig';
import Icon from '@expo/vector-icons/Entypo';
import IconDone from '@expo/vector-icons/AntDesign';

export default class MyTasks extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      DATA: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Ryd op i Excel ark',
          done: false
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Tag UiPath video kursus',
          done: false
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Intro møde med Digital & Infrastructure',
          done: false
        }
      ]
    })
  }

  checkOf = (index) => {
    let DATA = this.state.DATA;
    DATA[index].done = true;

    this.setState({
        DATA
    });
  };

  checkOfButton(index){
    if(this.state.DATA[index].done==false){
      return(
        <Icon style={styles.check}name="circle" color={COLORS.lightgray} size={25}/> 
      )
    }
    if(this.state.DATA[index].done==true){
      return(
        <IconDone style={styles.check}name="checkcircle" color={COLORS.blue} size={25}/> 
      )
    }
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.DATA}
          extraData={this.state}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
                <Text>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => this.checkOf(index)}>
                {this.checkOfButton(index)}
                </TouchableOpacity>
            </View>
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
  }

});