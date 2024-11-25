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
    return (
        <div
            className={classNames(
                styles.testimonialCard,
                {
                    [styles.main]: variant === 'main',
                    [styles.secondary]: variant === 'secondary',
                }
            )}
        >
            <div className={`${styles.testimonialCardContent}`}>
                <p className={`${styles.testimonialText}`}>"{text}"</p>
                    <div className={`${styles.daisyReviewChart}`}> 
                    {Array.from({ length: reviews }).map((_, index) => (
                        <DaisyVectorFlower key={index} className={`${styles.daisyReviewImage}`} />
                    ))}
                    </div>
                <p className={`${styles.testimonialAuthor}`}>- {author}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
