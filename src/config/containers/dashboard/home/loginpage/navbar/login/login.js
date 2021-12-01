import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../navbar';

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassowrd] = useState()


    const navigate = useNavigate()
    const navBtn = () => {
        window.location.href = "/home"
        // navigate("/home")
    }
    return (
        <>
            <div className="login">
                <Navbar />
                <div className="login2">
                    <form className="formLogin">
                        <div className="login3">
                            <h3 className="signinh4">Sign in</h3>
                            <img className="guestImg" src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" />
                            <div className="setEmail">
                                <label className="EmailLabel">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type='email' required className="enterEmail" placeholder="enter your email" />
                            </div>
                            <div className="setEmail">
                                <label className="EmailLabel">Password</label>
                                <input onChange={(e) => setPassowrd(e.target.value)} type='password' required className="enterEmail" placeholder="password" />
                            </div>
                            <button className="LoginBtn" onClick={navBtn}>sign in</button>
                            <NavLink to="/Signup">Signup</NavLink>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
