import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Store";
import About from "./About";
import Feedback from "./Feedback";
import Navbar from "../component/Navbar/Index";
import AdminProfile from "./AdminProfile";

import AllProducts from "./AllProducts";
import AllCategories from "./AllCategories";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/seller-profile" element={<AdminProfile />}>
          <Route path="all-products" element={<AllProducts />} />
          <Route path="all-categories" element={<AllCategories />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Layout;
