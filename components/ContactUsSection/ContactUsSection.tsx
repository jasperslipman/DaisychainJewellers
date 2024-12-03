// ContactUsSection.tsx
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
      id="contact-us"
      className={`${styles.contactUsSection} section-horizontal-padding sub-section-padding`}
      aria-labelledby="contact-us-heading"
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
        <div className={styles.titleBox}>
          <h2 id="contact-us-heading" className={styles.contactUsTitle}>Contact Us</h2>
          <p className={styles.introParagraph}>
            Here is our contact information, opening hours, and shop address. We look forward to hearing from you!
          </p>
        </div>

        {/* Visit Us Box */}
        <div className={styles.visitUsBox}>
          <h3 className={styles.visitShopTitle}>Visit The Shop</h3>

          {/* Opening Hours */}
          <div className={styles.openingHoursContainer}>
            <h4 className={styles.openingHoursTitle}>Opening Hours</h4>
            <table className={styles.openingHoursTable}>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Opening Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>Closed</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Shop Address */}
          <div className={styles.shopAddressContainer}>
            <h4 className={styles.shopAddressTitle}>Shop Address</h4>
            <address className={styles.shopAddress}>
              <p>Daisychain Jewellers</p>
              <p>47 St Johns Road</p>
              <p>Boxmoor, Hemel Hempstead</p>
              <p>Hertfordshire HP1 1QQ</p>
            </address>
          </div>
        </div>

        {/* Get In Touch Box */}
        <div className={styles.getInTouchBox}>
          <h3 className={styles.getInTouchTitle}>Get In Touch</h3>

          {/* Telephone */}
          <div className={styles.contactDetail}>
            <h4 className={styles.contactHeading}>Telephone</h4>
            <p>
              <FaPhoneAlt aria-hidden="true" />
              <a
                href="tel:01442236651"
                aria-label="Call Daisychain Jewellers at 01442 236651"
                className={styles.contactLink}
              >
                01442 236651
              </a>
            </p>
          </div>

          {/* Email */}
          <div className={styles.contactDetail}>
            <h4 className="font-color-black">Email</h4>
            <p>
              <FaEnvelope aria-hidden="true" />
              <a
                href="mailto:marc@daisychainjewellers.co.uk"
                aria-label="Email Daisychain Jewellers at marc@daisychainjewellers.co.uk"
                className={styles.contactLink}
              >
                marc@daisychainjewellers.co.uk
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className={styles.contactDetail}>
            <h4 className="font-color-black">Social Media</h4>
            <p>
              <FaInstagram aria-hidden="true" />
              <a
                href="https://instagram.com/daisychainjewellers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className={styles.contactLink}
              >
                Instagram
              </a>
            </p>
            <p>
              <FaFacebookF aria-hidden="true" />
              <a
                href="https://facebook.com/daisychainjewellers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className={styles.contactLink}
              >
                Facebook
              </a>
            </p>
          </div>
        </div>

        {/* Map Image */}
        <div className={styles.mapImageContainer}>
          <Image
            src="/images/photos/daisychain-map.png"
            alt="Map showing the location of Daisychain Jewellers in Hemel Hempstead, Hertfordshire"
            fill
            className={styles.mapImage}
            placeholder="blur"
            blurDataURL="/images/photos/daisychain-engagement-wedding-image-blur.jpg"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
