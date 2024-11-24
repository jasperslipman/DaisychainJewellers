import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
    return (
        <section className={`${styles.heroSection} main-section-padding section-horizontal-padding`}>
        <div className={`${styles.heroContainer} container css-grid`}>
            <div className={`${styles.heroCard}`}> 
                <div className={`${styles.heroTextContent}`}> 
                    <h1 className={`${styles.heroHeader}`}>Family-Run Jewellers | In-House Workshop</h1>
                    <h2 className={`${styles.heroHeader}`}>Boxmoor, Hemel Hempstead</h2>
                    <p className={`${styles.heroParagraph}`}> With many years of experience, an onsite workshop and showroom, we are bespoke jewellery designers and engagement & wedding ring specialists. We also provide a range of services, from jewellery design to 
                        restoration, remodelling, polishing, and repair.</p>
                </div>
                
                <div><button className={`button secondary`}> Visit Us</button></div>
            </div>
            
        </div> 
    </section>  
    );
};

export default HeroSection;