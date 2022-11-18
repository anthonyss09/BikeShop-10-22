import Wrapper from "../../assets/wrappers/InfoProduct";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { updateUser, addItemToUserCart } from "../users/usersSlice";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";

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
  const user = useSelector((state) => state.users.user) || null;
  const { showAlert } = useSelector((state) => state.alerts);

  const handleAddToCart = async (e) => {
    if (user) {
      const newUser = JSON.parse(localStorage.getItem("user"));
      const res = dispatch(updateUser({ userId: user._id, update: newUser }));
      res.then(() => {
        dispatch(addItemToCart(update));
        dispatch(
          addItemToUserCart({
            userId: user._id,
            ...update,
          })
        );
      });
    } else if (!user) {
      dispatch(addItemToCart(update));
      dispatch(
        displayAlert({
          alertType: "success",
          alertText: "Item added to cart.",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }
  };
  return (
    <Wrapper>
      <section>
        <h4>{manufactuer}</h4>
        <div className="product-info">
          <div className="image-container">
            <img src={image} alt="bike"></img>
          </div>
          <div className="buying-info">
            <h2>{productName}</h2>
            <p className="product-price">${price}</p>
            <button
              className="btn-add-cart"
              onClick={handleAddToCart}
              disabled={showAlert}
            >
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
