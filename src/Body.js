import React from "react";
import { Routes, Route } from "react-router-dom";
import Buttons from "./components/Buttons";

const Body = () => {
  return (
    <Routes>
      <Route path="/buttons" element={<Buttons />} />
    </Routes>
  );
};

export default Body;
