// components/NavBar/MobileMenu.tsx

import React, { useEffect, useState } from 'react';
import NavLink from './NavLink'; 
import styles from './NavBar.module.css';

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

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

    const handleSubMenuToggle = (id: string) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

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
                    <li className={styles.mobileNavItem}>
                        <button
                            className={styles.mobileNavLinkButton}
                            onClick={() => handleSubMenuToggle('engagement-wedding')}
                            aria-haspopup="true"
                            aria-expanded={openSubMenus['engagement-wedding'] || false}
                            aria-controls="engagement-wedding-submenu"
                        >
                            Engagement &amp; Wedding
                        </button>
                        {openSubMenus['engagement-wedding'] && (
                            <ul
                                className={styles.mobileSubNavList}
                                id="engagement-wedding-submenu"
                                role="menu"
                            >
                                <li className={styles.mobileSubNavItem} role="none">
                                    <NavLink
                                        href="/coming-soon#engagement"
                                        className={styles.mobileSubNavLink}
                                        activeClassName={styles.activeLink}
                                        onClick={toggleMenu}
                                        role="menuitem"
                                    >
                                        Engagement
                                    </NavLink>
                                </li>
                                <li className={styles.mobileSubNavItem} role="none">
                                    <NavLink
                                        href="/coming-soon#wedding"
                                        className={styles.mobileSubNavLink}
                                        activeClassName={styles.activeLink}
                                        onClick={toggleMenu}
                                        role="menuitem"
                                    >
                                        Wedding
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={styles.mobileNavItem}>
                        <button
                            className={styles.mobileNavLinkButton}
                            onClick={() => handleSubMenuToggle('our-services')}
                            aria-haspopup="true"
                            aria-expanded={openSubMenus['our-services'] || false}
                            aria-controls="our-services-submenu"
                        >
                            Our Services
                        </button>
                        {openSubMenus['our-services'] && (
                            <ul
                                className={styles.mobileSubNavList}
                                id="our-services-submenu"
                                role="menu"
                            >
                                <li className={styles.mobileSubNavItem} role="none">
                                    <NavLink
                                        href="/coming-soon#service1"
                                        className={styles.mobileSubNavLink}
                                        activeClassName={styles.activeLink}
                                        onClick={toggleMenu}
                                        role="menuitem"
                                    >
                                        Service 1
                                    </NavLink>
                                </li>
                                <li className={styles.mobileSubNavItem} role="none">
                                    <NavLink
                                        href="/coming-soon#service2"
                                        className={styles.mobileSubNavLink}
                                        activeClassName={styles.activeLink}
                                        onClick={toggleMenu}
                                        role="menuitem"
                                    >
                                        Service 2
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={styles.mobileNavItem}>
                        <NavLink
                            href="/ethics-values"
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
