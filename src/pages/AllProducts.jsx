import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../common";

import "./AllProduct.css";
import UploadProduct from "../components/UploadProduct";

const AllProducts = () => {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch products from the backend API when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(SummaryApi.fetchProduct.url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  //implement sell functionality
  const handleSellProduct = async () => {
    if (!selectedProduct || !quantity) {
      setErrorMessage("Please select a product and enter quantity.");
      return;
    }

    const selectedProductData = products.find(
      (product) => product.id === selectedProduct
    );
    if (!selectedProductData) {
      setErrorMessage("Selected product not found.");
      return;
    }
    //track transaction and transaction date
    const transaction = {
      productId: selectedProduct,
      quantity,
      date: new Date().toISOString(),
    };

    try {
      // Send a POST request to record the transaction
      await axios.post(SummaryApi.sellProduct.url, transaction);

      // Update product quantity
      const updatedProducts = products.map((product) => {
        if (product.id === selectedProduct) {
          return { ...product, quantity: product.quantity - quantity };
        }
        return product;
      });
      setProducts(updatedProducts);

      setSuccessMessage("Product sold successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error selling product. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="title">
      <h2 style={{ fontWeight: "bold" }}>All Products</h2>
      <div>
        <button onClick={() => setOpenUploadModal(true)}>Upload Product</button>
      </div>

      {/* all products display */}

      <div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <div>
          <label htmlFor="product">Select Product:</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSellProduct}>Sell Product</button>
      </div>

      {openUploadModal && (
        <UploadProduct onClose={() => setOpenUploadModal(false)} />
      )}
    </div>
  );
};

export default AllProducts;
