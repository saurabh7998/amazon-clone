import React, { useState } from "react";
import { auth } from "./firebase";
import { getAuth } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import "./SignUp.css";


const SignUp = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[pwd, setPwd] = useState("")
    const[confirmPwd, setConfirmPwd] = useState("")

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault(); //prevent refresh of the page (preventing the default behaviour)

        if(pwd !== confirmPwd){
            alert("Passwords do not match!")
            return;
        }

        auth.createUserWithEmailAndPassword(email, pwd)
        .then(auth => {
            //created the user and logged in and redirect to home page.
            const authentication = getAuth();
            const user = authentication.currentUser;
            if (user !== null) {
                user.displayName = name;
            }
            navigate("/")
        })
        .catch((e) => alert(e.message))
    }

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
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" maxLength="128"/>
                    <label>Your email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" maxLength="128"/>
                    <label>Password</label>
                    <input onChange={(e) => setPwd(e.target.value)} value={pwd} type="password" maxLength="128"/>
                    <label>Re-enter password</label>
                    <input onChange={(e) => setConfirmPwd(e.target.value)} value={confirmPwd} type="password" maxLength="128" />
                    <button onClick={signUp} type="submit" className="signUp__button">Continue</button>
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
           </div>
        </div>
    )
}


export default SignUp;