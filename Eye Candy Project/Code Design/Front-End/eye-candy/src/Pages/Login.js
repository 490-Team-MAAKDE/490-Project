import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-content">
      <div className="login-container">
        <form action="">
          <label htmlFor="userName">Username: </label> <br />
          <input type="text" className="userName" placeholder="username" />{" "}
          <br />
          <label htmlFor="password">Password: </label> <br />
          <input type="password" className="password" /> <br />
          <p>
            Don't have an account? Click <a href="">here</a>{" "}
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
