'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar3() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            field: 'Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 2,
            field: 'Models',
            fontIcon: 'e-send-backward'
        },
        {
            id: 3,
            field: 'Bookmarks',
            fontIcon: 'e-bookmark'
        },
        {
            id: 4,
            field: 'Issues',
            fontIcon: 'sf-icon-info-octagon'
        },
        {
            id: 5,
            field: 'Milestones',
            fontIcon: 'sf-icon-clock-rewind'
        },
        {
            id: 6,
            field: 'Labels',
            fontIcon: 'e-circle-check'
        },
        {
            id: 7,
            field: 'Documents',
            fontIcon: 'e-file-new'
        },
        {
            id: 8,
            field: 'Libraries',
            fontIcon: 'sf-icon-light-bulb'
        },
        {
            id: 9,
            field: 'Members',
            fontIcon: 'e-user'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-3' && blockData.theme) {
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
                        <div id={styles["notification-sidebar"]} style={{ height: '700px' }}>
                            <SidebarComponent key={"sidebar-3-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="flex flex-col justify-between h-screen">
                                    <div>
                                        <div className="flex flex-col justify-center items-center pt-6">
                                            <span className="e-avatar e-avatar-xlarge e-avatar-circle">
                                                <Image src="/assets/images/common/avatar/avatar-2.jpg" width={56} height={56} alt="profile picture" />
                                            </span>
                                            <div className="text-xl font-medium leading-normal text-gray-900 dark:text-white mt-4">John Wick</div>
                                            <p className="mb-0 text-base text-gray-900 dark:text-white mt-2">johnwick&#64;123.com</p>
                                        </div>
                                        <hr className="m-4 border-gray-200 dark:border-gray-700" />
                                        <div>
                                            <ListViewComponent className="border-0" dataSource={data} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center px-2">
                                                    <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                    <span className="text-base font-normal pl-4">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <ButtonComponent iconCss="e-icons sf-icon-logout-07 text-base" cssClass="e-outline w-full" type="button" content="Logout"></ButtonComponent>
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
                        <div id={styles["notification-sidebar"]} style={{ height: '700px' }}>
                            <SidebarComponent key={"sidebar-3-bs"} width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="d-flex flex-column justify-content-between vh-100">
                                    <div>
                                        <div className="d-flex flex-column justify-content-center align-items-center pt-4 mb-3">
                                            <span className="e-avatar e-avatar-xlarge e-avatar-circle">
                                                <Image src="/assets/images/common/avatar/avatar-2.jpg" width={56} height={56} alt="profile picture" />
                                            </span>
                                            <div className="fs-5 fw-medium text-body mt-3">John Wick</div>
                                            <p className="mb-0 fs-6 text-body-secondary mt-2">johnwick&#64;123.com</p>
                                        </div>
                                        <div>
                                            <ListViewComponent cssClass="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center px-2">
                                                    <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                    <span className="fs-6 fw-normal ps-2 ms-1">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <ButtonComponent iconCss="e-icons sf-icon-logout-07 fs-6" cssClass="e-outline w-100" type="button" content="Logout"></ButtonComponent>
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
