import Link from "next/link";
import "../globals.css"; // Ensure this line is present

const HeroSection = () => (
  <section className="hero-wrap" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-lg-10 text-center">
          <span className="subheading" style={{ fontFamily: "Nunito, Arial, sans-serif" }}>
            Enjoy Your Wonderful Holidays With A Great Luxury Experience!
          </span>
          <h1 className="mb-4" style={{ fontFamily: "'Nunito', Arial, sans-serif" }}>
            Most Relaxing Place
          </h1>
          <p>
            <a href="#" className="btn btn-primary p-4 py-3" style={{ fontFamily: "'Nunito', Arial, sans-serif" }}>
              Take A Tour <span className="ion-ios-arrow-round-forward"></span>
            </a>
            <a href="#" className="btn btn-white btn-outline-white p-4 py-3" style={{ fontFamily: "'Nunito', Arial, sans-serif" }}>
              Learn More <span className="ion-ios-arrow-round-forward"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
