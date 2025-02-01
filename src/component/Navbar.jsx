import React from 'react'
import SlideNav from './SlideNav'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-3 bg-dark">
            <div className="container-fluid d-flex align-items-center">
                <Link className='font-bold text-2xl text-danger text-decoration-none' to="/registration">RAG AGENT</Link>

                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse grow justify-content-end ' id="navbarNav">
                    <ul className='flex flex-column flex-sm-row  align-items-center gap-3'>
                        <li>
                            <Link to="/registration" className='link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ' style={{ visibility: 'visible' }}>Registration</Link>
                        </li>

                        <li>
                            <Link to="/documentupload" className='link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' style={{ visibility: 'visible' }}>Upload Document</Link>
                        </li>
                        <li>
                            <button className="btn btn-danger" style={{ visibility: 'visible' }}>Deploy</button>
                        </li>
                    </ul>

                </div>

            </div >
        </nav >

    )
}

export default Navbar 