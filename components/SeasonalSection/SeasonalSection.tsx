// SeasonalSection.tsx
import React from 'react';
import styles from './SeasonalSection.module.css';
 import ChristmasDecor1 from '../../public/images/decorative/Daisychain-snow-1.svg';
import ChristmasDecor2 from '../../public/images/decorative/Daisychain-snow-2.svg'; 

const SeasonalSection: React.FC = () => {
    return (
        <section
            className={`${styles.seasonalSection} section-horizontal-padding sub-section-padding`}
            aria-labelledby="seasonal-heading"
        >
            <div className={`container css-grid`}>
                <ChristmasDecor1
                    className={styles.seasonalDecor1}
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                /> 
                
                <div className={styles.seasonalContent}>   
                    <h2 id="seasonal-heading" className={styles.seasonalHeading}>
                        Shopping For Christmas?
                    </h2>
                    <p className={styles.seasonalParagraph}>
                        Celebrate this festive season with Daisychain Jewellers' exquisite collection of 
                        Christmas jewelry gifts.
                    </p>

                    <p className={styles.seasonalParagraph}>
                        Whether you're searching for the perfect piece of jewelry for her this Christmas, a special gift for your wife, or a thoughtful present for mum, we have a stunning selection to choose from.
                    </p>

                    <p className={styles.seasonalParagraph}>
                        Explore our range of women's Christmas jewelry, including elegant diamond Christmas jewelry and beautiful silver Christmas jewelry pieces.
                    </p>

                    <p className={styles.seasonalParagraph}>
                        Looking for something unique? Our sterling silver Xmas earrings and men's Christmas 
                        jewelry make ideal stocking fillers.
                    </p>
                </div>
                
                 <ChristmasDecor2
                    className={styles.seasonalDecor2}
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                /> 
            </div>
        </section>
    );
};

export default SeasonalSection;
