import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





const firebaseConfig = {
    apiKey: "AIzaSyAITiMC9G_J1kfxLMvBfUKJTHeHqXmE6YM",
    authDomain: "chat-app-build-c2d68.firebaseapp.com",
    projectId: "chat-app-build-c2d68",
    storageBucket: "chat-app-build-c2d68.appspot.com",
    messagingSenderId: "880481150935",
    appId: "1:880481150935:web:e75e11601c5fcf3614cd92"
  };

  let app;
  if (firebase.apps.length === 0){
    app =  firebase.initializeApp(firebaseConfig);
  }
  else{
    app = firebase.app();
  }
  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth};