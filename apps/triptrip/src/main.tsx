import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { AuthClient } from '@triptrip/auth/authClient';
import AuthClientProvider from '@triptrip/auth/AuthClientProvider';
import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'triptrip-a7794.firebaseapp.com',
  projectId: 'triptrip-a7794',
  storageBucket: 'triptrip-a7794.appspot.com',
  messagingSenderId: '454613313754',
  appId: '1:454613313754:web:701c3578b0c454d0e35de3',
  measurementId: 'G-LVCZHTXJ0Q'
};

initializeApp(firebaseConfig);
const authClient = new AuthClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthClientProvider client={authClient}>
      <App />
    </AuthClientProvider>
  </React.StrictMode>
);
