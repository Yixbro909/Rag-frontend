import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SidebarNav = () => {

    const [value, setValue] = useState('registration')

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value)

        switch (e.target.value) {

            case 'registration':
                navigate('/registration')
                break;

            case 'documentupload':
                navigate('/documentupload')
                break;
            case 'querychatbot':
                navigate('/querychatbot')
                break;

            default:
                navigate('/registration')
                break;
        }
    }

    return (
        <div className='flex flex-col space-y-4'>
            <p className="text 4xl font-bold">Navigations</p>
            <div className='flex flex-col space-y-2'>
                <p className='text-xs text-gray-300'>Choose a page: </p>
                <div className="form-check">
                    {/* <Link to='/registration' className='text-white'> */}
                    <input className="form-check-input bg-dark" type="radio" name="navigations" id="registrationNav" value="registration" onChange={handleChange} checked={value === 'registration'} />
                    <label className="form-check-label" htmlFor="registrationNav">
                        Registration
                    </label>
                    {/* </Link> */}
                </div>
                <div className="form-check">
                    <input className="form-check-input bg-dark" type="radio" name="navigations" id="docUploadNav" value="documentupload" onChange={handleChange} checked={value === 'documentupload'} />
                    <label className="form-check-label" htmlFor="docUploadNav">
                        Upload Document
                    </label>

                </div>
                <div className="form-check">
                    <input className="form-check-input bg-dark" type="radio" name="navigations" id="queryChatbot" value="querychatbot" onChange={handleChange} checked={value === 'querychatbot'} />
                    <label className="form-check-label" htmlFor="queryChatbot">
                        Query Chatbot
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SidebarNav