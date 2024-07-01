import { useEffect, useRef } from "react";
import "../globals.css";

const HeroSection = () => {
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const tourButtonRef = useRef(null);
  const learnMoreButtonRef = useRef(null);

  useEffect(() => {
    const applyImportantStyles = (element, styles) => {
      if (element) {
        for (const [property, value] of Object.entries(styles)) {
          element.style.setProperty(property, value, 'important');
        }
      }
    };

    const nunitoFontStyle = { 'font-family': "'Nunito', Arial, sans-serif" };

    applyImportantStyles(subheadingRef.current, nunitoFontStyle);
    applyImportantStyles(headingRef.current, nunitoFontStyle);
    applyImportantStyles(tourButtonRef.current, nunitoFontStyle);
    applyImportantStyles(learnMoreButtonRef.current, nunitoFontStyle);
  }, []);

  return (
    <section className="hero-wrap" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-lg-10 text-center">
            <span ref={subheadingRef} className="subheading">
              Enjoy Your Wonderful Holidays With A Great Luxury Experience!
            </span>
            <h1 ref={headingRef} className="mb-4">
              Most Relaxing Place
            </h1>
            <p>
              <a
                ref={tourButtonRef}
                href="#"
                className="btn btn-primary p-4 py-3"
              >
                Take A Tour <span className="ion-ios-arrow-round-forward"></span>
              </a>
              <a
                ref={learnMoreButtonRef}
                href="#"
                className="btn btn-white btn-outline-white p-4 py-3"
              >
                Learn More <span className="ion-ios-arrow-round-forward"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
