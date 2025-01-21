'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DataService, BlockList } from '../../data';
import Header from '../header/header';
import Footer from '../footer/footer';
import Demo from '../demo/demo';
import styles from './blocks.module.css';

export default function Blocks({ blockName }) {
    const dataService = new DataService();
    const router = useRouter();
    const currentBlock: BlockList = dataService.getBlockList().find(block => block.url === blockName) || {} as BlockList;
    const { subBlockList: samplesList = [], category, name, description } = currentBlock;
    const navigateToMainPage = () => {
        router.push('/');
    }

    const renderNavigateButton = () => (
        <span
            className={styles['block-header-link-text']}
            onClick={navigateToMainPage}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigateToMainPage()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 20 20" fill="currentColor" height={16} width={16} style={{ verticalAlign: 'top' }}>
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            {" " + category}
        </span>
    );

    const renderSampleContent = (list) => (
        <div key={list.title}>
            <div className={styles['sample-title']}>
                {list.title}
                {renderFigmaButton()}
            </div>
            <div className={styles['sample-description-container']}>
                <div className={styles['sample-description']}>{list.description}</div>
                {renderFigmaButton()}
            </div>
            <Demo blockName={blockName} componentUrl={list.url} />
        </div>
    );

    const renderFigmaButton = () => (
        <a className={styles['figma-button']} href="https://www.figma.com/@Syncfusion" target="_blank" role="button" tabIndex={0}>
            <Image className={styles['figma-icon']} src="/assets/images/sample-browser/figma.svg" alt="Figma Logo" width={20} height={20} />
            <span className={styles['figma-text']}>Get Figma</span>
            <Image className={styles['right-arrow']} src="/assets/images/sample-browser/arrow-right.svg" alt="Go to Figma" width={20} height={20} />
        </a>
    );

    return (
        <>
            <Header />
            <div className={styles['block-header-content']}>
                {renderNavigateButton()}
                <span className={styles['block-header-icon']}>
                    <Image src="/assets/images/sample-browser/chevron-right.svg" alt="Right Chevron" width={16} height={16} />
                </span>
                <span className={styles['block-header-text']}>{name}</span>
            </div>
            <div className={styles['container']}>
                <div className={styles['block-container']}>
                    <Image className={styles['block-image']} src={`/assets/images/sample-browser/${blockName}.png`} alt={`${name} - Image`} width={200} height={120} />
                    <div className={styles['block-section']}>
                        <div className={styles['block-title']}>{name}</div>
                        <div className={styles['block-description']}>{description}</div>
                    </div>
                </div>
                {samplesList.map(renderSampleContent)}
            </div>
            <Footer />
        </>
    );
}
