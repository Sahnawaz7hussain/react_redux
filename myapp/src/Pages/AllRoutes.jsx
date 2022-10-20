import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import EditMusic from "./EditMusic";
import SingleMusic from "./SingleMusic";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/music/:id" element={<SingleMusic />} />
      <Route path="/music/:id/edit" element={<EditMusic />} />
      <Route path="*" element={<h2>LoginPage</h2>} />
    </Routes>
  );
};

export default AllRoutes;
