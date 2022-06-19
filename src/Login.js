import React from "react";
import "./Login.css";
import SignInCard from "./SignInCard";

const Login = () => {
    return(
        <div className="login">
            <div className="login__header">
                <img 
                    className="login__header__logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="amazon logo"
                />
            </div>
            <div className="login__signIn">
                <SignInCard/>
            </div>
             
        </div>
    );
}

export default Login;