// pages/contact.tsx
'use client';
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSectionGerneral';
import Contact from '../components/ContactForm';
import Footer from '../components/Footer';
import "../globals.css";

const ContactPageComponent: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Unwind Hotel Booking</title>
        <meta
          name="description"
          content="Contact Unwind Hotel for any inquiries or suggestions."
        />
      </Head>
      <Navbar />
      <HeroSection pageTitle="Contact"/>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPageComponent;
