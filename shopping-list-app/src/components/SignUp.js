import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore"; 
import {db} from '../firebase';

import { FaUser, FaLock, FaHouseUser, FaAmilia } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import './SignInUp.css';


const SignUp = () =>{
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [household, setHouseHold] = useState("");

    const navigate = useNavigate();

    const handleRegister = async(e) =>{
        e.preventDefault();

        const q = query(collection(db, "users"), where("username", "==", username));
        
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size===0){
            if (password === confirmPassword){
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    handleSave(user.uid);
                    navigate('/login');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                })
            }else{
                alert("passwords doesn't match");
            }
        }else{
            console.log('existing username');
        }      
    }

    const handleSave = async(uid) =>{
        await setDoc(doc(db, "users", uid), {
            name: name,
            username: username,
            email: email,
            household: household
          });
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