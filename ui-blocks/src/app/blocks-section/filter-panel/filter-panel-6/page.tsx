'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, SidebarComponent } from "@syncfusion/ej2-react-navigations";

export default function FilterPanel6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const autoComplete = useRef<AutoCompleteComponent | null>(null);
    const industryAccordion = useRef<AccordionComponent | null>(null);
    const sizeAccordion = useRef<AccordionComponent | null>(null);
    const locationAccordion = useRef<AccordionComponent | null>(null);
    const typeAccordion = useRef<AccordionComponent | null>(null);

    const addSearchIcon = () => {
        const container =autoComplete.current && autoComplete.current['inputWrapper'].container;
        if (container && !container.querySelector('.e-search')) {
            const searchIcon = document.createElement('span');
            searchIcon.className = 'e-icons e-search';
            searchIcon.style.cssText = 'display: flex; align-items: center; margin-left: 10px;';
            container.insertAdjacentElement('afterbegin', searchIcon);
        }
    };

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-6' && blockData.theme) {
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
        setTimeout(() => {
            industryAccordion.current?.refresh();
            sizeAccordion.current?.refresh();
            locationAccordion.current?.refresh();
            typeAccordion.current?.refresh();
        }, 800);
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
                    <section className="bg-white dark:bg-gray-900">
                        <div style={{ height: "985px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="flex flex-col bg-white dark:bg-gray-800" width={width} isOpen={true} position="Right" type="Push" showBackdrop={true} closeOnDocumentClick={false} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Filters</h2>
                                        <ButtonComponent cssClass="e-flat text-sm" isPrimary={true} content="Clear all" type="button"></ButtonComponent>
                                    </div>
                                    <div className="p-4 pt-3 pb-0 flex">
                                        <AutoCompleteComponent ref={autoComplete} className="w-full" placeholder="Search" showClearButton={true} created={addSearchIcon}></AutoCompleteComponent>
                                    </div>
                                    <div className="pt-3">
                                        <AccordionComponent ref={industryAccordion} className="border-b-0 border-r-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                header={() => (
                                                    <div className="font-medium text-gray-900 dark:text-white">Industry</div>
                                                )} 
                                                content={() => (
                                                    <div className="flex flex-col gap-4 py-1 px-1">
                                                        <CheckBoxComponent label="Technology" checked={true}></CheckBoxComponent>
                                                        <CheckBoxComponent label="Healthcare" checked={true}></CheckBoxComponent>
                                                        <CheckBoxComponent label="Finance"></CheckBoxComponent>
                                                        <CheckBoxComponent label="Education"></CheckBoxComponent>
                                                        <CheckBoxComponent label="Manufacturing"></CheckBoxComponent>
                                                    </div>
                                                )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={sizeAccordion} className="border-b-0 border-r-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                header={() => (
                                                    <div className="font-medium text-gray-900 dark:text-white">Company Size</div>
                                                )} 
                                                content={() => (
                                                    <div className="flex flex-col gap-4 py-1 px-1">
                                                        <CheckBoxComponent label="1-50" checked={true} ></CheckBoxComponent>
                                                        <CheckBoxComponent label="51-200" checked={true}></CheckBoxComponent>
                                                        <CheckBoxComponent label="201-500"></CheckBoxComponent>
                                                        <CheckBoxComponent label="501-1000"></CheckBoxComponent>
                                                        <CheckBoxComponent label="1000+"></CheckBoxComponent>
                                                    </div>
                                                )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={locationAccordion} className="border-b-0 border-r-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                header={() => (
                                                    <div className="font-medium text-gray-900 dark:text-white">Company Places</div>
                                                )} 
                                                content={() => (
                                                    <div className="flex flex-col gap-4 py-1 px-1">
                                                        <CheckBoxComponent label="North America" checked={true}></CheckBoxComponent>
                                                        <CheckBoxComponent label="Europe" checked={true}></CheckBoxComponent>
                                                        <CheckBoxComponent label="Asia"></CheckBoxComponent>
                                                        <CheckBoxComponent label="South America"></CheckBoxComponent>
                                                        <CheckBoxComponent label="Africa"></CheckBoxComponent>
                                                    </div>
                                                )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={typeAccordion} className="border-b-0 border-r-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                header={() => (
                                                    <div className="font-medium text-gray-900 dark:text-white">Company Type</div>
                                                )} 
                                                content={() => (
                                                    <div className="flex flex-col gap-4 py-1 px-1">
                                                        <CheckBoxComponent label="Public"></CheckBoxComponent>
                                                        <CheckBoxComponent label="Private"></CheckBoxComponent>
                                                    </div>
                                                )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                    </div>
                                    <div className="flex justify-end gap-3 w-full p-4 border-t border-gray-200 dark:border-gray-600">
                                        <ButtonComponent cssClass="text-sm e-primary" content="Apply Filters" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-round" iconCss="e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body" key={"filter-6-bs"}>
                        <div style={{ height: "990px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="d-flex flex-column bg-body" width={width} isOpen={true} position="Right" type="Push" showBackdrop={true} closeOnDocumentClick={false} style={{ display: "block" }}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <h2 className="h6 mb-0 fw-bold text-body">Filters</h2>
                                        <ButtonComponent className="e-flat e-primary" content="Clear all" type="button"></ButtonComponent>
                                    </div>
                                    <div className="p-3 pt-3 pb-0 d-flex">
                                        <AutoCompleteComponent ref={autoComplete} className="w-100" placeholder="Search" showClearButton={true} created={addSearchIcon}></AutoCompleteComponent>
                                    </div>
                                    <div className="pt-3">
                                        <AccordionComponent ref={industryAccordion} className="border-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                    header={() => (
                                                        <div className="fw-medium text-body">Industry</div>
                                                    )} 
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 py-1 px-1">
                                                            <CheckBoxComponent label="Technology" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Healthcare" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Finance"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Education"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Manufacturing"></CheckBoxComponent>
                                                        </div>
                                                    )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={sizeAccordion} className="border-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                    header={() => (
                                                        <div className="fw-medium text-body">Company Size</div>
                                                    )} 
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 py-1 px-1">
                                                            <CheckBoxComponent label="1-50" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="51-200" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="201-500"></CheckBoxComponent>
                                                            <CheckBoxComponent label="501-1000"></CheckBoxComponent>
                                                            <CheckBoxComponent label="1000+"></CheckBoxComponent>
                                                        </div>
                                                    )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={locationAccordion} className="border-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                    header={() => (
                                                        <div className="fw-medium text-body">Company Places</div>
                                                    )} 
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 py-1 px-1">
                                                            <CheckBoxComponent label="North America" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Europe" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Asia"></CheckBoxComponent>
                                                            <CheckBoxComponent label="South America"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Africa"></CheckBoxComponent>
                                                        </div>
                                                    )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={typeAccordion} className="border-0" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true} 
                                                    header={() => (
                                                        <div className="fw-medium text-body">Company Type</div>
                                                    )} 
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 py-1 px-1">
                                                            <CheckBoxComponent label="Public"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Private"></CheckBoxComponent>
                                                        </div>
                                                    )}>
                                                </AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                    </div>
                                    <div className="d-flex justify-content-end gap-3 w-100 p-3 border-top">
                                        <ButtonComponent className="e-primary" content="Apply Filters" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}