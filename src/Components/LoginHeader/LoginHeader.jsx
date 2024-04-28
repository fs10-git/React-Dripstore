import "./LoginHeader.css";
import Vector from "/images/Vector.png";
import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <>
      <header id="loginHeader">
        <div id="loginLogo">
          <img src={Vector} />
          <Link className="link" to="/home">
            Digital College
          </Link>
        </div>
      </header>
    </>
  );
}
