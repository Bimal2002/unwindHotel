// pages/blog/page.tsx
'use client';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import BlogEntriesSection from '../components/BlogEntriesSection';
import HeroSectionGeneral from '../components/HeroSectionGerneral';
import "../globals.css";
const Blog = () => (
  <>
    <Navbar />
    <HeroSectionGeneral pageTitle="Blog" />
    

    {/* Blog entries section */}
    <BlogEntriesSection />

    <Footer />
  </>
);

export default Blog;
