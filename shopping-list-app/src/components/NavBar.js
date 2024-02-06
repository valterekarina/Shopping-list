import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import './NavBar.css';

export const NavBar = () =>{

    const handleLogout = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return(
        <nav className="navbar">
            <div className="container">
                <div >
                    <a href='/'><FaHome className="logo"/></a>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li><NavLink to ='/product-list' className='nav-element'>Product List</NavLink></li>
                        <li><NavLink to ='/recipes' className='nav-element'>Recipes</NavLink></li>
                        <li><NavLink to ='/profile' className='nav-element'>Profile</NavLink></li>
                        <li><NavLink to = '/login' onClick={handleLogout}>Log Out</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}