import React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Overview from '../screens/overview';
import Profile from '../screens/profile';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const tabIcons = (
  route: RouteProp<ParamListBase, string>,
  focused: Boolean,
) => {
  if (route.name == 'Home') {
    return <Icon name="home" size={26} color={focused ? 'blue' : 'grey'} />;
  } else if (route.name == 'Overview') {
    return (
      <Ionicons
        name="ios-stats-chart"
        size={26}
        color={focused ? 'blue' : 'grey'}
      />
    );
  }
  return (
    <FontAwesome name="user" color={focused ? 'blue' : 'grey'} size={26} />
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => tabIcons(route, focused),
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
