
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./comp/Home"
import Login from "./comp/login"
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
