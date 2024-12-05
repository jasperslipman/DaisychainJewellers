// components/NavBar/MobileMenu.tsx

import React, { useEffect } from 'react';
import NavLink from './NavLink'; 
import styles from './NavBar.module.css';

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div
            className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
            id="mobile-menu"
            aria-hidden={!isOpen}
        >
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
                
                <h2 className={styles.menuHeader}>Menu</h2>

                <ul className={styles.mobileNavList}>
                    <li className={styles.mobileNavItem}>
                        <NavLink
                            href="/"
                            className={styles.mobileNavLink}
                            activeClassName={styles.activeLink}
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    
                    {/* Engagement & Wedding */}
                    <li className={styles.mobileNavItem}>
                        <NavLink
                            href="/#engagement-wedding-home"
                            className={styles.mobileNavLink}
                            activeClassName={styles.activeLink}
                            onClick={toggleMenu}
                        >
                            Engagement &amp; Wedding
                        </NavLink>
                        <ul className={styles.mobileSubNavList}>
                            <li className={styles.mobileSubNavItem}>
                                <NavLink
                                    href="/#engagement-wedding-home"
                                    className={styles.mobileSubNavLink}
                                    activeClassName={styles.activeLink}
                                    onClick={toggleMenu}
                                >
                                    Coming Soon
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    
                    {/* Our Services */}
                    <li className={styles.mobileNavItem}>
                        <NavLink
                            href="/#our-services-home"
                            className={styles.mobileNavLink}
                            activeClassName={styles.activeLink}
                            onClick={toggleMenu}
                        >
                            Our Services
                        </NavLink>
                        <ul className={styles.mobileSubNavList}>
                            <li className={styles.mobileSubNavItem}>
                                <NavLink
                                    href="/#our-services-home"
                                    className={styles.mobileSubNavLink}
                                    activeClassName={styles.activeLink}
                                    onClick={toggleMenu}
                                >
                                    Coming Soon
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    
                    <li className={styles.mobileNavItem}>
                        <NavLink
                            href="/#about-us-section"
                            className={styles.mobileNavLink}
                            activeClassName={styles.activeLink}
                            onClick={toggleMenu}
                        >
                            Ethics &amp; Values
                        </NavLink>
                    </li>
                    
                    <li className={styles.mobileNavItem}>
                        <NavLink
                            href="#contact-us" // Anchored to Contact Section
                            className={`${styles.mobileNavLink} ${styles.contactButton}`}
                            activeClassName={styles.activeLink}
                            aria-label="Contact Us"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;
