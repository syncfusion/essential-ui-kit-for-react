'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Category, ChartComponent, ColumnSeries, Inject, Legend, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";

export default function BarChart4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [legendSettings, setLegendSettings] = useState<object>(
        {
            visible: true,
            position: 'Top',
            alignment: 'Far'
        }
    );
    const chartRef = useRef<ChartComponent | null>(null);

    const chartData: any[] = [
        { day: "01", x: 270, y: 150 },
        { day: "02", x: 200, y: 90 },
        { day: "03", x: 310, y: 170 },
        { day: "04", x: 130, y: 80 },
        { day: "05", x: 180, y: 120 },
        { day: "06", x: 80, y: 50 },
        { day: "07", x: 190, y: 190 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        maximum: 400,
        interval: 100,
        lineStyle: { width: 0, size: '0px' },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelStyle: { size: '0px' }
    };

    const tooltip: object = {
        enable: true,
        header: '',
        enableMarker: false
    };

    const tooltipRender = (args: any): void => {
        const index = (args.data as any).pointIndex;
        args.text = `Income : $${chartData[index].x}<br>Expense : $${chartData[index].y}`;
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const legendposition = window.innerWidth <= 640 ? { position: 'Bottom', alignment: 'Center' } : { position: 'Top', alignment: 'Far' }
        setLegendSettings({ ...legendSettings, ...legendposition })
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-4' && blockData.theme) {
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
                        <div key={'barchart-4-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '640px' }}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-base font-medium text-gray-900 dark:text-white mb-2">Revenue</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Sales from 01 - 06 Dec, 2024</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <div className="mt-6">
                                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">$1,278.45</h1>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <p className="text-green-700 dark:text-green-500">
                                                <span className="e-icons e-arrow-up mr-1"></span>2.1%
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">vs last week</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} tooltip={tooltip} tooltipRender={tooltipRender} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="day" yName="x" type="Column" fill="#267DDA" name="Income" width={2} legendShape="Circle" columnWidth={1} columnSpacing={0.2}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="day" yName="y" type="Column" fill="#01A8B5" name="Expense" width={2} legendShape="Circle" columnWidth={1} columnSpacing={0.2}></SeriesDirective>
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
                        <div key={'barchart-4-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '640px' }}>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h1 className="fs-6 fw-medium mb-2">Revenue</h1>
                                        <p className="small text-body-secondary mb-0">Sales from 01 - 06 Dec, 2024</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <div className="mt-4">
                                    <h1 className="fs-5 fw-bold mb-2">$1,278.45</h1>
                                    <div className="d-flex justify-content-between small">
                                        <div className="d-flex align-items-center gap-2">
                                            <p className="text-success d-flex align-items-center mb-0">
                                                <span className="e-icons e-arrow-up me-1"></span>2.1%
                                            </p>
                                            <p className="text-body-secondary mb-0">vs last week</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} tooltip={tooltip} tooltipRender={tooltipRender} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="day" yName="x" type="Column" fill="#006EEF" name="Income" width={2} legendShape="Circle" columnWidth={1} columnSpacing={0.2}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="day" yName="y" type="Column" fill="#EF6400" name="Expense" width={2} legendShape="Circle" columnWidth={1} columnSpacing={0.2}></SeriesDirective>
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
