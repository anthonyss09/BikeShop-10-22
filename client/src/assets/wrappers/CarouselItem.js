import styled from "styled-components";

const Wrapper = styled.aside`
  button {
    background: white;
    padding: 0.2rem 0.4rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    border: 1.5px solid rgb(80, 80, 80);
    border-radius: 0.25rem;
  }

  button:hover {
    box-shadow: 1px 1px 1px 0.5px rgb(180, 180, 180);
    cursor: pointer;
  }
  .carousel-image {
    width: 85%;
    height: 14vh;
  }

  .carousel-item {
    // min-width: 120px;
    max-width: 200px;
    border: 6px solid rgb(228, 228, 228);
    background: white;
    text-align: center;
    padding-top: 0.6rem;
    margin-left: 0.4rem;
    // border-radius: 0.25rem;
  }

  .carousel-item-title {
    margin: 0;
    margin-top: 0.2rem;
    font-weight: 500;
    color: rgb(60, 60, 60);
  }

  .carousel-item-price {
    margin: 0;
    margin-top: 0.2rem;
  }

  .carousel-item:hover {
    cursor: pointer;
  }

  .center-text {
    text-align: center;
  }
`;
export default Wrapper;
