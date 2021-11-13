import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import Register from "../containers/Register";

import Home from "../containers/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;
