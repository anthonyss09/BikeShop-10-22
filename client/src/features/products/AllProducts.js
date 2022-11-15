import { useGetProductsQuery } from "../api/apiSlice";
import Wrapper from "../../assets/wrappers/AllProducts";
import ProductPreview from "./ProductPreview";
import Alert from "../../components/Alert";

export default function AllProducts() {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
    refetch,
  } = useGetProductsQuery();
  console.log(isError);
  console.log(error);

  let content;
  const urlPre = "../../data/uploads/";

  if (isError) {
    content = <Alert aletType="error" alertText={error.error} />;
    refetch();
  } else if (isLoading) {
    content = <div>content loading...</div>;
  } else if (isSuccess && products.length === 0) {
    content = <div>No products in inventory.</div>;
  } else if (isSuccess) {
    const renderedProducts = products.map((product, index) => {
      return (
        <ProductPreview
          key={index}
          image={urlPre + product.image}
          name={product.name}
          price={product.price}
          manufactuer={product.manufactuer}
          _id={product._id}
          imageName={product.image}
        />
      );
    });
    content = <div className="content">{renderedProducts}</div>;
  } else if (isError) {
    content = <div>{error.toString}</div>;
  }

  return (
    <Wrapper>
      <h2>All Bikes</h2>
      <section>{content}</section>
    </Wrapper>
  );
}
