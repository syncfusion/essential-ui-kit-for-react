'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar4() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data1: any[] = [
        {
            id: 1,
            field: 'Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 2,
            field: 'Revenue',
            fontIcon: 'sf-icon-dollar'
        },
        {
            id: 3,
            field: 'Notifications',
            fontIcon: 'sf-icon-notification-bell-01'
        },
        {
            id: 4,
            field: 'Analytics',
            fontIcon: 'e-chart'
        },
        {
            id: 5,
            field: 'Wallets',
            fontIcon: 'e-select-all'
        }
    ];

    const data2: any[] = [
        {
            id: 1,
            field: 'Sales',
            fontIcon: 'sf-icon-dollar'
        },
        {
            id: 2,
            field: 'Design',
            fontIcon: 'sf-icon-desktop-01'
        },
        {
            id: 3,
            field: 'Fundraising',
            fontIcon: 'sf-icon-dollar'
        },
        {
            id: 4,
            field: 'Internal',
            fontIcon: 'e-comment-show'
        },
        {
            id: 5,
            field: 'Customer Success',
            fontIcon: 'sf-icon-user-tick-02'
        },
        {
            id: 6,
            field: 'Networking',
            fontIcon: 'sf-icon-laptop'
        },
        {
            id: 7,
            field: 'Legal',
            fontIcon: 'e-notes'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-4' && blockData.theme) {
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
                        <div id={styles["revenue-sidebar"]} style={{ height: '730px' }}>
                            <SidebarComponent key={"sidebar-4-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="h-screen">
                                    <div className="flex justify-between items-center p-4">
                                        <div className="flex items-center">
                                            <span className="e-avatar e-avatar-circle e-avatar-small">
                                                <Image src="/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                            </span>
                                            <div className="ml-3">
                                                <div className="text-base font-medium leading-normal text-gray-900 dark:text-white">John Wick</div>
                                                <p className="mb-0 text-gray-900 dark:text-white">johnwick&#64;123.com</p>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-icons e-chevron-down-double e-large e-flat px-1" type="button"></ButtonComponent>
                                    </div>
                                    <div className="px-4 py-3">
                                        <div className="e-input-group">
                                            <span className="e-input-group-icon e-icons e-search"></span>
                                            <input className="e-input !pl-0" type="text" placeholder="Search projects" />
                                        </div>
                                    </div>
                                    <div>
                                        <ListViewComponent className="border-0" dataSource={data1} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center px-1">
                                                <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                <span className="text-base font-normal pl-4">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <hr className="mx-4 my-3 border-gray-200 dark:border-gray-700" />
                                    <div>
                                        <div className="flex justify-between items-center px-4 py-3">
                                            <span className="text-base text-gray-900 dark:text-white">Collection</span>
                                            <ButtonComponent cssClass="e-icons e-circle-add e-medium e-flat" type="button"></ButtonComponent>
                                        </div>
                                        <div>
                                            <ListViewComponent className="border-0" dataSource={data2} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                    <span className="text-base font-normal pl-4">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <div className="p-4">
                                            <ButtonComponent iconCss="e-icons e-plus e-medium" cssClass="e-outline w-full" type="button" content="Add Collection"></ButtonComponent>
                                        </div>
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
                        <div id={styles["revenue-sidebar"]} style={{ height: '730px' }}>
                            <SidebarComponent key={"sidebar-4-bs"} width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="vh-100">
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="e-avatar e-avatar-circle e-avatar-small">
                                                <Image src="/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                            </span>
                                            <div className="ms-3">
                                                <div className="fs-6 fw-medium text-body">John Wick</div>
                                                <p className="mb-0 text-body-secondary">johnwick&#64;123.com</p>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat" type="button"></ButtonComponent>
                                    </div>
                                    <div className="px-3">
                                        <div className="e-input-group">
                                            <span className="e-input-group-icon e-icons e-search border-end-0"></span>
                                            <input className="e-input" type="text" placeholder="Search projects" />
                                        </div>
                                    </div>
                                    <div className="mt-2 pt-1">
                                        <ListViewComponent cssClass="border-0 e-bigger" dataSource={data1} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex align-items-center px-1">
                                                <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                <span className="mb-0 ms-1 ps-2 fs-6">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center p-3">
                                            <span className="mb-0 text-body-secondary fs-6">Collection</span>
                                            <ButtonComponent cssClass="e-icons e-circle-add e-medium e-flat" type="button"></ButtonComponent>
                                        </div>
                                        <div className="mt-1">
                                            <ListViewComponent cssClass="border-0 e-bigger" dataSource={data2} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                    <span className="mb-0 ms-1 ps-2 fs-6">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <div className="p-3">
                                            <ButtonComponent className="e-outline w-100 mb-0" iconCss="e-icons e-plus e-medium" type="button" content="Add Collection"></ButtonComponent>
                                        </div>
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
