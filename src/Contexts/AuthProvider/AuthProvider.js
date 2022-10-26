import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] =useState('');

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const userProfileUpdate = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])

    const authInfo = {
      user,
      signUp,
      logIn,
      logOut,
      userProfileUpdate,
      googleSignIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;