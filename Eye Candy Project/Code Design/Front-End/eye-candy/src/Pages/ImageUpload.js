import React, { useState } from "react";
import axios from "axios";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="custom-file-upload">
          <input type="file" onChange={handleImageChange} />
          Choose The Image
        </label>
        <button type="submit">Upload The Image</button>
      </form>

      {result && (
      <div className="result">
        <h2>Product: {result.product}</h2>
        <img src={result.user_image} alt="Uploaded item" />
        <h2>Colors:</h2>

        <div className="colors">
          {result.colors
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 3)
            .map((color, index) => (
              <div key={index} className="colors-internal">
                <div style={{backgroundColor: color.color_code}}>
                  <span>
                    Color Code: {color.color_code}, Percentage: {color.percentage}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    )}
    </div>
  );
};

export default ImageUpload;


