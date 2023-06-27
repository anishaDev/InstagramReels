import * as firebase from 'firebase';

import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA3097QTMAeNEmO2GyHIF3Z7cxO_M6xoz0',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'geofencingapp-71319',
  storageBucket: 'geofencingapp-71319.appspot.com',
  messagingSenderId: '173853613253',
  appId: '1:173853613253:android:c7f3f1a48eb0d949bd64ac',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };