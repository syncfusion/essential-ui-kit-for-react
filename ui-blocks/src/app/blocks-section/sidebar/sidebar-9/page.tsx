'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar9() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data1: any[] = [
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
    
    const data2: any[] = [
        {
            id: 1,
            field: 'My Inbox',
            fontIcon: 'e-folder'
        },
        {
            id: 2,
            field: 'Chats',
            fontIcon: 'sf-icon-user-chat'
        },
        {
            id: 3,
            field: 'Assigned to me',
            fontIcon: 'e-user'
        },
        {
            id: 4,
            field: 'Scheduled',
            fontIcon: 'e-day'
        },
        {
            id: 5,
            field: 'Archived',
            fontIcon: 'sf-icon-arrow-broken-square-down'
        },
        {
            id: 6,
            field: 'Closed',
            fontIcon: 'e-circle-close'
        }
    ];
    
    const data3: any[] = [
        {
            id: 1,
            field: "Docs"
        },
        {
            id: 2,
            field: "Help"
        }
    ];

    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-9' && blockData.theme) {
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
                        <div id={styles["nested-sidebar"]} style={{ height: '580px' }}>
                            <SidebarComponent key={"sidebar-9-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="328px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="flex h-screen">
                                    <div className="py-4" style={{ width: '72px' }}>
                                        <div className="flex justify-center items-center px-3 mb-2">
                                            <Image src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        </div>
                                        <ListViewComponent className="border-0 e-bigger" dataSource={data1} template={(data: any) => (
                                            <div className="e-list-wrapper flex justify-center items-center">
                                                <span className={`e-icons e-large ${data.fontIcon}`}></span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <div className="pt-4 border-l h-screen border-gray-200 dark:border-gray-700 flex flex-col justify-between" style={{ width: '256px' }}>
                                        <div>
                                            <p className="text-base text-gray-700 dark:text-gray-300 pb-2 px-4">Overview</p>
                                            <ListViewComponent className="border-0" dataSource={data2} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center justify-between ml-1.5 pr-1.5">
                                                    <span className="flex items-center">
                                                        <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                        <span className="text-base font-normal pl-4">{data.field}</span>
                                                    </span>
                                                    {data.field === 'My Inbox' && (
                                                        <span className="e-badge e-badge-info e-badge-pill !px-1.5 e-bigger">99+</span>
                                                    )}
                                                    {data.field === 'Chats' && (
                                                        <span className="e-badge e-badge-info e-badge-pill !px-1.5 e-bigger">10</span>
                                                    )}
                                                </div>)}
                                            ></ListViewComponent>
                                            <hr className="border-gray-200 dark:border-gray-700 m-4" />
                                            <div>
                                                <ListViewComponent className="!border-0" dataSource={data3} template={(data: any) => (
                                                    <div className="e-list-wrapper ml-1.5">
                                                        <span className="text-base font-normal">{data.field}</span>
                                                    </div>
                                                )}
                                                ></ListViewComponent>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-icons e-chevron-left e-large e-flat ml-auto m-4" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
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
                        <div id={styles["nested-sidebar"]} style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-9-bs"} width="328px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="d-flex vh-100">
                                    <div className="py-4 d-flex flex-column align-items-center" style={{ width: '72px' }}>
                                        <div className="d-flex justify-content-center align-items-center px-3 mb-2">
                                            <Image src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        </div>
                                        <ListViewComponent className="border-0 e-bigger" dataSource={data1} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex justify-content-center align-items-center">
                                                <span className={`e-icons e-large ${data.fontIcon}`}></span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <div className="pt-4 vh-100 border-start border-light-subtle opacity-100 d-flex flex-column justify-content-between" style={{ width: '256px' }}>
                                        <div>
                                            <p className="text-body-secondary pb-2 px-3 mb-0 fs-6 mt-2">Overview</p>
                                            <ListViewComponent className="border-0 e-bigger" dataSource={data2} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center justify-content-between ps-1 pe-2">
                                                    <span className="d-flex align-items-center">
                                                        <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                        <span className="fs-6 fw-normal ps-2 ms-1">{data.field}</span>
                                                    </span>
                                                    {data.field === 'My Inbox' && (
                                                        <span className="e-badge e-badge-info e-badge-pill e-bigger px-1">99+</span>
                                                    )}
                                                    {data.field === 'Chats' && (
                                                        <span className="e-badge e-badge-info e-badge-pill e-bigger px-1">10</span>
                                                    )}
                                                </div>)}
                                            ></ListViewComponent>
                                            <p className="m-3 fs-6 text-body-secondary">Others</p>
                                            <div>
                                                <ListViewComponent className="border-0 e-bigger" dataSource={data3} template={(data: any) => (
                                                    <div className="e-list-wrapper px-1">
                                                        <span className="fs-6 fw-normal">{data.field}</span>
                                                    </div>
                                                )}
                                                ></ListViewComponent>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-icons e-chevron-left e-large e-flat ms-auto m-3" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
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
