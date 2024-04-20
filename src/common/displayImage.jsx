import React from "react";
import { CgClose } from "react-icons/cg";
import "./displayImage.css";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="container">
      <div className="img-container">
        <div className="modal-container" onClick={onClose}>
          <CgClose />
        </div>

        <div className="img">
          <img src={imgUrl} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
