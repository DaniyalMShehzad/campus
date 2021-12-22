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
      const user = userCredential.user.uid;
      console.log(user);
      const dbRef = ref(getDatabase());
      get(child(dbRef, `authentication/${user}/newobj`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          let uidData= {...snapshot.val()}
          if(uidData?.type?.type==="user"){
            navigate("/loginhome2")
          }
          else if(uidData?.type?.type==="company"){
            navigate("/companyHome2")
          }
          else if(uidData?.type?.type==="admin"){
            console.log(uidData.type);
            navigate("/adminCompanydata")
          }
          dispatch({
            type: "USERUIDDATA",
            payload: uidData,
          })
        }
        })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error" + errorMessage)
    });
}
let signup = (dispatch, navigate, obj) => {
  console.log(obj);
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user.uid;
    // console.log(user.uid);
    let newobj={...obj,user}
    console.log(newobj);
    const db = getDatabase();
    set(ref(db, "authentication/"+ newobj.user), {
      newobj
    })
    const dbRef = ref(getDatabase());
      get(child(dbRef, `authentication/${newobj.user}/newobj`)).then((snapshot) => {
        // if (snapshot.exists()) {
          console.log(snapshot.val());
          let uidData= {...snapshot.val()}
          // console.log(uiddata);
          if(uidData?.type?.type==="user"){
            navigate("/loginhome2")
          }
          else if(uidData?.type?.type==="company"){
            navigate("/companyHome2")
          }
        // }
        dispatch({
          type: "USERUIDDATA",
          payload: uidData,
        })
        // setUserLogin(true);
        // setUserData(location.state);
        // getData();
      })
      dispatch({
        type: "SIGNUP",
        payload: newobj,
      })
    console.log(obj);
      // alert("Success")
      navigate("/loginhome2")
      console.log(newobj);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage" + errorMessage);
      // ..
    });
  // })
}
let uiddata = (setLoader, dispatch,navigate) => {
  setLoader(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      // if(uid===auth.currentUser.uid){
      const dbRef = ref(getDatabase());
      get(child(dbRef, `authentication/${uid}/newobj`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          let uidData= {...snapshot.val()}
          // if(uidData?.type?.type==="user"){
          //   navigate("/loginhome2")
          // }
          // else if(uidData?.type?.type==="company"){
          //   navigate("/companyHome2")
          // }
          dispatch({
            type: "USERUIDDATA",
            payload: uidData,
          })
          // console.log(uiddata);
        }
      
      })
      setLoader(false);
    } else {
      console.log("error")
      navigate("/")
    }
  });
}
const companyPostData=(dispatch,state)=>{
  const dbRef = ref(getDatabase());
  if(state?.uiddata?.userid?.type?.type==="user"){
    get(child(dbRef, `companyPostData/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let newobj= {...snapshot.val()}
        console.log(newobj);
        dispatch({
          type: "POSTS",
          payload: newobj,
        })
      }
      else{
        console.log("no data avalible");
      }
    })
  }
  else if(state?.uiddata?.userid?.type?.type==="company"){
    get(child(dbRef, `studentscv/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let newobj= {...snapshot.val()}
        console.log(newobj);
        dispatch({
          type: "POSTS",
          payload: newobj,
        })
      }
      else{
        console.log("no data avalible");
      }
    })
  }
  else if(state?.uiddata?.userid?.type?.type==="admin"){
    get(child(dbRef, `companyData/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let newobj= {...snapshot.val()}
        console.log(newobj);
        dispatch({
          type: "POSTS",
          payload: newobj,
        })
      }
      else{
        console.log("no data avalible");
      }
    })
  }

}
const getCompanyData = (dispatch,state)=>{
  const dbRef = ref(getDatabase());
  if(state?.uiddata?.userid?.type?.type==="company"){
  get(child(dbRef, `studentData/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      let newobj= {...snapshot.val()}
      console.log(newobj);
      dispatch({
        type: "ADDDATATATYPE",
        payload: newobj,
      })
    }
    else{
  console.log("no data avalible");
}
})
  }
