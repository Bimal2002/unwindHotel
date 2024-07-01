import Link from "next/link";
import "../../public/css/animate.css";
import "../../public/css/aos.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/datepicker.min.css";
import "../../public/css/flaticon.css";
import "../../public/css/style.css";
import "../../public/css/tiny-slider.css";
import "./hero.css";

import "../../public/css/style.css";
import "../../public/scss/style.scss";
// import "../../public/css/ionicons.min.css";

// const HeroSection = () => (
//     <div className="hero-wrap">
//         <div className="overlay"></div>
//         <div className="container">
//             <div className="row no-gutters slider-text align-items-center justify-content-center">
//                 <div className="col-lg-10 text-center">
//                     <span className="subheading">Enjoy Your Wonderful Holidays With A Great Luxury Experience!</span>
//                     <h1 className="mb-4">Most Relaxing Place</h1>
//                     <p>
//                         <a href="#" className="btn btn-primary p-4 py-3">Take A Tour <span className="ion-ios-arrow-round-forward"></span></a>
//                         <a href="#" className="btn btn-white btn-outline-white p-4 py-3">Learn More <span className="ion-ios-arrow-round-forward"></span></a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// export default HeroSection;
import { IoIosArrowRoundForward } from "react-icons/io";
import Head from "next/head";

const HeroSection = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
        {/* Include other necessary styles */}

        {/* External JavaScript files */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
        <script src="/js/tiny-slider.js"></script>
        <script src="/js/glightbox.min.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/datepicker.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=false"></script>
        <script src="/js/google-map.js"></script>
        <script src="/js/main.js"></script>
      </Head>

      <section
        className="hero-wrap bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="flex justify-center items-center h-screen">
            <div className="text-center">
              <div
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "10px",
                  letterSpacing: "1px",
                }}
              >
                Enjoy Your Wonderful Holidays With A Great Luxury Exper
              </div>

              {/* <span className="subheading ">Enjoy Your Wonderful Holidays With A Great Luxury Experience!</span> */}

              <h1
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "60px",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                  fontFamily: '"Old Standard TT", Arial, sans-serif',
                }}
              >
                Most Relaxing Place
              </h1>

              <p>
                <Link
                  href="#"
                  className="btn btn-primary p-4 py-3 flex-wrap flex-col items-center"
                >
                  Take A Tour{" "} <IoIosArrowRoundForward  />
                 
                </Link>{" "}
                <Link
                  href="#"
                  className="btn btn-white btn-outline-white p-4 py-3 flex items-center"
                >
                  Learn More <IoIosArrowRoundForward className="ml-1" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
