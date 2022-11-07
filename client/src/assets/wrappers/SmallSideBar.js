import styled from "styled-components";

const Wrapper = styled.aside`
  .menu-container {
    height: 30vh;
    // width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    // background: rgb(198, 198, 198);
    background: rgb(238, 238, 238);
  }
  .link {
    text-decoration: none;
    color: rgb(40, 40, 40);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
export default Wrapper;
