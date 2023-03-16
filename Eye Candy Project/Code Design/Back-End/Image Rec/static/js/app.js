document.getElementById("upload-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("file");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const response = await fetch("/predict", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("prediction").textContent = "Prediction: " + data.product;
            document.getElementById("uploaded-image").src = data.user_image;
            document.getElementById("uploaded-image").style.display = "block";
        } else {
            alert("Error occurred while predicting the image: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while uploading the image.");
    }
});
