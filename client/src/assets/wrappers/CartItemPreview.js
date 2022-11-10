import styled from "styled-components";

const Wrapper = styled.article`
  font-family: "Roboto Mono", monospace;
  width: 100%;
  .btn-count {
    background: white;
    min-width: content;
    border: 1px solid black;
    border: none;
    border-radius: 0.1rem;
    color: rgb(80, 80, 80);
  }
  .btn-count:hover {
    cursor: pointer;
  }
  .count-container {
    width: 90px;
    height: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
  }
  .count-p {
    text-align: center;
  }
  .info-container {
    text-align: center;
    font-size: 0.8rem;
    line-height: 1rem;
  }
  .p-name {
    font-weight: 500;
  }
  .p-price {
    color: rgb(80, 80, 80);
  }
  .preview-container {
    width: 80vw;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    padding-top: 1.6rem;
    background: white;
  }
  .preview-image {
    height: 80px;
    width: 80px;
  }
  .preview-p {
    margin: 0.2rem;
  }
  .total-container {
    padding-top: 0;
    border-bottom: 1px solid rgb(244, 244, 244);
  }
  @media (min-width: 760px) {
    .preview-container {
      width: 40vw;
    }
  }
`;
export default Wrapper;
