import React, { useEffect ,useState } from 'react'
import Home from '../home'
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from '../../../../../firebaseconfig/firebaseconfig';
import { useNavigate } from 'react-router';
export default function Home2() {
    const [data,setData]=useState()
    const { Meta } = Card;
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const state=useSelector((e)=>e)
    // console.log(Object.values(state.loginreducer.userid));
    useEffect(()=>{
        setData(Object.values(state?.loginreducer?.userid))
        dispatch((dispatch)=> authentication(dispatch,state))
    },[])
    console.log(data);
    return (
        <>
            <Home>
                <div className="Home2">
                    <div className="homeParent2">
                        {data?.map((e, i) => {
                            return (
                                <div key={i} className="Postcards">
                                <img className="Postimg" src={e.image} />
                                <h4 className="PostH4Name">{e.username}</h4>
                                <p className="PostDescription">{e.contact}</p>
                                <p className="PostBusiness">{e.address}</p>
                                <p className="PostAddress">{e.address}</p>
                            </div>
                            //     <Card
                            //     hoverable
                            //     style={{ width: 340 }}
                            //     cover={<img className="example" alt="example" src={e.image} />}
                            //   >
                            //     <Meta title={e.username}/>
                            //     <Meta title={e.email} description={e.contact}/>
                            //     <Meta description={e.address}/>
                            //   </Card>
                        )
                        })}
                    </div>
                </div>
            </Home>
        </>
    )
}
