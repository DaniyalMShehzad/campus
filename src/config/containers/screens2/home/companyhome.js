import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyData } from '../../../firebaseconfig/firebaseconfig';
import CompanyHome from '../companyHome'
export default function CompanyHome2() {
    const [data, setData] = useState()
    // console.log(arr);
    const state = useSelector((e) => e)
    // console.log(Object.values(state.studentdata.userid));
    const dispatch = useDispatch()
    // const 
    useEffect(() => {
        setData(Object.values(state?.studentdata?.userid))
        dispatch((dispatch) => getCompanyData(dispatch,state))
    }, [])
    return (
        <>
            <CompanyHome>
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
                                        <p className="PostAddress">{e.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </CompanyHome>
        </>
    )
}
