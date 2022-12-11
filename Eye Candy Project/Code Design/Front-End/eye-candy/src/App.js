import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DressUp from "./Pages/DressUp";

import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dressup" element={<DressUp />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
