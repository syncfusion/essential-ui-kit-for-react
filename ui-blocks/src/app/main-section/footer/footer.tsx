'use client';

import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles['footer-content']} role="contentinfo">
            <div>Copyright &copy; 2001 - {new Date().getFullYear()} Syncfusion, Inc. All Rights Reserved</div>
            <div className={styles['footer-right']}>
                <a href="https://www.syncfusion.com/privacy" target="_blank" rel="noopener noreferrer" className={styles['policy-link']} aria-label="Syncfusion Privacy Policy">Privacy Policy</a>
                <a href="https://ej2.syncfusion.com/react/documentation/ui-kit/overview" target="_blank" rel="noopener noreferrer" className={styles['document-link']} aria-label="Documentation for Essential Studio UI Kit (React)">Documentation</a>
            </div>
        </footer>
    );
}
