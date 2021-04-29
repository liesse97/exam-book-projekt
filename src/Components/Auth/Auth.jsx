import React, { useEffect, useState } from "react";
import firebase from "./../../firebase";
import {db, auth} from './../../firebase'


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    auth.onAuthStateChanged((user) => {
         setCurrentUser(user);
      setLoading(false);
      
    });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h1>Loading User...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
    };
