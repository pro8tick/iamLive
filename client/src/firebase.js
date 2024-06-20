import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sarthak-mern-blog.firebaseapp.com",
  projectId: "sarthak-mern-blog",
  storageBucket: "sarthak-mern-blog.appspot.com",
  messagingSenderId: "875266157461",
  appId: "1:875266157461:web:04f7cdf6c391a0fdaea49c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
