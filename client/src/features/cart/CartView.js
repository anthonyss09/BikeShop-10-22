import Wrapper from "../../assets/wrappers/CartView";
import { selectAllCartItems } from "./cartSlice";
import { useSelector } from "react-redux";
import CartItemPreview from "./CartItemPreview";

export default function CartView() {
  const cartItems = useSelector(selectAllCartItems);
  const subTotal = useSelector((state) => state.cart.cartSubTotal);
  const tax = useSelector((state) => state.cart.tax);
  const total = useSelector((state) => state.cart.cartTotal);

  let content;
  let shipping = 0;

  const urlPre = "../../data/uploads/";

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
        <div className="summary-container">
          <p>SubTotal: ${subTotal.toFixed(2)}</p>
          <p className="p-shipping">Shipping: ${shipping}</p>
          <p className="p-tax">Tax: ${tax.toFixed(2)}</p>
          <p className="p-total">Order Total: ${total.toFixed(2)}</p>
          <button className="btn btn-checkout">Checkout</button>
        </div>
      </section>
    );
  } else {
    content = <section className="center-container">No items in cart.</section>;
  }

  return <Wrapper>{content}</Wrapper>;
}
