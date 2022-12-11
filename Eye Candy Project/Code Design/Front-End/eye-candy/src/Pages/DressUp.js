import React, { useState } from "react";
import "./DressUp.css";

function DressUp() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="container">
      <input type="file" onChange={handleImageChange} className="btn" />
      {image && <img src={URL.createObjectURL(image)} />}
    </div>
  );
}

export default DressUp;
