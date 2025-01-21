'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar12() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '36,888'
        },
        {
            id: 2,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '36,719'
        },
        {
            id: 3,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '24,988'
        },
        {
            id: 4,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '16,588'
        },
        {
            id: 5,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '64,748'
        },
        {
            id: 6,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '54,238'
        },
        {
            id: 7,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '43,777'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-12' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div id={styles["tracker-sidebar"]} className="float-right" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-12-tw"} className="bg-gray-50 dark:bg-gray-900 !border-l !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} position="Right" showBackdrop={true} style={{ display: 'block' }}>
                                <div className="py-6 h-screen">
                                    <div className="flex justify-between items-center px-3 mb-2">
                                        <span className="text-base text-gray-600 dark:text-gray-400">Market Cap</span>
                                        <ButtonComponent className="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                    </div>
                                    <ListViewComponent className="border-0" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                    <Image src={`/assets/images/side-panel/crypto-sidebar/${data.image}`} width={24} height={24} alt="profile picture" />
                                                </span>
                                                <span className="text-base ml-2 text-gray-700 dark:text-gray-300">{data.name}</span>
                                                <span className="ml-1.5 text-xs text-gray-500 dark:text-gray-400" style={{ lineHeight: '18px' }}>BTC</span>
                                            </div>
                                            <div>
                                                <span className="text-base text-gray-700 dark:text-gray-300 ml-6">{data.currentValue}</span>
                                                <span className="text-base ml-1.5 text-red-600 dark:text-red-400">3%</span>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                    <div className="py-4 px-3">
                                        <ButtonComponent className="e-outline" content="View More" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["tracker-sidebar"]} className="float-right" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-12-bs"} width="256px" ref={sidebar} position="Right" showBackdrop={true} isOpen={true} style={{ display: 'block' }}>
                                <div className="py-4 vh-100">
                                    <div className="d-flex justify-content-between align-items-center mb-2 px-2 ms-1">
                                        <span className="fs-6 text-body-secondary">Market Cap</span>
                                        <ButtonComponent className="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                    <Image src={`/assets/images/side-panel/crypto-sidebar/${data.image}`} width={24} height={24} alt="profile picture" />
                                                </span>
                                                <span className="text-body fs-6 ms-2">{data.name}</span>
                                                <span className="ms-1 text-body-secondary !small" style={{ lineHeight: '18px' }}>BTC</span>
                                            </div>
                                            <div>
                                                <span className="text-body fs-6">{data.currentValue}</span>
                                                <span className="fs-6 ms-2 text-danger">3%</span>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                    <div className="mt-3 ms-2 ps-1">
                                        <ButtonComponent className="e-outline" content="View More" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="py-3 px-1 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
