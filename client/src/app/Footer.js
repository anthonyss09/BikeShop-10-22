import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Footer";
export default function Footer() {
  return (
    <Wrapper>
      {" "}
      <footer className="footer">
        <Link to="/" className="link">
          Home
        </Link>
        <Link className="link">Bikes</Link>
        <Link className="link">About</Link>
        <Link className="link">Contact us</Link>
      </footer>
    </Wrapper>
  );
}
