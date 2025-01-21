'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar10() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            fontIcon: 'e-home'
        },
        {
            id: 2,
            fontIcon: 'e-user'
        },
        {
            id: 3,
            fontIcon: 'e-bookmark'
        },
        {
            id: 4,
            fontIcon: 'e-chart'
        },
        {
            id: 5,
            fontIcon: 'e-clock'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-10' && blockData.theme) {
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
                        <div id={styles["quick-access-sidebar"]} className="flex relative" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-10-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="72px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="pt-6">
                                    <div className="flex justify-center items-center mb-3 px-3">
                                        <Image src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper flex justify-center items-center">
                                            <span className={`e-large e-icons ${data.fontIcon}`}></span>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </SidebarComponent>
                            <div className="p-3 bottom-0 left-0 absolute !right-full">
                                <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button"></ButtonComponent>
                            </div>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 left-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["quick-access-sidebar"]} className="d-flex position-relative" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-10-bs"} className="border-end border-light-subtle" width="72px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="pt-4 d-flex flex-column align-items-center">
                                    <div className="d-flex justify-content-center align-items-center px-3 mb-2">
                                        <Image src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper d-flex justify-content-center align-items-center">
                                            <span className={`e-large e-icons ${data.fontIcon}`}></span>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </SidebarComponent>
                            <div className="py-3 px-1 position-absolute bottom-0 start-0">
                                <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button"></ButtonComponent>
                            </div>
                        </div>
                        {/* SB Code - Start */}
                        <div className="py-3 px-1 position-absolute top-0 start-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
