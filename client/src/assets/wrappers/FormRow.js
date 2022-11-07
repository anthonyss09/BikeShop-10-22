import styled from "styled-components";

const Wrapper = styled.div`
  input {
    width: 100vw;
    max-width: 300px;
    border: 1px solid rgb(180, 180, 180);
    padding: 0.4rem;
  }
  label {
    color: rgb(40, 40, 40);
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
`;
export default Wrapper;
