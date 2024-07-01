// components/NavBar.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import "../globals.css";


const NavBarGeneral = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('show');
    }
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
      initial="closed"
      animate={navRef.current?.classList.contains('show') ? "open" : "closed"}
      variants={menuVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">Restaurant</Link>
        <button className="navbar-toggler" type="button" onClick={handleMenuToggle} aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav" ref={navRef}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/rooms" className="nav-link">Rooms</Link>
            </li>
            <li className="nav-item">
              <Link href="/resto-bar" className="nav-link">Resto Bar</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBarGeneral;
