import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ImageUpload from "./Pages/ImageUpload";
import Forum from "./Pages/Forum";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer.js";
import AboutUs from "./Pages/AboutUs";
import Search from "./Pages/Search";
import Customer from "./Pages/Customer";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const UserContext = createContext("");

function App() {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/imageupload" element={<ImageUpload />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/search" element={<Search />} />
            <Route path="/customer/:id" element={<Customer />} />
            <Route />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

export default App;
