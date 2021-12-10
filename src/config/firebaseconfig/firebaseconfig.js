import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,signOut } from "@firebase/auth";
import { getDatabase, ref, set, push, get, child } from "firebase/database";
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
let login = (obj, navigate, dispatch) => {
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.uid);
      dispatch({
        type: "LOGIN",
        payload: user.uid,
      })
      // window.location.href = "/home2"
      navigate("/home2")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error" + errorMessage)
    });
}
let authentication = (obj, navigate, dispatch) => {
  console.log(obj);
  return dispatch => {
    const db = getDatabase();
    set(ref(db, 'studentauthentication/' + obj.uid), obj).then(() => {

      dispatch({
        type: "STUDENTAUTHENTICATION",
        ...obj,
      })
    })
    // navigate({ state: obj })
    console.log(obj);
    // push(ref(db, + 'studentData/'), obj)
    //   .then(() => {
    //       // Data saved successfully!
    //   // console.log("success");
    //   // alert("data sent")
    //   // console.log(obj);
    //   // dispatch({
    //   //   type: "ADDDATATATYPE",
    //   //   payload: obj,
    //   // })
    //   // navigate("LoginHome",{ state: obj })
    // })
    // .catch((error) => {
    //     // The write failed...
    //     alert("error")
    //   });
  }
}
let signup = (dispatch, navigate, obj) => {
  console.log(obj);
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
    let newobj={...obj,...user}
    const db = getDatabase();
    set(ref(db, 'authentication/' + newobj.uid), {
      newobj
    })
    // .then((res) => {
    //   console.log(res)
    //   // dispatch({
    //   //   type: "STUDENTAUTHENTICATION",
    //   //   ...obj,
    //   // })
    // })
    // dispatch({
    //   type: "SIGNUP",
    //   payload: newobj,
    // })
    console.log(obj);
      // alert("Success")
      navigate("/home2")
      // ...
      console.log(newobj);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage" + errorMessage);
      // ..
    });
}
// let useruid = (setLoader, dispatch) => {
//   setLoader(true);
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(uid);
//       const dbRef = ref(getDatabase());
//       get(child(dbRef, `authentication/${uid}/newobj`)).then((snapshot) => {
//         // if (snapshot.exists()) {
//           console.log(snapshot.val());
//           let uidData= {...snapshot.val()}
//         // }
//         dispatch({
//           type: "USERUIDDATA",
//           payload: uidData,
//         })
//         // setUserLogin(true);
//         // setUserData(location.state);
//         // getData();
//       })
//       setLoader(false);
//     } else {
//       console.log("error")
//     }
//   });
// }
// const addData = (obj,dispatch,navigate) => {
//   let refrence = ref(db, "users/");
//   let arr = [];
//   onChildAdded(refrence, (snapshot) => {
//     if (snapshot.exists()) {
//       arr.push(snapshot.val());
//       setUserList([...arr]);
//       dispatch({
//         type:"ADDDATATATYPE",
//         payload:obj,
//       })
//     }
//   });
// };
let addData = (obj, navigate, dispatch) => {
  console.log(obj);
  return dispatch => {
    const db = getDatabase();
    set(ref(db, 'studentData/' + obj.uid), obj).then(() => {

      dispatch({
        type: "ADDDATATATYPE",
        ...obj,
      })
    })
    // navigate({ state: obj })
    console.log(obj);
    // push(ref(db, + 'studentData/'), obj)
    //   .then(() => {
    //       // Data saved successfully!
    //   // console.log("success");
    //   // alert("data sent")
    //   // console.log(obj);
    //   // dispatch({
    //   //   type: "ADDDATATATYPE",
    //   //   payload: obj,
    //   // })
    //   // navigate("LoginHome",{ state: obj })
    // })
    // .catch((error) => {
    //     // The write failed...
    //     alert("error")
    //   });
  }
}
let signout=(navigate)=>{
signOut(auth).then(() => {
  console.log("Sign-out successful");

  navigate("/")
}).catch((error) => {
  console.log("An error happened.");
});
}
export { login, signup,  addData,signout,authentication }