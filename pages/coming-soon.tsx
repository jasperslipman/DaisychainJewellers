// pages/coming-soon.tsx

import React from 'react';
import styles from './ComingSoon.module.css'; 
import Link from 'next/link';

const ComingSoonPage: React.FC = () => {
    return (
        <>

            <main className={styles.container}>
                <h1 className={styles.heading}>Coming Soon</h1>
                <p>We're working hard to bring you this page. Stay tuned!</p>
                <Link href="/" className={`button secondary ${styles.visitButton}`}>
                            Back To Home
                </Link>
            </main>
        </>
    );
};

export default ComingSoonPage;