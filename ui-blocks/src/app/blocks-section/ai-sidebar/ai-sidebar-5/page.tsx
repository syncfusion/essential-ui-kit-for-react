'use client';

import { useEffect, useState, useRef } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function AISidebar5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isBackDrop, setIsBackDrop] = useState(false);
    const sidebar = useRef<SidebarComponent | null>(null);

    const searchItems: any[] = [
        {
            title: 'Generate 5 attention-grabbing headlines',
            subTitle: 'Get 5 compelling headlines to make your content stand out.'
        },
        {
            title: 'Text to emoji',
            subTitle: 'Convert plain text into expressive emoji-based messages.'
        },
        {
            title: 'What does a senior lead designer do?',
            subTitle: 'Understand key qualities and skills valued by senior leaders.'
        },
        {
            title: 'Article introduction',
            subTitle: 'Generate a strong and engaging introduction for your article.'
        }
    ]

    const handleResize = (): void => {
        setIsBackDrop(window.innerWidth <= 660);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-5' && blockData.theme) {
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
                        <div id={styles["search-history"]} style={{ height: '766px' }}>
                            <SidebarComponent ref={sidebar} className="bg-gray-50 dark:bg-gray-700" width="256px" isOpen={true} type="Push" closeOnDocumentClick={false} position="Right" showBackdrop={isBackDrop} style={{ display: 'block' }}>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-sm text-gray-900 dark:text-white">Search history</span>
                                        <ButtonComponent cssClass="e-danger e-flat" content="Delete" type="button"></ButtonComponent>
                                    </div>
                                    <div className="pt-3">
                                        <ListViewComponent cssClass="e-list-template !border-0" dataSource={searchItems} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center justify-between border border-gray-200 dark:border-gray-600 rounded-xl !px-3 mb-3">
                                                <div className="flex flex-col">
                                                    <span className="text-gray-900 dark:text-white !text-wrap !line-clamp-1 w-full truncate text-sm md:text-xs" title={data.title}>{data.title}</span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 !text-wrap !line-clamp-1 w-full truncate mt-0.5" title={data.subTitle}>{data.subTitle}</span>
                                                </div>
                                                <div className="ml-2">
                                                    <CheckBoxComponent></CheckBoxComponent>
                                                </div>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["search-history"]} style={{ height: '766px' }}>
                            <SidebarComponent ref={sidebar} className="bg-body border-light-subtle" width="256px" position="Right" isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={isBackDrop} style={{ display: 'block' }}>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between align-items-center fs-6">
                                        <span className="small fw-medium text-body">Search history</span>
                                        <ButtonComponent cssClass="e-danger e-flat" content="Delete" type="button"></ButtonComponent>
                                    </div>
                                    <div>
                                        <ListViewComponent cssClass="e-list-template border-0" dataSource={searchItems} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex align-items-center justify-content-between border border-light-subtle mt-3 py-2" style={{ borderRadius: '12px' }}>
                                                <div className="d-flex flex-column">
                                                    <span className="text-wrap overflow-hidden small" title={data.title} style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{data.title}</span>
                                                    <span className="mt-1 text-wrap overflow-hidden small" title={data.subTitle} style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}
                                                    >{data.subTitle}</span>
                                                </div>
                                                <div className="ms-3">
                                                    <CheckBoxComponent cssClass="e-bigger"></CheckBoxComponent>
                                                </div>
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
