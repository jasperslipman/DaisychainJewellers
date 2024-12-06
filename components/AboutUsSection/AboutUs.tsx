// components/AboutUs.jsx or AboutUs.tsx

import React from 'react';
import styles from './AboutUs.module.css';
/* import DaisychainFlowerTransparent from '../../public/images/logos/daisychainjewellers-transparent-flower.svg'; */

const AboutUs: React.FC = () => {
    return (
        <section
            id="about-us-section"
            className={`${styles.aboutUsSection} section-horizontal-padding sub-section-padding`}
            aria-labelledby="about-us-heading"
        >
            <div className={`container css-grid`}> 
                {/* <DaisychainFlowerTransparent className={styles.daisychainVectorFlower} aria-hidden="true" /> */}
                
                <div className={styles.aboutUsContent}> 
                    <h2 id="about-us-heading" className={styles.aboutUsHeading}>
                        About Us
                    </h2>
                    
                    <p className={styles.aboutUsParagraph}>
                        Established in 2000, Daisychain is a family-run, independent jewellers located in the heart of Boxmoor, Hemel Hempstead. 
                    </p>

                    <p className={styles.aboutUsParagraph}>
                        With over two decades of experience, we pride ourselves on offering exceptional craftsmanship and personalized service to our valued customers.
                    </p>
                    
                    <p className={styles.aboutUsParagraph}>
                        With our in-house workshop and showroom, we are passionate about creating high-quality, handcrafted jewellery.
                    </p>

                    <p className={styles.aboutUsParagraph}>
                        As skilled jewellery makers and engagement and wedding ring specialists, we design and craft each piece with meticulous attention to detail.
                    </p>
                    
                    <p className={styles.aboutUsParagraph}>
                        We are committed to ethical sourcing, ensuring that all our stones and materials are responsibly and ethically obtained. 
                    </p>

                    <p className={styles.aboutUsParagraph}>
                        In addition to our services, we offer a comprehensive range of jewellery care, including renewal, remodelling, polishing, and repair.
                    </p>
                </div>
            </div>
        </section>   
    );
};

export default AboutUs;
