'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from "@syncfusion/ej2-react-charts";

export default function AccumulationChart3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<AccumulationChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { id: 1, x: 'Product', y: 48 },
        { id: 2, x: 'Restaurant and Bars', y: 13 },
        { id: 3, x: 'Internet and Media', y: 12 },
        { id: 4, x: 'Pay for workspace', y: 27 }
    ];

    const getBorder = (borderColor: string): object => {
        return {
            color: isDarkMode ? borderColor : '#FFFFFF',
            width: 3
        };
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'accumulation-chart-3' && blockData.theme) {
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
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={'accumulationchart-3-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '530px' }}>
                                <div className="flex justify-between items-center sm:mb-2.5">
                                    <h2 className="text-base font-medium text-gray-900 dark:text-white">Stock Performance Overview</h2>
                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="e-btn-group">
                                        <input type="radio" id="week" name="align" value="Week" defaultChecked aria-label="week" role="button" />
                                        <label className="e-btn" htmlFor="week">Week</label>
                                        <input type="radio" id="month" name="align" value="Month" aria-label="month" role="button" />
                                        <label className="e-btn" htmlFor="month">Month</label>
                                        <input type="radio" id="year" name="align" value="Year" aria-label="year" role="button" />
                                        <label className="e-btn" htmlFor="year">Year</label>
                                        <input type="radio" id="custom" name="align" value="Custom" aria-label="custom" role="button" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline sm:hidden my-4" content="Week" items={[{ text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
                                    <div className="relative">
                                        <AccumulationChartComponent width="100%" height="250px" legendSettings={{ visible: false }} enableBorderOnMouseMove={false} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <AccumulationSeriesCollectionDirective>
                                                <AccumulationSeriesDirective dataSource={chartData} xName="x" yName="y" innerRadius="75%" radius="90%" palettes={["#5A61F6", "#DE4383", "#01A8B5", "#FFB900"]} border={getBorder('#000000')} borderRadius={14}></AccumulationSeriesDirective>
                                            </AccumulationSeriesCollectionDirective>
                                        </AccumulationChartComponent>
                                        <div className="flex flex-col text-center gap-1 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                            <p className="text-sm text-gray-700 dark:text-gray-300">Share Holder</p>
                                            <p className="text-lg text-gray-900 dark:text-white font-semibold">50%</p>
                                            <div className="flex justify-center items-center gap-1">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5A61F6' }}></span>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Promoter</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-600"><span>Previous Close</span><span className="font-medium">$17,112.00</span></div>
                                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-600"><span>%Change</span><span className="text-green-700 dark:text-green-500 font-medium">+26%</span></div>
                                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-600"><span>Market Cap</span><span className="font-medium">$28 M USD</span></div>
                                        <div className="flex justify-between py-2"><span>PE Ratio</span><span className="font-medium">14.28%</span></div>
                                        <div className="flex gap-2 mt-3">
                                            <ButtonComponent cssClass="e-outline w-full" content="Sell Stock" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-primary w-full" content="Buy Stock" type="button"></ButtonComponent>
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
                        <div key={'accumulationchart-3-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '530px' }}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h2 className="fs-6 fw-medium text-body mb-0">Stock Performance Overview</h2>
                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                </div>
                                <div className="d-none d-sm-block mb-3">
                                    <div className="e-btn-group">
                                        <input type="radio" id="week" name="align" value="Week" defaultChecked aria-label="week" role="button" />
                                        <label className="e-btn" htmlFor="week">Week</label>
                                        <input type="radio" id="month" name="align" value="Month" aria-label="month" role="button" />
                                        <label className="e-btn" htmlFor="month">Month</label>
                                        <input type="radio" id="year" name="align" value="Year" aria-label="year" role="button" />
                                        <label className="e-btn" htmlFor="year">Year</label>
                                        <input type="radio" id="custom" name="align" value="Custom" aria-label="custom" role="button" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline d-sm-none mb-3" content="Week" items={[{ text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                <div className="row g-sm-4">
                                    <div className="col-12 col-sm-6 position-relative">
                                        <AccumulationChartComponent width="100%" height="250px" legendSettings={{ visible: false }} enableBorderOnMouseMove={false} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <AccumulationSeriesCollectionDirective>
                                                <AccumulationSeriesDirective dataSource={chartData} xName="x" yName="y" innerRadius="75%" radius="90%" palettes={["#006EEF", "#EF00AC", "#00EFA7", "#FFB900"]} border={getBorder('#212529')} borderRadius={14}></AccumulationSeriesDirective>
                                            </AccumulationSeriesCollectionDirective>
                                        </AccumulationChartComponent>
                                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                                            <p className="text-body-secondary small mb-1">Share Holder</p>
                                            <p className="fw-semibold text-body fs-5 mb-1">50%</p>
                                            <div className="d-flex justify-content-center align-items-center gap-1">
                                                <span className="rounded-circle d-inline-block" style={{ width: '8px', height: '8px', backgroundColor: '#5A61F6' }}></span>
                                                <p className="text-body-secondary small mb-0">Promoter</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex flex-column justify-content-center text-body-secondary small">
                                        <div className="d-flex justify-content-between py-2 border-bottom"><span>Previous Close</span><span className="fw-medium">$17,112.00</span></div>
                                        <div className="d-flex justify-content-between py-2 border-bottom"><span>%Change</span><span className="text-success fw-medium">+26%</span></div>
                                        <div className="d-flex justify-content-between py-2 border-bottom"><span>Market Cap</span><span className="fw-medium">$28 M USD</span></div>
                                        <div className="d-flex justify-content-between py-2"><span>PE Ratio</span><span className="fw-medium">14.28%</span></div>
                                        <div className="d-flex gap-2 mt-3">
                                            <ButtonComponent cssClass="e-outline w-100" content="Sell Stock" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-primary w-100" content="Buy Stock" type="button"></ButtonComponent>
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
