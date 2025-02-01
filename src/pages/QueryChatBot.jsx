import React from 'react'

const QueryChatBot = () => {
    return (
        <div className='w-full'>

            <h4 className="text-3xl mt-3">Customer Query Chatbot</h4>

            <form action="" className="flex flex-col space-y-5 mt-1">

                <div className="mb-3">
                    <label htmlFor="queryinput" className="form-label">Enter your question</label>
                    <textarea
                        type="text"
                        name="queryinput"
                        id="queryinput"
                        rows={5}
                        className="form-control bg-dark text-white border-0"
                        placeholder=""
                        aria-describedby="helpId"
                    // style="--bs-focus-ring-color: rgba(var(--bs-success-rbg),.25)"
                    />
                    <button type="submit" className='btn btn-outline-danger mt-2'>Submit Query</button>
                </div>

            </form>




        </div>
    )
}

export default QueryChatBot