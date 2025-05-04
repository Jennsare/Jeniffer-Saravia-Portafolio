import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQ9GXQxOAHxz0-7lUBjZ7XbeOKAzGOEXw",
  authDomain: "jeniffer-saravia.firebaseapp.com",
  projectId: "jeniffer-saravia",
  storageBucket: "jeniffer-saravia.firebasestorage.app",
  messagingSenderId: "476239158502",
  appId: "1:476239158502:web:d7d91733ed570a482caf27",
  measurementId: "G-NHVM0T8D93"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);