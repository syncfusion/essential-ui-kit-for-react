'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Grid3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const gridData: any[] = [
        {
            id: 1,
            invoiceId: "INV202401",
            customerDetails: {
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                avatar: "avatar-8.jpg"
            },
            invoiceDate: new Date("02/01/2024"),
            itemsPurchased: "Helpdesk - Team",
            quantity: 1,
            price: 1000,
            tax: 72,
            discount: 0,
            total: 1072,
            status: "Paid",
            dueDate: new Date("05/01/2024"),
            paymentDate: new Date("05/01/2024"),
            paymentMethod: "Credit card"
        },
        {
            id: 2,
            invoiceId: "INV202402",
            customerDetails: {
                name: "Bob Smith",
                email: "bob.smith@example.com",
                avatar: "avatar-1.jpg"
            },
            invoiceDate: new Date("10/28/2024"),
            itemsPurchased: "AI Content Creator",
            quantity: 2,
            price: 2000,
            tax: 160,
            discount: 10,
            total: 2150,
            status: "Pending",
            dueDate: new Date("05/01/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 3,
            invoiceId: "INV202403",
            customerDetails: {
                name: "Carol Davis",
                email: "carol.davis@example.com",
                avatar: "avatar-2.jpg"
            },
            invoiceDate: new Date("01/15/2024"),
            itemsPurchased: "Helpdesk - Single User",
            quantity: 2,
            price: 1450,
            tax: 110,
            discount: 20,
            total: 1600,
            status: "Paid",
            dueDate: new Date("04/15/2024"),
            paymentDate: new Date("04/15/2024"),
            paymentMethod: "Paypal"
        },
        {
            id: 4,
            invoiceId: "INV202404",
            customerDetails: {
                name: "Dave White",
                email: "dave.white@example.com",
                avatar: "avatar-4.jpg"
            },
            invoiceDate: new Date("03/12/2024"),
            itemsPurchased: "Miro App",
            quantity: 1,
            price: 4600,
            tax: 320,
            discount: 0,
            total: 4920,
            status: "Pending",
            dueDate: new Date("05/03/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 5,
            invoiceId: "INV202405",
            customerDetails: {
                name: "Eve Wilson",
                email: "eve.wilson@example.com",
                avatar: "avatar-9.jpg"
            },
            invoiceDate: new Date("01/25/2024"),
            itemsPurchased: "Canva",
            quantity: 1,
            price: 820,
            tax: 30,
            discount: 0,
            total: 850,
            status: "Paid",
            dueDate: new Date("01/30/2024"),
            paymentDate: new Date("01/30/2024"),
            paymentMethod: "Cash"
        },
        {
            id: 6,
            invoiceId: "INV202406",
            customerDetails: {
                name: "Frank Harris",
                email: "frank.harris@example.com",
                avatar: "avatar-6.jpg"
            },
            invoiceDate: new Date("05/08/2024"),
            itemsPurchased: "Remove BG App",
            quantity: 3,
            price: 220,
            tax: 25,
            discount: 0,
            total: 245,
            status: "Pending",
            dueDate: new Date("06/08/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 7,
            invoiceId: "INV202407",
            customerDetails: {
                name: "Grace Brown",
                email: "grace.brown@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceDate: new Date("01/08/2024"),
            itemsPurchased: "Affinity Designer",
            quantity: 2,
            price: 235,
            tax: 25,
            discount: 0,
            total: 260,
            status: "Pending",
            dueDate: new Date("05/01/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 8,
            invoiceId: "INV202408",
            customerDetails: {
                name: "Henry King",
                email: "henry.king@example.com",
                avatar: "avatar-3.jpg"
            },
            invoiceDate: new Date("04/15/2024"),
            itemsPurchased: "Corel Draw",
            quantity: 2,
            price: 2500,
            tax: 200,
            discount: 0,
            total: 2700,
            status: "Pending",
            dueDate: new Date("06/15/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 9,
            invoiceId: "INV202409",
            customerDetails: {
                name: "Ivy Anderson",
                email: "ivy.anderson@example.com",
                avatar: "avatar-14.jpg"
            },
            invoiceDate: new Date("07/21/2024"),
            itemsPurchased: "Affinity Designer",
            quantity: 1,
            price: 3200,
            tax: 210,
            discount: 30,
            total: 3380,
            status: "Paid",
            dueDate: new Date("09/21/2024"),
            paymentDate: new Date("09/20/2024"),
            paymentMethod: "Credit card"
        },
        {
            id: 10,
            invoiceId: "INV202410",
            customerDetails: {
                name: "Jack Scott",
                email: "jack.scott@example.com",
                avatar: "avatar-6.jpg"
            },
            invoiceDate: new Date("02/25/2024"),
            itemsPurchased: "Microsoft 365",
            quantity: 1,
            price: 1000,
            tax: 72,
            discount: 0,
            total: 1072,
            status: "Paid",
            dueDate: new Date("03/20/2024"),
            paymentDate: new Date("03/20/2024"),
            paymentMethod: "Cash"
        }
    ];
        
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-3' && blockData.theme) {
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
                            <GridComponent dataSource={gridData} key={"grid-3-tw"} width="100%" height={658} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="invoiceId" headerText="Invoice ID" width="111"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="#">{data.invoiceId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="customerDetails" headerText="Customer Details" textAlign="Left" width="272"
                                        template={(data: any) => (
                                            <div className="flex gap-3 items-center py-1.5">
                                                <div className="w-8 h-8">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.customerDetails.avatar}')` }}></span>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-gray-900 dark:text-gray-50">{data.customerDetails.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400">{data.customerDetails.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="invoiceDate" headerText="Invoice Date" width="122" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="itemsPurchased" headerText="Software" width="177" />
                                    <ColumnDirective field="quantity" headerText="Quantity" textAlign="Right" width="80" />
                                    <ColumnDirective field="price" headerText="Unit Price" width="100" format="C2" textAlign="Right" />
                                    <ColumnDirective field="tax" headerText="Tax Amount" width="100" format="C2" textAlign="Right" />
                                    <ColumnDirective field="discount" headerText="Discount Amount" width="134" textAlign="Right"
                                        template={(data: any) => (
                                            <p className="text-green-700 dark:text-green-500">
                                                {data.discount.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 })}
                                            </p>
                                        )}
                                    />
                                    <ColumnDirective field="total" headerText="Total Amount" width="110" format="C2" textAlign="Right" />
                                    <ColumnDirective field="status" headerText="Status" width="93"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                {data.status === "Paid" ? (
                                                    <span className="e-badge e-badge-success flex gap-1 items-center w-max">
                                                        <div className="w-2 h-2 rounded-full bg-green-700"></div>Paid
                                                    </span>
                                                ) : data.status === "Pending" ? (
                                                    <span className="e-badge e-badge-warning flex gap-1 items-center w-max">
                                                        <div className="w-2 h-2 rounded-full bg-orange-700"></div>Pending
                                                    </span>
                                                ) : (
                                                    <span>No records found.</span>
                                                )}
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="dueDate" headerText="Due Date" width="112" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="paymentDate" headerText="Payment Date" textAlign="Right" width="124"
                                        template={(data: any) => (
                                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                                <p>{data.paymentDate ? new Date(data.paymentDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) : "-"}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="paymentMethod" headerText="Payment Method" width="130"
                                        template={(data: any) => (
                                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                                <p>{data.paymentMethod || "-"}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective headerText="Action" width="102"
                                        template={() => (
                                            <div className="e-small flex gap-1">
                                                <ButtonComponent cssClass="e-flat me-1" iconCss="e-icons e-eye" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-print" type="button"></ButtonComponent>
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
                            <GridComponent dataSource={gridData} key={"grid-3-bs"} width="100%" height={658} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="invoiceId" headerText="Invoice ID" width="111"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="#">{data.invoiceId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="customerDetails" headerText="Customer Details" textAlign="Left" width="272"
                                        template={(data: any) => (
                                            <div className="d-flex gap-3 align-items-center py-1">
                                                <div className="rounded-circle overflow-hidden" style={{ width: "32px", height: "32px" }}>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url('/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.customerDetails.avatar}')` }}></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="text-body mb-0">{data.customerDetails.name}</p>
                                                    <p className="text-body-secondary mb-0">{data.customerDetails.email}</p>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="invoiceDate" headerText="Invoice Date" width="122" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="itemsPurchased" headerText="Software" width="180" />
                                    <ColumnDirective field="quantity" headerText="Quantity" textAlign="Right" width="90" />
                                    <ColumnDirective field="price" headerText="Unit Price" width="100" format="C2" textAlign="Right" />
                                    <ColumnDirective field="tax" headerText="Tax Amount" width="110" format="C2" textAlign="Right" />
                                    <ColumnDirective field="discount" headerText="Discount Amount" width="145" textAlign="Right"
                                        template={(data: any) => (
                                            <p className="text-success mb-0">
                                                {data.discount.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 })}
                                            </p>
                                        )}
                                    />
                                    <ColumnDirective field="total" headerText="Total Amount" width="120" format="C2" textAlign="Right" />
                                    <ColumnDirective field="status" headerText="Status" width="93"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                {data.status === "Paid" ? (
                                                    <span className="e-badge e-badge-success d-flex gap-1 align-items-center" style={{ width: "fit-content" }}>
                                                        <div className="bg-white rounded-circle mr-1" style={{ width: "8px", height: "8px" }}></div>Paid
                                                    </span>
                                                ) : data.status === "Pending" ? (
                                                    <span className="e-badge e-badge-warning d-flex gap-1 align-items-center" style={{ width: "fit-content" }}>
                                                        <div className="bg-dark rounded-circle" style={{ width: "8px", height: "8px" }}></div>Pending
                                                    </span>
                                                ) : (
                                                    <span>No records found.</span>
                                                )}
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="dueDate" headerText="Due Date" width="112" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                                    <ColumnDirective field="paymentDate" headerText="Payment Date" textAlign="Right" width="124"
                                        template={(data: any) => (
                                            <div className="text-body">
                                                <p className="m-0">{data.paymentDate ? new Date(data.paymentDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) : "-"}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="paymentMethod" headerText="Payment Method" width="145"
                                        template={(data: any) => (
                                            <div className="text-body">
                                                <p className="m-0">{data.paymentMethod || "-"}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective headerText="Action" width="102"
                                        template={() => (
                                            <div className="d-flex gap-1">
                                                <ButtonComponent className="e-flat" iconCss="e-icons e-eye" type="button"></ButtonComponent>
                                                <ButtonComponent className="e-flat" iconCss="e-icons e-print" type="button"></ButtonComponent>
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