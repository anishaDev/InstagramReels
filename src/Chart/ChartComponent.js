import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'



const ChartComponent = () => {

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2,
          },
        ],
      };
      const pieData = [
        {
          name: 'Seoul',
          population: 21500000,
          color: 'rgba(131, 167, 234, 1)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Toronto',
          population: 2800000,
          color: '#F00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Beijing',
          population: 527612,
          color: 'red',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'New York',
          population: 8538000,
          color: '#ffffff',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Moscow',
          population: 11920000,
          color: 'rgb(0, 0, 255)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      ];
    //   const chartConfig = {
    //     backgroundGradientFrom: "#1E2923",
    //     backgroundGradientFromOpacity: 0,
    //     backgroundGradientTo: "#08130D",
    //     backgroundGradientToOpacity: 0.5,
    //     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    //     strokeWidth: 2, // optional, default 3
    //     barPercentage: 0.5,
    //     useShadowColorFromDataset: false // optional
    //   };
    const chartConfig = {
      backgroundColor: '#000000',
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      };

      const screenWidth = Dimensions.get("window").width;
    //   const { colors } = useTheme();

// each value represents a goal ring in Progress chart
const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
   
    colors: [
      ['#FF6347'], // Color for the first data point
      ['#32CD32'], // Color for the second data point
      ['#4169E1'], // Color for the third data point
    ],
  };
  return (
    <View style={{flex:1}}>
    <View>
      <Text> Line Chart</Text>
      <LineChart
        data={lineData}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ac57fc',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      {/* <PieChart
      data={pieData}
      width={Dimensions.get("window").width}
      height={220}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    /> */}

<ProgressChart
  data={data}
  width={Dimensions.get("window").width}
  height={220}
  strokeWidth={2}
  radius={25}
  // chartConfig={chartConfig}
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(26, 128, 255, ${opacity})`,
  }}
  hideLegend={false}
/>
    </View>
{/* 
    <View>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width - 10}
        height={170}
        strokeWidth={7}
        hasLegend={true}
        withCustomBarColorFromData={true}
        radius={35}
        chartConfig={{
          backgroundGradientFromOpacity: 0.5,
          backgroundGradientToOpacity: 1,
          backgroundColor: colors.surface,
          backgroundGradientFrom: colors.surface,
          backgroundGradientTo: colors.surface,
          propsForLabels: { fill: colors.text },
          decimalPlaces: 2,
          color: (opacity = 1, _index) => `rgba(0,0,0,${opacity})`,
        }}
        style={{ marginVertical: 8, borderRadius: 10 }}
      />
    </View> */}
    </View>
  )
}

export default ChartComponent

const styles = StyleSheet.create({})