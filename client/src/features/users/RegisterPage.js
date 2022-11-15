import { useState, useEffect } from "react";
import FormRegister from "./FormRegister";
import { registerUser, clearAlert } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  const { showAlert, alertType, alertText, status } = users;
  console.log(showAlert);
  const existingCart = useSelector((state) =>
    Object.values(state.cart.entities)
  );

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
    dispatch(
      registerUser({
        firstName,
        lastName,
        email,
        password,
        userCart: existingCart ? existingCart : [],
      })
    );
  };

  useEffect(() => {
    if (status === "succeeded") {
      setTimeout(() => {
        navigate("/");
        dispatch(clearAlert());
      }, 3000);
    } else if (status === "failed") {
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }
  }, [status]);

  return (
    <section>
      {showAlert && <Alert alertType={alertType} alertText={alertText} />}
      <FormRegister
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handlePasswordChange={handlePasswordChange}
        handleEmailChange={handleEmailChange}
        handleRegister={handleRegister}
      />
    </section>
  );
}
