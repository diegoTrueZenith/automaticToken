import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, addDoc, updateDoc } from "firebase/firestore"; 



export default function Home() {

//   console.log(" ============ HERE IS THE RESULT ============");
//   fetch('https://auth.hospitable.com/oauth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     client_id: 'b115db6a-cc55-4b3b-8d27-b7183318a9ce',
//     client_secret: '23835ee9f72aa85379da7abcef5e3b7eaee941e46558a4648152ae2a63cb87287',
//     audience: 'api.hospitable.com',
//     grant_type: 'client_credentials'
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));




const firebaseConfig = {
  apiKey: "AIzaSyDvv6zU1DNGi1LoidkOAu3Ro2JLcrplf0U",
  authDomain: "truezenithcreative-85781.firebaseapp.com",
  projectId: "truezenithcreative-85781",
  storageBucket: "truezenithcreative-85781.appspot.com",
  messagingSenderId: "199949387061",
  appId: "1:199949387061:web:c94b1a2fab756448b5f87c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const currentTime = new Date().toLocaleTimeString();

const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});


 async function addData(){


const tokenRef = doc(db, "360HomeFinder", "token");
await updateDoc(tokenRef, {
  date: currentDate,
  time: currentTime,  
  token: "HERE GOES YOUR TOKEN"
});
 }

 addData();



  return (
    <main className={styles.main}>
    </main>
  )
}
