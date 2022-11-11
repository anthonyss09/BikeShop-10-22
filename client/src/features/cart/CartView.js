import Wrapper from "../../assets/wrappers/CartView";
import { selectAllCartItems, createCheckoutSession } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import CartItemPreview from "./CartItemPreview";
import { useEffect, useState } from "react";

export default function CartView() {
  const cartItems = useSelector(selectAllCartItems);
  const subTotal = useSelector((state) => state.cart.cartSubTotal);
  const tax = useSelector((state) => state.cart.tax);
  const total = useSelector((state) => state.cart.cartTotal);

  const dispatch = useDispatch();

  let content;
  let shipping = 0;

  const urlPre = "../../data/uploads/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartTotal = total.toFixed(2);
    dispatch(createCheckoutSession({ cartTotal }));
  };

  if (cartItems.length > 0) {
    content = (
      <section className="center-container">
        <div className="items-container">
          {cartItems.map((item, index) => {
            return (
              <CartItemPreview
                key={index}
                image={urlPre + item.image}
                name={item.name}
                manufactuer={item.manufactuer}
                price={item.price}
                count={item.count}
                _id={item._id}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit} className="summary-container">
          <p>SubTotal: ${subTotal.toFixed(2)}</p>
          <p className="p-shipping">Shipping: ${shipping}</p>
          <p className="p-tax">Tax: ${tax.toFixed(2)}</p>
          <p className="p-total">Order Total: ${total.toFixed(2)}</p>
          <button className="btn btn-checkout" type="submit">
            Checkout
          </button>
        </form>
      </section>
    );
  } else {
    content = <section className="center-container">No items in cart.</section>;
  }

  const [message, setMessage] = useState("");

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return <Wrapper>{message ? <Message message={message} /> : content}</Wrapper>;
}
