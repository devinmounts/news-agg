import firebase from 'firebase/app';
import 'firebase/auth';

const proConfig = {
    apiKey: "AIzaSyCSCK-0j4v6S--z0yb04xQKk1Nf0O-lLMo",
    authDomain: "news-ag.firebaseapp.com",
    databaseURL: "https://news-ag.firebaseio.com",
    projectId: "news-ag",
    storageBucket: "news-ag.appspot.com",
    messagingSenderId: "1035401233378"  
};

const devConfig = {
    apiKey: "AIzaSyCcf5tp0iU49q7vlfgrgb3ox5z2eB3O-6c",
    authDomain: "dev-news-ag.firebaseapp.com",
    databaseURL: "https://dev-news-ag.firebaseio.com",
    projectId: "dev-news-ag",
    storageBucket: "",
    messagingSenderId: "341434539665"
  };

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;
  
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};