import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, addDoc, updateDoc } from "firebase/firestore"; 
import Helper from '../../components/Helper';



export default function Home() {

  // ==================  GET DATA FROM GUESTY ==================
  // console.log(" ============ HERE IS THE RESULT ============");

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     authorization: 'Bearer eyJraWQiOiJHNzFrRHI0VzZKTTBSREJUam1mU19WMlNhbVl2SkFrUzRqbGVQc2kzaFdrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmJXZlBJaDE3UEpla3JUM3J6bElKTmdGSDNhR1RUV1JTX2tqcFNOSEE5NnMiLCJpc3MiOiJodHRwczovL2xvZ2luLmd1ZXN0eS5jb20vb2F1dGgyL2F1czFwOHFyaDUzQ2NRVEk5NWQ3IiwiYXVkIjoiaHR0cHM6Ly9vcGVuLWFwaS5ndWVzdHkuY29tIiwiaWF0IjoxNjgxNDI1MjkzLCJleHAiOjE2ODE1MTE2OTMsImNpZCI6IjBvYTk0MTRrYWZZUHIyRjUxNWQ3Iiwic2NwIjpbIm9wZW4tYXBpIl0sInJlcXVlc3RlciI6IkVYVEVSTkFMIiwiYWNjb3VudElkIjoiNjI0MjdlOGU1MDI4ODQwMDMxMDFkZjEwIiwic3ViIjoiMG9hOTQxNGthZllQcjJGNTE1ZDciLCJ1c2VyUm9sZXMiOlt7InJvbGVJZCI6eyJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfX1dLCJyb2xlIjoidXNlciIsImlhbSI6InYzIiwiYWNjb3VudE5hbWUiOiJCZXR0ZXIgU3RheXMiLCJuYW1lIjoiUmVjdCBBcHAifQ.qNs1ouIlBAf7B2jZzsjLQ147PrDvepTXK8vxs2CuT1IlHafn2SIpSbRnqHVBAaGU17JblU106OzsFr1T_oQL4JcHP0K9ClLX9-xndQbrTFxcmvPMIN1eNK_c4duZ_rLxdY4AWAzbD5Iavc2WtslenMgYw53EK3FaHHjiXOIG14Z6U-xBa1TQRito51SziWsk7uLtTgXR1dGaNr5TDAqITf_xEQkE1DWyc_bsxPFcBK8bCn8dcZYmBGtqJgr3YFgkOWpB_10gxNK1tT6rJ0KAYmOF6hgTO7ltsh5NvL6j5eelRPiEgo6kRer62ZvKidm7ZriqYTEGPzVgRr5xapbfew'
  //   }
  // };
  
  // fetch('https://open-api.guesty.com/v1/listings', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));


  // ==================  GET TOKEN FROM GUESTY ==================

console.log(" ============ HERE IS THE RESULT ============");

const url = 'https://open-api.guesty.com/oauth2/token';
const requestData = new URLSearchParams({
  grant_type: 'client_credentials',
  scope: 'open-api',
  client_secret: 'iBUcfG26WS9cJLKXbOgeZW0Onz_8EeLBuVjqV7_y',
  client_id: '0oa9791wxak71xeJb5d7'
});

fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: requestData
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));




// ==================  GET DATA FROM HOSPITABLE ==================

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


// //RANDOM NUMBER 
// const randomNumber = Math.floor(Math.random() * 100);

// // FIREBASE
// const firebaseConfig = {
//   apiKey: "AIzaSyDvv6zU1DNGi1LoidkOAu3Ro2JLcrplf0U",
//   authDomain: "truezenithcreative-85781.firebaseapp.com",
//   projectId: "truezenithcreative-85781",
//   storageBucket: "truezenithcreative-85781.appspot.com",
//   messagingSenderId: "199949387061",
//   appId: "1:199949387061:web:c94b1a2fab756448b5f87c"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const currentTime = new Date().toLocaleTimeString();
// const currentDate = new Date().toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit'
// });





  return (
    <main className={styles.main}>
    
    </main>
  )
}


