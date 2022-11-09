import Wrapper from "../assets/wrappers/NavBar";
import { NavLink } from "react-router-dom";

export default function NavStrip() {
  return (
    <Wrapper>
      <div className="nav-bar nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/all-products" className="nav-link">
          Bikes
        </NavLink>
        <NavLink className="nav-link">About</NavLink>
      </div>
    </Wrapper>
  );
}
