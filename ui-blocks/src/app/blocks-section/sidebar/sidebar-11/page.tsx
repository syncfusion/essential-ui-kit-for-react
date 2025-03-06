'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Sidebar11() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            name: 'Darlene Robertson',
            profileImage: 'avatar-10.jpg'
        },
        {
            id: 2,
            name: 'Marvin McKinney',
            profileImage: 'avatar-7.jpg'
        },
        {
            id: 3,
            name: 'Ralph Edwards',
            profileImage: 'avatar-3.jpg'
        },
        {
            id: 4,
            name: 'Courtney Henry',
            profileImage: 'avatar-12.jpg'
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
                if (blockData.name === 'sidebar-11' && blockData.theme) {
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
                        <div id={styles["contact-sidebar"]} className="float-right" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-11-tw"} className="bg-gray-50 dark:bg-gray-900 !border-l !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} position="Right" showBackdrop={true} style={{ display: 'block' }}>
                                <div className="py-6 h-screen">
                                    <div className="flex justify-between mb-2 px-3">
                                        <span className="text-base text-gray-900 dark:text-white">Contacts</span>
                                        <span className="flex justify-end">
                                            <ButtonComponent cssClass="e-medium e-icons e-view-side e-flat mr-2" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-medium e-icons e-search e-flat mr-2" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                        </span>
                                    </div>
                                    <ListViewComponent className="border-0" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper flex items-center">
                                            <span className="flex items-center">
                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                    <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.profileImage}`} width={24} height={24} alt="profile" />
                                                </span>
                                                <span className="text-base text-gray-700 dark:text-gray-300 ml-3">{data.name}</span>
                                            </span>
                                        </div>)}
                                    ></ListViewComponent>
                                    <hr className="border-gray-200 dark:border-gray-700 my-4 mx-3" />
                                    <div className="flex justify-between items-center px-3 mt-3">
                                        <span className="text-base text-gray-700 dark:text-gray-300">Group Conversations</span>
                                        <ButtonComponent cssClass="e-medium e-icons e-plus e-flat" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["contact-sidebar"]} className="float-end" style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-11-bs"} width="256px" ref={sidebar} position="Right" showBackdrop={true} isOpen={true} style={{ display: 'block' }}>
                                <div className="py-4 vh-100">
                                    <div className="d-flex justify-content-between mb-2 px-2 ms-1">
                                        <span className="fs-6 text-body-secondary">Contacts</span>
                                        <span className="d-flex justify-content-end">
                                            <ButtonComponent className="e-medium e-icons e-view-side e-flat" type="button"></ButtonComponent>
                                            <ButtonComponent className="e-medium e-icons e-search e-flat ms-2" type="button"></ButtonComponent>
                                            <ButtonComponent className="e-medium e-icons e-more-horizontal-1 e-flat ms-2" type="button"></ButtonComponent>
                                        </span>
                                    </div>
                                    <ListViewComponent className="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper d-flex justify-content-between align-items-center">
                                            <span className="d-flex align-items-center">
                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                    <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.profileImage}`} width={24} height={24} alt="profile" />
                                                </span>
                                                <span className="fs-6 fw-normal ps-2 ms-1">{data.name}</span>
                                            </span>
                                        </div>)}
                                    ></ListViewComponent>
                                    <div className="d-flex justify-content-between align-items-center mt-3 px-2 ms-1">
                                        <span className="fs-6 text-body-secondary">Group Conversations</span>
                                        <ButtonComponent className="e-medium e-icons e-plus e-flat" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="py-3 px-1 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
