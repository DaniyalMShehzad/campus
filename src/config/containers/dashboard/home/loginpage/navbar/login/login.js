import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../navbar';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../../../firebaseconfig/firebaseconfig';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassowrd] = useState()

//     const state= useSelector((e)=>e)
// console.log(state);
    const navigate = useNavigate()
    const dispatch=useDispatch()
const signIn = (e) => {
    e.preventDefault()
    let obj={
        email,
        password,
    }
    dispatch((dispatch)=>login(obj,navigate,dispatch))
}
    return (
        <>
            <div className="login">
                <Navbar />
                <div className="login2">
                    <form className="formLogin"onSubmit={(e)=>signIn(e)} >
                        <div className="login3">
                            <h3 className="signinh4">Sign in</h3>
                            <img className="guestImg" src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" />
                            <div className="setEmail">
                                <label className="EmailLabel">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} required type='email' required className="enterEmail" placeholder="enter your email" />
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
                            <button className="LoginBtn" >sign in</button>
                            <NavLink className="SignupBBTN" to="/Signup">Signup</NavLink>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
