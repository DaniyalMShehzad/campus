import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCompanyData, addData } from '../../../firebaseconfig/firebaseconfig';
import CompanyHome from '../companyHome';
import { useSelector } from "react-redux"
export default function CompanyData() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [image, setImage] = useState();
    // const [desc, setDesc] = useState();
    const [dtstate, setDtState] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state)
    useEffect(() => {
        setDtState(state)
    }, [state])
    // console.log(state.uiddata.userid.type.type);
    const Data = (e) => {
        e.preventDefault(e);
        const storage = getStorage();
        const storageRef = ref(storage,`${state?.uiddata?.userid?.user}`);
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, image)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log("kj", downloadURL);
            const obj = {
            username: username,
            email: email,
            addess: address,
            image: downloadURL,
            contact: contact,
            uid: state.uiddata.userid.user,
        }
        dispatch((dispatch) => addData(obj, dispatch, navigate, state))
        setUserName("")
        setEmail("")
        setAddress("")
        setContact("")
        setImage("")
    })
    });
    }
    // console.log(state);
    // const HandleChange = (e) => {
    //     let reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState == 2)
    //         setImage(reader.result);
    //     };
    //     if(e.target.file){
    //         console.log("gfg");
    //         // reader.readAsDataURL(e.target.files[0]);
    //     }
    //     console.log(reader);
    //     console.log(e.target.files[0]);
    // }

    const HandleChange = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <>
            <CompanyHome>
                <h1>
                    hello world
                </h1>
                <div>
                    <div className="Data">
                        <div className="dataParent">
                            <form className="dataForm" onSubmit={(e) => Data(e)}>
                                <h4 className="DataH4EnterData">Enter Data</h4>
                                <div className="DataDiv">
                                    <div className="DataField">
                                        <label className="EmailLabel">Image</label>
                                        <input
                                            onChange={(e)=>HandleChange(e)}
                                            type="file"
                                            className="enterEmail2"
                                            placeholder='enter your Image'
                                        />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Enter Company</label>
                                        <input className="dataInputBar" value={username} required type="text" onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Enter Your Email</label>
                                        <input className="dataInputBar" required value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Enter Your Address</label>
                                        <input className="dataInputBar" required type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Contact</label>
                                        <input className="dataInputBar" required type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                </div>
                                <button className="AddData">Add Data</button>
                            </form>
                        </div>
                    </div>
                </div>
            </CompanyHome>
        </>
    )
}