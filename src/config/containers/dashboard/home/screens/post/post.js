import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addpostdata } from '../../../../../firebaseconfig/firebaseconfig'
import Home from '../home'

export default function Post() {
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const state=useSelector((e)=>e)
    // console.log(state.uiddata.userid.user);
    // let userid={...state.uiddata.userid.user}
    // console.log(userid);
    const addData=(e)=>{
        // e.prevantDefault()
        dispatch((dispatch)=>addpostdata(dispatch,navigate,state))
    }
    const arr = [
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
    ]
    return (
        <>
            <Home >
            <div className="Post">
                <div className="PostParent2">
                    {arr.map((e, i) => {
                        return (
                            <div key={i} className="Postcards">
                                <img className="Postimg" src={e.img} />
                                <h4 className="PostH4Name">{e.companyName}</h4>
                                <p className="PostBusiness">{e.business}</p>
                                <p className="PostDescription">{e.discpriton}</p>
                                <p className="PostAddress">{e.address}</p>
                                <button
                                 onClick={()=>addData()} 
                                 className="AddData">{e.Button}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            </Home>
        </>
    )
}
