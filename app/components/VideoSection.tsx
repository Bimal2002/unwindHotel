// components/VideoSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import CSS files
import '../../public/css/animate.css';
import '../../public/css/aos.css';
import '../../public/css/flaticon.css';
import '../../public/css/tiny-slider.css'; 
import '../../public/css/bootstrap/bootstrap-grid.css';
import '../../public/css/bootstrap/bootstrap-reboot.css';
import '../../public/css/bootstrap/bootstrap-utilities.css';
import '../../public/scss/style.scss';

import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <div className="img vid-section" style={{ backgroundImage: 'url(/images/bg_2.jpg)' }}>
      <div className="overlay"></div>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-10 vid-height d-flex align-items-center justify-content-center text-center">
            <div className="video-wrap">
              <motion.span
                className="subheading"
                style={{
                  fontSize: '13px',
                  display: 'block',
                  marginBottom: '5px',
                  color: '#fff',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '2px'
                }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                Watch our luxurious hotel
              </motion.span>
              <motion.h3
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  fontSize: '70px',
                  lineHeight: '1.5',
                  fontFamily: 'Old Standard TT, Arial, sans-serif',
                  marginTop: '0',
                  marginBottom: '0.5rem'
                }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
              >
                Take A Tour
              </motion.h3>
              <motion.a
                href="https://vimeo.com/115041822"
                className="video-icon glightbox d-flex align-items-center justify-content-center"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
              >
                <span className="ion-ios-play"></span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
