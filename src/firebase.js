// Import the functions you need from the SDKs you need 
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyB6tncRrha1YZyvpt18Ny2_Diq36BupOO8",
    authDomain: "financial-market-news-bl-d30af.firebaseapp.com",
    projectId: "financial-market-news-bl-d30af",
    storageBucket: "financial-market-news-bl-d30af.appspot.com",
    messagingSenderId: "410139578107",
    appId: "1:410139578107:web:73ff619bd462bcec686a5e",
    databaseURL: "https://financial-market-news-bl-d30af-default-rtdb.firebaseio.com"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Get a list of films from your database
async function getNews(database) {
    const newsCol = collection(database, 'Films');
    const newsSnapshot = await getDocs(newsCol);
    const newsList = newsSnapshot.docs.map(doc => doc.data());
    return newsList;
}

export const newsList = getNews(database);
export const storage = getStorage(app);


