// This is ESSENTIAL in engaging our front end with the REST API | FLASK APP through HTTP requests
import React, { useState } from "react";
import config from "../config";
import "./ImageUpload.css"

// !Defining functional components
const ImageUpload = () => {
    // These useStates manage two states of the prediction and image
  const [prediction, setPrediction] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  // Triggered when the user submits an image through a form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileInput = event.target.elements.file; 
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    
    // POST request sent to Flask API using fetch to pass in 'FormData'
    // !STATUS 200-299 is successful upload
    try {
      const response = await fetch(`${config.API_BASE_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setPrediction("Prediction: " + data.product);
        setUploadedImage(data.user_image);
      } else {
        alert("Error occurred while predicting the image: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while uploading the image.");
    }
  };

    
  // Color rec outputs will come out here as well.    
  return (
    <div className="imageUpload">
      <h1 id="title">Dress ME Up</h1>
      <form id="form-input" onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" required />
        <br></br>
        <br></br>
        <button id="imageSubmit" type="submit">Predict</button>
      </form>
      <h2 id="title2">{prediction}</h2>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
