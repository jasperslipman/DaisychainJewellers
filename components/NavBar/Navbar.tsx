// components/NavBar/NavBar.tsx

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import HamburgerMenu from './HamburgerMenu';
import DesktopNavMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import DaisychainLogo from '../../public/images/logos/daisychain-logo-letter-group.svg';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const navbarRef = useRef<HTMLElement>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 200); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, []);

    useEffect(() => {
        const setNavBarHeight = () => {
            if (navbarRef.current) {
                const navHeight = navbarRef.current.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--navbar-height', `${navHeight}px`);
            }
        };

        setNavBarHeight();

        const handleResize = () => {
            setNavBarHeight();
        };

        window.addEventListener('resize', handleResize);

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
                    <Link
                        href="/"
                        className={styles.homepageLogoLink}
                        aria-label="Homepage"
                    >
                       
                        <DaisychainLogo className={`${styles.daisychainLogo}`} aria-label="Daisychain Jewellers Logo" />
                    
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
