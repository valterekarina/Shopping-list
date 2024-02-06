import React, { useEffect } from "react";
import { NavBar } from "./NavBar";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (!user) {
            navigate('/login');
          }
        });
      }, []);

return(
    <>
    <NavBar/>
    <h1>Home</h1>
    </>
);
}

export default Home;