import styled from "styled-components";

const Wrapper = styled.article`
  * {
    font-family: "Roboto Mono", monospace;
  }
  p {
    margin: 0.1rem 0;
  }
  .product-link {
    text-decoration: none;
    color: inherit;
  }
  .preview-container {
    width: 22vw;
    min-width: 120px;
    max-width: 160px;
    text-align: center;
    margin: 0.1rem;
    background: white;
    // border: 2px solid rgb(244, 244, 244);
    // border: 2px solid rgb(208, 208, 208);
    padding: 1rem;
  }
  .preview-image {
    width: 23vw;
    height: 18vh;
    width: 100%;
  }
  .producer {
    color: rgb(80, 80, 80);
    font-size: 1rem;
    font-weight: 500;
  }
  .price {
    color: darkBlue;
    color: rgb(130, 130, 130);
    font-weight: 600;
    font-style: italic;
    letter-spacing: -0.04rem;
  }
  .btn-add-to-cart {
    width: 100%;
    height: 2rem;
    border: none;
    background: rgb(139, 205, 226);
    color: white;
    border: none;
    font-size: 0.9rem;
    // font-size: 1rem;
    font-weight: 600;
    background: white;
    color: rgb(80, 80, 80);
    // background: rgb(60, 60, 60);
    // background: rgb(75, 75, 75);
    background: rgb(139, 205, 226);
    color: white;
    // border: 2px solid rgb(200, 200, 200);
    // border: 2px solid rgb(128, 128, 128);
  }
  .btn-add-to-cart:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: ease all 1s;
  }
`;
export default Wrapper;
