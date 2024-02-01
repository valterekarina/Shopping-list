import React from "react";
import './SignInUp.css';
import { FaUser, FaLock  } from "react-icons/fa";

const SignIn = () =>{

    return(
        <div className="sign">
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="forget-password">
                        <a href="/">Forget Password?</a>
                    </div>

                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;