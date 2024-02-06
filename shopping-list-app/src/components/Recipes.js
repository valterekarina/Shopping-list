import React, {useEffect} from "react";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const Recipes = () =>{
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (!user) {
            navigate('/login');
          }
        });
      }, [navigate]);

    return(
        <>
            <NavBar/>
            <h1>Recipes</h1>
        </>
    )
}

export default Recipes;