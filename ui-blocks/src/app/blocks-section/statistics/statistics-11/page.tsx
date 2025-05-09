'use client';

import { useEffect, useState, useRef } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject } from '@syncfusion/ej2-react-charts';

export default function Statistics11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const chartsRef = useRef<(ChartComponent | null)[]>([]);

    const metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: '$54,231',
            currentPercentage: 14.5,
            metricPoints: [
                { x: 1, y: 0.3 },
                { x: 2, y: 1.1 },
                { x: 3, y: 1.1 },
                { x: 4, y: 0.9 },
                { x: 5, y: 1.8 },
                { x: 6, y: 2.2 },
                { x: 7, y: 2.0 },
                { x: 8, y: 2.0 },
                { x: 9, y: 2.5 },
                { x: 10, y: 3.0 }
            ]
        },
        {
            metricName: 'Total Orders',
            currentValue: '1,234',
            currentPercentage: 5.2,
            metricPoints: [
                { x: 1, y: 3.0 },
                { x: 2, y: 2.5 },
                { x: 3, y: 2.0 },
                { x: 4, y: 2.0 },
                { x: 5, y: 2.2 },
                { x: 6, y: 1.8 },
                { x: 7, y: 0.9 },
                { x: 8, y: 1.1 },
                { x: 9, y: 1.1 },
                { x: 10, y: 0.3 }
            ]
        },
        {
            metricName: 'Conversion Rate',
            currentValue: '3.8%',
            currentPercentage: 18.8,
            metricPoints: [
                { x: 1, y: 0.3 },
                { x: 2, y: 1.1 },
                { x: 3, y: 1.1 },
                { x: 4, y: 0.9 },
                { x: 5, y: 1.8 },
                { x: 6, y: 2.2 },
                { x: 7, y: 2.0 },
                { x: 8, y: 2.0 },
                { x: 9, y: 2.5 },
                { x: 10, y: 3.0 }
            ]
        },
        {
            metricName: 'New Customers',
            currentValue: '321',
            currentPercentage: 18.5,
            metricPoints: [
                { x: 1, y: 3.0 },
                { x: 2, y: 2.5 },
                { x: 3, y: 2.0 },
                { x: 4, y: 2.0 },
                { x: 5, y: 2.2 },
                { x: 6, y: 1.8 },
                { x: 7, y: 0.9 },
                { x: 8, y: 1.1 },
                { x: 9, y: 1.1 },
                { x: 10, y: 0.3 }
            ]
        }
    ];

    /* SB Code - Start */
    const refreshChart = (timeout: number) => {
        setTimeout(() => {
            chartsRef.current.forEach((chartInstance) => {
                if (chartInstance) {
                    chartInstance.refresh();
                }
            });
        }, timeout);
    };

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-11' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshChart(100);
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
        refreshChart(200);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="px-4 sm:px-6 xl:px-11 py-12">
                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-4 lg:grid-cols-4">
                                {metricsData.map((data, index) => (
                                    <div key={index} className="e-card pt-6 e-bigger rounded-lg shadow-none">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-between items-center">
                                                <h4 className="text-sm text-gray-700 dark:text-gray-200 font-medium">{data.metricName}</h4>
                                                <span className={`text-2xl leading-none text-gray-500 dark:text-gray-300 ${data.metricName === "Total Revenue" ? "sf-icon-dollar" : data.metricName === "Total Orders" ? "sf-icon-cart" : data.metricName === "Conversion Rate" ? "e-icons e-critical-path" : data.metricName === "New Customers" ? "sf-icon-users" : ""}`}></span>
                                            </div>
                                            <div className="e-card-content pb-6">
                                                <p className="leading-7 mt-2 text-xl font-semibold text-gray-900 dark:text-white">{data.currentValue}</p>
                                                <p className="mt-1 text-gray-700 dark:text-gray-200">{data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37; from last month</p>
                                                <div style={{ width: '100%', height: '70px' }}>
                                                    <ChartComponent ref={(chartInstance) => {chartsRef.current[index] = chartInstance as ChartComponent | null;}} chartArea={{ border: { width: 0 } }} primaryXAxis={{ visible: false, lineStyle: { width: 0 }, majorGridLines: { width: 0 }, minorGridLines: { width: 0 } }} primaryYAxis={{ visible: false, lineStyle: { width: 0 }, minimum: 0, maximum: 4, interval: 1, majorGridLines: { width: 0 }, minorGridLines: { width: 0 } }} height="70" width="100%" margin={{ left: 0, right: 0, top: 0, bottom: 0 }} legendSettings={{ visible: false }} style={{ display: "block" }}>
                                                        <Inject services={[SplineAreaSeries]} />
                                                        <SeriesCollectionDirective>
                                                            <SeriesDirective dataSource={data.metricPoints} type="SplineArea" xName="x" yName="y" opacity={0.2} width={2} border={{ color: data.metricName === "Total Revenue" ? "#91BD34" : data.metricName === "Total Orders" ? "#01A8B5" : data.metricName === "Conversion Rate" ? "#FFB900" : data.metricName === "New Customers" ? "#91BD34" : "#000000", width: 2 }} fill={data.metricName === "Total Revenue" ? "#91BD34" : data.metricName === "Total Orders" ? "#01A8B5" : data.metricName === "Conversion Rate" ? "#FFB900" : data.metricName === "New Customers" ? "#91BD34" : "#000000"}></SeriesDirective>
                                                        </SeriesCollectionDirective>
                                                    </ChartComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="px-3 px-sm-4 px-xl-5 py-5">
                            <div className="row g-4 g-lg-3">
                                {metricsData.map((data, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-lg-3">
                                        <div className="e-card rounded-3 e-bigger">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header justify-content-between align-items-center pt-4 px-4">
                                                    <h4 className="small text-body-secondary fw-medium lh-base mb-0">{data.metricName}</h4>
                                                    <span className={`fs-4 text-secondary ${data.metricName === "Total Revenue" ? "sf-icon-dollar" : data.metricName === "Total Orders" ? "sf-icon-cart" : data.metricName === "Conversion Rate" ? "e-icons e-critical-path" : data.metricName === "New Customers" ? "sf-icon-users" : ""}`}></span>
                                                </div>
                                                <div className="e-card-content pb-4 px-4 pt-3">
                                                    <p className="fs-5 lh-sm fw-bold text-body mb-2">{data.currentValue}</p>
                                                    <p className="text-body-secondary mb-0">{data.currentPercentage > 0 ? '+' : ''}{data.currentPercentage}&#37; from last month</p>
                                                    <div style={{ width: '100%', height: '70px' }}>
                                                        <ChartComponent ref={(chartInstance) => {chartsRef.current[index] = chartInstance as ChartComponent | null;}} chartArea={{ border: { width: 0 } }} primaryXAxis={{ visible: false, lineStyle: { width: 0 }, majorGridLines: { width: 0 }, minorGridLines: { width: 0 } }} primaryYAxis={{ visible: false, lineStyle: { width: 0 }, minimum: 0, maximum: 4, interval: 1, majorGridLines: { width: 0 }, minorGridLines: { width: 0 } }} height="70" width="100%" margin={{ left: 0, right: 0, top: 0, bottom: 0 }} legendSettings={{ visible: false }} style={{ display: "block" }}>
                                                            <Inject services={[SplineAreaSeries]} />
                                                            <SeriesCollectionDirective>
                                                                <SeriesDirective dataSource={data.metricPoints} type="SplineArea" xName="x" yName="y" opacity={0.2} width={2} border={{ color: (data.metricName === 'Total Revenue' ? '#0EAB44' : data.metricName === 'Total Orders' ? '#00EFA7' : data.metricName === 'Conversion Rate' ? '#FF9900' : data.metricName === 'New Customers' ? '#0EAB44' : '#000000'), width: 2 }} fill={data.metricName === 'Total Revenue' ? '#0EAB44' : data.metricName === 'Total Orders' ? '#00EFA7' : data.metricName === 'Conversion Rate' ? '#FF9900' : data.metricName === 'New Customers' ? '#0EAB44' : '#000000'}></SeriesDirective>
                                                            </SeriesCollectionDirective>
                                                        </ChartComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}