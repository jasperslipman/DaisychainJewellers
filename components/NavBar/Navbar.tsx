
import React, { useState } from 'react';
import DaisychainLogo from '../../public/images/logos/daisychain-logo-letter-group.svg';
import HamburgerMenu from './HamburgerMenu';
import DesktopNavMenu from './DesktopMenu';
import styles from './NavBar.module.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header
            className={`${styles.navbarHeader} section-horizontal-padding`}
        >
            <div className="container">
                <nav
                    className="css-grid"
                    aria-label="Main navigation"
                >
                    {/* Logo */}
                    <a
                        href="/"
                        aria-label="Homepage"
                        className={styles.homepageLogoLink}
                    >
                        <DaisychainLogo id="daisychain-letter-logo" />
                    </a>

                    {/* Desktop Navigation Menu */}
                    <DesktopNavMenu />

                    {/* Hamburger Menu for Mobile */}
                    <HamburgerMenu
                        id="hamburger-menu-button"
                        isOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        className={styles.hamburgerMenuButton}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
