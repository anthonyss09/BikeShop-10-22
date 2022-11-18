import Wrapper from "../../assets/wrappers/ProductPreview";
import { Link } from "react-router-dom";
import { addItemToCart } from "../cart/cartSlice";
import { addItemToUserCart, updateUser } from "../users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";

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
  // const { showAlert } = useSelector((state) => state.users);
  const { showAlert } = useSelector((state) => state.alerts);

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

  const handleAddToCart = async (e) => {
    if (user) {
      dispatch(
        addItemToUserCart({
          userId: user._id,
          ...update,
        })
      );
      const newUser = JSON.parse(localStorage.getItem("user"));
      dispatch(updateUser({ userId: user._id, update: newUser }));
      // const res = dispatch(
      //   updateUser({
      //     userId: user._id,
      //     update: newUser,
      //   })
      // );
      // res.then((val) => {
      //   if (val.meta.requestStatus === "fulfilled") {
      //     dispatch(addItemToCart(update));
      //   }
      //   setTimeout(() => {
      //     // dispatch(clearAlert());
      //   }, 3000);
      // });
    } else if (!user) {
      dispatch(addItemToCart(update));
      dispatch(
        displayAlert({ alertType: "success", alertText: "Item added to cart." })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <article>
        <div className="preview-container">
          <Link
            to={"/products/" + _id}
            className="product-link"
            onClick={() => {
              dispatch(clearAlert());
            }}
          >
            <img className="preview-image" src={image} alt={altText} />
            <p className="producer">{manufactuer}</p>
            <p className="name">{name}</p>
            <p className="price">${price}</p>
          </Link>
          <button
            className="btn-add-to-cart"
            onClick={handleAddToCart}
            disabled={showAlert}
          >
            Add to cart
          </button>
        </div>
      </article>
    </Wrapper>
  );
}
