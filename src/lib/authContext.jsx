/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth/web-extension";
import React, { useContext } from "react";
import { auth } from "./firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const LoginUser = (email, password) => {
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
      if (!user) {
        console.log("Error in singing in");
      }
    } catch (error) {
      console.log("Error in:", error.message);
    }
  };

  const createUserAccount = (email, password, confirmPassword) => {
    if (password.length > 7) {
      console.log("Passowrd must be longer than 7 characters");

      if (password === confirmPassword) {
        try {
          const register = createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          if (register) {
            console.log("Create Account succcessful");
          }
          console.log("Create Account failed");
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Password does not match");
      }
    }
  };

  const logoutUser = () => {
    try {
      signOut();
    } catch (error) {
      console.log("Error in: ", error);
    }
  };

  const value = {
    LoginUser,
    createUserAccount,
    logoutUser,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>{" "}
    </>
  );
};
