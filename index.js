/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { firebase } from '@react-native-firebase/app';
// import messaging from '@react-native-firebase/messaging';

// // Initialize Firebase
// firebase.initializeApp();

// // Initialize FCM
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Received background message:', remoteMessage);
// });

AppRegistry.registerComponent(appName, () => App);
