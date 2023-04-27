import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ImageUpload from "./Pages/ImageUpload";
import Forum from "./Pages/Forum";
import Dashboard from "./Pages/Dashboard";
import SearchPage from "./Pages/SearchPage";

import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/imageupload" element={<ImageUpload />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
