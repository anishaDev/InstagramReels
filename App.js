import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {ThemeContextProvider} from './src/theming/context_providers/ThemeContextProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/bottom-tab'
import ExamCallScreen from './src/ExamCallScreen'
import TwiggyScreen from './src/TwiggyScreen'

import DocumentScannerScreen from './src/DocumentScanner'
import ExampleFilter from './src/Chart/ExampleFilter'
import NewFilterScreen from './src/Chart/Filter/NewFilterScreen'
import RecordList from './src/Screens/RecordList'
import MyListComponent from './src/Screens/MyComponent';







const App = () => {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
   
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <MyListComponent/>
  
 {/* <ExampleFilter/> */}
      {/* <DocumentScannerScreen/> */}
      </View>
 
    </NavigationContainer>
  </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})


