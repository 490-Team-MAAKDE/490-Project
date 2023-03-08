import React, { useState } from 'react'
import Axios from 'axios'
import "./Login.css";

function Login() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [loginStatus, setLoginStatus] = useState('');

const login = () =>{
  Axios.post ('http://localhost:3001/login', {
      username: username,
      password: password,
  }).then((response ) =>{

    if (response.data.message){
      setLoginStatus(response.data.message)
    }
    else {
      setLoginStatus(response.data[0].username);
  }
  });
};

  return (
    <div className="login-content">
      <div className="login-container">
        <form action="">
          <label htmlFor="userName">Username: </label> <br />
          <input
                type="text"
                onChange={(e) => {setUsername(e.target.value)}}
                />{" "}
                <br />
          <label htmlFor="password">Password: </label> <br />
          <input
                type="text"
                onChange={(e) => {setPassword(e.target.value)}}
                />{" "}
                <br />
          <p>
            Don't have an account? Click <a href="">here</a>
          </p>
          <button onClick={login}>Login</button>
        </form>
      </div>
      <h2>{loginStatus}</h2>
    </div>
  );
}

export default Login;
