import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { authentication, deleteuser } from '../../../firebaseconfig/firebaseconfig'
import AdimnHome from '../adminhome'
import { getDatabase, ref, set, push, get, child, onChildRemoved ,remove} from "firebase/database";
export default function AdminStudentData() {
    const [data, setData] = useState()
    // const { Meta } = Card;
    const [loader,setLoader]=useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((e) => e)
    // console.log(Object.values(state.loginreducer.userid));
    useEffect(() => {
        setData(Object.values(state?.loginreducer?.userid))
        dispatch((dispatch) => authentication(dispatch, state,setLoader))
        setLoader()
    }, [])
    console.log(loader);
    const deleteusers = (e) => {
        console.log(e);
        const db = getDatabase();
        const commentsRef = ref(db, `studentData/`+e.uid)
        console.log(commentsRef);
          remove(commentsRef).then((e) => {
            console.log(e,"ggh");
          })
    }
    return (
        <>
            <AdimnHome>
                <div>
                    <div className="Home2">
                        <div className="homeParent2">
                            {data?.map((e, i) => {
                                return (
                                    <div key={i} className="Postcards2">
                                        <img className="Postimg23" src={e.image} />
                                        <h4 className="PostH4Name">{e.username}</h4>
                                        <p className="PostBusiness">{e.email}</p>
                                        <p className="PostDescription">{e.contact}</p>
                                        <p className="PostAddress">{e.address}</p>
                                        <p className="PostAddress">{e.experience}</p>
                                        <button onClick={()=>deleteusers(e)} className="AddData">Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </AdimnHome>
        </>
    )
}