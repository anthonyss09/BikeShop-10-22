import Wrapper from "../assets/wrappers/SmallSideBar";
import { NavLink } from "react-router-dom";

export default function SmallSidebar({ onClick }) {
  return (
    <Wrapper>
      <aside className="menu-container">
        <NavLink to="/" className="link" onClick={onClick}>
          Home
        </NavLink>
        <NavLink className="link" onClick={onClick}>
          Bikes
        </NavLink>
        <NavLink className="link" onClick={onClick}>
          About
        </NavLink>
        <NavLink to="/register" className="link" onClick={onClick}>
          Register/Login
        </NavLink>
      </aside>
    </Wrapper>
  );
}
