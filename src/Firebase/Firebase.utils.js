import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD76EEkG8L4miDHSdc6_aJzRDLirz5834o",
    authDomain: "jkrx-db.firebaseapp.com",
    projectId: "jkrx-db",
    storageBucket: "jkrx-db.appspot.com",
    messagingSenderId: "713781936847",
    appId: "1:713781936847:web:ace1f17c8088f5dfc4adba",
    measurementId: "G-66RBWRCFFE"
  }

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get()

      if(!snapShot.exists){
          const {displayName,email} = userAuth;
          const createdAt = new Date();

          try{
              userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.massege)
          }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( {prompt: 'select_account'} );

  export const signInWithGoogle = () =>{
      auth.signInWithPopup(provider);
  }

  export default firebase;
