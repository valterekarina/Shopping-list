import React from "react";
import './SignInUp.css';
import { FaUser, FaLock, FaHouseUser, FaAmilia } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SignUp = () =>{

    return(
        <div className="sign">
            <div className="wrapper">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Name" required />
                        <FaAmilia  className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="E-mail" required />
                        <MdOutlineAlternateEmail className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Household" required />
                        <FaHouseUser className="icon"/>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="/">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;