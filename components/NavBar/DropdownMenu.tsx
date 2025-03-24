// components/NavBar/DropdownMenu.tsx

import React, { useState, useRef, useEffect } from 'react';
import NavLink from './NavLink'; 
import styles from './NavBar.module.css';
import DropdownIcon from '../../public/images/icons/daisychain-drop-down-icon.svg'; 
import { useRouter } from 'next/router';

interface DropdownMenuProps {
  id: string;
  title: string;
  link: string; 
  items: { label: string; link: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ id, title, link, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  
  const isActive =
    router.asPath === link ||
    items.some(
      (item) =>
        router.asPath === item.link || router.asPath.startsWith(`${item.link}#`)
    );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        dropdownRef.current?.querySelector('a')?.focus(); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <li
      className={`${styles.navDropdown} ${isOpen ? styles.open : ''} ${
        isActive ? styles.activeLink : ''
      }`}
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (
          !dropdownRef.current?.contains(e.relatedTarget as Node)
        ) {
          setIsOpen(false);
        }
      }}
    >
      <NavLink
        href={link}
        className={`${styles.navLink} ${styles.linkWrapper}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`${id}-menu`}
        id={id}
      >
        {title}
        <DropdownIcon className={styles.dropdownIcon} aria-hidden="true" /> 
      </NavLink>
      {isOpen && (
        <ul
          className={styles.dropdownMenu}
          id={`${id}-menu`}
          role="menu"
          aria-labelledby={id}
        >
          {items.map((item, index) => (
            <li key={index} className={styles.dropdownMenuItem} role="none">
              <NavLink
                href={item.link}
                className={styles.dropdownMenuLink}
                role="menuitem"
                activeClassName={styles.activeLink}
                onClick={() => setIsOpen(false)} 
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
