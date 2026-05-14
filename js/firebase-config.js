// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDGtmOfCrG5fLvB0JmICX-7V0swGoNC84",
  authDomain: "monitoringplants.firebaseapp.com",
  databaseURL: "https://monitoringplants-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoringplants",
  storageBucket: "monitoringplants.firebasestorage.app",
  messagingSenderId: "969663345310",
  appId: "1:969663345310:web:b5c47c15a3ff864d0c818f",
  measurementId: "G-H3BF6XTN9K"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
