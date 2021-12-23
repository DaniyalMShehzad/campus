import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCompanyData, addData } from '../../../firebaseconfig/firebaseconfig';
import CompanyHome from '../companyHome';

export default function CompanyHiring() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [image, setImage] = useState();
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state)
    console.log(state);
    const Data = (e) => {
        e.preventDefault(e);
        const storage = getStorage();
        const storageRef = ref(storage,state?.uiddata?.userid?.user );
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log("kj", downloadURL);
                const obj = {
                    username: username,
                    email: email,
                    address: address,
                    contact: contact,
                    uid: state.uiddata.userid.user,
                    image: downloadURL,
                    desc: desc,
                }
                dispatch((dispatch) => addCompanyData(obj, dispatch, navigate, state))
                setUserName("")
                setEmail("")
                setAddress("")
                setContact("")
                setDesc("")
                setImage("")
            })
            })
    }
    const HandleChange = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <CompanyHome>
            <div>
                <div className="Data">
                    <div className="dataParent">
                        <form className="dataForm" onSubmit={(e) => Data(e)}>
                            <h4 className="DataH4EnterData">Enter Data</h4>
                            <div className="DataDiv">
                                <div className="DataField">
                                    <label className="EmailLabel">Image</label>
                                    <input
                                        onChange={(e) => HandleChange(e)}
                                        type="file"
                                        className="enterEmail2"
                                        placeholder='enter your Image'
                                    />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Company Name</label>
                                    <input className="dataInputBar" required type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Email</label>
                                    <input className="dataInputBar" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Address</label>
                                    <input className="dataInputBar" required type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Contact</label>
                                    <input className="dataInputBar" required type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Description</label>
                                    <textarea className="DataTextBar" name="w3review" rows="4" cols="58" value={desc} onChange={(e) => setDesc(e.target.value)}> </textarea>
                                </div>
                            </div>
                            <button className="AddData">Add Data</button>
                        </form>
                    </div>
                </div>
            </div>
        </CompanyHome>

    )
}
