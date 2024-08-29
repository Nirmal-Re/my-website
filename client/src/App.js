import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Blogs, Projects } from "pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="pageContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
