'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, GroupSettingsModel, Group } from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Grid9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const groupSettings: GroupSettingsModel = {
        showDropArea: false,
        columns: ['category'],
        captionTemplate: '<span class="groupItems">${key}</span>'
      };

    const gridData: any[] = [
        { id: 1, category: "User Management", permission: "Create Users", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 2, category: "User Management", permission: "Edit Users", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 3, category: "User Management", permission: "Delete Users", systemAdmin: true, itManager: false, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 4, category: "User Management", permission: "View Users", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true },
        { id: 5, category: "Financial Operations", permission: "Create Invoices", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: true, customerServiceRep: false, generalEmployee: false },
        { id: 6, category: "Financial Operations", permission: "Approve Expenses", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 7, category: "Financial Operations", permission: "View Financial Reports", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 8, category: "HR Functions", permission: "Manage Payroll", systemAdmin: true, itManager: false, hrManager: true, financeManager: true, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 9, category: "HR Functions", permission: "Handle Leave Requests", systemAdmin: true, itManager: false, hrManager: true, financeManager: false, salesManager: false, customerServiceRep: true, generalEmployee: false },
        { id: 10, category: "HR Functions", permission: "Conduct Performance Reviews", systemAdmin: true, itManager: false, hrManager: true, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 11, category: "Sale Operations", permission: "Create Sales Orders", systemAdmin: true, itManager: false, hrManager: false, financeManager: false, salesManager: true, customerServiceRep: true, generalEmployee: false },
        { id: 12, category: "Sale Operations", permission: "Apply Discounts", systemAdmin: true, itManager: false, hrManager: false, financeManager: false, salesManager: true, customerServiceRep: false, generalEmployee: false },
        { id: 13, category: "Sale Operations", permission: "View Sales Reports", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: true, customerServiceRep: false, generalEmployee: false },
        { id: 14, category: "IT Operations", permission: "Manage System Configurations", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 15, category: "IT Operations", permission: "Monitor System Performance", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 16, category: "IT Operations", permission: "Manage Backups", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 17, category: "General Access", permission: "Access Company Directory", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true },
        { id: 18, category: "General Access", permission: "Submit Expense Reports", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true },
        { id: 19, category: "General Access", permission: "View Personal Information", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-9' && blockData.theme) {
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
                            <div className="flex justify-end items-center mb-6">
                                <ButtonComponent cssClass="e-primary w-max" content="Edit Permissions" iconCss="e-icons e-edit" iconPosition="Left" type="button"></ButtonComponent>
                            </div>
                            <GridComponent dataSource={gridData} key={"grid-9-tw"} width="100%" height={1117} rowHeight={44} allowGrouping={true} groupSettings={groupSettings} gridLines="Both">
                                <ColumnsDirective>
                                    <ColumnDirective field="category" headerText="Category" width="120" />
                                    <ColumnDirective field="permission" headerText="Permission" width="230" textAlign="Left" />
                                    <ColumnDirective field="systemAdmin" headerText="System Admin" width="140" textAlign="Center"
                                        template={(data: any) =>
                                            data.systemAdmin ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                    <ColumnDirective field="itManager" headerText="IT Manager" width="140" textAlign="Center"
                                        template={(data: any) =>
                                            data.itManager ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                    <ColumnDirective field="hrManager" headerText="HR Manager" width="140" textAlign="Center"
                                        template={(data: any) =>
                                            data.hrManager ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                    <ColumnDirective field="financeManager" headerText="Finance Manager" width="140" textAlign="Center"
                                        template={(data: any) =>
                                            data.financeManager ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                    <ColumnDirective field="salesManager" headerText="Sales Manager" width="140" textAlign="Center"
                                        template={(data: any) =>
                                            data.salesManager ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                    <ColumnDirective field="customerServiceRep" headerText="Customer Service Representative" width="215" textAlign="Center"
                                        template={(data: any) =>
                                            data.customerServiceRep ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                    <ColumnDirective field="generalEmployee" headerText="General Employee" width="145" textAlign="Center"
                                        template={(data: any) =>
                                            data.generalEmployee ? <span className="e-icons e-check !text-green-700 dark:!text-green-500 text-xl"></span> : <span className="e-icons e-close !text-red-700 dark:!text-red-400 text-xl"></span>
                                        }
                                    />
                                </ColumnsDirective>
                                <Inject services={[Group]} />
                            </GridComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="py-5 px-4 px-sm-6 mx-auto">
                            <div className="d-flex justify-content-end align-items-center mb-4">
                                <ButtonComponent cssClass="e-primary" content="Edit Permissions" iconCss="e-icons e-edit" iconPosition="Left" type="button"></ButtonComponent>
                            </div>
                            <GridComponent dataSource={gridData} key={"grid-9-bs"} width="100%" height={1117} rowHeight={44} allowGrouping={true} groupSettings={groupSettings} gridLines="Both">
                                <ColumnsDirective>
                                    <ColumnDirective field="category" headerText="Category" width="140" />
                                    <ColumnDirective field="permission" headerText="Permission" textAlign="Left" width="220" />
                                    <ColumnDirective field="systemAdmin" headerText="System Admin" width="140" textAlign="Center"
                                        template={(data: any) => 
                                            data.systemAdmin ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                    <ColumnDirective field="itManager" headerText="IT Manager" width="140" textAlign="Center"
                                        template={(data: any) => 
                                            data.itManager ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                    <ColumnDirective field="hrManager" headerText="HR Manager" width="140" textAlign="Center"
                                        template={(data: any) => 
                                            data.hrManager ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                    <ColumnDirective field="financeManager" headerText="Finance Manager" width="140" textAlign="Center"
                                        template={(data: any) => 
                                            data.financeManager ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                    <ColumnDirective field="salesManager" headerText="Sales Manager" width="140" textAlign="Center"
                                        template={(data: any) => 
                                            data.salesManager ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                    <ColumnDirective field="customerServiceRep" headerText="Customer Service Representative" width="235" textAlign="Center"
                                        template={(data: any) => 
                                            data.customerServiceRep ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                    <ColumnDirective field="generalEmployee" headerText="General Employee" width="145" textAlign="Center"
                                        template={(data: any) => 
                                            data.generalEmployee ? <span className="e-icons e-check text-success fs-4"></span> : <span className="e-icons e-close text-danger fs-5"></span>
                                        }
                                    />
                                </ColumnsDirective>
                                <Inject services={[Group]} />
                            </GridComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}