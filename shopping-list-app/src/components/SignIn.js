import React, { useState } from "react";
import { FaUser, FaLock  } from "react-icons/fa";
import './SignInUp.css';

const SignIn = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return(
        <div className="sign">
            <div className="wrapper">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="forget-password">
                        <a href="/">Forget Password?</a>
                    </div>

                    <button onClick={handleLogin}>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;