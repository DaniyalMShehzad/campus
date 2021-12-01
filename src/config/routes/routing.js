import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from '../containers/dashboard/home/loginpage/navbar';
import Admin from '../containers/dashboard/home/loginpage/navbar/login/admin';
import Company from '../containers/dashboard/home/loginpage/navbar/login/company';
import Login from '../containers/dashboard/home/loginpage/navbar/login/login';
import SignUp from '../containers/dashboard/home/loginpage/navbar/login/signup';
import Data from '../containers/dashboard/home/screens/data/data';
import Home from '../containers/dashboard/home/screens/home';
import Home2 from '../containers/dashboard/home/screens/home/home2';
import Post from '../containers/dashboard/home/screens/post/post';
import CompanyHome from '../containers/screens2/companyHome';
import CompanyData from '../containers/screens2/data/companydata';
import CompanyHiring from '../containers/screens2/hiring/hiring';
import Hiring from '../containers/screens2/hiring/hiring';
import CompanyHome2 from '../containers/screens2/home/companyhome';
import Notification from '../containers/screens2/notification/notification';
import CompanyAccount from '../containers/screens2/post/companyAccount';
import AdimnHome from '../containers/screens3/adminhome';
import AdminCompanyData from '../containers/screens3/companydata/companydata';
import AdminStudentData from '../containers/screens3/studentdata/studentdata';
export default function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        {window.location.pathname === "/login" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" ?
          <>
          </>
          :
          <>
            <Home >

              <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route path="/home" element={<Home2 />} />
                <Route path="/post" element={<Post />} />
                <Route path="/data" element={<Data />} />
              </Routes>
            </Home>
          </>
        }
        {window.location.pathname === "/login" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" ?
          <>
          </>
          :
          <>
            <CompanyHome>
              <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route path="/companyhome" element={<CompanyHome2 />} />
                <Route path="/companyaccount" element={<CompanyAccount />} />
                <Route path="/companydata" element={<CompanyData />} />
                <Route path="/companyhireforjob" element={<CompanyHiring />} />
                <Route path="/companynotification" element={<Notification />} />
              </Routes>
            </CompanyHome>
          </>
        }
        {window.location.pathname === "/login" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" ?
          <>
          </>
          :
          <>
            <AdimnHome>
              <Routes>
                <Route path="/admincompanydata" element={<AdminCompanyData />} />
                <Route path="/adminstudentdata" element={<AdminStudentData />} />
                {/* <Route path="/companydata" element={<CompanyData />} /> */}
                {/* <Route path="/companyhireforjob" element={<CompanyHiring />} /> */}
                {/* <Route path="/companynotification" element={<Notification />} /> */}
              </Routes>
            </AdimnHome>
          </>
        }
        {/* <Route path="/signup" element={<SignUp />} /> */}

      </div>
    </Router>
  );
}
