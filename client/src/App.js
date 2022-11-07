import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./app/NavBar";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Footer from "./app/Footer";
import LoginForm from "./features/LoginForm";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
