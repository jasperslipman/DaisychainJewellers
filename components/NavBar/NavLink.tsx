// components/NavBar/NavLink.tsx

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'; 

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    [key: string]: any; 
}

const NavLink: React.FC<NavLinkProps> = ({
    href,
    children,
    className = '',
    activeClassName = '',
    ...props
}) => {
    const router = useRouter();
    const isHome = href === '/';
    const isActive = isHome
        ? router.asPath === '/' || router.asPath === '/index'
        : router.asPath === href || router.asPath.startsWith(`${href}#`);

    const combinedClassName = `${className} ${isActive ? activeClassName : ''}`;

    return (
        <Link
            href={href}
            className={combinedClassName}
            {...props}
        >
            {children}
        </Link>
    );
};

export default NavLink;
