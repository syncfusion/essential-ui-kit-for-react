'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";

export default function Grid2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const gridData: any[] = [
        {
            id: 1,
            ticketId: "HD-0001",
            issue: "Laptop not powering on",
            category: "Hardware",
            estimated: "1 hour",
            responseDue: new Date("05/1/2024"),
            priority: "High",
            assignee: {
                name: "Jane Smith",
                initial: "",
                email: "jane.smith@example.com",
                colorTheme: "",
                avatar: "avatar-8.jpg"
            },
            createdBy: {
                name: "Sarah Lee",
                initial: "SL",
                colorTheme: "Blue",
                avatar: ""
            },
            status: "Not Started"
        },
        {
            id: 2,
            ticketId: "HD-0002",
            issue: "Email application not syncing",
            category: "Software",
            estimated: "2 days",
            responseDue: new Date("10/1/2024"),
            priority: "Medium",
            assignee: {
                name: "Mark Johnson",
                initial: "",
                email: "mark.johnson@example.com",
                colorTheme: "",
                avatar: "avatar-1.jpg"
            },
            createdBy: {
                name: "Tom Richards",
                initial: "",
                colorTheme: "",
                avatar: "avatar-2.jpg"
            },
            status: "In Progress"
        },
        {
            id: 3,
            ticketId: "HD-0003",
            issue: "Unable to connect to VPN",
            category: "Network",
            estimated: "4 hours",
            responseDue: new Date("01/15/2024"),
            priority: "High",
            assignee: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: "Red",
                avatar: ""
            },
            createdBy: {
                name: "Lisa Brown",
                initial: "",
                colorTheme: "",
                avatar: "avatar-10.jpg"
            },
            status: "Not Started"
        },
        {
            id: 4,
            ticketId: "HD-0004",
            issue: "Printer not responding",
            category: "Hardware",
            estimated: "7 hours",
            responseDue: new Date("01/20/2024"),
            priority: "Low",
            assignee: {
                name: "Tom Hicks",
                initial: "",
                email: "tom.hicks@example.com",
                colorTheme: "",
                avatar: "avatar-3.jpg"
            },
            createdBy: {
                name: "Jane Smith",
                initial: "JS",
                colorTheme: "Green",
                avatar: ""
            },
            status: "Resolved"
        },
        {
            id: 5,
            ticketId: "HD-0005",
            issue: "Application crashing",
            category: "Software",
            estimated: "1 day",
            responseDue: new Date("01/25/2024"),
            priority: "High",
            assignee: {
                name: "David Clark",
                initial: "",
                email: "david.clark@example.com",
                colorTheme: "",
                avatar: "avatar-4.jpg"
            },
            createdBy: {
                name: "Robert Johnson",
                initial: "",
                colorTheme: "",
                avatar: "avatar-5.jpg"
            },
            status: "Not Started"
        },
        {
            id: 6,
            ticketId: "HD-0006",
            issue: "Slow internet connection",
            category: "Network",
            estimated: "2 hours",
            responseDue: new Date("1/2/2024"),
            priority: "Medium",
            assignee: {
                name: "Rachel Lee",
                initial: "RL",
                email: "rachel.lee@example.com",
                colorTheme: "Orange",
                avatar: ""
            },
            createdBy: {
                name: "Linda Morgan",
                initial: "",
                colorTheme: "",
                avatar: "avatar-11.jpg"
            },
            status: "In Progress"
        },
        {
            id: 7,
            ticketId: "HD-0007",
            issue: "Monitor screen flickering",
            category: "Hardware",
            estimated: "1 hours",
            responseDue: new Date("5/2/2024"),
            priority: "Low",
            assignee: {
                name: "Fred Butler",
                initial: "",
                email: "fred.butler@example.com",
                colorTheme: "",
                avatar: "avatar-1.jpg"
            },
            createdBy: {
                name: "Chris Johnson",
                initial: "",
                colorTheme: "",
                avatar: "avatar-2.jpg"
            },
            status: "Resolved"
        },
        {
            id: 8,
            ticketId: "HD-0008",
            issue: "Cannot install software",
            category: "Software",
            estimated: "2 days",
            responseDue: new Date("10/2/2024"),
            priority: "High",
            assignee: {
                name: "Olivia Adams",
                initial: "",
                email: "olivia.adams@example.com",
                colorTheme: "",
                avatar: "avatar-8.jpg"
            },
            createdBy: {
                name: "Chloe Anderson",
                initial: "CA",
                colorTheme: "Red",
                avatar: ""
            },
            status: "Not Started"
        },
        {
            id: 9,
            ticketId: "HD-0009",
            issue: "Cannot access website",
            category: "Network",
            estimated: "1 day",
            responseDue: new Date("02/15/2024"),
            priority: "High",
            assignee: {
                name: "Lucas Richards",
                initial: "",
                email: "lucas.richards@example.com",
                colorTheme: "",
                avatar: "avatar-10.jpg"
            },
            createdBy: {
                name: "Chris Johnson",
                initial: "",
                colorTheme: "",
                avatar: "avatar-4.jpg"
            },
            status: "Resolved"
        },
        {
            id: 10,
            ticketId: "HD-0010",
            issue: "Keyboard not working",
            category: "Hardware",
            estimated: "30 minutes",
            responseDue: new Date("02/20/2024"),
            priority: "Medium",
            assignee: {
                name: "Sophia Martinez",
                initial: "SM",
                email: "sophia.martinez@example.com",
                colorTheme: "Blue",
                avatar: ""
            },
            createdBy: {
                name: "Sarah Lee",
                initial: "",
                colorTheme: "",
                avatar: "avatar-13.jpg"
            },
            status: "In Progress"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-2' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div className="mx-auto w-full py-12 sm:px-6 px-4">
                            <GridComponent dataSource={gridData} key={"grid-2-tw"} width="100%" height={658} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="ticketId" headerText="Ticket ID" width="85"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="#">{data.ticketId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="issue" headerText="Issue Description" width="230" />
                                    <ColumnDirective field="category" headerText="Issue Category" width="120" />
                                    <ColumnDirective field="estimated" headerText="Estimated Time" width="100" textAlign="Right" />
                                    <ColumnDirective field="responseDue" headerText="Resolution Due" width="123" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="priority" headerText="Priority" width="118"
                                        template={(data: any) => {
                                            const priorityClasses: any = {
                                                "High": "e-arrow-up !text-red-700 dark:!text-red-400",
                                                "Medium": "e-arrow-right !text-orange-700 dark:!text-orange-500",
                                                "Low": "e-arrow-down !text-cyan-700 dark:!text-cyan-600"
                                            };
                                            return (
                                                <span className="flex gap-1 items-center">
                                                    <span className={`e-icons ${priorityClasses[data.priority]}`}></span>{data.priority}
                                                </span>
                                            );
                                        }}
                                    />
                                    <ColumnDirective field="assignee" headerText="Assigned To" textAlign="Left" width="299"
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1.5">
                                                <div className="w-8 h-8">{data.assignee.avatar ? (
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.assignee.avatar}')` }}></span>
                                                    ) : (
                                                        <span className={`e-avatar e-avatar-circle e-avatar-small ${data.assignee.colorTheme === "Red" ? "!bg-red-100 !text-red-700" : data.assignee.colorTheme === "Green" ? "!bg-green-100 !text-green-700" : data.assignee.colorTheme === "Blue" ? "!bg-cyan-100 !text-cyan-700" : data.assignee.colorTheme === "Orange" ? "!bg-orange-100 !text-orange-700" : ""}`}>{data.assignee.initial}</span>
                                                    )}
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.assignee.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.assignee.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="createdBy" headerText="Created By" width="170"
                                        template={(data: any) => (
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8">{data.createdBy.avatar ? (
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.createdBy.avatar}')` }}></span>
                                                    ) : (
                                                        <span className={`e-avatar e-avatar-circle e-avatar-small ${data.createdBy.colorTheme === "Red" ? "!bg-red-100 !text-red-700" : data.createdBy.colorTheme === "Green" ? "!bg-green-100 !text-green-700" : data.createdBy.colorTheme === "Blue" ? "!bg-cyan-100 !text-cyan-700" : data.createdBy.colorTheme === "Orange" ? "!bg-orange-100 !text-orange-700" : ""}`}>{data.createdBy.initial}</span>
                                                    )}
                                                </div>
                                                <div className="text-sm text-gray-900 dark:text-gray-50">{data.createdBy.name}</div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Status" width="134"
                                        template={(data: any) => {
                                            const statusClasses: any = {
                                                "Not Started": "e-badge e-badge-danger font-medium !px-2",
                                                "In Progress": "e-badge e-badge-info font-medium !px-2",
                                                "Resolved": "e-badge e-badge-success font-medium !px-2"
                                            };
                                            return (
                                                <div className="e-bigger">
                                                    <span className={`${statusClasses[data.status]}`}>{data.status || "No records found."}</span>
                                                </div>
                                            );
                                        }}
                                    />
                                </ColumnsDirective>
                            </GridComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="w-100 py-5 px-3 px-sm-4 mx-auto">
                            <GridComponent dataSource={gridData} key={"grid-2-bs"} width="100%" height={658} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="ticketId" headerText="Ticket ID" width="95"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="#">{data.ticketId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="issue" headerText="Issue Description" width="233" />
                                    <ColumnDirective field="category" headerText="Issue Category" width="120" />
                                    <ColumnDirective field="estimated" headerText="Estimated Time" width="120" textAlign="Right" />
                                    <ColumnDirective field="responseDue" headerText="Resolution Due" width="123" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="priority" headerText="Priority" width="126"
                                        template={(data: any) => {
                                            const priorityClasses: any = {
                                                "High": "e-icons e-arrow-up text-success",
                                                "Medium": "e-icons e-arrow-right text-warning",
                                                "Low": "e-icons e-arrow-down text-danger"
                                            };
                                            return (
                                                <div className="d-flex align-items-center gap-1">
                                                    <span className={`${priorityClasses[data.priority]}`}></span>{data.priority}
                                                </div>
                                            );
                                        }}
                                    />
                                    <ColumnDirective field="assignee" headerText="Assigned To" textAlign="Left" width="297"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center py-1">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    {data.assignee.avatar ? (
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.assignee.avatar}')` }}></span>
                                                    ) : (
                                                        <span className={`e-avatar e-avatar-circle e-avatar-small ${data.assignee.colorTheme === "Red" ? "bg-danger-subtle text-danger" : data.assignee.colorTheme === "Green" ? "bg-success-subtle text-success" : data.assignee.colorTheme === "Blue" ? "bg-info-subtle text-info" : data.assignee.colorTheme === "Orange" ? "bg-warning-subtle text-warning" : ""}`}>{data.assignee.initial}</span>
                                                    )}
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.assignee.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.assignee.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="createdBy" headerText="Created By" width="170"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    {data.createdBy.avatar ? (
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.createdBy.avatar}')` }}></span>
                                                    ) : (
                                                        <span className={`e-avatar e-avatar-circle e-avatar-small ${data.createdBy.colorTheme === "Red" ? "bg-danger-subtle text-danger" : data.createdBy.colorTheme === "Green" ? "bg-success-subtle text-success" : data.createdBy.colorTheme === "Blue" ? "bg-info-subtle text-info" : data.createdBy.colorTheme === "Orange" ? "bg-warning-subtle text-warning" : ""}`}>{data.createdBy.initial}</span>
                                                    )}
                                                </div>
                                                <div className="text-body">{data.createdBy.name}</div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Status" width="130"
                                        template={(data: any) => {
                                            const statusClasses: any = {
                                                "Not Started": "e-badge e-badge-danger fw-medium px-2",
                                                "In Progress": "e-badge e-badge-info fw-medium px-2",
                                                "Resolved": "e-badge e-badge-success fw-medium px-2"
                                            };
                                            return (
                                                <div className="e-bigger">
                                                    <span className={`${statusClasses[data.status]}`}>{data.status || "No records found."}</span>
                                                </div>
                                            );
                                        }}
                                    />
                                </ColumnsDirective>
                            </GridComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}