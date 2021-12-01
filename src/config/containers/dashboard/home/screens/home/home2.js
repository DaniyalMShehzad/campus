import React from 'react'
import Home from '../home'

export default function Home2() {
    const arr = [
        {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        },
        {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        }, {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        }, {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        }, {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        }, {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        }, {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        },
        {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        },
        {
            img:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            companyName: "company",
            business: "software",
            discpriton: "hsjhjhajkhhkdhjhfjahjf",
            address: "dafdfddddddddddddddddd",
        },
    ]
    return (
        <div>
            <>
                <Home />
                <div className="Home2">
                    <div className="homeParent2">
                        {arr.map((e, i) => {
                            return (
                                <div key={i} className="HomeCards">
                                    <img className="Companyimg" src={e.img} />
                                    <h4 className="CompanyH4Name">{e.companyName}</h4>
                                    <p className="companyBusiness">{e.business}</p>
                                    <p className="companyDescription">{e.discpriton}</p>
                                    <p className="companyAddress">{e.address}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        </div>
    )
}
