'use client';

import { useEffect, useRef, useState } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function FilterPanel1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const location: string[] = ['Headquarters', 'Remote', 'On-site', 'Regional Office', 'Working from Home'];
    const department: string[] = ['Human Resource', 'Finance', 'Marketing', 'Operation', 'IT & Support', 'Research & Development'];
    const role: string[] = ['Developer', 'Manager', 'HR', 'Designer', 'Product Manager', 'QA Engineer'];

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-1' && blockData.theme) {
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
                        <div style={{ height: "576px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="flex flex-col bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Apply Filter</h2>
                                        <ButtonComponent cssClass="e-flat text-base" iconCss="e-icons e-close" type="button" onClick={() => sidebar.current?.toggle()}></ButtonComponent>
                                    </div>
                                    <div className="flex-grow overflow-y-auto p-4" style={{ minHeight: "442px" }}>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">Location</label>
                                                <DropDownListComponent dataSource={location} placeholder="Select location"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">Department</label>
                                                <DropDownListComponent dataSource={department} placeholder="Select department"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">User Role</label>
                                                <DropDownListComponent dataSource={role} placeholder="Select role"></DropDownListComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full p-4 border-t border-gray-200 dark:border-gray-600">
                                        <ButtonComponent cssClass="w-full text-sm e-primary" content="Apply" type="button"></ButtonComponent>
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
                        <div style={{ height: "576px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="d-flex flex-column bg-body" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <h2 className="h6 mb-0 fw-bold text-body">Apply Filter</h2>
                                        <ButtonComponent cssClass="e-flat fs-6" iconCss="e-icons e-close" type="button" onClick={() => sidebar.current?.toggle()}></ButtonComponent>
                                    </div>
                                    <div className="flex-grow-1 overflow-auto p-3" style={{ minHeight: "436px" }}>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label className="fs-6 mb-1 fw-semibold text-body">Location</label>
                                                <DropDownListComponent dataSource={location} placeholder="Select location"></DropDownListComponent>
                                            </div>
                                            <div className="col-12">
                                                <label className="fs-6 mb-1 fw-semibold text-body">Department</label>
                                                <DropDownListComponent dataSource={department} placeholder="Select department"></DropDownListComponent>
                                            </div>
                                            <div className="col-12">
                                                <label className="fs-6 mb-1 fw-semibold text-body">User Role</label>
                                                <DropDownListComponent dataSource={role} placeholder="Select role"></DropDownListComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 p-3 border-top">
                                        <ButtonComponent cssClass="btn btn-primary w-100" content="Apply" type="button"></ButtonComponent>
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
        };
    };

    return getContent();
}