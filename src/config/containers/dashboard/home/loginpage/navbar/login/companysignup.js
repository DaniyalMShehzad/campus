import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../navbar';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {  login, signup } from '../../../../../../firebaseconfig/firebaseconfig';
export default function CompanySignup() {
    const [email, setEmail] = useState()
    const [password, setPassowrd] = useState()
    const [username, setUserName] = useState()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    let type ={type:"company"}
    const login = (e) => {
    e.preventDefault()
    let obj={
        email,
        password,
        type
    }
    dispatch((dispatch)=>signup(dispatch, navigate, obj))
}
    return (
        <>
            <div className="Company">
                <Navbar />
                <div className="Company2">
                    <form className="formLogin2" onSubmit={(e)=>login(e)}>
                        <div className="login3">
                            <h3 className="signinh4">Company Signup</h3>
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
                            <button className="LoginBtn">sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
