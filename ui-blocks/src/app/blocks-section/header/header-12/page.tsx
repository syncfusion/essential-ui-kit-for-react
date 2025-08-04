'use client';

import { useEffect, useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Header12() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-12' && blockData.theme) {
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
                        <div key={"header-12-tw"} style={{ minHeight: "36rem" }}>
                            <div className="border-b border-gray-200 dark:border-gray-600">
                                <div className="px-4 sm:px-6 py-4 sm:py-3 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Employee Attendance</h3>
                                    <div className="flex gap-2">
                                        <ButtonComponent type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="e-icons e-export-pdf e-medium"></span>
                                                <span className="ml-1 hidden md:flex">Export PDF</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent className="block lg:hidden" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 space-x-4 hidden lg:flex items-center">
                                <span className="w-48">
                                    <DatePickerComponent placeholder="Start date"></DatePickerComponent>
                                </span>
                                <span className="text-sm font-normal text-gray-900 dark:text-white">to</span>
                                <span className="w-48">
                                    <DatePickerComponent placeholder="End date"></DatePickerComponent>
                                </span>
                                <div className="flex gap-3 items-center">
                                    <div className="space-x-2 flex items-center">
                                        <label className="text-sm font-normal text-gray-900 dark:text-white text-nowrap">Select Range:</label>
                                        <span className="w-44">
                                            <DropDownListComponent dataSource={["Last Week", "Last Month", "Last Year", "Custom Range"]} placeholder="Select range"></DropDownListComponent>
                                        </span>
                                    </div>
                                    <div className="h-5 border-l border-gray-200 dark:border-gray-600"></div>
                                    <ButtonComponent content="Generate report" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-12-tw"} style={{ minHeight: "36rem" }}>
                            <div className="border-bottom">
                                <div className="px-3 px-sm-4 py-2 d-flex align-items-center justify-content-between">
                                    <h3 className="fs-5 fw-bold text-body mb-0">Employee Attendance</h3>
                                    <div className="d-flex gap-2">
                                        <ButtonComponent cssClass="e-outline" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="e-icons e-export-pdf e-medium"></span>
                                                <span className="ms-1 d-none d-md-flex">Export PDF</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent className="d-block d-lg-none" cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 d-none d-lg-flex align-items-center gap-3">
                                <span style={{ width: "200px" }}>
                                    <DatePickerComponent placeholder="Start date"></DatePickerComponent>
                                </span>
                                <span className="fs-6 fw-normal text-body">to</span>
                                <span style={{ width: "200px" }}>
                                    <DatePickerComponent placeholder="End date"></DatePickerComponent>
                                </span>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <label className="fs-6 fw-normal text-body text-nowrap">Select Range:</label>
                                        <span style={{width: "186px"}}>
                                            <DropDownListComponent dataSource={["Last Week", "Last Month", "Last Year", "Custom Range"]} placeholder="Select range"></DropDownListComponent>
                                        </span>
                                    </div>
                                    <div className="border-start" style={{ height: "16px" }}></div>
                                    <ButtonComponent cssClass="e-outline" content="Generate report" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}