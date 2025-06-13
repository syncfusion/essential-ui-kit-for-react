'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from "@syncfusion/ej2-react-charts";
import styles from "./page.module.css";

export default function AccumulationChart1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<AccumulationChartComponent | null>(null);

    const chartData: any[] = [
        { id: 1, x: 'Food & Drink', y: 48 },
        { id: 2, x: 'Grocery', y: 32 },
        { id: 3, x: 'Shopping', y: 13 },
        { id: 4, x: 'Transport', y: 7 }
    ];

    const centerLabel: object = {
        text: '$8,295',
        textStyle: {
            fontWeight: '500',
            size: '16px'
        }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'accumulation-chart-1' && blockData.theme) {
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
                        <div key={'accumulationchart-1-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '576px' }}>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <span className="e-badge e-badge-warning flex justify-center items-center text-2xl sf-icon-money-bag w-12 h-12"></span>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-medium text-gray-900 dark:text-white">Daily Expense</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Data for the last week</p>
                                        </div>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2">
                                    <div className="relative">
                                        <AccumulationChartComponent ref={chartRef} width="100%" height="200px" centerLabel={centerLabel} legendSettings={{ visible: false }} enableBorderOnMouseMove={false} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <AccumulationSeriesCollectionDirective>
                                                <AccumulationSeriesDirective dataSource={chartData} xName="x" yName="y" name="Expense" startAngle={210} innerRadius="65%" radius="100%" palettes={["#5A61F6", "#03B4B4", "#78B008", "#F39C12"]}></AccumulationSeriesDirective>
                                            </AccumulationSeriesCollectionDirective>
                                        </AccumulationChartComponent>
                                        <div className="flex items-center gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 mt-2 text-green-700 dark:text-green-500">
                                            <span className="e-icons e-arrow-up" />
                                            <p className="text-sm font-medium">2.1%</p>
                                        </div>
                                    </div>
                                    <div id={styles.expenseList} className="flex items-center">
                                        <ListViewComponent className="e-list-template border-0" dataSource={chartData}
                                            template={(data: any) => (
                                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 px-1 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: ["#5A61F6", "#03B4B4", "#78B008", "#F39C12"][data.id - 1] }}
                                                        ></span>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">{data.x}</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{data.y}%</p>
                                                </div>
                                            )}
                                        >
                                        </ListViewComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'accumulationchart-1-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '576px' }}>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="e-badge e-badge-warning d-flex justify-content-center align-items-center fs-3 sf-icon-money-bag" style={{ width: '48px', height: '48px' }}></span>
                                        <div className="d-flex flex-column gap-1">
                                            <p className="fs-6 fw-medium text-body m-0">Daily Expense</p>
                                            <p className="small text-body-secondary m-0">Data for the last week</p>
                                        </div>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <div className="row row-cols-1 row-cols-sm-2 g-4 mt-2">
                                    <div className="position-relative">
                                        <AccumulationChartComponent ref={chartRef} width="100%" height="200px" centerLabel={centerLabel} legendSettings={{ visible: false }} enableBorderOnMouseMove={false} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <AccumulationSeriesCollectionDirective>
                                                <AccumulationSeriesDirective dataSource={chartData} xName="x" yName="y" name="Expense" startAngle={210} innerRadius="65%" radius="100%" palettes={["#006EEF", "#00EFA7", "#0EAB44", "#FF9900"]}></AccumulationSeriesDirective>
                                            </AccumulationSeriesCollectionDirective>
                                        </AccumulationChartComponent>
                                        <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-1 mt-3 text-success">
                                            <span className="e-icons e-arrow-up" />
                                            <p className="mb-0 fw-medium small">2.1%</p>
                                        </div>
                                    </div>
                                    <div id={styles.expenseList} className="d-flex align-items-center">
                                        <ListViewComponent className="e-list-template border-0" dataSource={chartData}
                                            template={(data: any) => (
                                                <div className="d-flex justify-content-between align-items-center border-bottom px-2 py-3 border-light-subtle">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="rounded-circle" style={{ width: "8px", height: "8px", backgroundColor: ["#006EEF", "#00EFA7", "#0EAB44", "#FF9900"][data.id - 1] }}></span>
                                                        <p className="mb-0 small text-body">{data.x}</p>
                                                    </div>
                                                    <p className="mb-0 small text-body-secondary">{data.y}%</p>
                                                </div>
                                            )}
                                        >
                                        </ListViewComponent>
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
