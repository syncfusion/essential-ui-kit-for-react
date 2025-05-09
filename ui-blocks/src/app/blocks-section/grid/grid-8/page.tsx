'use client';

import { useEffect, useState } from "react";
import { GridComponent, ColumnDirective, ColumnsDirective, Inject, Group } from "@syncfusion/ej2-react-grids";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

export default function Grid8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const gridData: any[] = [
        {
            id: 1,
            name: "Lisa Martinez",
            totalSales: 220000,
            trend: "down",
            dealsClosed: 11,
            target: 3000000,
            progressBar: { id: "progressId-1", value: 22.3 },
            avgDealSize: 20000,
            winPercent: "Low(<70%)",
            winRate: 62,
            callsMade: 100,
            meetings: 20,
            pipelineValue: 400000,
            performance: 60
        },
        {
            id: 2,
            name: "Robert Johnson",
            totalSales: 240000,
            trend: "down",
            dealsClosed: 12,
            target: 3000000,
            progressBar: { id: "progressId-2", value: 80.0 },
            avgDealSize: 20000,
            winPercent: "Low(<70%)",
            winRate: 65,
            callsMade: 110,
            meetings: 22,
            pipelineValue: 450000,
            performance: 65
        },
        {
            id: 3,
            name: "William Turner",
            totalSales: 250000,
            trend: "down",
            dealsClosed: 13,
            target: 3000000,
            progressBar: { id: "progressId-3", value: 50.1 },
            avgDealSize: 19230,
            winPercent: "Low(<70%)",
            winRate: 68,
            callsMade: 115,
            meetings: 24,
            pipelineValue: 470000,
            performance: 69
        },
        {
            id: 4,
            name: "Jennifer Lee",
            totalSales: 290000,
            trend: "down",
            dealsClosed: 14,
            target: 3000000,
            progressBar: { id: "progressId-4", value: 89.0 },
            avgDealSize: 19285,
            winPercent: "Medium(70-79%)",
            winRate: 72,
            callsMade: 125,
            meetings: 26,
            pipelineValue: 500000,
            performance: 74
        },
        {
            id: 5,
            name: "Sarah Wilson",
            totalSales: 290000,
            trend: "up",
            dealsClosed: 15,
            target: 3000000,
            progressBar: { id: "progressId-5", value: 100 },
            avgDealSize: 18666,
            winPercent: "Medium(70-79%)",
            winRate: 75,
            callsMade: 130,
            meetings: 28,
            pipelineValue: 520000,
            performance: 78
        },
        {
            id: 6,
            name: "David Thompson",
            totalSales: 290000,
            trend: "down",
            dealsClosed: 16,
            target: 3000000,
            progressBar: { id: "progressId-6", value: 23.3 },
            avgDealSize: 18125,
            winPercent: "Medium(70-79%)",
            winRate: 78,
            callsMade: 135,
            meetings: 30,
            pipelineValue: 550000,
            performance: 82
        },
        {
            id: 7,
            name: "Michael Davis",
            totalSales: 310000,
            trend: "down",
            dealsClosed: 17,
            target: 3000000,
            progressBar: { id: "progressId-7", value: 50.1 },
            avgDealSize: 18235,
            winPercent: "High(80%+)",
            winRate: 82,
            callsMade: 140,
            meetings: 32,
            pipelineValue: 580000,
            performance: 88
        },
        {
            id: 8,
            name: "John Smith",
            totalSales: 320000,
            trend: "down",
            dealsClosed: 18,
            target: 3000000,
            progressBar: { id: "progressId-8", value: 23.3 },
            avgDealSize: 17777,
            winPercent: "High(80%+)",
            winRate: 85,
            callsMade: 150,
            meetings: 35,
            pipelineValue: 600000,
            performance: 92
        },
        {
            id: 9,
            name: "Emily Brown",
            totalSales: 350000,
            trend: "up",
            dealsClosed: 19,
            target: 3000000,
            progressBar: { id: "progressId-9", value: 100 },
            avgDealSize: 17500,
            winPercent: "High(80%+)",
            winRate: 88,
            callsMade: 180,
            meetings: 40,
            pipelineValue: 700000,
            performance: 99
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-8' && blockData.theme) {
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
                        <div className="mx-auto w-full py-10 sm:px-6 px-4">
                            <GridComponent dataSource={gridData} key={"grid-8-tw"} rowHeight={44} width="100%" height={440} allowGrouping={true} groupSettings={{ showDropArea: true }}>
                                <ColumnsDirective>
                                    <ColumnDirective field="name" headerText="Sales Representative" width="156" />
                                    <ColumnDirective field="totalSales" headerText="Total Revenue" width="124" format="C0" textAlign="Right"
                                        template={(data: any) => (
                                            <div className="flex items-center justify-end">
                                                <span>{data.totalSales.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</span>
                                                {data.trend === "up" && <span className="e-icons e-arrow-up ms-2 !text-green-500"></span>}
                                                {data.trend === "down" && <span className="e-icons e-arrow-down ms-2 !text-red-600"></span>}
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="dealsClosed" headerText="Deals Won" width="96" textAlign="Right" />
                                    <ColumnDirective field="target" headerText="Target" format="C0" width="106"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className="e-badge e-badge-info">{data.target.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="progressBar" headerText="% of Target" width="196"
                                        template={(data: any) => (
                                            <div className="flex flex-col w-48 pr-2.5">
                                                <ProgressBarComponent id={data.progressBar.id} key={data.progressBar.id} progressThickness={8} trackThickness={8} value={data.progressBar.value} width={"182"} progressColor={data.progressBar.value === 100 ? "#15803D" : "#4F46E5"} />
                                                <p className="text-xs text-end">{data.progressBar.value.toFixed(1)}%</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="avgDealSize" headerText="Average Deal Size" format="C0" width="135" textAlign="Right" />
                                    <ColumnDirective field="winPercent" headerText="Win Rate" width="80"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className={`e-badge !px-2 ${data.winRate < 70 ? "e-badge-warning" : data.winRate >= 70 && data.winRate < 80 ? "e-badge-info" : "e-badge-success"}`}>
                                                    {data.winRate !== null && data.winRate !== undefined ? `${data.winRate}%` : "Unknown"}
                                                </span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="callsMade" headerText="Calls Made" width="100" textAlign="Right" />
                                    <ColumnDirective field="meetings" headerText="Meetings Scheduled" width="150" textAlign="Right" />
                                    <ColumnDirective field="pipelineValue" headerText="Pipeline Value" width="115" format="C0" textAlign="Right" />
                                    <ColumnDirective field="performance" headerText="Performance Score" width="145" textAlign="Right"
                                        template={(data: any) => (
                                            <div className="e-bigger flex gap-2 items-center justify-end">
                                                <span className={`sf-icon-gauge text-lg ${data.winRate < 70 ? "!text-orange-700" : data.winRate >= 70 && data.winRate < 80 ? "!text-cyan-700" : "!text-green-700"}`}></span>
                                                <p>{data.performance}</p>
                                            </div>
                                        )}
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
                        <div className="py-4 px-4 px-sm-6 mx-auto">
                            <GridComponent dataSource={gridData} key={"grid-8-bs"} rowHeight={44} width="100%" height="440" allowGrouping={true} groupSettings={{ showDropArea: true }}>
                                <ColumnsDirective>
                                    <ColumnDirective field="name" headerText="Sales Representative" width="165" />
                                    <ColumnDirective field="totalSales" headerText="Total Revenue" width="124" format="C2" textAlign="Right"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center justify-content-end">
                                                <span>{data.totalSales.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</span>
                                                {data.trend === "up" && <span className="e-icons e-arrow-up ms-2 text-success"></span>}
                                                {data.trend === "down" && <span className="e-icons e-arrow-down ms-2 text-danger"></span>}
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="dealsClosed" headerText="Deals Won" width="126" textAlign="Right" />
                                    <ColumnDirective field="target" headerText="Target" width="135" format="C2"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className="e-badge e-badge-info">{data.target.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="progressBar" headerText="% of Target" width="210"
                                        template={(data: any) => (
                                            <div className="d-flex flex-column w-48 pe-3">
                                                <ProgressBarComponent id={data.progressBar.id} key={data.progressBar.id} progressThickness={8} trackThickness={8} value={data.progressBar.value} width={"182"} progressColor={data.progressBar.value === 100 ? "#15803D" : "#4F46E5"} />
                                                <p className="text-end small">{data.progressBar.value.toFixed(1)}%</p>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="avgDealSize" headerText="Average Deal Size" width="160" format="C0" textAlign="Right" />
                                    <ColumnDirective field="winPercent" headerText="Win Rate" width="125"
                                        template={(data: any) => (
                                            <div className="e-bigger">
                                                <span className={`e-badge !px-2 ${data.winRate < 70 ? "e-badge-warning" : data.winRate >= 70 && data.winRate < 80 ? "e-badge-info" : "e-badge-success"}`}>
                                                    {data.winRate !== null && data.winRate !== undefined ? `${data.winRate}%` : "Unknown"}
                                                </span>
                                            </div>
                                        )}
                                    />
                                    <ColumnDirective field="callsMade" headerText="Calls Made" width="105" textAlign="Right" />
                                    <ColumnDirective field="meetings" headerText="Meetings Scheduled" width="165" textAlign="Right" />
                                    <ColumnDirective field="pipelineValue" headerText="Pipeline Value" width="125" format="C0" textAlign="Right" />
                                    <ColumnDirective field="performance" headerText="Performance Score" width="155" textAlign="Right"
                                        template={(data: any) => (
                                            <div className="d-flex align-items-center justify-content-end gap-1">
                                                <span className={`sf-icon-gauge fs-5 ${data.winRate < 70 ? "text-warning" : data.winRate >= 80 ? "text-success" : "text-info"}`} />
                                                <p className="mb-0">{data.performance}</p>
                                            </div>
                                        )}
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