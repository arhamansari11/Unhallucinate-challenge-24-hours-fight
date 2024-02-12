import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Crop from "../pages/AiPart";
import Error from "../pages/Error";

const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crop" element={<Crop />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Routing;
