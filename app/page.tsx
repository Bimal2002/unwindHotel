'use client';

import { motion, useAnimation } from 'framer-motion';
import useInView from './components/useView'; // Adjust the path according to your project structure
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import BookingForm from './components/BookingForm';
import ServicesSection from './components/ServicesSection';
import IntroSection from './components/IntroSection';
import Footer from './components/Footer';
import RoomCard from './components/RoomCard';
import VideoSection from './components/VideoSection';
import MenuList from './components/MenuList';
import RecentBlogSection from './components/RecentBlogSection';
import GallerySection from './components/GallerySection';
import AboutUsContent from './components/AboutUs';
import { useEffect, ReactNode } from 'react';
import './globals.css';

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface SectionProps {
  children: ReactNode;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <NavBar />
      <Section>
        <HeroSection />
      </Section>
      <Section delay={0.2}>
        <BookingForm />
      </Section>
      <Section delay={0.4}>
        <AboutUsContent />
      </Section>
      <Section delay={0.6}>
        <ServicesSection />
      </Section>
      <Section delay={0.8}>
        <IntroSection />
      </Section>
      <Section delay={1.0}>
        <section className="ftco-section bg-light">
          <div className="container-xl">
            <div className="row justify-content-center">
              <div className="col-md-8 heading-section text-center mb-5">
                <span className="subheading">Our Rooms</span>
                <h2 className="mb-4">Featured Rooms</h2>
              </div>
            </div>
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
            </div>
          </div>
        </section>
      </Section>
      <Section delay={1.2}>
        <VideoSection />
      </Section>
      <Section delay={1.4}>
        <MenuList />
      </Section>
      <Section delay={1.6}>
        <RecentBlogSection />
      </Section>
      <Section delay={1.8}>
        <GallerySection />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
