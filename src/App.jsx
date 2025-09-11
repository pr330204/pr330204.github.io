import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Chat from "./Chat";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </Router>
  );
}
