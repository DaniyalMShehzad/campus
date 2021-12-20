import React, { useEffect, useState } from 'react'
import Home from '../home'
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
//   const [dtstate,setDtState]=useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((e) => e)
    console.log(state.uiddata.userid.user)
    // let uid={
    //     id:state.userid.userid
    // }
    const obj = {
        // image: image,
        username: username,
        email: email,
        address: address,
        contact: contact,
        experience: experience,
        image:image,
        uid: state.uiddata.userid.user
    }
    // setDtState(state)
    const studentdataData = (e) => {
        e.preventDefault();
        dispatch((dispatch) => addData(obj, dispatch, navigate,state))
        // props.addData(obj, navigate)
    }
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
        <Home>
            {/* <Home /> */}
            <div className="Data">
                <div className="dataParent">
                    <form className="dataForm"  onSubmit={(e)=>studentdataData(e)} >
                        <h4 className="DataH4EnterData">Enter Data</h4>
                        <div className="DataDiv">
                            <div className="DataField">
                                <label className="EmailLabel">Image</label>
                                <input
                                    onChange={HandleChange}
                                    type="file"
                                    className="enterEmail2"
                                    placeholder='enter your Image'
                                    required
                                />
                            </div>
                            {/* <div className="DataField">
                                    <label className="DataLabel">Image</label>
                                    <input className="DataImg" type="file" required onChange={(e) => setImage(e.target.value)} />
                                </div> */}
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
                                <input className="dataInputBar" required type="text" onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="DataField">
                                <label className="DataLabel">Contact</label>
                                <input className="dataInputBar" required type="number" onChange={(e) => setContact(e.target.value)} />
                            </div>
                            <div className="DataField">
                                <label className="DataLabel">Experience</label>
                                <textarea className="DataTextBar" name="w3review" rows="4" cols="58" onChange={(e) => setExperience(e.target.value)}> </textarea>
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


