import React from "react";
//import TransactionList from "../components/TransactionData";
import TransactionList from "../components/TransactionData"
import { useEffect } from "react"; import axios from "axios";

const AllCategories = () => {
  useEffect(()=>{
    axios.get(dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
    .then((response)=>{
        if(!response.data.status){alert(response.data.message); Navigate('/home')}
    })
  }, [])
  return <TransactionList />;
  
};

export default AllCategories;
