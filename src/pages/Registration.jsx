import React from 'react'

const Registration = () => {
    return (
        <div className='w-full'>
            <h4 className="text-3xl mt-3">Register your company</h4>

            <form action="" className="flex flex-col space-y-5 mt-1">

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
                        // style="--bs-focus-ring-color: rgba(var(--bs-success-rbg),.25)"
                        />
                    </div>

                    <div>
                        <label htmlFor="companyname" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="number"
                            id="number"
                            className="form-control bg-dark text-white border-0"
                            aria-describedby="helpId"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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