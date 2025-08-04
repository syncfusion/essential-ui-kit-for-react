'use client';

import { useEffect, useState, useRef } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function AISidebar3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState('304px');
    const [dockWidth, setDockWidth] = useState('48px');
    const [isBackDrop, setIsBackDrop] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebar = useRef<SidebarComponent | null>(null);

    const chatHistory: any[] = [
        {
            message: 'CSS classes',
            date: '12 Mar'
        },
        {
            message: 'Explain quantum computing',
            date: '10 Feb'
        },
        {
            message: 'How to create ERP diagram?',
            date: '22 Jan'
        },
        {
            message: 'API scaling strategies',
            date: '1 Jan'
        }
    ];

    const handleResize = (): void => {
        setIsBackDrop(window.innerWidth <= 660);
        setWidth(window.innerWidth <= 768 ? '312px' : '304px');
        setDockWidth(window.innerWidth <= 768 ? '56px' : '48px');
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-3' && blockData.theme) {
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
                        <div id={styles["chat-sidebar"]} style={{ height: '766px' }}>
                            <SidebarComponent ref={sidebar} className="bg-gray-50 dark:bg-gray-700" width={width} type="Push" showBackdrop={isBackDrop} enableDock={true} closeOnDocumentClick={false} isOpen={isSidebarOpen} open={() => setIsSidebarOpen(true)} close={() => setIsSidebarOpen(false)} style={{ display: 'block' }}>
                                <div className="flex h-full">
                                    <div className="px-2 py-6 flex flex-col items-center h-full border-r border-gray-200 dark:border-gray-600" style={{ width: dockWidth }}>
                                        <img src="/react/essential-ui-kit/blocks/assets/images/ai/sidebar/two-columns-sidebar/logo.svg" alt="logo" />
                                        <div className="flex flex-col gap-4 mt-6">
                                            <ButtonComponent className="e-icons e-comment-add e-medium e-flat px-2" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-user e-medium e-flat px-2" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-comment-show e-medium e-active e-flat px-2" type="button" onClick={() => { sidebar.current?.show() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-search e-medium e-flat px-2" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-settings e-medium e-flat px-2" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                        </div>
                                    </div>
                                    {isSidebarOpen && (
                                        <div className="flex flex-col w-64 pt-8 h-full">
                                            <div className="flex items-center px-5 gap-3">
                                                <h4 className="text-base lg:text-sm font-semibold text-gray-900 dark:text-white">Chats</h4>
                                                <span className="e-badge e-badge-pill e-badge-primary !px-1">24</span>
                                            </div>
                                            <div className="px-5 pt-5 pb-4">
                                                <div className="e-input-group">
                                                    <input className="e-input" type="text" placeholder="Search" />
                                                    <span className="e-input-group-icon e-icons e-search"></span>
                                                </div>
                                            </div>
                                            <ListViewComponent cssClass="border-0 e-list-template" dataSource={chatHistory} template={(data: any) => (
                                                <div className="e-list-wrapper !px-5 !py-3">
                                                    <div className="font-medium text-gray-900 dark:text-white text-sm">{data.message}</div>
                                                    <div className="text-xs text-gray-700 dark:text-gray-300 mt-2">{data.date}</div>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                    )}
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
                        <div id={styles["chat-sidebar"]} style={{ height: '766px' }}>
                            <SidebarComponent ref={sidebar} className="bg-body border-light-subtle" width={width} type="Push" showBackdrop={isBackDrop} enableDock={true} closeOnDocumentClick={false} isOpen={isSidebarOpen} open={() => setIsSidebarOpen(true)} close={() => setIsSidebarOpen(false)} style={{ display: 'block' }}>
                                <div className="d-flex h-100">
                                    <div className="px-2 py-4 d-flex flex-column align-items-center" style={{ width: dockWidth }}>
                                        <img src="/react/essential-ui-kit/blocks/assets/images/ai/sidebar/two-columns-sidebar/logo.svg" alt="logo" />
                                        <div className="d-flex flex-column gap-2 mt-2">
                                            <ButtonComponent className="e-icons e-comment-add e-medium e-flat" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-user e-medium e-flat" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-comment-show e-medium e-flat e-active" type="button" onClick={() => { sidebar.current?.show() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-search e-medium e-flat" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                            <ButtonComponent className="e-icons e-settings e-medium e-flat" type="button" onClick={() => { sidebar.current?.hide() }}></ButtonComponent>
                                        </div>
                                    </div>
                                    {isSidebarOpen && (
                                        <div className="d-flex flex-column pt-4 border-start border-light-subtle" style={{ width: '256px' }}>
                                            <div className="d-flex align-items-center px-3 gap-2 my-1">
                                                <h4 className="fs-5 mb-0 fw-medium text-body">Chats</h4>
                                                <span className="e-badge e-badge-pill e-badge-primary px-1">24</span>
                                            </div>
                                            <div className="px-3 py-3">
                                                <div className="e-input-group">
                                                    <input className="e-input" type="text" placeholder="Search" />
                                                    <span className="e-input-group-icon e-icons e-search border-0"></span>
                                                </div>
                                            </div>
                                            <ListViewComponent cssClass="border-0 e-list-template rounded-0" dataSource={chatHistory} template={(data: any) => (
                                                <div className="e-list-wrapper">
                                                    <div className="fw-medium">{data.message}</div>
                                                    <div className="small mt-2">{data.date}</div>
                                                </div>)}
                                            ></ListViewComponent>
                                        </div>
                                    )}
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 start-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-right" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
