import React, { useState } from "react";
import productCategory from "../common/productCategory";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState({});
  const [loading, setLoading] = useState(false);

  //   const fetchCategoryProduct = async () => {
  //     setLoading(true);
  //     const response = await fetch(SummaryApi.categoryProduct.url);
  //     const dataResponse = await response.json();
  //     setLoading(false);
  //     setCategoryProduct(dataResponse.data);
  //   };

  //   useEffect(() => {
  //     fetchCategoryProduct();
  //   }, []);

  return (
    <div>
      {productCategory.map((product, index) => {
        return (
          <div>
            <button>{product.label}</button>
            {/* <img
              src={product?.productImage[0]}
              alt={product?.category}
              style={{ height: "100%", objectFit: "fill" }}
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
