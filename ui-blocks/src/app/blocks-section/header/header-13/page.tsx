'use client';

import { useEffect, useState } from "react";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Header13() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-13' && blockData.theme) {
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
        
        return () => {
            window.removeEventListener('message', handleMessageEvent);
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-13-tw"} style={{ minHeight: "36rem" }}>
                            <div className="pt-4 sm:pt-6">
                                <div className="px-4 sm:px-6">
                                    <PagerComponent className="border-0 bg-transparent !p-0" template={() => (
                                        <div className="!flex items-center gap-2">
                                            <span className="e-btn-group !shadow-none">
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-chevron-left !text-base" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-chevron-right !text-base" type="button"></ButtonComponent>
                                            </span>
                                        </div>
                                    )}>
                                    </PagerComponent>
                                </div>
                                <div className="flex justify-between py-3 px-4 sm:px-6">
                                    <div className="flex items-center">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Activity</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <ButtonComponent type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="e-icons e-download text-base"></span>
                                                <span className="ml-1 hidden md:block">Download</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent className="block lg:hidden" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 dark:border-gray-600"></div>
                            <div className="hidden lg:flex items-center gap-3 mt-3 px-6">
                                <span className="w-40">
                                    <TextBoxComponent placeholder="Enter email ID"></TextBoxComponent>
                                </span>
                                <span className="w-44">
                                    <DropDownListComponent dataSource={['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom Range...']} placeholder="Period: Custom"></DropDownListComponent>
                                </span>
                                <span className="w-64">
                                    <DateRangePickerComponent placeholder="MM/DD/YYYY - MM/DD/YYYY"></DateRangePickerComponent>
                                </span>
                                <span className="w-44">
                                    <DropDownListComponent dataSource={['All Products', 'Product A', 'Product B', 'Product C', 'Product D', 'Custom Selection...']} placeholder="Product: All"></DropDownListComponent>
                                </span>
                                <span className="w-44">
                                    <DropDownListComponent dataSource={['All Regions', 'North America', 'Europe', 'Asia-Pacific', 'South America', 'Middle East & Africa', 'Custom Region...']} placeholder="Region: All"></DropDownListComponent>
                                </span>
                                <div className="h-5 border-l border-gray-200 dark:border-gray-600"></div>
                                <ButtonComponent content="Reset" type="button"></ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-13-bs"} style={{ minHeight: "36rem" }}>
                            <div className="pt-3 pt-sm-4">
                                <div className="px-3 px-sm-4">
                                    <PagerComponent className="border-0 bg-transparent p-0" template={() => (
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="btn-group shadow-none">
                                                <ButtonComponent className="e-icons e-chevron-left fs-6" cssClass="e-flat" type="button"></ButtonComponent>
                                                <ButtonComponent className="e-icons e-chevron-right fs-6" cssClass="e-flat" type="button"></ButtonComponent>
                                            </span>
                                        </div>
                                    )}>
                                    </PagerComponent>
                                </div>
                                <div className="d-flex justify-content-between py-2 my-1 px-3 px-sm-4">
                                    <div className="d-flex align-items-center">
                                        <h3 className="fs-5 fw-bold text-body mb-0">Sales Activity</h3>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <ButtonComponent cssClass="e-outline" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="e-icons e-download fs-5"></span>
                                                <span className="ms-1 d-none d-md-block">Download</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent className="d-block d-lg-none" cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="d-none d-lg-flex align-items-center gap-3 mt-3 px-4">
                                <span style={{ width: "150px" }}>
                                    <TextBoxComponent type="text" placeholder="Enter email ID"></TextBoxComponent>
                                </span>
                                <span style={{ width: "182px" }}>
                                    <DropDownListComponent dataSource={['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom Range...']} placeholder="Period: Custom"></DropDownListComponent>
                                </span>
                                <span style={{ width: "242px" }}>
                                    <DateRangePickerComponent placeholder="MM/DD/YYYY - MM/DD/YYYY"></DateRangePickerComponent>
                                </span>
                                <span style={{ width: "182px" }}>
                                    <DropDownListComponent dataSource={['All Products', 'Product A', 'Product B', 'Product C', 'Product D', 'Custom Selection...']} placeholder="Product: All"></DropDownListComponent>
                                </span>
                                <span style={{ width: "182px" }}>
                                    <DropDownListComponent dataSource={['All Regions', 'North America', 'Europe', 'Asia-Pacific', 'South America', 'Middle East & Africa', 'Custom Region...']} placeholder="Region: All"></DropDownListComponent>
                                </span>
                                <div className="border-start border-secondary" style={{ height: "16px" }}></div>
                                <ButtonComponent cssClass="e-outline" content="Reset" type="button"></ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}