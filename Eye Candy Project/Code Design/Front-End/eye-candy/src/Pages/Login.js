/*Ensure you have npm installed 'react' and 'axios' in integrated terminal 
for: Eye Candy Project\Code Design\Front-End\eye-candy\src */
import React, { useEffect, useState, useContext } from "react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../App";

//This is the Sign Up Funtion for the overall page
function Login() {
  const { username, setUsername } = useContext(UserContext);
  /*This is the useState to set the value of the stated 
  variables from whatever the user inputs in the text boxes.*/
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [navigateToDashboard, setNavigateToDashboard] = useState(false);

  //Allow for cookies to be stored to the application
  Axios.defaults.withCredentials = true;

  /*This portion obtains the values from user input and 
  place them in\in variables to be verified with the SQL 
  Database*/
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        navigate(`/dashboard/${response.data[0].username}`);
      }
    });
  };

  /*Axios GET will serve as getting information when there is
     page refresh. This portion will check for cookies and see
     if there are any saved ones and refer to and keep login 
     status*/
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
        setNavigateToDashboard(true);
      }
    });
  }, []);

  //This should redirect you if login is usccessful
  if (navigateToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  /*Display the form for users to input their login credentials.
  This will compare with SQL and determine authenticity*/
  return (
    <div className="login-content">
      <div className="login-hero-bar"></div>
      <div className="login-container">
        <h1>Login</h1>
        <form action="" className="form-container">
          <div>
            <label htmlFor="userName">Username: </label> <br />
            <Input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password" typeof="password">
              Password:{" "}
            </label>{" "}
            <br />
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br />
          <p>
            Don't have an account? <a className="click-here" href="/signup">Click here</a>
          </p> 
          <Button colorScheme="yellow" marginTop={5} onClick={login}>
            Login
          </Button>
        </form>
      </div>
      <h2>{loginStatus}</h2>
    </div>
  );
}

export default Login;
