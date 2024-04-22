import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import SummaryApi from "../common";
import Navbar from "../component/Navbar/Index";
const CategoryForm = () => {
  // State variables to store category information
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new category object with user input
    const newCategory = {
      name,
      description,
      image,
    };

    try {
      // Send a POST request to the backend API to create a new category
      const response = await axios.post(
        SummaryApi.addCategory.url,
        newCategory
      );

      // Clear form fields and display success message
      setName("");
      setDescription("");
      setImage("");
      setSuccessMessage("Category created successfully!");
      setErrorMessage("");
    } catch (error) {
      // Display error message if request fails
      setErrorMessage("Error creating category. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <>
    <Navbar/> <hr />
  
    <div className="container-fluid ">
      <div className="row " style={{marginTop:"10vh"}}>
        <div className="col-lg-5  mx-auto my-5 py-5 px-5 rounded " style={{marginTop:"30vh"}}>
        <h2 className="text-center"><u>Create a New Category</u></h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <form className="form form-control  "  onSubmit={handleSubmit}>
          <div className="mx-2">
            <label htmlFor="name">Name:</label>
            <input className="form-control"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-outline-secondary" type="submit">Create Category</button>
        </form> 
      </div> 
      </div>
    </div>
    </>
  );
};

export default CategoryForm;
