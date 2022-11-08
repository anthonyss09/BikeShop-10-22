import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import SmallSidebar from "../components/SmallSideBar";
import NavStrip from "../components/NavStrip";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/users/usersSlice";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUserBtn, setToggleUserBtn] = useState(false);

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleUserBtn = () => {
    setToggleUserBtn(!toggleUserBtn);
  };
  const handleButtonClick = () => {
    setToggleUserBtn(!toggleUserBtn);
    dispatch(logoutUser());
  };

  const user = useSelector((state) => state.users.user);

  let content;
  if (!toggleMenu) {
    content = <NavStrip />;
  } else {
    content = <SmallSidebar onClick={handleToggleMenu} />;
  }

  let button;
  if (user) {
    button = (
      <button className="btn-user" onClick={handleButtonClick}>
        Logout
      </button>
    );
  } else {
    button = (
      <button className="btn-user" onClick={handleButtonClick}>
        Register/Login
      </button>
    );
  }

  return (
    <Wrapper>
      <nav className="nav-bar">
        <FaBars className="bars" size={25} onClick={handleToggleMenu} />
        <h3>The bike shop</h3>
        <div className="nav-icons-right">
          <FaUserCircle
            className="user-circle"
            size={25}
            onClick={handleToggleUserBtn}
          />
          <FaShoppingCart size={25} />
        </div>
        {toggleUserBtn && button}
      </nav>
      {content}
    </Wrapper>
  );
}
