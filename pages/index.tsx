import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUsSection/AboutUs';
import TestimonialCardsSection from '../components/TestimonialCardsSection/TestimonialCardsSection';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <TestimonialCardsSection />
    </>
  );
};

export default Home;