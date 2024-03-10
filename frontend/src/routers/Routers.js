import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddCar from "../pages/AddCar";
import Administracion from "../pages/Administracion";
import AdminEditCar from "../pages/AdminEditCar";
import AdminShowCar from "../pages/AdminShowCar";
import AdminCreateCar from "../pages/AdminCreateCar";
import AdminViewCar from "../pages/AdminViewCar";
import AdminShowClient from "../pages/AdminShowClient";
import AdminShowAlquiler from "../pages/AdminShowAlquiler";
import AdminShowAgencia from "../pages/AdminShowAgencia";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path="/administracion" element={<Administracion />} />
      <Route path="/adminShowCar" element={<AdminShowCar />} />
      <Route path="/adminEditCar" element={<AdminEditCar />} />
      <Route path="/adminEditCar/:id" element={<AdminEditCar />} />
      <Route path="/adminCreateCar" element={<AdminCreateCar />} />
      <Route path="/adminViewCar/:id" element={<AdminViewCar />} />
      <Route path="/adminShowClient" element={<AdminShowClient />} />
      <Route path="/adminShowAlquiler" element={<AdminShowAlquiler />} />
      <Route path="/adminShowAgencia" element={<AdminShowAgencia />} />
    </Routes>
  );
};

export default Routers;
