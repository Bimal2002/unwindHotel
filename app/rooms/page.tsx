'use client';
import { useEffect } from "react";
import Head from "next/head";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Link from "next/link";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HeroSectionGeneral from '../components/HeroSectionGerneral';
import RoomCard from "../components/RoomCard";
import ServicesSection from "../components/ServicesSection";
import Footer from '../components/Footer';
import BookingForm from "../components/BookingForm";
// import room1Img from '../../../public/images/room-1.jpg';

import room1Img from "../../public/images/room-1.jpg";
import room2Img from "../../../public/images/room-2.jpg";
import room3Img from "../../../public/images/room-3.jpg";
import room4Img from "../../../public/images/room-4.jpg";
import room5Img from "../../../public/images/room-5.jpg";
import room6Img from "../../../public/images/room-6.jpg";

// import { useEffect } from "react";
// import Head from "next/head";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from "next/link";t
// import Navbar from "../components/NavBar";
// import HeroSection from "../components/HeroSection";
// import RoomCard from "../components/RoomCard";
// import ServicesSection from "../components/ServicesSection";
// import Footer from "../components/Footer";

const RoomsPage = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

  return (
    <>
      <Head>
        <title>Rooms - Unwind Hotel Booking</title>
        <meta
          name="description"
          content="Explore our cozy rooms at Unwind Hotel, perfect for your stay."
        />
      </Head>
      <Navbar />

      {/* <HeroSection
        backgroundImage="url(images/bg_3.jpg)"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rooms", link: "/rooms" },
        ]}
        title="Cozy Rooms"
      /> */}
      <HeroSectionGeneral pageTitle="Rooms" />

    
      <section className="ftco-section ftco-no-pb ftco-no-pt ftco-booking">
        {/* Booking form can be added here if needed */}
        
      </section>
      <BookingForm/>


      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center">
            <RoomCard
              imageUrl="/images/room-1.jpg"
              title="Suite Room"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price={450}
            />
            <RoomCard
              imageUrl="/images/room-2.jpg"
              title="Deluxe Room"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price={350}
            />
            <RoomCard
              imageUrl="/images/room-3.jpg"
              title="Standard Room"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price={250}
            />
            <RoomCard
              imageUrl="/images/room-4.jpg"
              title="Family Room"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price={550}
            />
            <RoomCard
              imageUrl="/images/room-5.jpg"
              title="Single Room"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price={150}
            />
            <RoomCard
              imageUrl="/images/room-6.jpg"
              title="Double Room"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              price={250}
            />
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <ServicesSection />

      <Footer />
    </>
  );
};

export default RoomsPage;
