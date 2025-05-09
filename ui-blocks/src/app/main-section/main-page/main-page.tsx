'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DataService, BlockList } from '../../data';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main-page.module.css';

export default function MainPage() {
    const dataService = new DataService();
    const router = useRouter();
    const tabs: { title: string }[] = [
        { title: 'Authentication' },
        { title: 'Layouts' },
        { title: 'E-commerce' },
        { title: 'Communication' }
    ];
    const blockList: BlockList[] = dataService.getBlockList();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [currentBlocks, setCurrentBlocks] = useState([] as BlockList[]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('selectedTabIndex');
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        const initialIndex = Number(sessionStorage.getItem('selectedTabIndex')) || dataService.getSelectedCategoryIndex();
        setActiveTabIndex(initialIndex);
        updateCurrentBlocks(initialIndex);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const selectTab = (index: number) => {
        setActiveTabIndex(index);
        dataService.setSelectedCategoryIndex(index);
        updateCurrentBlocks(index);
        sessionStorage.setItem('selectedTabIndex', index.toString());
    }

    const updateCurrentBlocks = (index: number) => {
        const activeTab = tabs[index];
        if (activeTab) {
            const activeTabTitle: string = activeTab.title;
            setCurrentBlocks(blockList.filter(block => block.category === activeTabTitle));
        } else {
            setCurrentBlocks([]);
        }
    }

    const navigateToDemo = (url: string) => {
        router.push(`/${url}`);
    }

    return (
        <>
            <Header />
            <div className={styles['main-container']}>
                <div className={styles['main-container-header']}>
                    <h1 className={styles['main-title']}>Develop Apps Faster with Pre-Built Blocks</h1>
                    <p className={styles['main-description']}>
                        Accelerate your web app development with 175+ responsive blocks for React, fully compatible with Tailwind and Bootstrap 5.3.
                    </p>
                    <div className={styles['button-container']}>
                        <a href="https://www.syncfusion.com/feedback/react" target="_blank" className={styles['request-btn']} role="button" tabIndex={0} rel="noopener noreferrer" aria-label="Request a block">
                            Request a Block
                        </a>
                        <a href="https://www.figma.com/@Syncfusion" target="_blank" className={styles['figma-btn']} role="button" tabIndex={0} rel="noopener noreferrer" aria-label="Download Figma">
                            <span className={styles['figma-img']}>
                                <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/figma.svg" alt="Figma Logo" width={20} height={20} />
                            </span>
                            Download Figma
                        </a>
                    </div>
                </div>
                <div className={styles['component-div']}>
                    <div className={styles['tab-container']} role="tablist">
                        <ul id="block-tab" className={styles['tabs']}>
                            {tabs.map((tab, i) => (
                                <li
                                    key={i}
                                    className={`${styles['tab-item']} ${i === activeTabIndex ? styles['active'] : ''}`}
                                    role="tab"
                                    aria-selected={i === activeTabIndex}
                                    tabIndex={0}
                                    onClick={() => selectTab(i)}
                                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && selectTab(i)}>
                                    {tab.title}
                                </li>
                            ))}
                        </ul>
                        <div className={styles['tab-content']}>
                            {tabs.map((_, i) => (
                                <div key={i}>
                                    {activeTabIndex === i && (
                                        <div className={styles['component-list-blocks']} role="tabpanel" aria-labelledby={`tab-${i}`}>
                                            <div className={styles['component-list-container']}>
                                                <ul className={styles['components']}>
                                                    {currentBlocks.map((block) => (
                                                        <li
                                                            key={block.url}
                                                            className={styles['component-list']}
                                                            role="button"
                                                            tabIndex={0}
                                                            title={block.name}
                                                            onClick={() => navigateToDemo(block.url)}
                                                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigateToDemo(block.url)}>
                                                            <div className={styles['component-list-text']}>
                                                                {block.name}
                                                                {(block.isNew || block.isUpdated) && (
                                                                    <span className={`${styles['sampleStatus']} ${block.isNew ? styles['newStatus'] : ''} ${block.isUpdated ? styles['updatedStatus'] : ''}`}>
                                                                        {block.isNew ? 'New' : (block.isUpdated ? 'Updated' : '')}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className={styles['component-count']}>{`${block.subBlockList.length} Blocks`}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={styles['blocks-list']}>
                                                {currentBlocks.map((block) => (
                                                    <div
                                                        key={block.url}
                                                        className={styles['blocks-col']}
                                                        role="button"
                                                        tabIndex={0}
                                                        onClick={() => navigateToDemo(block.url)}
                                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigateToDemo(block.url)}>
                                                        <div className={styles['block-container']}>
                                                            <div className={styles['block-content']}>
                                                                <img
                                                                    src={`/react/essential-ui-kit/blocks/assets/images/sample-browser/${block.url}.png`}
                                                                    alt={`${block.name} - Image`}
                                                                    style={{ height: '100%', width: '100%' }}
                                                                    width={320}
                                                                    height={180} />
                                                            </div>
                                                            <div className={styles['block-footer']} title={block.name}>
                                                                <div className={styles['block-title']}>
                                                                    {block.name}
                                                                    {(block.isNew || block.isUpdated) && (
                                                                        <span className={`${styles['sampleStatus']} ${block.isNew ? styles['newStatus'] : ''} ${block.isUpdated ? styles['updatedStatus'] : ''}`}>
                                                                            {block.isNew ? 'New' : (block.isUpdated ? 'Updated' : '')}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <div className={styles['block-count']}>
                                                                    <div className={styles['block-count-radius']}>{`${block.subBlockList.length} Blocks`}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
