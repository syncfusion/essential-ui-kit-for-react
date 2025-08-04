'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Sidebar6() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const [backDrop, setBackDrop] = useState(false);
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

    const libraryMenu: any[] = [
        {
            id: 1,
            field: 'Library'
        },
        {
            id: 2,
            field: 'Themesberg'
        },
        {
            id: 3,
            field: 'Blocks'
        },
        {
            id: 4,
            field: 'Iconsale'
        }
    ];

    const supportMenu: any[] = [
        {
            id: 1,
            field: 'Settings',
            fontIcon: 'e-settings'
        },
        {
            id: 2,
            field: 'Help & Getting Started',
            fontIcon: 'e-circle-info'
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
                if (blockData.name === 'sidebar-6' && blockData.theme) {
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
                        <div id={styles["project-sidebar"]} style={{ height: '715px' }}>
                            <SidebarComponent key={"sidebar-6-tw"} ref={sidebar} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" isOpen={true} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="flex flex-col justify-between h-screen">
                                    <div>
                                        <div className="flex items-center justify-between py-4 px-3">
                                            <div className="flex items-center">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                                <div className="ml-3">
                                                    <div className="text-base font-medium leading-normal text-gray-900 dark:text-white">John Wick</div>
                                                    <a className="text-gray-900 dark:text-white" href="mailto:johnwick@company.com">johnwick&#64;company.com</a>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat e-large px-1" type="button"></ButtonComponent>
                                        </div>
                                        <div>
                                            <ListViewComponent className="!border-0" dataSource={navigationMenu} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                    <span className="text-base font-normal pl-4">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <hr className="my-4 mx-3 border-gray-200 dark:border-gray-700" />
                                        <div>
                                            <p className="text-base px-4 py-3 text-gray-700 dark:text-gray-300">Bergside Projects</p>
                                            <ListViewComponent className="!border-0" dataSource={libraryMenu} template={(data: any) => (
                                                <div className="e-list-wrapper flex items-center px-1">
                                                    <span className={`e-icons e-bullet-3 !text-indigo-600 dark:!text-indigo-400`}></span>
                                                    <span className="text-base font-normal pl-4">
                                                        {data.field === 'Library' || data.field === 'Blocks' ? 'Tailwind ' + data.field : data.field}
                                                    </span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <div className="py-4 px-3">
                                            <ButtonComponent className="e-outline w-full" iconCss="e-icons e-plus e-medium" type="button" content="Add Collection"></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <ListViewComponent className="!border-0" dataSource={supportMenu} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center px-1">
                                                <span className={`e-icons ${data.fontIcon}`}></span>
                                                <span className="text-base font-normal pl-4">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
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
                        <div id={styles["project-sidebar"]} style={{ height: '715px' }}>
                            <SidebarComponent key={"sidebar-6-bs"} ref={sidebar} width="256px" isOpen={true} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="d-flex flex-column justify-content-between vh-100">
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                                <div className="ms-2">
                                                    <div className="fs-6 fw-medium text-body">John Wick</div>
                                                    <a className="text-body-secondary text-decoration-none" href="mailto:johnwick@company.com">johnwick&#64;company.com</a>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat" type="button"></ButtonComponent>
                                        </div>
                                        <div>
                                            <ListViewComponent className="border-0 e-bigger" dataSource={navigationMenu} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center px-1">
                                                    <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                    <span className="fs-6 fw-normal ps-2 ms-1">{data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <hr className="mx-3 border-light-subtle opacity-100" />
                                        <div>
                                            <p className="text-body-secondary fs-6 m-3">Bergside Projects</p>
                                            <ListViewComponent className="border-0 e-bigger" dataSource={libraryMenu} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center px-1">
                                                    <span className="e-icons e-bullet-3 e-medium text-primary"></span>
                                                    <span className="fs-6 fw-normal ps-2 ms-1">{data.field === 'Library' || data.field === 'Blocks' ? `Bootstrap ${data.field}` : data.field}</span>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                        <div className="p-3">
                                            <ButtonComponent cssClass="e-outline w-100" iconCss="e-icons e-plus e-medium" type="button" content="Add Collection"></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="pb-3">
                                        <ListViewComponent className="border-0 e-bigger" dataSource={supportMenu} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex align-items-center px-1">
                                                <span className={`e-icons ${data.fontIcon}`}></span>
                                                <span className="fs-6 fw-normal ps-2">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
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
