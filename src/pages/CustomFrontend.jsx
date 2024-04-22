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
    <div>
      <h2>Customize Your Store Theme Here</h2>
      <div>
        <h3>Color Picker</h3>
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>
      <div>
        <h3>Font Selector</h3>
        <Select options={fontOptions} onChange={handleFontChange} />
      </div>
      <div>
        <h3>Logo Uploader</h3>
        <Dropzone onDrop={handleLogoDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop logo file here, or click to select file</p>
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
      <button onClick={saveCustomizations} disabled={saving}>
        {saving ? "Saving..." : "Save Customizations"}
      </button>
    </div>
  );
};

export default FrontendCustomization;
