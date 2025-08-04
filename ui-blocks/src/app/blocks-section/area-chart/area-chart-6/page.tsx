'use client';

import { useEffect, useState, useRef } from "react";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Category, AxisModel, Tooltip } from "@syncfusion/ej2-react-charts";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default function AreaChart6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any[] = [
        { date: 'Feb 14', currentWeek: 14500, lastWeek: 15500 },
        { date: 'Feb 15', currentWeek: 16259, lastWeek: 14033 },
        { date: 'Feb 16', currentWeek: 16000, lastWeek: 16500 },
        { date: 'Feb 17', currentWeek: 19000, lastWeek: 17500 },
        { date: 'Feb 18', currentWeek: 17000, lastWeek: 16000 },
        { date: 'Feb 19', currentWeek: 18500, lastWeek: 17000 },
        { date: 'Feb 20', currentWeek: 19000, lastWeek: 16500 }
    ];

    const primaryXAxis: AxisModel = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: AxisModel = {
        minimum: 0,
        maximum: 20000,
        interval: 5000,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        enableMarker: false,
        shared: false,
        showNearestTooltip: true,
        header: '',
        showHeaderLine: false
    };

    const tooltipRender = (args: any): void => {
        if (args.text)
            args.text = `${args.series.name}: ${args.point.y.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}`;
    };

    const axisLabelRender = (args: any): void => {
        if (args.axis.name === 'primaryYAxis') {
            args.text = '$' + Number(args.text) / 1000 + 'K';
        }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
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
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-6' && blockData.theme) {
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
                        <div key={"areachart-6-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '666px' }}>
                                <h2 className="text-base font-medium text-gray-900 dark:text-white mb-2">Revenue Analysis</h2>
                                <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4 sm:gap-0 pb-5">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Analyze your revenue performance over the week</p>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline w-fit" iconCss="e-icons e-day" content="Current Week" items={[{ text: 'Today' }, { text: 'Yesterday' }, { text: 'Current Week' }, { text: 'Last Week' }, { text: 'Current Month' }, { text: 'Last Month' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={tooltip} legendSettings={{ visible: false }} axisLabelRender={axisLabelRender} tooltipRender={tooltipRender} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                    <Inject services={[SplineSeries, Category, Tooltip]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="date" yName="currentWeek" type="Spline" name="Current week" width={2} fill="#5A61F6"></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="date" yName="lastWeek" type="Spline" name="Last week" width={2} fill="#D83B01"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"areachart-6-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '666px' }}>
                                <h2 className="fw-medium fs-6 text-body mb-3 mb-sm-1">Revenue Analysis</h2>
                                <div className="d-flex justify-content-between align-items-start flex-column flex-sm-row gap-3 gap-sm-0 pb-4">
                                    <p className="text-secondary small mb-0">Analyze your revenue performance over the week</p>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline w-auto" iconCss="e-icons e-day" content="Current Week" items={[{ text: 'Today' }, { text: 'Yesterday' }, { text: 'Current Week' }, { text: 'Last Week' }, { text: 'Current Month' }, { text: 'Last Month' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={tooltip} legendSettings={{ visible: false }} axisLabelRender={axisLabelRender} tooltipRender={tooltipRender} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                    <Inject services={[SplineSeries, Category, Tooltip]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData} xName="date" yName="currentWeek" type="Spline" name="Current week" width={2} fill={isDarkMode ? '#3A95FF':'#006EEF'}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData} xName="date" yName="lastWeek" type="Spline" name="Last week" width={2} fill="#EF6400"></SeriesDirective>
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
