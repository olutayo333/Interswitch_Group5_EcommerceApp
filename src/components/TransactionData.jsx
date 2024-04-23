import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../common";
import Navbar from "../component/Navbar/Index";

  const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    // Fetch transactions from the backend API when the component mounts
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(SummaryApi.allTransactions.url); // /transactions
        setTransactions(response.data);
        setFilteredTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  const handleFilter = () => {
    let filteredData = transactions;

    if (filterType === "date") {
      filteredData = filteredData.filter(
        (transaction) => transaction.date === filterValue
      );
    } else if (filterType === "item") {
      filteredData = filteredData.filter(
        (transaction) => transaction.item === filterValue
      );
    } else if (filterType === "batch") {
      filteredData = filteredData.filter(
        (transaction) => transaction.batch === filterValue
      );
    }

    setFilteredTransactions(filteredData);
  };

  return (
    <>
      <Navbar/> <hr />
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 mx-auto my-5 py-5 px-5 rounded shadow-lg " style={{}}>
        <h2 className="text-center" style={{letterSpacing:"3px"}}><u>Transaction List</u></h2>
        <div className="my-3 px-5">
          <label htmlFor="filterType" className="fs-5">Filter By:</label>
          <select className=" btn btn-outline-secondary mx-3 my-2 "
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Select filter</option>
            <option value="date">Date</option>
            <option value="item">Item</option>
            <option value="batch">Batch</option>
          </select>
          {filterType && (
            <input className="form-control"
              type="text"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder={`Enter ${filterType}`}
            />
          )}
          <button className="btn btn-outline-primary my-2 col-10 d-block mx-auto" onClick={handleFilter}>Filter</button>
        </div>
      </div>
      <div className="col-12" style={{}}>
      <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Batch</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          
          <tbody> 
             {filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.item}</td>
                <td>{transaction.batch}</td>
                <td>{transaction.quantity}</td>
                <td>{transaction.price}</td>
              </tr>
            ))} 
            
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
    </>
  );
};

export default TransactionList;
