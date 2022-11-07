import Wrapper from "../assets/wrappers/SmallSideBar";
import { NavLink } from "react-router-dom";

export default function SmallSidebar() {
  return (
    <Wrapper>
      <aside className="menu-container">
        <NavLink className="link">Home</NavLink>
        <NavLink className="link">Bikes</NavLink>
        <NavLink className="link">About</NavLink>
        <NavLink className="link">Login</NavLink>
      </aside>
    </Wrapper>
  );
}
