const firebase = require("firebase/app");
require("firebase/database");

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

const push = value => {
  firebase
    .database()
    .ref("/database")
    .push(value);
};

module.exports = {
  push
};
