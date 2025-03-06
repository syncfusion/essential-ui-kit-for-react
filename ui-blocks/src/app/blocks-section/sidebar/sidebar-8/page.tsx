'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent, AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Sidebar8() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            name: 'Darlene Robertson',
            profileImage: 'avatar-11.jpg'
        },
        {
            id: 2,
            name: 'Marvin McKinney',
            profileImage: 'avatar-5.jpg'
        },
        {
            id: 3,
            name: 'Ralph Edwards',
            profileImage: 'avatar-3.jpg'
        },
        {
            id: 4,
            name: 'Courtney Henry',
            profileImage: 'avatar-9.jpg'
        },
        {
            id: 5,
            name: 'Darrell Steward',
            profileImage: 'avatar-1.jpg'
        },
        {
            id: 6,
            name: 'Jacobs Jones',
            profileImage: 'avatar-6.jpg'
        },
        {
            id: 7,
            name: 'Robert Fox',
            profileImage: 'avatar-4.jpg'
        }
    ];
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-8' && blockData.theme) {
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
                        <div id={styles["user-contact-sidebar"]} style={{ height: '680px' }}>
                            <SidebarComponent key={"sidebar-8-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="flex items-center p-3 justify-between">
                                    <div className="flex items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-small">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-normal text-gray-900 dark:text-white">John Wick</div>
                                            <p className="mb-0 text-gray-900 dark:text-white">johnwick&#64;123.com</p>
                                        </div>
                                    </div>
                                    <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat e-large px-1" type="button"></ButtonComponent>
                                </div>
                                <div>
                                    <AccordionComponent className="bg-transparent !border-0">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective iconCss="e-icons e-notes e-medium" cssClass="!border-0" header={()=><div className="text-base font-normal pl-2">News</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-announcement-01 text-base" cssClass="!border-0" header={()=><div className="text-base font-normal pl-2">Events</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-user e-medium" cssClass="!border-0" header={()=><div className="text-base font-normal pl-2">People</div>} content={()=><div></div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-user-group-01 text-base" cssClass="!border-0" header={()=><div className="text-base font-normal pl-2">Groups</div>} content={()=><div></div>}></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                                <hr className="my-4 mx-3 border-gray-200 dark:border-gray-700" />
                                <p className="text-base text-gray-900 dark:text-white pb-3 px-3">Active Contacts</p>
                                <ListViewComponent className="border-0" dataSource={data} template={(data: any)=>(
                                    <div className="e-list-wrapper flex items-center">
                                        <span className="flex items-center">
                                            <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.profileImage}`} width={24} height={24} alt="profile" />
                                            </span>
                                            <span className="text-base text-gray-700 dark:text-gray-300 ml-3">{data.name}</span>
                                        </span>
                                    </div>)}
                                ></ListViewComponent>
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
                        <div id={styles["user-contact-sidebar"]} style={{ height: '700px' }}>
                            <SidebarComponent key={"sidebar-8-bs"} width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="d-flex justify-content-between align-items-center px-3 pb-3 mt-4">
                                    <div className="d-flex align-items-center">
                                        <span className="e-avatar e-avatar-small e-avatar-circle">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <div className="ms-2">
                                            <div className="fs-6 fw-medium text-body">John Wick</div>
                                            <p className="mb-0 text-body-secondary">johnwick&#64;123.com</p>
                                        </div>
                                    </div>
                                    <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat" type="button"></ButtonComponent>
                                </div>
                                <div>
                                    <AccordionComponent className="border-0 bg-transparent">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective iconCss="e-icons e-notes e-medium" header={() => <div className="fs-6 fw-normal ps-1">News</div>} cssClass="border-0"></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-announcement-01 fs-6" header={() => <div className="fs-6 fw-normal ps-1">Events</div>} cssClass="border-0"></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-user e-medium" header={() => <div className="fs-6 fw-normal ps-1">People</div>} cssClass="border-0" content={() => <div></div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-user-group-01 fs-6" header={() => <div className="fs-6 fw-normal ps-1">Groups</div>} cssClass="border-0" content={() => <div></div>}></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                                <hr className="mx-3 opacity-100 border-light-subtle" />
                                <p className="fs-6 text-body-secondary m-3">Active Contacts</p>
                                <ListViewComponent className="border-0 e-bigger pb-3" dataSource={data} template={(data: any) => (
                                    <div className="e-list-wrapper d-flex justify-content-between align-items-center ps-1">
                                        <span className="d-flex align-items-center">
                                            <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.profileImage}`} width={24} height={24} alt="profile picture" />
                                            </span>
                                            <span className="fs-6 fw-normal ps-2 ms-1">{data.name}</span>
                                        </span>
                                    </div>)}
                                ></ListViewComponent>
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
