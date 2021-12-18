import React, { useState } from 'react'
import CompanyHome from '../companyHome';

export default function CompanyHiring() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [image, setImage] = useState();

    const HandleChange = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState == 2)
                setImage(reader.result);
        };
        // firebase.database().ref('UserData').push(object)
        reader.readAsDataURL(e.target.files[0]);
    }
    return (
        <CompanyHome>
            <div>
                <div className="Data">
                    <div className="dataParent">
                        <form className="dataForm">
                            <h4 className="DataH4EnterData">Enter Data</h4>
                            <div className="DataDiv">
                                {/* <div className="setEmail">
                                    <label className="EmailLabel">Image</label>
                                    <input
                                        onChange={HandleChange}
                                        type="file"
                                        className="enterEmail2"
                                        placeholder='enter your Image'
                                    />
                                </div> */}
                                <div className="DataField">
                                    <label className="DataLabel">Company Name</label>
                                    <input className="dataInputBar" required type="text" onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Email</label>
                                    <input className="dataInputBar" required type="email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="DataField">
                                    <label className="DataLabel">Address</label>
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
            </div>
        </CompanyHome>

    )
}
