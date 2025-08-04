'use client';

import { useEffect, useState, useRef } from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Tooltip, Legend, Category } from "@syncfusion/ej2-react-charts";

export default function LineChart11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any[] = [
        { xAxis: "Sun", yAxis1: 14, yAxis2: 9, yAxis3: 5 },
        { xAxis: "Mon", yAxis1: 23, yAxis2: 18, yAxis3: 14 },
        { xAxis: "Tue", yAxis1: 31, yAxis2: 27, yAxis3: 22 },
        { xAxis: "Wed", yAxis1: 27, yAxis2: 25, yAxis3: 21 },
        { xAxis: "Thu", yAxis1: 27, yAxis2: 24, yAxis3: 20 },
        { xAxis: "Fri", yAxis1: 26, yAxis2: 22, yAxis3: 16 },
        { xAxis: "Sat", yAxis1: 17, yAxis2: 15, yAxis3: 12 }
    ];

    const primaryXAxis: object = {
        valueType: "Category",
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: {fontWeight: "500"}
    };

    const primaryYAxis: object = {
        labelFormat: "{value}°C",
        minimum: 0,
        maximum: 40,
        interval: 5,
        lineStyle: { width: 0 },
        labelStyle: {fontWeight: "500"}
    };

    const tooltip: object = {
        enable: true,
        enableMarker: false,
        header: "",
        format: "Dec 10, 18:21 PM<br/>Temp: ${point.y}"
    };

    const legendSettings: object = {
        visible: true,
        padding: 15,
        shapeHeight: 10,
        shapeWidth: 10,
        position: "Bottom",
        alignment: "Center"
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
                if (blockData.name === 'line-chart-11' && blockData.theme) {
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
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={"linechart-11-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{maxWidth: "700px"}}>
                                <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mb-6">
                                    <h2 className="text-gray-900 dark:text-white font-medium">NC Weather Report - 2024</h2>
                                    <div className="e-btn-group hidden sm:block">
                                        <input type="radio" id="day" name="align" value="D" />
                                        <label className="e-btn" htmlFor="day">D</label>
                                        <input type="radio" id="week" name="align" value="W" defaultChecked />
                                        <label className="e-btn" htmlFor="week">W</label>
                                        <input type="radio" id="month" name="align" value="M" />
                                        <label className="e-btn" htmlFor="month">M</label>
                                        <input type="radio" id="year" name="align" value="Y" />
                                        <label className="e-btn" htmlFor="year">Y</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                    <DropDownButtonComponent ref={metricDropdownRef} className="e-outline block sm:hidden" content="Week" items={[{ text: "Day" }, { text: "Week" }, { text: "Month" }, { text: "Year" }, { text: "Custom" }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="380px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings} load={(args) => chartLoad(args, "Tailwind3", "Tailwind3Dark")}>
                                        <Inject services={[SplineSeries, Tooltip, Legend, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis1" name="Max Temp" type="Spline" width={3} fill={isDarkMode ? "#9CA3AF" : "#1F2937"}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis2" name="Avg Temp" type="Spline" width={3} fill="#01A8B5"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis3" name="Min Temp" type="Spline" width={3} fill="#267DDA"></SeriesDirective>
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
                        <div key={"linechart-11-bs"} className="vh-100 d-flex justify-content-center align-items-start p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: "700px"}}>
                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-center mb-4">
                                    <h2 className="fs-6 fw-medium text-body mb-0">NC Weather Report - 2024</h2>
                                    <div className="e-btn-group">
                                        <input type="radio" className="btn-check" id="day" name="align" value="D" />
                                        <label className="e-btn" htmlFor="day">D</label>
                                        <input type="radio" className="btn-check" id="week" name="align" value="W" defaultChecked />
                                        <label className="e-btn" htmlFor="week">W</label>
                                        <input type="radio" className="btn-check" id="month" name="align" value="M" />
                                        <label className="e-btn" htmlFor="month">M</label>
                                        <input type="radio" className="btn-check" id="year" name="align" value="Y" />
                                        <label className="e-btn" htmlFor="year">Y</label>
                                        <input type="radio" className="btn-check" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                    <DropDownButtonComponent ref={metricDropdownRef} className="e-outline d-block d-sm-none" content="Week" items={[{ text: "Day" }, { text: "Week" }, { text: "Month" }, { text: "Year" }, { text: "Custom" }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="380px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings} load={(args) => chartLoad(args, "Bootstrap5", "Bootstrap5Dark")}>
                                        <Inject services={[SplineSeries, Tooltip, Legend, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis1" name="Max Temp" type="Spline" width={3} fill={isDarkMode ? "#ADB5BD" : "#343A40"}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis2" name="Avg Temp" type="Spline" width={3} fill="#00EFA7"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis3" name="Min Temp" type="Spline" width={3} fill="#3A95FF"></SeriesDirective>
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