'use client';
// app/resto-bar/page.tsx
import Navbar from '../components/NavBar';
import HeroSectionGeneral from '../components/HeroSectionGerneral';
import RestoBarContent from '../components/RestoBar';
import Gallery from '../components/GallerySection';
import Footer from '../components/Footer';
import Head from "next/head";
import MenuList from '../components/MenuList';
import "../globals.css";

const RestoBarPage = () => {
  return (
    <div>
         <Head>
        <title>Rooms - Unwind Hotel Booking</title>
        <meta
          name="description"
          content="Explore our cozy rooms at Unwind Hotel, perfect for your stay."
        />
      </Head>
      <Navbar />
      <HeroSectionGeneral pageTitle="Resto & Bar" />
      <MenuList  />
      <Gallery />
      <Footer />
    </div>
  );
};

export default RestoBarPage;
