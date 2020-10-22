import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALCxppRylA59nFgC_BrNTsu1al_heTsP8',
  authDomain: 'mobileapp1-f3eaf.firebaseapp.com',
  databaseURL: 'https://mobileapp1-f3eaf.firebaseio.com',
  projectId: 'mobileapp1-f3eaf',
  storageBucket: 'mobileapp1-f3eaf.appspot.com',
  messagingSenderId: '803501326170',
  appId: '1:803501326170:android:2c65e749238fbb0868bd63',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };