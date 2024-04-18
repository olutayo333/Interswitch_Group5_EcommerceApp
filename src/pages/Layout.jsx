import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Store";
import About from "./About";
import Feedback from "./Feedback";
import Navbar from "../component/Navbar/Index";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default Layout;
