import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { BarChart } from "react-native-gifted-charts";
const Gradientscreen = () => {
 
  const barData = [
    {
      value: 10,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    
   

    },
    {
      value: 12,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 14,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 16,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
    {
      value: 19,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {
      value: 19,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth:30,
    showTopLabel: true,

    topLabelComponent: () => (
      <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
      <Text style={{
          color: "black",
          fontSize: 10,
          marginBottom: 6,
          zIndex: 33,
          position: "absolute",
          width: 40,
          bottom: 5,
          textAlign: "auto"
      }}>Lorese</Text>

      </View>
    
    )
  },

    {
      value: 16,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {
      value: 14,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 12,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 10,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
   

    },
    {
      value: 10,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
   

    },
    {
      value: 12,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 14,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 16,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
    {
      value: 20,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 22,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 24,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
   

    },
    {
      value: 26,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 28,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 30,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
      topLabelComponent: () => (
        <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
        <Text style={{
            color: "black",
            fontSize: 10,
            marginBottom: 6,
            zIndex: 33,
            position: "absolute",
            width: 40,
            bottom: 5,
            textAlign: "auto"
        }}>Lorese</Text>
  
        </View>
      
      )
    },
    {value: 30, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
    {
      value: 30,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {
      value: 28,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 26,
      // label: 'Jan',
      spacing:4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 24,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 22, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
    {
      value: 20,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 18,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 16,
      // label: 'Jan',
      
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray',bottom:100},
      frontColor: '#bc3cf6',
   

    },
    {
      value: 14,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 12,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 9,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 8, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
    {
      value: 7,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
      topLabelComponent: () => (
        <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
        <Text style={{
            color: "black",
            fontSize: 10,
            marginBottom: 6,
            zIndex: 33,
            position: "absolute",
            width: 40,
            bottom: 5,
            textAlign: "auto"
        }}>Lorese</Text>
  
        </View>
      
      )
    },

    {
      value: 8,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 9,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 10,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 12, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
    {
      value: 14,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 16,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 18,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
   

    },
    {
      value: 20,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 20,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
    {
      value: 22,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {value: 24, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
    {
      value: 26,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f16eb8',
    },
    {
      value: 28,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 15,
      labelTextStyle: {color: 'gray'},
      frontColor: '#bc3cf6',
    },
    {
      value: 30,
      // label: 'Jan',
      spacing: 4,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#f46964',
    },
   
   
   
   
    
    
  ];


  const renderBarsWithText = () => {
    return bardata.map((item, index) => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
        <View
          style={{
            height: item.value * 2,
            width: 30,
            backgroundColor: item.color,
            marginRight: 8,
          }}
        />
        <Text style={{ color: 'lightgray' }}>{item.label}</Text>
        {item.showTopLabel && (
          <View style={{ position: 'absolute', top: -20, alignItems: 'center' }}>
            <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>
              {item.value}
            </Text>
          </View>
        )}
      </View>
    ));
  };
  

const renderTitle = () => {
  return(
    <View style={{flex:1}}>
    <View style={{marginVertical: 0}}>
    <Text
      style={{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
      Chart title goes here
    </Text>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 24,
        backgroundColor:'red',
        height:20,
     
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#bc3cf6',
            marginRight: 8,
          }}
        />
        <Text
          style={{
            width: 60,
            height: 16,
            color: 'lightgray',
          }}>
          Point 01
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#f46964',
            marginRight: 8,
          }}
        />
        <Text
          style={{
            width: 60,
            height: 16,
            color: 'lightgray',
          }}>
          Point 02
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#f16eb8',
            marginRight: 8,
          }}
        />
        <Text
          style={{
            width: 60,
            height: 16,
            color: 'lightgray',
          }}>
          Point 03
        </Text>
      </View>
    </View>
  
  </View>
  )
}



  return (
    <View
    style={{
      backgroundColor: '#f9f9f9',

      borderRadius: 15,
      height: '80%',
      width: '100%',
   
      elevation: 6,
      marginTop:40,
    
      // transform: [
      //   {perspective: 1000},
      //   {rotateX: '2deg'},
      //   {rotateY: '2deg'},
      // ],
    }}>
    {/* {renderTitle()} */}
    <BarChart
     data={barData}
     barWidth={3} // Set bar width to a thin value
     spacing={0} // Set spacing to 0 for no space between bars
     roundedTop={true}
     width={500}
     roundedBottom
     hideRules={true}
     xAxisThickness={0}
     yAxisThickness={0}
     yAxisTextStyle={{ color: 'gray' }}
     noOfSections={3}
     maxValue={75}
     rulesType="solid"
 
    />
    
  </View>
  
  );
};

export default Gradientscreen;

const styles = StyleSheet.create({});
