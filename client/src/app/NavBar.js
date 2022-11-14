import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SmallSidebar from "../components/SmallSideBar";
import NavStrip from "../components/NavStrip";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/users/usersSlice";
import { clearCart } from "../features/cart/cartSlice";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUserBtn, setToggleUserBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const cart = useSelector((state) => state.cart);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleUserBtn = () => {
    setToggleUserBtn(!toggleUserBtn);
  };
  const handleButtonClick = () => {
    setToggleUserBtn(!toggleUserBtn);
    if (user) {
      dispatch(clearCart());
      dispatch(logoutUser());
      navigate("/");
    } else {
      navigate("/register");
    }
  };

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
          <Link to="/cart" className="nav-link shopping-cart">
            <FaShoppingCart size={25} />
          </Link>
          <div className="cart-count">{cart.cartCount}</div>
        </div>
        {toggleUserBtn && button}
      </nav>
      {content}
    </Wrapper>
  );
}
