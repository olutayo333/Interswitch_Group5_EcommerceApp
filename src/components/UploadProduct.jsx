import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from "../common/productCategory";
import uploadImage from "../common/uploadImage";
import DisplayImage from "../common/displayImage";
import { MdDelete } from "react-icons/md";
import "./UploadProduct.css";

const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);
    console.log("upload image", uploadImageCloudinary);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    console.log("image index", index);

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...newProductImage],
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch(SummaryApi.uploadProduct.url, {
    //   method: SummaryApi.uploadProduct.method,
    //   credentials: "include",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // const responseData = await response.json();

    // if (responseData.success) {
    //   toast.success(responseData?.message);
    //   onClose();
    //   fetchData();
    // }

    // if (responseData.error) {
    //   toast.error(responseData?.message);
    // }
  };
  return (
    <div className="product-container">
      <div className="product">
        <div className="title">
          <h2 style={{ fontWeight: "bold" }}>Upload Product</h2>
          <div className="icon" onClick={onClose}>
            <CgClose />
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="productName">Product Name :</label>
          <input
            type="text"
            id="productName"
            placeholder="enter product name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="form-input"
            required
          />

          <label htmlFor="brandName" style={{ marginTop: "0.75rem" }}>
            Brand Name :
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="enter brand name"
            value={data.brandName}
            name="brandName"
            onChange={handleOnChange}
            className="form-input"
            required
          />

          <label htmlFor="category" style={{ marginTop: "0.75rem" }}>
            Category :
          </label>
          <select
            required
            value={data.category}
            name="category"
            onChange={handleOnChange}
            className="form-input"
          >
            <option value={""}>Select Category</option>
            {productCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

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
                  onChange={handleUploadProduct}
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
          </div>

          <label htmlFor="price" style={{ marginTop: "0.75rem" }}>
            Price :
          </label>
          <input
            type="number"
            id="price"
            placeholder="enter price"
            value={data.price}
            name="price"
            onChange={handleOnChange}
            className="form-input"
            required
          />

          <label htmlFor="sellingPrice" style={{ marginTop: "0.75rem" }}>
            Selling Price :
          </label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="enter selling price"
            value={data.sellingPrice}
            name="sellingPrice"
            onChange={handleOnChange}
            className="form-input"
            required
          />

          <label htmlFor="description" style={{ marginTop: "0.75rem" }}>
            Description :
          </label>
          <textarea
            className="textarea"
            placeholder="enter product description"
            rows={3}
            onChange={handleOnChange}
            name="description"
            value={data.description}
          ></textarea>

          <button className="upload-button">Upload Product</button>
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
