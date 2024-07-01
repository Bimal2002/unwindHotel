// // // Navbar.tsx

"use client";
import Link from "next/link";

// Import CSS files
import "../../public/css/animate.css";
import "../../public/css/aos.css";
// import '../../public/css/bootstrap.min.css';
// import '../../public/css/datepicker.min.css';
import "../../public/css/flaticon.css";
// import '../../public/css/style.css';
import "../../public/css/tiny-slider.css";
import "../../public/css/bootstrap/bootstrap-grid.css";
import "../../public/css/bootstrap/bootstrap-reboot.css";
import "../../public/css/bootstrap/bootstrap-utilities.css";

// import '../../public/fonts/flaticon/font/_flaticon.scss';
// import '../../public/fonts/flaticon/font/flaticon.css';
import "../../public/scss/style.scss";

// import '../../public/scss/bootstrap/_navbar.scss';
// import '../../public/scss/bootstrap/_nav.scss';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg ftco-navbar-light">
    <div className="container-xl">
      <Link href="/" passHref>
      <span className="navbar-brand d-flex flex-column align-items-center">
                    <span className="text-center" style={{ fontSize: '1.5rem', marginLeft: '15px' }}>Unwind</span>
                    <small className="fs-6 text-center" style={{ fontSize: '0.50rem', marginLeft: '15px' }}>Hotel Booking</small>
                </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars"></span> Menu
      </button>
      <div className=" text-white" id="navbarSupportedContent">
        {/* collapse navbar-collapse */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  text-white">
          <li className="nav-item  text-white">
            <Link href="/" passHref>
              <span className="nav-link active">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" passHref>
              <span className="nav-link">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/rooms" passHref>
              <span className="nav-link">Rooms</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resto-bar" passHref>
              <span className="nav-link">Resto & Bar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" passHref>
              <span className="nav-link">Blog</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" passHref>
              <span className="nav-link">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;




// // Navbar.tsx
// import React, { useState } from 'react';
// import { CodeIcon, HamburgerMenuClose, HamburgerMenuOpen } from './Icons';
// import NavItem from './NavItem';

// const NavBar = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <nav className="navbar bg-[#1f5156] h-20 flex justify-center items-center text-lg sticky top-0 z-20">
//       <div className="nav-container flex justify-between items-center w-full h-20 max-w-[1500px] relative px-4">
//         <Link href="/" className="nav-logo text-[#f5b921] text-2xl flex items-center cursor-pointer">
//           <span>CodeBucks</span>
//           <span className="icon ml-4">
//             <CodeIcon />
//           </span>
//         </Link>
//         <div className="hidden lg:flex lg:items-center lg:w-auto">
//           <ul className="flex space-x-4">
//             <NavItem to="/" text="Home" onClick={handleClick} />
//             <NavItem to="/about" text="About" onClick={handleClick} />
//             <NavItem to="/blog" text="Blog" onClick={handleClick} />
//             <NavItem to="/contact" text="Contact Us" onClick={handleClick} />
//           </ul>
//         </div>
//         <div className="nav-icon lg:hidden" onClick={handleClick}>
//           {click ? (
//             <span className="icon">
//               <HamburgerMenuClose />
//             </span>
//           ) : (
//             <span className="icon">
//               <HamburgerMenuOpen />
//             </span>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
