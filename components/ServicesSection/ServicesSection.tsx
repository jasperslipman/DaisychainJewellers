// ServicesSection.tsx
import React from 'react';
import styles from './ServicesSection.module.css';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      imageSrc: '/images/photos/daisychain-engagement-wedding-image.jpg',
      altText: 'Inside of Daisychain Jewellers shop',
      heading: 'Engagement & Wedding',
      paragraph:
        'At Daisychain Jewellers, we specialize in designing and creating custom-made engagement rings and wedding bands. We have a wide selection of unique engagement rings and wedding bands available in our showroom, which can be tweaked to your needs.',
      paragraph2: 
        'We work closely with you to craft engagement and wedding rings that reflect your individual style.',
      paragraph3: 
        'Whether you\'re interested in customizing an existing design or looking to redesign an existing engagement or wedding ring, we\'re committed to bringing your vision to life. Visit us to build your perfect engagement and wedding rings.',
      
      isReversed: false,
      sectionId: 'engagement-wedding-home', 
    },
    {
      id: 2,
      imageSrc: '/images/photos/daisychain-our-services-image.jpg',
      altText: 'Jewellers work bench',
      heading: 'Our Services',
      paragraph:
        'Our in-house workshop offers a range of services to meet all your jewellery needs. We specialize in jewellery design, restoration, and remodelling, allowing you to redesign old pieces or create custom jewellery.',
      paragraph2:
        'We provide professional jewellery repair services, including resizing, necklace repairs, and jewellery cleaning and polishing. Our prompt and reliable services ensure your treasured pieces are restored to their former glory.',
      paragraph3:
        'We buy gold and silver, offering competitive prices for your precious metals. Additionally, we offer certified diamonds and gemstone sourcing for your custom jewellery pieces.',
      isReversed: true,
      sectionId: 'our-services-home', 
    },
    
  ];

  return (
    <section
      className={`${styles.servicesSection} section-horizontal-padding sub-section-padding`}
      aria-labelledby="services-heading" 
    >
      <h2 id="services-heading" className={styles.sectionHeading}>
        Our Services
      </h2>

      <div className="container css-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            imageSrc={service.imageSrc}
            altText={service.altText}
            heading={service.heading}
            paragraph={service.paragraph}
            paragraph2={service.paragraph2}
            paragraph3={service.paragraph3}
            isReversed={service.isReversed}
            gridRow={index + 1}
            sectionId={service.sectionId} 
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
