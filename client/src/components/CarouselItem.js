import Wrapper from "../assets/wrappers/CarouselItem";

export default function CarouselItem({ image, imageTitle, price }) {
  return (
    <Wrapper>
      <aside className="carousel-item">
        <img className="carousel-image" src={image} />
        <div className="carousel-item-about">
          <h3 className="carousel-item-title">{imageTitle}</h3>
          <p className="carousel-item-price">{price}</p>
          <button>Add to cart</button>
        </div>
      </aside>
    </Wrapper>
  );
}
