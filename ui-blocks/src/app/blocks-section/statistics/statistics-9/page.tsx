'use client';

import { useEffect, useState } from 'react';

export default function Statistics9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Impressions',
            currentValue: '23.5K',
            currentPercentage: 3.5
        },
        {
            metricName: 'Active Users',
            currentValue: '432K',
            currentPercentage: -0.5
        },
        {
            metricName: 'User Engagements',
            currentValue: '89%',
            currentPercentage: 9
        },
        {
            metricName: 'Total Orders',
            currentValue: '56,312',
            currentPercentage: 4
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-9' && blockData.theme) {
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
                                    <div key={index} className="e-card pt-6 e-bigger rounded-lg shadow-none !border-gray-300 dark:!border-gray-600">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-between items-center">
                                                <div className="flex items-center">
                                                    <span className={`e-avatar e-avatar-small e-avatar-circle ${data.metricName === "Impressions" ? "bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-500" : data.metricName === "Active Users" ? "bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300" : data.metricName === "User Engagements" ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-500" : "bg-cyan-100 dark:bg-sky-800 text-cyan-700 dark:text-sky-400"}`}>
                                                        <span className={`text-base ${data.metricName === 'Impressions' ? 'e-critical-path' : ''} ${data.metricName === 'Active Users' ? 'sf-icon-users' : ''} ${data.metricName === 'User Engagements' ? 'e-chart' : ''} ${data.metricName === 'Total Orders' ? 'sf-icon-cart' : ''} ${data.metricName === 'Impressions' || data.metricName === 'User Engagements' ? 'e-icons' : ''}`}></span>
                                                    </span>
                                                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-100 ml-3">{data.metricName}</h4>
                                                </div>
                                                <span className={`gap-1 flex items-center ${data.currentPercentage > 0 ? "text-green-700 dark:text-green-500" : "text-red-600 dark:text-red-400"}`}>
                                                    <span className={`e-icons e-medium ${data.currentPercentage > 0 ? "e-arrow-up" : "e-arrow-down"}`}></span>{data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37;
                                                </span>
                                            </div>
                                            <div className="e-card-content !pb-6 !pt-4 flex items-center md:items-start lg:items-center md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-2">
                                                <span className="text-xl font-semibold text-gray-900 dark:text-white">{data.currentValue}</span>
                                                <span className="text-gray-500 dark:text-gray-300">vs last 7 days</span>
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
                                        <div className="e-card rounded-3 e-bigger pt-4">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header py-0 px-4 justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <span className={`e-avatar e-avatar-small rounded-circle d-flex align-items-center justify-content-center ${data.metricName === 'Impressions' ? 'bg-warning-subtle text-warning-emphasis' : data.metricName === 'Active Users' ? 'bg-primary-subtle text-primary' : data.metricName === 'User Engagements' ? 'bg-success-subtle text-success' : 'bg-info-subtle text-info-emphasis'}`}>
                                                            <span className={`fs-6 ${data.metricName === 'Impressions' ? 'e-critical-path' : ''} ${data.metricName === 'Active Users' ? 'sf-icon-users' : ''} ${data.metricName === 'User Engagements' ? 'e-chart' : ''} ${data.metricName === 'Total Orders' ? 'sf-icon-cart' : ''} ${data.metricName === 'Impressions' || data.metricName === 'User Engagements' ? 'e-icons' : ''}`}></span>
                                                        </span>
                                                        <h4 className="fs-6 lh-base fw-medium text-body-secondary ms-2 ps-1 mb-0">{data.metricName}</h4>
                                                    </div>
                                                    <span className={`d-flex align-items-center gap-1 ${data.currentPercentage > 0 ? 'text-success' : 'text-danger'}`}>
                                                        <span className={`e-icons e-medium ${data.currentPercentage > 0 ? 'e-arrow-up' : 'e-arrow-down'}`}></span>{data.currentPercentage > 0 ? '+' : ''}{data.currentPercentage}&#37;
                                                    </span>
                                                </div>
                                                <div className="e-card-content pb-4 px-4 pt-3 d-flex align-items-center align-items-md-start align-items-lg-center flex-md-column flex-lg-row gap-2 gap-md-1 gap-lg-2">
                                                    <span className="fs-5 lh-sm fw-bold text-body">{data.currentValue}</span>
                                                    <span className="text-body text-opacity-50">vs last 7 days</span>
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