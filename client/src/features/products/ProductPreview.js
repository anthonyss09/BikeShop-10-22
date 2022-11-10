import Wrapper from "../../assets/wrappers/ProductPreview";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  updateItemTotal,
  updateCartTotals,
  addToLocalCart,
} from "../cart/cartSlice";
import { addItemToUserCart, updateUser } from "../users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductPreview({
  imageName,
  image,
  altText,
  manufactuer,
  price,
  _id,
  name,
}) {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  // const user = useSelector((state) => state.user.user) || null;

  const dispatch = useDispatch();
  const count = 1;
  const update = {
    _id,
    manufactuer,
    name,
    price,
    image: imageName,
    count,
  };

  const handleAddToCart = (e) => {
    if (user) {
      dispatch(
        addItemToUserCart({
          userId: user._id,
          ...update,
        })
      );
      const newUser = JSON.parse(localStorage.getItem("user"));
      // console.log(newUser);
      dispatch(
        updateUser({
          userId: user._id,
          update: newUser,
        })
      );
    }
    dispatch(addItemToCart(update));
    dispatch(updateItemTotal({ _id, price }));
    dispatch(updateCartTotals({ price }));
    dispatch(addToLocalCart(update));
  };
  return (
    <Wrapper>
      <article>
        <div className="preview-container">
          <Link to={"/products/" + _id} className="product-link">
            <img className="preview-image" src={image} alt={altText} />
            <p className="producer">{manufactuer}</p>
            <p className="name">{name}</p>
            <p className="price">${price}</p>
          </Link>
          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </article>
    </Wrapper>
  );
}
