// Footer.tsx
import React from 'react';
import Script from 'next/script';
import styles from './Footer.module.css';
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
/* import DaisychainFullLogo from '../../public/images/logos/daisychainjewellers-full-logo.svg'; */ 

const Footer: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daisychain Jewellers",
    "url": "https://www.daisychainjewellers.co.uk",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+441442236651",
      "contactType": "Customer Service",
      "areaServed": "UK",
      "availableLanguage": ["English"],
    },
    "sameAs": [
      "https://instagram.com/daisychainjewellers",
      "https://facebook.com/daisychainjewellers",
    ],
  };

  return (
    <footer className={`${styles.footerSection} section-horizontal-padding`}>
      <Script
        id="footer-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className={`container css-grid`}>
        {/* Logo and Description */}
        <div className={`${styles.footerDiv} ${styles.logoDiv}`}>
          <a
            href="/"
            aria-label="Daisychain Jewellers Home"
            className={styles.daisychainFooterLogo}
          >
            {/* <DaisychainFullLogo alt="Daisychain Jewellers Logo" /> */}
          </a>
          <p className={styles.daisychainDescriptionParagraph}>
            We are a Family-Run Jewellers Based in Boxmoor, Hemel Hempstead with
            an In-House Showroom & Workshop.
          </p>
        </div>

        {/* Visit Us */}
        <div className={styles.footerDiv}>
          <h2 className={styles.footerMainHeading}>Visit Us</h2>
          <div className={styles.footerSubDiv}>
            {/* Opening Hours */}
            <div className={styles.openingHours}>
              <h3 className={styles.footerSubHeading}>Opening Hours</h3>
              <table
                className={styles.openingHoursTable}
                aria-label="Opening Hours"
              >
                <tbody>
                  <tr>
                    <th scope="row">Monday & Sunday</th>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday - Saturday</th>
                    <td>9:30am - 5pm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Shop Address */}
            <div className={styles.shopAddress}>
              <h3 className={styles.footerSubHeading}>Shop Address</h3>
              <address className={styles.address}>
                <p>Daisychain Jewellers</p>
                <p>47 St Johns Road</p>
                <p>Boxmoor, Hemel Hempstead</p>
                <p>Hertfordshire HP1 1QQ</p>
              </address>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className={styles.footerDiv}>
          <h2 className={styles.footerMainHeading}>Get In Touch</h2>
          <div className={styles.footerSubDiv}>
            {/* Telephone */}
            <div className={styles.contactDetail}>
              <h3 className={styles.footerSubHeading}>Telephone</h3>
              <p className={styles.footerBodyText}>
                <FaPhoneAlt aria-hidden="true" />
                <a
                  href="tel:01442236651"
                  className={styles.contactLink}
                  aria-label="Call Daisychain Jewellers at 01442 236651"
                >
                  01442 236651
                </a>
              </p>
            </div>

            {/* Email */}
            <div className={styles.contactDetail}>
              <h3 className={styles.footerSubHeading}>Email</h3>
              <p className={styles.footerBodyText}>
                <FaEnvelope aria-hidden="true" />
                <a
                  href="mailto:marc@daisychainjewellers.co.uk"
                  className={styles.contactLink}
                  aria-label="Email Daisychain Jewellers at marc@daisychainjewellers.co.uk"
                >
                  marc@daisychainjewellers.co.uk
                </a>
              </p>
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
                    <FaInstagram aria-hidden="true" /> Instagram
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
                    <FaFacebookF aria-hidden="true" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className={styles.footerDiv}>
          <h2 className={styles.footerMainHeading}>Pages</h2>
          <div className={styles.footerSubDiv}>
            {/* Information Pages */}
            <nav className={styles.listDiv} aria-label="Information Pages">
              <h3 className={styles.footerSubHeading}>Information</h3>
              <ul className={styles.pagesList}>
                <li>
                  <a href="/" className={styles.pageLink}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
                    Engagement &amp; Wedding
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
                    Ethics &amp; Values
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Legal Pages */}
            <nav className={styles.listDiv} aria-label="Legal Pages">
              <h3 className={styles.footerSubHeading}>Legal</h3>
              <ul className={styles.pagesList}>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className={styles.pageLink}>
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
