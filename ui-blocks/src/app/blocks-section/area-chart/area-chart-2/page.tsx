'use client';

import { useEffect, useState, useRef } from "react";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, StepAreaSeries, Category, Tooltip } from "@syncfusion/ej2-react-charts";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default function AreaChart2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const desktopDropdownRef = useRef<DropDownButtonComponent | null>(null);
    const mobileDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const metricData: object = [
        { month: 'Jan', value: 1200 },
        { month: 'Feb', value: 3200 },
        { month: 'Mar', value: 8989 },
        { month: 'Apr', value: 7600 },
        { month: 'May', value: 5300 },
        { month: 'Jun', value: 3100 },
        { month: 'Jul', value: 2500 },
        { month: 'Aug', value: 4900 },
        { month: 'Sep', value: 6200 },
        { month: 'Oct', value: 2900 },
        { month: 'Nov', value: 2100 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        labelStyle: { fontWeight: '500' },
        majorGridLines: { width: 0 }
    };

    const primaryYAxis: object = {
        labelStyle: { size: '0' },
        lineStyle: { width: 0 },
        majorGridLines: { width: 1 },
        majorTickLines: { width: 0 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 }
    };

    const tooltip: object = {
        enable: true,
        header: '',
        enableMarker: false,
        format: '${point.y} +5.9%'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
        if (desktopDropdownRef.current?.element?.classList.contains("e-active")) {
            desktopDropdownRef.current.toggle();
        }
        if (mobileDropdownRef.current?.element?.classList.contains("e-active")) {
            mobileDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-2' && blockData.theme) {
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
                        <div key={"areachart-2-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full max-w-2xl">
                                <div className="flex gap-4 justify-between items-start">
                                    <div className="flex justify-between mb-2">
                                        <div className="flex flex-row">
                                            <span className="sf-icon-column-chart !text-2xl mr-2 dark:text-white"></span>
                                            <h1 className="text-base font-medium mt-1 dark:text-white text-gray-900">KPI Performance</h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <DropDownButtonComponent ref={desktopDropdownRef} className="e-outline hidden sm:block" content="Last 6 months" items={[{ text: 'This month' }, { text: 'Last month' }, { text: 'Last 3 months' }, { text: 'Last 6 months' }, { text: 'Last 9 months' }]} type="button"></DropDownButtonComponent>
                                        <DropDownButtonComponent ref={mobileDropdownRef} className="e-outline block sm:hidden" iconCss="e-icons e-day" items={[{ text: 'This month' }, { text: 'Last month' }, { text: 'Last 3 months' }, { text: 'Last 6 months' }, { text: 'Last 9 months' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="flex flex-col font-medium text-xl dark:text-white">
                                    90.75%
                                    <div className="flex flex-row text-sm font-normal mt-1">
                                        <span className="text-green-700 dark:text-green-500 mr-1 flex items-center"><span className="e-icons e-arrow-up"></span>20%</span>
                                        <span className="text-gray-500 dark:text-gray-400">vs last month</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <ChartComponent ref={chartRef} width="100%" height="300px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} margin={{ left: 0, right: 0, top: 0, bottom: 0 }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[StepAreaSeries, Category, Tooltip]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={metricData} type="StepArea" xName="month" yName="value" fill="#5A61F6" width={2} border={{ width: 2.5 }} noRisers={true} step={"Center"} opacity={isDarkMode ? 0.3 : 0.1}></SeriesDirective>
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
                        <div key={"areachart-2-bs"} className="vh-100 d-flex justify-content-center p-4 p-sm-5">
                            <div className="w-100" style={{ maxWidth: '680px' }}>
                                <div className="d-flex justify-content-between align-items-start gap-3">
                                    <div className="mb-2 d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-start">
                                            <span className="sf-icon-column-chart fs-5 me-2"></span>
                                            <h5 className="text-body fs-5">KPI Performance</h5>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <DropDownButtonComponent ref={desktopDropdownRef} className="e-outline d-none d-sm-block" content="Last 6 months" items={[{ text: 'This month' }, { text: 'Last month' }, { text: 'Last 3 months' }, { text: 'Last 6 months' }, { text: 'Last 9 months' }]} type="button"></DropDownButtonComponent>
                                        <DropDownButtonComponent ref={mobileDropdownRef} className="e-outline d-block d-sm-none" iconCss="e-icons e-day" items={[{ text: 'This month' }, { text: 'Last month' }, { text: 'Last 3 months' }, { text: 'Last 6 months' }, { text: 'Last 9 months' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="d-flex flex-column fw-semibold fs-5">
                                    90.75%
                                    <div className="d-flex flex-row fs-6 fw-normal mt-1 align-items-center">
                                        <span className="text-success me-1 small d-flex align-items-center"><span className="e-icons e-arrow-up"></span>20%</span>
                                        <span className="small">vs last month</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} width="100%" height="300px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} margin={{ left: 0, right: 0, top: 0, bottom: 0 }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[StepAreaSeries, Category, Tooltip]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={metricData} type="StepArea" xName="month" yName="value" fill="#006EEF" width={2} border={{ width: 2.5 }} noRisers={true} step={"Center"} opacity={isDarkMode ? 0.3 : 0.1}></SeriesDirective>
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
