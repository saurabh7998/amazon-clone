import React from "react";
import "./SignInCard.css";

const SignInCard = () => {
    return(
        <div className="signIn">
            <h1>
                Sign-In
            </h1>
            <label>
                Email or mobile phone number
            </label>
            <input type="email" maxLength="128"/>
            <button className="signIn__button">Continue</button>
        </div>
    )
}


export default SignInCard;