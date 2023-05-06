// This is ESSENTIAL in engaging our front end with the REST API | FLASK APP through HTTP requests
import React, { useState } from "react";
import config from "../config";
import "./ImageUpload.css";

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

  // We will soon be fetching color rec outputs into this same page
  return (
    <div className="imageUpload">
      <h1 id="title">Dress ME UP</h1>
      <form id="form-input" onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" required />
        <button id="imageSubmit" type="submit">
          Predict
        </button>
      </form>
      <h2 id="title2">{prediction}</h2>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}

      <div className="description">
        <h3>About Us</h3>
        <p>
          We are a team of fashion enthusiasts who want to make it easier for
          you to find the perfect outfit. With our AI-powered system, you can
          upload a photo of yourself and receive personalized recommendations
          based on your style.
        </p>
      </div>

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
