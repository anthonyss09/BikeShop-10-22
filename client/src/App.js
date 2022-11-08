import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./app/NavBar";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Footer from "./app/Footer";
import RegisterPage from "./features/users/RegisterPage";
import LoginPage from "./features/users/LoginPage";
import AddProduct from "./features/products/AddProduct";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
