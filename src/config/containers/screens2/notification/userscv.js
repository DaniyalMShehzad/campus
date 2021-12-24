import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { acceptData } from '../../../firebaseconfig/firebaseconfig';
import CompanyHome from '../companyHome';
export default function UsersCv() {
    const [accept,setAccept]=useState()
    const [usersuid, setUsersuid] = useState()
    const [data, setData] = useState()
    // console.log(window.location.pathname);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const state =useSelector((e)=>e)
    // console.log(Object.values(state.studentdata.userid));
    useEffect(() => {
        setUsersuid(window.location.pathname.split("/")[2])
        setData(Object.values(state?.studentdata?.userid))
    }, [])
    console.log(usersuid);
    // console.log(data.uid);
    // if(data?.uid===usersuid){
        //     console.log(data);
        // }
        // else{
            //     null
            // }
            const Accept=(e)=>{
                e.preventDefault()
                setAccept("Accepted")
                // console.log(data);   
            dispatch((dispatch)=>acceptData(dispatch,"Accepted",data,usersuid,navigate))
        }
        const Decline=(e)=>{
            e.preventDefault()
            setAccept("Rejected")
            dispatch((dispatch)=>acceptData(dispatch,"Rejected",data,usersuid,navigate))
        }
    return (
        <>
            <CompanyHome >
            <div className="UsersCv">
                <div className="UsersCv2">
                    <div className="UsersCvform">
                        <h4 className="UsersCvEnterdata">Enter Data</h4>
                        <div className="UsersCvDiv">
                            <div className="UsersCvField2">
                                {/* <label className="EmailLabel">Image</label> */}
                                <input
                                    type="file"
                                    className="enterEmail2"
                                    placeholder='enter your Image'
                                    disabled
                                />
                            </div>
                            {/* <div className="DataField">
                                    <label className="DataLabel">Image</label>
                                    <input className="DataImg" type="file" required onChange={(e) => setImage(e.target.value)} />
                                </div> */}
                            <div className="UsersCvField">
                                <label className="DataLabel">Enter Your Name</label>
                                <input className="dataInputBar" disabled type="text" />
                            </div>
                            <div className="UsersCvField">
                                <label className="DataLabel">Enter Your Email</label>
                                <input className="dataInputBar" disabled type="email" />
                            </div>
                            <div className="UsersCvField">
                                <label className="DataLabel">Enter Your Address</label>
                                <input className="dataInputBar" disabled type="text"  />
                            </div>
                            <div className="UsersCvField">
                                <label className="DataLabel">Contact</label>
                                <input className="dataInputBar" disabled type="number" />
                            </div>
                            <div className="UsersCvField">
                                <label className="DataLabel">Experience</label>
                                {/* <textarea className="DataTextBar" disabled name="w3review" rows="4" cols="58"> </textarea> */}
                            </div>
                        </div>
                        <div className="DivAddData">
                        <button onClick={(e)=>Accept(e)} className="AddData2">Accept</button>
                        <button onClick={(e)=>Decline(e)} className="AddData2">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
            </CompanyHome >
        </>
    )
}