'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page } from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Grid7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const gridData: any[] = [
        {
            id: 1,
            transactionId: "TRX202401",
            customerDetails: {
                name: "Jane Smith",
                initial: "JS",
                email: "jane.smith@example.com",
                colorTheme: "Orange"
            },
            date: new Date("2024-05-01"),
            product: {
                name: "iPhone 15 Pro",
                image: "iphone-15-pro.png"
            },
            quantity: 1,
            amount: 999.99,
            paymentMethod: "Credit Card",
            salesRep: {
                name: "Cody Fisher",
                avatar: "avatar-1.jpg"
            },
            status: "Completed"
        },
        {
            id: 2,
            transactionId: "TRX202402",
            customerDetails: {
                name: "Mark Johnson",
                initial: "MJ",
                email: "mark.johnson@example.com",
                colorTheme: "Blue"
            },
            date: new Date("2024-10-01"),
            product: {
                name: "MacBook Air M2",
                image: "macbook-air-m2.png"
            },
            quantity: 4,
            amount: 1299.00,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Kathryn Murphy",
                avatar: "avatar-14.jpg"
            },
            status: "Pending"
        },
        {
            id: 3,
            transactionId: "TRX202403",
            customerDetails: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: "Red"
            },
            date: new Date("2024-01-15"),
            product: {
                name: "AirPods Pro",
                image: "airpods-pro.png"
            },
            quantity: 3,
            amount: 449.98,
            paymentMethod: "Online Transfer",
            salesRep: {
                name: "Cameron Williamson",
                avatar: "avatar-4.jpg"
            },
            status: "Failed"
        },
        {
            id: 4,
            transactionId: "TRX202404",
            customerDetails: {
                name: "Tom Harris",
                initial: "TB",
                email: "tom.harris@example.com",
                colorTheme: "Blue"
            },
            date: new Date("2024-01-20"),
            product: {
                name: "iPad Air",
                image: "ipad Air.png"
            },
            quantity: 2,
            amount: 599.00,
            paymentMethod: "Online Transfer",
            salesRep: {
                name: "Jenny Wilson",
                avatar: "avatar-13.jpg"
            },
            status: "Processing"
        },
        {
            id: 5,
            transactionId: "TRX202405",
            customerDetails: {
                name: "Lisa Green",
                initial: "LG",
                email: "lisa.green@example.com",
                colorTheme: "Purple"
            },
            date: new Date("2024-01-25"),
            product: {
                name: "Apple Watch Series 8",
                image: "apple-watch-series-8.png"
            },
            quantity: 1,
            amount: 399.00,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Marvin McKinney",
                avatar: "avatar-2.jpg"
            },
            status: "Completed"
        },
        {
            id: 6,
            transactionId: "TRX202406",
            customerDetails: {
                name: "Olivia Adams",
                initial: "OA",
                email: "olivia.adams@example.com",
                colorTheme: "Green"
            },
            date: new Date("2024-01-02"),
            product: {
                name: "iPhone 14 Pro Max",
                image: "iphone-14-pro-max.png"
            },
            quantity: 2,
            amount: 699.00,
            paymentMethod: "Cheque",
            salesRep: {
                name: "Theresa Webb",
                avatar: "avatar-11.jpg"
            },
            status: "Pending"
        },
        {
            id: 7,
            transactionId: "TRX202407",
            customerDetails: {
                name: "David Clark",
                initial: "DC",
                email: "david.clark@example.com",
                colorTheme: "Orange"
            },
            date: new Date("2024-05-02"),
            product: {
                name: "iPad Air",
                image: "ipad Air.png"
            },
            quantity: 3,
            amount: 599.00,
            paymentMethod: "Online Transfer",
            salesRep: {
                name: "Theresa Webb",
                avatar: "avatar-11.jpg"
            },
            status: "Failed"
        },
        {
            id: 8,
            transactionId: "TRX202408",
            customerDetails: {
                name: "Rachel Lee",
                initial: "RL",
                email: "rachel.lee@example.com",
                colorTheme: "Purple"
            },
            date: new Date("2024-10-02"),
            product: {
                name: "AirPods Pro",
                image: "airpods-pro.png"
            },
            quantity: 2,
            amount: 449.98,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Dianne Russell",
                avatar: "avatar-6.jpg"
            },
            status: "Pending"
        },
        {
            id: 9,
            transactionId: "TRX202409",
            customerDetails: {
                name: "Lucas Robinson",
                initial: "LR",
                email: "lucas.robinson@example.com",
                colorTheme: "Green"
            },
            date: new Date("2024-05-01"),
            product: {
                name: "iPhone 15 Plus",
                image: "iphone-15-plus.png"
            },
            quantity: 1,
            amount: 799.99,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Eleanor Pena",
                avatar: "avatar-9.jpg"
            },
            status: "Completed"
        },
        {
            id: 10,
            transactionId: "TRX202410",
            customerDetails: {
                name: "Sophia Martinez",
                initial: "SM",
                email: "sophia.martinez@example.com",
                colorTheme: "Red"
            },
            date: new Date("2024-05-01"),
            product: {
                name: "MacBook Air M2",
                image: "macbook-air-m2.png"
            },
            quantity: 1,
            amount: 1299.00,
            paymentMethod: "Cheque",
            salesRep: {
                name: "Courtney Henry",
                avatar: "avatar-3.jpg"
            },
            status: "Failed"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-7' && blockData.theme) {
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
                            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-6 sm:gap-3 mb-6">
                                <div className="w-full sm:w-56">
                                    <div className="e-input-group">
                                        <span className="e-input-group-icon e-icons e-search"></span>
                                        <input className="e-input" type="text" placeholder="Search transactions" />
                                    </div>
                                </div>
                                <ButtonComponent cssClass="e-primary self-end" content="Export to CSV" iconCss="e-icons e-export" iconPosition="Left" type="button"></ButtonComponent>
                            </div>
                            <GridComponent dataSource={gridData} key={"grid-7-tw"} width={"100%"} height={668} allowPaging={true}>
                                <ColumnsDirective>
                                    <ColumnDirective field="transactionId" headerText="Transaction ID" width="116"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="#">{data.transactionId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="customerDetails" headerText="Customer Name" width="320"
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1.5">
                                                <div className="w-8 h-8">
                                                    <span className={`e-avatar e-avatar-circle e-avatar-small ${ data.customerDetails.colorTheme === "Red" ? "!bg-red-100 !text-red-700" : data.customerDetails.colorTheme === "Green" ? "!bg-green-100 !text-green-700" : data.customerDetails.colorTheme === "Blue" ? "!bg-cyan-100 !text-cyan-700" : data.customerDetails.colorTheme === "Orange" ? "!bg-orange-100 !text-orange-700" : data.customerDetails.colorTheme === "Purple" ? "!bg-indigo-100 !text-indigo-700" : ""}`}>{data.customerDetails.initial}</span>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.customerDetails.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.customerDetails.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="date" headerText="Purchase Date" width="110" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="product" headerText="Product" width="208"
                                        template={(data: any) => (
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10">
                                                    <img className="rounded" src={`/react/essential-ui-kit/blocks/assets/images/advance-grid/sales-transactions-table/${data.product.image}`} width={40} height={40} alt="product image" />
                                                </div>
                                                <p>{data.product.name}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="quantity" headerText="Quantity" width="80" textAlign="Right" />
                                    <ColumnDirective field="amount" headerText="Amount" width="115" format="c2" textAlign="Right" />
                                    <ColumnDirective field="paymentMethod" headerText="Payment Method" width="170" />
                                    <ColumnDirective field="salesRep" headerText="Sales Representative" width="194"
                                        template={(data: any) => (
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.salesRep.avatar}')` }}></span>
                                                </div>
                                                <p>{data.salesRep.name}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Status" width="93"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className={`e-badge ${data.status === "Completed" ? "e-badge-success" : data.status === "Pending" ? "e-badge-info" : data.status === "Processing" ? "e-badge-warning" : data.status === "Failed" ? "e-badge-danger" : ""} !px-2`}>{data.status}</span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective headerText="Action" width="82" template={() => <ButtonComponent cssClass="e-link" content="View" type="button"></ButtonComponent>} />
                                </ColumnsDirective>
                                <Inject services={[Page]} />
                            </GridComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="py-5 px-4 px-sm-6 mx-auto">
                            <div className="d-flex flex-column-reverse flex-sm-row justify-content-end gap-3 mb-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="e-input-group">
                                            <span className="e-input-group-icon e-icons e-search border-end-0"></span>
                                            <input className="e-input" type="text" placeholder="Search transactions" />
                                        </div>
                                    </div>
                                </div>
                                <ButtonComponent cssClass="e-primary align-self-end" content="Export to CSV" iconCss="e-icons e-export" iconPosition="Left" type="button"></ButtonComponent>
                            </div>
                            <GridComponent dataSource={gridData} key={"grid-7-bs"} width="100%" height={668} allowPaging={true}>
                                <ColumnsDirective>
                                    <ColumnDirective field="transactionId" headerText="Transaction ID" width="126"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="#">{data.transactionId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="customerDetails" headerText="Customer Name" textAlign="Left" width="270"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center py-1">
                                                <div style={{ width: "32px", height: "32px" }}>
                                                    <span className={`e-avatar e-avatar-circle e-avatar-small ${data.customerDetails.colorTheme === "Red" ? "bg-danger-subtle text-danger" : data.customerDetails.colorTheme === "Green" ? "bg-success-subtle text-success" : data.customerDetails.colorTheme === "Blue" ? "bg-info-subtle text-info" : data.customerDetails.colorTheme === "Orange" ? "bg-warning-subtle text-warning" : "bg-primary-subtle text-primary"}`}>{data.customerDetails.initial}</span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.customerDetails.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.customerDetails.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="date" headerText="Purchase Date" width="142" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="product" headerText="Product" width="219"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center gap-3">
                                                <div style={{ width: "40px", height: "40px" }}>
                                                    <img className="rounded" src={`/react/essential-ui-kit/blocks/assets/images/advance-grid/sales-transactions-table/${data.product.image}`} width={40} height={40} alt="product image" />
                                                </div>
                                                <p className="mb-0">{data.product.name}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="quantity" headerText="Quantity" width="115" textAlign="Right" />
                                    <ColumnDirective field="amount" headerText="Amount" width="122" format="C2" textAlign="Right" />
                                    <ColumnDirective field="paymentMethod" headerText="Payment Method" width="143" />
                                    <ColumnDirective field="salesRep" headerText="Sales Representative" width="192"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center gap-3">
                                                <div style={{ width: "32px", height: "32px" }}>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.salesRep.avatar}')` }}></span>
                                                </div>
                                                <p className="mb-0">{data.salesRep.name}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="status" headerText="Status" width="103"
                                        template={(data: any) => (
                                            <div className="fs-6">
                                                <span className={`e-badge ${data.status === "Completed" ? "e-badge-success" : data.status === "Pending" ? "e-badge-info" : data.status === "Processing" ? "e-badge-warning" : data.status === "Failed" ? "e-badge-danger" : ""} px-2`}>{data.status}</span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective headerText="Action" width="72" template={() => <ButtonComponent cssClass="e-link !p-0" content="View" type="button"></ButtonComponent>} />
                                </ColumnsDirective>
                                <Inject services={[Page]} />
                            </GridComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}