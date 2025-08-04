'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, SidebarComponent, TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import styles from "./page.module.css";

export default function FilterPanel4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const requesterAccordion = useRef<AccordionComponent | null>(null);
    const ticketAccordion = useRef<AccordionComponent | null>(null);
    const assignee: string[] = ['Jane Smith - Support Engineer', 'Mark Johnson - Technical Lead ', 'Emily White - Support Specialist', 'Tom Harris - Product Expert'];
    const tags: string[] = ['Technical Issue (Type)', 'Bug (Type)', 'Feature Request (Type)', 'High Priority (Priority)', 'Customer Impact (Impact)', 'Backend (Area)', 'Frontend (Area)'];
    const status: string[] = ['Open', 'In Progress', 'Closed'];

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */  
    const refreshDialog = (timeout: number): void => {
        setTimeout(() => {
            requesterAccordion.current?.refresh();
            ticketAccordion.current?.refresh();
        }, timeout);
    }
   
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-4' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshDialog(200);
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
        refreshDialog(1000);
        /* SB Code - End */
        window.addEventListener('resize', setSidebarWidth);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', setSidebarWidth);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div id={styles["filter-4"]} style={{ height: "780px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="flex flex-col bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="flex justify-between w-full border-b border-gray-200 dark:border-gray-600">
                                    <div className="4/5">
                                        <TabComponent headerPlacement="Top">
                                            <TabItemsDirective>
                                                <TabItemDirective
                                                    headerTemplate={() => (
                                                        <div className="flex items-center justify-center">
                                                            <span className="e-icons text-base e-print-layout"></span>
                                                            <span className="ml-2 font-semibold">Details</span>
                                                        </div>
                                                    )}
                                                ></TabItemDirective>
                                                <TabItemDirective
                                                    headerTemplate={() => (
                                                        <div className="flex items-center justify-center">
                                                            <span className="e-icons text-base e-grid-view"> </span>
                                                            <span className="ml-2 font-semibold">Apps</span>
                                                        </div>
                                                    )}
                                                ></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                    <div className="w-1/5 px-1 border-l border-gray-200 dark:border-gray-600 flex justify-center items-center">
                                        <a href="#" className="e-icons e-chevron-right-double text-xl text-gray-500 dark:text-white cursor-pointer"></a>
                                    </div>
                                </div>
                                <AccordionComponent ref={requesterAccordion} className="border-0 border-b bg-transparent" expandMode="Multiple">
                                    <AccordionItemsDirective>
                                        <AccordionItemDirective expanded={true} 
                                            header={() => (
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">Requester Details</div>
                                            )} 
                                            content={() => (
                                                <div className="flex items-center space-x-2 p-1">
                                                    <span className="e-avatar e-avatar-medium e-avatar-circle bg-primary-600 dark:bg-primary-400 text-sm text-white dark:text-black">MG</span>
                                                    <div>
                                                        <h2 className="text-sm font-medium text-gray-900 dark:text-white">Michael Green</h2>
                                                        <a href="#" className="text-xs font-normal text-gray-500 dark:text-gray-400">michael.green@example.com</a>
                                                    </div>
                                                </div>
                                            )}
                                        ></AccordionItemDirective>
                                    </AccordionItemsDirective>
                                </AccordionComponent>
                                <AccordionComponent ref={ticketAccordion} className="border-0 bg-transparent" expandMode="Multiple">
                                    <AccordionItemsDirective>
                                        <AccordionItemDirective expanded={true}
                                            header={() => (
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">Ticket Properties</div>
                                            )} 
                                            content={() => (
                                                <div className="grid grid-cols-1 gap-4 w-full px-1 pb-1">
                                                    <div className="w-1/2">
                                                        <label className="block my-1 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                                        <DropDownListComponent dataSource={status} placeholder="Open"></DropDownListComponent>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Assignee</label>
                                                        <DropDownListComponent dataSource={assignee} placeholder="Select assignee"></DropDownListComponent>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Response Due</label>
                                                        <DatePickerComponent cssClass="shadow-none" placeholder="MM/DD/YYYY"></DatePickerComponent>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Resolution Due</label>
                                                        <DatePickerComponent cssClass="shadow-none" placeholder="MM/DD/YYYY"></DatePickerComponent>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                                                        <DropDownListComponent dataSource={tags} placeholder="Enter tags"></DropDownListComponent>
                                                    </div>
                                                </div>
                                            )}
                                        ></AccordionItemDirective>
                                    </AccordionItemsDirective>
                                </AccordionComponent>
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
                        <div style={{ height: "780px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="d-flex flex-column bg-body" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="d-flex justify-content-between pt-2 w-100">
                                    <div className="w-100">
                                        <TabComponent headerPlacement="Top">
                                            <TabItemsDirective>
                                                <TabItemDirective 
                                                    headerTemplate={() => ( 
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="e-icons e-print-layout fs-6"></span>
                                                            <span className="fw-medium fs-6">Details</span>
                                                        </div>
                                                    )} 
                                                ></TabItemDirective>
                                                <TabItemDirective 
                                                    headerTemplate={() => (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="e-icons e-grid-view fs-6"></span>
                                                            <span className="fw-medium fs-6">Apps</span>
                                                        </div>
                                                    )}
                                                ></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                    <div className="w-10 px-3 border-bottom border-subtle d-flex justify-content-center align-items-center">
                                        <a href="#" className="e-icons e-chevron-right-double small text-decoration-none text-secondary"></a>
                                    </div>
                                </div>
                                <div>
                                    <AccordionComponent ref={requesterAccordion} className="border-0 border-bottom bg-transparent" expandMode="Multiple">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective expanded={true} 
                                                header={() => (
                                                    <div className="fs-6 fw-medium text-body">Requester Details</div>
                                                )} 
                                                content={() => (
                                                    <div className="d-flex align-items-center gap-2 p-1">
                                                        <span className="e-avatar e-avatar-medium e-avatar-circle bg-primary text-white">MG</span>
                                                        <div>
                                                            <h2 className="fs-6 mb-1 fw-medium text-body">Michael Green</h2>
                                                            <a href="#" className="fs-6 fw-normal text-secondary text-decoration-none">michael.green@example.com</a>
                                                        </div>
                                                    </div>
                                                )}
                                            ></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                    <AccordionComponent ref={ticketAccordion} className="border-0 bg-transparent" expandMode="Multiple">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective expanded={true} 
                                                header={() => (
                                                    <div className="fs-6 fw-medium text-body">Ticket Properties</div>
                                                )} 
                                                content={() => (
                                                    <div className="row g-3 w-100 m-0 pb-1">
                                                        <div className="col-6 px-1 mt-1">
                                                            <label className="mb-1 fs-6 fw-medium text-body">Status</label>
                                                            <DropDownListComponent dataSource={status} placeholder="Open"></DropDownListComponent>
                                                        </div>
                                                        <div className="col-12 px-1">
                                                            <label className="mb-1 fs-6 fw-medium text-body">Assignee</label>
                                                            <DropDownListComponent dataSource={assignee} placeholder="Select assignee"></DropDownListComponent>
                                                        </div>
                                                        <div className="col-12 px-1">
                                                            <label className="mb-1 fs-6 fw-medium text-body">Response Due</label>
                                                            <DatePickerComponent cssClass="shadow-none" placeholder="MM/DD/YYYY"></DatePickerComponent>
                                                        </div>
                                                        <div className="col-12 px-1">
                                                            <label className="mb-1 fs-6 fw-medium text-body">Resolution Due</label>
                                                            <DatePickerComponent cssClass="shadow-none" placeholder="MM/DD/YYYY"></DatePickerComponent>
                                                        </div>
                                                        <div className="col-12 px-1">
                                                            <label className="mb-1 fs-6 fw-medium text-body">Tags</label>
                                                            <DropDownListComponent dataSource={tags} placeholder="Enter tags"></DropDownListComponent>
                                                        </div>
                                                    </div>
                                                )}
                                            ></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
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
        };
    };

    return getContent();
}