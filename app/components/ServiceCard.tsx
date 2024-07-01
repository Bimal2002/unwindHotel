// components/ServiceCard.tsx
'use client';
// components/ServiceCard.tsx
import "../globals.css";
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  iconClass: string;
  title: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconClass, title, delay }) => {
  return (
    <motion.div
      className="col-lg-2 text-center d-flex align-items-stretch"
      initial={{ opacity: 0, y: 50, scale: 0.8 }} // Start below the viewport with scale and opacity
      animate={{ opacity: 1, y: 0, scale: 1 }} // Animate to on-screen position with full scale and opacity
      transition={{ duration: 0.8, delay, type: 'spring', stiffness: 120, damping: 15 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Scale up on hover
    >
      <div className="services">
        <div className="icon"><span className={iconClass}></span></div>
        <div className="text">
          <h2>{title}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
