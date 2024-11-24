import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
    return (
    <section className={`${styles.aboutUsSection} section-horizontal-padding sub-section-padding`}>
        <div className={`container css-grid`}> 
            <div className={`${styles.aboutUsContent}`}> 
            <h2 className={`${styles.aboutUsHeading}`}>About Us</h2>
            <p className={`${styles.aboutUsParagraph}`}> Established in 2000, Daisychain is a family-run, 
                independent jewellers located in the heart of Boxmoor, Hemel Hempstead. 
                With over two decades of experience, we pride ourselves on offering 
                exceptional craftsmanship and personalized service to our valued customers.<br /> <br />
                With our in-house workshop and showroom, we are passionate about creating 
                high-quality, handcrafted jewellery. As skilled jewellery makers and 
                engagement and wedding ring specialists, we design and craft each piece 
                with meticulous attention to detail.<br /> <br />
                We are committed to ethical sourcing, ensuring that all our stones and 
                materials are responsibly and ethically obtained. In addition to our services, 
                we offer a comprehensive range of jewellery care, including renewal, 
                remodelling, polishing, and repair. Visit us today to discover our
            </p> 
            </div>
        </div>
    </section>   
    );
};

export default AboutUs;