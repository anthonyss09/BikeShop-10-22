import Wrapper from "../../assets/wrappers/Form";
import FormRow from "../../components/FormRow";
import { Link } from "react-router-dom";

export default function FormRegister({
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleRegister,
}) {
  return (
    <Wrapper>
      <section className="form-container">
        <form className="form form-register" onSubmit={handleRegister}>
          <h2>Register</h2>
          <FormRow
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleFirstNameChange}
          />
          <FormRow
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleLastNameChange}
          />
          <FormRow
            id="email"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <FormRow
            id="password"
            name="password"
            type="text"
            onChange={handlePasswordChange}
          />
          <button className="btn btn-register">Register</button>
          <p>
            Already a member?{" "}
            <Link to="/login" className="link">
              Go to login
            </Link>
          </p>
        </form>
      </section>
    </Wrapper>
  );
}
