import styled from "styled-components";

const Wrapper = styled.nav`
  .bars:hover {
    cursor: pointer;
  }
  .btn-user {
    position: absolute;
    top: 3.2rem;
    right: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(70, 70, 70);
    padding: 0.2rem 0.6rem;
    background: white;
    // border-radius: 0.25rem;
  }
  .btn-user:hover {
    cursor: pointer;
  }
  .cart-count {
    height: 1rem;
    width: 1rem;
    font-size: 0.6rem;
    display: grid;
    place-items: center;
    background: rgb(139, 205, 226);
    border-radius: 50%;
    position: absolute;
    right: 0.7rem;
    top: 0.6rem;
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
    background: rgb(250, 250, 250);
    // background: rgb(193, 215, 222);
  }
  .user-circle:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
