import React from "react";
import { useEffect } from "react"; import axios from "axios";

const Store = () => {
  useEffect(()=>{
    axios.get(dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
    .then((response)=>{
        if(!response.data.status){alert(response.data.message); Navigate('/home')}
    })
  }, [])
  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut similique
      nulla possimus quaerat, quasi illum aspernatur ad. Architecto tempora,
      corporis ipsa, incidunt voluptatem porro rerum debitis culpa, minus magni
      ipsam.
    </div>
  );
};

export default Store;
