'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, StackingBarSeries } from "@syncfusion/ej2-react-charts";

export default function BarChart8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);

    const chartData: object[] = [
        { Month: "Jan", AppleSales: 10, OrangeSales: 10, Wastage: 5 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { size: '0px' }
    };

    const primaryYAxis: object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { size: '0px' }
    };

    const getBorder = (borderColor: string): object => {
        return {
            color: isDarkMode ? borderColor : '#FFFFFF',
            width: 4
        };
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-8' && blockData.theme) {
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
        if (chartRef.current) {
            chartRef.current.refresh();
        }
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={'barchart-8-tw'} className="h-screen flex justify-center py-4 sm:py-6">
                            <div className="w-full" style={{ maxWidth: '476px' }}>
                                <div className="flex justify-between items-center mb-1 px-4 sm:px-6">
                                    <h1 className="text-base font-medium text-gray-900 dark:text-white mb-2">Stock Report</h1>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 px-4 sm:px-6">Assets you have in your account</p>
                                <div className="flex items-center justify-between mt-4 px-4 sm:px-6">
                                    <h1 className="text-gray-900 dark:text-white text-lg font-semibold">$178,975</h1>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 text-green-700 dark:text-green-500 text-xs">
                                            <span className="e-icons e-arrow-up"></span>6.75%
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">This Month</p>
                                    </div>
                                </div>
                                <div className="pr-2">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="100px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[StackingBarSeries, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingBar100" xName="Month" yName="AppleSales" fill="#267DDA" width={2} columnWidth={1} border={getBorder('#000000')}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingBar100" xName="Month" yName="OrangeSales" fill="#01A8B5" width={2} columnWidth={1} border={getBorder('#000000')}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingBar100" xName="Month" yName="Wastage" fill="#FFB900" width={2} columnWidth={1} border={getBorder('#000000')}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                                <div className="flex flex-col gap-4 px-4 sm:px-6">
                                    <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#267dda' }}></span>
                                            <p className="text-sm">Money Market</p>
                                        </div>
                                        <div className="flex items-center gap-7">
                                            <p className="text-sm font-medium">$71,590</p>
                                            <span className="e-badge e-badge-primary">40%</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#01a8b5' }}></span>
                                            <p className="text-sm">Stocks</p>
                                        </div>
                                        <div className="flex items-center gap-7">
                                            <p className="text-sm font-medium">$50,113</p>
                                            <span className="e-badge e-badge-info">40%</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ffb900' }}></span>
                                            <p className="text-sm">Bonds</p>
                                        </div>
                                        <div className="flex items-center gap-7">
                                            <p className="text-sm font-medium">$57,272</p>
                                            <span className="e-badge e-badge-warning">40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'barchart-8-bs'} className="vh-100 d-flex justify-content-center py-3 py-sm-4">
                            <div className="w-100" style={{ maxWidth: '476px' }}>
                                <div className="d-flex justify-content-between align-items-center mb-1 px-4 px-sm-6">
                                    <h1 className="fw-medium fs-6 text-body mb-0">Stock Report</h1>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <p className="small text-body-secondary mb-0 px-4 px-sm-6">Assets you have in your account</p>
                                <div className="d-flex justify-content-between align-items-center mt-3 px-4 px-sm-6">
                                    <h1 className="text-body fs-5 fw-semibold mb-0">$178,975</h1>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-1 text-success small">
                                            <span className="e-icons e-arrow-up"></span>6.75%
                                        </div>
                                        <p className="small text-body-secondary mb-0">This Month</p>
                                    </div>
                                </div>
                                <div className="pe-2">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="100px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[StackingBarSeries, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingBar100" xName="Month" yName="AppleSales" fill="#006EEF" width={2} columnWidth={1} border={getBorder('#212529')}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingBar100" xName="Month" yName="OrangeSales" fill="#0EAB44" width={2} columnWidth={1} border={getBorder('#212529')}></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} type="StackingBar100" xName="Month" yName="Wastage" fill="#FDDA02" width={2} columnWidth={1} border={getBorder('#212529')}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                                <div className="d-flex flex-column gap-2 px-4 px-sm-6">
                                    <div className="d-flex justify-content-between align-items-center text-body-secondary">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#006eef' }}></span>
                                            <p className="small mb-0">Money Market</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="small mb-0 fw-medium">$71,590</p>
                                            <span className="e-badge e-badge-primary">40%</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center text-body-secondary">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#0eab44' }}></span>
                                            <p className="small mb-0">Stocks</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="small mb-0 fw-medium">$50,113</p>
                                            <span className="e-badge e-badge-success">40%</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center text-body-secondary">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#fdda02' }}></span>
                                            <p className="small mb-0">Bonds</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="small mb-0 fw-medium">$57,272</p>
                                            <span className="e-badge e-badge-warning">40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
