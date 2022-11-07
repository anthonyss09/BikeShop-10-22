import Wrapper from "../assets/wrappers/Landing";
import landingBike from "../assets/images/landingBike.jpg";
import Carousel from "../components/Carousel";

export default function Landing() {
  return (
    <Wrapper>
      <section className="header">
        <img src={landingBike} className="header-image" />
        <h3 className="header-text">
          Rediscover
          <br /> the world on a bike
        </h3>
      </section>
      <section>
        <Carousel />
      </section>
    </Wrapper>
  );
}
