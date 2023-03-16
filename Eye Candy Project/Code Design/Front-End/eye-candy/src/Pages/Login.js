/*Ensure you have npm installed 'react' and 'axios' in integrated terminal 
for: Eye Candy Project\Code Design\Front-End\eye-candy\src */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";

//This is the Sign Up Funtion for the overall page
function Login() {

  /*This is the useState to set the value of the stated 
  variables from whatever the user inputs in the text boxes.*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  //Allow for cookies to be stored to the application
  Axios.defaults.withCredentials = true;

  /*This portion obtains the values from user input and 
  place them in\in variables to be verified with the SQL 
  Database*/
  const login = (e) => {

    /*Temporarily palced this since the page automatically 
    reroutes after submit*/
    e.preventDefault();

    //Axios POST will be for inserting data when logging in
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    /*Axios GET will serve as getting information when there is
     page refresh. This portion will check for cookies and see
     if there are any saved ones and refer to and keep login 
     status*/
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
      setLoginStatus(response.data.user[0].username);
      } 
    })
  }, [])

  /*Display the form for users to input their login credentials.
  This will compare with SQL and determine authenticity*/
  return (
    <div className="login-content">
      <div className="login-container">
        <form action="">
          <label htmlFor="userName">Username: </label> <br />
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />{" "}
          <br />
          <label htmlFor="password">Password: </label> <br />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br />
          <p>
            Don't have an account? Click <a href="">here</a>
          </p>
          <button onClick={login}>Login</button>
        </form>
      </div>
      {/* loginStatus plays a roll in currently displaying 
      login success/failure message. Refer to login.js[29-39]
      as well as database.js [75-105] */}
      <h2>{loginStatus}</h2>
    </div>
  );
}

export default Login;
