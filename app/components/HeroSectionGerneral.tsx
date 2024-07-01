// components/HeroSection.tsx
import Link from "next/link";
import { motion } from "framer-motion";

// Import CSS files

import "../globals.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowsLeftRight } from "react-icons/fa6";

interface HeroSectionProps {
  pageTitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ pageTitle }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: `url('images/bg_3.jpg')` }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={animationVariants}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 pt-5 text-center">
            <motion.p
              className="breadcrumbs"
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              variants={animationVariants}
            >
              <span className="me-2">
                <Link href="/">
                  Home <i className="fa fa-chevron-right"></i>
                </Link>
              </span>
              <span>
                {pageTitle} <i className="fa fa-chevron-right"></i>
              </span>
            </motion.p>
            <motion.h1
              className="mb-0 bread"
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
              variants={animationVariants}
            >
              {pageTitle}
            </motion.h1>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
