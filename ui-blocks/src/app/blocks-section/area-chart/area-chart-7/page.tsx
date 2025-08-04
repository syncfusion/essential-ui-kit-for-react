'use client';

import { useEffect, useState, useRef } from "react";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, DateTime, AxisModel, Crosshair, Tooltip } from "@syncfusion/ej2-react-charts";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default function AreaChart7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any[] = [
        { date: new Date(2024, 0, 6), high: 25, low: 18 },
        { date: new Date(2024, 0, 7), high: 28, low: 20 },
        { date: new Date(2024, 0, 8), high: 25, low: 14 },
        { date: new Date(2024, 0, 9), high: 26, low: 17 },
        { date: new Date(2024, 0, 10), high: 27, low: 17 },
        { date: new Date(2024, 0, 11), high: 27, low: 16 },
        { date: new Date(2024, 0, 12), high: 29, low: 17 },
        { date: new Date(2024, 0, 13), high: 28, low: 19 },
        { date: new Date(2024, 0, 14), high: 29, low: 17 }
    ];

    const primaryXAxis: AxisModel = {
        visible: false,
        valueType: 'DateTime'
    };

    const primaryYAxis: AxisModel = {
        labelFormat: '{value}°',
        minimum: 0,
        maximum: 40,
        interval: 10,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        shared: true,
        enableMarker: false,
        showHeaderLine: false,
        header: '${point.x}',
        format: 'Daily ${series.name} : ${point.y}'
    };

    const crosshair: object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,5'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        setIsMobileView(window.innerWidth <= 600);
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-7' && blockData.theme) {
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
                        <div key={"areachart-7-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '930px' }}>
                                <h3 className="text-base font-medium text-gray-900 dark:text-white">Weather Analysis</h3>
                                <div className="flex sm:items-center justify-between flex-col sm:flex-row flex-col-reverse gap-4 mt-4 md:mt-3">
                                    <div className="e-btn-group self-start">
                                        <input type="radio" id="temperature" name="weatherMetric" defaultChecked value="temperature" />
                                        <label className="e-btn" htmlFor="temperature">
                                            <span className={`e-btn-icon sf-icon-thermometer !text-sm ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="hidden sm:inline-block">Temperature</span>
                                        </label>
                                        <input type="radio" id="precipitation" name="weatherMetric" value="precipitation" />
                                        <label className="e-btn" htmlFor="precipitation">
                                            <span className={`e-btn-icon sf-icon-precipitation !text-sm ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="hidden sm:inline-block">Precipitation</span>
                                        </label>
                                        <input type="radio" id="humidity" name="weatherMetric" value="humidity" />
                                        <label className="e-btn" htmlFor="humidity">
                                            <span className={`e-btn-icon sf-icon-humidity !text-sm ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="hidden sm:inline-block">Humidity</span>
                                        </label>
                                        <input type="radio" id="wind" name="weatherMetric" value="wind" />
                                        <label className="e-btn" htmlFor="wind">
                                            <span className={`e-btn-icon sf-icon-wind !text-sm ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="hidden sm:inline-block">Wind</span>
                                        </label>
                                    </div>
                                    <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline w-fit" content="Jan, 2024" items={[{ text: 'May, 2024' },{ text: 'Apr, 2024' },{ text: 'Mar, 2024' },{ text: 'Feb, 2024' },{ text: 'Jan, 2024' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chartRef} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={tooltip} crosshair={crosshair} legendSettings={{ visible: false }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[SplineAreaSeries, Tooltip, DateTime, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="date" yName="high" name="High" type="SplineArea" width={2} border={{ color: '#D83B01', width: 2 }} fill="url(#gradient-high)"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="date" yName="low" name="Low" type="SplineArea" width={2} border={{ color: '#5A61F6', width: 2 }} fill="url(#gradient-low)"></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                    <svg width="0" height="0">
                                        <defs>
                                            <linearGradient id="gradient-high" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#D83B01" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0001" />
                                            </linearGradient>
                                            <linearGradient id="gradient-low" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5A61F6" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0001" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"areachart-7-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '930px' }}>
                                <h3 className="fs-6 fw-medium text-body mb-3">Weather Analysis</h3>
                                <div className="d-flex justify-content-between flex-column flex-sm-row flex-column-reverse gap-3 mt-3 mt-md-2 align-items-sm-center">
                                    <div className="e-btn-group align-self-start">
                                        <input type="radio" id="temperature" name="weatherMetric" defaultChecked value="temperature" />
                                        <label className="e-btn" htmlFor="temperature">
                                            <span className={`e-btn-icon sf-icon-thermometer small ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="d-none d-sm-inline-block">Temperature</span>
                                        </label>
                                        <input type="radio" id="precipitation" name="weatherMetric" value="precipitation" />
                                        <label className="e-btn" htmlFor="precipitation">
                                            <span className={`e-btn-icon sf-icon-precipitation small ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="d-none d-sm-inline-block">Precipitation</span>
                                        </label>
                                        <input type="radio" id="humidity" name="weatherMetric" value="humidity" />
                                        <label className="e-btn" htmlFor="humidity">
                                            <span className={`e-btn-icon sf-icon-humidity small ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="d-none d-sm-inline-block">Humidity</span>
                                        </label>
                                        <input type="radio" id="wind" name="weatherMetric" value="wind" />
                                        <label className="e-btn" htmlFor="wind">
                                            <span className={`e-btn-icon sf-icon-wind small ${!isMobileView ? 'e-icon-left' : ''}`}></span>
                                            <span className="d-none d-sm-inline-block">Wind</span>
                                        </label>
                                    </div>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline w-auto align-self-start" content="Jan, 2024" items={[{ text: 'May, 2024' },{ text: 'Apr, 2024' },{ text: 'Mar, 2024' },{ text: 'Feb, 2024' },{ text: 'Jan, 2024' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={tooltip} crosshair={crosshair} legendSettings={{ visible: false }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[SplineAreaSeries, Tooltip, DateTime, Crosshair]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="date" yName="high" name="High" type="SplineArea" width={2} border={{ color: isDarkMode ? '#FF4B4B':'#F42929', width: 2 }} fill="url(#gradient-high)"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="date" yName="low" name="Low" type="SplineArea" width={2} border={{ color: isDarkMode ? '#3A95FF':'#006EEF', width: 2 }} fill="url(#gradient-low)"></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                    <svg width="0" height="0">
                                        <defs>
                                            <linearGradient id="gradient-high" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#F42929" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0001" />
                                            </linearGradient>
                                            <linearGradient id="gradient-low" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#006EEF" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0001" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
