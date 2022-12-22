import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
  const [isAuth, toggleIsAuth] = useState({isAuth: false, user: null});
  const navigate = useNavigate();
  
  function logIn(user) {
    // e.preventDefault();
    toggleIsAuth({isAuth: true, user: user});
    console.log("Gebruiker is ingelogd!");
    navigate('/profile');
  }

  function logOut(e) {
    e.preventDefault();
    toggleIsAuth({isAuth: false, user: ''});
    console.log("Gebruiker is uitgelogd!");
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{
      isAuth: isAuth.isAuth,
      user: isAuth.user,
      logIn: logIn,
      logOut: logOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;