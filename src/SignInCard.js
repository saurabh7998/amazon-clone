import React, { useState } from "react";
import { auth } from "./firebase";
import {useNavigate} from "react-router-dom";
import "./SignInCard.css";

const SignInCard = () => {

    const navigate = useNavigate();

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault(); //prevent refreshing!

        auth.signInWithEmailAndPassword(email, password)
        .then(
            (auth) => {
                //logged in successfully, redirect to home page
                navigate("/");
            })
        .catch((e) => alert(e.message));
    }

    const signUp = (e) => {
        e.preventDefault(); //prevent refresh of the page (preventing the default behaviour)

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created the user and logged in and redirect to home page.
            navigate("/");
        })
        .catch((e) => alert(e.message))
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }


    return(
        <div className="signIn">
            <form className="signIn__form">
                <h1>
                    Sign-In
                </h1>
                <label>
                    Email or mobile phone number
                </label>
                <input onChange={onChangeEmail} type="email" maxLength="128" value={email}/>
                <label>
                    Password
                </label>
                <input onChange={onChangePassword} type="password" maxLength="128" value={password}/>
                <button onClick={login} type="submit" className="signIn__button">Continue</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button onClick={signUp} className="signIn__createAccBtn">Create your Amazon account</button>
        </div>
    )
}


export default SignInCard;