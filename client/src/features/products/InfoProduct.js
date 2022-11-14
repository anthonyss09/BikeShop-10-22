import Wrapper from "../../assets/wrappers/InfoProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  updateItemTotal,
  updateCartTotals,
  addToLocalCart,
} from "../cart/cartSlice";
import { updateUser, addItemToUserCart } from "../users/usersSlice";

export default function InfoProduct({
  image,
  imageName,
  productName,
  manufactuer,
  price,
  name,
  _id,
}) {
  const dispatch = useDispatch();
  const update = { image: imageName, manufactuer, price, name, count: 1, _id };
  // const user = JSON.parse(localStorage.getItem("user")) || null;
  const user = useSelector((state) => state.users.user) || null;

  const handleAddToCart = (e) => {
    e.preventDefault();
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
    dispatch(addItemToCart(update));
    // dispatch(updateItemTotal({ _id, price }));
    // dispatch(updateCartTotals({ price }));
    // dispatch(addToLocalCart(update));
  };
  return (
    <Wrapper>
      <section>
        <h4>{manufactuer}</h4>
        <div className="product-info">
          <div className="image-container">
            <img src={image}></img>
          </div>
          <div className="buying-info">
            <h2>{productName}</h2>
            <p className="product-price">${price}</p>
            <button className="btn-add-cart" onClick={handleAddToCart}>
              Add to cart
            </button>
            <h4>Specifications</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nam
              quae inventore voluptatem hic delectus qui numquam temporibus
              dicta totam. Unde, error, aut quos illo quaerat iusto recusandae
              consectetur repellendus eligendi odio soluta reiciendis molestiae
              minus earum, officiis nulla quis voluptatibus debitis enim ipsam
              dolorem laudantium laborum. Aliquid, sapiente eius!
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
