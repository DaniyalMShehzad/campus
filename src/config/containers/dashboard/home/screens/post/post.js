import React from 'react'
import Home from '../home'

export default function Post() {
    const arr = [
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        }, {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "Hire for Job",
            address: "dafdfddddddddddddddddd",
            Button: "add",
        },
    ]
    return (
        <>
            <Home />
            <div className="Post">
                <div className="PostParent2">
                    {arr.map((e, i) => {
                        return (
                            <div key={i} className="Postcards">
                                <img className="Postimg" src={e.img} />
                                <h4 className="PostH4Name">{e.companyName}</h4>
                                <p className="PostBusiness">{e.business}</p>
                                <p className="PostDescription">{e.discpriton}</p>
                                <p className="PostAddress">{e.address}</p>
                                <button className="AddData">{e.Button}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
