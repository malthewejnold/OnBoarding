import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import IconTeam from '@expo/vector-icons/AntDesign'
import IconTask from '@expo/vector-icons/MaterialCommunityIcons'
import COLORS from './src/colorconfig';

import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';

import MyProfile from './components/MyProfile';
import MyDepartment from './components/MyDepartment';
import MyTasks from './components/MyTasks';
import MyDeloitte from './components/MyDeloitte';

import LoginPage from './components/login/Login';

import MyAnalytics from './components/hiringmanager/MyAnalytics';
import MyEmployees from './components/hiringmanager/MyEmployees';
import MyTemplates from './components/hiringmanager/MyTemplates';

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 150,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


class App extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      currentuser:null
    })
    this.login = this.login.bind(this);
  }

  componentDidMount() {

  }

  login(mail, password) {
    if(mail=="mwjoergensen@deloitte.dk"){
      this.setState({
        currentuser: "Employee"
      });
    }
    if(mail=="jan@deloitte.dk"){
      this.setState({
        currentuser: "Manager"
      });
    }
  }

  render() {

    if(this.state.currentuser==null){
      return(
        <View style={{flex:1}}>
        <StatusBar
          barStyle="light-content" // Here is where you change the font-color
         />
         <HiringContainer/>
        {/* <LoginPage
            screenProps={{
              login: this.login
            }} 
        /> */}
        </View>
      )
    }else{
      if(this.state.currentuser=="Employee"){

        return (
          <View style={{flex:1}}>
          <StatusBar
            barStyle="light-content" // Here is where you change the font-color
           />
          <AppContainer/>
          </View>
          );

      }
  
      if(this.state.currentuser=="Manager"){
        return (
          <View style={{flex:1}}>
          <StatusBar
            barStyle="light-content" // Here is where you change the font-color
           />
          <HiringContainer/>
          </View>
          );
        
      }
    }
  }
}

export default App;

const MyProfileStack = createStackNavigator(
  {
    MyProfile: {
      screen: MyProfile,
      navigationOptions: ({ navigation }) => {
        return {
        headerTitle: "My Profile",
          headerStyle: {
            backgroundColor: COLORS.navigation
          },
          headerTitleStyle: {
            color: COLORS.main
          },
          // headerLeft: (
          //   <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          // )
        };
      }
    }
  },
  {
    cardStyle: { backgroundColor: COLORS.background},
  }

);

const MyDepartmentStack = createStackNavigator({
  MyDepartment: {
    screen: MyDepartment,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Department",
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
        // headerLeft: (
        //   <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        // )
      };
    }
    }
  },
  {
    cardStyle: { backgroundColor: COLORS.background},
  }
);

const MyTasksStack = createStackNavigator({
  MyTasks: {
    screen: MyTasks,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Tasks",
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
        // headerLeft: (
        //   <Icon style={{ paddingLeft: 10, color: COLORS.white}} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        // )
      };
    }
  }
},
{
  cardStyle: { backgroundColor: COLORS.background},
}
);

const MyDeloitteStack = createStackNavigator({
  MyDeloitte: {
    screen: MyDeloitte,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Deloitte",
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
        // headerLeft: (
        //   <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        // )
      };
    }
  }
},
{
  cardStyle: { backgroundColor: COLORS.background}
}
);

const DashboardTabNavigator = createBottomTabNavigator(
  {
    MyProfile: {  
      screen: MyProfileStack,  
      navigationOptions:{  
        tabBarLabel:'My Profile',  
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-person" color={tintColor} size={25}/>  
        )  
      }
    },
    MyDepartment: {  
      screen: MyDepartmentStack,  
      navigationOptions:{  
        tabBarLabel:'My Department', 
        tabBarIcon:({tintColor})=>(  
          <IconTeam name="team" color={tintColor} size={25}/>   
        )  
      }
    },
    MyTasks:{  
      screen: MyTasksStack,  
      navigationOptions:{  
        tabBarLabel:'My Tasks',
        tabBarIcon:({tintColor})=>(  
          <IconTask name="clipboard-text-outline" color={tintColor} size={25}/>   
        )  
      }
    },
    MyDeloitte:{  
      screen: MyDeloitteStack,  
      navigationOptions:{  
        tabBarLabel:'My Deloitte',  
        tabBarIcon:({tintColor})=>(  
          <IconTask name="office-building" color={tintColor} size={25}/>   
        )  
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    },
    tabBarOptions: { style:{backgroundColor: COLORS.navigation}, activeTintColor: COLORS.main, inactiveTintColor: 'gray', }
  }
  
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
);


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1, backgroundColor: COLORS.background}}>
    <View style={{height: 150, backgroundColor: COLORS.main, alignItems:'center', justifyContent: 'center'}}>
      {/* <Image source={require('./assets/IO.png')} style={{height:150, width:150,resizeMode:'contain'}}/> */}
    </View>
    <ScrollView>
      <DrawerNavigatorItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Hjem: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerLabel: 'Hjem',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={25}/>
      )
    }
  }
},
{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: COLORS.main,
    style: {
      backgroundColor: COLORS.background
    }
  }
  
}
)

