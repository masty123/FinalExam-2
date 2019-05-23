import firebase from "firebase/app";
import "firebase/database";

const apis = {
    apiKey: "AIzaSyBU_oLmcjYprsDYFbywpPoiMXGu-IGb5aY",
    authDomain: "finalexam-65c93.firebaseapp.com",
    databaseURL: "https://finalexam-65c93.firebaseio.com",
    projectId: "finalexam-65c93",
    storageBucket: "finalexam-65c93.appspot.com",
    messagingSenderId: "208194578702",
    appId: "1:208194578702:web:036365384f4af492"
};

firebase.initializeApp(apis);

export default firebase;
