'use client';

import { useEffect, useRef, useState } from "react";
import { OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import styles from "./page.module.css";

export default function Header4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const tab = useRef<TabComponent | null>(null);
    const [overflowMode, setOverflowMode] = useState<OverflowMode>('Popup');

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            setOverflowMode('Popup');
        } else {
            setOverflowMode('Extended');
        }
        tab.current?.refresh();
        onTabCreated();
    };

    const onTabSelected = (args: any): void => {
        args.previousItem?.querySelector(".e-badge")?.classList.remove("e-badge-primary");
        args.selectedItem?.querySelector(".e-badge")?.classList.add("e-badge-primary");
    };

    const onTabCreated = (): void => {
        setTimeout(() => {
            const badge = tab.current?.element.querySelector(".e-toolbar-item.e-active")?.querySelector(".e-badge");
            if (badge) {
                badge.classList.add("e-badge-primary");
            }
        }, 50);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-4' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        tab.current?.refresh();
                        onTabCreated();
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
        window.addEventListener('resize', updateTabItems);
        tab.current?.refresh();
        tab.current?.refreshActiveTabBorder();
        
        return () => {
            window.removeEventListener('message', handleMessageEvent);
            window.removeEventListener('resize', updateTabItems);
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-4-tw"} className="pt-4 md:!pt-6" style={{ minHeight: "36rem" }}>
                            <div className="flex justify-between mb-3">
                                <div className="flex items-center">
                                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white ms-4 sm:ms-6">Tickets</h1>
                                </div>
                                <div className="flex gap-3">
                                    <ButtonComponent cssClass="block sm:hidden sm:me-6" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                    <span className="block sm:hidden me-4">
                                        <DropDownButtonComponent className="e-caret-hide" iconCss="e-icons e-more-vertical-1" beforeOpen={(e) => (e.cancel = true)} type="button"></DropDownButtonComponent>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-4 sm:px-6">
                                <div id={styles.tab_tw} className="w-full">
                                    <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode} created={onTabCreated} selected={onTabSelected}>
                                        <TabItemsDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className='space-x-2 flex items-center'>
                                                    <span>All</span>
                                                    <span className='e-badge e-badge-pill !px-2'>141</span>
                                                </div>
                                            )} content={() => (
                                                <div className="hidden sm:flex py-3 items-center gap-2">
                                                    <ButtonComponent className="mr-2" iconCss="e-icons e-filter" content="Add filters" type="button"></ButtonComponent>
                                                    <div className="border-l border-gray-200 dark:border-gray-600 h-5"></div>
                                                    <ChipListComponent cssClass="e-outline !rounded-2xl" enableDelete>
                                                        <ChipsDirective>
                                                            <ChipDirective text="Status: Active"></ChipDirective>
                                                            <ChipDirective text="Priority: High"></ChipDirective>
                                                        </ChipsDirective>
                                                    </ChipListComponent>
                                                    <ButtonComponent cssClass="e-flat ml-1" content="Clear all" type="button"></ButtonComponent>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className='space-x-2 flex items-center'>
                                                    <span className="sf-icon-inprogress text-base"></span>
                                                    <span>In Progress</span><span className='e-badge e-badge-pill !px-2'>156</span>
                                                </div>
                                            )} content={() => (
                                                <div className="hidden sm:flex py-3 items-center gap-2">
                                                    <ButtonComponent cssClass="mr-3" iconCss="e-icons e-filter" content="Add filters" type="button"></ButtonComponent>
                                                    <div className="border-l border-gray-200 dark:border-gray-600 h-5"></div>
                                                    <ChipListComponent cssClass="e-outline !rounded-2xl" enableDelete>
                                                        <ChipsDirective>
                                                            <ChipDirective text="Status: Active"></ChipDirective>
                                                            <ChipDirective text="Priority: High"></ChipDirective>
                                                        </ChipsDirective>
                                                    </ChipListComponent>
                                                    <ButtonComponent cssClass="e-flat ml-1" content="Clear all" type="button"></ButtonComponent>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective
                                                headerTemplate={() => (
                                                    <div className='space-x-2 flex items-center'><span className="e-icons e-clock e-medium"></span><span>Pending</span><span className='e-badge e-badge-pill !px-2'>18</span></div>
                                                )}>
                                            </TabItemDirective>
                                            <TabItemDirective
                                                headerTemplate={() => (
                                                    <div className='space-x-2 flex items-center'><span className="e-icons e-circle-check e-medium"></span><span>Resolved</span><span className='e-badge e-badge-pill !px-2'>18</span></div>
                                                )}>
                                            </TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-4-bs"} className="pt-3 pt-md-4" style={{ minHeight: "36rem" }}>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <h1 className="fs-6 fw-bold text-body ms-3 ms-sm-4 mb-0">Tickets</h1>
                                </div>
                                <div className="d-flex gap-3">
                                    <ButtonComponent cssClass="e-outline d-block d-sm-none me-sm-4" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                    <span className="d-block d-sm-none me-3">
                                        <DropDownButtonComponent cssClass="e-outline e-caret-hide" iconCss="e-icons e-more-vertical-1" beforeOpen={(e) => (e.cancel = true)} type="button"></DropDownButtonComponent>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-3 px-sm-4">
                                <div className="w-100">
                                    <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode} created={onTabCreated} selected={onTabSelected}>
                                        <TabItemsDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span>All</span>
                                                    <span className="e-badge e-badge-pill px-2">141</span>
                                                </div>
                                            )} content={() => (
                                                <div className="d-none d-sm-flex py-3 align-items-center gap-2">
                                                    <ButtonComponent cssClass="e-outline me-1" iconCss="e-icons e-filter" content="Add filters" type="button"></ButtonComponent>
                                                    <div className="border-start" style={{ height: "16px" }}></div>
                                                    <ChipListComponent cssClass="e-outline rounded-pill" enableDelete>
                                                        <ChipsDirective>
                                                            <ChipDirective text="Status: Active"></ChipDirective>
                                                            <ChipDirective text="Priority: High"></ChipDirective>
                                                        </ChipsDirective>
                                                    </ChipListComponent>
                                                    <ButtonComponent cssClass="e-flat" content="Clear all" type="button"></ButtonComponent>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="sf-icon-inprogress fs-6"></span>
                                                    <span>In Progress</span>
                                                    <span className="e-badge e-badge-pill px-2">156</span>
                                                </div>
                                            )} content={() => (
                                                <div className="d-none d-sm-flex py-3 align-items-center gap-2">
                                                    <ButtonComponent cssClass="e-outline me-1" iconCss="e-icons e-filter" content="Add filters" type="button"></ButtonComponent>
                                                    <div className="border-start" style={{ height: "16px" }}></div>
                                                    <ChipListComponent cssClass="e-outline rounded-pill" enableDelete>
                                                        <ChipsDirective>
                                                            <ChipDirective text="Status: Active"></ChipDirective>
                                                            <ChipDirective text="Priority: High"></ChipDirective>
                                                        </ChipsDirective>
                                                    </ChipListComponent>
                                                    <ButtonComponent cssClass="e-flat" content="Clear all" type="button"></ButtonComponent>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="e-icons e-clock e-medium"></span>
                                                    <span>Pending</span>
                                                    <span className="e-badge e-badge-pill px-2">18</span>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                            <TabItemDirective headerTemplate={() => (
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="e-icons e-circle-check e-medium"></span>
                                                    <span>Resolved</span>
                                                    <span className="e-badge e-badge-pill px-2">18</span>
                                                </div>
                                            )}>
                                            </TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}