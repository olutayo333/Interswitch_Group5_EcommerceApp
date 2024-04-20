import React, { useState } from "react";

import "./AllProduct.css";
import UploadProduct from "../components/UploadProduct";

const AllProducts = () => {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  // const fetchAllProduct = async () => {
  //   const response = await fetch(SummaryApi.allProduct.url);
  //   const dataResponse = await response.json();

  //   console.log("product data", dataResponse);

  //   setAllProduct(dataResponse?.data || []);
  // };

  // useEffect(() => {
  //   fetchAllProduct();
  // }, []);

  return (
    <div className="title">
      <h2 style={{ fontWeight: "bold" }}>All Products</h2>
      <div>
        <button onClick={() => setOpenUploadModal(true)}>Upload Product</button>
        {/* <button>Upload Product</button> */}
      </div>

      {/* all products display */}

      <div>
        {allProduct.map((product, index) => {
          return (
            <div>
              <img src={product.productImage[0]} width={100} height={100} />
            </div>
          );
        })}
      </div>

      {/* <div className="products">
        {allProduct.map((product, index) => {
          return (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllProduct}
            />
          );
        })}
      </div> */}

      {openUploadModal && (
        <UploadProduct onClose={() => setOpenUploadModal(false)} />
      )}
    </div>
  );
};

export default AllProducts;
