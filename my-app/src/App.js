import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RobotsList from "./components/RobotsList";
import RobotDetail from "./components/RobotDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/robots" element={<RobotsList />} />
        <Route path="/robots/:id" element={<RobotDetail />} />
      </Routes>
    </Router>
  );
}

export default App;