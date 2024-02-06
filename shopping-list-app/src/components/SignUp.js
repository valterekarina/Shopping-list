import React, { useState } from "react";
import './SignInUp.css';
import { FaUser, FaLock, FaHouseUser, FaAmilia } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SignUp = () =>{
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [household, setHouseHold] = useState("");

    const handleRegister  = (e) =>{
        e.preventDefault();
        console.log(name, username, email, password, confirmPassword, household);
    }

    return(
        <div className="sign">
            <div className="wrapper">
                <form>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
                        <FaAmilia  className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                        <MdOutlineAlternateEmail className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Household" value={household} onChange={e => setHouseHold(e.target.value)} required />
                        <FaHouseUser className="icon"/>
                    </div>
                    <button onClick={handleRegister}>Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;