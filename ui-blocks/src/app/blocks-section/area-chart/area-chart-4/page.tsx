'use client';

import { useEffect, useRef, useState } from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, SplineAreaSeries, Tooltip } from "@syncfusion/ej2-react-charts";

export default function AreaChart4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [xAxisLabelRotation, setLabelRotation] = useState(0);
    const chart = useRef<ChartComponent | null>(null);
    const yearDropDown = useRef<DropDownButtonComponent | null>(null);
    const userMenuDropDown = useRef<DropDownButtonComponent | null>(null);

    const areaChartData: object[] = [
        { month: 'Jan', teens: 0, youngAdults: 0, adults: 0 },
        { month: 'Feb', teens: 250, youngAdults: 70, adults: 100 },
        { month: 'Mar', teens: 200, youngAdults: 100, adults: 120 },
        { month: 'Apr', teens: 80, youngAdults: 120, adults: 80 },
        { month: 'May', teens: 60, youngAdults: 200, adults: 70 },
        { month: 'Jun', teens: 150, youngAdults: 250, adults: 160 },
        { month: 'Jul', teens: 180, youngAdults: 200, adults: 140 },
        { month: 'Aug', teens: 110, youngAdults: 300, adults: 100 },
        { month: 'Sep', teens: 130, youngAdults: 463, adults: 150 },
        { month: 'Oct', teens: 190, youngAdults: 400, adults: 190 },
        { month: 'Nov', teens: 160, youngAdults: 180, adults: 100 },
        { month: 'Dec', teens: 30, youngAdults: 50, adults: 40 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        labelIntersectAction: 'None',
        labelRotation: xAxisLabelRotation,
        labelStyle: { fontWeight: '500' },
        interval: 1,
        lineStyle: { width: 0 },
        edgeLabelPlacement: 'Shift',
        labelPlacement: 'OnTicks'
    };

    const primaryYAxis: object = {
        lineStyle: { width: 0 },
        majorGridLines: { width: 1 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        labelFormat: '{value}',
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' },
        minimum: 0,
        maximum: 500,
        interval: 100
    };

    const tooltip: object = {
        enable: true,
        enableMarker: false,
        header: '',
        showNearestTooltip: true,
        format: '<b>${point.y} ↑</b>'
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth < 767 ? -90 : 0;
        setLabelRotation(newRotation);
        closeDropdown(yearDropDown.current);
        closeDropdown(userMenuDropDown.current);
    };

    const closeDropdown = (dropDown: DropDownButtonComponent | null): void => {
        if (dropDown?.element?.classList.contains("e-active")) {
            dropDown.toggle();
        }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-4' && blockData.theme) {
                    setTheme(blockData.theme);
                }
                 else if (blockData.mode) {
                    setIsDarkMode(blockData.mode == 'dark');
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
        /* SB Code - End */
        window.addEventListener('resize', handleResize);
        if (chart.current) {
            chart.current.refresh();
        }

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div key={"areachart-4-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: "690px" }}>
                                <div>
                                    <h1 className="text-base font-medium mb-2 text-gray-900 dark:text-white">Visitor Analysis</h1>
                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Overall Visitors</p>
                                </div>
                                <div className="mt-4 sm:mt-5 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center sm:gap-0 gap-5">
                                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">30,754</h1>
                                    <div className="flex flex-row gap-3 sm:ml-auto">
                                        <DropDownButtonComponent ref={yearDropDown} content="2024" items={[{ text: "2024" }, { text: "2023" }, { text: "2022" }, { text: "2021" }, { text: "2020" }]} type="button"></DropDownButtonComponent>
                                        <DropDownButtonComponent ref={userMenuDropDown} content="Age" items={[{ text: "Age" }, { text: "Gender" }, { text: "Location" }, { text: "Language" }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex text-gray-700 font-medium gap-3 dark:text-gray-300">
                                        <p className="text-sm">Age Category:</p>
                                        <div className="flex items-center text-xs gap-3 sm:gap-6">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor:" #267DDA" }}></span>
                                                <p>12 - 19</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor:" #DE4383" }}></span>
                                                <p>20 - 39</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor:" #01A8B5" }}></span>
                                                <p>40{'>'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7 sm:mt-5">
                                    <ChartComponent ref={chart} height="300px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: false, }} tooltip={ tooltip } load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[SplineAreaSeries, Tooltip, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={areaChartData} type="SplineArea" xName="month" yName="teens" fill="#267DDA" opacity={0.4} width={2} ></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="SplineArea" xName="month" yName="youngAdults" fill="#DE4383" opacity={0.4} width={2}></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="SplineArea" xName="month" yName="adults" fill="#01A8B5" opacity={0.4} width={2}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"areachart-4-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: "690px" }}>
                                <div>
                                    <h1 className="fs-6 fw-medium mb-1 text-body">Visitor Analysis</h1>
                                    <p className="small fw-normal text-body-secondary mb-sm-1 mb-0">Overall Visitors</p>
                                </div>
                                <div className="mt-3 d-flex flex-column-reverse flex-sm-row justify-content-sm-between align-items-sm-center gap-sm-0 gap-3">
                                    <h1 className="fs-5 fw-bolder text-body mb-0">30,754</h1>
                                    <div className="d-flex flex-row gap-3 gap-sm-2 ms-sm-auto">
                                        <DropDownButtonComponent ref={yearDropDown} cssClass="e-outline me-sm-1" content="2024" items={[{ text: "2024" }, { text: "2023" }, { text: "2022" }, { text: "2021" }, { text: "2020" }]} type="button"></DropDownButtonComponent>
                                        <DropDownButtonComponent ref={userMenuDropDown} cssClass="e-outline" content="Age" items={[{ text: "Age" }, { text: "Gender" }, { text: "Location" }, { text: "Language" }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-3 mb-1">
                                    <div className="small d-flex fw-medium gap-2">
                                        <p className="text-body-secondary pe-1 mb-0">Age Category:</p>
                                        <div className="d-flex align-items-center text-body gap-3 gap-sm-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="rounded-circle" style= {{ width: "8px", height: "8px", backgroundColor:" #006EEF" }}></span>
                                                <p className="mb-0">12 - 19</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="rounded-circle" style= {{ width: "8px", height: "8px", backgroundColor:" #EF00AC" }}></span>
                                                <p className="mb-0">20 - 39</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="rounded-circle" style= {{ width: "8px", height: "8px", backgroundColor:" #00EFA7" }}></span>
                                                <p className="mb-0">40{'>'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 mt-sm-3">
                                    <ChartComponent ref={chart} height="300px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: false, }} tooltip={ tooltip } load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[SplineAreaSeries, Tooltip, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={areaChartData} type="SplineArea" xName="month" yName="teens" fill="#006EEF" opacity={0.4} width={2} ></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="SplineArea" xName="month" yName="youngAdults" fill="#EF00AC" opacity={0.4} width={2}></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="SplineArea" xName="month" yName="adults" fill="#00EFA7" opacity={0.4} width={2}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
