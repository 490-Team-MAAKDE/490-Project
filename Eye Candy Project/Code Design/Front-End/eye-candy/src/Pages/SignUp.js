import React from 'react'
import './SignUp.css';

function SignUp() {
return (
        <div className="signup-content">
        <div className="signup-container">
        <form action="">
            <label htmlFor="firstName">First Name: </label> <br />
            <input type="text" className="firstName" placeholder='firstname'/> <br />
            <label htmlFor="lastName">Last Name: </label> <br />
            <input type="text" className="lastName" placeholder='lastname'/> <br />
            <label htmlFor="firstName">Email: </label> <br />
            <input type="text" className="userEmail" placeholder='userEmail'/> <br />
            <label htmlFor="userName">Username: </label> <br />
            <input type="text" className="userName" placeholder='username'/> <br />
            <label htmlFor="password">Password: </label> <br />
            <input type="password" className="password" /> <br />
            <p>You're steps closer to creating your own style</p>
            <button type='submit'>Create your Account</button>
        </form>
        </div>
        </div>
    )
}

export default SignUp