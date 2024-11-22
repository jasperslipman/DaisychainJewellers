import React, { useState, useRef, useEffect } from 'react';
import styles from './NavBar.module.css';

interface DropdownMenuProps {
    id: string;
    title: string;
    items: { label: string; link: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ id, title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <li
            className={`${styles.navDropdown} ${isOpen ? styles.open : ''}`}
            ref={dropdownRef}
        >
            <button
                className={`${styles.navLink} ${styles.linkWrapper}`}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={`${id}-menu`}
                id={id}
                onClick={toggleDropdown}
            >
                {title}
                <span className={styles.dropdownIcon}>▼</span>
            </button>
            {isOpen && (
                <ul
                    className={styles.dropdownMenu}
                    id={`${id}-menu`}
                    role="menu"
                    aria-labelledby={id}
                >
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={styles.dropdownMenuItem}
                            role="none"
                        >
                            <a
                                className={styles.dropdownMenuLink}
                                href={item.link}
                                role="menuitem"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default DropdownMenu;
