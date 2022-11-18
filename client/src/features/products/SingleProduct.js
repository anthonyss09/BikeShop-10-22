import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../api/apiSlice";
import InfoProduct from "./InfoProduct";

export default function SingleProduct() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetProductQuery(productId);

  let content;
  const urlPre = "../../data/uploads/";

  if (isError) {
    content = <div>error, reloading...</div>;
    refetch();
  } else if (isLoading) {
    content = <div>loading...</div>;
  } else if (isSuccess) {
    content = (
      <InfoProduct
        image={urlPre + product.image}
        imageName={product.image}
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
