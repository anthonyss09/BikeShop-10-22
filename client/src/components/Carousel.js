import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import basketBike from "../assets/images/basketBike.jpg";
import blackWhiteBike from "../assets/images/blackWhiteBike.jpg";
import lightGreenBike from "../assets/images/lightGreenBike.jpg";
import whiteBike from "../assets/images/whiteBike.jpg";
import CarouselItem from "./CarouselItem";

import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Carousel() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

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
      <CarouselItem
        image={basketBike}
        imageTitle="Basket bike"
        price="$999.99"
      />
      <CarouselItem
        image={lightGreenBike}
        imageTitle="Basket bike"
        price="$999.99"
      />
      <CarouselItem
        image={whiteBike}
        imageTitle="Basket bike"
        price="$999.99"
      />
      <CarouselItem
        image={blackWhiteBike}
        imageTitle="Basket bike"
        price="$999.99"
      />
    </MultiCarousel>
  );
}
