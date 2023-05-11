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
    <div className="how-to">
       <h3>How It Works</h3>
       <ol>
         <li>
           Upload a photo of yourself wearing clothing that represents your
           style.
         </li>
         <li>
           Our AI system analyzes the photo and makes recommendations based on
           your preferences.
         </li>
         <li>
           View the recommended outfits and click on the ones you like to
           purchase them.
         </li>
       </ol>
     </div>


     <div className="social-proof">
       <h3>Satisfied Customers</h3>
       <ul>
         <li>
           "I love how easy it is to use Dress ME UP. It's like having a
           personal stylist at my fingertips!" - Emily
         </li>
         <li>
           "Thanks to Dress ME UP, I have discovered so many new fashion brands
           that I never would have known about otherwise." - Michael
         </li>
         <li>
           "I've always struggled with finding clothes that fit my body type,
           but Dress ME UP has made it so much easier." - Sarah
         </li>
       </ul>
     </div>
    </div>
  );
};

export default ImageUpload;
