import React, { useEffect } from 'react';
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
                        <a href="/" className={styles.mobileNavLink} onClick={toggleMenu}>
                            Home
                        </a>
                    </li>
                    <li className={styles.mobileNavItem}>
                        <span className={styles.mobileNavLink}>Engagement & Wedding</span>
                        <ul className={styles.mobileSubNavList}>
                            <li className={styles.mobileSubNavItem}>
                                <a href="/engagement" className={styles.mobileSubNavLink} onClick={toggleMenu}>
                                    Engagement
                                </a>
                            </li>
                            <li className={styles.mobileSubNavItem}>
                                <a href="/wedding" className={styles.mobileSubNavLink} onClick={toggleMenu}>
                                    Wedding
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.mobileNavItem}>
                        <span className={styles.mobileNavLink}>Our Services</span>
                        <ul className={styles.mobileSubNavList}>
                            <li className={styles.mobileSubNavItem}>
                                <a href="/service1" className={styles.mobileSubNavLink} onClick={toggleMenu}>
                                    Service 1
                                </a>
                            </li>
                            <li className={styles.mobileSubNavItem}>
                                <a href="/service2" className={styles.mobileSubNavLink} onClick={toggleMenu}>
                                    Service 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.mobileNavItem}>
                        <a href="/ethics-values" className={styles.mobileNavLink} onClick={toggleMenu}>
                            Ethics & Values
                        </a>
                    </li>
                    <li className={styles.mobileNavItem}>
                        <a href="/contact" className={`${styles.mobileNavLink} ${styles.contactButton}`} onClick={toggleMenu}>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;

