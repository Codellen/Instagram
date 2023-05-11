
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6waMa1TKP30_a4R5tyo0SajaAPOE0kCU",
  authDomain: "instagram-5f1f1.firebaseapp.com",
  projectId: "instagram-5f1f1",
  storageBucket: "instagram-5f1f1.appspot.com",
  messagingSenderId: "963258745291",
  appId: "1:963258745291:web:61f1734f7466362d08f64e",
  databaseURL:"https://instagram-5f1f1-default-rtdb.firebaseio.com/"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp