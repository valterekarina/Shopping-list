import React, {useEffect} from "react";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const ProductList = () =>{
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
            <h1>ProductList</h1>
        </>
    )
}

export default ProductList;