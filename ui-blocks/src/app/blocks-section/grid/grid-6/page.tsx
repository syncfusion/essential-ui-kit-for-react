'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Filter } from "@syncfusion/ej2-react-grids";

export default function Grid6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const data: any[] = [
        {
            id: 1,
            transactionId: "TRX202401",
            customerDetails: {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                avatar: "avatar-8.jpg"
            },
            invoiceNumber: "INV202401",
            description: "Payment for invoice",
            amount: 1300,
            date: new Date("2024-05-17"),
            paymentMethod: "Credit Card",
            status: "Completed"
        },
        {
            id: 2,
            transactionId: "TRX202402",
            customerDetails: {
                name: "Mark Johnson",
                email: "mark.johnson@example.com",
                avatar: "avatar-1.jpg"
            },
            invoiceNumber: "INV202402",
            description: "Subscription renewal",
            amount: 450,
            date: new Date("2024-11-12"),
            paymentMethod: "PayPal",
            status: "Pending"
        },
        {
            id: 3,
            transactionId: "TRX202403",
            customerDetails: {
                name: "Emily White",
                email: "emily.white@example.com",
                avatar: "avatar-9.jpg"
            },
            invoiceNumber: "INV202403",
            description: "Consulting services",
            amount: 2800,
            date: new Date("2024-01-15"),
            paymentMethod: "Online Transfer",
            status: "Failed"
        },
        {
            id: 4,
            transactionId: "TRX202404",
            customerDetails: {
                name: "Tom Harris",
                email: "tom.harris@example.com",
                avatar: "avatar-4.jpg"
            },
            invoiceNumber: "INV202404",
            description: "Equipment purchase",
            amount: 2750,
            date: new Date("2024-07-18"),
            paymentMethod: "Online Transfer",
            status: "Completed"
        },
        {
            id: 5,
            transactionId: "TRX202405",
            customerDetails: {
                name: "Lisa Green",
                email: "lisa.green@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceNumber: "INV202405",
            description: "Event sponsorship",
            amount: 3870,
            date: new Date("2024-01-23"),
            paymentMethod: "PayPal",
            status: "Cleared"
        },
        {
            id: 6,
            transactionId: "TRX202406",
            customerDetails: {
                name: "David Clark",
                email: "david.clark@example.com",
                avatar: "avatar-5.jpg"
            },
            invoiceNumber: "INV202406",
            description: "Online course registration",
            amount: 580,
            date: new Date("2024-03-12"),
            paymentMethod: "Cheque",
            status: "Failed"
        },
        {
            id: 7,
            transactionId: "TRX202407",
            customerDetails: {
                name: "Rachel Lee",
                email: "rachel.lee@example.com",
                avatar: "avatar-6.jpg"
            },
            invoiceNumber: "INV202407",
            description: "Software license renewal",
            amount: 1250,
            date: new Date("2024-09-08"),
            paymentMethod: "Credit Card",
            status: "Completed"
        },
        {
            id: 8,
            transactionId: "TRX202408",
            customerDetails: {
                name: "Olivia Adams",
                email: "olivia.adams@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceNumber: "INV202408",
            description: "Consulting services",
            amount: 648,
            date: new Date("2024-10-12"),
            paymentMethod: "PayPal",
            status: "Failed"
        },
        {
            id: 9,
            transactionId: "TRX202409",
            customerDetails: {
                name: "Lucas Brown",
                email: "lucas.brown@example.com",
                avatar: "avatar-11.jpg"
            },
            invoiceNumber: "INV202409",
            description: "Membership fee",
            amount: 792,
            date: new Date("2024-06-11"),
            paymentMethod: "Cheque",
            status: "Pending"
        },
        {
            id: 10,
            transactionId: "TRX202410",
            customerDetails: {
                name: "Sophia Martinez",
                email: "sophia.martinez@example.com",
                avatar: "avatar-14.jpg"
            },
            invoiceNumber: "INV202410",
            description: "Training workshop fee",
            amount: 840,
            date: new Date("2024-02-17"),
            paymentMethod: "Cheque",
            status: "Completed"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-6' && blockData.theme) {
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
                            <GridComponent dataSource={data} key={"grid-6-tw"} width="100%" height={668} allowSorting={true} allowFiltering={true} filterSettings={{ type: "Menu" }}>
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="transactionId" headerText="Transaction ID" width="143" />
                                    <ColumnDirective field="customerDetails" headerText="Customer Name" width="270" textAlign="Left" allowFiltering={false}
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1.5">
                                                <div className="w-8 h-8">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/assets/images/common/avatar/${data.customerDetails.avatar}')` }}></span>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.customerDetails.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.customerDetails.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="invoiceNumber" headerText="Invoice Number" width="150"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="javascript:void(0);">{data.invoiceNumber}</a>
                                        )}
                                    />
                                    <ColumnDirective field="description" headerText="Description" width="214" />
                                    <ColumnDirective field="amount" headerText="Total Amount" width="140" format="C2" textAlign="Right" />
                                    <ColumnDirective field="date" headerText="Transaction Date" width="160" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="paymentMethod" headerText="Payment Method" width="155" />
                                    <ColumnDirective field="status" headerText="Status" width="122"
                                        template={(data: any) => {
                                            const statusClassMap: any = {
                                                "Completed": "bg-green-700",
                                                "Pending": "bg-orange-700",
                                                "Cleared": "bg-cyan-700",
                                                "Failed": "bg-red-700"
                                            };
                
                                            return (
                                                <div className="e-bigger">
                                                    <span className="e-badge flex gap-1 items-center w-max">
                                                        <div className={`w-2 h-2 rounded-full ${statusClassMap[data.status]}`}></div>{data.status}
                                                    </span>
                                                </div>
                                            );
                                        }}
                                    />
                                </ColumnsDirective>
                                <Inject services={[Sort, Filter]} />
                            </GridComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="w-100 py-5 px-3 px-sm-4 mx-auto">
                            <GridComponent dataSource={data} key={"grid-6-bs"} width="100%" height={668} allowSorting={true} allowFiltering={true} filterSettings={{ type: "Menu" }}>
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="transactionId" headerText="Transaction ID" width="155" />
                                    <ColumnDirective field="customerDetails" headerText="Customer Name" width="270" textAlign="Left" allowFiltering={false}
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center py-1">
                                                <div style={{ width: "32px", height: "32px" }}>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/assets/images/common/avatar/${data.customerDetails.avatar}')` }}></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.customerDetails.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.customerDetails.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="invoiceNumber" headerText="Invoice Number" width="165"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="javascript:void(0);">{data.invoiceNumber}</a>
                                        )}
                                    />
                                    <ColumnDirective field="description" headerText="Description" width="214" />
                                    <ColumnDirective field="amount" headerText="Total Amount" width="170" format="C2" textAlign="Right" />
                                    <ColumnDirective field="date" headerText="Transaction Date" width="190" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="paymentMethod" headerText="Payment Method" width="170" />
                                    <ColumnDirective field="status" headerText="Status" width="122"
                                        template={(data: any) => {
                                            const statusClassMap: any = {
                                                "Completed": "bg-success",
                                                "Pending": "bg-warning",
                                                "Cleared": "bg-info",
                                                "Failed": "bg-danger"
                                            };
                
                                            return (
                                                <div className="fs-6">
                                                    <span className="e-badge d-flex align-items-center gap-1" style={{ width: "fit-content" }}>
                                                        <div className={`rounded-circle ${statusClassMap[data.status]}`} style={{ width: "8px", height: "8px" }}></div>{data.status}
                                                    </span>
                                                </div>
                                            );
                                        }}
                                    />
                                </ColumnsDirective>
                                <Inject services={[Sort, Filter]} />
                            </GridComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}