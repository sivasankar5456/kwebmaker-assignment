import Image from "next/image";
import Button from "./Button";

// components/Banner.js
export default function Banner() {
  return (
    <section className="d-flex align-items-center text-center text-white banner-section">
           <div className="container mt-3 d-flex flex-column align-items-center banner-all-text-continer ">
        <p className="text-uppercase mb-2 banner-subtitle white-text">
          SSA HUNTER VALLEY
        </p>
        <h1 className="display-5 mb-0 white-text banner-title">
          GROW YOUR GAME WITH THE <br />
          <span className="fw-bold text-underline white-text">
            PROFESSIONALS
          </span>
          <br />
        </h1>
        <div className="banner-text-container mt-5">
          <div className="banner-text-wrapper">
            <p className="white-text text-uppercase">Adopt </p>
            <div className="dot"></div>
          </div>
          <div className="banner-text-wrapper text-uppercase">
            <p className="white-text text-uppercase">nurture</p>
            <div className="dot"></div>
          </div>
          <div className="banner-text-wrapper text-uppercase">
            <p className="white-text"> deliver</p>
          </div>
        </div>
        <Button title="Register Now" />
      </div>
    </section>
  );
}
