import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SmallSidebar from "../components/SmallSideBar";
import NavStrip from "../components/NavStrip";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/users/usersSlice";
import { clearCart, clearAlert } from "../features/cart/cartSlice";
import {
  toggleSideBar,
  toggleLogButton,
} from "../features/dropDowns/dropDownsSlice";
import Alert from "../components/Alert";

export default function NavBar() {
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [toggleUserBtn, setToggleUserBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const cart = useSelector((state) => state.cart);
  let { alertText, alertType, showAlert } = cart;
  const { showLogButton, showSideBar } = useSelector(
    (state) => state.dropDowns
  );

  const handleToggleMenu = () => {
    // setToggleMenu(!toggleMenu);
    dispatch(toggleSideBar(!showSideBar));
  };
  const handleToggleUserBtn = () => {
    // setToggleUserBtn(!toggleUserBtn);
    dispatch(toggleLogButton(!showLogButton));
  };
  const handleButtonClick = () => {
    // setToggleUserBtn(!toggleUserBtn);
    handleToggleUserBtn(!showLogButton);
    if (user) {
      dispatch(clearCart());
      dispatch(logoutUser());
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  const clearValues = () => {
    dispatch(clearAlert());
  };

  let content;
  if (!showSideBar) {
    content = (
      <NavStrip
        onClick={() => {
          clearValues();
          dispatch(toggleLogButton(false));
        }}
      />
    );
  } else {
    content = (
      <SmallSidebar
        onClick={() => {
          handleToggleMenu();
          clearValues();
          dispatch(toggleLogButton(false));
        }}
      />
    );
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
        <FaBars
          className="bars"
          size={25}
          onClick={() => {
            handleToggleMenu();
            dispatch(toggleLogButton(false));
          }}
        />
        <h3>The bike shop</h3>
        <div className="nav-icons-right">
          <FaUserCircle
            className="user-circle"
            size={25}
            onClick={handleToggleUserBtn}
          />
          <Link
            to="/cart"
            className="nav-link shopping-cart"
            onClick={() => {
              clearValues();
              dispatch(toggleSideBar(false));
              dispatch(toggleLogButton(false));
            }}
          >
            <FaShoppingCart size={25} />
          </Link>
          <div className="cart-count">{cart.cartCount}</div>
        </div>
        {showLogButton && button}
      </nav>
      {content}
      {showAlert && <Alert alertType={alertType} alertText={alertText} />}
    </Wrapper>
  );
}
