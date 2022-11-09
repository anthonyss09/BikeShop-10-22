import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../api/apiSlice";
import InfoProduct from "./InfoProduct";

export default function SingleProduct() {
  const { productId } = useParams();
  console.log(productId);
  const { data: product, isLoading, isSuccess } = useGetProductQuery(productId);
  console.log(product);

  let content;
  const urlPre = "../../data/uploads/";

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isSuccess) {
    content = (
      <InfoProduct
        image={urlPre + product.image}
        manufactuer={product.manufactuer}
        price={product.price}
        productName={product.name}
        _id={product._id}
        name={product.name}
        count={product.count}
      />
    );
  }
  return <section>{content}</section>;
}
