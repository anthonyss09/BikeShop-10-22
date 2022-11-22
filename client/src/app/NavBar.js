import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const cart = useSelector((state) => state.cart);
  let { alertText, alertType, showAlert } = useSelector(
    (state) => state.alerts
  );
  const { showLogButton, showSideBar } = useSelector(
    (state) => state.dropDowns
  );

  const handleToggleMenu = (bool) => {
    dispatch(toggleSideBar(bool));
  };
  const handleToggleUserBtn = (bool) => {
    dispatch(toggleLogButton(bool));
  };
  const clearValues = () => {
    dispatch(clearAlert());
  };
  const handleButtonClick = () => {
    handleToggleUserBtn(false);
    if (user) {
      dispatch(clearCart());
      dispatch(logoutUser());
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  let content;
  if (!showSideBar) {
    content = (
      <NavStrip
        onClick={() => {
          clearValues();
          handleToggleUserBtn(false);
        }}
      />
    );
  } else {
    content = (
      <SmallSidebar
        onClick={() => {
          handleToggleMenu(false);
          handleToggleUserBtn(false);
          clearValues();
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
            handleToggleMenu(!showSideBar);
            handleToggleUserBtn(false);
          }}
        />
        <h3>The Bike Shop</h3>
        <div className="nav-icons-right">
          <FaUserCircle
            className="user-circle"
            size={25}
            onClick={() => {
              handleToggleUserBtn(!showLogButton);
            }}
          />
          <Link
            to="/cart"
            className="nav-link shopping-cart"
            onClick={() => {
              clearValues();
              handleToggleMenu(false);
              handleToggleUserBtn(false);
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
