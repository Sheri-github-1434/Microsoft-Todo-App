import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBYdpGBBenFG58S0AO7ahH-l3HPfW7C-Wo",
    authDomain: "todo-app-clone-81ff3.firebaseapp.com",
    databaseURL: "https://todo-app-clone-81ff3-default-rtdb.firebaseio.com",
    projectId: "todo-app-clone-81ff3",
    storageBucket: "todo-app-clone-81ff3.appspot.com",
    messagingSenderId: "852383720497",
    appId: "1:852383720497:web:3682435063bb8f0962e110",
    measurementId: "G-YLMDN06GVP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  export default firebase;