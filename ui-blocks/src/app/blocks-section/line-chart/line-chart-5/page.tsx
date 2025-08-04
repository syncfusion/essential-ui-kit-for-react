'use client';

import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, SplineSeries, Crosshair, DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';

export default function LineChart5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);
    
    const chartData1: object[] = [
        { x: 'Jan', y: 30 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 29 },
        { x: 'Apr', y: 37 },
        { x: 'May', y: 40 },
        { x: 'Jun', y: 25 },
        { x: 'Jul', y: 35 },
        { x: 'Aug', y: 48 },
        { x: 'Sep', y: 23 },
        { x: 'Oct', y: 26 },
        { x: 'Nov', y: 29 },
        { x: 'Dec', y: 40 }
    ];

    const chartData2: object[] = [
        { x: 'Jan', y: 30 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 26 },
        { x: 'Apr', y: 16 },
        { x: 'May', y: 30 },
        { x: 'Jun', y: 40 },
        { x: 'Jul', y: 18 },
        { x: 'Aug', y: 40 },
        { x: 'Sep', y: 50 },
        { x: 'Oct', y: 37 },
        { x: 'Nov', y: 29 },
        { x: 'Dec', y: 40 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        interval: 1,
        labelPlacement: 'OnTicks',
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        labelFormat: '{value}k',
        minimum: 10,
        maximum: 60,
        interval: 10,
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        shared: false,
        enableMarker: false,
        header: '',
        format: '${point.y} (+5.9%)<br>21 May, 08:30 PM',
        showNearestTooltip: true
    };

    const crosshair: object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,5',
        verticalLineColor: '#9CA3AF'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
        if (rangeDropdownRef.current?.element?.classList.contains('e-active')) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-5' && blockData.theme) {
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
                        <div key={'linechart-5-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{maxWidth: '950px'}}>
                                <div className="flex flex-col gap-2 mb-4 w-full">
                                    <div className="flex justify-between">
                                        <h2 className="text-base font-medium text-gray-900 dark:text-white">Profit Pulse Insights</h2>
                                        <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Origin Game EA</p>
                                    <div className="flex justify-between items-start flex-col-reverse sm:flex-row gap-4 mt-1">
                                        <div className="flex items-center gap-3">
                                            <p className="text-xl flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300"><span className="text-gray-500 dark:text-gray-400">$</span> <span>28,089.00</span></p>
                                            <div className="flex items-center gap-1 text-green-700 dark:text-green-500"><span className="e-icons e-arrow-up"></span><span className="text-xs font-medium">+26% of last month</span></div>
                                        </div>
                                        <div className="e-btn-group hidden sm:block">
                                            <input type="radio" id="day" name="align" value="D" />
                                            <label className="e-btn" htmlFor="day">D</label>
                                            <input type="radio" id="week" name="align" value="W" />
                                            <label className="e-btn" htmlFor="week">W</label>
                                            <input type="radio" id="month" name="align" value="M" />
                                            <label className="e-btn" htmlFor="month">M</label>
                                            <input type="radio" id="year" name="align" value="Y" defaultChecked />
                                            <label className="e-btn" htmlFor="year">Y</label>
                                            <input type="radio" id="custom" name="align" value="Custom" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline sm:hidden" content='Year' items={[{ text: 'Day' },{ text: 'Week' },{ text: 'Month' },{ text: 'Year' },{ text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="350px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} crosshair={crosshair} tooltip={tooltip} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                   <Inject services={[SplineSeries, Tooltip, DataLabel, Category, Crosshair]}/>
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData1} xName="x" yName="y" width={2} type="Spline" fill={isDarkMode ? '#4B5563' : '#D1D5DB'}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData2} xName="x" yName="y" width={4} type="Spline" fill="url(#gradient)"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                            <svg style={{ height: 0 , width:0}}>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#de4383"/>
                                        <stop offset="100%" stopColor="#ffb900"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'linechart-5-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: '950px'}}>
                                <div className="d-flex flex-column gap-2 mb-4 w-100">
                                    <div className="d-flex justify-content-between">
                                        <h2 className="fs-6 fw-medium text-body mb-0">Profit Pulse Insights</h2>
                                        <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <p className="small text-body-secondary mb-0">Origin Game EA</p>
                                    <div className="d-flex justify-content-between align-items-start flex-column-reverse flex-sm-row gap-3 mt-1">
                                        <div className="d-flex align-items-center gap-3">
                                            <p className="h5 fw-semibold text-body-secondary mb-0"><span className="text-body-secondary">$</span> 28,089.00</p>
                                            <div className="d-flex align-items-center gap-1 text-success">
                                                <span className="e-icons e-arrow-up"></span>
                                                <span className="small fw-medium">+26% of last month</span>
                                            </div>
                                        </div>
                                        <div className="e-btn-group d-none d-sm-block">
                                            <input type="radio" id="day" name="align" value="D" />
                                            <label className="e-btn" htmlFor="day">D</label>
                                            <input type="radio" id="week" name="align" value="W" />
                                            <label className="e-btn" htmlFor="week">W</label>
                                            <input type="radio" id="month" name="align" value="M" />
                                            <label className="e-btn" htmlFor="month">M</label>
                                            <input type="radio" id="year" name="align" value="Y" defaultChecked />
                                            <label className="e-btn" htmlFor="year">Y</label>
                                            <input type="radio" id="custom" name="align" value="Custom" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline d-block d-sm-none" content='Year' items={[{ text: 'Day' },{ text: 'Week' },{ text: 'Month' },{ text: 'Year' },{ text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="350px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} crosshair={crosshair} tooltip={tooltip} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                   <Inject services={[SplineSeries, Tooltip, DataLabel, Category, Crosshair]}/>
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData1} xName="x" yName="y" width={2} type="Spline" fill={isDarkMode ? '#4B5563' : '#D1D5DB'}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData2} xName="x" yName="y" width={4} type="Spline" fill="url(#gradient)"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                            <svg style={{ height: 0 , width:0}}>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#EF6400"/>
                                        <stop offset="100%" stopColor="#EF00AC"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
