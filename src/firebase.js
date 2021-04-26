  
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const firebaseConfig = {
//       apiKey: "AIzaSyD36AP54yKTlZ_LKPSIhFSYh8Q_vwWii3M",
//     authDomain: "chat-project-c4192.firebaseapp.com",
//     projectId: "chat-project-c4192",
//     storageBucket: "chat-project-c4192.appspot.com",
//     messagingSenderId: "231430346119",
//     appId: "1:231430346119:web:2578fe12c860e97e2eef22",
//     measurementId: "G-T75N3XD66J"
// }
// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
 firebase.initializeApp({
    apiKey: "AIzaSyD36AP54yKTlZ_LKPSIhFSYh8Q_vwWii3M",
    authDomain: "chat-project-c4192.firebaseapp.com",
    projectId: "chat-project-c4192",
    storageBucket: "chat-project-c4192.appspot.com",
    messagingSenderId: "231430346119",
    appId: "1:231430346119:web:2578fe12c860e97e2eef22",
    measurementId: "G-T75N3XD66J"
 });
}else {
   firebase.app(); // if already initialized, use that one
}

export default firebase;

// if (!firebase.apps.length) {
//  firebase.initializeApp({
//     apiKey: "AIzaSyD36AP54yKTlZ_LKPSIhFSYh8Q_vwWii3M",
//     authDomain: "chat-project-c4192.firebaseapp.com",
//     projectId: "chat-project-c4192",
//     storageBucket: "chat-project-c4192.appspot.com",
//     messagingSenderId: "231430346119",
//     appId: "1:231430346119:web:2578fe12c860e97e2eef22",
//     measurementId: "G-T75N3XD66J"
//  });
// }else {
//    firebase.app(); // if already initialized, use that one
// }