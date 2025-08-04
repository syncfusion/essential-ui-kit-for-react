'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationLegend } from "@syncfusion/ej2-react-charts";

export default function DistributionChart4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<AccumulationChartComponent | null>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const [dataLabel, setDataLabel] = useState({
        visible: true,
        name: 'text',
        position: 'Outside',
        connectorStyle: {
            length: '20px',
            color: '#9CA3AF',
        },
    });

    const [tooltip, setTooltip] = useState({
        enable: false,
        enableMarker: false,
    });

    const chartData: any[] = [
        { xAxis: "Chrome", yAxis: 67.48, fill: "url(#DiagonalLine)", text: "Chrome (67.48%)" },
        { xAxis: "Safari", yAxis: 18.2, fill: "url(#Grid)", text: "Safari (18.2%)" },
        { xAxis: "Edge", yAxis: 4.84, fill: "url(#VerticalStripe)", text: "Edge (4.84%)" },
        { xAxis: "Firefox", yAxis: 2.6, fill: "url(#VerticalDash)", text: "Firefox (2.6%)" },
        { xAxis: "Opera", yAxis: 2, fill: "url(#HorizontalStripe)", text: "Opera (2%)" },
        { xAxis: "Others", yAxis: 4.88, fill: "url(#Dots)", text: "Others (4.88%)" }
    ];

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        if (metricDropdownRef.current?.element?.classList.contains("e-active")) {
            metricDropdownRef.current.toggle();
        }
        setDataLabel({ ...dataLabel, visible: window.innerWidth > 440 })
        setTooltip({ ...tooltip, enable: window.innerWidth < 440 })
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'distribution-chart-4' && blockData.theme) {
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
                        <div key={"distributionchart-4-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: "530px" }}>
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                    <p className="text-base font-semibold text-gray-900 dark:text-white">Browser Market Share Overview</p>
                                    <div className="flex gap-3">
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                        <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content="2024" items={[{ text: "2024" }, { text: "2023" }, { text: "2022" }, { text: "2021" }, { text: "2020" }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-2 mx-auto">
                                    <AccumulationChartComponent ref={chartRef} width="100%" height="360px" enableSmartLabels={true} enableBorderOnMouseMove={false} tooltip={tooltip} legendSettings={{ visible: false }} load={(args) => chartLoad(args, "Tailwind3", "Tailwind3Dark")}>
                                        <Inject services={[AccumulationDataLabel, AccumulationTooltip, AccumulationLegend, PieSeries]} />
                                        <AccumulationSeriesCollectionDirective>
                                            <AccumulationSeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis" type="Pie" radius="85%" dataLabel={dataLabel} border={{ width: 0 }} pointColorMapping="fill"></AccumulationSeriesDirective>
                                        </AccumulationSeriesCollectionDirective>
                                    </AccumulationChartComponent>
                                </div>
                            </div>
                            <svg width="0" height="0">
                                <defs>
                                    <pattern id="DiagonalLine" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                                        <rect width="1" height="4" fill="#01A8B5" />
                                    </pattern>
                                    <pattern id="Grid" patternUnits="userSpaceOnUse" width="5" height="5">
                                        <path d="M0 0 L0 5 M0 0 L5 0" stroke="#5A61F6" strokeWidth="1" />
                                    </pattern>
                                    <pattern id="VerticalStripe" patternUnits="userSpaceOnUse" width="4" height="4">
                                        <path d="M2,0 L2,4" stroke="#9CA3AF" strokeWidth="1" />
                                    </pattern>
                                    <pattern id="VerticalDash" patternUnits="userSpaceOnUse" width="6" height="6">
                                        <path d="M3,0 L3,6" stroke="#D83B01" strokeWidth="1" strokeDasharray="4,1" />
                                    </pattern>
                                    <pattern id="HorizontalStripe" patternUnits="userSpaceOnUse" width="4" height="4">
                                        <path d="M0,2 L4,2" stroke="#DE4383" strokeWidth="1" />
                                    </pattern>
                                    <pattern id="Dots" patternUnits="userSpaceOnUse" width="6" height="6">
                                        <circle cx="3" cy="3" r="1.5" fill="#FFB900" />
                                    </pattern>
                                </defs>
                            </svg>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"distributionchart-4-bs"} className="d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: "530px" }}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-3 mb-4">
                                    <p className="h6 fw-semibold text-body mb-0">Browser Market Share Overview</p>
                                    <div className="d-flex gap-3">
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                        <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content="2024" items={[{ text: "2024" }, { text: "2023" }, { text: "2022" }, { text: "2021" }, { text: "2020" }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-2 mx-auto">
                                    <AccumulationChartComponent ref={chartRef} width="100%" height="360px" enableSmartLabels={true} enableBorderOnMouseMove={false} tooltip={tooltip} legendSettings={{ visible: false }} load={(args) => chartLoad(args, "Bootstrap5", "Bootstrap5Dark")}>
                                        <Inject services={[AccumulationDataLabel, AccumulationTooltip, AccumulationLegend, PieSeries]} />
                                        <AccumulationSeriesCollectionDirective>
                                            <AccumulationSeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis" type="Pie" radius="85%" dataLabel={dataLabel} border={{ width: 0 }} pointColorMapping="fill"></AccumulationSeriesDirective>
                                        </AccumulationSeriesCollectionDirective>
                                    </AccumulationChartComponent>
                                </div>
                            </div>
                            <svg width="0" height="0">
                                <defs>
                                    <pattern id="DiagonalLine" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                                        <rect width="1" height="4" fill="#00EFA7" />
                                    </pattern>
                                    <pattern id="Grid" patternUnits="userSpaceOnUse" width="5" height="5">
                                        <path d="M0 0 L0 5 M0 0 L5 0" stroke="#006EEF" strokeWidth="1" />
                                    </pattern>
                                    <pattern id="VerticalStripe" patternUnits="userSpaceOnUse" width="4" height="4">
                                        <path d="M2,0 L2,4" stroke="#9CA3AF" strokeWidth="1" />
                                    </pattern>
                                    <pattern id="VerticalDash" patternUnits="userSpaceOnUse" width="6" height="6">
                                        <path d="M3,0 L3,6" stroke="#F42929" strokeWidth="1" strokeDasharray="4,1" />
                                    </pattern>
                                    <pattern id="HorizontalStripe" patternUnits="userSpaceOnUse" width="4" height="4">
                                        <path d="M0,2 L4,2" stroke="#EF00AC" strokeWidth="1" />
                                    </pattern>
                                    <pattern id="Dots" patternUnits="userSpaceOnUse" width="6" height="6">
                                        <circle cx="3" cy="3" r="1.5" fill="#FFB900" />
                                    </pattern>
                                </defs>
                            </svg>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}