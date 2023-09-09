import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom";
import { Navbar, Home, Blogs, Projects, BlogDetails } from "./components";
import { getRequest } from "./utils/request.js";

const App = () => {
  useEffect(() => {
    const apihit = "/hello";
    getRequest(apihit);
  });
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
