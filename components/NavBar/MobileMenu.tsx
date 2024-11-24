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
            <ul className={styles.mobileNavList}>
                <li className={styles.mobileNavItem}>
                  
                </li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    </div>
    );
};

export default MobileMenu;

