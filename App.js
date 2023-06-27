import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/bottom-tab'



const App = () => {
  return <SafeAreaProvider>
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  </SafeAreaProvider>
  
}

export default App

const styles = StyleSheet.create({})


