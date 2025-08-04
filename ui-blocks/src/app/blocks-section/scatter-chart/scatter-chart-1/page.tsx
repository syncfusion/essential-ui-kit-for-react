'use client';

import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, ScatterSeries, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

export default function ScatterChart1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData1: object = [
        { x: 960, y: 81 },
        { x: 1070, y: 79 },
        { x: 1180, y: 80 },
        { x: 1370, y: 79 },
        { x: 1490, y: 80 },
        { x: 1510, y: 84 }
    ];

    const chartData2: object = [
        { x: 950, y: 78 },
        { x: 1050, y: 77 },
        { x: 1180, y: 75 },
        { x: 1230, y: 80 },
        { x: 1290, y: 76 }
    ];

    const chartData3: object = [
        { x: 930, y: 75 },
        { x: 990, y: 77 },
        { x: 1020, y: 74.5 },
        { x: 1160, y: 77.5 }
    ];

    const primaryXAxis: object = {
        title: 'Product Sales',
        minimum: 900,
        maximum: 1600,
        interval: 100,
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        labelPlacement: 'OnTicks',
        labelStyle: { fontWeight: '500' },
        titleStyle: {
            size: '12px',
            fontWeight: '500'
        }
    };

    const primaryYAxis: object = {
        title: 'CSAT Score (%)',
        minimum: 70,
        maximum: 86,
        interval: 4,
        labelStyle: { fontWeight: '500' },
        titleStyle: { fontWeight: '500' }
    };

    const legendSettings: object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        height: '38',
        textStyle: {fontWeight: '500'}
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
                if (blockData.name === 'scatter-chart-1' && blockData.theme) {
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
                        <div key={'scatterchart-1-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '690px' }}>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-1">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white pb-3 sm:pb-0">Sales Overview</h2>
                                        <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex gap-2">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content='Select Year' items={[{ text: '2024' },{ text: '2023' },{ text: '2022' },{ text: '2021' },{ text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <ChartComponent ref={chartRef} width="100%" height="400px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                    <Inject services={[ScatterSeries, Legend, Tooltip, Category]}/>
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData1} xName="x" yName="y" name="Slack" fill="#5A61F6" type="Scatter" marker={{ height: 14, width: 14, shape: 'Rectangle' }}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData2} xName="x" yName="y" name="Zoom" fill="#FFB900" type="Scatter" marker={{ height: 14, width: 14, shape: 'Circle' }}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData3} xName="x" yName="y" name="Microsoft Teams" fill="#01A8B5" type="Scatter" marker={{ height: 14, width: 14, shape: 'Triangle' }}></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'scatterchart-1-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: '690px'}}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-2">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <h2 className="h6 fw-semibold text-body mb-0">Sales Overview</h2>
                                        <ButtonComponent cssClass="e-outline d-block d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex justify-content-sm-end gap-3 w-100">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline flex-shrink-0" content='Select Year' items={[{ text: '2024' },{ text: '2023' },{ text: '2022' },{ text: '2021' },{ text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    </div>
                                </div>
                               <ChartComponent ref={chartRef} width="100%" height="400px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                    <Inject services={[ScatterSeries, Legend, Tooltip, Category]}/>
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={chartData1} xName="x" yName="y" name="Slack" fill="#006EEF" type="Scatter" marker={{ height: 14, width: 14, shape: 'Rectangle' }}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData2} xName="x" yName="y" name="Zoom" fill="#FF9900" type="Scatter" marker={{ height: 14, width: 14, shape: 'Circle' }}></SeriesDirective>
                                        <SeriesDirective dataSource={chartData3} xName="x" yName="y" name="Microsoft Teams" fill="#00EFA7" type="Scatter" marker={{ height: 14, width: 14, shape: 'Triangle' }}></SeriesDirective>
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
