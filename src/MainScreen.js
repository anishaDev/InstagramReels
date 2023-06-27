// Import necessary dependencies
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
// import Reelsscreen from './Reelsscreen';


// Create a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Create your screen components
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const Reelsscreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);



// Create your Bottom Tab Navigator component
const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={Reelsscreen} />
    
  </Tab.Navigator>
);

export default BottomTabNavigator;
