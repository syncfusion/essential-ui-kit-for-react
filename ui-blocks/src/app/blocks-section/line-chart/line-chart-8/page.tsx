'use client';

import { useEffect, useState, useRef } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Tooltip, Legend, Category, Crosshair } from "@syncfusion/ej2-react-charts";

export default function LineChart8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any[] = [
        { xAxis: "Mon", yAxis1: 49, yAxis2: 25 },
        { xAxis: "Tue", yAxis1: 70, yAxis2: 48 },
        { xAxis: "Wed", yAxis1: 76, yAxis2: 48 },
        { xAxis: "Thu", yAxis1: 99, yAxis2: 51 },
        { xAxis: "Fri", yAxis1: 124, yAxis2: 97 },
        { xAxis: "Sat", yAxis1: 112, yAxis2: 77 },
        { xAxis: "Sun", yAxis1: 125, yAxis2: 97 }
    ];

    const primaryXAxis: object = {
        valueType: "Category",
        labelPlacement: "OnTicks",
        labelStyle: { fontWeight: "500" }
    };

    const primaryYAxis: object = {
        labelFormat: "${value}k",
        minimum: 0,
        maximum: 150,
        interval: 25,
        labelStyle: { fontWeight: "500" }
    };

    const tooltip: object = {
        enable: true,
        shared: false,
        showNearestTooltip: true,
        format: '${point.y}',
        header: '',
        enableMarker: false
    };

    const tooltipRender = (args: any) => {
        args.text = `$${(args.data.pointY * 1000).toLocaleString()}`
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        if (metricDropdownRef.current?.element?.classList.contains("e-active")) {
            metricDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-8' && blockData.theme) {
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
        if (chartRef.current) {
            chartRef.current.refresh();
        }
        return () => {
            /* SB Code - Start */
            window.addEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={"linechart-8-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: "1100px" }}>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-base font-semibold text-gray-900 dark:text-white">Sales Revenue</h2>
                                    <div className="flex gap-3">
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <div className="hidden sm:block mb-3">
                                        <div className="e-btn-group">
                                            <input type="radio" id="week" name="align" value="W" defaultChecked />
                                            <label className="e-btn" htmlFor="week">Week</label>
                                            <input type="radio" id="month" name="align" value="M" />
                                            <label className="e-btn" htmlFor="month">Month</label>
                                            <input type="radio" id="year" name="align" value="Y" />
                                            <label className="e-btn" htmlFor="year">Year</label>
                                            <input type="radio" id="custom" name="align" value="Custom" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                    </div>
                                    <DropDownButtonComponent ref={metricDropdownRef} className="e-outline block sm:hidden mb-3" content="Week" items={[{ text: "Week" }, { text: "Month" }, { text: "Year" }, { text: "Custom" }]} type="button"></DropDownButtonComponent>
                                </div>
                                <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" tooltipRender={tooltipRender} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} crosshair={{ enable: true, snapToData: true }} legendSettings={{ visible: true, position: 'Bottom', padding: 13 }} load={(args) => chartLoad(args, "Tailwind3", "Tailwind3Dark")}>
                                    <Inject services={[SplineSeries, Tooltip, Legend, Category, Crosshair]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis1" name="Recurring Revenue" type="Spline" width={3} fill="#91BD34"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis2" name="One - Time Revenue" type="Spline" width={3} fill="#9CA3AF"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"linechart-8-bs"} className="vh-100 d-flex justify-content-center align-items-start p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: "1100px" }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="h6 fw-semibold text-body">Sales Revenue</h2>
                                    <div className="d-flex gap-3">
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="d-none d-sm-block">
                                        <div className="e-btn-group d-none d-sm-block">
                                            <input type="radio" className="btn-check" id="week" name="align" value="W" defaultChecked />
                                            <label className="e-btn" htmlFor="week">Week</label>
                                            <input type="radio" className="btn-check" id="month" name="align" value="M" />
                                            <label className="e-btn" htmlFor="month">Month</label>
                                            <input type="radio" className="btn-check" id="year" name="align" value="Y" />
                                            <label className="e-btn" htmlFor="year">Year</label>
                                            <input type="radio" className="btn-check" id="custom" name="align" value="Custom" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                    </div>
                                    <DropDownButtonComponent ref={metricDropdownRef} className="e-outline d-block d-sm-none mb-3" content="Week" items={[{ text: "Week" }, { text: "Month" }, { text: "Year" }, { text: "Custom" }]} type="button"></DropDownButtonComponent>
                                </div>
                                <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" tooltipRender={tooltipRender} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} crosshair={{ enable: true, snapToData: true }} legendSettings={{ visible: true, position: 'Bottom', padding: 13 }} load={(args) => chartLoad(args, "Bootstrap5", "Bootstrap5Dark")}>
                                    <Inject services={[SplineSeries, Tooltip, Legend, Category, Crosshair]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis1" name="Recurring Revenue" type="Spline" width={3} fill="#0EAB44"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis2" name="One - Time Revenue" type="Spline" width={3} fill="#CED4DA"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}