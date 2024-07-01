// components/ServicesSection.tsx
'use client';
import "../globals.css";
// components/ServicesSection.tsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  return (
    <section className="ftco-section">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-8 heading-section text-center mb-5">
            <motion.span
              className="subheading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Unwind Services
            </motion.span>
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Explore Our Hotel Services
            </motion.h2>
          </div>
        </div>
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ServiceCard iconClass="flaticon-wifi-signal" title="Free Wifi" delay={0.1} />
          <ServiceCard iconClass="flaticon-online-booking" title="Easy Booking" delay={0.2} />
          <ServiceCard iconClass="flaticon-cooking" title="Restaurant" delay={0.3} />
          <ServiceCard iconClass="flaticon-swimming-pool" title="Swimming Pool" delay={0.4} />
          <ServiceCard iconClass="flaticon-cosmetics" title="Beauty & Health" delay={0.5} />
          <ServiceCard iconClass="flaticon-reception" title="Help & Support" delay={0.6} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
