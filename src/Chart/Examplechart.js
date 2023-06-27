import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

const ChartApp = () => {
  const data = [
    {value: 20, label: 'M'},
    {value: 30, label: 'T'},
    {
      value: 50,
      label: 'W',
      topLabelComponent: () => (
        <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>50</Text>
      ),
    },
    {value: 40, label: 'T'},
    {value: 30, label: 'F'},
  ];

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
        value: 50,
        label: 'W',
        topLabelComponent: () => (
          <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>50</Text>
        ),
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
    label:"mon",
    topLabelComponent: () => (
      <View style={{Bottom:20}}> 
 <Text style={{color: 'blue', fontSize: 13,}}>mon</Text>
      </View>
     
    ),
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
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BarChart
       width={300} data={data} 
       frontColor="#177AD5"
       barWidth={3
       } // Set bar width to a thin value
        spacing={0} // Set spacing to 0 for no space between bars
        roundedTop={true}
        roundedBottom
        hideRules={true}
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: 'gray' }}
        noOfSections={3}
        maxValue={65}
        rulesType="solid"
        />
    </View>
  );
};

export default ChartApp;