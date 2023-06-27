import {PermissionsAndroid, Alert} from 'react-native';
import BackgroundService from 'react-native-background-actions';
import Geolocation from 'react-native-geolocation-service';

import * as geolib from 'geolib';
import { isPointWithinRadius } from 'geolib';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app requires access to your location.',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.error('Location permission request error:', error);
    return false;
  }
};

const options = {
  taskName: 'MyBackgroundTask',
  taskTitle: 'Background Task',
  taskDesc: 'Tracking location in the background',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  linkingURI: 'geozone://chat/jane',
  parameters: {
    delay: 1000,
  },
};
const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));
const veryIntensiveTask = async taskDataArguments => {
  const {delay} = taskDataArguments;

  const granted = await requestLocationPermission();
  if (!granted) {
    console.log('Location permission denied');
    return;
  }
//   getDistance(
//     { latitude: 51.525, longitude: 7.49347 },
//     { latitude: "51° 31' N", longitude: "7° 28' E" }
// );
const geofenceCenter = {
  latitude: 51.5175,
  longitude: 7.4678,
};
const geofenceRadius = 1000; 
  Geolocation.watchPosition(
    position => {
      const {latitude, longitude} = position.coords;
      console.log(latitude, longitude,"===>")
      const isWithinRadius = geolib.isPointWithinRadius(
        { latitude, longitude },
        geofenceCenter,
        geofenceRadius
      );
      if (!isWithinRadius) {
        Alert.alert('Out of Radius', 'You are outside the geofence radius.');
      }

      BackgroundService.updateNotification({
        taskTitle: `Latitude: ${latitude}, Longitude: ${longitude}`,
      });
    },
    error => {
      console.error('Geolocation error:', error);
    },
    {enableHighAccuracy: true, timeout: 0, maximumAge: 10},
  );

  await new Promise(async resolve => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      console.log(i);
      await sleep(delay);
    }
  });
};

const startBackgroundTask = async () => {
  try {
    const granted = await requestLocationPermission();

    if (granted) {
      await BackgroundService.start(veryIntensiveTask, options);
      console.log('Background task started');
    } else {
      console.log('Location permission denied');
    }
  } catch (error) {
    console.error('Background task error:', error);
  }
};

const stopBackgroundTask = () => {
  BackgroundService.stop();
  console.log('Background task stopped');
};

export {startBackgroundTask, stopBackgroundTask};
