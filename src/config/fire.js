import firebase from'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAJQHTdi2h7wubG3rodMFMEDEbSG3G-rNI",
    authDomain: "cookbook-65d3d.firebaseapp.com",
    databaseURL: "https://cookbook-65d3d.firebaseio.com",
    projectId: "cookbook-65d3d",
    storageBucket: "cookbook-65d3d.appspot.com",
    messagingSenderId: "485708621971",
    appId: "1:485708621971:web:21cac4156b723b63e94566",
    measurementId: "G-T5LPB8FLQG"
  };
  // Initialize Firebase
  const fire =  firebase.initializeApp(firebaseConfig);
  
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
  export default fire;