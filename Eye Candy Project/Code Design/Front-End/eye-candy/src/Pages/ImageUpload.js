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

      <div className="how-to">
       <h3>How It Works</h3>
       <ul>
         <li>
           1. Upload a photo of yourself wearing clothing that represents your
           style.
         </li>
         <li>
           2. Our AI system analyzes the photo and makes recommendations based  on
           your preferences.
         </li>
         <li>
           3. View the recommended outfits and click on the ones you like to
           purchase them.
         </li>
       </ul>
     </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <label className="custom-file-upload">
          <input type="file" onChange={handleImageChange} />
          Choose The Image
        </label>
        <button type="submit">Upload The Image</button>
      </form>

      {result && (
      <div className="result">
        <span className="image-container">
          <h2>Product: {result.product}</h2>
          <img src={result.user_image} alt="Uploaded item" />
        </span>
        <div className="colors">
        <h2>Colors:</h2>
          {result.colors
            .sort((a, b) => b.percentage - a.percentage)
            .slice(1, 4)
            .map((color, index) => (
              <div key={index} className="colors-internal">
                <h3>Color Code: </h3>
                  <span style={{backgroundColor: color.color_code}}>
                    {color.color_code}
                  </span>
                
                {/* Percentage: {color.percentage} */}
              </div>
            ))}
        </div>
      </div>
    )}

     {/* <div className="social-proof">
       <h3>Satisfied Customers</h3>
       <ul>
         <section className="card">
           "I love how easy it is to use Dress ME UP. It's like having a
           personal stylist at my fingertips!" - Emily
         </section>
         <section  className="card">
           "Thanks to Dress ME UP, I have discovered so many new fashion brands
           that I never would have known about otherwise." - Michael
         </section>
         <section className="card">
           "I've always struggled with finding clothes that fit my body type,
           but Dress ME UP has made it so much easier." - Sarah
         </section>
       </ul>
     </div> */}

  </div>
  );
};

export default ImageUpload;
