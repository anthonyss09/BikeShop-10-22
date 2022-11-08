import Wrapper from "../../assets/wrappers/Form";
import FormRow from "../../components/FormRow";
import { useAddNewProductMutation } from "../api/apiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function AddProduct() {
  const [addNewProduct, { isLoading }] = useAddNewProductMutation();
  const [name, setName] = useState("");
  const [manufactuer, setManufactuer] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  // const user = useSelector((state) => state.users.user);
  // const isAdmin = user ? user.admin : false;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleManufactuerChange = (e) => {
    setManufactuer(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("manufactuer", manufactuer);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("imageName", image.name);
    formData.append("image", image);
    try {
      await addNewProduct(formData);
      setName("");
      setManufactuer("");
      setPrice("");
      setType("");
      setImage("");
    } catch (error) {
      console.error("Failed to save product. ", error);
    }
  };
  return (
    <Wrapper>
      <section className="form-container">
        <form className="form form-add-product" onSubmit={handleSubmit}>
          <h2>Add Product</h2>
          <FormRow
            id="manufactuer"
            name="manufactuer"
            type="text"
            value={manufactuer}
            onChange={handleManufactuerChange}
          />
          <FormRow
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <FormRow
            id="price"
            name="price"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
          <FormRow
            id="type"
            name="type"
            type="text"
            value={type}
            onChange={handleTypeChange}
          />
          <FormRow
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
          />
          <button type="submit" className="btn">
            Add Product
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
