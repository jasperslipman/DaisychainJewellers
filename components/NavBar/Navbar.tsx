// components/NavBar/NavBar.tsx

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import HamburgerMenu from './HamburgerMenu';
import DesktopNavMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const navbarRef = useRef<HTMLElement>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Handle scrolling state
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            // Clear the previous timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set a new timeout to remove the scrolling state after scrolling stops
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 200); // Adjust the timeout duration as needed (200ms)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, []);

    // Dynamically set CSS variable for NavBar height
    useEffect(() => {
        const setNavBarHeight = () => {
            if (navbarRef.current) {
                const navHeight = navbarRef.current.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--navbar-height', `${navHeight}px`);
            }
        };

        setNavBarHeight();

        // Update NavBar height on window resize
        const handleResize = () => {
            setNavBarHeight();
        };

        window.addEventListener('resize', handleResize);

        // Optional: Use ResizeObserver for more precise measurement
        let resizeObserver: ResizeObserver | null = null;
        if (navbarRef.current) {
            resizeObserver = new ResizeObserver(() => {
                setNavBarHeight();
            });
            resizeObserver.observe(navbarRef.current);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeObserver && navbarRef.current) {
                resizeObserver.unobserve(navbarRef.current);
            }
        };
    }, []);

    return (
        <header
            ref={navbarRef}
            className={`${styles.navbarHeader} ${
                isScrolling ? styles.scrolling : ''
            } section-horizontal-padding`}
        >
            <div className="container">
                <nav
                    className="css-grid"
                    aria-label="Main navigation"
                >
                    {/* Logo with Descriptive alt Attribute */}
                    <Link
                        href="/"
                        className={styles.homepageLogoLink}
                        aria-label="Homepage"
                    >
                        <img
                            src="/images/logos/daisychain-logo-letter-group.svg"
                            alt="Daisychain Jewellers Logo"
                            id="daisychain-letter-logo"
                            width={10}
                            height={10}
                        />
                        {/* If you prefer using the SVG component with aria-label:
                        <DaisychainLogo id="daisychain-letter-logo" aria-label="Daisychain Jewellers Logo" />
                        */}
                    </Link>

                    {/* Desktop Navigation Menu */}
                    <DesktopNavMenu />

                    {/* Hamburger Menu for Mobile */}
                    <HamburgerMenu
                        isOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        className={styles.hamburgerButton}
                    />

                    {/* Mobile Navigation Menu */}
                    <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
