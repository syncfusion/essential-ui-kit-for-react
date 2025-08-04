'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Sidebar10() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [backDrop, setBackDrop] = useState(false);
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
    
    const handleResize = (): void => {
        setBackDrop(window.innerWidth <= 640);
    };
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-10' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);
        /* SB Code - End */
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div id={styles["quick-access-sidebar"]} className="flex relative" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-10-tw"} ref={sidebar} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="72px" isOpen={true} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="pt-6">
                                    <div className="flex justify-center items-center mb-3 px-3">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper flex justify-center items-center">
                                            <span className={`e-large e-icons ${data.fontIcon}`}></span>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </SidebarComponent>
                            <div className="p-3 bottom-0 left-0 absolute !right-full" style={{ zIndex: '1000' }}>
                                <ButtonComponent cssClass="e-bigger e-round" iconCss="e-icons e-chevron-left !text-xl" type="button"></ButtonComponent>
                            </div>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 left-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-right" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["quick-access-sidebar"]} className="d-flex position-relative" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-10-bs"} ref={sidebar} className="border-end border-light-subtle" width="72px" isOpen={true} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="pt-4 d-flex flex-column align-items-center">
                                    <div className="d-flex justify-content-center align-items-center px-3 mb-2">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper d-flex justify-content-center align-items-center">
                                            <span className={`e-large e-icons ${data.fontIcon}`}></span>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </SidebarComponent>
                            <div className="py-3 px-1 position-absolute bottom-0 start-0" style={{ zIndex: '1000' }}>
                                <ButtonComponent cssClass="e-bigger e-round e-outline" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                            </div>
                        </div>
                        {/* SB Code - Start */}
                        <div className="py-3 px-1 position-absolute top-0 start-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-right" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
