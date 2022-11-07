import styled from "styled-components";

const Wrapper = styled.nav`
  .bars:hover {
    cursor: pointer;
  }
  .hidden {
    display: hidden;
  }
  .nav-bar {
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-bottom: 0.6rem;
  }
  .nav-icons-right {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    color: black;
    text-decoration: none;
    font-weight: 500;
    color: rgb(40, 40, 40);
  }
  .nav-links {
    padding: 0.4rem 1rem;
    background: rgb(238, 238, 238);
    // background: rgb(193, 215, 222);
  }
`;

export default Wrapper;
