'use client';

import { useEffect, useRef, useState } from "react";
import { OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import { ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Header6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const tab = useRef<TabComponent | null>(null);
    const dropdown = useRef<DropDownButtonComponent | null>(null);
    const [overflowMode, setOverflowMode] = useState<OverflowMode>('Popup');
    const headerData: any = { new: 156, verificationDue: 23, approvalDue: 18 };

    const handleResize = (): void => {
        updateTabItems();
        closeDropdown();
    };

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            setOverflowMode('Popup');
        } else {
            setOverflowMode('Extended');
        }
        tab.current?.refresh();
    };

    const closeDropdown = (): void => {
        if (dropdown.current && dropdown.current.element.classList.contains('e-active')) {
            dropdown.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-6' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        tab.current?.refresh();
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
                        <div key={"header-6-tw"} className="pt-2 sm:pt-4" style={{ minHeight: "36rem" }}>
                            <div className="px-4 sm:px-6">
                                <div className="flex justify-between relative">
                                    <div id={styles.tab} className="pt-2 w-full">
                                        <TabComponent ref={tab} selectedItem={1} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                            <TabItemsDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p>New <span>({headerData?.new})</span></p>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p>Verification Due <span>({headerData?.verificationDue})</span></p>
                                                    </div>
                                                )} content={() => (
                                                    <div>
                                                        <div className="flex lg:hidden items-center mt-4">
                                                            <div className="e-input-group w-60 me-3">
                                                                <input className="e-input" type="text" placeholder="Search..." />
                                                                <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                                            </div>
                                                            <div className="border-l border-gray-200 dark:border-gray-600 h-5 me-2"></div>
                                                            <DropDownButtonComponent ref={dropdown} id={styles.dropdown} items={[{ text: 'Review Today' }, { text: 'Expired' }, { text: 'Upcoming' }, { text: 'Unassigned' }]} cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></DropDownButtonComponent>
                                                        </div>
                                                        <div className="border-b border-gray-200 mt-4 dark:border-gray-600 block sm:hidden"></div>
                                                        <div className="hidden lg:flex py-3 items-center">
                                                            <div className="e-input-group w-60 me-3">
                                                                <input className="e-input" type="text" placeholder="Search..." />
                                                                <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                                            </div>
                                                            <div className="border-l border-gray-200 dark:border-gray-600 h-5 me-2"></div>
                                                            <ChipListComponent>
                                                                <ChipsDirective>
                                                                    <ChipDirective cssClass={"e-outline !rounded-2xl"} text={"Review Today"}></ChipDirective>
                                                                    <ChipDirective cssClass={"e-outline !rounded-2xl"} text={"Expired"}></ChipDirective>
                                                                    <ChipDirective cssClass={"e-outline !rounded-2xl"} text={"Upcoming"}></ChipDirective>
                                                                    <ChipDirective cssClass={"e-outline !rounded-2xl"} text={"Unassigned"}></ChipDirective>
                                                                </ChipsDirective>
                                                            </ChipListComponent>
                                                        </div>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p>Approval Due <span>({headerData?.approvalDue})</span></p>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p>Processed</p>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                    <div className="absolute top-0 end-0">
                                        <div className="hidden lg:flex items-center gap-3 pt-2">
                                            <ButtonComponent iconCss="e-icons e-filter" content="Filter" type="button"></ButtonComponent>
                                            <DropDownButtonComponent iconCss="e-icons e-table" content="Columns" beforeOpen={(e) => (e.cancel = true)} type="button"></DropDownButtonComponent>
                                        </div>
                                        <div className="hidden sm:flex lg:hidden items-center gap-3 pt-2">
                                            <ButtonComponent iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                            <DropDownButtonComponent iconCss="e-icons e-table" beforeOpen={(e) => (e.cancel = true)} type="button"></DropDownButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-6-bs"} className="pt-3 pt-sm-4" style={{ minHeight: "36rem" }}>
                            <div className="px-3 px-sm-4">
                                <div className="d-flex justify-content-between position-relative">
                                    <div id={styles.tab} className="w-100">
                                        <TabComponent ref={tab} selectedItem={1} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                            <TabItemsDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p className="mb-0">New <span>({headerData?.new})</span></p>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p className="mb-0">Verification Due <span>({headerData?.verificationDue})</span></p>
                                                    </div>
                                                )} content={() => (
                                                    <div>
                                                        <div className="d-flex d-lg-none align-items-center mt-3">
                                                            <div className="e-input-group me-3" style={{ width: "240px" }}>
                                                                <input className="e-input" type="text" placeholder="Search..." />
                                                                <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                                            </div>
                                                            <div className="border-start me-2" style={{ height: "20px" }}></div>
                                                            <DropDownButtonComponent ref={dropdown} id={styles.dropdown} items={[{ text: "Review Today" }, { text: "Expired" }, { text: "Upcoming" }, { text: "Unassigned" }]} cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></DropDownButtonComponent>
                                                        </div>
                                                        <div className="border-bottom mt-4 d-block d-sm-none"></div>
                                                        <div className="d-none d-lg-flex py-3 align-items-center">
                                                            <div className="e-input-group me-3" style={{ width: "240px" }}>
                                                                <input className="e-input" type="text" placeholder="Search..." />
                                                                <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                                            </div>
                                                            <div className="border-start me-2" style={{ height: "20px" }}></div>
                                                            <ChipListComponent>
                                                                <ChipsDirective>
                                                                    <ChipDirective cssClass="e-outline rounded-pill" text="Review Today"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline rounded-pill" text="Expired"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline rounded-pill" text="Upcoming"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline rounded-pill" text="Unassigned"></ChipDirective>
                                                                </ChipsDirective>
                                                            </ChipListComponent>
                                                        </div>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p className="mb-0">Approval Due <span>({headerData?.approvalDue})</span></p>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                                <TabItemDirective headerTemplate={() => (
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p className="mb-0">Processed</p>
                                                    </div>
                                                )}>
                                                </TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                    <div className="position-absolute top-0 end-0 translate-middle-y">
                                        <div className="d-flex align-items-center mt-3 d-none d-lg-block">
                                            <ButtonComponent className="me-3" cssClass="e-outline" iconCss="e-icons e-filter e-medium" content="Filter" type="button"></ButtonComponent>
                                            <DropDownButtonComponent cssClass="e-outline" iconCss="e-icons e-table" content="Columns" beforeOpen={(e) => e.cancel = true} type="button"></DropDownButtonComponent>
                                        </div>
                                        <div className="d-flex align-items-center mt-3 d-none d-sm-block d-lg-none">
                                            <ButtonComponent className="me-3" cssClass="e-outline" iconCss="e-icons e-filter e-medium" type="button"></ButtonComponent>
                                            <DropDownButtonComponent cssClass="e-outline" iconCss="e-icons e-table" beforeOpen={(e) => e.cancel = true} type="button"></DropDownButtonComponent>
                                        </div>
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