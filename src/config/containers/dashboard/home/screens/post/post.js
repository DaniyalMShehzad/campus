import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addpostdata, companyPostData } from '../../../../../firebaseconfig/firebaseconfig'
import Home from '../home'

export default function Post() {
    const [post, setPost] = useState()
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const state=useSelector((e)=>e)
    useEffect(()=>{
        setPost(Object.values(state?.signupreducer?.userid))
        dispatch((dispatch)=> companyPostData(dispatch,state))
    },[])
    // console.log(post);
    const addData=(e)=>{
        // e.prevantDefault()
        // console.log(e.uid)
        dispatch((dispatch)=>addpostdata(dispatch,navigate,state,e))
    }
    return (
        <>
            <Home >
            <div className="Post">
                <div className="PostParent2">
                    {post?.map((e, i) => {
                        return (
                            <div key={i} className="Postcards">
                                <img className="Postimg" src={e.image} />
                                <h4 className="PostH4Name">{e.username}</h4>
                                <p className="PostBusiness">{e.email}</p>
                                <p className="PostDescription">{e.contact}</p>
                                <p className="PostAddress">{e.address}</p>
                                <p className="PostAddress">{e.desc}</p>
                                <button
                                 onClick={()=>addData(e)} 
                                 className="AddData">Post</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            </Home>
        </>
    )
}
