import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Hero";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import Contact from "../Pages/Contact";
const AppRoutes = () => {
  return (
    <div className="pt-16">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contact />} />

        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}

        {/* 404 Route */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
