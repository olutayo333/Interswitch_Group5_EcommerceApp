import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import SummaryApi from "../common";

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
    <div>
      <h2>Create a New Category</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
