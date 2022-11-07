import styled from "styled-components";

const Wrapper = styled.section`
  // font-family: "Roboto Mono", monospace;

  h2 {
    font-weight: normal;
    text-align: center;
  }
  p {
    margin: 1rem;
    text-align: center;
    letter-spacing: -0.04rem;
  }
  .link {
    text-decoration: none;
    color: rgb(80, 80, 80);
    color: darkBlue;
  }
  .link:hover {
    cursor: pointer;
  }
  .btn {
    width: 100%;
    height: 2.5rem;
    background: red;
    background: rgb(139, 205, 226);
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 600;
  }
  .btn:hover {
    cursor: pointer;
  }
  .btn-register {
  }
  .form {
    margin: 2rem 0;
    padding: 2rem;
    max-width: 400px;
    background: white;
    border: 2.5px solid rgb(100, 100, 100);
    border-radius: 0.25rem;
  }
  .form-container {
    display: grid;
    place-items: center;
    border-radius: 0.2rem;
  }
  .form-login {
    margin: 3.4rem 0;
  }
`;
export default Wrapper;
