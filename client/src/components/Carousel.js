// import "react-alice-carousel/lib/alice-carousel.css";
import basketBike from "../assets/images/basketBike.jpg";
import blackWhiteBike from "../assets/images/blackWhiteBike.jpg";
import lightGreenBike from "../assets/images/lightGreenBike.jpg";
import whiteBike from "../assets/images/whiteBike.jpg";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductPreview from "../features/products/ProductPreview";

export default function Carousel() {
  return (
    <MultiCarousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 800,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 800,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <ProductPreview
        image={basketBike}
        imageName="basketBike.jpg"
        _id="636bd43b1db3de174ba1e646"
        manufactuer="Mongoose"
        name="Fast Boi"
        price={999.99}
        altText="mongoose bike"
      />
      <ProductPreview
        image={lightGreenBike}
        imageName="lightGreenBike.jpg"
        _id="636bd4651db3de174ba1e649"
        manufactuer="Specialized"
        name="Cool Wheels"
        price={1299.99}
        altText="specialized bike"
      />
      <ProductPreview
        image={whiteBike}
        imageName="whiteBike.jpg"
        _id="636bd48f5f01bf6dfb4587c2"
        manufactuer="Schwinn"
        name="Lightning"
        price={1399.98}
        altText="schwinn bike"
      />
      <ProductPreview
        image={blackWhiteBike}
        imageName="blackWhiteBike.jpg"
        _id="636bd4b05f01bf6dfb4587c5"
        manufactuer="Tonka"
        name="Whirlwind"
        price={899.95}
        altText="tonka bike"
      />
    </MultiCarousel>
  );
}
