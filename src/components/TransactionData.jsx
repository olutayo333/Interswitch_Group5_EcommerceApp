import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../common";

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
    <div>
      <h2>Transaction List</h2>
      <div>
        <label htmlFor="filterType">Filter By:</label>
        <select
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
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder={`Enter ${filterType}`}
          />
        )}
        <button onClick={handleFilter}>Filter</button>
      </div>
      <table>
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
  );
};

export default TransactionList;
