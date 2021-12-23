import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { authentication } from '../../../firebaseconfig/firebaseconfig'
import CompanyHome from '../companyHome'
import { Table } from 'antd';



export default function CompanyAccount() {
    const [data,setData]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const state=useSelector((e)=>e)
    console.log(Object.values(state.loginreducer.userid));
    useEffect(()=>{
        setData(Object.values(state?.loginreducer?.userid))
        dispatch((dispatch)=> authentication(dispatch,state))
    },[])
    console.log(state);
    // console.log(data);
    return (
        <>
        <CompanyHome>
            <div className="account">
            <table className='adminUser2'>
                    <tr className='admintr'>
                        <th className='adminthead'>Name</th>
                        <th className='adminthead'>Email</th>
                        {/* <th className='adminthead'>type</th> */}
                        {/* <th className='adminthead'>Delete</th> */}
                    </tr>
                {data?.map((e,i)=>{
                    // console.log(e.newobj);
                    return  e?.newobj?.type?.type==="user"? (
                        <>
                        <tr className="admintr2">
                            <td className="admintd">{e.newobj.username}</td>
                            <td className="admintd">{e.newobj.email}</td>
                            <td>{}</td>
                        </tr>
                        </>
                   )
                   :
                       <>
                       </>
                })}
                </table>
            </div>
            </CompanyHome >
        </>
    )
}
