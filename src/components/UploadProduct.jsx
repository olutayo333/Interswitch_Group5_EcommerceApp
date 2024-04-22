import React from 'react'
import axios from "axios"
import {CgClose} from "react-icons/cg"
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from "../common/productCategory";
import uploadImage from "../common/uploadImage";
import DisplayImage from "../common/displayImage";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../common";
import "./UploadProduct.css"; 
import { useState, useEffect } from 'react'; 


const UploadProduct = ({ onClose }) => {
  // const [data, setData] = useState({
  //   productName: "",
  //   brandName: "",
  //   category: "",
  //   productImage: [],
  //   description: "",
  //   price: "",
  //   sellingPrice: "",
  // });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [dateSold, setDateSold] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // const [data, setData] = useState([]);
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  useEffect(() => {
    // Fetch categories from the backend API when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await axios.get(SummaryApi.fetchCategory.url);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // const handleUploadProductImage = async (e) => {
  //   const file = e.target.files[0];
  //   const uploadImageCloudinary = await uploadImage(file);
  //   console.log("upload image", uploadImageCloudinary);

  //   setData((prev) => {
  //     return {
  //       ...prev,
  //       productImage: [...prev.productImage, uploadImageCloudinary.url],
  //     };
  //   });
  // };

  // const handleDeleteProductImage = async (index) => {
  //   console.log("image index", index);

  //   const newProductImage = [...data.productImage];
  //   newProductImage.splice(index, 1);

  //   setData((prev) => {
  //     return {
  //       ...prev,
  //       productImage: [...newProductImage],
  //     };
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      category: selectedCategory,
      name: productName,
      quantity,
      batchNumber,
      dateSold,
      pricePerUnit,
      description,
    };

    try {
      const response = await axios.post(SummaryApi.addProduct.url, newProduct);
      setSuccessMessage("Product created successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error creating product. Please try again.");
      setSuccessMessage("");
    }
  };
  return (
    <div className="product-container">
      <div className="product">
        <div className="title">
          <h2 style={{ fontWeight: "bold" }}>Welcome, Create a New Product</h2>
          <div className="icon" onClick={onClose}>
            <CgClose />
          </div>
        </div>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="category" style={{ marginTop: "0.75rem" }}>
            Category :
          </label>
          <select
            required
            value={selectedCategory}
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-input"
          >
            <option value={""}>Select Category</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="productName">Product Name :</label>
          <input
            type="text"
            id="productName"
            placeholder="enter product name"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-input"
            required
          />
          {/* 
          <label htmlFor="productImage" style={{ marginTop: "0.75rem" }}>
            Product Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="input-image">
              <div className="image">
                <span style={{ fontSize: "2.25rem" }}>
                  <FaCloudUploadAlt />
                </span>
                <p style={{ fontSize: "small" }}>Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={handleUploadProductImage}
                />
              </div>
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className="product-image">
                {data.productImage.map((el, index) => {
                  return (
                    <div style={{ position: "relative" }}>
                      <img
                        src={el}
                        alt={el}
                        key={el}
                        width={80}
                        height={80}
                        style={{
                          backgroundColor: "#f4f5f7",
                          border: "1px solid #d3d4d6",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />

                      <div
                        className="delete"
                        onClick={() => handleDeleteProductImage(index)} //havent implemented yet
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ color: "#dc2626", fontSize: "0.75rem" }}>
                *Please upload product image
              </p>
            )}
          </div> */}

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <label htmlFor="batchNumber">Batch Number:</label>
          <input
            type="text"
            id="batchNumber"
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
            required
          />

          <label htmlFor="dateSold">Date Sold:</label>
          <input
            type="date"
            id="dateSold"
            value={dateSold}
            onChange={(e) => setDateSold(e.target.value)}
            required
          />

          <label htmlFor="pricePerUnit">Price Per Unit:</label>
          <input
            type="number"
            id="pricePerUnit"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            required
          />

          <label htmlFor="description" style={{ marginTop: "0.75rem" }}>
            Description :
          </label>
          <textarea
            id="description"
            className="textarea"
            placeholder="enter product description"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <button className="upload-button" type="submit">
            Create Product
          </button>
        </form>
      </div>
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};

export default UploadProduct;
