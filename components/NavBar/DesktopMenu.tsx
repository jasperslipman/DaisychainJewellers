// components/Navbar/DesktopMenu.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import DropdownIcon from '../../assets/logos/daisychain-drop-down-icon.svg';

const DesktopMenu: React.FC = () => {
    const [isEngagementDropdownOpen, setEngagementDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const toggleEngagementDropdown = () => {
        setEngagementDropdownOpen((prev) => !prev);
    };

    const toggleServicesDropdown = () => {
        setServicesDropdownOpen((prev) => !prev);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(`.${styles.navDropdown}`)) {
                setEngagementDropdownOpen(false);
                setServicesDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Close dropdowns on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setEngagementDropdownOpen(false);
                setServicesDropdownOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div id="desktop-nav-menu">
            <ul id="primary-nav-links" role="menubar" className={styles.primaryNavLinks}>
                <li role="none" className={styles.navItem}>
                    <Link href="/">
                        <a role="menuitem" className={styles.navLink} aria-current="page">
                            Home
                        </a>
                    </Link>
                </li>

                <li role="none" className={`${styles.navDropdown} ${styles.navItem}`} aria-haspopup="true" aria-expanded={isEngagementDropdownOpen}>
                    <button
                        className={styles.navLinkButton}
                        onClick={toggleEngagementDropdown}
                        aria-haspopup="true"
                        aria-expanded={isEngagementDropdownOpen}
                    >
                        Engagement &amp; Wedding
                        <DropdownIcon className={styles.dropdownIcon} aria-hidden="true" />
                    </button>
                    {isEngagementDropdownOpen && (
                        <ul className={styles.dropdownMenu} role="menu">
                            <li role="none" className={styles.dropdownItem}>
                                <Link href="/engagement">
                                    <a role="menuitem" className={styles.dropdownLink}>Engagement</a>
                                </Link>
                            </li>
                            <li role="none" className={styles.dropdownItem}>
                                <Link href="/wedding">
                                    <a role="menuitem" className={styles.dropdownLink}>Wedding</a>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li role="none" className={`${styles.navDropdown} ${styles.navItem}`} aria-haspopup="true" aria-expanded={isServicesDropdownOpen}>
                    <button
                        className={styles.navLinkButton}
                        onClick={toggleServicesDropdown}
                        aria-haspopup="true"
                        aria-expanded={isServicesDropdownOpen}
                    >
                        Our Services
                        <DropdownIcon className={styles.dropdownIcon} aria-hidden="true" />
                    </button>
                    {isServicesDropdownOpen && (
                        <ul className={styles.dropdownMenu} role="menu">
                            <li role="none" className={styles.dropdownItem}>
                                <Link href="/service1">
                                    <a role="menuitem" className={styles.dropdownLink}>Service 1</a>
                                </Link>
                            </li>
                            <li role="none" className={styles.dropdownItem}>
                                <Link href="/service2">
                                    <a role="menuitem" className={styles.dropdownLink}>Service 2</a>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li role="none" className={styles.navItem}>
                    <Link href="/ethics-values">
                        <a role="menuitem" className={styles.navLink}>
                            Ethics &amp; Values
                        </a>
                    </Link>
                </li>

                <li role="none" className={styles.navItem}>
                    <Link href="/contact">
                        <a role="menuitem" id="contact-us-cta-button" className={`${styles.button} ${styles.navLink}`}>
                            Contact Us
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DesktopMenu;
