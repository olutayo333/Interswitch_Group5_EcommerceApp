import React from "react";
import { useEffect } from "react"; import axios from "axios";
const Feedback = () => {
  useEffect(()=>{
    axios.get(dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
    .then((response)=>{
        if(!response.data.status){alert(response.data.message); Navigate('/home')}
    })
  }, [])
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
      exercitationem unde, rerum natus corrupti possimus, doloremque nobis sequi
      maiores voluptatum perspiciatis assumenda, dolore atque asperiores iure
      hic minima ex culpa!
    </div>
  );
};

export default Feedback;
