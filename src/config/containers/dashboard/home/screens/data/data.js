import React, { useEffect, useState } from 'react'
import Home from '../home'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { connect, useDispatch, useSelector } from 'react-redux';
import { addData } from '../../../../../firebaseconfig/firebaseconfig';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';

export default function Data(props) {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [experience, setExperience] = useState();
    const [image, setImage] = useState();
    const [condition, setCondition] = useState();
    //   const [dtstate,setDtState]=useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((e) => e)
    // console.log(state.uiddata.userid.user)
    useEffect(() => {
        setCondition("pending")
    }, [])
    // console.log(condition);
    // console.log(condition);
    // setDtState(state)
    const studentdataData = (e) => {
        e.preventDefault();
        const storage = getStorage();
        const storageRef = ref(storage, state?.uiddata?.userid?.user);
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, image)
            .then((snapshot) => {
                console.log(snapshot);
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log("kj", downloadURL);
                    const obj = {
                        username: username,
                        email: email,
                        address: address,
                        contact: contact,
                        experience: experience,
                        image:downloadURL,
                        uid: state.uiddata.userid.user,
                        condition:condition
                    }
                    dispatch((dispatch) => addData(obj, dispatch, navigate,state))
                    // props.addData(obj, navigate)
                    setCondition("")
                    setImage("")
                    setExperience("")
                    setAddress("")
                    setContact("")
                    setEmail("")
                    setUserName("")
                });
            })
    }
    const HandleChange = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <Home>
            {/* <Home /> */}
            <div className="Data">
                <div className="dataParent">
                    <form className="dataForm" onSubmit={(e) => studentdataData(e)} >
                        <h4 className="DataH4EnterData">Enter Data</h4>
                        <div className="DataDiv">
                            <div className="DataField">
                                <label className="EmailLabel">Image</label>
                                <input
                                    onChange={(e) => HandleChange(e)}
                                    type="file"
                                    className="enterEmail2"
                                    placeholder='enter your Image'
                                    // value={image}
                                />
                            </div>
                            {/* <div className="DataField">
                                    <label className="DataLabel">Image</label>
                                    <input className="DataImg" type="file" required onChange={(e) => setImage(e.target.value)} />
                                </div> */}
                            <div className="DataField">
                                <label className="DataLabel">Enter Your Name</label>
                                <input className="dataInputBar" required type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="DataField">
                                <label className="DataLabel">Enter Your Email</label>
                                <input className="dataInputBar" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="DataField">
                                <label className="DataLabel">Enter Your Address</label>
                                <input className="dataInputBar" required type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="DataField">
                                <label className="DataLabel">Contact</label>
                                <input className="dataInputBar" required type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                            </div>
                            <div className="DataField">
                                <label className="DataLabel">Experience</label>
                                <textarea className="DataTextBar" name="w3review" rows="4" cols="58" value={experience} onChange={(e) => setExperience(e.target.value)}> </textarea>
                            </div>
                        </div>
                        <button className="DataAddData">Add Data</button>
                    </form>
                </div>
            </div>
        </Home>
    )
}


// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators({
//         addData
//     }, dispatch
//     )

// export default connect(mapStateToProps, mapDispatchToProps)(Data)