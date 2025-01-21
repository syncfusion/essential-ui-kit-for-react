'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent, AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar5() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);
    const toast1 = useRef<ToastComponent>(null);
    const toast2 = useRef<ToastComponent>(null);
    
    const data: any[] = [
        {
            id: 1,
            field: 'Home',
            fontIcon: 'e-home'
        },
        {
            id: 2,
            field: 'My Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 3,
            field: 'Notifications',
            fontIcon: 'sf-icon-notification-bell-01'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-5' && blockData.theme) {
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
                            <SidebarComponent key={"sidebar-5-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="h-screen">
                                    <div className="flex items-center py-4 px-3">
                                        <Image src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <span className="text-lg font-bold text-gray-900 dark:text-white ml-3">Company Name</span>
                                    </div>
                                    <div className="mt-1">
                                        <ListViewComponent className="border-0" dataSource={data} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center justify-between pr-2">
                                                <div className="text-base leading-6 flex items-center">
                                                    <span className={`e-icons ${data.fontIcon}`}></span>
                                                    <span className="font-normal pl-4">{data.field}</span>
                                                </div>
                                                {data.field === 'Notifications' && (
                                                    <span className="e-badge e-badge-info e-badge-pill !px-1.5 e-bigger">99+</span>
                                                )}
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-700 m-4" />
                                    <AccordionComponent className="bg-transparent !border-0" expandMode="Single">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective iconCss="e-icons e-notes e-medium" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">News</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-announcement-01 text-base" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">Events</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-user e-medium" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">People</div>} content={() => <div></div>}></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                    <div id="toastmsg" className="!absolute" style={{ bottom: '25%' }}></div>
                                    <ToastComponent ref={toast1} target="#toastmsg" position={{ X: 'Left', Y: 'Bottom' }} cssClass="e-toast-info" width="224" title={() => <div className="pr-2">Adaptive Tiles Meeting</div>} content={() => <div>There was a problem with your network connection</div>} showCloseButton={true} timeOut={0} newestOnTop={true} created={() => toast1.current?.show()}></ToastComponent>
                                    <ToastComponent ref={toast2} target="#toastmsg" position={{ X: 'Left', Y: 'Top' }} cssClass="e-toast-warning" width="224" title={() => <div className="pr-2">Adaptive Tiles Meeting</div>} content={() => <div>There was a problem with your network connection</div>} showCloseButton={true} timeOut={0} newestOnTop={true} created={() => toast2.current?.show()}></ToastComponent>
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
                            <SidebarComponent key={"sidebar-5-bs"} width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="vh-100">
                                    <div className="d-flex align-items-center p-3">
                                        <Image src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <span className="fs-5 ms-2 fw-bold text-body lh-sm">Company Name</span>
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper px-1 d-flex justify-content-between align-items-center">
                                            <div className="fs-6 lh-base">
                                                <span className={`e-icons ${data.fontIcon}`}></span>
                                                <span className="fw-normal ps-2 ms-1">{data.field}</span>
                                            </div>
                                            {data.field === 'Notifications' && (
                                                <span className="e-badge e-badge-info e-badge-pill">99+</span>
                                            )}
                                        </div>)}
                                    ></ListViewComponent>
                                    <p className="m-3 fs-6 text-body-secondary">Others</p>
                                    <AccordionComponent className="bg-transparent border-0" expandMode="Single">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective iconCss="e-icons e-notes e-medium" header={() => <div className="fs-6 fw-normal ps-1">News</div>} cssClass="border-0"></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-announcement-01 fs-6" header={() => <div className="fs-6 fw-normal ps-1">Events</div>} cssClass="border-0"></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-user e-medium" header={() => <div className="fs-6 fw-normal ps-1">People</div>} cssClass="border-0" content={() => <div></div>}></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                    <div id="toastmsg" className="position-absolute" style={{ bottom: '25%' }}></div>
                                    <ToastComponent ref={toast1} target="#toastmsg" position={{ X: 'Left', Y: 'Bottom' }} cssClass="e-toast-info" width="224" title={() => <div>Adaptive Tiles Meeting</div>} content={() => <div>There was a problem with your network connection</div>} showCloseButton={true} timeOut={0} newestOnTop={true} created={() => toast1.current?.show()}></ToastComponent>
                                    <ToastComponent ref={toast2} target="#toastmsg" position={{ X: 'Left', Y: 'Top' }} cssClass="e-toast-warning" width="224" title={() => <div>Adaptive Tiles Meeting</div>} content={() => <div>There was a problem with your network connection</div>} showCloseButton={true} timeOut={0} newestOnTop={true} created={() => toast2.current?.show()}></ToastComponent>
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
