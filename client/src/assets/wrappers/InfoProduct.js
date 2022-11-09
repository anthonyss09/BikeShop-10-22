import styled from "styled-components";

const Wrapper = styled.section`
  * {
    padding: 0 1rem;
    margin: 0;
    font-family: "Roboto Mono", monospace;
  }
  h2 {
    padding: 0 1rem;
    margin: 0.4rem;
  }
  h4 {
    text-transform: capitalize;
    padding: 0.4rem 1rem;
    margin: 0.8rem;
  }
  img {
    height: 50vh;
    width: 90vw;
    padding: 0;
  }
  .btn-add-cart {
    width: 90vw;
    height: 3rem;
    font-size: 1.2rem;
    background: rgb(60, 60, 60);
    color: white;
    border: none;
    margin: 0.2rem 1rem;
  }
  .btn-add-cart:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: ease all 1s;
  }
  .buying-info {
    padding: 0;
    margin: 1rem 0;
  }
  .product-info {
    padding: 0;
    margin: 1rem 0;
  }
  .product-price {
    font-size: 1.6rem;
    color: rgb(80, 80, 80);
    margin: 0.4rem;
  }
  @media (min-width: 700px) {
    img {
      width: 50vw;
      height: 70vh;
    }
    .btn-add-cart {
      width: 100%;
    }
    .buying-info {
      width: 100%;
      padding-right: 2rem;
      margin: 0;
    }
    .product-info {
      display: flex;
    }
  }
`;
export default Wrapper;
