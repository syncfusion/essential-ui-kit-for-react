'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";

export default function Grid10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const gridData: any[] = [
        {
            id: 1,
            product: "iPhone 13",
            productImage: "iphone-3.png",
            unitSold: 15000,
            totalRevenue: 11250000,
            averageSellingPrice: 750,
            percentOfTotalSales: "18%",
            totalSalesRep: {
                name: "John Smith",
                initial: "JS",
                colorTheme: "Orange"
            },
            returnRate: "2.5%"
        },
        {
            id: 2,
            product: "MacBook Air",
            productImage: "ma-book-air.png",
            unitSold: 8000,
            totalRevenue: 8800000,
            averageSellingPrice: 1100,
            percentOfTotalSales: "14%",
            totalSalesRep: {
                name: "Emily Brown",
                initial: "EB",
                colorTheme: "Green"
            },
            returnRate: "1.8%"
        },
        {
            id: 3,
            product: "AirPods Pro",
            productImage: "airpods-pro.png",
            unitSold: 25000,
            totalRevenue: 6250000,
            averageSellingPrice: 250,
            percentOfTotalSales: "10%",
            totalSalesRep: {
                name: "Michael Davis",
                initial: "MD",
                colorTheme: "Purple"
            },
            returnRate: "3.2%"
        },
        {
            id: 4,
            product: "iPad Air",
            productImage: "ipad Air.png",
            unitSold: 12000,
            totalRevenue: 7200000,
            averageSellingPrice: 600,
            percentOfTotalSales: "11%",
            totalSalesRep: {
                name: "Sarah Wilson",
                initial: "SW",
                colorTheme: "Orange"
            },
            returnRate: "2%"
        },
        {
            id: 5,
            product: "Apple Watch Series 7",
            productImage: "apple-watch-series-7.png",
            unitSold: 10000,
            totalRevenue: 4000000,
            averageSellingPrice: 400,
            percentOfTotalSales: "6%",
            totalSalesRep: {
                name: "David Thompson",
                initial: "DT",
                colorTheme: "Orange"
            },
            returnRate: "2.8%"
        },
        {
            id: 6,
            product: "iMac 24\"",
            productImage: "imac-24.png",
            unitSold: 5000,
            totalRevenue: 7500000,
            averageSellingPrice: 1500,
            percentOfTotalSales: "12%",
            totalSalesRep: {
                name: "Lisa Martinez",
                initial: "LM",
                colorTheme: "Red"
            },
            returnRate: "1.5%"
        },
        {
            id: 7,
            product: "Mac Mini",
            productImage: "mac-mini.png",
            unitSold: 7000,
            totalRevenue: 4900000,
            averageSellingPrice: 700,
            percentOfTotalSales: "8%",
            totalSalesRep: {
                name: "Robert Johnson",
                initial: "RJ",
                colorTheme: "Green"
            },
            returnRate: "1.2%"
        },
        {
            id: 8,
            product: "Air Tag",
            productImage: "air-tag.png",
            unitSold: 50000,
            totalRevenue: 1500000,
            averageSellingPrice: 30,
            percentOfTotalSales: "2%",
            totalSalesRep: {
                name: "Jennifer Lee",
                initial: "JL",
                colorTheme: "Blue"
            },
            returnRate: "0.8%"
        },
        {
            id: 9,
            product: "HomePod Mini",
            productImage: "homepad-mini.png",
            unitSold: 15000,
            totalRevenue: 1500000,
            averageSellingPrice: 100,
            percentOfTotalSales: "2%",
            totalSalesRep: {
                name: "William Turner",
                initial: "WT",
                colorTheme: "Purple"
            },
            returnRate: "1.2%"
        },
        {
            id: 10,
            product: "Apple TV 4K",
            productImage: "apple-tv-4k.png",
            unitSold: 8000,
            totalRevenue: 1440000,
            averageSellingPrice: 180,
            percentOfTotalSales: "2%",
            totalSalesRep: {
                name: "Emma Watson",
                initial: "EW",
                colorTheme: "Purple"
            },
            returnRate: "0.8%"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-10' && blockData.theme) {
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
                            <GridComponent dataSource={gridData} key={"grid-10-tw"} width="100%" height={498} rowHeight={48}>
                                <ColumnsDirective>
                                    <ColumnDirective field="product" headerText="Product" width="206"
                                        template={(data: any) => (
                                            <div className="flex items-center gap-3">
                                                <div className="w-8">
                                                    <img className="rounded h-8" src={`/react/essential-ui-kit/blocks/assets/images/advance-grid/product-sales-table/${data.productImage}`} width={32} height={32} alt="product image" />
                                                </div>
                                                <div className="text-sm">{data.product}</div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="unitSold" headerText="Unit Sold" width="96" template={(data: any) => <p>{data.unitSold.toLocaleString('en-US')}</p>} />
                                    <ColumnDirective field="totalRevenue" headerText="Total Revenue" format="C0" width="126" />
                                    <ColumnDirective field="averageSellingPrice" headerText="Average Selling Price" format="C0" width="158" />
                                    <ColumnDirective field="percentOfTotalSales" headerText="% of Total Sales" width="128" />
                                    <ColumnDirective field="totalSalesRep" headerText="Sales Representative" width="186"
                                        template={(data: any) => (
                                            <div className="flex gap-5 items-center">
                                                <span className={`e-avatar e-avatar-circle e-avatar-small text-white ${ data.totalSalesRep.colorTheme === "Red" ? "!bg-red-600" : data.totalSalesRep.colorTheme === "Green" ? "!bg-green-600" : data.totalSalesRep.colorTheme === "Blue" ? "!bg-cyan-600" : data.totalSalesRep.colorTheme === "Orange" ? "!bg-orange-600" : data.totalSalesRep.colorTheme === "Purple" ? "!bg-indigo-600" : ""}`}>{data.totalSalesRep.initial}</span>
                                                <p>{data.totalSalesRep.name}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="returnRate" headerText="Return Rate" width="103" />
                                </ColumnsDirective>
                            </GridComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="py-5 px-4 px-sm-6 mx-auto">
                            <GridComponent dataSource={gridData} key={"grid-10-bs"} width="100%" height={498} rowHeight={48}>
                                <ColumnsDirective>
                                    <ColumnDirective field="product" headerText="Product" width="212"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center gap-2">
                                                <div style={{ width: "32px" }}>
                                                    <img className="rounded" src={`/react/essential-ui-kit/blocks/assets/images/advance-grid/product-sales-table/${data.productImage}`} width={32} height={32} alt="product image" />
                                                </div>
                                                <div>{data.product}</div>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="unitSold" headerText="Unit Sold" width="96" template={(data: any) => <p className="mb-0">{data.unitSold.toLocaleString('en-US')}</p>} />
                                    <ColumnDirective field="totalRevenue" headerText="Total Revenue" format="C0" width="126" />
                                    <ColumnDirective field="averageSellingPrice" headerText="Average Selling Price" format="C0" width="158" />
                                    <ColumnDirective field="percentOfTotalSales" headerText="% of Total Sales" width="128" />
                                    <ColumnDirective field="totalSalesRep" headerText="Sales Representative" width="186"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center gap-3">
                                                <span className={`e-avatar e-avatar-circle e-avatar-small text-white ${data.totalSalesRep.colorTheme === "Red" ? "bg-danger" : data.totalSalesRep.colorTheme === "Green" ? "bg-success" : data.totalSalesRep.colorTheme === "Blue" ? "bg-info" : data.totalSalesRep.colorTheme === "Orange" ? "bg-warning" : "bg-primary"}`}>{data.totalSalesRep.initial}</span>
                                                <p className="mb-0">{data.totalSalesRep.name}</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="returnRate" headerText="Return Rate" width="103" />
                                </ColumnsDirective>
                            </GridComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}