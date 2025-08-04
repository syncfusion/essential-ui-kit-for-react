'use client';

import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, LineSeries, Legend, Trendlines, Tooltip } from '@syncfusion/ej2-react-charts';

export default function LineChart10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { x: 4, y: 0 },
        { x: 8, y: 12 },
        { x: 12, y: 25 },
        { x: 16, y: 37 },
        { x: 20, y: 50 },
        { x: 24, y: 75 }
    ];
    
    const primaryXAxis: object = {
        minimum: 4,
        maximum: 24,
        interval: 4,
        labelPlacement: 'OnTicks',
        labelStyle: { fontWeight: '500' },
        titleStyle: { fontWeight: '500'},
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 }
    };

    const primaryYAxis: object = {
        minimum: 0,
        maximum: 75,
        interval: 25,
        labelFormat: '{value}%',
        majorGridLines: {
            width: 1,
            dashArray: '5,5'
        },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0, color: 'transparent' },
        labelStyle: { fontWeight: '500' },
        titleStyle: { fontWeight: '500' }
    };

    const legendSettings: object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        shapeHeight: 10,
        shapeWidth: 10,
        height: '38',
        textStyle: { fontWeight: '500' }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        if (rangeDropdownRef.current?.element?.classList.contains('e-active')) {
            rangeDropdownRef.current.toggle();
        }
    };
   
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-10' && blockData.theme) {
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
                        <div key={'linechart-10-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{maxWidth: '580px'}}>
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-base font-semibold text-gray-900 dark:text-white">Sales Overview</h1>
                                        <ButtonComponent cssClass="e-outline" className="hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline" className="sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-6">
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Comparison</p>
                                        <DropDownButtonComponent cssClass="e-outline" className="e-outline" iconCss="e-icons e-day" ref={rangeDropdownRef} content='Jan' items={[{ text: 'Jan' },{ text: 'Feb' },{ text: 'Mar' },{ text: 'Apr' },{ text: 'May' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div>
                                    <ChartComponent ref={chartRef} width="100%" height="250px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} load={(args) =>chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[LineSeries, Legend, Tooltip, Trendlines, Category]}/>
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="x" yName="y" name="Actual Progress" fill="#267DDA" width={1} type="Line" trendlines={[{type: 'Linear',width: 1,name: 'Ideal Progress',dashArray: '5,5', fill: '#9CA3AF'}]}/>
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
                        <div key={'linechart-10-bs'} className="vh-100 d-flex justify-content-center align-items-start p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: '580px'}}>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="h6 fw-semibold text-body mb-0">Sales Overview</h1>
                                        <ButtonComponent cssClass="e-outline" className="d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline" className=" d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex flex-column-reverse flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
                                        <p className="small text-body-secondary mb-0">Comparison</p>
                                        <DropDownButtonComponent cssClass="e-outline" className="e-outline" iconCss="e-icons e-day" ref={rangeDropdownRef} content='Jan' items={[{ text: 'Jan' },{ text: 'Feb' },{ text: 'Mar' },{ text: 'Apr' },{ text: 'May' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <ChartComponent ref={chartRef} width="100%" height="250px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[LineSeries, Legend, Tooltip, Trendlines, Category]}/>
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="x" yName="y" name="Actual Progress" fill="#267DDA" width={1} type="Line" trendlines={[{type: 'Linear',width: 1,name: 'Ideal Progress',dashArray: '5,5', fill: '#9CA3AF'}]}/>
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
