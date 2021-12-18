import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCompanyData } from '../../../firebaseconfig/firebaseconfig';
import CompanyHome from '../companyHome';
import { useSelector } from "react-redux"
export default function CompanyData() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    // const [image, setImage] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state)
    console.log(state.uiddata2reducer2.userid.user);
    const Data = (e) => {
        const obj = {
            username: username,
            email: email,
            address: address,
            contact: contact,
            uid: state.uiddata2reducer2.userid.user,
            // image:image
        }
        e.preventDefault(e);
        dispatch((dispatch) => addCompanyData(obj, dispatch, navigate))
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
                <>
                    <div className="Data">
                        <div className="dataParent">
                            <form className="dataForm" onSubmit={(e) => Data(e)}>
                                <h4 className="DataH4EnterData">Enter Data</h4>
                                <div className="DataDiv">
                                    {/* <div className="DataField">
                                    <label className="EmailLabel">Image</label>
                                    <input
                                        onChange={HandleChange}
                                        type="file"
                                        className="enterEmail2"
                                        placeholder='enter your Image'
                                    />
                                </div> */}
                                    <div className="DataField">
                                        <label className="DataLabel">Enter Company</label>
                                        <input className="dataInputBar" required type="text" onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Enter Your Email</label>
                                        <input className="dataInputBar" required type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Enter Your Address</label>
                                        <input className="dataInputBar" required type="text" onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="DataField">
                                        <label className="DataLabel">Contact</label>
                                        <input className="dataInputBar" required type="number" onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                </div>
                                <button className="DataAddData">Add Data</button>
                            </form>
                        </div>
                    </div>
                </>
            </div>
        </CompanyHome>

    )
}
