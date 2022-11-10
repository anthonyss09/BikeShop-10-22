import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./app/NavBar";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Footer from "./app/Footer";
import RegisterPage from "./features/users/RegisterPage";
import LoginPage from "./features/users/LoginPage";
import AddProduct from "./features/products/AddProduct";
import AllProducts from "./features/products/AllProducts";
import SingleProduct from "./features/products/SingleProduct";
import CartView from "./features/cart/CartView";

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
          <Route exact path="/all-products" element={<AllProducts />} />
          <Route
            exact
            path="/products/:productId"
            element={<SingleProduct />}
          />
          <Route exact path="/cart" element={<CartView />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
