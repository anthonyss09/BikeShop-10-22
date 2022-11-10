import styled from "styled-components";

const Wrapper = styled.section`
  h2 {
    font-weight: 400;
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    // padding-bottom: 1rem;
    // padding: 0.6rem;
    // margin-bottom: 1rem;
    // background: rgb(244, 244, 244);
  }
  img {
    height: 150px;
    width: 150px;
  }
  section {
    text-align: center;
    background: rgb(238, 238, 238);
    margin: 1rem;
    // margin: 0 1rem;
    // padding-top: 1.4rem;
    // padding-top: 0.6rem;
  }
  .content {
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-family: "Roboto Mono", monospace;
    padding: 1rem;
    justify-content: center;
  }
`;
export default Wrapper;
