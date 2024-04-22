import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Select from "react-select";
import Dropzone from "react-dropzone";
import SummaryApi from "../common";
import axios from "axios";

const FrontendCustomization = ({}) => {
  // State variables to store customization options
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedFont, setSelectedFont] = useState("");
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [saving, setSaving] = useState(false);

  // Handler functions for color picker, font selector, and image uploader
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleFontChange = (font) => {
    setSelectedFont(font.value);
  };

  const handleLogoDrop = (files) => {
    const logoFile = files[0];
    // Perform any necessary operations with the logo file
    setSelectedLogo(logoFile);
  };

  const saveCustomizations = async () => {
    setSaving(true);

    // Construct payload with customization data
    const customizationData = {
      color: selectedColor,
      font: selectedFont,
      logo: selectedLogo,
    };

    try {
      // Send POST request to backend API to save customizations for the tenant
      await axios.post(SummaryApi.config.url, customizationData);
      alert("Customizations saved successfully!");
    } catch (error) {
      console.error("Error saving customizations:", error);
      alert("Failed to save customizations. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  //options for font selector
  const fontOptions = [
    { value: "Arial", label: "Arial" },
    { value: "Helvetica", label: "Helvetica" },
    { value: "Times New Roman", label: "Times New Roman" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-6 mx-auto mt-5 my-3 text-center py-3">
      <h2 className="mt-2"><u>Customize Your Store Theme Here</u></h2>
      <div className="d-block mx-auto text-center">
        <h3>Color Picker</h3>
        <ChromePicker className="mx-auto" color={selectedColor} onChange={handleColorChange} />
      </div>
      <div className="my-3">
        <h3>Font Selector</h3>
        <Select options={fontOptions} onChange={handleFontChange} />
      </div>
      <div>
        <h3>Logo Uploader</h3>
        <Dropzone onDrop={handleLogoDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} className="form-control form" />
              <p className="btn btn-danger">Drag and drop logo file here, or click to select file</p>
            </div>
          )}
        </Dropzone>
        {selectedLogo && (
          <div>
            <p>Selected Logo:</p>
            <img src={URL.createObjectURL(selectedLogo)} alt="Selected Logo" />
          </div>
        )}
      </div>
      <button className="btn btn-outline-secondary" onClick={saveCustomizations} disabled={saving}>
        {saving ? "Saving..." : "Save Customizations"}
      </button>
    </div>

      </div>

    </div>
  );
};

export default FrontendCustomization;
