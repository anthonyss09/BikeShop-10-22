import { useState } from "react";
import FormLogin from "./FormLogin";
import { loginUser } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  // const { showAlert, alertType, alertText, status } = users;

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
    dispatch(loginUser({ email, password }));
  };

  // useEffect(() => {
  //   if (status === "succeeded") {
  //     setTimeout(() => {
  //       navigate("/");
  //       // dispatch(clearAlert());
  //     }, 3000);
  //   } else if (status === "failed") {
  //     setTimeout(() => {
  //       // dispatch(clearAlert());
  //     }, 3000);
  //   }
  // }, [status]);

  return (
    <section>
      <FormLogin
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin}
      />
    </section>
  );
}
