// import firebase from 'firebase/app';
import app from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

const devConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

const config = 
	process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
	
class Firebase {
	constructor() {
		app.initilizeApp(config);
	}
}

export default Firebase;

// const proConfig = {
//     apiKey: "AIzaSyCSCK-0j4v6S--z0yb04xQKk1Nf0O-lLMo",
//     authDomain: "news-ag.firebaseapp.com",
//     databaseURL: "https://news-ag.firebaseio.com",
//     projectId: "news-ag",
//     storageBucket: "news-ag.appspot.com",
//     messagingSenderId: "1035401233378"  
// };

// const devConfig = {
//     apiKey: "AIzaSyCcf5tp0iU49q7vlfgrgb3ox5z2eB3O-6c",
//     authDomain: "dev-news-ag.firebaseapp.com",
//     databaseURL: "https://dev-news-ag.firebaseio.com",
//     projectId: "dev-news-ag",
//     storageBucket: "",
//     messagingSenderId: "341434539665"
//   };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;
  
// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }

// const auth = firebase.auth();

// export {
//     auth,
// };