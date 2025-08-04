'use client';

import { useEffect, useRef, useState } from "react";
import { TabComponent, TabItemDirective, TabItemsDirective, OverflowMode } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Header3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [overflowMode, setOverflowMode] = useState<OverflowMode>('Popup');
    const tab = useRef<TabComponent | null>(null);

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            setOverflowMode('Popup');
        } else {
            setOverflowMode('Extended');
        }
        tab.current?.refresh();
        tabCreated();
    };

    const tabSelected = (args: any): void => {
        args.previousItem?.querySelector(".e-badge")?.classList.remove("e-badge-primary");
        args.selectedItem?.querySelector(".e-badge")?.classList.add("e-badge-primary");
    };

    const tabCreated = (): void => {
        setTimeout(() => {
            const badge = tab.current?.element.querySelector(".e-toolbar-item.e-active")?.querySelector(".e-badge");
            if (badge) {
                badge.classList.add("e-badge-primary");
            }
        }, 50);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-3' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        tab.current?.refresh();
                        tabCreated();
                    }, 250);
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
        tab.current?.refresh();
        tab.current?.refreshActiveTabBorder();
        /* SB Code - End */
        window.addEventListener('resize',updateTabItems);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', updateTabItems);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-3-tw"} className="pt-4 lg:!pt-6" style={{ minHeight: '36rem' }}>
                            <div className="flex justify-between pb-3">
                                <div className="flex items-center">
                                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white ms-4 sm:ms-6">Employees</h1>
                                </div>
                                <div className="flex lg:hidden gap-4">
                                    <ButtonComponent iconCss="e-icons e-search" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="me-4 sm:me-6" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-4 sm:px-6 relative">
                                <div id={styles["tab-tw"]} className="w-full">
                                    <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode} created={tabCreated} selected={tabSelected}>
                                        <TabItemsDirective>
                                            <TabItemDirective
                                                headerTemplate={() => (
                                                    <div className="space-x-2 flex items-center">
                                                        <span>All</span>
                                                        <span className="e-badge e-badge-pill !px-2">450</span>
                                                    </div>
                                                )}
                                            ></TabItemDirective>
                                            <TabItemDirective
                                                headerTemplate={() => (
                                                    <div className="space-x-2 flex items-center">
                                                        <span>Full-time</span>
                                                        <span className="e-badge e-badge-pill !px-2">380</span>
                                                    </div>
                                                )}
                                            ></TabItemDirective>
                                            <TabItemDirective
                                                headerTemplate={() => (
                                                    <div className="space-x-2 flex items-center">
                                                        <span>Part-time</span>
                                                        <span className="e-badge e-badge-pill !px-2">50</span>
                                                    </div>
                                                )}
                                            ></TabItemDirective>
                                            <TabItemDirective
                                                headerTemplate={() => (
                                                    <div className="space-x-2 flex items-center">
                                                        <span>Contract</span>
                                                        <span className="e-badge e-badge-pill !px-2">20</span>
                                                    </div>
                                                )}
                                            ></TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </div>
                                <div className="hidden lg:flex justify-between items-center">
                                    <div className="flex gap-3 pb-3 me-6 absolute top-0 end-0" style={{ width: '300px' }}>
                                        <div className="e-input-group">
                                            <input className="e-input" type="text" placeholder="Search..." />
                                            <span className="e-input-group-icon e-icons e-search border-l-0"></span>
                                        </div>
                                        <ButtonComponent iconCss="e-icons e-filter" content="Filter" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-3-bs"} className="pt-3 pt-sm-4" style={{ minHeight: "36rem" }}>
                            <div className="d-flex justify-content-between pb-3">
                                <div className="d-flex align-items-center">
                                    <h1 className="fs-6 fw-bold text-body ms-3 ms-sm-4 mb-0">Employees</h1>
                                </div>
                                <div className="d-flex d-lg-none gap-3">
                                    <ButtonComponent cssClass="e-outline" iconCss="e-icons e-search" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline me-3 me-sm-4" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-3 px-sm-4 position-relative">
                                <div className="w-100">
                                    <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode} created={tabCreated} selected={tabSelected}>
                                        <TabItemsDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span>All</span>
                                                    <span className="e-badge e-badge-pill px-2">450</span>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span>Full-time</span>
                                                    <span className="e-badge e-badge-pill px-2">380</span>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span>Part-time</span>
                                                    <span className="e-badge e-badge-pill px-2">50</span>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span>Contract</span>
                                                    <span className="e-badge e-badge-pill px-2">20</span>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </div>
                                <div className="d-none d-lg-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3 pt-3 me-4 position-absolute top-0 end-0 translate-middle-y" style={{ width: "300px" }}>
                                        <div className="e-input-group">
                                            <input className="e-input" type="text" placeholder="Search..." />
                                            <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                        </div>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-filter" content="Filter" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}