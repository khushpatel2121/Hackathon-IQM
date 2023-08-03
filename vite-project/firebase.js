import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyArneItqT6pf1PG9YXBFF5hAwhbPpH8x84",
    authDomain: "book-store-bfdaf.firebaseapp.com",
    projectId: "book-store-bfdaf",
    storageBucket: "book-store-bfdaf.appspot.com",
    messagingSenderId: "435763364241",
    appId: "1:435763364241:web:9eb0cddf19c3004012da30",
    measurementId: "G-0Q0MD6F7QX"
  };

  const app = initializeApp(firebaseConfig);

  export default app