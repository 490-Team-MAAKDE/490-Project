import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DressUp from "./Pages/DressUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dressup" element={<DressUp />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
