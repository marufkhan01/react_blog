import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBGKuTvvcdD4bEBQD8ZeG5aB2oRrvh2EJI",
    authDomain: "fir-blog-66ea5.firebaseapp.com",
    databaseURL: "https://fir-blog-66ea5.firebaseio.com",
    projectId: "fir-blog-66ea5",
    storageBucket: "",
    messagingSenderId: "481408710315"
  };
  firebase.initializeApp(config);

  export default firebase;