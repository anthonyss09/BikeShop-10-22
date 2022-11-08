import Wrapper from "../assets/wrappers/SmallSideBar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SmallSidebar({ onClick }) {
  const user = useSelector((state) => state.users.user);
  const isAdmin = user ? user.admin : false;

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
        {isAdmin && (
          <NavLink to="/add-product" className="link" onClick={onClick}>
            Add Product
          </NavLink>
        )}
      </aside>
    </Wrapper>
  );
}
