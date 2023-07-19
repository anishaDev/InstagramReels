import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Ashby, Poprocket,PoprocketStandalone } from '../Filter/CustomFilter';


const NewFilterScreen = () => {
  return (
    <View>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('../../assets/icons/car.jpeg')}
        resizeMode="cover"
      />

      <PoprocketStandalone image={{ uri: '../assets/icons/car.jpeg'}}>
        {(filteredImage) => (
          <Image
            style={{ width: 200, height: 200 }}
            source={filteredImage}
            resizeMode="cover"
          />
        )}
      </PoprocketStandalone>

      {/* <Poprocket image={{ uri: '../assets/icons/car.jpeg' }}>
        {(filteredImage) => (
          <Image
            style={{ width: 200, height: 200 }}
            source={filteredImage}
            resizeMode="cover"
          />
        )}
      </Poprocket> */}
    </View>
  )
}

export default NewFilterScreen

const styles = StyleSheet.create({
    image: {
        width: "150%",
        height: "150%",
        resizeMode:'contain'
        
      },
})