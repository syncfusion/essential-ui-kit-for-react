'use client';

import { useEffect, useRef, useState } from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Crosshair, Legend, Category, Tooltip } from "@syncfusion/ej2-react-charts";

export default function LineChart9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);
    const mobileDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any[] = [
        { day: '2', xAxis: 3.8, yAxis: 2.5 },
        { day: '4', xAxis: 3.8, yAxis: 2.2 },
        { day: '6', xAxis: 3.8, yAxis: 2.8 },
        { day: '8', xAxis: 3.8, yAxis: 3 },
        { day: '10', xAxis: 3.8, yAxis: 3.6 },
        { day: '12', xAxis: 3.8, yAxis: 4.1 },
        { day: '14', xAxis: 3.8, yAxis: 4 },
        { day: '16', xAxis: 3.8, yAxis: 4.2 },
        { day: '18', xAxis: 3.8, yAxis: 3.2 },
        { day: '20', xAxis: 3.8, yAxis: 4.4 },
        { day: '22', xAxis: 3.8, yAxis: 4.8 },
        { day: '24', xAxis: 3.8, yAxis: 5 },
        { day: '26', xAxis: 3.8, yAxis: 4.6 },
        { day: '28', xAxis: 3.8, yAxis: 4.9 },
        { day: '30', xAxis: 3.8, yAxis: 5.2 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        labelFormat: '${value}K',
        minimum: 0,
        maximum: 8,
        interval: 2,
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        shared: true,
        format: '${series.name} : ${point.y}',
        header: '',
        showHeaderLine: false
    };

    const crosshair: object = {
        enable: true,
        snapToData: true,
        lineType: 'Vertical',
        highlightCategory: true,
        verticalLineColor: '#01A8B5',
        opacity: 0.5
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
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
                if (blockData.name === 'line-chart-9' && blockData.theme) {
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
                        <div key={'linechart-9-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '650px' }}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-base text-gray-900 dark:text-white">Sales Performance</h2>
                                    <DropDownButtonComponent ref={mobileDropdownRef} cssClass="e-outline block sm:hidden" iconCss="e-icons e-day" items={[{ text: 'Today' }, { text: 'Yesterday' }, { text: 'This week' }, { text: 'Last week' }, { text: 'This month' }, { text: 'Last month' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="flex items-center gap-2 mt-5">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">+72.9%</p>
                                    <div className="flex items-center gap-1 text-green-700 dark:text-green-500 ml-1">
                                        <span className="e-icons e-arrow-up !text-sm"></span>
                                        <p className="text-xs">2.9%</p>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">past 7 days</p>
                                </div>
                                <div className="flex justify-between mt-2.5">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Better than last week</p>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline hidden sm:block" iconCss="e-icons e-day" content="Last month" items={[{ text: 'Today' }, { text: 'Yesterday' }, { text: 'This week' }, { text: 'Last week' }, { text: 'This month' }, { text: 'Last month' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={{ visible: true, position: 'Top', alignment: 'Near', height: '40px' }} crosshair={crosshair} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                    <Inject services={[LineSeries, Tooltip, Legend, Crosshair, Category]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="day" yName="xAxis" name="Projected Average" type="Line" width={1} dashArray="5,5" fill="#FFB900" legendShape="Rectangle"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="day" yName="yAxis" name="Sales Growth" type="Line" width={2} marker={{ visible: true, width: 8, height: 8, isFilled: true }} fill="#01A8B5" legendShape="Rectangle"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'linechart-9-bs'} className="vh-100 d-flex justify-content-center align-items-start p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '650px' }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="h6 text-body mb-0">Sales Performance</h2>
                                    <DropDownButtonComponent ref={mobileDropdownRef} cssClass="e-outline d-block d-sm-none" iconCss="e-icons e-day" items={[{ text: 'Today' }, { text: 'Yesterday' }, { text: 'This week' }, { text: 'Last week' }, { text: 'This month' }, { text: 'Last month' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="d-flex align-items-center gap-2 mt-4">
                                    <p className="fs-5 fw-semibold text-body mb-0">+72.9%</p>
                                    <div className="d-flex align-items-center gap-1 text-success ms-2">
                                        <span className="e-icons e-arrow-up small"></span>
                                        <p className="small mb-0">2.9%</p>
                                    </div>
                                    <p className="small text-body-secondary mb-0">past 7 days</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <p className="small text-body-secondary mb-0">Better than last week</p>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline d-none d-sm-block" iconCss="e-icons e-day" content="Last month" items={[{ text: 'Today' }, { text: 'Yesterday' }, { text: 'This week' }, { text: 'Last week' }, { text: 'This month' }, { text: 'Last month' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={{ visible: true, position: 'Top', alignment: 'Near', height: '40px' }} crosshair={crosshair} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                    <Inject services={[LineSeries, Tooltip, Legend, Crosshair, Category]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="day" yName="xAxis" name="Projected Average" type="Line" width={1} dashArray="5,5" fill="#FFB900" legendShape="Rectangle"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="day" yName="yAxis" name="Sales Growth" type="Line" width={2} marker={{ visible: true, width: 8, height: 8, isFilled: true }} fill="#00EFA7" legendShape="Rectangle"></SeriesDirective>
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
