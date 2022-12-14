import styled from "styled-components";

const Wrapper = styled.main`
  .header {
    display: grid;
    text-align: center;
    padding: 1rem;
  }
  .header-text {
    grid-row: 1/2;
    grid-column: 1/2;
    font-size: 2.4em;
    color: white;
    font-weight: normal;
    z-index: 2;
    justify-self: center;
    margin: 3rem 1rem 0 1rem;
  }
  .header-image {
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    max-height: 45vh;
    justify-self: center;
    border-radius: 0.25rem;
  }
  @media (min-width: 700px) {
    .header {
      display: flex;
    }
    .header-image {
      width: 55vw;
    }
    .header-text {
      margin: 0;
      margin-left: 1rem;
      border-radius: 0.25rem;
      color: black;
      width: 100%;
      // background: white;
      display: grid;
      place-items: center;
    }
  }
`;

export default Wrapper;
