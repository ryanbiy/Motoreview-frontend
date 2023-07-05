import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddBike from "./pages/AddBike";
import Layout from "./components/Layout";
import { MotorcyclesProvider } from "./components/context/MotorcyclesContext";
import Reviews from "./pages/Reviews";
import SingleBike from "./pages/SingleBike";

function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <AuthProvider>
        <MotorcyclesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
              <Route path="addbike" element={<AddBike />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="reviews/:id" element={<SingleBike />} />
            </Route>
            <Route path="addbike" element={<AddBike />} />
          </Routes>
        </MotorcyclesProvider>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;