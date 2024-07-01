// components/TestimonialItem.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialItemProps {
  name: string;
  role: string;
  imageSrc: string;
  rating: number;
  content: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, role, imageSrc, rating, content }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="fas fa-star active"></span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="fas fa-star-half-alt active"></span>);
    }

    return stars;
  };

  return (
    <motion.div
      className="ezy__testimonial1-item px-4 py-4"
      initial={{ opacity: 0, x: -100 }} // Initial position from left
      animate={{ opacity: 1, x: 0 }} // Animate to original position
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="ezy__testimonial1-content mt-3">
        <p className="mb-4 ezy__testimonial1-rating">{renderStars(rating)}</p>
        <p className="opacity-50 mb-4">{content}</p>
        <div className="d-flex align-items-center">
          <div className="me-2">
            <img src={imageSrc} alt={name} className="img-fluid rounded-circle border" width="47" />
          </div>
          <div>
            <h4 className="mb-0 fs-5">{name}</h4>
            <p className="mb-0 small"><i>{role}</i></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;
