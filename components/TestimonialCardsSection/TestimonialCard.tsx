// components/TestimonialCard.tsx

import React from 'react';
import styles from './TestimonialCardsSection.module.css';
import classNames from 'classnames';
import DaisyVectorFlower from '../../public/images/logos/daisychain-vector-flower.svg';

interface TestimonialCardProps {
    text: string;
    author: string;
    reviews: number; 
    variant?: 'main' | 'secondary'; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, reviews, variant = 'secondary' }) => {
    // Ensure reviews are between 0 and 5
    const validReviews = Math.min(Math.max(reviews, 0), 5);
    
    return (
        <div
            className={classNames(
                styles.testimonialCard,
                {
                    [styles.main]: variant === 'main',
                    [styles.secondary]: variant === 'secondary',
                }
            )}
            role="article"
            aria-label={`Testimonial by ${author}`}
        >
            <div className={styles.testimonialCardContent}>
                {/* Use blockquote for semantic quotations */}
                <blockquote className={styles.testimonialText}>"{text}"</blockquote>
                
                {/* Decorative review stars */}
                <div className={styles.daisyReviewChart} aria-hidden="true">
                    {Array.from({ length: validReviews }).map((_, index) => (
                        <DaisyVectorFlower key={index} className={styles.daisyReviewImage} />
                    ))}
                </div>
                
                {/* Visually hidden rating for screen readers */}
                <span className={styles.visuallyHidden}>{`${validReviews} out of 5 stars`}</span>
                
                {/* Author attribution */}
                <p className={styles.testimonialAuthor}>- {author}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
