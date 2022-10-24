import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]=useState({email:'sajib7315@gmail.com'})


    // create user 
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // login user 

    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    // update profile 
    const updateUserProfile=(profile)=>{
        return updateUserProfile(auth.currentUser,profile)
    }


    // logout 
    const logoutUser=()=>{
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser);

         
        })
        return () => {
            unsubscribed();
        }

    }, [])

    const userInfo={user,createUser, loginUser, updateUserProfile,logoutUser};
    return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default UserContext;