'use client';

import { useEffect, useState } from "react";

export default function Statistics7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: 4185.82,
            valueDescription: '+1.23% (45.32)'
        },
        {
            metricName: 'Trending Volume',
            currentValue: 2.38,
            valueDescription: 'Shares Traded'
        },
        {
            metricName: 'Market Breadth',
            currentValue: 1.5,
            valueDescription: 'Advance / Decline Ratio'
        },
        {
            metricName: 'VIX',
            currentValue: 18.62,
            valueDescription: '-0.54 (-282%)'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-7' && blockData.theme) {
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
                                    <div key={index} className="e-card pt-6 e-bigger rounded-lg shadow-none !border-gray-300 dark:!border-gray-600">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-between items-center">
                                                <h4 className="text-base text-gray-800 dark:text-gray-100 font-medium">{data.metricName}</h4>
                                                <span className={`text-2xl leading-none ${data.metricName === 'Total Revenue' ? 'text-green-700 dark:text-green-500 sf-icon-arrow-missed-right' : ''} ${data.metricName === 'Market Breadth' ? 'text-orange-700 dark:text-orange-500 sf-icon-pie-chart' : ''} ${data.metricName === 'Trending Volume' ? 'text-indigo-600 dark:text-indigo-400 e-chart' : ''} ${data.metricName === 'VIX' ? 'text-gray-500 dark:text-gray-300 e-critical-path' : ''} ${['Trending Volume', 'VIX'].includes(data.metricName) ? 'e-icons' : ''}`}></span>
                                            </div>
                                            <div className="e-card-content !pb-6">
                                                <p className="mt-2 text-xl !leading-7 font-semibold text-gray-900 dark:text-white">{new Intl.NumberFormat().format(data.currentValue)}</p>
                                                <p className={`mt-1 font-medium ${data.metricName === "Total Revenue" ? "text-green-700 dark:text-green-500" : data.metricName === "VIX" ? "text-red-600 dark:text-red-400" : "text-gray-800 dark:text-gray-100"}`}>{data.valueDescription}</p>
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
                                                <div className="e-card-header py-0 px-4 d-flex justify-content-between align-items-center">
                                                    <h4 className="fs-6 text-body-secondary lh-base fw-medium mb-0">{data.metricName}</h4>
                                                    <span className={`fs-4 ${data.metricName === 'Total Revenue' ? 'text-success sf-icon-arrow-missed-right' : ''} ${data.metricName === 'Market Breadth' ? 'text-warning sf-icon-pie-chart' : ''} ${data.metricName === 'Trending Volume' ? 'text-primary e-chart' : ''} ${data.metricName === 'VIX' ? 'text-secondary e-critical-path' : ''} ${['Trending Volume', 'VIX'].includes(data.metricName) ? 'e-icons' : ''}`}></span>
                                                </div>
                                                <div className="e-card-content pb-4 pt-0 px-4">
                                                    <p className="mt-2 fs-5 lh-sm fw-bold text-body mb-1">{new Intl.NumberFormat().format(data.currentValue)}</p>
                                                    <p className={`fw-medium mb-0 lh-base ${data.metricName === 'Total Revenue' ? 'text-success' : ''} ${data.metricName === 'VIX' ? 'text-danger' : ''} ${['Market Breadth', 'Trending Volume'].includes(data.metricName) ? 'text-body-secondary' : ''}`}>{data.valueDescription}</p>
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