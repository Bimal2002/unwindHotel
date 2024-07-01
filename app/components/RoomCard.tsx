import React from 'react';
import Link from 'next/link';
import "../globals.css";
interface RoomCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  // link: string; // Add link prop here
}

const RoomCard: React.FC<RoomCardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="room-wrap">
        <Link href="room-single.html" className="img img-room" style={{ backgroundImage: `url(${imageUrl})` }}></Link>
        <div className="text p-5 text-center">
          <h3><a href="room-single.html">{title}</a></h3>
          <p>{description}</p>
          <p className="mb-0 mt-2">
            <span className="me-3 price">${price} <small>/ night</small></span>
            <a href="#" className="btn-custom">Book Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
