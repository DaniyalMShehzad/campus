import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addData, adminAuthentitation, deleteuser } from '../../../firebaseconfig/firebaseconfig'
import AdimnHome from '../adminhome'
import { MdDelete } from "react-icons/md"
export default function Authentitation() {
    const [post, setPost] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((e) => e)
    // console.log();
    useEffect(() => {
        setPost(Object.values(state?.studentsdata2reducer?.userid))
        dispatch((dispatch) => adminAuthentitation(dispatch, navigate, state))
    }, [])
    console.log(post);
    const deleteusers = (e) => {
        console.log(e.newobj.user);
        dispatch((dispatch) => deleteuser(e, dispatch))
    }
    return (
        <AdimnHome>
            <>
                <div className='Authentitation'>
                    <table className='Authentitation2'>
                        <thead>
                            <tr className='Authentitationtr'>
                                <th className='Authentitationthead'>Name</th>
                                <th className='Authentitationthead'>Email</th>
                                <th className='Authentitationthead'>type</th>
                                <th className='Authentitationthead'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post?.map((e, i) => {
                                console.log(e);
                                return e?.newobj?.type?.type !== "admin" ? (
                                    <>
                                        <tr className="Authentitationtr2" key={i}>
                                            <td className="Authentitationtd">{e.newobj.username}</td>
                                            <td className="Authentitationtd">{e.newobj.email}</td>
                                            <td className="Authentitationtd">{e.newobj.type.type}</td>
                                            <td className="Authentitationtd">
                                                <MdDelete onClick={() => deleteusers(e)} className='MdDelete' />
                                            </td>
                                        </tr>
                                    </>
                                )
                                    :
                                    <>
                                    </>
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        </AdimnHome>
    )
}