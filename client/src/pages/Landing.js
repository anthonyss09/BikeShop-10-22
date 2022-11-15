import Wrapper from "../assets/wrappers/Landing";
import landingBike from "../assets/images/landingBike.jpg";
import Carousel from "../components/Carousel";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { copyLocalToCart } from "../features/cart/cartSlice";

export default function Landing() {
  const user = useSelector((state) => state.users.user);

  // const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.userCart.length) {
      const localCart = JSON.parse(localStorage.getItem("localCart"));

      dispatch(copyLocalToCart(localCart));
    }
  }, [user]);
  return (
    <Wrapper>
      <section className="header">
        <img src={landingBike} className="header-image" />
        <h3 className="header-text">
          Rediscover
          <br /> the world on a bike
        </h3>
      </section>
      <section className="carousel-container">
        <Carousel />
      </section>
    </Wrapper>
  );
}
