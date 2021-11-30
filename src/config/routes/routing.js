import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../containers/dashboard/home/home';
import Navbar from '../containers/dashboard/home/loginpage/navbar';
import Admin from '../containers/dashboard/home/loginpage/navbar/login/admin';
import Company from '../containers/dashboard/home/loginpage/navbar/login/company';
import Login from '../containers/dashboard/home/loginpage/navbar/login/login';
import SignUp from '../containers/dashboard/home/loginpage/navbar/login/signup';

export default function Routing() {
    return (
        <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/company" element={<Company />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </div>
      </Router>
    );
}
