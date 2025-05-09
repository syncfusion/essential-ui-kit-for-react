'use client';

import { useEffect, useState } from 'react';

export default function Statistics3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: '$825,000',
            currentPercentage: 26,
            trend: 'up'
        },
        {
            metricName: 'Total Leads',
            currentValue: '99',
            currentPercentage: -9,
            trend: 'down'
        },
        {
            metricName: 'High Interest Leads',
            currentValue: '36',
            currentPercentage: 69,
            trend: 'up'
        },
        {
            metricName: 'Qualified Leads',
            currentValue: '17',
            currentPercentage: -21,
            trend: 'down'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-3' && blockData.theme) {
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
                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-4 xl:grid-cols-4 grow">
                                {metricsData.map((data, index) => (
                                    <div key={index} className="e-card pt-6 e-bigger rounded-lg shadow-none">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-between mb-1">
                                                <div className="e-card-header-title">
                                                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">{data.metricName}</h3>
                                                </div>
                                                <span className="e-avatar e-avatar-circle e-avatar-small">
                                                    <span className={`text-base text-gray-500 dark:text-gray-300 ${{ "Total Revenue": "sf-icon-dollar", "Total Leads": "sf-icon-users", "High Interest Leads": "sf-icon-users", "Qualified Leads": "sf-icon-user-tick-02" }[data.metricName] || ""}`}></span>
                                                </span>
                                            </div>
                                            <div className="e-card-content !pb-6">
                                                <p className="text-xl !leading-7 font-semibold mb-3 text-gray-900 dark:text-white">{data.currentValue}</p>
                                                <div className="flex">
                                                    <span className="flex items-center">
                                                        <span className={`e-badge e-badge-circle shrink-0 ${data.trend === "up" ? "e-badge-success sf-icon-analysis-arrow-up" : "e-badge-danger sf-icon-analysis-arrow-down"}`}></span>
                                                        <span className={`text-sm font-medium ml-1 ${data.trend === "up" ? "text-green-700 dark:text-green-500" : "text-red-600 dark:text-red-400"}`}>
                                                            {data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37;
                                                        </span>
                                                    </span>
                                                    <p className="text-sm text-gray-700 dark:text-gray-200 ml-2">compared to last week</p>
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
                                        <div className="e-card e-bigger rounded-3 pt-4">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header d-flex justify-content-between px-4 mb-1 py-0">
                                                    <div className="e-card-header-title">
                                                        <h3 className="small fw-medium text-body-secondary mb-0 lh-base">{data.metricName}</h3>
                                                    </div>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small">
                                                        <span className={`fs-6 ${{ "Total Revenue": "sf-icon-dollar", "Total Leads": "sf-icon-users", "High Interest Leads": "sf-icon-users", "Qualified Leads": "sf-icon-user-tick-02" }[data.metricName] || ""}`}></span>
                                                    </span>
                                                </div>
                                                <div className="e-card-content pb-4 px-4 pt-0">
                                                    <p className="fs-5 fw-bold mb-3 lh-sm text-body">{data.currentValue}</p>
                                                    <div className="d-flex">
                                                        <span className="d-flex align-items-center">
                                                            <span className={`e-badge e-badge-circle flex-shrink-0 small ${data.trend === "up" ? "e-badge-success sf-icon-analysis-arrow-up" : "e-badge-danger sf-icon-analysis-arrow-down"}`}></span>
                                                            <span className={`fw-medium ms-1 ${data.trend === "up" ? "text-success" : "text-danger"}`}>
                                                                {data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37;
                                                            </span>
                                                        </span>
                                                        <p className="text-body-secondary ms-2 mb-0">compared to last week</p>
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