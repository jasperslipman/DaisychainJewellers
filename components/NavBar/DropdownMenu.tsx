import React, { useState, useRef, useEffect } from 'react';
import styles from './NavBar.module.css';
import DropdownIcon from '../../public/images/icons/daisychain-drop-down-icon.svg';

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li
      className={`${styles.navDropdown} ${isOpen ? styles.open : ''}`}
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
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
        <DropdownIcon className={styles.dropdownIcon} />
      </button>
      {isOpen && (
        <ul
          className={styles.dropdownMenu}
          id={`${id}-menu`}
          role="menu"
          aria-labelledby={id}
        >
          {items.map((item, index) => (
            <li key={index} className={styles.dropdownMenuItem} role="none">
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