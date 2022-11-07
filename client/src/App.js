import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./app/NavBar";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Footer from "./app/Footer";
import RegisterPage from "./features/users/RegisterPage";
import LoginPage from "./features/users/LoginPage";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
