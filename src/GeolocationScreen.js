import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {startBackgroundTask, stopBackgroundTask} from './BackgroundTask';

const GeolocationScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  useEffect(() => {
    startBackgroundTask();

    return () => {
      stopBackgroundTask();
    };
  }, []);
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        setCurrentPosition(position);
 
      },
      error => {
        console.error('Geolocation error:', error);
      },
      {enableHighAccuracy: true, interval: 5000},
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {currentPosition && (
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          Latitude: {currentPosition.coords.latitude}, Longitude:{' '}
          {currentPosition.coords.longitude}
        </Text>
      )}
    </View>
  );
};
export default GeolocationScreen;
