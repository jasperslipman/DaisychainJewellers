import React from 'react';
import Script from 'next/script';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import DaisychainVector from '../../public/images/logos/daisychain-vector-flower.svg';

const Footer: React.FC = () => {
    
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daisychain Jewellers",
    "url": "https://www.yourwebsite.com",
    "logo": "https://www.yourwebsite.com/images/logos/daisychain-vector-flower.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+441442236651",
      "contactType": "Customer Service",
      "areaServed": "UK",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://instagram.com/daisychainjewellers",
      "https://facebook.com/daisychainjewellers"
    ]
  };

  return (
    <footer
      className={`${styles.footerSection} section-horizontal-padding`}
    >
      <Script
        id="footer-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className={`container css-grid`}>
        <div className={`${styles.footerDiv} ${styles.logoDiv}`}>
          <a href="/" aria-label="Daisychain Jewellers Home" className={`${styles.daisychainFooterLogo}`}>
            <DaisychainVector alt="Daisychain Jewellers Logo"/>
          </a>
          <p className={`${styles.daisychainDescriptionParagraph}`}>
            We are a Family-Run Jewellers Based in Boxmoor, Hemel Hempstead, specializing in Bespoke Jewellery, Engagement & Wedding Ring Design.
          </p>
        </div>

        {/* Visit Us */}
        <div className={`${styles.footerDiv}`}>
          <h2 className={`${styles.footerMainHeading}`}>Visit Us</h2>
          <div className={styles.footerSubDiv}>
            {/* Opening Hours */}
            <div className={styles.openingHours}>
              <h3 className={styles.footerSubHeading}>Opening Hours</h3>
              <table className={styles.openingHoursTable} aria-label="Opening Hours">
                <tbody>
                  <tr>
                    <th scope="row">Monday & Sunday</th>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday - Saturday</th>
                    <td>9:30am-5pm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Shop Address */}
            <div className={styles.shopAddress}>
              <h3 className={styles.body}>Shop Address</h3>
              <address className={styles.address}>
                <span>Daisychain Jewellers</span>
                <span>47 St Johns Road</span>
                <span>Boxmoor, Hemel Hempstead</span>
                <span>Hertfordshire HP1 1QQ</span>
              </address>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className={`${styles.footerDiv}`}>
          <h2 className={`${styles.footerMainHeading}`}>Get In Touch</h2>
          <div className={styles.footerSubDiv}>
            {/* Telephone */}
            <div className={styles.contactDetail}>
              <h3 className={styles.footerSubHeading}>Telephone</h3>
              <span className={styles.footerBodyText}>
                <a
                  href="tel:01442236651"
                  className={styles.contactLink}
                  aria-label="Call Daisychain Jewellers at 01442 236651"
                >
                  01442 236651
                </a>
              </span>
            </div>

            {/* Email */}
            <div className={styles.contactDetail}>
              <h3 className={styles.footerSubheading}>Email</h3>
              <span className={styles.footerBodyText}>
                <a
                  href="mailto:marc@daisychainjewellers.co.uk"
                  className={styles.contactLink}
                  aria-label="Email Daisychain Jewellers at marc@daisychainjewellers.co.uk"
                >
                  marc@daisychainjewellers.co.uk
                </a>
              </span>
            </div>

            {/* Social Media */}
            <div className={styles.contactDetail}>
              <h3 className={styles.footerSubHeading}>Social Media</h3>
              <ul className={styles.socialMediaList}>
                <li>
                  <a
                    href="https://instagram.com/daisychainjewellers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Visit our Instagram page"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/daisychainjewellers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Visit our Facebook page"
                  >
                    <FaFacebookF /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className={`${styles.footerDiv}`}>
          <h2 className={`${styles.footerMainHeading}`}>Pages</h2>
          <div className={styles.footerSubDiv}>
            {/* Information Pages */}
            <nav aria-label="Information Pages">
              <h3 className={styles.footerSubHeading}>Information</h3>
              <ul className={styles.pagesList}>
                <li>
                  <a href="/" className={styles.pageLink}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/engagement-wedding" className={styles.pageLink}>
                    Engagement & Wedding
                  </a>
                </li>
                <li>
                  <a href="/our-services" className={styles.pageLink}>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/ethics-values" className={styles.pageLink}>
                    Ethics & Values
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className={styles.pageLink}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Legal Pages */}
            <nav aria-label="Legal Pages">
              <h3 className={styles.footerSubHeading}>Legal</h3>
              <ul className={styles.pagesList}>
                <li>
                  <a href="/terms-conditions" className={styles.pageLink}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/cookies-policy" className={styles.pageLink}>
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className={styles.pageLink}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
