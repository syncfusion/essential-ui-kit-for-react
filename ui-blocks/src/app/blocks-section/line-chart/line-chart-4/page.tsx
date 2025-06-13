'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Category, ChartComponent, Crosshair, Inject, Legend, SeriesCollectionDirective, SeriesDirective, SplineSeries, Tooltip } from "@syncfusion/ej2-react-charts";

export default function LineChart4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);

    const chartData: object[] = [
        { month: 'Jan', x: 600, y: 550 },
        { month: 'Feb', x: 720, y: 690 },
        { month: 'Mar', x: 670, y: 710 },
        { month: 'Apr', x: 780, y: 740 },
        { month: 'May', x: 610, y: 700 },
        { month: 'Jun', x: 800, y: 770 },
        { month: 'Jul', x: 850, y: 800 },
        { month: 'Aug', x: 770, y: 740 },
        { month: 'Sep', x: 680, y: 690 },
        { month: 'Oct', x: 740, y: 720 },
        { month: 'Nov', x: 810, y: 780 },
        { month: 'Dec', x: 790, y: 760 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        labelFormat: '{value}',
        minimum: 0,
        maximum: 1200,
        interval: 200,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        shared: true,
        format: '${series.name} : ${point.y}',
        header: '${point.x} 24, 2024',
        showHeaderLine: false
    };

    const crosshair: object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,5',
        verticalLineColor: '#D1D5DB'
    };

    const legendSettings: object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        shapeHeight: 10,
        shapeWidth: 10,
        padding: 15
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-4' && blockData.theme) {
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
                        <div key={'linechart-4-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '665px' }}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-base font-semibold text-gray-900 dark:text-white">Transaction Activity</h2>
                                    <div className="flex gap-3">
                                        <ButtonComponent cssClass="e-outline hidden sm:block" content="Select Date" iconCss="e-icons e-day" iconPosition="Right" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <ButtonComponent cssClass="e-outline sm:hidden my-3" content="Select Date" iconCss="e-icons e-day" iconPosition="Right" type="button"></ButtonComponent>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings} crosshair={crosshair} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[SplineSeries, Tooltip, Category, Legend, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="x" name="Total Transaction" type="Spline" width={3} fill="#fbbf24" legendShape="Rectangle"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="y" name="Success Transaction" type="Spline" width={3} fill="#84cc16" legendShape="Rectangle"></SeriesDirective>
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
                        <div key={'linechart-4-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '665px' }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="h6 fw-semibold text-body">Transaction Activity</h2>
                                    <div className="d-flex gap-3">
                                        <ButtonComponent cssClass="e-outline d-none d-sm-block" content="Select Date" iconCss="e-icons e-day" iconPosition="Right" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <ButtonComponent cssClass="e-outline d-sm-none my-3" content="Select Date" iconCss="e-icons e-day" iconPosition="Right" type="button"></ButtonComponent>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings} crosshair={crosshair} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[SplineSeries, Tooltip, Category, Legend, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="x" name="Total Transaction" type="Spline" width={3} fill="#F42929" legendShape="Rectangle"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="y" name="Success Transaction" type="Spline" width={3} fill="#0EAB44" legendShape="Rectangle"></SeriesDirective>
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
