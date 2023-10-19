import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBYjZHN2_MwmXp65M75WnPpXLf78_fmARU',
  authDomain: 'dream-loud-gaming-vite.firebaseapp.com',
  projectId: 'dream-loud-gaming-vite',
  storageBucket: 'dream-loud-gaming-vite.appspot.com',
  messagingSenderId: '242775185006',
  appId: '1:242775185006:web:e6dd524d2f44db6453387f',
  measurementId: 'G-FDLQJTEYFB',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
