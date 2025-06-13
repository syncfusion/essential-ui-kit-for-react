'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, SplineSeries, Tooltip } from "@syncfusion/ej2-react-charts";

export default function LineChart1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any[] = [
        { x: 'Jan', y: 400 },
        { x: 'Feb', y: 5000 },
        { x: 'Mar', y: 6000 },
        { x: 'Apr', y: 20000 },
        { x: 'May', y: 10000 },
        { x: 'Jun', y: 800 },
        { x: 'Jul', y: 8500 },
        { x: 'Aug', y: 10000 },
        { x: 'Sep', y: 8500 },
        { x: 'Oct', y: 10000 },
        { x: 'Nov', y: 500 },
        { x: 'Dec', y: 15000 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' },
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' },
        maximum: 25000,
        interval: 5000,
        minimum: 0
    };

    const tooltip: object = {
        enable: true,
        header: '',
        enableMarker: false,
        format: '${point.x} : ${point.y}'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-1' && blockData.theme) {
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
                        <div key={'linechart-1-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '1080px' }}>
                                <div className="flex justify-between flex-col sm:flex-row sm:items-start gap-4">
                                    <div>
                                        <h1 className="text-base font-medium text-gray-900 dark:text-white">Annual Revenue Overview ($)</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Data for the year 2024</p>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="360px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} useGroupingSeparator={true} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[SplineSeries, Tooltip, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="x" yName="y" type="Spline" width={3} fill="#267DDA" marker={{ visible: true, width: 8, height: 8, isFilled: true, border: { color: '#FFFFFF' } }}></SeriesDirective>
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
                        <div key={'linechart-1-bs'} className="vh-100 d-flex justify-content-center p-4 p-sm-5">
                            <div className="w-100" style={{ maxWidth: '1080px' }}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-start">
                                    <div>
                                        <h1 className="h6 fw-medium text-body">Annual Revenue Overview ($)</h1>
                                        <p className="text-body-secondary mt-2">Data for the year 2024</p>
                                    </div>
                                    <div className="d-flex justify-content-between gap-2">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="360px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} useGroupingSeparator={true} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[SplineSeries, Tooltip, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="x" yName="y" type="Spline" width={3} fill="#006EEF" marker={{ visible: true, width: 8, height: 8, isFilled: true, border: { color: '#FFFFFF' } }}></SeriesDirective>
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
