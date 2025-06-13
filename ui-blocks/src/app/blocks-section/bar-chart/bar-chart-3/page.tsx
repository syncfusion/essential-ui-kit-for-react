'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Category, ChartComponent, Crosshair, Inject, RangeColumnSeries, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-react-charts";

export default function BarChart3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { Month: "Jan", LowTemp: 3.1, HighTemp: 10.8 },
        { Month: "Feb", LowTemp: 5.7, HighTemp: 14.4 },
        { Month: "Mar", LowTemp: 8.4, HighTemp: 16.9 },
        { Month: "Apr", LowTemp: 9.6, HighTemp: 18.2 },
        { Month: "May", LowTemp: 8.5, HighTemp: 16.1 },
        { Month: "Jun", LowTemp: 6.0, HighTemp: 12.5 },
        { Month: "Jul", LowTemp: 1.5, HighTemp: 6.9 },
        { Month: "Aug", LowTemp: 7.5, HighTemp: 3.9 },
        { Month: "Sep", LowTemp: 11.5, HighTemp: 6.9 },
        { Month: "Oct", LowTemp: 19.5, HighTemp: 12.9 },
        { Month: "Nov", LowTemp: 14.5, HighTemp: 6.9 },
        { Month: "Dec", LowTemp: 20.5, HighTemp: 15.9 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        minimum: 0,
        maximum: 30,
        interval: 10,
        edgeLabelPlacement: 'Shift',
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' },
        majorTickLines: { width: 0 }
    };

    const crosshair: object = {
        enable: true,
        lineType: 'Vertical',
        highlightCategory: true,
        verticalLineColor: '#267DDA',
        opacity: 0.5
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
        if (metricDropdownRef.current?.element?.classList.contains("e-active")) {
            metricDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-3' && blockData.theme) {
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
                        <div key={'barchart-3-tw'} className="h-screen flex justify-center items-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '730px' }}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-base font-medium text-gray-900 dark:text-white mb-2">Weather History</h1>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Location: <span className="font-medium">Charlotte, North Carolina</span></p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="Download Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                </div>
                                <div className="mt-5 sm:mt-4 text-gray-900 dark:text-white">
                                    <p className="text-xs hidden sm:block mb-1.5">December</p>
                                    <div className="flex justify-between flex-col-reverse gap-6 sm:flex-row sm:items-center">
                                        <div>
                                            <p className="text-xs block sm:hidden mb-2">December</p>
                                            <div className="flex gap-3 items-end">
                                                <h1 className="text-xl font-semibold">13 / 1</h1>
                                                <p className="text-xs mb-1">°C | F</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="e-btn-group hidden sm:block">
                                                <input type="radio" id="day" name="align" value="D" aria-label="day" role="button" />
                                                <label className="e-btn" htmlFor="day">D</label>
                                                <input type="radio" id="week" name="align" value="W" aria-label="week" role="button" />
                                                <label className="e-btn" htmlFor="week">W</label>
                                                <input type="radio" id="month" name="align" value="M" aria-label="month" role="button" />
                                                <label className="e-btn" htmlFor="month">M</label>
                                                <input type="radio" id="year" name="align" value="Y" defaultChecked aria-label="year" role="button" />
                                                <label className="e-btn" htmlFor="year">Y</label>
                                                <input type="radio" id="custom" name="align" value="Custom" aria-label="custom" role="button" />
                                                <label className="e-btn" htmlFor="custom">Custom</label>
                                            </div>
                                            <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline sm:hidden" content="Year" items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                            <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content="Temperature" items={[{ text: 'Temperature' }, { text: 'Wind speed' }, { text: 'Air pressure' }, { text: 'Snowfall' }, { text: 'Visibility' }]} type="button"></DropDownButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-col sm:flex-row justify-start sm:items-center text-gray-500 dark:text-gray-400 mt-5">
                                    <p className="text-xs">Record temps:</p>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <p className="text-xs font-medium">26° / -13°C</p>
                                        <div className="border-l h-4 border-gray-500 dark:border-gray-400"></div>
                                        <p className="text-xs">Avg rainfall: <span className="font-medium">9.9 cm</span></p>
                                        <div className="border-l h-4 border-gray-500 dark:border-gray-400"></div>
                                        <p className="text-xs">Snow: <span className="font-medium">2 days</span></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="200px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} crosshair={crosshair} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[RangeColumnSeries, Category, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="Month" high="HighTemp" low="LowTemp" type='RangeColumn' fill="#267DDA" cornerRadius={{ bottomLeft: 4, bottomRight: 4, topLeft: 4, topRight: 4 }} columnSpacing={0.1}></SeriesDirective>
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
                        <div key={'barchart-3-bs'} className="vh-100 d-flex justify-content-center align-items-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '730px' }}>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h1 className="fs-6 text-body fw-medium mb-2">Weather History</h1>
                                        <p className="small text-body-secondary m-0">Location: <span className="fw-medium">Charlotte, North Carolina</span></p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="Download Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                </div>
                                <div className="mt-3 text-body">
                                    <p className="small d-none d-sm-block mb-2">December</p>
                                    <div className="d-flex flex-column-reverse gap-3 flex-sm-row align-items-sm-center justify-content-between">
                                        <div>
                                            <p className="small d-block d-sm-none mb-2">December</p>
                                            <div className="d-flex align-items-end gap-2">
                                                <h1 className="h4 fw-semibold mb-0">13 / 1</h1>
                                                <p className="small mb-1">°C | F</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between align-items-center gap-2">
                                            <div className="e-btn-group d-none d-sm-block">
                                                <input type="radio" id="day" name="align" value="D" aria-label="day" role="button" />
                                                <label className="e-btn" htmlFor="day">D</label>
                                                <input type="radio" id="week" name="align" value="W" aria-label="week" role="button" />
                                                <label className="e-btn" htmlFor="week">W</label>
                                                <input type="radio" id="month" name="align" value="M" aria-label="month" role="button" />
                                                <label className="e-btn" htmlFor="month">M</label>
                                                <input type="radio" id="year" name="align" value="Y" defaultChecked aria-label="year" role="button" />
                                                <label className="e-btn" htmlFor="year">Y</label>
                                                <input type="radio" id="custom" name="align" value="Custom" aria-label="custom" role="button" />
                                                <label className="e-btn" htmlFor="custom">Custom</label>
                                            </div>
                                            <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline d-sm-none" content="Year" items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                            <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content="Temperature" items={[{ text: 'Temperature' }, { text: 'Wind speed' }, { text: 'Air pressure' }, { text: 'Snowfall' }, { text: 'Visibility' }]} type="button"></DropDownButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 flex-column flex-sm-row justify-content-start align-items-sm-center small text-body-secondary mt-4">
                                    <p className="mb-0">Record temps:</p>
                                    <div className="d-flex align-items-center gap-2 gap-sm-3">
                                        <p className="fw-medium mb-0">26° / -13°C</p>
                                        <div className="border-start border-1 border-dark-subtle" style={{ height: '16px' }}></div>
                                        <p className="mb-0">Avg rainfall: <span className="fw-medium">9.9 cm</span></p>
                                        <div className="border-start border-1 border-dark-subtle" style={{ height: '16px' }}></div>
                                        <p className="mb-0">Snow: <span className="fw-medium">2 days</span></p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="200px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} crosshair={crosshair} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[RangeColumnSeries, Category, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="Month" high="HighTemp" low="LowTemp" type='RangeColumn' fill="#006EEF" cornerRadius={{ bottomLeft: 4, bottomRight: 4, topLeft: 4, topRight: 4 }} columnSpacing={0.1}></SeriesDirective>
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
