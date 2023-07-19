import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Goback = ({
    goBack ,text,
}) => {

const navigation= useNavigation()

  return (
    <View>
        <TouchableOpacity onPress={!!goBack ? goBack: ()=>navigation.goBack()}>
        <Text>Goback</Text>
      <Text>{text}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Goback

const styles = StyleSheet.create({})