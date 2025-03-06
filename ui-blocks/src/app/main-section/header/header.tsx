'use client';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles['header-content']} role="banner">
            <div className={styles['title-container']}>
                <span className={styles['ui-kit-img']}>
                    <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/ui-kit.png" alt="Essential UI Kit for React: Logo" width={40} height={40} />
                </span>
                <div>
                    <div className={styles['title-text']}>Essential UI Kit</div>
                    <div className={styles['platform-text']}>for React</div>
                </div>
            </div>
            <div className={styles['header-right']} aria-label="Links to Documentation and GitHub Repository">
                <a href="https://ej2.syncfusion.com/react/documentation/ui-kit/overview" target="_blank" className={`${styles['header-link']} ${styles['header-text']}`} aria-label="Documentation for Essential Studio UI Kit (React)" tabIndex={0}>
                    Documentation
                </a>
                <a href="https://github.com/syncfusion/essential-ui-kit-for-react" target="_blank" className={styles['github-logo']} aria-label="GitHub Repository: Essential Studio UI Kit for React" tabIndex={0}>
                    <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/github.svg" alt="GitHub Logo" width={24} height={24} />
                </a>
            </div>
        </header>
    );
}
