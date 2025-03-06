'use client';

import { useEffect, useRef, useState } from "react";
import { BreadcrumbComponent, BreadcrumbOverflowMode, OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import styles from "./page.module.css";

export default function Header11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const tab = useRef<TabComponent | null>(null);
    const breadcrumb = useRef<BreadcrumbComponent | null>(null);
    const [maxItems, setMaxItems] = useState<number>(2);
    const [tabOverflowMode, setTabOverflowMode] = useState<OverflowMode>('Popup');
    const [breadcrumbOverflowMode, setBreadcrumbOverflowMode] = useState<BreadcrumbOverflowMode>(BreadcrumbOverflowMode.None);

    const handleResize = (): void => {
        const width = window.innerWidth;
        updateBreadcrumbItems(width);
        updateTabItems();
    };

    const updateBreadcrumbItems = (width: number): void => {
        if (width < 640) {
            setMaxItems(1);
        } else {
            setMaxItems(2);
        }
        setBreadcrumbOverflowMode(maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None);
        setTimeout(() => {
            breadcrumb.current?.refresh();
        }, 200);
    };

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            setTabOverflowMode('Popup');
        } else {
            setTabOverflowMode('Extended');
        }
        tab.current?.refresh();
    };
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-11' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        tab.current?.refresh();
                        breadcrumb.current?.refresh();
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
        window.addEventListener('resize', handleResize);
        tab.current?.refresh();
        tab.current?.refreshActiveTabBorder();

        return () => {
            window.removeEventListener('message', handleMessageEvent);
            window.removeEventListener('resize', handleResize);
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-11-tw"} className="pt-4 sm:pt-6" style={{ minHeight: "36rem" }}>
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-white ms-4 sm:ms-6">API Reference Builder</h1>
                            <div className="flex items-center justify-between">
                                <div className="mx-4 sm:mx-6 w-full">
                                    <div id={styles.breadcrumb} className="pt-2 pb-3">
                                        <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={breadcrumbOverflowMode} maxItems={maxItems} items={[{ text: "Documentation" }, { text: "API Reference Builder" }]} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}></BreadcrumbComponent>
                                    </div>
                                    <div id={styles.tab} className="w-full">
                                        <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={tabOverflowMode}>
                                            <TabItemsDirective>
                                                <TabItemDirective headerTemplate={() => <div>Settings</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Parameters</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Examples</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Preview</div>}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-11-bs"} className="pt-3 pt-sm-4" style={{ minHeight: "36rem" }}>
                            <h1 className="fs-5 fw-bold text-body ms-3 ms-sm-4 mb-1">API Reference Builder</h1>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="mx-3 mx-sm-4 w-100">
                                    <div id="breadcrumb" className="pt-2 pb-3">
                                        <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={breadcrumbOverflowMode} maxItems={maxItems} items={[{ text: "Documentation" }, { text: "API Reference Builder" }]}></BreadcrumbComponent>
                                    </div>
                                    <div id={styles.tab} className="w-100">
                                        <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={tabOverflowMode}>
                                            <TabItemsDirective>
                                                <TabItemDirective headerTemplate={() => <div>Settings</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Parameters</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Examples</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Preview</div>}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
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