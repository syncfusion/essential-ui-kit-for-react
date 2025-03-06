'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";

export default function Grid1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const data: any[] = [
        {
            id: 1,
            leadId: "L1001",
            details: {
                name: "John Doe",
                initial: "JD",
                email: "john.doe@example.com",
                colorTheme: "Red"
            },
            status: "Qualified",
            interest: "High",
            date: new Date("09/15/2024"),
            assignee: {
                name: "Alice Smith",
                avatar: "avatar-8.jpg"
            },
            source: "Web Inquiry",
            revenue: 90000
        },
        {
            id: 2,
            leadId: "L1002",
            details: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: "Blue"
            },
            status: "New",
            interest: "Medium",
            date: new Date("10/08/2024"),
            assignee: {
                name: "Bob Johnson",
                avatar: "avatar-1.jpg"
            },
            source: "Referral",
            revenue: 80000
        },
        {
            id: 3,
            leadId: "L1003",
            details: {
                name: "Michael Green",
                initial: "MG",
                email: "michael.green@example.com",
                colorTheme: "Green"
            },
            status: "Contacted",
            interest: "High",
            date: new Date("12/09/2024"),
            assignee: {
                name: "Carol Brown",
                avatar: "avatar-4.jpg"
            },
            source: "Trade Show",
            revenue: 85000
        },
        {
            id: 4,
            leadId: "L1004",
            details: {
                name: "Sarah Brown",
                initial: "SB",
                email: "sarah.brown@example.com",
                colorTheme: "Orange"
            },
            status: "Lead",
            interest: "Low",
            date: new Date("09/14/2024"),
            assignee: {
                name: "Dave Wilson",
                avatar: "avatar-3.jpg"
            },
            source: "Email Campaign",
            revenue: 60000
        },
        {
            id: 5,
            leadId: "L1005",
            details: {
                name: "David Miller",
                initial: "DM",
                email: "david.miller@example.com",
                colorTheme: "Blue"
            },
            status: "Qualified",
            interest: "High",
            date: new Date("09/20/2024"),
            assignee: {
                name: "Emma Davis",
                avatar: "avatar-11.jpg"
            },
            source: "Direct Mail",
            revenue: 95000
        },
        {
            id: 6,
            leadId: "L1006",
            details: {
                name: "Laura Martinez",
                initial: "LM",
                email: "laura.martinez@example.com",
                colorTheme: "Purple"
            },
            status: "New",
            interest: "Medium",
            date: new Date("09/16/2024"),
            assignee: {
                name: "Frank Moore",
                avatar: "avatar-2.jpg"
            },
            source: "Web Inquiry",
            revenue: 75000
        },
        {
            id: 7,
            leadId: "L1007",
            details: {
                name: "Chris Lee",
                initial: "CL",
                email: "chris.lee@example.com",
                colorTheme: "Green"
            },
            status: "Contacted",
            interest: "Medium",
            date: new Date("09/17/2024"),
            assignee: {
                name: "Grace Hui",
                avatar: "avatar-12.jpg"
            },
            source: "Referral",
            revenue: 85000
        },
        {
            id: 8,
            leadId: "L1008",
            details: {
                name: "Megan Johnson",
                initial: "MJ",
                email: "megan.johnson@example.com",
                colorTheme: "Orange"
            },
            status: "Lead",
            interest: "High",
            date: new Date("09/18/2024"),
            assignee: {
                name: "Henry King",
                avatar: "avatar-5.jpg"
            },
            source: "Trade Show",
            revenue: 95000
        },
        {
            id: 9,
            leadId: "L1009",
            details: {
                name: "Robert Smith",
                initial: "RS",
                email: "robert.smith@example.com",
                colorTheme: "Blue"
            },
            status: "New",
            interest: "Medium",
            date: new Date("09/19/2024"),
            assignee: {
                name: "Ivy Walker",
                avatar: "avatar-14.jpg"
            },
            source: "Email Campaign",
            revenue: 70000
        },
        {
            id: 10,
            leadId: "L1010",
            details: {
                name: "Olivia Davis",
                initial: "OD",
                email: "olivia.davis@example.com",
                colorTheme: "Red"
            },
            status: "Contacted",
            interest: "Low",
            date: new Date("09/20/2024"),
            assignee: {
                name: "Jack Lee",
                avatar: "avatar-6.jpg"
            },
            source: "Direct Mail",
            revenue: 90000
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-1' && blockData.theme) {
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
                            <GridComponent dataSource={data} key={"grid-1-tw"} width="100%" height={658} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="leadId" headerText="Lead ID" textAlign="Left" width="60"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="#">{data.leadId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="customerDetails" headerText="Name" textAlign="Left" width="285"
                                        template={(data: any) => (
                                            <div className="flex items-center gap-3 py-1.5">
                                                <div className="w-8 h-8">
                                                    <span className={`e-avatar e-avatar-circle e-avatar-small ${data.details.colorTheme === "Red" ? "!bg-red-100 !text-red-700" : data.details.colorTheme === "Green" ? "!bg-green-100 !text-green-700" : data.details.colorTheme === "Blue" ? "!bg-cyan-100 !text-cyan-700" : data.details.colorTheme === "Orange" ? "!bg-orange-100 !text-orange-700" : data.details.colorTheme === "Purple" ? "!bg-indigo-100 !text-indigo-700" : ""}`}>{data.details.initial}</span>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.details.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.details.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Lead Status" width="105"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className="e-badge e-badge-info !px-2 flex gap-1 w-max"><span className="e-icons e-check h-3 pt-0.5"></span>{data.status}</span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="interest" headerText="Interest Level" width="110"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                {data.interest === "High" && (
                                                    <span className="e-badge e-badge-success !px-2 flex gap-1 w-max">
                                                        <span className="e-icons e-arrow-up !text-green-700 dark:!text-green-500 h-3 pt-0.5"></span>High
                                                    </span>
                                                )}
                                                {data.interest === "Medium" && (
                                                    <span className="e-badge e-badge-warning !px-2 flex gap-1 w-max">
                                                        <span className="e-icons e-arrow-up !text-orange-700 dark:!text-orange-500 h-3 pt-0.5"></span>Medium
                                                    </span>
                                                )}
                                                {data.interest === "Low" && (
                                                    <span className="e-badge e-badge-danger !px-2 flex gap-1 w-max">
                                                        <span className="e-icons e-arrow-down !text-red-700 dark:!text-red-400 h-3 pt-0.5"></span>Low
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="date" headerText="Next Contact" width="105" format={{ type: "date", format: "MM/dd/yyyy" }} />
                                    <ColumnDirective field="assignee" headerText="Assigned To" width="145"
                                        template={(data: any) => (
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.assignee.avatar}')` }}></span>
                                                </div>
                                                <div className="text-sm text-gray-900 dark:text-gray-50">{data.assignee.name}</div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="source" headerText="Lead Source" width="125" />
                                    <ColumnDirective field="revenue" headerText="Expected Revenue ($)" width="133" textAlign="Right" format="C0" />
                                </ColumnsDirective>
                            </GridComponent>
                        </div>
                    </section>
                ); 
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="w-100 py-5 px-3 px-sm-4 mx-auto">
                            <GridComponent dataSource={data} key={"grid-1-bs"} width="100%" height={658} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="leadId" headerText="Lead ID" textAlign="Left" width="63"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="#">{data.leadId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="customerDetails" headerText="Name" textAlign="Left" width="290"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center gap-3 py-1">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    <span className={`e-avatar e-avatar-circle e-avatar-small ${data.details.colorTheme === "Red" ? "bg-danger-subtle text-danger" : data.details.colorTheme === "Green" ? "bg-success-subtle text-success" : data.details.colorTheme === "Blue" ? "bg-info-subtle text-info" : data.details.colorTheme === "Orange" ? "bg-warning-subtle text-warning" : data.details.colorTheme === "Purple" ? "bg-primary-subtle text-primary" : ""}`}>{data.details.initial}</span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.details.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.details.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Lead Status" width="108"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className="e-badge e-badge-info px-2 d-flex align-items-center gap-1" style={{ width: "fit-content" }}><span className="e-icons e-check text-dark"></span>{data.status}</span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="interest" headerText="Interest Level" width="110"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                {data.interest === "High" && (
                                                    <span className="e-badge e-badge-success d-flex align-items-center gap-1 px-2" style={{ width: "fit-content" }}>
                                                        <span className="e-icons e-arrow-up text-white"></span>High
                                                    </span>
                                                )}
                                                {data.interest === "Medium" && (
                                                    <span className="e-badge e-badge-warning d-flex align-items-center gap-1 px-2" style={{ width: "fit-content" }}>
                                                        <span className="e-icons e-arrow-up text-dark"></span>Medium
                                                    </span>
                                                )}
                                                {data.interest === "Low" && (
                                                    <span className="e-badge e-badge-danger d-flex align-items-center gap-1 px-2" style={{ width: "fit-content" }}>
                                                        <span className="e-icons e-arrow-down text-white"></span>Low
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="date" headerText="Next Contact" width="108" format={{ type: "date", format: "MM/dd/yyyy" }} />
                                    <ColumnDirective field="assignee" headerText="Assigned To" width="145"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.assignee.avatar}')` }}></span>
                                                </div>
                                                <div className="text-body">{data.assignee.name}</div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="source" headerText="Lead Source" width="120" />
                                    <ColumnDirective field="revenue" headerText="Expected Revenue ($)" width="155" textAlign="Right" format="C0" />
                                </ColumnsDirective>
                            </GridComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}