import React from 'react'
import AdimnHome from '../adminhome'

export default function AdminStudentData() {
    const arr = [
        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },        {
            img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            Name: "Daniyal",
            email: "D@gmail.com",
            address: "hsjhjhajkhhkdhjhfjahjf",
            contact:"03454545454",
            Experinece: "dsdsdsdsdsdssdsd",
        },
    ]
    return (
        <>
            <AdimnHome/>
            <div>
                <div className="Home2">
                    <div className="homeParent2">
                        {arr.map((e, i) => {
                            return (
                                <div key={i} className="HomeCards">
                                    <img className="Companyimg" src={e.img} />
                                    <h4 className="CompanyH4Name">{e.Name}</h4>
                                    <p className="companyBusiness">{e.email}</p>
                                    <p className="companyDescription">{e.address}</p>
                                    <p className="companyDescription">{e.contact}</p>
                                    <p className="companyAddress">{e.Experinece}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
