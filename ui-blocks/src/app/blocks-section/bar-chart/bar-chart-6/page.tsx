'use client';

import { useEffect, useRef, useState } from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Legend, Category } from "@syncfusion/ej2-react-charts";

export default function BarChart6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const ticketDropdownRef = useRef<DropDownButtonComponent | null>(null);
    const dateRangePickerRef = useRef<DateRangePickerComponent | null>(null);

    const chartData: object[] = [
        { date: "Dec 1", xAxis: 27, yAxis: 15 },
        { date: "Dec 2", xAxis: 20, yAxis: 9 },
        { date: "Dec 3", xAxis: 31, yAxis: 17 },
        { date: "Dec 4", xAxis: 13, yAxis: 8 },
        { date: "Dec 5", xAxis: 18, yAxis: 12 },
        { date: "Dec 6", xAxis: 8, yAxis: 5 },
        { date: "Dec 7", xAxis: 19, yAxis: 19 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        labelStyle: { fontWeight: '500' },
        labelRotation: labelRotation,
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    };

    const primaryYAxis: object = {
        maximum: 40,
        interval: 10,
        labelStyle: { fontWeight: '500' },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -45 : 0;
        setLabelRotation(newRotation);
        if (ticketDropdownRef.current?.element?.classList.contains("e-active")) {
            ticketDropdownRef.current.toggle();
        }
        dateRangePickerRef.current?.refresh();
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-6' && blockData.theme) {
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
                        <div key={"barchart-6-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '790px' }}>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                                    <h1 className="text-base font-medium text-gray-900 dark:text-white">Ticket Activity Overview</h1>
                                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                                        <div className="w-64">
                                            <DateRangePickerComponent ref={dateRangePickerRef} cssClass="shadow-none border-none" placeholder="01/12/2024 - 07/12/2024"></DateRangePickerComponent>
                                        </div>
                                        <DropDownButtonComponent ref={ticketDropdownRef} className="e-outline" content="All Tickets" items={[{ text: 'All tickets' }, { text: 'Draft' }, { text: 'Processed' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: true }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[ColumnSeries, Category, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="Column" xName="date" yName="xAxis" fill="#9CA3AF" name="Draft Tickets" width={2} legendShape="Rectangle" columnSpacing={0.2}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="Column" xName="date" yName="yAxis" fill="#267DDA" name="Tickets Processed" width={2} legendShape="Rectangle" columnSpacing={0.2}></SeriesDirective>
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
                        <div key={"barchart-6-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '790px' }}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                                    <h1 className="fs-6 fw-medium text-body mb-0">Ticket Activity Overview</h1>
                                    <div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
                                        <div style={{width: '244px'}}>
                                            <DateRangePickerComponent ref={dateRangePickerRef} cssClass="shadow-none border-none" placeholder="01/12/2024 - 07/12/2024"></DateRangePickerComponent>
                                        </div>
                                        <DropDownButtonComponent ref={ticketDropdownRef} className="e-outline" content="All Tickets" items={[{ text: 'All tickets' }, { text: 'Draft' }, { text: 'Processed' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: true }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[ColumnSeries, Category, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="Column" xName="date" yName="xAxis" fill="#9CA3AF" name="Draft Tickets" width={2} legendShape="Rectangle" columnSpacing={0.2}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="Column" xName="date" yName="yAxis" fill="#006EEF" name="Tickets Processed" width={2} legendShape="Rectangle" columnSpacing={0.2}></SeriesDirective>
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
