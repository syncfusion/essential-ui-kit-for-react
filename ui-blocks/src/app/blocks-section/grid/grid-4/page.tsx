'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";
import { ChipListComponent } from "@syncfusion/ej2-react-buttons";

export default function Grid4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const data: any[] = [
        {
            id: 1,
            contactId: "C0001",
            profile: {
                name: "Jane Smith",
                initial: "",
                email: "jane.smith@example.com",
                colorTheme: "",
                avatar: "avatar-8.jpg"
            },
            jobTitle: "Marketing Director",
            company: "Tech Solutions",
            communicationPreferences: ["Email", "Phone"],
            location: "Austin, TX",
            leadSource: "Referral",
            avatar: "avatar-14.jpg",
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Active"
        },
        {
            id: 2,
            contactId: "C0002",
            profile: {
                name: "Mark Johnson",
                initial: "",
                email: "mark.johnson@example.com",
                colorTheme: "",
                avatar: "avatar-1.jpg"
            },
            jobTitle: "Sales Manager",
            company: "Innovate Inc.",
            communicationPreferences: ["Phone"],
            location: "San Jose, CA",
            leadSource: "Direct",
            avatar: "avatar-7.jpg",
            assignedTo: { name: "Tom Richards", department: "Sales" },
            status: "Inactive"
        },
        {
            id: 3,
            contactId: "C0003",
            profile: {
                name: "Emily White",
                initial: "",
                email: "emily.white@example.com",
                colorTheme: "",
                avatar: "avatar-9.jpg"
            },
            jobTitle: "CEO",
            company: "Creative Co.",
            communicationPreferences: ["Email", "Phone"],
            location: "Boston, MA",
            leadSource: "Web Inquiry",
            avatar: "avatar-13.jpg",
            assignedTo: { name: "Lisa Brown", department: "Executive" },
            status: "Active"
        },
        {
            id: 4,
            contactId: "C0004",
            profile: {
                name: "Tom Harris",
                initial: "TH",
                email: "tom.harris@example.com",
                colorTheme: "Red",
                avatar: ""
            },
            jobTitle: "Product Manager",
            company: "Media Group",
            communicationPreferences: ["Email"],
            location: "Miami, FL",
            leadSource: "Referral",
            avatar: "avatar-7.jpg",
            assignedTo: { name: "Tom Richards", department: "Sales" },
            status: "Inactive"
        },
        {
            id: 5,
            contactId: "C0005",
            profile: {
                name: "Lisa Green",
                initial: "LG",
                email: "lisa.green@example.com",
                colorTheme: "Green",
                avatar: ""
            },
            jobTitle: "IT Specialist",
            company: "Global Tech",
            communicationPreferences: ["Email", "Phone"],
            location: "Portland, OR",
            leadSource: "Direct",
            avatar: "avatar-13.jpg",
            assignedTo: { name: "Lisa Brown", department: "Executive" },
            status: "Inactive"
        },
        {
            id: 6,
            contactId: "C0006",
            profile: {
                name: "David Clark",
                initial: "",
                email: "david.clark@example.com",
                colorTheme: "",
                avatar: "avatar-2.jpg"
            },
            jobTitle: "HR Manager",
            company: "PeopleWorks",
            communicationPreferences: ["Email"],
            location: "Dallas, TX",
            leadSource: "Referral",
            avatar: "avatar-14.jpg",
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Active"
        },
        {
            id: 7,
            contactId: "C0007",
            profile: {
                name: "Rachel Lee",
                initial: "RL",
                email: "rachel.lee@example.com",
                colorTheme: "Blue",
                avatar: ""
            },
            jobTitle: "CFO",
            company: "Finance Corp",
            communicationPreferences: ["Email", "Phone"],
            location: "New York, NY",
            leadSource: "Web Inquiry",
            avatar: "avatar-7.jpg",
            assignedTo: { name: "Tom Richards", department: "Sales" },
            status: "Inactive"
        },
        {
            id: 8,
            contactId: "C0008",
            profile: {
                name: "Olivia Adams",
                initial: "",
                email: "olivia.adams@example.com",
                colorTheme: "",
                avatar: "avatar-12.jpg"
            },
            jobTitle: "Operations Manager",
            company: "Logistics Ltd",
            communicationPreferences: ["Phone"],
            location: "Seattle, WA",
            leadSource: "Referral",
            avatar: "avatar-13.jpg",
            assignedTo: { name: "Lisa Brown", department: "Executive" },
            status: "Active"
        },
        {
            id: 9,
            contactId: "C0009",
            profile: {
                name: "Lucas Robinson",
                initial: "",
                email: "lucas.robinson@example.com",
                colorTheme: "",
                avatar: "avatar-5.jpg"
            },
            jobTitle: "Customer Support Manager",
            company: "SupportWorks",
            communicationPreferences: ["Phone", "Email"],
            location: "Miami, FL",
            leadSource: "Web Inquiry",
            avatar: "avatar-14.jpg",
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Inactive"
        },
        {
            id: 10,
            contactId: "C0010",
            profile: {
                name: "Sophia Martinez",
                initial: "",
                email: "sophia.martinez@example.com",
                colorTheme: "",
                avatar: "avatar-10.jpg"
            },
            jobTitle: "Business Analyst",
            company: "Insight Analytics",
            communicationPreferences: ["Email", "Phone"],
            location: "Atlanta, GA",
            leadSource: "Direct",
            avatar: "avatar-14.jpg",
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Active"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-4' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
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
                            <div className="flex justify-end items-center pb-4">
                                <div className="w-full sm:w-72">
                                    <div className="e-input-group w-full">
                                        <span className="e-input-group-icon e-icons e-search"></span>
                                        <input className="e-input" type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                            <GridComponent dataSource={data} key={"grid-4-tw"} width="100%" height={668} clipMode="EllipsisWithTooltip">
                                <ColumnsDirective>
                                    <ColumnDirective field="contactId" headerText="Contact ID" width="90"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="javascript:void(0);">{data.contactId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="profile" headerText="Profile" textAlign="Left" width="264"
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1">
                                                <div className="w-8 h-8">
                                                    {data.profile.avatar ? (
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/assets/images/common/avatar/${data.profile.avatar}')` }}></span>
                                                    ) : (
                                                        <span className={`e-avatar e-avatar-circle e-avatar-small ${ data.profile.colorTheme === "Red" ? "!bg-red-100 !text-red-700 dark:!text-red-400" : data.profile.colorTheme === "Green" ? "!bg-green-100 !text-green-700 dark:!text-green-500" : data.profile.colorTheme === "Blue" ? "!bg-cyan-100 !text-cyan-700 dark:!text-cyan-600" : data.profile.colorTheme === "Orange" ? "!bg-orange-100 !text-orange-700 dark:!text-orange-500" : ""}`}>{data.profile.initial}</span>
                                                    )}
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.profile.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400 truncate w-52">{data.profile.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="jobTitle" headerText="Job Profile/Company Name" textAlign="Left" width="198"
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1">
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.jobTitle}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.company}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="communicationPreferences" headerText="Communication Preferences" width="190"
                                        template={(data: any) => data.communicationPreferences.map((item: string, index: number) => <ChipListComponent cssClass="!bg-transparent !border !rounded" key={index} text={item}></ChipListComponent>)}
                                    />
                                    <ColumnDirective field="location" headerText="Location" width="130" />
                                    <ColumnDirective field="leadSource" headerText="Lead Source" width="102" />
                                    <ColumnDirective field="assignedTo" headerText="Assigned To" textAlign="Left" width="164"
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1.5">
                                                <div className="w-8 h-8">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/assets/images/common/avatar/${data.avatar}')`}}></span>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.assignedTo.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.assignedTo.department}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Status" width="85"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                {data.status === "Active" ? (
                                                    <span className="e-badge flex gap-1 items-center w-max bg-transparent">
                                                        <div className="w-2 h-2 rounded-full bg-green-700"></div>Active
                                                    </span>
                                                ) : (
                                                    <span className="e-badge flex gap-1 items-center w-max bg-transparent">
                                                        <div className="w-2 h-2 rounded-full bg-red-700"></div>Inactive
                                                    </span>
                                                )}
                                            </div>
                                        )}
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
                            <div className="row justify-content-end pb-4">
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="e-input-group w-100">
                                        <span className="e-input-group-icon e-icons e-search border-end-0"></span>
                                        <input className="e-input form-control" type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                            <GridComponent dataSource={data} key={"grid-4-bs"} width="100%" height={668} clipMode="EllipsisWithTooltip">
                                <ColumnsDirective>
                                    <ColumnDirective field="contactId" headerText="Contact ID" width="100"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="javascript:void(0);">{data.contactId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="profile" headerText="Profile" textAlign="Left" width="264"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    {data.profile.avatar ? (
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/assets/images/common/avatar/${data.profile.avatar}')` }}></span>
                                                    ) : (
                                                        <span className={`e-avatar e-avatar-circle e-avatar-small ${ data.profile.colorTheme === "Red"? "bg-danger-subtle text-danger": data.profile.colorTheme === "Green" ? "bg-success-subtle text-success" : data.profile.colorTheme === "Blue" ? "bg-info-subtle text-info" : data.profile.colorTheme === "Orange" ? "bg-warning-subtle text-warning" : ""}`}>{data.profile.initial}</span>
                                                    )}
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.profile.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.profile.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="jobTitle" headerText="Job Profile/Company Name" textAlign="Left" width="215"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.jobTitle}</p>
                                                    <p className="text-body-secondary mb-0">{data.company}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="communicationPreferences" headerText="Communication Preferences" width="215"
                                        template={(data: any) => (data.communicationPreferences.map((item: string, index: number) => (<ChipListComponent cssClass="bg-body text-body border rounded" key={index} text={item} />)))}
                                    />
                                    <ColumnDirective field="location" headerText="Location" width="130" />
                                    <ColumnDirective field="leadSource" headerText="Lead Source" width="117" />
                                    <ColumnDirective field="assignedTo" headerText="Assigned To" textAlign="Left" width="164"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center py-1">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/assets/images/common/avatar/${data.avatar}')` }}></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.assignedTo.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.assignedTo.department}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Status" width="85"
                                        template={(data: any) => (
                                            <div className="fs-6">
                                                {data.status === "Active" ? (
                                                    <span className="e-badge d-flex gap-1 align-items-center bg-transparent" style={{ width: "fit-content" }}>
                                                        <span className="rounded-circle bg-success" style={{ width: "8px", height: "8px" }}></span>Active
                                                    </span>
                                                ) : (
                                                    <span className="e-badge d-flex gap-1 align-items-center bg-transparent" style={{ width: "fit-content" }}>
                                                        <span className="rounded-circle bg-danger" style={{ width: "8px", height: "8px" }}></span>Inactive
                                                    </span>
                                                )}
                                            </div>
                                        )}
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