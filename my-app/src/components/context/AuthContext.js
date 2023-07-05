import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [current_user, setCurrentUser] = useState(null);

  // Login
  const login = (email, password) => {
    fetch("https://motoshop.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire(
            "Error",
            "Check your connection and try again",
            "error"
          );
        }
      });
  };

  // Signup
  const signup = (email, username, password) => {
    fetch("users/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire(
            "Error",
            "Check your connection and try again",
            "error"
          );
        }
      });
  };

  // Logout
  const logout = () => {
    fetch("/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire("Success", "Logout success", "success");
        nav("/login");
        setCurrentUser(null);
        setOnChange(!onChange);
      });
  };

  // Fetch current user
  useEffect(() => {
    fetch("/currentuser", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.currentUser) {
          setCurrentUser(response.currentUser);
        }
      });
  }, [onChange]);

  const contextData = {
    signup,
    logout,
    login,
    current_user,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
