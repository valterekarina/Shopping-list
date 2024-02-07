import React, {useEffect, useState} from "react";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../firebase';
import { deleteUser, updatePassword } from "firebase/auth";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import Modal from "./helpers/Modal";

import './Profile.css';

const Profile = () =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [household, setHousehold] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }else{
        getUserData(user.email)
      }
    });
  }, [navigate]);

  const getUserData = async(userEmail) =>{
    const q = query(collection(db, "users"), where("email", "==", userEmail));
        
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size>0){
            const userDoc = querySnapshot.docs[0];
            setEmail(userDoc.data().email);
            setName(userDoc.data().name);
            setUsername(userDoc.data().username);
            setHousehold(userDoc.data().household);
        }
  }

  const handleDeleteProfile = async(e) =>{
    e.preventDefault();
    if(window.confirm('Do you really want to delete your profile?')){
      const user = auth.currentUser;
      await deleteDoc(doc(db, "users", user.uid));
      deleteUser(user).then(() => {
      }).catch((error) => {
        alert(error.message);
      });
       
    }
  }

  const handlePasswordChange = (e) =>{
    e.preventDefault();
    setShowModal(true)
  }

  const handleSavePassword = (e) =>{
    e.preventDefault();
    if(password === confirmPassword && password.length >5){
      const user = auth.currentUser;
      updatePassword(user, password).then(() =>{
        setShowModal(false);
      }).catch((error)=> {
        console.log(error.message);
      })
    }else{
      console.log('passwords doesnt match');
    }
  }

  return(
    <>
      <NavBar/>
        <div className="profile">
          <div className="wrapper">
            <form>
              <h1>Profile</h1>
              <div className="input-box">
                <label className="profile-label">Name</label>
                <input type="text" placeholder="Name" value={name} readOnly />
              </div>
              <div className="input-box">
                <label className="profile-label">Username</label>
                <input type="text" placeholder="Username" value={username} readOnly />
              </div>
              <div className="input-box">
              <label className="profile-label">E-mail</label>
                <input type="email" placeholder="E-mail" value={email} readOnly />
              </div>
              <div className="input-box">
                <label className="profile-label">Household</label>
                <input type="text" placeholder="Household" value={household} readOnly />
              </div>
                <button onClick={handlePasswordChange}>Edit</button>
                <button onClick={handlePasswordChange}>Change password</button>
                <button className="delete-button" onClick={handleDeleteProfile}>Delete profile</button>
            </form>
          </div>
          
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                  <form>
                    <h1>Change password</h1>
                    <div className="button-div">
                      <div className="input-box">
                        <input type='password' placeholder="New Password" value={password} onChange={e =>setPassword(e.target.value)} required/>
                      </div>
                      <div className="input-box">
                        <input type='password' placeholder="Confirm New Password" value={confirmPassword} onChange={e =>setConfirmPassword(e.target.value)} required/>
                      </div>
                      <button className="delete-button" onClick={() => setShowModal(false)}>Cancel</button>
                      <button onClick={handleSavePassword}>Save</button>
                    </div>
                  </form>
                </div>
        </Modal>
    </>
  );
}

export default Profile;