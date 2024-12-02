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
  isReversed?: boolean;
  gridRow?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  altText,
  heading,
  paragraph,
  isReversed = false,
  gridRow,
}) => {
  return (
    <article
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
          layout="fill" // Allows the image to fill the parent container
          objectFit="cover" // Ensures the image covers the container without distortion
          className={styles.serviceImage}
          placeholder="blur" // Shows a blurred placeholder while loading
          blurDataURL="../images/photos/daisychain-engagement-wedding-image-blur.jpg" // Ensure this image exists
        />
      </div>

      {/* Text Content */}
      <div className={styles.serviceTextContent}>
        <h2 className={styles.serviceHeading} aria-label={`Service: ${heading}`}>
          {heading}
        </h2>
        <p className={styles.serviceParagraph}>{paragraph}</p>
        <Link
          href="/coming-soon"
          className="button"
          aria-label={`Learn more about ${heading}`}
        >
          Learn More
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
