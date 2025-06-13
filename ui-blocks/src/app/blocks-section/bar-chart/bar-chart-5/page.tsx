'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Category, ChartComponent, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries } from "@syncfusion/ej2-react-charts";

export default function BarChart5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { month: 'Jan', x: 1.5, y: -5 },
        { month: 'Feb', x: 2.5, y: 25 },
        { month: 'Mar', x: 3.5, y: 60 },
        { month: 'Apr', x: 2.3, y: 0 },
        { month: 'May', x: 2.5, y: 22 },
        { month: 'Jun', x: 2.9, y: 40 },
        { month: 'Jul', x: 2.4, y: 3 },
        { month: 'Aug', x: 3.2, y: 36 },
        { month: 'Sep', x: 2, y: 20 },
        { month: 'Oct', x: 3.7, y: 40 },
        { month: 'Nov', x: 2.85, y: 0 },
        { month: 'Dec', x: 1.3, y: 6 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '${value}M',
        labelStyle: { fontWeight: '500' },
        minimum: 0,
        maximum: 4,
        interval: 1
    };

    const secondaryYAxis: object = {
        name: 'secondaryAxis',
        opposedPosition: true,
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        minimum: -20,
        maximum: 80,
        interval: 20
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
                if (blockData.name === 'bar-chart-5' && blockData.theme) {
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
                        <div key={'barchart-5-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '1110px' }}>
                                <div className="flex justify-between flex-col sm:flex-row gap-5">
                                    <h1 className="text-base font-medium text-gray-900 dark:text-white">Total Sales Variance by FiscalMonth and District Manager</h1>
                                    <div className="flex justify-between sm:justify-start gap-3">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline hidden lg:block" content="Download Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline lg:hidden" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="350px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} axes={[secondaryYAxis]} legendSettings={{ visible: true, position: 'Top', alignment: 'Near', padding: 15, }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[StackingColumnSeries, LineSeries, Category, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingColumn" xName="month" yName="x" legendShape="Circle" name="This Year Sales" fill="#01A8B5" columnWidth={0.6}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="Line" xName="month" yName="y" yAxisName="secondaryAxis" legendShape="Circle" name="Total Sales Var%" width={2} fill={isDarkMode ? '#9CA3AF' : '#1F2937'}></SeriesDirective>
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
                        <div key={'barchart-5-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '1110px' }}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 pb-sm-1">
                                    <h1 className="h6 text-body fw-medium mb-1 mb-sm-0">Total Sales Variance by FiscalMonth and District Manager</h1>
                                    <div className="d-flex justify-content-between justify-content-sm-start gap-2">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-none d-lg-block" content="Download Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-lg-none" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-3 mt-sm-2">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="350px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} axes={[secondaryYAxis]} legendSettings={{ visible: true, position: 'Top', alignment: 'Near', padding: 15, }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[StackingColumnSeries, LineSeries, Category, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingColumn" xName="month" yName="x" legendShape="Circle" name="This Year Sales" fill="#006EEF" columnWidth={0.6}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="Line" xName="month" yName="y" yAxisName="secondaryAxis" legendShape="Circle" name="Total Sales Var%" width={2} fill={isDarkMode ? '#ADB5BD' : '#343A40'}></SeriesDirective>
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
