import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0_SavzUFeq3V-ssYg2t8aDfusPc1smd4",
  authDomain: "gameworld-d4136.firebaseapp.com",
  projectId: "gameworld-d4136",
  storageBucket: "gameworld-d4136.appspot.com", // исправлено на правильный формат
  messagingSenderId: "353988612491",
  appId: "1:353988612491:web:b5ae14906d2d2140675f8e",
  measurementId: "G-QKK3H0JQD5"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // добавляем storage
const analytics = getAnalytics(app);

export { auth, storage }; // экспортируем оба объекта
export default firebaseConfig;