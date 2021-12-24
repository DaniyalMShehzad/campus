import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { authentication } from '../../../firebaseconfig/firebaseconfig'
import CompanyHome from '../companyHome'
import { Table } from 'antd';
export default function CompanyAccount() {
    const [data, setData] = useState()
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((e) => e)
    console.log(Object.values(state.loginreducer.userid));
    useEffect(() => {
        setData(Object.values(state?.loginreducer?.userid))
        dispatch((dispatch) => authentication(dispatch, state, setLoader))
    }, [])
    console.log(loader);
    // console.log(data);
    return (
        <>
            <CompanyHome>
                <div className="account">
                    <table className='adminUser2'>
                        <thead>
                            <tr className='admintr'>
                                <th className='adminthead'>Name</th>
                                <th className='adminthead'>Email</th>
                                {/* <th className='adminthead'>type</th> */}
                                {/* <th className='adminthead'>Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {data?.map((e, i) => {
                                // console.log(e.newobj);
                                return e?.newobj?.type?.type === "user" ? (
                                    <>
                                        <tr className="admintr2" key={i}>
                                            <td className="admintd">{e.newobj.username}</td>
                                            <td className="admintd">{e.newobj.email}</td>
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
            </CompanyHome >
        </>
    )
}