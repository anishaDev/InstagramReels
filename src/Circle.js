import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Svg, { G, Circle } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Circles = () => {

    const percentage = 100
    const radius = 40
    const strokeWidth = 10
    const duration = 2000
    const color = 'tomato'
    const delay = 0
    const max = 100

    const animatedValue = useRef(new Animated.Value(0)).current;
    const circleRef = useRef();
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;

    const animation = (toValue) => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue,
                duration,
                delay,
                useNativeDriver: true,
            })
        ).start()
    };

    useEffect(() => {
        animation(percentage)

        animatedValue.addListener((v) => {
            if (circleRef?.current) {
                const maxPerc = 100 * v.value / max
                const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100;
                circleRef.current.setNativeProps({
                    strokeDashoffset,
                })
            }
        })
    })
    return (
        <View style={styles.container}>
            <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
                <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeOpacity={0.2}
                    />
                    <AnimatedCircle
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap='round' />
                </G>
            </Svg>
        </View>
    )
}

export default Circles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})













