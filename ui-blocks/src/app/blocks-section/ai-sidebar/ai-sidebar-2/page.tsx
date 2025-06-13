'use client';

import { useEffect, useState, useRef } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function AISidebar2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [backDrop, setBackDrop] = useState(false);
    const sidebar = useRef<SidebarComponent | null>(null);

    const chatHistory: any[] = [
        {
            message: 'How do I design an interface for a mobile application?',
            category: 'Today'
        },
        {
            message: 'What is design?',
            category: 'Yesterday'
        },
        {
            message: 'How is visual hierarchy achieved?',
            category: 'Yesterday'
        },
        {
            message: 'FAANG design practices',
            category: 'Yesterday'
        },
        {
            message: 'Quantitative research types',
            category: 'Yesterday'
        }
    ];

    const supportMenu: any[] = [
        {
            field: 'Settings',
            fontIcon: 'e-settings'
        },
        {
            field: 'Download for iOS',
            fontIcon: 'e-rectangle'
        },
        {
            field: 'AI Policy',
            fontIcon: 'e-upload-1'
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
                if (blockData.name === 'ai-sidebar-2' && blockData.theme) {
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
                        <div id={styles["sidebar-chat"]} style={{ height: '861px' }}>
                            <SidebarComponent ref={sidebar} className="bg-gray-50 dark:bg-gray-700" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center px-4 py-6">
                                            <div className="relative h-8 inline-block">
                                                <span className="e-avatar e-avatar-circle e-avatar-small shrink-0">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" alt="profile picture" />
                                                </span>
                                                <div className="absolute w-3 h-3 bg-green-700 dark:bg-green-500 border border-white dark:border-gray-800 rounded-full flex items-center justify-center" style={{ bottom: '-2px', right: '-2px' }}>
                                                    <span className="e-icons e-check text-white" style={{ fontSize: '6px' }}></span>
                                                </div>
                                            </div>
                                            <div className="ml-3">
                                                <h4 className="text-base font-medium text-gray-900 dark:text-white">Bob Johnson</h4>
                                                <p className="mt-0.5 text-gray-700 dark:text-gray-300">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <ButtonComponent className="w-full" iconCss="e-icons e-plus" type="button" content="New chat"></ButtonComponent>
                                        </div>
                                        <div className="mt-6">
                                            <ListViewComponent cssClass="e-list-template border-0" dataSource={chatHistory} fields={{ groupBy: 'category', text: 'message' }} template={(data: any) => (
                                                <div className="e-list-wrapper !px-3">
                                                    <span className="!text-wrap !line-clamp-1 w-full truncate text-base lg:text-sm" title={data.message}>{data.message}</span>
                                                </div>)}
                                                groupTemplate={(data: any) => (
                                                    <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-xs">{data.items[0].category.toUpperCase()}</span>
                                                )}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="pb-5">
                                        <div className="e-card shadow-none rounded-xl p-3 mx-4 my-2 w-auto bg-gray-200 dark:bg-gray-600">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header !px-1 !py-0 !justify-start">
                                                    <div className="e-card-header-title font-medium text-base pb-2">Upgrade to Pro</div>
                                                </div>
                                                <div className="e-card-content !px-1 !py-0">
                                                    <p>Enjoy faster replies, speedier image generation, and more advanced search options.</p>
                                                    <p className="mt-6">7-day trial. Cancel anytime.</p>
                                                </div>
                                                <div className="e-card-actions !pb-1 !px-1 !pt-2">
                                                    <ButtonComponent className="w-full" iconCss="e-icons e-plus" type="button" content="Invite people"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                        <ListViewComponent cssClass="border-0 e-list-template" dataSource={supportMenu} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center !px-3 gap-3">
                                                <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                <span className="text-base lg:text-sm">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
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
                        <div id={styles["sidebar-chat"]} style={{ height: '861px' }}>
                            <SidebarComponent ref={sidebar} className="bg-body border-light-subtle" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={backDrop} style={{ display: 'block' }}>
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div>
                                        <div className="d-flex align-items-center px-3 py-4">
                                            <div className="position-relative h-100">
                                                <span className="e-avatar e-avatar-circle flex-shrink-0">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" alt="profile picture" />
                                                </span>
                                                <div className="position-absolute bg-success border border-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '12px', height: '12px', bottom: '2px', right: '-2px' }}>
                                                    <span className="e-icons e-check text-white" style={{ fontSize: '6px' }}></span>
                                                </div>
                                            </div>
                                            <div className="ms-2 fs-6">
                                                <h4 className="mb-0 fw-medium text-body small">Bob Johnson</h4>
                                                <p className="mt-1 text-body-secondary small mb-0">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <div className="px-3">
                                            <ButtonComponent className="w-100 e-outline" iconCss="e-icons e-plus" type="button" content="New chat"></ButtonComponent>
                                        </div>
                                        <div className="mt-4">
                                            <ListViewComponent cssClass="e-list-template border-0 rounded-0" dataSource={chatHistory} fields={{ groupBy: 'category', text: 'message' }} template={(data: any) => (
                                                <div className="e-list-wrapper py-2">
                                                    <span className="text-wrap overflow-hidden" title={data.message} style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{data.message}</span>
                                                </div>
                                                )}
                                                groupTemplate={(data: any) => (
                                                    <span className="text-body-secondary px-1">{data.items[0].category.toUpperCase()}</span>
                                                )}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
                                    <div className="pb-3">
                                        <div className="e-card bg-body-secondary mx-3 mb-2 p-3 w-auto rounded-4">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header justify-content-start p-0">
                                                    <div className="e-card-header-title fw-medium pb-2 text-body">Upgrade to Pro</div>
                                                </div>
                                                <div className="e-card-content p-0">
                                                    <p className="small text-body-secondary">Enjoy faster replies, speedier image generation, and more advanced search options.</p>
                                                    <p className="mt-3 mb-2 text-body-secondary small">7-day trial. Cancel anytime.</p>
                                                </div>
                                                <div className="e-card-actions p-0">
                                                    <ButtonComponent className="w-100" iconCss="e-icons e-plus" type="button" content="Invite people"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                        <ListViewComponent cssClass="border-0 e-list-template rounded-0" dataSource={supportMenu} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex align-items-center py-2 fs-6 gap-2">
                                                <span className={`e-icons ${data.fontIcon} small`}></span>
                                                <span className="small">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
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
