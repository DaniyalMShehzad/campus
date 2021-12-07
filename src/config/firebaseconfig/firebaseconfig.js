import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMXJzuy2AOrc5d-ZyCK-1-wQ9zJcnWrSg",
  authDomain: "campus-recruitment-b1878.firebaseapp.com",
  databaseURL: "https://campus-recruitment-b1878-default-rtdb.firebaseio.com",
  projectId: "campus-recruitment-b1878",
  storageBucket: "campus-recruitment-b1878.appspot.com",
  messagingSenderId: "665836315272",
  appId: "1:665836315272:web:f7dd6e3e71fd64ff16f53d",
  measurementId: "G-G9QX6LH43P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
let login=(obj,navigate,dispatch)=>{
signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
    dispatch({
      type:"LOGIN",
      payload:user.uid,
    })
    // window.location.href = "/home2"
    navigate("/home2")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error"+errorMessage)
  });
}
let signup=(obj,dispatch,navigate)=>{
createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
    dispatch({
      type:"SIGNUP",
      payload:user.uid,
    })
    alert("Success")
    navigate("/home2")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("errorMessage"+errorMessage)
    // ..
  });
}
export{login,signup}