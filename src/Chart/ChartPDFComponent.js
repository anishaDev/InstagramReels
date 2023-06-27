import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

const ChartPDFComponent = () => {
  const data = [10, 20, 15, 25, 30, 10]; // Example chart data

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={data}
        svg={{ stroke: 'blue' }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    width: 300,
    height: 200,
  },
});

export default ChartPDFComponent;