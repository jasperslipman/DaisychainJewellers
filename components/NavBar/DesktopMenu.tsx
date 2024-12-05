// components/NavBar/DesktopMenu.tsx

import React from 'react';
import NavLink from './NavLink'; // Import the custom NavLink
import DropdownMenu from './DropdownMenu';
import styles from './NavBar.module.css';

const DesktopNavMenu: React.FC = () => {
  return (
    <div className={styles.desktopNavMenu}>
      <ul className={styles.primaryNavLinks}>
        <li>
          <NavLink
            href="/"
            className={`${styles.navLink} ${styles.linkWrapper}`}
            activeClassName={styles.activeLink} // Apply active styles
            aria-current="page"
          >
            Home
          </NavLink>
        </li>

        <DropdownMenu
          id="engagement-wedding-menu"
          title="Engagement & Wedding"
          link="/#engagement-wedding-home" // Added link property
          items={[
            { label: 'Coming Soon', link: '/#engagement-wedding-home' },
          ]}
        />

        <DropdownMenu
          id="our-services-menu"
          title="Our Services"
          link="/#our-services-home" // Added link property
          items={[
            { label: 'Coming Soon', link: '/#our-services-home' },
          ]}
        />

        <li>
          <NavLink
            href="/#about-us-section"
            className={`${styles.navLink} ${styles.linkWrapper}`}
            activeClassName={styles.activeLink}
          >
            Ethics & Values
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#contact-us" // Anchor to Contact Section
            className={`button ${styles.linkWrapper}`}
            activeClassName={styles.activeLink}
            aria-label="Contact Us"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavMenu;
