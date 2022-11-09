import { useGetProductsQuery } from "../api/apiSlice";
import Wrapper from "../../assets/wrappers/AllProducts";
import ProductPreview from "./ProductPreview";

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

  let content;
  const urlPre = "../../data/uploads/";

  if (isLoading) {
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
      <section>
        <h2>All Bikes</h2>
        {content}
      </section>
    </Wrapper>
  );
}
