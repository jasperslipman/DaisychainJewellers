import React, { useState } from 'react';
import styles from './NavBar.module.css'; 

interface HamburgerMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isOpen: boolean;
    toggleMenu: () => void;
  }
  
  const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, ...rest }) => {
    return (
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        {...rest} 
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    );
  };
  
  export default HamburgerMenu;
