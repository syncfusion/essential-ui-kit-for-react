'use client';

import { useEffect, useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries } from '@syncfusion/ej2-react-charts';

export default function Statistics5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            id: 1,
            metricName: 'Patients',
            currentValue: 6025,
            currentPercentage: 8.95,
            trend: 'up',
            metricPoints: [
                { x: 1, y: 5520 },
                { x: 2, y: 5580 },
                { x: 3, y: 5510 },
                { x: 4, y: 5650 },
                { x: 5, y: 5800 },
                { x: 6, y: 5750 },
                { x: 7, y: 5900 },
                { x: 8, y: 6100 },
                { x: 9, y: 5950 },
                { x: 10, y: 6025 }
            ]
        },
        {
            id: 2,
            metricName: 'New This Week',
            currentValue: 452,
            currentPercentage: 4.11,
            trend: 'up',
            metricPoints: [
                { x: 1, y: 425 },
                { x: 2, y: 418 },
                { x: 3, y: 430 },
                { x: 4, y: 442 },
                { x: 5, y: 410 },
                { x: 6, y: 435 },
                { x: 7, y: 445 },
                { x: 8, y: 450 },
                { x: 9, y: 448 },
                { x: 10, y: 452 }
            ]
        },
        {
            id: 3,
            metricName: 'Critical Alerts',
            currentValue: 948,
            currentPercentage: 12.05,
            trend: 'down',
            metricPoints: [
                { x: 1, y: 1050 },
                { x: 2, y: 1090 },
                { x: 3, y: 1020 },
                { x: 4, y: 1080 },
                { x: 5, y: 980 },
                { x: 6, y: 1010 },
                { x: 7, y: 970 },
                { x: 8, y: 940 },
                { x: 9, y: 960 },
                { x: 10, y: 948 }
            ]
        },
        {
            id: 4,
            metricName: 'Appointments',
            currentValue: 5626,
            currentPercentage: 27.47,
            trend: 'up',
            metricPoints: [
                { x: 1, y: 4650 },
                { x: 2, y: 4410 },
                { x: 3, y: 4800 },
                { x: 4, y: 5100 },
                { x: 5, y: 5300 },
                { x: 6, y: 5250 },
                { x: 7, y: 5400 },
                { x: 8, y: 5550 },
                { x: 9, y: 5590 },
                { x: 10, y: 5626 }
            ]
        }
    ];

    const setYaxis = (data: any[]): object => {
        const minValue = Math.min(...data.map(item => item.y));
        const maxValue = Math.max(...data.map(item => item.y));

        return {
            visible: false,
            lineStyle: { width: 0 },
            minimum: minValue,
            maximum: maxValue,
            interval: 100,
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 }
        };
    }

    const getGradientFill = (trend: string): string => {
        return trend === 'up' ? 'url(#gradient-up)' : 'url(#gradient-down)';
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-5' && blockData.theme) {
                    setTheme(blockData.theme);
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
                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-4 xl:grid-cols-4">
                                {metricsData.map((data, index) => (
                                    <div key={index} className="e-card e-bigger rounded-lg shadow-none !border-gray-300 dark:!border-gray-600">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !justify-between !pb-0">
                                                <div className="flex gap-2 items-center">
                                                    <span className={`text-base text-gray-500 dark:text-gray-400 ${data.metricName === 'Patients' ? 'sf-icon-users' : data.metricName === 'New This Week' ? 'sf-icon-user-plus-01' : data.metricName === 'Critical Alerts' ? 'sf-icon-notification-bell-02' : 'e-icons e-day'}`}></span>
                                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{data.metricName}</p>
                                                </div>
                                                <div>
                                                    <ChartComponent id={data.id} chartArea={{ border: { width: 0 } }} primaryXAxis={{ visible: false, lineStyle: { width: 0 }, majorGridLines: { width: 0 }, minorGridLines: { width: 0 } }} primaryYAxis={setYaxis(data.metricPoints)} width="92" height="30" margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                                                        <Inject services={[SplineAreaSeries]} />
                                                        <SeriesCollectionDirective>
                                                            <SeriesDirective dataSource={data.metricPoints} type="SplineArea" xName="x" yName="y" border={{ color: data.trend === 'up' ? '#16A34A' : '#DC2626', width: 2 }} fill={getGradientFill(data.trend)}></SeriesDirective>
                                                        </SeriesCollectionDirective>
                                                    </ChartComponent>
                                                    <svg width="0" height="0">
                                                        <defs>
                                                            <linearGradient id="gradient-up" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                                                                <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
                                                            </linearGradient>
                                                            <linearGradient id="gradient-down" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                                                                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-col !pb-6">
                                                <p className="text-xl mb-2 !leading-7 font-semibold text-gray-800 dark:text-gray-300 mt-1">{data.currentValue.toLocaleString()}</p>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-800 dark:text-gray-300">Since last week</p>
                                                    <div className={`flex gap-1 items-center font-semibold ${data.trend === 'up' ? 'text-green-700 dark:text-green-500' : 'text-red-600 dark:text-red-400'}`}>
                                                        <p className="text-sm">{data.currentPercentage}&#37;</p>
                                                        <span className={`e-icons ${data.trend === 'up' ? 'e-chevron-up-fill e-medium' : 'e-chevron-down-fill e-medium'}`}></span>
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
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="px-3 px-sm-4 px-xl-5 py-5">
                            <div className="row g-4 g-lg-3">
                                {metricsData.map((data, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-xl-3">
                                        <div className="e-card rounded-3 e-bigger">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header d-flex pb-0 pt-4 px-4 justify-content-between">
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <span className={`fs-6 text-secondary ${data.metricName === 'Patients' ? 'sf-icon-users' : data.metricName === 'New This Week' ? 'sf-icon-user-plus-01' : data.metricName === 'Critical Alerts' ? 'sf-icon-notification-bell-02' : 'e-icons e-day'}`}></span>
                                                        <p className="fw-medium text-body-secondary lh-base mb-0">{data.metricName}</p>
                                                    </div>
                                                    <div style={{ height: '30px' }}>
                                                        <ChartComponent id={data.id} chartArea={{ border: { width: 0 } }} primaryXAxis={{ visible: false, lineStyle: { width: 0 }, majorGridLines: { width: 0 }, minorGridLines: { width: 0 } }} primaryYAxis={setYaxis(data.metricPoints)} width="92" height="30" margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                                                            <Inject services={[SplineAreaSeries]} />
                                                            <SeriesCollectionDirective>
                                                                <SeriesDirective dataSource={data.metricPoints} type="SplineArea" xName="x" yName="y" border={{ color: data.trend === 'up' ? '#198754' : '#DC3545', width: 2 }} fill={getGradientFill(data.trend)}></SeriesDirective>
                                                            </SeriesCollectionDirective>
                                                        </ChartComponent>
                                                        <svg width="0" height="0">
                                                            <defs>
                                                                <linearGradient id="gradient-up" x1="0" y1="0" x2="0" y2="1">
                                                                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                                                                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
                                                                </linearGradient>
                                                                <linearGradient id="gradient-down" x1="0" y1="0" x2="0" y2="1">
                                                                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                                                                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="e-card-content d-flex flex-column pb-4 px-4 pt-0">
                                                    <p className="fs-5 lh-sm mb-2 fw-bold text-body-secondary mt-1">{data.currentValue.toLocaleString()}</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="text-body-secondary mb-0">Since last week</p>
                                                        <div className={`d-flex gap-1 align-items-center fw-bold ${data.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                                                            <p className="mb-0 lh-sm">{data.currentPercentage}&#37;</p>
                                                            <span className={`e-icons ${data.trend === 'up' ? 'e-chevron-up-fill e-medium' : 'e-chevron-down-fill e-medium'}`}></span>
                                                        </div>
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