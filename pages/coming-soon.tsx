// pages/coming-soon.tsx

import React from 'react';
import styles from './ComingSoon.module.css'; // Create this CSS module

const ComingSoonPage: React.FC = () => {
    return (
        <>

            <main className={styles.container}>
                <h1>Coming Soon</h1>
                <p>We're working hard to bring you this page. Stay tuned!</p>
            </main>
        </>
    );
};

export default ComingSoonPage;