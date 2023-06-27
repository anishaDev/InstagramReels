import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import Svg from 'react-native-svg';

const ProgressCircleExamplee = () => {
  const circleRadius = 100;

  return (
    <View style={{ flex: 1, }}>
      <ProgressCircle
        style={{ height: circleRadius * 2 }}
        progress={0.5}
        strokeWidth={3}
        backgroundColor={'#8a809d'}
        progressColor={'#bc3cf6'}
        startAngle={-Math.PI}
        endAngle={Math.PI}
      >
        <Svg style={{ justifyContent: 'center' }}>
          <Text style={styles.text}>{'Text 1'}</Text>
        </Svg>
      </ProgressCircle>

      <ProgressCircle
        style={{ height: circleRadius * 2 }}
        progress={0.7}
        strokeWidth={3}
        backgroundColor={'#8a809d'}
        progressColor={'#f46964'}
        startAngle={-Math.PI * 0.9}
        endAngle={Math.PI * 1.1}
      >
        <Svg style={{ justifyContent: 'center' }}>
          <Text style={styles.text}>{'Text 2'}</Text>
        </Svg>
      </ProgressCircle>

      <ProgressCircle
        style={{ height: circleRadius * 2 }}
        progress={0.7}
        strokeWidth={3}
        backgroundColor={'#8a809d'}
        progressColor={'#f16eb8'}
        startAngle={-Math.PI * 0.9}
        endAngle={Math.PI * 1.1}
      >
        <Svg style={{ justifyContent: 'center' }}>
          <Text style={styles.text}>{'Text 3'}</Text>
        </Svg>
      </ProgressCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProgressCircleExamplee;
