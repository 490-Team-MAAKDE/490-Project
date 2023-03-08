import React, { useState } from 'react'
import Axios from 'axios'
import './SignUp.css';

function SignUp() {

const [firstnameReg, setFirstnameReg] = useState('');
const [lastnameReg, setLastnameReg] = useState('');
const [emailReg, setEmailReg] = useState('');
const [usernameReg, setUsernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');

const register = () =>{
    Axios.post ("http://localhost:3001/register", {
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        username: usernameReg,
        password: passwordReg,
    }).then((response ) =>{
        console.log(response);
    });
};




return (
        <div className="signup-content">
        <div className="signup-container">
        <form action="">
            <label htmlFor="firstname">First Name: </label> <br />
                <input
                type="text"
                onChange={(e) => {setFirstnameReg(e.target.value)}}
                />{" "}
                <br />
            <label htmlFor="lastname">Last Name: </label> <br />
                <input
                type="text"
                onChange={(e) => {setLastnameReg(e.target.value)}}
                />{" "}
                <br />
            <label htmlFor="email">Email: </label> <br />
                 <input
                type="text"
                onChange={(e) => {setEmailReg(e.target.value)}}
                />{" "}
                <br />
            <label htmlFor="username">Username: </label> <br />
                <input
                type="text"
                onChange={(e) => {setUsernameReg(e.target.value)}}
                />{" "}
                <br />
            <label htmlFor="password">Password: </label> <br />
                <input
                type="text"
                onChange={(e) => {setPasswordReg(e.target.value)}}
                />{" "}
                <br />
            <p>You're steps closer to creating your own style</p>
            <button onClick={register}>Create your Account</button>
       
        </form>
        </div>
        </div>
        
    )
}

export default SignUp