const AppSwitchNavigator = createSwitchNavigator({
  /*Welcome: { screen: WelcomeScreen },*/
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

//Hiring manager

const MyAnalyticsStack = createStackNavigator(
  {
    MyAnalytics: {
      screen: MyAnalytics,
      navigationOptions: ({ navigation }) => {
        return {
        headerTitle: "My Analytics",
          headerStyle: {
            backgroundColor: COLORS.navigation
          },
          headerTitleStyle: {
            color: COLORS.main
          },
          // headerLeft: (
          //   <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          // )
        };
      }
    }
  },
  {
    cardStyle: { backgroundColor: COLORS.background},
  }

);

const MyEmployeesStack = createStackNavigator({
  MyEmployees: {
    screen: MyEmployees,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Employees",
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
        // headerLeft: (
        //   <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        // )
      };
    }
    }
  },
  {
    cardStyle: { backgroundColor: COLORS.background},
  }
);

const MyTemplatesStack = createStackNavigator({
  MyTemplates: {
    screen: MyTemplates,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Templates",
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
        // headerLeft: (
        //   <Icon style={{ paddingLeft: 10, color: COLORS.white}} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        // )
      };
    }
  }
},
{
  cardStyle: { backgroundColor: COLORS.background},
}
);

const HiringTabNavigator = createBottomTabNavigator(
  {
    MyAnalytics: {  
      screen: MyAnalyticsStack,  
      navigationOptions:{  
        tabBarLabel:'My Analytics',  
        tabBarIcon:({tintColor})=>(  
          <Icon name="md-analytics" color={tintColor} size={25}/>  
        )  
      }
    },
    MyEmployees: {  
      screen: MyEmployeesStack,  
      navigationOptions:{  
        tabBarLabel:'My Employees', 
        tabBarIcon:({tintColor})=>(  
          <Icon name="md-people" color={tintColor} size={25}/>   
        )  
      }
    },
    MyTemplates:{  
      screen: MyTemplatesStack,  
      navigationOptions:{  
        tabBarLabel:'My Templates',
        tabBarIcon:({tintColor})=>(  
          <IconTask name="file-document" color={tintColor} size={25}/>   
        )  
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    },
    tabBarOptions: { style:{backgroundColor: COLORS.navigation}, activeTintColor: COLORS.main, inactiveTintColor: 'gray', }
  }
  
);

const HiringStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: HiringTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
);


const HiringDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1, backgroundColor: COLORS.background}}>
    <View style={{height: 150, backgroundColor: COLORS.main, alignItems:'center', justifyContent: 'center'}}>
      {/* <Image source={require('./assets/IO.png')} style={{height:150, width:150,resizeMode:'contain'}}/> */}
    </View>
    <ScrollView>
      <DrawerNavigatorItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const HiringDrawerNavigator = createDrawerNavigator({
  Hjem: {
    screen: HiringStackNavigator,
    navigationOptions: {
      drawerLabel: 'Hjem',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={25}/>
      )
    }
  }
},
{
  contentComponent: HiringDrawerComponent,
  contentOptions: {
    activeTintColor: COLORS.main,
    style: {
      backgroundColor: COLORS.background
    }
  }
  
}
)

const HiringSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: HiringDrawerNavigator }
});

const HiringContainer = createAppContainer(HiringSwitchNavigator);