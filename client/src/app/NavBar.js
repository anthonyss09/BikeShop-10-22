import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
import SmallSidebar from "../components/SmallSideBar";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  let content;
  if (!toggleMenu) {
    content = (
      <div className="nav-bar nav-links">
        <NavLink className="nav-link">Home</NavLink>
        <NavLink className="nav-link">Bikes</NavLink>
        <NavLink className="nav-link">About</NavLink>
      </div>
    );
  } else {
    content = <SmallSidebar />;
  }

  return (
    <Wrapper>
      <nav className="nav-bar">
        <FaBars className="bars" size={25} onClick={handleToggleMenu} />
        <h3>The bike shop</h3>
        <div className="nav-icons-right">
          <FaUserCircle size={25} />
          <FaShoppingCart size={25} />
        </div>
      </nav>
      {content}
    </Wrapper>
  );
}
