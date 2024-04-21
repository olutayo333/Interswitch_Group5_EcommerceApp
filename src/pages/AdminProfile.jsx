import React from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

import "./AdminProfile.css";

const AdminProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="admin">
      <aside className="admin-aside">
        <div className="user">
          <div className="user-profile">
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
              to="/seller-profile/add-category"
              className="user-nav-display"
            >
              Add new Category
            </Link>
            <Link
              to="/seller-profile/all-categories"
              className="user-nav-display"
            >
              All Categories
            </Link>
            <Link
              to="/seller-profile/all-products"
              className="user-nav-display"
            >
              All products
            </Link>
          </nav>
        </div>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminProfile;
