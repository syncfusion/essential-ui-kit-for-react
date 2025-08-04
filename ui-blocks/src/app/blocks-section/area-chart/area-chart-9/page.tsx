'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category, Highlight, Legend, Tooltip } from "@syncfusion/ej2-react-charts";

export default function AreaChart9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { month: 'Jan', charleExpense: 250, steveExpense: 160, peterExpense: 110, johnExpense: 80 },
        { month: 'Feb', charleExpense: 260, steveExpense: 130, peterExpense: 175, johnExpense: 90 },
        { month: 'Mar', charleExpense: 340, steveExpense: 210, peterExpense: 140, johnExpense: 43 },
        { month: 'Apr', charleExpense: 245, steveExpense: 190, peterExpense: 135, johnExpense: 78 },
        { month: 'May', charleExpense: 350, steveExpense: 260, peterExpense: 70, johnExpense: 11 },
        { month: 'Jun', charleExpense: 320, steveExpense: 240, peterExpense: 115, johnExpense: 16 },
        { month: 'Jul', charleExpense: 330, steveExpense: 188, peterExpense: 195, johnExpense: 72 },
        { month: 'Aug', charleExpense: 320, steveExpense: 225, peterExpense: 180, johnExpense: 72 },
        { month: 'Sep', charleExpense: 270, steveExpense: 220, peterExpense: 125, johnExpense: 94 },
        { month: 'Oct', charleExpense: 320, steveExpense: 250, peterExpense: 220, johnExpense: 48 },
        { month: 'Nov', charleExpense: 310, steveExpense: 235, peterExpense: 78, johnExpense: 94 },
        { month: 'Dec', charleExpense: 370, steveExpense: 270, peterExpense: 150, johnExpense: 78 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        labelFormat: '${value}k',
        minimum: 0,
        maximum: 400,
        interval: 100,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-9' && blockData.theme) {
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
                        <div key={"areachart-9-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '1116px' }}>
                                <div className="flex justify-between flex-col sm:flex-row sm:items-start gap-4">
                                    <div className="flex justify-between gap-2">
                                        <div>
                                            <h1 className="text-base font-medium text-gray-900 dark:text-white">Expense Analysis</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">Family Expense for the year 2024</p>
                                        </div>
                                        <ButtonComponent className="e-outline block sm:hidden self-start" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex gap-3">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent className="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chartRef} height="270px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: true, enableHighlight: true, padding: 15 }} tooltip={{ enable: true, showNearestTooltip: true }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[Category, Highlight, LineSeries, Legend, Tooltip]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="johnExpense" name="John" type="Line" fill={isDarkMode ? '#9CA3AF' : '#1F2937'} width={2} marker={{ visible: true, shape: 'Circle', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="peterExpense" name="Peter" type="Line" fill="#01A8B5" width={2} marker={{ visible: true, shape: 'Pentagon', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="steveExpense" name="Steve" type="Line" fill="#267DDA" width={2} marker={{ visible: true, shape: 'Rectangle', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="charleExpense" name="Charle" type="Line" fill="#FFB900" width={2} marker={{ visible: true, shape: 'Triangle', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
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
                        <div key={"areachart-9-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '1116px' }}>
                                <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-start gap-3">
                                    <div className="d-flex justify-content-between gap-2">
                                        <div>
                                            <h1 className="fs-6 fw-medium text-body">Expense Analysis</h1>
                                            <p className="small text-body-secondary mt-2 mb-0">Family Expense for the year 2024</p>
                                        </div>
                                        <ButtonComponent className="e-outline d-block d-sm-none align-self-start" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent className="e-outline d-none d-sm-block ms-1" content="View Report" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} height="270px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: true, enableHighlight: true, padding: 15 }} tooltip={{ enable: true, showNearestTooltip: true }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[Category, Highlight, LineSeries, Legend, Tooltip]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="johnExpense" name="John" type="Line" fill="#9747FF" width={2} marker={{ visible: true, shape: 'Circle', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="peterExpense" name="Peter" type="Line" fill="#00EFA7" width={2} marker={{ visible: true, shape: 'Pentagon', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="steveExpense" name="Steve" type="Line" fill={isDarkMode ? '#3A95FF' : '#006EEF'} width={2} marker={{ visible: true, shape: 'Rectangle', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
                                            <SeriesDirective dataSource={chartData} xName="month" yName="charleExpense" name="Charle" type="Line" fill="#EF6400" width={2} marker={{ visible: true, shape: 'Triangle', isFilled: true }} legendShape="HorizontalLine"></SeriesDirective>
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
