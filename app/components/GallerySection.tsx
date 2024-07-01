// app/components/GallerySection.tsx
'use client';
import "../globals.css";
// app/components/GallerySection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import CSS files
import '../../public/css/animate.css';
import '../../public/css/aos.css';
import '../../public/css/datepicker.min.css';
import '../../public/css/flaticon.css';
import '../../public/css/tiny-slider.css';
import '../../public/css/style.css';
import '../../public/scss/style.scss';

const galleryItems = [
  { id: 1, imageUrl: '/images/gallery-1.jpg' },
  { id: 2, imageUrl: '/images/gallery-2.jpg' },
  { id: 3, imageUrl: '/images/gallery-3.jpg' },
  { id: 4, imageUrl: '/images/gallery-4.jpg' },
  { id: 5, imageUrl: '/images/gallery-5.jpg' },
];

const GallerySection = () => {
  return (
    <section className="ftco-gallery">
      <div className="container-fluid">
        <div className="row g-3">
          {galleryItems.map((item) => (
            <div className="col-md" key={item.id}>
              <motion.div
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * item.id }}
              >
                <Link href={item.imageUrl} passHref className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
