import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Daisychain Jewellers</title>
        <meta name="description" content="Your go-to place for exquisite jewelry." />
      </Head>
      <div>
        <h1>Welcome to Daisychain Bombaclart</h1>
        <Image src="/images/jewelry1.jpg" alt="Jewelry 1" width={500} height={500} />
        <p>Your go-to place for exquisite jewelry.</p>
      </div>
    </>
  );
};

export default Home;