import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Registration from "./pages/Registration";
import { Routes, Route } from 'react-router-dom'
import DocumentUpload from "./pages/DocumentUpload";
import QueryChatBot from "./pages/QueryChatBot";
import SidebarNav from "./component/SidebarNav";


const App = () => {


  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="registration" element={<Registration />} />
        <Route path="documentupload" element={<DocumentUpload />} />
        <Route path="querychatbot" element={<QueryChatBot />} />
      </Routes> */}
      <div className="w-full mt-11 flex justify-center items-center">

        <div className="col-12 col-md-8 p-4 mx-auto  flex flex-col space-y-3 justify-center">
          <h1 className="text-5xl font-extrabold mb-3">Welcome to Lily RAG AGENT</h1>
          <Routes>
            <Route path="registration" element={<Registration />} />
            <Route path="documentupload" element={<DocumentUpload />} />
            <Route path="querychatbot" element={<QueryChatBot />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
