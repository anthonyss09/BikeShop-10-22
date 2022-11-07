import { useState } from "react";
import FormLogin from "./FormLogin";
import { loginUser } from "./usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //clearCart();
    dispatch(loginUser({ email, password }));
    navigate("/");
  };

  return (
    <FormLogin
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleLogin={handleLogin}
    />
  );
}
