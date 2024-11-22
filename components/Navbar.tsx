// components/Navbar.tsx

import React, { useState } from 'react';
import DaisychainLogo from '../public/images/logos/daisychain-logo-letter-group.svg';
import HamburgerMenu from './NavBar/HamburgerMenu';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header id="main-navigation-header" className="section-horizontal-padding">
            <div id="main-nav-container" className="container">
                <nav id="primary-navigation" className="css-grid" aria-label="Main navigation">
                    {/* Logo */}
                    <a href="/" id="homepage-logo-link" aria-label="Homepage">
                        <DaisychainLogo id="daisychain-letter-logo" /> 
                    </a>

                    {/* Navigation Links */}
                    <div id="desktop-nav-menu">
                        <ul id="primary-nav-links" role="menubar">
                            <li role="none">
                                <a className="nav-link link-wrapper" href="/" aria-current="page">
                                    Home
                                </a>
                            </li>

                            <li role="none" className="nav-dropdown link-wrapper">
                                <a className="nav-link" href="/engagement-wedding">
                                    Engagement &amp; Wedding
                                </a>
                                <object
                                    className="dropdown-icon"
                                    type="image/svg+xml"
                                    data="../images/icons/daisychain-drop-down-icon.svg"
                                />
                                {/* Dropdown Menu Placeholder */}
                                <ul className="dropdown-menu" role="menu">
                                    <li role="none">
                                        <a href="/engagement">Engagement</a>
                                    </li>
                                    <li role="none">
                                        <a href="/wedding">Wedding</a>
                                    </li>
                                </ul>
                            </li>

                            <li role="none" className="nav-dropdown link-wrapper">
                                <a className="nav-link" href="/our-services">
                                    Our Services
                                </a>
                                <object
                                    className="dropdown-icon"
                                    type="image/svg+xml"
                                    data="../images/icons/daisychain-drop-down-icon.svg"
                                />
                                {/* Dropdown Menu Placeholder */}
                                <ul className="dropdown-menu" role="menu">
                                    <li role="none">
                                        <a href="/service1">Service 1</a>
                                    </li>
                                    <li role="none">
                                        <a href="/service2">Service 2</a>
                                    </li>
                                </ul>
                            </li>

                            <li role="none">
                                <a className="nav-link link-wrapper" href="/ethics-values">
                                    Ethics &amp; Values
                                </a>
                            </li>
                            <li role="none">
                                <a id="contact-us-cta-button" className="button" href="/contact">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <HamburgerMenu
                        id="hamburger-menu-button"
                        isOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
