import React from 'react'
// import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  Admin, Company, Login, SignUp, Data, Home, Home2, Post, CompanyHome, CompanyData, CompanyHiring, CompanyHome2, Notification
  , CompanyAccount, AdminStudentData, AdminCompanyData, AdimnHome, Hiringdata, CompanyLogin, Companysignup, UsersCv, AdminLogin, Authentitation
} from './routing';
export default function Routing() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/companylogin" element={<CompanyLogin />} />
          <Route exact path="/companysignup" element={<Companysignup />} />
          <Route exact path="/adminsignin" element={<AdminLogin />} />
          {/* <Route exact path="/loginhome2" element={<Home2 />} /> */}
          {/* <Route exact path="/loginPost2" element={<Post />} /> */}
          <Route exact path="/logindata2" element={<Data />} />
          {/* <Route exact path="/companyHome2" element={<CompanyHome2 />} /> */}
          {/* <Route exact path="/companyAccount2" element={<CompanyAccount />} /> */}
          {/* <Route exact path="/companyData2" element={<CompanyData />} /> */}
          {/* <Route exact path="/companyHireforjob2" element={<CompanyHiring />} /> */}
          {/* <Route exact path="/companyNotification2" element={<Notification />} /> */}
          {/* <Route path="/companyuserscv2/:uid" element={<UsersCv />} /> */}
          {/* <Route path="/adminCompanydata" element={<AdminCompanyData />} /> */}
          {/* <Route path="/adminStudentdata" element={<AdminStudentData />} /> */}
          {/* <Route path="/adminHiringData" element={<Hiringdata />} /> */}
          {/* <Route path="/adminAuthentitation" element={<Authentitation />} /> */}
        </Routes>
        {/* {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" || window.location.pathname === "/companylogin" ?
          <>
          </>
          :
            <> */}
        <Routes>

        </Routes>
        {/* </>
        } */}
        {/* {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" || window.location.pathname === "/companylogin" ?
          <>
          </>
          :
          <>
              <AdimnHome>
                <Routes>
                  <Route path="/adminhome" element={<AdimnHome />} />
                  <Route path="/admincompanydata" element={<AdminCompanyData />} />
                  <Route path="/adminstudentdata" element={<AdminStudentData />} />
                  <Route path="/companydata" element={<CompanyData />} />
                  <Route path="/companyhireforjob" element={<Hiringdata />} />
                  <Route path="/companynotification" element={<Notification />} />
                </Routes>
              </AdimnHome>
            </>
          }  */}
        {/* <Route path="/signup" element={<SignUp />} /> */}

      </div>
    </Router>
  );
}