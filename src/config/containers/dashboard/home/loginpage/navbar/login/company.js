import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../navbar';

export default function Company() {
    const [email, setEmail] = useState()
    const [password, setPassowrd] = useState()
    const [Key, setKey] = useState()

    const navigate = useNavigate()
    const navBtn = () => {
        navigate("/")
    }
    return (
        <>
            <div className="Company">
                <Navbar />
                <div className="Company2">
                    <form className="formLogin2">
                        <div className="login3">
                            <h3 className="signinh4">Sign in</h3>
                            <img className="guestImg" src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" />
                            <div className="setEmail">
                                <label className="EmailLabel">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type='email' required className="enterEmail" placeholder="enter your email" />
                            </div>
                            <div className="setEmail">
                                <label className="EmailLabel">Email address</label>
                                <input onChange={(e) => setKey(e.target.value)} type='password' required className="enterEmail" placeholder="enter key" />
                            </div>
                            <div className="setEmail">
                                <label className="EmailLabel">Password</label>
                                <input onChange={(e) => setPassowrd(e.target.value)} type='password' required className="enterEmail" placeholder="password" />
                            </div>
                            <button className="LoginBtn" onClick={navBtn}>sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}