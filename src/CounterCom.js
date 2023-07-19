import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterCom = ({number = 0}) => {
    console.log(":counter component re-render",number)
  return (
    <View>
      <Text style={{fontSize:25,fontWeight:'bold'}}>{number}</Text>
    </View>
  )
}

export default React.memo(CounterCom)

const styles = StyleSheet.create({})