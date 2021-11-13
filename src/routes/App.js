import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../containers/Login";

import Home from "../containers/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Registe />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
