// components/TestimonialCardsSection.tsx

import React from 'react';
import Head from 'next/head';
import styles from './TestimonialCardsSection.module.css';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
    text: string;
    author: string;
    reviews: number;
}

const testimonials: Testimonial[] = [
    {
        text: "Had my engagement ring and wedding ring made here as well as my husband’s wedding ring. We have already had so many compliments. Couldn’t be happier would highly recommend. Thank you Marc and Pam.",
        author: "Laura Donghi",
        reviews: 5,
    },
    {
        text: "Can’t recommend Daisy Chain enough. They made a wedding ring for me around my engagement ring, provided me a sample made so I could take away and wear for a few days. They were so knowledgeable, trustworthy and wouldn’t go anywhere else for jewellery in the future. I’m so happy with my ring, even better than I envisioned. Thank you!",
        author: "Courtney Williams",
        reviews: 5,
    },
    {
        text: "Brilliant shop, helpful and friendly staff, and the jewellery they sell is so different from the run of the mill jewellers, been there several times, always come away impressed, wouldn't use any other jewellers.",
        author: "Don Affleck",
        reviews: 5,
    },
];

const TestimonialCardsSection: React.FC = () => {
    // Prepare structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": testimonials.map((testimonial, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": testimonial.author
                },
                "reviewBody": testimonial.text,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": testimonial.reviews,
                    "bestRating": "5"
                }
            }
        }))
    };

    return (
        <>
            <Head>
                <title>Customer Testimonials - Daisychain Jewellers</title>
                <meta name="description" content="Read testimonials from our satisfied customers about their experiences with Daisychain Jewellers, specializing in bespoke engagement and wedding rings." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>
            <section
                className={`${styles.testimonialsCardsSection} section-horizontal-padding sub-section-padding`}
                aria-labelledby="testimonials-heading"
            >
                <div className={`container css-grid`}>
                    <div className={styles.testimonialsCardsTextContent}>
                        <h2 id="testimonials-heading" className={styles.testimonialsCardsHeading}>
                            Testimonials
                        </h2>
                        <p className={styles.testimonialsCardsParagraph}>
                            Read what our customers have to say about their experiences with Daisychain Jewellers. We're proud to share testimonials highlighting our craftsmanship, personalized service, and dedication to meeting all your bespoke jewellery needs.
                        </p>
                    </div>
                    
                    {/* Wrap testimonials in a list */}
                    <ul className={styles.testimonialsCardsHolder}>
                        {testimonials.map((testimonial, index) => (
                            <li className={styles.liCard} key={index}>
                                <TestimonialCard
                                    text={testimonial.text}
                                    author={testimonial.author}
                                    reviews={testimonial.reviews}
                                    variant={index === 1 ? 'main' : 'secondary'} // Middle card is 'main'
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default TestimonialCardsSection;
