'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Sidebar7() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const navigationMenu: any[] = [  
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
        }
    ];

    const supportMenu: any[] = [ 
        {
            id: 1,
            field: 'Docs',
            fontIcon: 'e-file-new'
        },
        {
            id: 2,
            field: 'Component',
            fontIcon: 'e-send-to-back'
        },
        {
            id: 3,
            field: 'Help',
            fontIcon: 'e-circle-info'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-7' && blockData.theme) {
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
                        <div id={styles["profile-sidebar"]} style={{ height: '605px' }}>
                            <SidebarComponent key={"sidebar-7-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="flex flex-col h-screen justify-between">
                                    <div>
                                        <div className="flex items-center p-4">
                                            <span className="e-avatar e-avatar-circle e-avatar-small">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                            </span>
                                            <div className="ml-3">
                                                <div className="text-base font-medium leading-normal text-gray-900 dark:text-white">John Wick</div>
                                                <p className="mb-0 text-gray-900 dark:text-white">johnwick&#64;123.com</p>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3">
                                            <div className="e-input-group">
                                                <span className="e-input-group-icon e-icons e-search"></span>
                                                <input className="e-input !pl-0" type="text" placeholder="Search projects" />
                                            </div>
                                        </div>
                                        <div>
                                            <ListViewComponent className="border-0" dataSource={navigationMenu} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                    <span className="text-base font-normal pl-4">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <hr className="m-4 border-gray-200 dark:border-gray-700" />
                                        <div>
                                            <ListViewComponent className="border-0" dataSource={supportMenu} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon}`}></span>
                                                    <span className="text-base font-normal pl-4">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div>
                                            <p className="text-base text-gray-700 dark:text-gray-300">Space Left</p>
                                            <h3 className="text-xl mt-2 text-gray-700 font-semibold dark:text-gray-300">70 GB free of 150 GB</h3>
                                        </div>
                                        <div className="py-3">
                                            <ProgressBarComponent key={"progressbar-1-tw"} value={54} type="Linear" height="8" width="205" trackThickness={8} progressThickness={8} progressColor="#4F46E5"></ProgressBarComponent>
                                        </div>
                                        <div className="py-3">
                                            <ButtonComponent iconCss="e-icons sf-icon-upload-cloud text-base" className="e-outline w-full" content="Upgrade to Pro" type="button"></ButtonComponent>
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
                        <div id={styles["profile-sidebar"]} style={{ height: '630px' }}>
                            <SidebarComponent key={"sidebar-7-bs"} width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="d-flex flex-column vh-100 justify-content-between">
                                    <div>
                                        <div className="d-flex align-items-center px-3 pb-3 mt-4">
                                            <span className="e-avatar e-avatar-circle e-avatar-small">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                            </span>
                                            <div className="ms-2">
                                                <div className="fs-6 fw-medium text-body">John Wick</div>
                                                <p className="mb-0 text-body-secondary">johnwick&#64;123.com</p>
                                            </div>
                                        </div>
                                        <div className="px-3">
                                            <div className="e-input-group">
                                                <span className="e-input-group-icon e-icons e-search border-end-0"></span>
                                                <input className="e-input" type="text" placeholder="Search projects" />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <ListViewComponent className="border-0 e-bigger" dataSource={navigationMenu} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                    <span className="fs-6 fw-normal ps-2 ms-1">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <p className="m-3 fs-6 text-body-secondary">Others</p>
                                        <div>
                                            <ListViewComponent className="border-0 e-bigger" dataSource={supportMenu} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon}`}></span>
                                                    <span className="fs-6 fw-normal ps-2 ms-1">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div>
                                            <span className="text-body-secondary fs-6 mb-0">Space Left</span>
                                            <h3 className="mt-1 text-body fw-medium fs-5 mb-0">70 GB free of 150 GB</h3>
                                        </div>
                                        <div className="mt-2">
                                            <ProgressBarComponent key={"progressbar-1-bs"} type="Linear" value={54} height="8" width="205" trackThickness={8} progressThickness={8} progressColor="#0D6EFD" cornerRadius="Round"></ProgressBarComponent>
                                        </div>
                                        <div className="mt-3">
                                            <ButtonComponent className="e-outline w-100" iconCss="e-icons sf-icon-upload-cloud fs-6" content="Upgrade to Pro" type="button"></ButtonComponent>
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
