'use client';

import { useEffect, useState, useRef } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function AISidebar1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [backDrop, setBackDrop] = useState(false);
    const sidebar = useRef<SidebarComponent | null>(null);

    const navigationMenu: any[] = [
        {
            id: 1,
            field: 'Home',
            fontIcon: 'sf-icon-home-10'
        },
        {
            id: 2,
            field: 'Prompt box',
            fontIcon: 'e-notes'
        },
        {
            id: 3,
            field: 'AI chat',
            fontIcon: 'e-comment-show'
        },
        {
            id: 4,
            field: 'Library',
            fontIcon: 'e-print-layout'
        },
        {
            id: 5,
            field: 'Art',
            fontIcon: 'e-edit'
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
            field: 'Help',
            fontIcon: 'sf-icon-help-circle'
        },
        {
            id: 3,
            field: 'Upgrade Plan',
            fontIcon: 'e-arrow-right'
        }
    ];

    const handleResize = (): void => {
        setBackDrop(window.innerWidth <= 660);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-1' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-800">
                        <div id={styles["sidebar-navigation"]} style={{ height: '766px' }}>
                            <SidebarComponent ref={sidebar} className="bg-gray-50 dark:bg-gray-700" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center px-3 py-2 mt-1">
                                            <span className="e-avatar e-avatar-circle e-avatar-small shrink-0">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" alt="profile picture" />
                                            </span>
                                            <div className="ml-2">
                                                <div className="text-base font-medium text-gray-900 dark:text-white">Bob Johnson</div>
                                                <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <hr className="border-gray-200 dark:border-gray-600 m-4" />
                                        <ListViewComponent cssClass="border-0 e-list-template" dataSource={navigationMenu} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center justify-between !px-3">
                                                <div className="flex items-center gap-3">
                                                    <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                    <span className="text-base lg:text-sm">{data.field}</span>
                                                </div>
                                                {data.id === 4 && <span className="e-badge e-badge-pill e-badge-primary !px-2">9</span>}
                                            </div>)}
                                        ></ListViewComponent>
                                        <hr className="border-gray-200 dark:border-gray-600 m-4" />
                                        <ListViewComponent cssClass="border-0 e-list-template" dataSource={supportMenu} template={(data: any) => (
                                            <div className={`e-list-wrapper !px-3 ${data.id === 3 ? 'mt-3' : ''}`}>
                                                {data.field === 'Upgrade Plan' ? (
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <span className="e-avatar e-avatar-circle e-avatar-small bg-primary-600 dark:bg-primary-400">
                                                                <span className="e-icons e-ai-chat e-medium !text-white dark:!text-black"></span>
                                                            </span>
                                                            <span className="font-medium text-base lg:text-sm">{data.field}</span>
                                                        </div>
                                                        <span className={`e-icons ${data.fontIcon} e-medium`}></span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-3">
                                                        <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                        <span className="text-base lg:text-sm">{data.field}</span>
                                                    </div>
                                                )}
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="bg-white dark:bg-gray-800 mb-6 p-1 w-fit border border-gray-200 dark:border-gray-600 rounded-lg">
                                            <ButtonComponent cssClass="rounded-lg e-primary" iconCss="e-icons e-brightness" type="button" content="Light"></ButtonComponent>
                                            <ButtonComponent cssClass="rounded-lg e-flat" iconCss="e-icons e-contrast" type="button" content="Dark"></ButtonComponent>
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
                        <div id={styles["sidebar-navigation"]} style={{ height: '766px' }}>
                            <SidebarComponent ref={sidebar} className="bg-body border-light-subtle" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div>
                                        <div className="d-flex align-items-center px-3 py-2 my-1">
                                            <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" alt="profile picture" />
                                            </span>
                                            <div className="ms-2">
                                                <div className="fs-6 fw-medium text-body">Bob Johnson</div>
                                                <p className="mt-1 mb-0 text-body-secondary">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <hr className="border-light-subtle opacity-100 mx-3" />
                                        <ListViewComponent id={styles["nav-list"]} cssClass="border-0 e-list-template rounded-0" dataSource={navigationMenu} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex align-items-center justify-content-between px-3 py-2">
                                                <div className="d-flex align-items-center gap-2 fs-6">
                                                    <span className={`e-icons ${data.fontIcon} small`}></span>
                                                    <span className="small">{data.field}</span>
                                                </div>
                                                {data.id === 4 && <span className="e-badge e-badge-pill e-badge-primary">9</span>}
                                            </div>)}
                                        ></ListViewComponent>
                                        <hr className="border-light-subtle opacity-100 mx-3" />
                                        <ListViewComponent id={styles["support-list"]} cssClass="border-0 e-list-template rounded-0" dataSource={supportMenu} template={(data: any) => (
                                            <div className={`e-list-wrapper px-3 py-2 ${data.id === 3 ? 'mt-2' : ''}`}>
                                                {data.field === 'Upgrade Plan' ? (
                                                    <div className="d-flex align-items-center justify-content-between fs-6">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="e-avatar e-avatar-circle e-avatar-small bg-primary text-white">
                                                                <span className="e-icons e-ai-chat e-medium"></span>
                                                            </span>
                                                            <span className="fw-medium small">{data.field}</span>
                                                        </div>
                                                        <span className={`e-icons ${data.fontIcon} fs-5`}></span>
                                                    </div>
                                                ) : (
                                                    <div className="d-flex align-items-center gap-2 fs-6">
                                                        <span className={`e-icons ${data.fontIcon} small`}></span>
                                                        <span className="small">{data.field}</span>
                                                    </div>
                                                )}
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="bg-body mb-4 p-1 border border-light-subtle rounded-3">
                                            <ButtonComponent cssClass="rounded-3 e-primary" iconCss="e-icons e-brightness" type="button" content="Light"></ButtonComponent>
                                            <ButtonComponent cssClass="rounded-3 e-flat" iconCss="e-icons e-contrast" type="button" content="Dark"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 start-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
