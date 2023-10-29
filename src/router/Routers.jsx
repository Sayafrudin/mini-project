import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import ThankYou from "../pages/ThankYou";
import About from "../pages/About";
import ChatAI from "../pages/ChatAI";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/tours" element={<Tours></Tours>}></Route>
      <Route path="/tours/:id" element={<TourDetails></TourDetails>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/thank-you" element={<ThankYou></ThankYou>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/chat" element={<ChatAI></ChatAI>}></Route>
    </Routes>
  );
}
