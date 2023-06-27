import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-svg-charts'

import { AreaChart, Grid ,transformDataForBarChart} from 'react-native-svg-charts'
import { Dots, Line } from '@/screens/AreaChartScreen/chartAdds'
const ChartBarscreen = () => {
  const data5 = [10, 20, 60, 30, 5, 90, 21, 47, 68, 88, 96, 55, 10, 73]

  const dataWithPickedColors = data5.map((item) => transformDataForBarChart(item))
//    const transformDataForBarChart = (number) => {
//     if (number <= 30) {
//         return {
//             value: number,
//             svg: {
//                 fill: 'red',
//             },
//         };
//     } else if (number > 30 && number < 70) {
//         return {
//             value: number,
//             svg: {
//                 stroke: 'orange',
//                 strokeWidth: 2,
//                 fill: '#FFD580',
//             },
//         };
//     } else {
//         return {
//             value: number,
//             svg: {
//                 fill: 'green',
//             },
//         };
//     }
// };

  return (
    <View>
     <BarChart
            style={{ height: 200 }}
            spacingInner={0.1}
            gridMin={-10}
            gridMax={120}
            data={dataWithPickedColors}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 30, bottom: 30 }}
        />
    </View>
  )
}

export default ChartBarscreen

const styles = StyleSheet.create({})