import React from 'react';
import styles from './ContactUsSection.module.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import Script from 'next/script';

const ContactUsSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Daisychain Jewellers",
    "image": "https://www.yourwebsite.com/images/photos/daisychain-map.png",
    "@id": "https://www.yourwebsite.com/#jewelrystore",
    "url": "https://www.yourwebsite.com",
    "telephone": "01442 236651",
    "email": "marc@daisychainjewellers.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "47 St Johns Road",
      "addressLocality": "Boxmoor, Hemel Hempstead",
      "addressRegion": "Hertfordshire",
      "postalCode": "HP1 1QQ",
      "addressCountry": "UK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "00:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/daisychainjewellers",
      "https://facebook.com/daisychainjewellers"
    ]
  };

  return (
    <section
      id="contact-us-section"
      className={`${styles.contactUsSection} section-horizontal-padding sub-section-padding main-background-color`}
    >
      {/* Inject JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container css-grid">

        {/* Contact Us Title Box */}
        <div
          className={`${styles.titleBox}`}
        >
          <h2 className={`${styles.contactUsTitle}`}>Contact Us</h2>
          <p>
            Here is our contact information, opening hours and shop address. We look forward to hearing from you!
          </p>
        </div>

        {/* Visit Us Box */}
        <div
          className={`${styles.visitUsBox}`}
        >
          <h3 className={`${styles.visitShopTitle}`}>Visit The Shop</h3>

          {/* Opening Hours */}
          <div className={`${styles.openingHoursContainer}`}>
            <h4 className={`${styles.openingHoursTitle}`}>Opening Hours</h4>
            <div className={`${styles.openingHoursTable}`}>
              <div className={`${styles.openingDays}`}>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className={`${styles.openingDays}`}>
                <span>Closed</span>
                <span>9am-5pm</span>
                <span>9am-5pm</span>
                <span>9am-5pm</span>
                <span>9am-5pm</span>
                <span>9am-5pm</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Shop Address */}
          <div className={`${styles.shopAddressContainer}`}>
            <h4 className={`${styles.shopAddressTitle}`}>Shop Address</h4>
            <address>
              <span>Daisychain Jewellers</span>
              <span>47 St Johns Road</span>
              <span>Boxmoor, Hemel Hempstead</span>
              <span>Hertfordshire HP1 1QQ</span>
            </address>
          </div>
        </div>

        {/* Get In Touch Box */}
        <div
          id="contact-us-box"
          className={`${styles.getInTouchBox}`}
        >
          <h3 className={`${styles.getInTouchTitle}`}>Get In Touch</h3>

          {/* Telephone */}
          <div className={`${styles.contactDetail}`}>
            <h4 className="font-color-black">Telephone</h4>
            <span>
              <FaPhoneAlt aria-hidden="true" />
              <a
                href="tel:01442236651"
                aria-label="Call Daisychain Jewellers at 01442 236651"
              >
                01442 236651
              </a>
            </span>
          </div>

          {/* Email */}
          <div className={`${styles.contactDetail} flex-gap-s flex-column`}>
            <h4 className="font-color-black">Email</h4>
            <span>
              <FaEnvelope aria-hidden="true" />
              <a
                href="mailto:marc@daisychainjewellers.co.uk"
                aria-label="Email Daisychain Jewellers at marc@daisychainjewellers.co.uk"
              >
                marc@daisychainjewellers.co.uk
              </a>
            </span>
          </div>

          {/* Social Media */}
          <div className={`${styles.contactDetail} flex-gap-s flex-column`}>
            <h4 className="font-color-black">Social Media</h4>
            <span>
              <FaInstagram aria-hidden="true" />
              <a
                href="https://instagram.com/daisychainjewellers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                Instagram
              </a>
            </span>
            <span>
              <FaFacebookF aria-hidden="true" />
              <a
                href="https://facebook.com/daisychainjewellers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                Facebook
              </a>
            </span>
          </div>
        </div>

        {/* Map Image */}
        <div className={styles.mapImageContainer}>
          <Image
            id="daisychain-map-home-image"
            src="/images/photos/daisychain-map.png"
            alt="Map showing the location of Daisychain Jewellers in Hemel Hempstead, Hertfordshire"
            width={1600} // Adjust based on your design requirements
            height={450} // Adjust based on your design requirements
            layout="responsive"
            objectFit="cover"
            className={styles.mapImage}
            priority={false} // Set to true if the image is above the fold and critical
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUsSection;