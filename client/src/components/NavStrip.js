import Wrapper from "../assets/wrappers/NavBar";
import { NavLink } from "react-router-dom";

export default function NavStrip({ onClick }) {
  return (
    <Wrapper>
      <div className="nav-bar nav-links">
        <NavLink to="/" className="nav-link" onClick={onClick}>
          Home
        </NavLink>
        <NavLink to="/all-products" className="nav-link" onClick={onClick}>
          Bikes
        </NavLink>
        <NavLink className="nav-link" onClick={onClick}>
          About
        </NavLink>
      </div>
    </Wrapper>
  );
}
