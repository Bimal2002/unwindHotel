// IntroSection.tsx

import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <motion.div
      className="ftco-intro ftco-no-pt ftco-no-pb img relative"
      style={{ backgroundImage: "url(/images/bg_1.jpg)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-75"></div>
      <div className="container-xl py-5 relative z-10">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="row">
              <div className="col-md-8 md:w-8/12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }} // Adjust delay to start after 0.5 seconds
                  style={{ color: "#c5a880" }} // Apply the color directly
                >
                  <span className="subheading text-xs uppercase tracking-widest">
                    FIND BEST HOTEL FOR LEAVING
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }} // Adjust delay to start after 1 second
                >
                  <h1 className="mb-md-0 mb-4 text-3xl md:text-5xl font-bold text-white">
                    Find the Best Hotel in Your Next Vacation
                  </h1>
                </motion.div>
              </div>
              <div className="col-md-4 md:w-4/12 flex items-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }} // Adjust delay to start after 1.5 seconds
                  className="mb-0"
                >
                  <a
                    href="#"
                    className="btn btn-primary py-md-4 py-3 px-md-5 px-4"
                  >
                    Book Now
                  </a>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
