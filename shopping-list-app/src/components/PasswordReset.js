import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { MdOutlineAlternateEmail } from "react-icons/md";
import './SignInUp.css';

const SignIn = () =>{
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleResetPassword = async(e) => {
        e.preventDefault();

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigate("/login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
        });
    }

    return(
        <div className="sign">
            <div className="wrapper">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                        <MdOutlineAlternateEmail className="icon"/>
                    </div>
                    <button onClick={handleResetPassword}>Reset Password</button>
                    <div className="register-link">
                        <p>Go back to <a href="/login">Login</a> page</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;