import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzTh-5ZIOnAvJZZGw8W9EM6ZjXUtO1Mbk',
  authDomain: 'react--auth-50cac.firebaseapp.com',
  projectId: 'react--auth-50cac',
  storageBucket: 'react--auth-50cac.appspot.com',
  messagingSenderId: '218161936822',
  appId: '1:218161936822:web:e8a62880d72b19317d6917',
  measurementId: 'G-SBT6WRB5NM',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
