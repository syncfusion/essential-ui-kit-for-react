'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Grid5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const data: any[] = [
        {
            id: 1,
            assetId: "AS001",
            hardware: "Lenovo Yoga",
            category: "Laptop",
            serialNum: "CB27932009",
            invoice: "INV-2878",
            assigned: "John Doe",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("5/1/2021"),
            status: "Assigned"
        },
        {
            id: 2,
            assetId: "AS002",
            hardware: "Acer Aspire",
            category: "Miscellaneous",
            serialNum: "CB27932032",
            invoice: "INV-5436",
            purchaseDate: new Date("2/12/2018"),
            warrantyEndDate: new Date("3/1/2023"),
            status: "In-repair"
        },
        {
            id: 3,
            assetId: "AS003",
            hardware: "Apple MacBook",
            category: "Laptop",
            serialNum: "CB27932054",
            invoice: "INV-2345",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("4/3/2021"),
            status: "In-repair"
        },
        {
            id: 4,
            assetId: "AS004",
            hardware: "Lenovo Thinkpad",
            category: "Laptop",
            serialNum: "CB27932044",
            invoice: "INV-8753",
            purchaseDate: new Date("3/9/2018"),
            warrantyEndDate: new Date("5/12/2021"),
            status: "Pending"
        },
        {
            id: 5,
            assetId: "AS005",
            hardware: "Dell Inspiron",
            category: "Laptop",
            serialNum: "CB27932065",
            invoice: "INV-3735",
            assigned: "David Anto",
            purchaseDate: new Date("1/10/2018"),
            warrantyEndDate: new Date("4/1/2021"),
            status: "Assigned"
        },
        {
            id: 6,
            assetId: "AS006",
            hardware: "HP Pavilion",
            category: "Laptop",
            serialNum: "CB27932345",
            invoice: "INV-6643",
            assigned: "Mary Saveloy",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("9/1/2021"),
            status: "Assigned"
        },
        {
            id: 7,
            assetId: "AS007",
            hardware: "Asus ZenBook",
            category: "Laptop",
            serialNum: "CB27932088",
            invoice: "INV-8426",
            purchaseDate: new Date("6/16/2018"),
            warrantyEndDate: new Date("5/21/2021"),
            status: "Pending"
        },
        {
            id: 8,
            assetId: "AS008",
            hardware: "HP EliteBook",
            category: "Laptop",
            serialNum: "CB27932011",
            invoice: "INV-2351",
            purchaseDate: new Date("2/12/2018"),
            warrantyEndDate: new Date("10/2/2022"),
            status: "Ordered"
        },
        {
            id: 9,
            assetId: "AS009",
            hardware: "Apple MacBook Air",
            category: "Laptop",
            serialNum: "CB27932005",
            invoice: "INV-5553",
            purchaseDate: new Date("3/12/2018"),
            warrantyEndDate: new Date("3/1/2023"),
            status: "Pending"
        },
        {
            id: 10,
            assetId: "AS010",
            hardware: "Apple iPad Air",
            category: "Tablet",
            serialNum: "CB27932007",
            invoice: "INV-1212",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("6/1/2021"),
            status: "Pending"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-5' && blockData.theme) {
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
                            <GridComponent dataSource={data} key={"grid-5-tw"} width="100%" height={560} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="assetId" headerText="Asset ID" width="90"
                                        template={(data: any) => (
                                            <a className="text-primary-700 dark:text-primary-500 font-medium" href="javascript:void(0);">{data.assetId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="hardware" headerText="Hardware" width="155" />
                                    <ColumnDirective field="category" headerText="Category" width="124" />
                                    <ColumnDirective field="serialNum" headerText="Serial Number" width="136" />
                                    <ColumnDirective field="invoice" headerText="Invoice" width="94" />
                                    <ColumnDirective field="purchaseDate" headerText="Purchase Date" format={{ type: "date", format: "MM/dd/yyyy" }} width="110" textAlign="Right" />
                                    <ColumnDirective field="warrantyEndDate" headerText="Warranty Ends On" format={{ type: "date", format: "MM/dd/yyyy" }} width="135" textAlign="Right" />
                                    <ColumnDirective field="status" headerText="Status" width="100" />
                                    <ColumnDirective field="assigned" headerText="Assigned" width="136" textAlign="Center"
                                        template={(data: any) => (
                                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                                <p>{data.assigned || "-"}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective headerText="Action" width="90" textAlign="Right"
                                        template={() => (
                                            <div className="e-small py-2">
                                                <ButtonComponent cssClass="e-flat me-1" iconCss="e-icons e-edit" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-trash" type="button"></ButtonComponent>
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
                            <GridComponent dataSource={data} key={"grid-5-bs"} width="100%" height={545} gridLines="None">
                                <ColumnsDirective>
                                    <ColumnDirective type="checkbox" isPrimaryKey={true} textAlign="Center" width="40" />
                                    <ColumnDirective field="assetId" headerText="Asset ID" width="90"
                                        template={(data: any) => (
                                            <a className="text-primary fw-medium text-decoration-none" href="javascript:void(0);">{data.assetId}</a>
                                        )}
                                    />
                                    <ColumnDirective field="hardware" headerText="Hardware" width="155" />
                                    <ColumnDirective field="category" headerText="Category" width="124" />
                                    <ColumnDirective field="serialNum" headerText="Serial Number" width="136" />
                                    <ColumnDirective field="invoice" headerText="Invoice" width="94" />
                                    <ColumnDirective field="purchaseDate" headerText="Purchase Date" format={{ type: "date", format: "MM/dd/yyyy" }} width="125" textAlign="Right" />
                                    <ColumnDirective field="warrantyEndDate" headerText="Warranty Ends On" format={{ type: "date", format: "MM/dd/yyyy" }} width="150" textAlign="Right" />
                                    <ColumnDirective field="status" headerText="Status" width="100" />
                                    <ColumnDirective field="assigned" headerText="Assigned" width="136" textAlign="Center"
                                        template={(data: any) => (
                                            <div className="text-body">
                                                <p className="mb-0">{data.assigned || "-"}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective headerText="Action" width="90" textAlign="Right"
                                        template={() => (
                                            <div className="e-small py-2">
                                                <ButtonComponent cssClass="e-flat me-1" iconCss="e-icons e-edit" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-trash" type="button"></ButtonComponent>
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