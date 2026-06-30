import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuhMQVvFKAW9BjWPRWbcVf-lpCBpOzjN4",
  authDomain: "exampro-18132.firebaseapp.com",
  projectId: "exampro-18132",
  storageBucket: "exampro-18132.firebasestorage.app",
  messagingSenderId: "679501944615",
  appId: "1:679501944615:web:2a8883dfdf985836c07b02"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);