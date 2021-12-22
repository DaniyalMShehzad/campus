import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addData, adminAuthentitation } from '../../../firebaseconfig/firebaseconfig'
import AdimnHome from '../adminhome'

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
    return (
        <AdimnHome>
            <div className='Authentitation'>
            <table className='Authentitation2'>
                <tr className='Authentitationtr'>
                    <th className='Authentitationthead'>Name</th>
                    <th className='Authentitationthead'>Email</th>
                    <th className='Authentitationthead'>type</th>
                    <th className='Authentitationthead'>Deleteasa</th>
                </tr>
                {post?.map((e, i) => {
                     console.log(e.newobj);
                         return  e?.newobj?.type?.type!=="admin"? (
                             <>
                             <tr className="Authentitationtr2">
                                 <td className="Authentitationtd">{e.newobj.username}</td>
                                 <td className="Authentitationtd">{e.newobj.email}</td>
                                 <td className="Authentitationtd">{e.newobj.type.type}</td>
                                 <td></td>
                             </tr>
                             </>
                        )
                        :
                            <>
                            </>
                })}
            </table>
            </div>
        </AdimnHome>
    )
}