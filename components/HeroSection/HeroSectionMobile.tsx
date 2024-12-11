import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSectionMobile: React.FC = () => {
    return (
        <section 
            className={styles.heroSectionMobile} 
            role="banner" 
            aria-label="Daisychain Jewellers introduction"
        >
            <div className={styles.mobileHeroImageContainer}>
                <Image
                    src="/images/photos/daisychain-background.jpg" 
                    alt="Daisychain Jewellers shop front"
                    fill
                    className={styles.mobileHeroImage}
                    loading="eager"
                />
            </div>
            <div className={`${styles.mobileHeroTextSection} main-section-padding section-horizontal-padding`}>
                <div className={styles.heroTextContent}>
                    <h1 className={styles.heroHeader}>
                        Family-Run Jewellers | In-House Workshop
                    </h1>
                    <h2 className={styles.heroSubHeader}>Boxmoor, Hemel Hempstead</h2>
                    <p className={styles.heroParagraph}>
                        With many years of experience, an onsite workshop and showroom, we are bespoke jewellery designers and engagement &amp; wedding ring specialists. We also provide a range of services, from jewellery design to restoration, remodelling, polishing, and repair.
                    </p>
                </div>
                <div>
                    <Link 
                        href="#contact-us" 
                        className={`button secondary ${styles.visitButton}`}
                        aria-label="Go to the contact section to find our address and ways to visit us."
                    >
                        Visit Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionMobile;