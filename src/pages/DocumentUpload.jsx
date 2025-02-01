import React, { useState } from 'react'

const DocumentUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null)

    const handleBrowseFile = (e) => {
        e.preventDefault();

        const file = e.target.files[0]
        setSelectedFile(file)

    }

    console.log(selectedFile)
    //handle drop
    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setSelectedFile(event.dataTransfer.files[0]);
            event.dataTransfer.clearData(); // Clear the drag data
        }
    };

    //Drag Over
    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    //handleRemoveFile 
    const removeFile = () => setSelectedFile(null)


    return (
        <div className='w-full'>
            <h4 className="text-3xl mt-3">Customer Document Upload</h4>
            <div action="" className="flex flex-col space-y-5 mt-1">
                <p>Uploads your documents(PDF,TXT)</p>
                <div className="w-full p-3 flex bg-dark rounded-lg items-center justify-between">
                    <div className='flex space-x-4'>
                        <i className="bi bi-cloud-arrow-up shrink-0 fs-1"></i>
                        <div className='flex flex-col mt-2 ml-3'>
                            <div className="">Drag down files here</div>
                            <p className="text-xs text-gray-500">limit 200mb per file</p>
                        </div>
                    </div>
                    <input type="file" name="file" id="file" className='d-none' onChange={handleBrowseFile} />
                    <button className='btn btn-outline-danger'>
                        <label htmlFor="file">Browse files</label>
                    </button>
                </div>

                {selectedFile && (<div className='flex justify-between items-center p-3'>
                    <div className="flex items-center space-x-3">
                        <i class="bi bi-file-earmark"></i>
                        <div className="ml-3 mt-3 flex items-center">
                            <p className='text-sm'>{selectedFile.name}</p>
                            <p className='text-xs ml-2 text-gray-400 opacity-50'>{(selectedFile.size / 1000)}Kb</p>
                        </div>
                    </div>
                    <button type="button" onClick={removeFile}>
                        <i class="bi bi-x"></i>
                    </button>
                </div>
                )}

                <button className='btn btn-outline-danger self-start mt-2'>Upload Documents</button>
            </div>
        </div>
    )
}

export default DocumentUpload