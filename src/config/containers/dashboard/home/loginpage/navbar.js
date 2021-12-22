import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar2">
            <NavLink className="navLogin" to="/">login</NavLink>
            <NavLink className="navLogin" to="/signup">Sign up</NavLink>
            <NavLink className="navLogin" to="/companylogin">Companylogin</NavLink>
            {/* <NavLink className="navLogin" to="/companylogin">Companylogin</NavLink> */}
            <NavLink className="navLogin" to="/companysignup">Company Signup</NavLink>
            <NavLink className="navLogin" to="/adminsignin">Admin Signin</NavLink>
            </div>
        </div>
    )
}
