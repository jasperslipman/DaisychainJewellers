// ServiceCard.tsx
import React from 'react';
import styles from './ServicesSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

interface ServiceCardProps {
  imageSrc: string;
  altText: string;
  heading: string;
  paragraph: string;
  paragraph2?: string;
  paragraph3?: string;
  isReversed?: boolean;
  gridRow?: number;
  sectionId: string; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  altText,
  heading,
  paragraph,
  paragraph2,
  paragraph3,
  isReversed = false,
  gridRow,
  sectionId,
}) => {
  return (
    <article
      id={sectionId}
      className={classNames(styles.serviceCard, {
        [styles.reversed]: isReversed,
      })}
      style={gridRow ? { gridRow: gridRow } : {}}
    >
      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={altText}
          fill 
          style={{ objectFit: 'cover' }}
          className={styles.serviceImage}
          placeholder="blur"
          blurDataURL="/images/photos/daisychain-engagement-wedding-image-blur.jpg" 
        />
      </div>

      {/* Text Content */}
      <div className={styles.serviceTextContent}>
        <h2 className={styles.serviceHeading}>{heading}</h2>
        <p className={styles.serviceParagraph}>{paragraph}</p>
        <p className={styles.serviceParagraph}>{paragraph2}</p>
        <p className={styles.serviceParagraph}>{paragraph3}</p>
        <Link
          href="/coming-soon"
          aria-label={`Learn more about ${heading}`}
          className="button"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
