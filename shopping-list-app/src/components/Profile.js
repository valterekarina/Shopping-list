import React, {useEffect} from "react";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const Profile = () =>{
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
            <h1>profile</h1>
        </>
    )
}

export default Profile;