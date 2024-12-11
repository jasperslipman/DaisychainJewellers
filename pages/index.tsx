/* index.tsx */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUsSection/AboutUs';
import TestimonialCardsSection from '../components/TestimonialCardsSection/TestimonialCardsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import SeasonalSection from '../components/SeasonalSection/SeasonalSection';
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';
import FooterSection from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Daisychain Jewellers - Bespoke Engagement & Wedding Rings in Hertfordshire</title>
        <meta
          name="description"
          content="Discover Daisychain Jewellers in Hemel Hempstead, Hertfordshire, offering bespoke engagement and wedding rings, jewellery repair & restoreration, and expert craftsmanship."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.daisychainjewellers.co.uk/" />

        <link rel="icon" href="/images/logos/daisychain-vector-flower.svg" type="image/svg+xml" />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <TestimonialCardsSection />
      <ServicesSection />
      <SeasonalSection />
      <ContactUsSection />
      <FooterSection />
    </>
  );
};

export default Home;