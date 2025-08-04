'use client';

import { useEffect, useState, useRef } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, DateTime, Tooltip, Legend, Crosshair, AnnotationsDirective, AnnotationDirective, ChartAnnotation } from "@syncfusion/ej2-react-charts";

export default function LineChart6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [chartData, setchartData] = useState<any[]>([]);
    const chartRef = useRef<ChartComponent>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const primaryXAxis: object = {
        valueType: "DateTime",
        labelFormat: "MMM dd, yyyy",
        labelStyle: {size: "0"},
        crosshairTooltip: { enable: true }
    };

    const primaryYAxis: object = {
        minimum: 0,
        maximum: 30000,
        interval: 5000,
        labelStyle: {size: "0"}
    };

    const tooltipSettings: object = {
        enable: true,
        shared: true,
        enableMarker: true,
        format: "${series.name}: $${point.y}"
    };

    const legendSettings: object = {
        visible: true,
        position: "Top",
        alignment: "Near"
    };

    const crosshairSettings: object = {
        enable: true,
        lineType: "Vertical",
        dashArray: "2,3"
    };

    const annotationContent = (`
        <div>
            <div style="display:flex;flex-direction:column;align-items:center;margin: 2px;">
                <div style="background: repeating-linear-gradient(to bottom, ${isDarkMode ? "#6B7280" : "#9CA3AF"} 0, ${isDarkMode ? "#6B7280" : "#9CA3AF"} 4px,transparent 4px, transparent 8px); width: 2px; height: 325px;;"></div>
                <div style="width:10px; height:10px; background-color:${isDarkMode ? "#9CA3AF" : "#1F2937"}; border-radius:50%;"></div>
                <div style="font-size:12px; font-weight:500; color:${isDarkMode ? "#FFFFFF" : "#111827"}; text-align:center;">Dec 6, 2024</div>
            </div>
        </div>`);

    const generateSplineData = () => {
        const data: any[] = [];
        let i = 0;
        while (true) {
            const xDate = new Date(2023, 11, 20);
            xDate.setDate(xDate.getDate() + i * 10);
            if (xDate > new Date(2025, 2, 20)) break;
            data.push({
                xAxis: xDate,
                yAxis1: Math.round(10000 + Math.random() * 10000 + Math.sin(i) * 3000),
                yAxis2: Math.round(5000 + Math.random() * 5000 + Math.cos(i) * 2000)
            });
            i++;
        }
        return data;
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
                if (blockData.name === 'line-chart-6' && blockData.theme) {
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
        setchartData(generateSplineData());
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
                        <div key={"linechart-6-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{maxWidth: "1120px"}}>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-md font-semibold text-gray-900 dark:text-white">Consolidated Budget</h2>
                                    <div className="flex gap-2">
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                        <div className="e-btn-group hidden sm:block">
                                            <input type="radio" id="day" name="align" value="D" />
                                            <label className="e-btn" htmlFor="day">D</label>
                                            <input type="radio" id="week" name="align" value="W" />
                                            <label className="e-btn" htmlFor="week">W</label>
                                            <input type="radio" id="month" name="align" value="M" />
                                            <label className="e-btn" htmlFor="month">M</label>
                                            <input type="radio" id="year" name="align" value="Y" defaultChecked />
                                            <label className="e-btn" htmlFor="year">Y</label>
                                            <input type="radio" id="custom" name="align" value="Custom" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={metricDropdownRef} className="e-outline block sm:hidden" content="Year" items={[{text: "day"}, {text: "Week"}, {text: "Month"}, {text: "Year"}, {text: "Custom"}]} type="button"></DropDownButtonComponent>
                                <ChartComponent ref={chartRef} chartArea={{border: {width: 0}}} width="100%" height="400px" tooltip={tooltipSettings} legendSettings={legendSettings} crosshair={crosshairSettings} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} margin={{ left: 0, right: 0, top: 0, bottom: 24 }} load={(args) => chartLoad(args, "Tailwind3", "Tailwind3Dark")}>
                                    <Inject services={[SplineSeries, DateTime, Tooltip, Legend, Crosshair, ChartAnnotation]} />
                                    <AnnotationsDirective>
                                        <AnnotationDirective coordinateUnits="Pixel" region="Chart" x={"78%"} y={"56%"} content={annotationContent}/>
                                    </AnnotationsDirective>
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis1" name="Revenues" type="Spline" width={2} fill="#267DDA"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis2" name="Expenditures" type="Spline" width={2} fill="#DE4383"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"linechart-6-bs"} className="vh-100 d-flex justify-content-center align-items-start p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: "1120px"}}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="h6 fw-medium text-body mb-0">Consolidated Budget</h2>
                                    <div className="d-flex gap-3">
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                        <div className="e-btn-group d-none d-sm-block">
                                            <input type="radio" className="btn-check" id="day" name="align" value="D" />
                                            <label className="e-btn" htmlFor="day">D</label>
                                            <input type="radio" className="btn-check" id="week" name="align" value="W" />
                                            <label className="e-btn" htmlFor="week">W</label>
                                            <input type="radio" className="btn-check" id="month" name="align" value="M" />
                                            <label className="e-btn" htmlFor="month">M</label>
                                            <input type="radio" className="btn-check" id="year" name="align" value="Y" defaultChecked />
                                            <label className="e-btn" htmlFor="year">Y</label>
                                            <input type="radio" className="btn-check" id="custom" name="align" value="Custom" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={metricDropdownRef} className="e-outline d-inline-block d-sm-none" content="Year" items={[{text: "day"}, {text: "Week"}, {text: "Month"}, {text: "Year"}, {text: "Custom"}]} type="button"></DropDownButtonComponent>
                                <ChartComponent ref={chartRef} chartArea={{border: {width: 0}}} width="100%" height="400px" tooltip={tooltipSettings} legendSettings={legendSettings} crosshair={crosshairSettings} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} margin={{ left: 0, right: 0, top: 0, bottom: 24 }} load={(args) => chartLoad(args, "Bootstrap5", "Bootstrap5Dark")}>
                                    <Inject services={[SplineSeries, DateTime, Tooltip, Legend, Crosshair, ChartAnnotation]} />
                                    <AnnotationsDirective>
                                        <AnnotationDirective coordinateUnits="Pixel" region="Chart" x={"78%"} y={"56%"} content={annotationContent}/>
                                    </AnnotationsDirective> 
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis1" name="Revenues" type="Spline" width={2} fill="#006EEF"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis2" name="Expenditures" type="Spline" width={2} fill="#EF00AC"></SeriesDirective>
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