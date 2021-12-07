import React, { useState } from 'react'
import Home from '../home'
import { getDatabase, ref, set, push, child } from "firebase/database";

export default function Data() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [experience, setExperience] = useState();
    const [image, setImage] = useState();

    const addData= ()=> {
        const db = getDatabase();
        const newPostKey = push(child(ref(db), 'users')).key;
        set(ref(db, + newPostKey), {
          image: image,
          username: username,
          email: email,
          address:address,
          contact:contact,
          experience:experience,
          uid: newPostKey
        })
        .then(() => {
          // Data saved successfully!
          console.log("success");
          alert("data sent")
          
        })
        .catch((error) => {
          // The write failed...
          alert("error")
        });
      }


    return (
        <div>
            <>
                <Home />
                <div className="Data">
                    <div className="dataParent">
                        <form className="dataForm">
                            <h4 className="DataH4EnterData">Enter Data</h4>
                            <div className="DataDiv">
                                <div className="DataField">
                                <label className="DataLabel">Image</label>
                                <input className="DataImg" type="file" required  onChange={(e) => setImage(e.target.value)} />
                                </div>
                                <div className="DataField">
                                <label className="DataLabel">Enter Your Name</label>
                                <input className="dataInputBar" required type="text" onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="DataField">
                                <label className="DataLabel">Enter Your Email</label>
                                <input className="dataInputBar" required type="email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="DataField">
                                <label className="DataLabel">Enter Your Address</label>
                                <input className="dataInputBar" required  type="text" onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="DataField">
                                <label className="DataLabel">Contact</label>
                                <input className="dataInputBar" required  type="number" onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <div className="DataField">
                                <label className="DataLabel">Experience</label>
                                <textarea name="w3review" rows="4" cols="50" onChange={(e) => setExperience(e.target.value)}> </textarea>
                                </div>
                            </div>
                            <button className="DataAddData" onClick={addData}>Add Data</button>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}
