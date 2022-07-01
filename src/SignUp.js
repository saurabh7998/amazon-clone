import React from "react";
import "./SignUp.css";


const SignUp = () => {
    return(
        <div className="signUp">
           <div className="signUp__header">
                <img 
                    className="signUp__header__logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="amazon logo"
                />
           </div>
           <div className="signUp__card">
               <form className="signUp__form">
                    <h1>Create Account</h1>
                    <label>Your name</label>
                    <input type="text" />
                    <label>Your email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password" />
                    <label>Re-enter password</label>
                    <input type="password" />
                    <button type="submit" className="signUp__button">Continue</button>
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
           </div>
        </div>
    )
}


export default SignUp;