import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Admin,Company,Login,SignUp,Data,Home,Home2,Post,CompanyHome,CompanyData,CompanyHiring,CompanyHome2,Notification,CompanyAccount,AdminStudentData,AdminCompanyData,AdimnHome,Hiringdata } from './routing';
export default function Routing() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/company" element={<Company />} />
          </Routes>
          {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" ?
            <>
            </>
            :
            <>
              <Home >
                <Routes>
                  <Route path="/LoginHome" element={<Home2 />} />
                  <Route path="/LoginPost" element={<Post />} />
                  <Route path="/Logindata" element={<Data />} />
                </Routes>
              </Home>
            </>
          }
          {/* {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" ?
            <>
            </>
            :
            <>
              <CompanyHome>
                <Routes>
                  <Route path="/companyhome" element={<CompanyHome2 />} />
                  <Route path="/companyaccount" element={<CompanyAccount />} />
                  <Route path="/companydata" element={<CompanyData />} />
                  <Route path="/companyhireforjob" element={<CompanyHiring />} />
                  <Route path="/companynotification" element={<Notification />} />
                </Routes>
              </CompanyHome>
            </>
          } */}
          {/* {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/admin" || window.location.pathname === "/company" ?
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
          } */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
  
        </div>
      </Router>
    );
  }