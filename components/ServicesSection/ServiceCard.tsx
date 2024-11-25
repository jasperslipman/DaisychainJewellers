import React from 'react';
import styles from './ServicesSection.module.css';

interface ServiceCardProps {
    imageSrc: string;
    altText: string;
    heading: string;
    paragraph: string;
    isReversed?: boolean;
    onLearnMore?: () => void;
    gridRow?: number;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({
    imageSrc,
    altText,
    heading,
    paragraph,
    isReversed = false,
    onLearnMore,
    gridRow,
  }) => {
    return (
      <div
        className={`${styles.serviceCard} ${
          isReversed ? styles.reversed : ''
        }`}
        style={gridRow ? { gridRow: gridRow } : {}}
      >
        <img className={styles.serviceImage} src={imageSrc} alt={altText} />
        <div className={styles.serviceTextContent}>
          <h2 className={styles.serviceHeading}>{heading}</h2>
          <p className={styles.serviceParagraph}>{paragraph}</p>
          <button className="button" onClick={onLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;