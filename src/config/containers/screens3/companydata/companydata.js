import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { companyPostData } from '../../../firebaseconfig/firebaseconfig'
import AdimnHome from '../adminhome'
import { getDatabase, ref, set, push, get, child, onChildRemoved ,remove} from "firebase/database";
export default function AdminCompanyData() {
    const [post, setPost] = useState()
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const state=useSelector((e)=>e)
    useEffect(()=>{
        setPost(Object.values(state?.signupreducer?.userid))
        dispatch((dispatch)=> companyPostData(dispatch,state))
    },[])
    // console.log(state);
    const deleteusers = (e) => {
        console.log(e);
        const db = getDatabase();
        const commentsRef = ref(db, `companyData/`+e.uid)
        console.log(commentsRef);
          remove(commentsRef).then((e) => {
            console.log(e,"ggh");
          })
    }
    return (
            <>
            <AdimnHome>
                <div className="Home2">
                    <div className="homeParent2">
                        {post?.map((e, i) => {
                            return (
                                <div key={i} className="Postcards2">
                                <img className="Postimg23" src={e.image} />
                                <h4 className="PostH4Name">{e.username}</h4>
                                <p className="PostBusiness">{e.email}</p>
                                <p className="PostDescription">{e.contact}</p>
                                <p className="PostAddress">{e.address}</p>
                                {/* <p className="PostAddress">{e.experience}</p> */}
                                <button onClick={()=>deleteusers(e)} className="AddData">Delete</button>
                            </div>
                            )
                        })}
                    </div>
                </div>
                </AdimnHome>
            </>
    )
}
