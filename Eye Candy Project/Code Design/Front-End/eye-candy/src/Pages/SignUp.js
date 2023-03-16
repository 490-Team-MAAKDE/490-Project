/*Ensure you have npm installed 'react' and 'axios' in integrated 
terminal for: Eye Candy Project\Code Design\Front-End\eye-candy\src*/
import React, { useState } from 'react'
import Axios from 'axios'
import './SignUp.css';


//This is the Sign Up Funtion for the overall page
function SignUp() {

/*This is the useStates to set the value of the stated 
variables from whatever the user inputs in the text boxes.*/
const [firstnameReg, setFirstnameReg] = useState('');
const [lastnameReg, setLastnameReg] = useState('');
const [emailReg, setEmailReg] = useState('');
const [usernameReg, setUsernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');


//Allow for cookies to be stored to the application
Axios.defaults.withCredentials = true;


/*This portion obtains the values from user input and place
them in variables to be then posted to the SQL Database*/
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


/*Display the form for users to input their details to 
create an account*/
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

/*By default the page as of right now is rerouting 
back to the Sign Up Page*/
export default SignUp