else if(state?.uiddata?.userid?.type?.type==="admin"){
  get(child(dbRef, `companyPostData/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      let newobj= {...snapshot.val()}
      console.log(newobj);
      dispatch({
        type: "ADDDATATATYPE",
        payload: newobj,
      })
    }
  })
}
}
let addpostdata = (dispatch,navigate,state,e) => {
      const dbRef = ref(getDatabase());
      console.log(e.uid);
      const user =auth.currentUser.uid
      const db = getDatabase();
  if(state?.uiddata?.userid?.type?.type==="user"){
      get(child(dbRef, `studentData/${user}`)).then((snapshot) => {
        if (snapshot.exists()) {
          let uid2={id:e.uid}
          console.log(uid2);
          console.log(snapshot.val());
          let newobj= {...snapshot.val(),uid2}
          const newPostKey = push(child(ref(db), 'posts')).key;
          console.log(newPostKey);
          set(ref(db, `studentscv/${newPostKey}`), newobj).then(() => {
            navigate({data:newobj})   
          })
        }else{
          console.log("no data avalible");
        }
      })
    }
    } 
const authentication = (dispatch,state) => {
  const dbRef = ref(getDatabase());
  if(state?.uiddata?.userid?.type?.type==="user"){
    get(child(dbRef, `companyData/`)).then((snapshot) => {
      // if (snapshot.exists()) {
        console.log(snapshot.val());
        let newobj= {...snapshot.val()}
        console.log(newobj);
        // navigate({state:newobj})
      // }
      dispatch({
        type: "USERS",
        payload: newobj,
      })
    })
  }
  else if(state?.uiddata?.userid?.type?.type==="company"){
      get(child(dbRef, `authentication/`)).then((snapshot) => {
        // if (snapshot.exists()) {
          console.log(snapshot.val());
          let newobj= {...snapshot.val()}
          console.log(newobj);
          // navigate({state:newobj})
        // }
        dispatch({
          type: "USERS",
          payload: newobj,
        })
      })
    }
    else if(state?.uiddata?.userid?.type?.type==="admin"){
      get(child(dbRef, `studentData/`)).then((snapshot) => {
        // if (snapshot.exists()) {
          console.log(snapshot.val());
          let newobj= {...snapshot.val()}
          console.log(newobj);
          // navigate({state:newobj})
        // }
        dispatch({
          type: "USERS",
          payload: newobj,
        })
      })
    }
};
let adminAuthentitation=(dispatch, navigate,state)=>{
  const dbRef = ref(getDatabase());
  get(child(dbRef, `authentication/`)).then((snapshot) => {
    // if (snapshot.exists()) {
      console.log(snapshot.val());
      let newobj= {...snapshot.val()}
      console.log(newobj);
    dispatch({
      type: "ADMINAUTHENTATION",
      payload:newobj,
    })
  })
}
let addData = (obj, dispatch, navigate,state) => {
  console.log(obj);
  // return dispatch => {
  const dbRef = ref(getDatabase());
    const db = getDatabase();
    if(state?.uiddata?.userid?.type?.type==="user"){
      set(ref(db, `studentData/${obj.uid}`), obj).then(() => {
      })
    }
    else if(state?.uiddata?.userid?.type?.type==="company"){
      set(ref(db, `companyData/${obj.uid}`), obj).then(() => {
      })
    }
    dispatch({
      type: "ADDDATATATYPE",
      payload:obj,
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
  // }
}

let addCompanyData=(obj, dispatch, navigate,state)=>{
  console.log(obj);
  const db = getDatabase();
  set(ref(db, 'companyPostData/' + obj.uid), obj).then(() => {
    // dispatch({
    //   type: "ADDDATATATYPE",
    //   ...obj,
    // })
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
let signout=(navigate,dispatch)=>{
signOut(auth).then(() => {
  console.log("Sign-out successful");
  navigate("/")
}).catch((error) => {

  console.log("An error happened.");
});
}
const acceptData=(dispatch,accept,data,usersuid)=>{
  // console.log(data);
  let obj={}
  obj=data.filter((a,i)=>a.uid===usersuid)[0] 
  console.log({...obj,condition:accept});
  
    // console.log(data);
}
export { login, 
  signup,  
  addData,
  signout,
  authentication,
  uiddata,
  companyPostData,
  addpostdata,
  addCompanyData,
  getCompanyData,
  acceptData,
  adminAuthentitation
}