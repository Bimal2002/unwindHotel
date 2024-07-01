import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import VideoSection from "./VideoSection";
import TestimonialSection from "./TestimonialSection";
import GallerySection from "./GallerySection";
import fServicesImg1 from "../../public/images/f-services.jpg";
import fServicesImg2 from "../../public/images/f-services-2.jpg";
import '../../public/css/animate.css';
import '../../public/css/aos.css';
// import '../../public/css/bootstrap.min.css';
// import '../../public/css/datepicker.min.css';
import '../../public/css/flaticon.css';
// import '../../public/css/style.css';
import '../../public/css/tiny-slider.css'; 
import '../../public/css/bootstrap/bootstrap-grid.css';
import '../../public/css/bootstrap/bootstrap-reboot.css';
import '../../public/css/bootstrap/bootstrap-utilities.css';

// import '../../public/fonts/flaticon/font/_flaticon.scss';
// import '../../public/fonts/flaticon/font/flaticon.css';
import '../../public/scss/style.scss';

const AboutUsContent: React.FC = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="ftco-section ftco-about-section"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Column with Services */}
          <div className="col-lg-6" style={{ paddingLeft: "18px" }}>
            <div className="row">
              {/* Service 1 */}
              <motion.div
                className="col-md-6"
                variants={animationVariants}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="f-services d-md-flex flex-md-column-reverse">
                  <div className="img position-relative mb-3 mb-md-0">
                    <Image
                      src={fServicesImg1}
                      alt="Cozy Room"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="text p-4 text-center">
                    <div className="icon">
                      <span className="flaticon-pillow"></span>
                    </div>
                    <h3>Cozy Room</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Service 2 */}
              <motion.div
                className="col-md-6"
                variants={animationVariants}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="f-services">
                  <div className="img position-relative mb-3 mb-md-0">
                    <Image
                      src={fServicesImg2}
                      alt="Special Offers"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="text p-4 text-center">
                    <div className="icon">
                      <span className="flaticon-special"></span>
                    </div>
                    <h3>Special Offers</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Right Column with About Us Section */}
          <motion.div
            className="col-lg-6 heading-section d-flex align-items-center"
            variants={animationVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <span className="subheading">About Us</span>
              <h2
                className="mb-4"
                style={{ fontSize: "64px", fontWeight: 400, lineHeight: 1.4 }}
              >
                Unwind A Hotel <br />
                <span className="d-block">Booking Agency</span>
              </h2>

              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <Link
                  href="#"
                  className="btn btn-primary py-2 px-3"
                  style={{ fontSize: "14px" }}
                >
                  Book Your Room Now
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsContent;
