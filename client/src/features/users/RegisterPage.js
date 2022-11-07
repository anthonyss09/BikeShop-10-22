import { useState } from "react";
import FormRegister from "./FormRegister";
import { registerUser } from "./usersSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //clearCart();
    dispatch(registerUser({ firstName, lastName, email, password }));
    navigate("/");
  };

  return (
    <FormRegister
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handlePasswordChange={handlePasswordChange}
      handleEmailChange={handleEmailChange}
      handleRegister={handleRegister}
    />
  );
}
