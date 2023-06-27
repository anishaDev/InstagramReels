import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,FlatList,Image, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from "../src/assets/icons/home.png"
import ReelIcon from "../src/assets/icons/reels.png"
import Reelsscreen from "./Reelsscreen";
const Tab = createBottomTabNavigator();

const Home = () =>{
    return <View style={{backgroundColor:'#ccc',justifyContent:'center',flex:1,alignItems:'center'
}}>
    <Text>Home</Text>
</View>
}
const Reels = () =>{
    return <View style={{backgroundColor:'#ccc',justifyContent:'center',flex:1,alignItems:'center'
}}>
    <Reelsscreen/>
</View>
}



const BottomTab =()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle:{height:60,position:'absolute',bottom:20,borderRadius:90,marginHorizontal:25}

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size,focused }) => (
           <Image source ={HomeIcon} style={{width:35,height:35,tintColor: focused ? "#000" : "#ccc"}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size,focused }) => (
            <Image source ={ReelIcon} style={{width:35,height:35,tintColor: focused ? "#000" : "#ccc"}}/>
           ),
          unmountOnBlur: true
          
        }}

        listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        
      />
     
    </Tab.Navigator>
  );
}
export default BottomTab