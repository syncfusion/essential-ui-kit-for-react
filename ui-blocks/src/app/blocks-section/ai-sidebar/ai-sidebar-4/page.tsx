'use client';

import { useEffect, useState, useRef } from "react";
import { SidebarComponent, ContextMenuComponent, MenuItemModel } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function AISidebar4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [backDrop, setBackDrop] = useState(false);
    const sidebar = useRef<SidebarComponent | null>(null);
    const contextMenu = useRef<ContextMenuComponent | null>(null);

    const chatHistory: any[] = [
        {
            message: "AI Chat",
            category: "",
            fontIcon: "e-comment-show"
        },
        {
            message: "Settings",
            category: "",
            fontIcon: "e-settings"
        },
        {
            message: "FAQs",
            category: "",
            fontIcon: "sf-icon-help-circle"
        },
        {
            message: "How can I improve my time management skills?",
            category: "Pinned",
            fontIcon: "sf-icon-push-pin"
        },
        {
            message: "What's the best way to learn a new language effectively?",
            category: "Pinned",
            fontIcon: "sf-icon-push-pin"
        },
        {
            message: "What's the difference between anxiety and stress?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "How can I reduce stress at work and stay productive?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "What are some good health habits to start today?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "Should I get a pet if I live alone in an apartment?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "How much sleep do I really need each night?",
            category: "Chat history",
            fontIcon: "e-clock"
        }
    ]

    const menuItems: MenuItemModel[] = [
        {
            text: "Pin",
            iconCss: "sf-icon-push-pin"
        },
        {
            text: "Delete",
            iconCss: "e-icons e-trash"
        }
    ];

    const openContextMenu = (event: any): void => {
        contextMenu.current?.open(event.pageY + 20, event.pageX);
    };

    const handleResize = (): void => {
        setBackDrop(window.innerWidth <= 660);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-4' && blockData.theme) {
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
                        <div id={styles["interactive-sidebar"]} style={{ height: '861px' }}>
                            <SidebarComponent ref={sidebar} className="bg-gray-50 dark:bg-gray-700" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center px-4 py-3">
                                            <span className="e-avatar e-avatar-circle e-avatar-small bg-primary-600 dark:bg-primary-400">
                                                <span className="e-icons e-ai-chat e-medium !text-white dark:!text-black"></span>
                                            </span>
                                            <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-white">Fusion AI</span>
                                        </div>
                                        <div className="mt-1 px-3">
                                            <div className="e-input-group">
                                                <input className="e-input" type="text" placeholder="Search..." />
                                                <span className="e-input-group-icon e-icons e-search"></span>
                                            </div>
                                        </div>
                                        <div className="px-3 mt-3">
                                            <ListViewComponent cssClass="e-list-template border-0" dataSource={chatHistory} fields={{ groupBy: 'category', text: 'message' }} template={(data: any) => (
                                                <div className="group e-list-wrapper flex items-center justify-between !px-3 !h-10">
                                                    {data.category === '' ? (
                                                        <div className="flex items-center gap-3">
                                                            <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                            <span className="text-base lg:text-xs">{data.message}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center justify-between w-full">
                                                            <span className="flex-1 truncate text-base lg:text-xs" title={data.message}>{data.message}</span>
                                                            <div className="relative">
                                                                <span id="target" className="e-icons e-more-horizontal-1 e-medium hidden group-hover:block ml-3" onClick={(event) => openContextMenu(event)}></span>
                                                            </div>
                                                            <ContextMenuComponent ref={contextMenu} target="#target" items={menuItems}></ContextMenuComponent>
                                                        </div>
                                                    )}
                                                </div>)}
                                                groupTemplate={(data: any) => (
                                                    <div className="flex items-center gap-3 font-medium text-gray-700 dark:text-gray-300">
                                                        <span className={`e-icons ${data.items?.[0]?.fontIcon} text-base`}></span>
                                                        <span>{data.items?.[0]?.category?.toUpperCase()}</span>
                                                    </div>
                                                )}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="pb-4 px-3">
                                        <ButtonComponent className="e-primary w-full" iconCss="e-icons e-plus e-medium" type="button" content="Start new chat"></ButtonComponent>
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
                        <div id={styles["interactive-sidebar"]} style={{ height: '861px' }}>
                            <SidebarComponent ref={sidebar} className="bg-body border-light-subtle" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div>
                                        <div className="d-flex align-items-center p-3 fs-6">
                                            <span className="e-avatar e-avatar-circle e-avatar-small bg-primary">
                                                <span className="e-icons e-ai-chat e-medium text-white"></span>
                                            </span>
                                            <span className="ms-2 ps-1 small fw-bold text-body">Fusion AI</span>
                                        </div>
                                        <div className="px-3">
                                            <div className="e-input-group">
                                                <input className="e-input" type="text" placeholder="Search..." />
                                                <span className="e-input-group-icon e-icons e-search border-0"></span>
                                            </div>
                                        </div>
                                        <div className="px-3 mt-3">
                                            <ListViewComponent cssClass="e-list-template border-0" dataSource={chatHistory} fields={{ groupBy: 'category', text: 'message' }} template={(data: any) => (
                                                <div className="e-list-wrapper d-flex align-items-center justify-content-between px-3 py-2 hover-group">
                                                    {data.category === '' ? (
                                                        <div className="d-flex align-items-center gap-2 fs-6">
                                                            <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                            <span className="small ps-1">{data.message}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="d-flex align-items-center justify-content-between w-100">
                                                            <span className="text-truncate flex-grow-1 w-100" title={data.message}>{data.message}</span>
                                                            <span id="target" className="e-icons e-more-horizontal-1 d-none context-menu fs-6 ms-1" onClick={openContextMenu}></span>
                                                            <ContextMenuComponent ref={contextMenu} target="#target" items={menuItems}></ContextMenuComponent>
                                                        </div>
                                                    )}
                                                </div>)}
                                                groupTemplate={(data: any) => (
                                                    <div className="d-flex align-items-center gap-2 fs-6 px-1">
                                                        <span className={`e-icons ${data.items?.[0]?.fontIcon} fs-6 text-secondary`}></span>
                                                        <span className="small ps-1 text-body-secondary fw-normal">{data.items[0].category.toUpperCase()}</span>
                                                    </div> 
                                                )}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="pb-3 px-3">
                                        <ButtonComponent className="e-primary w-100" iconCss="e-icons e-plus e-medium" type="button" content="Start new chat"></ButtonComponent>
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
