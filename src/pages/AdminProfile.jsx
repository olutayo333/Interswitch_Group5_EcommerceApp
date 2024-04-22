import React from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Index";

import "./AdminProfile.css";

const AdminProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <>
      <Navbar/>
   
    <div className="container-fluid"> 
    
      <div className="row">
    <div className="admin ">
      <aside className="admin-aside">
        <div className="user">
          <div className="user-profile text-center "> 
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="user-profile-img"
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className="user-name">{user?.name}</p>
          <p className="user-role">{user?.role}</p>
        </div>

        <div>
          <nav className="user-nav">
            <Link
              to="/add-category"
              className="user-nav-display fs-5" 
            >
              <b> Add New Category </b>
            </Link> <hr />
            <Link
              to="/all-categories"
              className="user-nav-display fs-5"
            >
              <b>All Categories</b>
            </Link> <hr />
            <Link
              to="/all-products"
              className="user-nav-display fs-5"
            >
              <b>All products</b>
            </Link> <hr />
          </nav>
        </div>
      </aside>

      <main>
        <Outlet />
        
      </main>
    </div>
  </div>
  </div>
  </>
  );
};

export default AdminProfile;
