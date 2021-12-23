import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addData, companyPostData } from '../../../firebaseconfig/firebaseconfig'
import CompanyHome from '../companyHome'

export default function Notification() {
    const [post, setPost] = useState()
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const state = useSelector((e) => e)
    console.log(state);
    useEffect(()=>{
        setPost(Object.values(state?.signupreducer?.userid))
    },[])
    useEffect(() => {
        dispatch((dispatch) => companyPostData(dispatch, state))
    }, [])
    const addData =(e)=>{
        console.log(e.uid);
        navigate(`/companyuserscv2/${e.uid}`,{data:e})
    }
    // console.log(post)
    return (
        <>
            <CompanyHome >
                <div className="Home2">
                    <div className="homeParent2">
                        {post?.map((e, i) => {
                            console.log(e);
                            return (
                                (state?.uiddata?.userid?.user === e?.uid2?.id) ?
                                    <div key={i} className="Postcards2">
                                        <img className="Postimg" src={e.image} />
                                        <h4 className="PostH4Name">{e.username}</h4>
                                        <p className="PostBusiness">{e.email}</p>
                                        <p className="PostDescription">{e.contact}</p>
                                        <p className="PostAddress">{e.address}</p>
                                        <p className="PostAddress">{e.experience}</p>
                                        <button
                                            onClick={() => addData(e)}
                                            className="AddData">View</button>
                                    </div>
                                    :
                                    <>
                                    </>
                            )
                        })}
                    </div>
                </div>
            </CompanyHome >
        </>
    )
}