import React, { useState } from 'react'
import CompanyHome from '../companyHome';

export default function CompanyData() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [image, setImage] = useState();
    return (
        <div>
            <>
                <CompanyHome/>
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
                                <label className="DataLabel">Enter Company</label>
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
                            </div>
                            <button className="DataAddData">Add Data</button>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}
