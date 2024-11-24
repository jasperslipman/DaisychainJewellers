import React, { useState, useEffect } from 'react';
import DaisychainLogo from '../../public/images/logos/daisychain-logo-letter-group.svg';
import HamburgerMenu from './HamburgerMenu';
import DesktopNavMenu from './DesktopMenu';
import styles from './NavBar.module.css';
import MobileNavMenu from './MobileMenu';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    let scrollTimeout: NodeJS.Timeout;

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            // Clear the previous timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // Set a new timeout to remove the scrolling state after scrolling stops
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 200); // Adjust the timeout duration as needed (200ms)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);

    return (
        <header
            className={`${styles.navbarHeader} ${
                isScrolling ? styles.scrolling : ''
            } section-horizontal-padding`}
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
                        isOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        className={styles.hamburgerButton}
                    />

                    {/* Mobile Navigation Menu */}
                    <MobileNavMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
