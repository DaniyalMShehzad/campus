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
    // const [image, setImage] = useState();
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state)
    console.log(state);
    const Data = (e) => {
        e.preventDefault(e);
        const obj = {
            username: username,
            email: email,
            address: address,
            contact: contact,
            uid: state.uiddata.userid.user,
            image:state.studentdata.userid.image,
            desc:desc,
        }
        dispatch((dispatch) => addCompanyData(obj, dispatch, navigate,state))
        setUserName("")
        setEmail("")
        setAddress("")
        setContact("")
        setDesc("")
    }
    // const HandleChange = (e) => {
    //     let reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState == 2)
    //             setImage(reader.result);
    //     };
    //     // firebase.database().ref('UserData').push(object)
    //     reader.readAsDataURL(e.target.files[0]);
    // }
    return (
        <CompanyHome>
            <div>
                <div className="Data">
                    <div className="dataParent">
                        <form className="dataForm" onSubmit={(e) => Data(e)}>
                            <h4 className="DataH4EnterData">Enter Data</h4>
                            <div className="DataDiv">
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
