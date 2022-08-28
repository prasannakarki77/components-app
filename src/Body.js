import React from "react";
import { Routes, Route } from "react-router-dom";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";

const Body = () => {
  return (
    <Routes>
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/inputs" element={<Inputs />} />
    </Routes>
  );
};

export default Body;
