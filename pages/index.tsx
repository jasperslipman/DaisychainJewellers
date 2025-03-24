// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';

// Lazy load other components
const AboutUs = dynamic(() => import('../components/AboutUsSection/AboutUs'));
const TestimonialCardsSection = dynamic(() => import('../components/TestimonialCardsSection/TestimonialCardsSection'));
const ServicesSection = dynamic(() => import('../components/ServicesSection/ServicesSection'));
const ContactUsSection = dynamic(() => import('../components/ContactUsSection/ContactUsSection'));
const FooterSection = dynamic(() => import('../components/Footer/Footer'));

interface HomeProps {
  // Define any props your component might receive
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Daisychain Jewellers - Bespoke Engagement & Wedding Rings in Hertfordshire</title>
        <meta
          name="description"
          content="Discover Daisychain Jewellers in Hemel Hempstead, Hertfordshire, offering bespoke engagement and wedding rings, jewellery repair & restoration, and expert craftsmanship."
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
      <ContactUsSection />
      <FooterSection />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  // Fetch data if needed
  // const res = await fetch('https://api.example.com/data');
  // const data = await res.json();

  return {
    props: {
      // data,
    },
  };
}
