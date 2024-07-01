"use client";

// import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import "./about.css"; // Import your CSS file
import "../globals.css";
import fServicesImg1 from "../../public/images/f-services.jpg";
import fServicesImg2 from "../../public/images/f-services-2.jpg";
import Footer from "../components/Footer";
import NavBarGeneral from "../components/NavBarGeneral";
import Navbar from "../components/NavBar";
import HeroSectionGeneral from "../components/HeroSectionGerneral";
import IntroSection from "../components/IntroSection";
import VideoSection from "../components/VideoSection";
import TestimonialSection from "../components/TestimonialSection";
import GallerySection from "../components/GallerySection";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <div>
      {/* <NavBarGeneral /> */}
      <Navbar/>
      <HeroSectionGeneral pageTitle="About Us" />
      <motion.section
        className="ftco-section ftco-about-section"
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="container-xl">
          <div className="row g-xl-5">
            <div className="col-md-6">
              <div className="row">
                <motion.div
                  className="col-md-6"
                  variants={animationVariants}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="f-services d-md-flex flex-md-column-reverse">
                    <div className="img w-100 position-relative mb-md-4">
                      <Image
                        src={fServicesImg1}
                        alt="Cozy Room"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="text w-100 p-4 text-center mb-md-4">
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
                <motion.div
                  className="col-md-6"
                  variants={animationVariants}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="f-services">
                    <div className="img w-100 position-relative mb-md-4">
                      <Image
                        src={fServicesImg2}
                        alt="Special Offers"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="text w-100 p-4 text-center">
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
            <motion.div
              className="col-md-6 heading-section d-flex align-items-center"
              variants={animationVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="mt-5 mt-md-0">
                <span className="subheading">About Us</span>
                <h2 className="mb-4">Unwind A Hotel Booking Agency</h2>
                <p className="mb-5">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Book Your Room Now
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <IntroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <VideoSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <TestimonialSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <GallerySection />
      </motion.div>
      <Footer />
    </div>
  );
};

export default AboutUs;
