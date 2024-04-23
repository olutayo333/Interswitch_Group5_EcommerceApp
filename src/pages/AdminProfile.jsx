import React, { useState, useEffect } from "react";    
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar/Index";
import axios from "axios";
import "./AdminProfile.css";

const AdminProfile = () => {
  const[firstname, setfirstname] = useState(""); const[lastname, setlastname]=useState(''); const[bussinessname, setbussinessname]=useState("")
  const[merchantCode, setmerchantCode]=useState(''); const[useremail,setuseremail]= useState("") 
  const Navigate = useNavigate(); let dashboardURL = 'https://interswitchcustomersserver.onrender.com/user/merchantDashboard'  
  
  useEffect(()=>{
    axios.get(dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
    .then((response)=>{
        if(!response.data.status){alert(response.data.message); Navigate('/home')}
        else if (response.data.status){
            console.log(response);
            setuseremail(response.data.user.email); setfirstname(response.data.user.firstname); setbussinessname(response.data.user.bussinessname)
            setlastname(response.data.user.lastname) ; setmerchantCode(response.data.user.merchantCode)
        }
    })
  }, [])
  let token = localStorage.token;

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
            <Link
              to="/seller-profile/customizations"
              className="user-nav-display fs-5"
            >
              <b>Edit Theme settings</b>
            </Link>
          </nav>
        </div>
      </aside>

      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <center className="mt-5 ">Welcome to your Admin Profile <br/> <hr />
          <p>{`Name: ${firstname} ${lastname}`} </p>  
          <p>{`Merchant Code: ${merchantCode}`} </p>
          <p>{`Bussiness Name: ${bussinessname}`} </p>
        </center>
      </h2>

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
