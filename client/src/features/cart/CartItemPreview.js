import Wrapper from "../../assets/wrappers/CartItemPreview";
import {
  removeItemFromCart,
  updateItemTotal,
  updateCartTotals,
  addToLocalCart,
  addItemToCart,
} from "./cartSlice";
import {
  addItemToUserCart,
  removeItemFromUserCart,
  updateUser,
} from "../users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartItemPreview({
  name,
  manufactuer,
  price,
  count,
  image,
  _id,
}) {
  const dispatch = useDispatch();
  const update = { name, manufactuer, price, count, image, _id };

  const total = (count * price).toFixed(2);
  const user = useSelector((state) => state.users.user);

  const handleDecrement = () => {
    if (user) {
      dispatch(removeItemFromUserCart({ userId: user._id, _id }));
      const newUser = JSON.parse(localStorage.getItem("user"));
      dispatch(updateUser({ userId: user._id, update: newUser }));
    }
    dispatch(removeItemFromCart(update));
    // if (count > 1) {
    //   dispatch(updateItemTotal({ _id }));
    //   const negPrice = Math.abs(price) * -1;
    //   dispatch(updateCartTotals({ price: negPrice }));
    // }
  };
  const handleIncremenet = () => {
    dispatch(addItemToCart(update));
    // dispatch(updateItemTotal({ _id }));
    // dispatch(updateCartTotals({ price }));
    // dispatch(addToLocalCart(update));
    if (user) {
      dispatch(
        addItemToUserCart({
          userId: user._id,
          ...update,
        })
      );
      const newUser = JSON.parse(localStorage.getItem("user"));
      dispatch(
        updateUser({
          userId: user._id,
          update: newUser,
        })
      );
    }
  };

  return (
    <Wrapper>
      <article>
        <div className="preview-container">
          <img src={image} className="preview-image" loading="lazy" />
          <div className="info-container">
            <p className="preview-p p-name">{name} </p>
            <p className="preview-p">{manufactuer}</p>
            <p className="preview-p p-price">${price}</p>
          </div>
        </div>
        <div className="preview-container total-container">
          <div>
            <p>Total</p>
            <p className="preview-p p-total p-price">${total}</p>
          </div>
          <div className="count-container">
            <button className="btn-count" onClick={handleDecrement}>
              {count === 1 ? "remove" : "-"}
            </button>
            <p className="preview-p count-p">{count}</p>
            <button className="btn-count" onClick={handleIncremenet}>
              +
            </button>
          </div>
        </div>
      </article>
    </Wrapper>
  );
}
