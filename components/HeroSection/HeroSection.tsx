// HeroSection.tsx

import React from 'react';
import Link from 'next/link'; 
import styles from './HeroSection.module.css';
import Image from 'next/image';
import HeroSectionMobile from './HeroSectionMobile';
import HeroSectionDesktop from './HeroSectionDesktop';

const HeroSection: React.FC = () => {
    return (
        <div>
            <HeroSectionMobile /> 
            <HeroSectionDesktop />
        </div>
    );
};

export default HeroSection;
