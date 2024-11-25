import React from 'react';
import styles from './SeasonalSection.module.css';

const SeasonalSection: React.FC = () => {
    return (
        <section className={`${styles.seasonalSection} section-horizontal-padding sub-section-padding`}>
        <div className={`container css-grid`}>
            <div className={`${styles.seasonalContent}`} >
                <h2 className={`${styles.seasonalHeading}`}>Shopping For Christmas?</h2>
                <p className={`${styles.seasonalParagraph}`}>Celebrate this festive season with Daisychain Jewellers' exquisite collection of 
                    Christmas jewelry gifts. Whether you're searching for the perfect piece of jewelry for her this Christmas, a special gift for your wife, or a thoughtful present for mum, we have a stunning selection to choose from.<br/><br/> Explore our range of 
                    women's Christmas jewelry, including elegant diamond Christmas jewelry and beautiful silver Christmas jewelry pieces. Looking for something unique? Our sterling silver Xmas earrings and men's Christmas 
                    jewelry make ideal stocking fillers.</p>
            </div>
        </div>
    </section>
    );
};

export default SeasonalSection;
