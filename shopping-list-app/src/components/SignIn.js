import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { FaUser, FaLock  } from "react-icons/fa";
import './SignInUp.css';

const SignIn = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        var email = "";

        const q = query(collection(db, "users"), where("username", "==", username));
        
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size>0){
            const userDoc = querySnapshot.docs[0];
            email = userDoc.data().email;
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/");
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
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                        <FaLock className="icon"/>
                    </div>
                    <div className="forget-password">
                        <a href="/forgot-password">Forget Password?</a>
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