'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Category, Crosshair, Legend, Tooltip } from "@syncfusion/ej2-react-charts";

export default function LineChart4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);

    const chartData: object[] = [
        { month: 'Jan', xAxis: 600, yAxis: 550 },
        { month: 'Feb', xAxis: 720, yAxis: 690 },
        { month: 'Mar', xAxis: 670, yAxis: 710 },
        { month: 'Apr', xAxis: 780, yAxis: 740 },
        { month: 'May', xAxis: 610, yAxis: 700 },
        { month: 'Jun', xAxis: 800, yAxis: 770 },
        { month: 'Jul', xAxis: 850, yAxis: 800 },
        { month: 'Aug', xAxis: 770, yAxis: 740 },
        { month: 'Sep', xAxis: 680, yAxis: 690 },
        { month: 'Oct', xAxis: 740, yAxis: 720 },
        { month: 'Nov', xAxis: 810, yAxis: 780 },
        { month: 'Dec', xAxis: 790, yAxis: 760 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelIntersectAction: 'None',
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
        height: '40px'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
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
                        <div key={"linechart-4-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '665px' }}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-base font-semibold text-gray-900 dark:text-white">Transaction Activity</h2>
                                    <div className="flex gap-3">
                                        <div className="w-32 hidden sm:block">
                                            <DatePickerComponent cssClass="shadow-none border-none" placeholder="Select Date"></DatePickerComponent>
                                        </div>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="w-32 block sm:hidden">
                                    <DatePickerComponent cssClass="shadow-none border-none" placeholder="Select Date"></DatePickerComponent>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings} crosshair={crosshair} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[SplineSeries, Tooltip, Category, Legend, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="xAxis" name="Total Transaction" type="Spline" width={3} fill="#fbbf24" legendShape="Rectangle"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="yAxis" name="Success Transaction" type="Spline" width={3} fill="#84cc16" legendShape="Rectangle"></SeriesDirective>
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
                        <div key={"linechart-4-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '665px' }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="h6 fw-semibold text-body">Transaction Activity</h2>
                                    <div className="d-flex gap-3">
                                        <div className="d-none d-sm-block" style={{width: '128px'}}>
                                            <DatePickerComponent cssClass="shadow-none border-none" placeholder="Select Date"></DatePickerComponent>
                                        </div>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="d-block d-sm-none" style={{ width: '128px' }}>
                                    <DatePickerComponent cssClass="shadow-none border-none" placeholder="Select Date"></DatePickerComponent>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings} crosshair={crosshair} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[SplineSeries, Tooltip, Category, Legend, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="xAxis" name="Total Transaction" type="Spline" width={3} fill="#F42929" legendShape="Rectangle"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="yAxis" name="Success Transaction" type="Spline" width={3} fill="#0EAB44" legendShape="Rectangle"></SeriesDirective>
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
