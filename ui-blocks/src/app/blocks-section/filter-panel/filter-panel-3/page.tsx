'use client';

import { useEffect, useRef, useState } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function FilterPanel3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const category: string[] = ['Technical Support', 'Account Management', 'Billing', 'Feature Request', 'Bug Report', 'Security', 'Performance', 'Documentation'];
    const tags: string[] = ['Frontend', 'Backend ', 'Database', 'Network', 'API', 'UI/UX', 'Mobile'];
    const priority: string[] = ['Critical', 'High', 'Medium', 'Low'];
    const requester: string[] = ['Jane Smith', 'Mark Johnson', 'Emily White', 'Tom Harris'];
    const status: string[] = ['Open', 'In Progress', 'Pending', 'On Hold', 'Resolved', 'Closed'];

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-3' && blockData.theme) {
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
                        <div key={"filter-3-tw"} style={{ height: "800px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="flex flex-col bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Apply Filter</h2>
                                        <ButtonComponent cssClass="e-flat e-danger text-sm" content="Discard" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex-grow overflow-y-auto p-4" style={{ minHeight: "666px" }}>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <h6 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2 pt-1">Classification</h6>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                                <DropDownListComponent dataSource={category} placeholder="Select category"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                                                <DropDownListComponent dataSource={tags} placeholder="Select tags"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                                <DropDownListComponent dataSource={priority} placeholder="Select priority levels"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <hr className="w-full border-gray-200 dark:border-gray-600 mt-4 mb-3" />
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <h6 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">Assignment</h6>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Agent</label>
                                                <DropDownListComponent placeholder="Select agent"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Requester</label>
                                                <DropDownListComponent dataSource={requester} placeholder="Select requester"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <hr className="w-full border-gray-200 dark:border-gray-600 mt-4 mb-3" />
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <h6 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">Status and Timeline</h6>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                                <DropDownListComponent dataSource={status} placeholder="Open"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Response Due</label>
                                                <DatePickerComponent className="shadow-none" placeholder="Pick a due date"></DatePickerComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3 w-full p-4 border-t border-gray-200 dark:border-gray-600 e-bigger">
                                        <ButtonComponent cssClass="e-flat e-primary border-0" content="Save as" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" content="Apply" type="button"></ButtonComponent>
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
                        <div style={{ height: "824px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="d-flex flex-column bg-body" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <h2 className="h6 mb-0 fw-bold text-body">Apply Filter</h2>
                                        <ButtonComponent cssClass="e-flat e-danger" content="Discard" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex-grow-1 overflow-auto p-3" style={{ minHeight: "666px" }}>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <h6 className="fw-medium text-muted mb-2 pt-1">Classification</h6>
                                                <label className="fs-6 mb-1 fw-medium text-body">Category</label>
                                                <DropDownListComponent dataSource={category} placeholder="Select category"></DropDownListComponent>
                                            </div>
                                            <div className="col-12">
                                                <label className="fs-6 mb-1 fw-medium text-body">Tags</label>
                                                <DropDownListComponent dataSource={tags} placeholder="Select tags"></DropDownListComponent>
                                            </div>
                                            <div className="col-12">
                                                <label className="fs-6 mb-1 fw-medium text-body">Priority</label>
                                                <DropDownListComponent dataSource={priority} placeholder="Select priority levels"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <hr className="w-100 border-top opacity-100 my-3" />
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <h6 className="fw-medium text-muted mb-2">Assignment</h6>
                                                <label className="fs-6 mb-1 fw-medium text-body">Agent</label>
                                                <DropDownListComponent placeholder="Select agent"></DropDownListComponent>
                                            </div>
                                            <div className="col-12">
                                                <label className="fs-6 mb-1 fw-medium text-body">Requester</label>
                                                <DropDownListComponent dataSource={requester} placeholder="Select requester"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <hr className="w-100 border-top opacity-100 my-3" />
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <h6 className="fw-medium text-muted mb-2">Status and Timeline</h6>
                                                <label className="fs-6 mb-1 fw-medium text-body">Status</label>
                                                <DropDownListComponent dataSource={status} placeholder="Open"></DropDownListComponent>
                                            </div>
                                            <div className="col-12 pb-4">
                                                <label className="fs-6 mb-1 fw-medium text-body">Response Due</label>
                                                <DatePickerComponent cssClass="shadow-none" placeholder="Pick a due date"></DatePickerComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end gap-3 w-100 p-3 border-top">
                                        <ButtonComponent cssClass="e-flat" content="Save as" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" content="Apply" type="button"></ButtonComponent>
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