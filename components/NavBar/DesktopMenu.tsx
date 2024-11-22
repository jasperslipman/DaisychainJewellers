import React from 'react';
import DropdownMenu from './DropdownMenu';
import styles from './NavBar.module.css';

const DesktopNavMenu: React.FC = () => {
    return (
        <div className={styles.desktopNavMenu}>
            <ul className={styles.primaryNavLinks}>
                <li>
                    <a
                        className={`${styles.navLink} ${styles.linkWrapper}`}
                        href="/"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>

                <DropdownMenu
                    id="engagement-wedding-menu"
                    title="Engagement & Wedding"
                    items={[
                        { label: 'Engagement', link: '/engagement' },
                        { label: 'Wedding', link: '/wedding' },
                    ]}
                />

                <DropdownMenu
                    id="our-services-menu"
                    title="Our Services"
                    items={[
                        { label: 'Service 1', link: '/service1' },
                        { label: 'Service 2', link: '/service2' },
                    ]}
                />

                <li>
                    <a
                        className={`${styles.navLink} ${styles.linkWrapper}`}
                        href="/ethics-values"
                    >
                        Ethics & Values
                    </a>
                </li>
                <li>
                    <a
                        id="contact-us-cta-button"
                        className={`button ${styles.linkWrapper}`}
                        href="/contact"
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default DesktopNavMenu;
