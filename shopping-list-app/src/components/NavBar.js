import React from "react";
import { FaHome } from "react-icons/fa";

export const NavBar = () =>{
    return(
        <nav>
            <div>
                <FaHome />
            </div>
            <div>
                <ul>
                    <li>Product List</li>
                    <li>Recipes</li>
                    <li>Profile</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </nav>
    )
}