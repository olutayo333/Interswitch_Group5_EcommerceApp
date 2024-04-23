import React, { useEffect, useState } from "react";
import axios from "axios";
//import SummaryApi from "../common"; //import SummaryApi from "../common";
//import "./AllProduct.css"; 
//import "../pages/AllProducts.css"
import UploadProduct from "../components/UploadProduct"
const Mod = () => {

  const sellerlogin =()=>{
    //setizloading(true) ; 
    axios.post("https://0437-41-76-82-123.ngrok-free.app/auth/login", {email:"olutayostephen@gmail.com", password:"Ayanrinde@333"})
    .then((response)=>{console.log(response)
      // if (response.data)
      // {alert(response.data); Navigate("/seller-profile"); setname(""); setregisteremail(""); setpassword(""); setphonenumber(""); setaddress("") ;setusername(""); setsigninemail(""); setsigninpassword("") }
      // else{alert(response.data); setizloading(false)} handleClose2(); handleShow();
       })
       //.catch((err)=>{alert("Login Failed, please try again later"); setizloading(false); console.log(signinemail, signinpassword);})
    }

  return (
    <div className="title">
      <button onClick={sellerlogin}>login  </button>    
      </div>
  );
};

export default Mod;
