import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
  .btn-checkout {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    background: red;
    background: rgb(139, 205, 226);
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  .btn-checkout:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  .center-container {
    background: rgb(244, 244, 244);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    margin: 1rem;
  }
  .p-tax {
    border-bottom: 1px solid black;
    margin-right: 1rem;
    font-size: 0.8rem;
    padding-bottom: 0.6rem;
    margin-bottom: 0.6rem;
  }
  .p-total {
  }
  .p-shipping {
    font-size: 0.8rem;
  }
  .summary-container {
    font-family: "Roboto Mono", monospace;
    width: 80vw;
    line-height: 2rem;
    font-size: 1.2rem;
    background: white;
    padding: 1rem;
  }
  @media (min-width: 760px) {
    .btn-checkout {
      margin-bottom: 1rem;
      width: 94%;
    }
    .center-container {
      flex-direction: row;
      gap: 2rem;
      justify-content: center;
      align-items: flex-start;
      // height: 100%;
    }
    .summary-container {
      width: 40vw;
      align-self: flex-start;
    }
  }
`;
export default Wrapper;
