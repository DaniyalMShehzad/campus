import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../navbar';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { signup } from '../../../../../../firebaseconfig/firebaseconfig';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
export default function SignUp() {
    const [email, setEmail] = useState()
    const [password, setPassowrd] = useState()
    const [username, setUserName] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const SignUp = (e) => {
        e.preventDefault()
        let obj = {
            email,
            password,
            username,
        }
        dispatch((dispatch) => signup(dispatch, navigate, obj))
    }
    // const navigate=useNavigate()
    // const navBtn=()=>{
    //     navigate("/")
    // }
    return (
        <>
            <div className="SignUp">
                <Navbar />
                <div className="SignUp2">
                    <form className="formLogin2">
                        <div className="login3">
                            <h3 className="signinh4">Sign Up</h3>
                            <img className="guestImg" src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" />
                            <div className="setEmail">
                                <label className="EmailLabel">User Name</label>
                                <input onChange={(e) => setUserName(e.target.value)} type='text' required className="enterEmail" placeholder="enter your email" />
                            </div>
                            <div className="setEmail">
                                <label className="EmailLabel">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type='email' required className="enterEmail" placeholder="enter your email" />
                            </div>
                            <div className="setEmail">
                                <label className="EmailLabel">Password</label>
                                <Input.Password
                                    onChange={(e) => setPassowrd(e.target.value)}
                                    placeholder="input password"
                                    className="enterEmail"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </div>
                            <button className="LoginBtn" onClick={SignUp}>sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
