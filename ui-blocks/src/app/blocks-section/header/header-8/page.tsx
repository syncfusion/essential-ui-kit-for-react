'use client';

import { useEffect, useRef, useState } from "react";
import { BreadcrumbComponent, BreadcrumbOverflowMode } from "@syncfusion/ej2-react-navigations";
import { SwitchComponent, ButtonComponent, ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Header8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const breadcrumb = useRef<BreadcrumbComponent | null>(null);
    const [maxItems, setMaxItems] = useState<number>(2);
    const [overflowMode, setOverflowMode] = useState<BreadcrumbOverflowMode>(BreadcrumbOverflowMode.None);
    
    const handleResize = (): void => {
        const width = window.innerWidth;
        updateBreadcrumbItems(width);
    };

    const updateBreadcrumbItems = (width: number): void => {
        if (width < 640) {
            setMaxItems(1);
        } else {
            setMaxItems(2);
        }
        setOverflowMode(maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None);
        setTimeout(() => {
            breadcrumb.current?.refresh();
        }, 200);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-8' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
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
        /* SB Code - End */
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
                        <div key={"header-8-tw"} style={{ minHeight: "36rem" }}>
                            <div className="py-3 px-4 sm:px-6 flex justify-between">
                                <div id={styles.breadcrumb} className="flex items-center">
                                    <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={overflowMode} maxItems={maxItems} items={[{ text: "Workflows" }, { text: "Row Event: Created Employee" }]} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}></BreadcrumbComponent>
                                </div>
                            </div>
                            <div className="flex justify-between px-4 sm:px-6 py-2 border-b border-gray-200 dark:border-gray-600">
                                <div className="flex gap-2 items-center">
                                    <SwitchComponent cssClass="e-bigger" checked={false} style={{ width: "50px" }}></SwitchComponent>
                                    <ChipListComponent cssClass="e-outline !rounded">
                                        <ChipsDirective>
                                            <ChipDirective text="Draft"></ChipDirective>
                                        </ChipsDirective>
                                    </ChipListComponent>
                                </div>
                                <div className="hidden sm:flex gap-3 items-center">
                                    <ButtonComponent content="View all executions" type="button"></ButtonComponent>
                                    <ButtonComponent content="Run" type="button"></ButtonComponent>
                                </div>
                                <div className="block sm:hidden">
                                    <ButtonComponent cssClass="block sm:hidden" iconCss=" e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-8-bs"} style={{ minHeight: "36rem" }}>
                            <div className="py-3 px-3 px-sm-4 d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={overflowMode} maxItems={maxItems} items={[{ text: "Workflows" }, { text: "Row Event: Created Employee" }]} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}></BreadcrumbComponent>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-3 px-sm-4 py-2 border-bottom border-light-subtle">
                                <div className="d-flex gap-2 align-items-center">
                                    <SwitchComponent cssClass="e-bigger" checked={false} style={{ width: "50px" }}></SwitchComponent>
                                    <ChipListComponent cssClass="e-outline rounded">
                                        <ChipsDirective>
                                            <ChipDirective text="Draft"></ChipDirective>
                                        </ChipsDirective>
                                    </ChipListComponent>
                                </div>
                                <div className="d-none d-sm-flex gap-3 align-items-center">
                                    <ButtonComponent cssClass="e-outline" content="View all executions" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline" content="Run" type="button"></ButtonComponent>
                                </div>
                                <div className="d-block d-sm-none">
                                    <ButtonComponent className="d-block d-sm-none" cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}