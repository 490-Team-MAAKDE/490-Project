import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import Axios from "axios";
import "./SignUp.css";

function SignUp() {
  // Set up state variables for form input values and error messages
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Allow Axios to send cookies with requests
  Axios.defaults.withCredentials = true;

  // Validate email using a regular expression
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Send a registration request to the server when the form is submitted
  const register = () => {
    // Check that all required fields have been filled in
    if (
      !firstnameReg ||
      !lastnameReg ||
      !usernameReg ||
      !passwordReg
    ) {
      setError("Please fill in all required fields.");
    // Check that the email address is valid
    } else if (!validateEmail(emailReg)) {
      setError("Please enter a valid email.");
    } else {
      // Send a post request to the server with the form data
      setError("");
      Axios.post("http://localhost:3001/register", {
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        username: usernameReg,
        password: passwordReg,
      })
        .then((response) => {
          console.log(response);
          // Set the success state variable to true and redirect to the login page
          setSuccess(true);
          window.location.href = "/signup";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  return (
    <div className="signup-content">
      <div className="signup-hero-bar"></div>
      <div className="signup-container">
        <form>
          <div>
            <label htmlFor="userName">First Name: </label> <br />
            <Input
              type="text"
              onChange={(e) => {
                setFirstnameReg(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="lastname">Last Name: </label> <br />
            <Input
              type="text"
              onChange={(e) => {
                setLastnameReg(e.target.value);
              }}
            />{" "}
          </div>
          <br />
          <div>
            <label htmlFor="email">Email: </label> <br />
            <Input
              type="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />{" "}
          </div>
          <br />
          <div>
            <label htmlFor="username">Username: </label> <br />
            <Input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />{" "}
          </div>
          <br />
          <div>
            <label htmlFor="password">Password: </label> <br />
            <Input
              type="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />{" "}
          </div>
          <br />
          <p>You're Steps Closer to <b>Creating Your Own Style</b></p>
          <Button colorScheme="red" marginTop={5} onClick={register}>
            Create Your Account
          </Button>
          {error && <p>{error}</p>}
          {success && <p>Account registered!</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;