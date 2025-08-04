'use client';

import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, BubbleSeries, DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';

export default function BubbleChart1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);
    const colorPalette = ['#267DDA', '#91BD34', '#D83B01', '#DE4383'];

    const weeklyExpenseData = [
        {id: 1, category: 'Groceries', literacy: 74, gdpGrowth: 48, expense: 720, bubbleSize: 15, fill: '#267DDA' },
        {id: 2, category: 'Food & Drinks', literacy: 90, gdpGrowth: 32, expense: 480, bubbleSize: 10, fill: '#91BD34' },
        {id: 3, category: 'Shopping', literacy: 91, gdpGrowth: 7, expense: 195, bubbleSize: 2, fill: '#D83B01' },
        {id: 4, category: 'Transportation', literacy: 80, gdpGrowth: 13, expense: 105, bubbleSize: 8, fill: '#DE4383' }
    ];

    const primaryXAxis: object = {
        minimum: 65,
        maximum: 102,
        interval: 5,
        crossesAt: 5,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { size: '0px' }
    };

    const primaryYAxis: object = {
        minimum: 0,
        maximum: 65,
        interval: 5,
        crossesAt: 10,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { size: '0px' }
    };

    const marker: object = {
        dataLabel: {
            visible: true,
            format: '{value}%',
            position: 'Middle',
            font: { fontWeight: '600' }
        }
    };

    const textRender = (args: any): void => {
        args.font.color = colorPalette[args.point.index];
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bubble-chart-1' && blockData.theme) {
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
        if (chartRef.current) {
            chartRef.current.refresh();
        }
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
        };
    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={'bubblechart-1-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{maxWidth: '380px'}}>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Weekly Expense</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">From Dec 1 - Dec 8, 2024</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <ChartComponent width="100%" height="310px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} textRender={textRender} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                    <Inject services={[BubbleSeries, Category, Tooltip, DataLabel]}/>
                                    <SeriesCollectionDirective>
                                         <SeriesDirective dataSource={weeklyExpenseData} xName="literacy" yName="gdpGrowth" size="bubbleSize" type="Bubble" minRadius={7} maxRadius={20} marker={marker} opacity={0.3} pointColorMapping="fill"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                                {weeklyExpenseData.map((data) => (
                                     <div key={data.id} className={`text-sm flex justify-between items-center px-1 py-3 ${data.id - 1 < weeklyExpenseData.length - 1? "border-b border-gray-200 dark:border-gray-600": ""}`}>
                                         <div className="flex items-center gap-2">
                                             <span className="w-2 h-2 rounded-full" style={{backgroundColor: colorPalette[data.id - 1]}}></span>
                                             <p className="text-sm text-gray-700 dark:text-gray-300">{data.category}</p>
                                         </div>
                                         <p className="text-xs font-medium text-gray-900 dark:text-white">${data.expense}</p>
                                     </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'bubblechart-1-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{maxWidth: '380px'}}>
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div className="d-flex flex-column gap-2">
                                        <h2 className="h6 fw-semibold text-body mb-0">Weekly Expense</h2>
                                        <p className="text-body-secondary small mb-0">From Dec 1 - Dec 8, 2024</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <ChartComponent width="100%" height="310px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} textRender={textRender} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                    <Inject services={[BubbleSeries, Category, Tooltip, DataLabel]}/>
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={weeklyExpenseData} xName="literacy" yName="gdpGrowth" size="bubbleSize" type="Bubble" minRadius={7} maxRadius={20} marker={marker} opacity={0.3} pointColorMapping="fill"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                                {weeklyExpenseData.map((data) => (
                                    <div key={data.id} className={`d-flex justify-content-between align-items-center py-2 ${data.id - 1 < weeklyExpenseData.length - 1? "border-bottom": ""}`}>
                                        <div className="d-flex align-items-center gap-2 my-1">
                                            <span className="rounded-circle d-inline-block" style={{width: "8px",height: "8px",backgroundColor: colorPalette[data.id - 1]}}></span>
                                             <p className="mb-0 small text-bodyp-secondary">{data.category}</p>
                                        </div>
                                        <p className="my-1 small fw-semibold text-body-secondary">${data.expense}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
