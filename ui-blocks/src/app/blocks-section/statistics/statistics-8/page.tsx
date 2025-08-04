'use client';

import { useEffect, useState } from 'react';

export default function Statistics8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    
    const metricsData: any[] = [
        {
            metricName: 'Incoming Calls',
            callCount: 435,
            currentPercentage: 3.5,
            trend: 'up'
        },
        {
            metricName: 'Answered Calls',
            callCount: 245,
            currentPercentage: 4.2,
            trend: 'up'
        },
        {
            metricName: 'Abandoned Calls',
            callCount: 146,
            currentPercentage: -0.9,
            trend: 'down'
        },
        {
            metricName: 'Total Calls',
            callCount: 413,
            currentPercentage: 3.7,
            trend: 'up'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-8' && blockData.theme) {
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
                                    <div key={index} className="e-card pt-6 e-bigger rounded-lg shadow-none">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-start !flex-col">
                                                <span className={`e-avatar e-avatar-large rounded-lg ${data.metricName === "Incoming Calls" ? "bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400" : data.metricName === "Answered Calls" ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-500" : data.metricName === "Abandoned Calls" ? "bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-500" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300" }`}>
                                                    <span className={`text-2xl ${data.metricName === "Incoming Calls" ? "sf-icon-phone-call-incoming" : data.metricName === "Answered Calls" ? "sf-icon-phone-call-outgoing" : data.metricName === "Abandoned Calls" ? "sf-icon-phone-call-missed" : "sf-icon-phone"}`}></span>
                                                </span>
                                                <h4 className="text-base font-medium text-gray-700 dark:text-gray-200 mt-3">{data.metricName}</h4>
                                            </div>
                                            <div className="e-card-content !pb-6 !pt-2 flex">
                                                <span className="text-xl font-semibold text-gray-900 dark:text-white mr-2">{data.callCount}K</span>
                                                <span className={`gap-1 flex items-center ${data.trend === "up" ? "text-green-700 dark:text-green-500" : "text-red-600 dark:text-red-400"}`}>
                                                    {data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37;
                                                    <span className={`e-icons e-medium ${data.trend === "up" ? "e-arrow-up" : "e-arrow-down"}`}></span>
                                                </span>
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
                                        <div className="e-card rounded-3 e-bigger pt-4">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header py-0 px-4 d-flex flex-column align-items-start">
                                                    <span className={`e-avatar e-avatar-large rounded-3 ${data.metricName === 'Incoming Calls' ? 'bg-danger-subtle text-danger' : data.metricName === 'Answered Calls' ? 'bg-success-subtle text-success' : data.metricName === 'Abandoned Calls' ? 'bg-warning-subtle text-warning-emphasis' : 'bg-body-secondary text-secondary'}`}>
                                                        <span className={`fs-4 ${data.metricName === 'Incoming Calls' ? 'sf-icon-phone-call-incoming' : data.metricName === 'Answered Calls' ? 'sf-icon-phone-call-outgoing' : data.metricName === 'Abandoned Calls' ? 'sf-icon-phone-call-missed' : 'sf-icon-phone'}`}></span>
                                                    </span>
                                                    <h4 className="fs-6 fw-medium lh-base text-body-secondary mt-3 mb-0">{data.metricName}</h4>
                                                </div>
                                                <div className="e-card-content pb-4 px-4 pt-2 d-flex align-items-center">
                                                    <span className="fs-5 fw-bold lh-sm text-body me-2">{data.callCount}K</span>
                                                    <span className={`d-flex align-items-center gap-1 ${data.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                                                        {data.currentPercentage > 0 ? '+' : ''}{data.currentPercentage}&#37;
                                                        <span className={`e-icons e-medium ${data.trend === 'up' ? 'e-arrow-up' : 'e-arrow-down'}`}></span>
                                                    </span>
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