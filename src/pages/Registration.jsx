import React, { useState } from 'react'
import axios from 'axios';

const Registration = () => {

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    //url
    const BASE_URL = 'https://multi-tenancy-chatbot-fastapi.onrender.com/register_company';
    const handleSubmit = (e) => {
        e.preventDefault();

        handleRequest();

    }

    const handleRequest = async () => {

        try {
            const request = await axios.post(BASE_URL, { name: companyName })
            const data = request.data
            console.log(data)
        } catch (err) {
            console.log(err);
        }



    }

    return (
        <div className='w-full'>
            <h4 className="text-3xl mt-3">Register your company</h4>

            <form action="" className="flex flex-col space-y-5 mt-1" onSubmit={handleSubmit}>

                <div className="form-input-group">
                    <div className=''>
                        <label htmlFor="companyname" className="form-label">Your Company name</label>
                        <input
                            type="text"
                            name="companyname"
                            id="companyname"
                            className="form-control bg-dark text-white border-0"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={(e) => setCompanyName(e.target.value)}
                        // style="--bs-focus-ring-color: rgba(var(--bs-success-rbg),.25)"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control bg-dark text-white border-0"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={(e) => setEmail(e.target.value)}
                        // style="--bs-focus-ring-color: rgba(var(--bs-success-rbg),.25)"
                        />
                    </div>

                    <div>
                        <label htmlFor="companyname" className="form-label">Phone Number</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            className="form-control bg-dark text-white border-0"
                            aria-describedby="helpId"
                            onChange={(e) => setTel(e.target.value)}
                        // style="--bs-focus-ring-color: rgba(var(--bs-success-rbg),.25)"
                        />
                    </div>
                    <button type="submit" className='btn btn-outline-danger mt-2'>Register</button>
                </div>

            </form>

        </div>
    )
}

export default Registration