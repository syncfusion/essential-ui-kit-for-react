'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Statistics4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Calories',
            currentValue: 243,
            currentPercentage: 12,
            metricAssets: 'calories.png',
            unit: 'kcal',
            trend: 'up'
        },
        {
            metricName: 'Activity',
            currentValue: 56,
            currentPercentage: -12,
            metricAssets: 'activity.png',
            unit: 'min',
            trend: 'down'
        },
        {
            metricName: 'Total Distance',
            currentValue: 3,
            currentPercentage: 12,
            metricAssets: 'total-distance.png',
            unit: 'miles',
            trend: 'up'
        },
        {
            metricName: 'Sleep',
            currentValue: 7,
            currentPercentage: -12,
            metricAssets: 'sleep.png',
            unit: 'h',
            trend: 'down'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-4' && blockData.theme) {
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
                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-4 lg:grid-cols-4">
                                {metricsData.map((data, index) => (
                                    <div key={index} className="e-card pt-6 rounded-lg shadow-none">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-between mb-4 !px-6">
                                                <div className="e-card-header-caption !flex-row !item-center">
                                                    <img className="h-6 w-6" src={`/react/essential-ui-kit/blocks/assets/images/stats/activity-wellness-metrics/${data.metricAssets}`} alt="healthcare image" />
                                                    <div className="e-card-header-title">
                                                        <h3 className="text-base font-medium text-gray-900 dark:text-white ml-2 text-wrap">{data.metricName}</h3>
                                                    </div>
                                                </div>
                                                <span className={`gap-1 flex items-center text-xs ${data.trend === "up" ? "text-green-700 dark:text-green-500" : "text-red-600 dark:text-red-400"}`}>
                                                    {data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37;
                                                    <span className={`e-icons ${data.trend === "up" ? "e-arrow-up" : "e-arrow-down"}`}></span>
                                                </span>
                                            </div>
                                            <div className="e-card-content !px-6 !pb-6">
                                                <span className="text-2xl font-semibold text-gray-900 dark:text-white">{data.currentValue}</span>
                                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">{data.unit}</span>
                                            </div>
                                            <div className="e-card-separator"></div>
                                            <div className="e-card-actions !px-4 !py-2">
                                                <ButtonComponent cssClass="e-flat e-primary" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button" content="View Details"></ButtonComponent>
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
                                        <div className="e-card pt-4 rounded-3">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header d-flex justify-content-between align-items-center mb-3 py-0 px-4">
                                                    <div className="e-card-header-caption flex-row align-items-center">
                                                        <img className="me-2" src={`/react/essential-ui-kit/blocks/assets/images/stats/activity-wellness-metrics/${data.metricAssets}`} width="24" height="24" alt="healthcare image" />
                                                        <div className="e-card-header-title">
                                                            <h3 className="fs-6 lh-base fw-medium text-body text-wrap mb-0">{data.metricName}</h3>
                                                        </div>
                                                    </div>
                                                    <span className={`d-flex align-items-center gap-1 ${data.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                                                        {data.currentPercentage > 0 ? '+' : ''}{data.currentPercentage}&#37;
                                                        <span className={`e-icons ${data.trend === 'up' ? 'e-arrow-up' : 'e-arrow-down'}`}></span>
                                                    </span>
                                                </div>
                                                <div className="e-card-content px-4 pb-4 pt-0">
                                                    <span className="lh-sm fs-4 fw-bold text-body">{data.currentValue}</span>
                                                    <span className="fw-medium text-body text-opacity-50 ms-1">{data.unit}</span>
                                                </div>
                                                <div className="e-card-separator"></div>
                                                <div className="e-card-actions px-3 py-2">
                                                    <ButtonComponent className="e-flat e-primary" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button" content="View Details"></ButtonComponent>
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