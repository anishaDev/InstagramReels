import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import Svg from 'react-native-svg';

import Gradientscreen from './Gradientcomp';
const ProgressCircleExample = () => {

  const circleRadius = 100;
  const textOffset = 20;
  const backgroundColorStrokeWidth = 4;
  const progressColorStrokeWidth = 8;
  return (
    <View style={{flex:1}}>
      <View style ={{flexDirection:'row',justifyContent:'space-evenly',height:'10%',width:'100%',marginVertical:10,alignItems:'center'}}>
        <View style={{height:40,width:70,backgroundColor:'#f9f9f9',justifyContent:'center',alignItems:'center',elevation:4}}>
        <Text style={{textAlign:'center',color:"#f46964",fontSize:14}}>Day</Text>
        </View>
        <View style={{height:40,width:70,backgroundColor:'#f9f9f9',justifyContent:'center',alignItems:'center',elevation:4}}>
        <Text style={{textAlign:'center',color:"#f46964",fontSize:14}}>Week</Text>
        </View>
        <View style={{height:40,width:70,backgroundColor:'#f9f9f9',justifyContent:'center',alignItems:'center',elevation:4}}>
        <Text style={{textAlign:'center',color:"#f46964",fontSize:14}}>Month</Text>
        </View>
       
      </View>
    <View style={{flex:1,}}>
 <Gradientscreen/>
     
    </View>
    <View style={{flex: 1, marginVertical: 10,top:30}}>
     
      <View
        style={{
          height: '80%',
          width: '100%',
          backgroundColor: '#f9f9f9',
          elevation: 4,
          borderRadius: 15,
        }}>
        <ProgressCircle
          style={{height: 200,marginVertical: 10}}
          progress={0.5}
          strokeWidth={3}
          // strokeWidth={progressColorStrokeWidth}
          backgroundColor={'#8a809d'}
          progressColor={'#bc3cf6'}
          startAngle={-Math.PI}
          endAngle={Math.PI}>
          <Svg style={{justifyContent: 'center', marginVertical: 10}}>
            <ProgressCircle
              style={{height: 180}}
              progress={0.7}
              strokeWidth={3}
              backgroundColor={'#8a809d'}
              progressColor={'#f46964'}
              startAngle={-Math.PI * 0.9}
              endAngle={Math.PI * 1.1}>
              <Svg style={{justifyContent: 'center', marginVertical: 10}}>
                <ProgressCircle
                  style={{height: 160}}
                  progress={0.7}
                  strokeWidth={3}
                  backgroundColor={'#8a809d'}
                  progressColor={'#f16eb8'}
                  startAngle={-Math.PI * 0.9}
                  endAngle={Math.PI * 1.1}>
                  <Svg style={{justifyContent: 'center'}}>
                    <View
                      style={{
                        height: 50,
                        width: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 180,
                      }}>
                      <Text
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: [{translateX: -50}, {translateY: -10}],
                          color: '#f18080',
                          fontSize: 13,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          top: 80,
                        }}>
                        UPGRADE
                      </Text>
                    </View>
                  </Svg>
                </ProgressCircle>
              </Svg>
            </ProgressCircle>
          </Svg>
        </ProgressCircle>
        <View
          style={{
            height: 90,
            width: '90%',
            marginVertical: 5,
            // borderWidth: 1,
            // borderColor: 'black',
            marginHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            bottom:20,

          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              marginHorizontal: 30,
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 100,
                backgroundColor: '#f16eb8',
                marginRight: 8,
                top: 1,
              }}></View>
            <Text
              style={{
                fontSize: 13,
                color: '#f16eb8',
                fontWeight: '400',
                bottom: 5,
              }}>
              50%
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              marginHorizontal: 20,
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 100,
                backgroundColor: '#f46964',
                marginRight: 8,
                top: 1,
              }}></View>
            <Text
              style={{
                fontSize: 13,
                color: '#f46964',
                fontWeight: '400',
                bottom: 5,
              }}>
              75%
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              marginHorizontal: 25,
              marginRight:10
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 100,
                backgroundColor: '#bc3cf6',
                marginRight: 8,
                top: 1,
              }}></View>
            <Text
              style={{
                fontSize: 13,
                color: '#bc3cf6',
                fontWeight: '400',
                bottom: 5,
              }}>
              40%
            </Text>
          </View>
        </View>
      </View>
     
    
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    width: 150,
    height: 200,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // text: {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: [{ translateX: -20 }, { translateY: -20 }],
  // },
});
export default ProgressCircleExample;
