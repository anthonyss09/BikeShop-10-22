import Wrapper from "../../assets/wrappers/Form";
import FormRow from "../../components/FormRow";
import { Link } from "react-router-dom";

export default function FormLogin({
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
}) {
  return (
    <Wrapper>
      <section className="form-container">
        <form className="form form-login" onSubmit={handleLogin}>
          <h2>Login</h2>
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
          <button className="btn btn-register">login</button>
          <p>
            Not yet a member?{" "}
            <Link to="/register" className="link">
              Go to register
            </Link>
          </p>
        </form>
      </section>
    </Wrapper>
  );
}
