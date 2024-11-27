// DesktopMenu.tsx

import React from 'react';
import Link from 'next/link'; // Import Link
import DropdownMenu from './DropdownMenu';
import styles from './NavBar.module.css';

const DesktopNavMenu: React.FC = () => {
    return (
        <div className={styles.desktopNavMenu}>
            <ul className={styles.primaryNavLinks}>
                <li>
                    <Link
                        href="/"
                        className={`${styles.navLink} ${styles.linkWrapper}`}
                        aria-current="page"
                    >
                        Home
                    </Link>
                </li>

                <DropdownMenu
                    id="engagement-wedding-menu"
                    title="Engagement & Wedding"
                    items={[
                        { label: 'Engagement', link: '/engagement-wedding#engagement' }, // Anchor Link
                        { label: 'Wedding', link: '/engagement-wedding#wedding' }, // Anchor Link
                    ]}
                />

                <DropdownMenu
                    id="our-services-menu"
                    title="Our Services"
                    items={[
                        { label: 'Service 1', link: '/coming-soon#service1' }, // Redirect to Coming Soon
                        { label: 'Service 2', link: '/coming-soon#service2' }, // Redirect to Coming Soon
                    ]}
                />

                <li>
                    <Link
                        href="/ethics-values"
                        className={`${styles.navLink} ${styles.linkWrapper}`}
                    >
                        Ethics & Values
                    </Link>
                </li>
                <li>
                    <Link
                        href="#contact-us" // Anchor to Contact Section
                        className={`button ${styles.linkWrapper}`}
                        aria-label="Contact Us"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DesktopNavMenu;
