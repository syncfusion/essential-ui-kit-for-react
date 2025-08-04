'use client';

import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, ColumnSeries, DataLabel, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

export default function BarChart9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { x: 'China', y: 95, tooltipMappingName: 'China' },
        { x: 'USA', y: 120, tooltipMappingName: 'United States' },
        { x: 'Japan', y: 50, tooltipMappingName: 'Japan' },
        { x: 'Australia', y: 65, tooltipMappingName: 'Australia' },
        { x: 'France', y: 80, tooltipMappingName: 'France' }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };
    
    const primaryYAxis: object = {
        minimum: 30,
        maximum: 130,
        interval: 20,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };
    
    const handleResize = (): void => {
        if (metricDropdownRef.current?.element?.classList.contains('e-active')) {
            metricDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-9' && blockData.theme) {
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
                        <div key={'barchart-9-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '530px' }}>
                                <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-start">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h1 className="text-base font-medium text-gray-900 dark:text-white mb-1 sm:mb-2">Ticket Activity Overview</h1>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Location:<span className="font-medium pl-1">Paris, France</span></p>
                                        </div>
                                        <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex gap-x-3">
                                        <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content='2024' items={[{ text: '2024' },{ text: '2023' },{ text: '2022' },{ text: '2021' },{ text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <ChartComponent ref={chartRef} height="300px" style={{ textAlign: 'center' }} chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: false }} tooltip={{ enable: true, enableMarker: false }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[ColumnSeries, Category, DataLabel, Tooltip, Legend]}/>
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="x" yName="y" columnFacet="Cylinder" type="Column" columnSpacing={0.3} columnWidth={0.75} fill="#01A8B5"></SeriesDirective>
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
                        <div key={'barchart-9-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: '530px'}}>
                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start">
                                    <div className="d-flex justify-content-between align-items-start w-100">
                                        <div>
                                            <h1 className="h6 fw-medium text-body mb-1">Ticket Activity Overview</h1>
                                            <p className="text-body-secondary small mb-0">Location: <span className="fw-semibold">Paris, France</span></p>
                                        </div>
                                        <ButtonComponent cssClass="d-block d-sm-none e-outline" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex align-items-start gap-2">
                                        <DropDownButtonComponent ref={metricDropdownRef} className="e-outline flex-shrink-0" content='2024' items={[{ text: '2024' },{ text: '2023' },{ text: '2022' },{ text: '2021' },{ text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} height="300px" style={{ textAlign: 'center' }} chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: false }} tooltip={{ enable: true, enableMarker: true }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[ColumnSeries, Category, DataLabel, Tooltip, Legend]}/>
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="x" yName="y" columnFacet="Cylinder" type="Column" columnSpacing={0.3} columnWidth={0.75} fill="#01A8B5"></SeriesDirective>
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
