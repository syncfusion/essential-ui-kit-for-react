'use client';

import { useEffect, useState } from 'react';

export default function Statistics1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: '$6,435',
            currentPercentage: 15
        },
        {
            metricName: 'Total Visitors',
            currentValue: '3,356',
            currentPercentage: 5
        },
        {
            metricName: 'Total Transactions',
            currentValue: '6,435',
            currentPercentage: -2
        },
        {
            metricName: 'Total Products',
            currentValue: '3,260',
            currentPercentage: 3
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-1' && blockData.theme) {
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
                                    <div key={index} className="e-card pt-6 e-bigger rounded-lg shadow-none">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !py-0 !justify-between items-center flex-row">
                                                <h4 className="text-base font-medium text-gray-700 dark:text-gray-200">{data.metricName}</h4>
                                                <p className="text-xl font-semibold text-gray-900 dark:text-white">{data.currentValue}</p>
                                            </div>
                                            <div className="e-card-content !pb-6 mt-2">
                                                <span className={`font-medium ${data.currentPercentage > 0 ? "text-green-700 dark:text-green-500" : "text-red-600 dark:text-red-400"}`}>{data.currentPercentage > 0 ? "+" : ""}{data.currentPercentage}&#37;</span>
                                                <span className="ml-2 text-gray-700 dark:text-gray-200">vs previous 27 days</span>
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
                                                <div className="e-card-header py-0 px-4 flex-row justify-content-between align-items-center">
                                                    <h4 className="fs-6 fw-medium text-body-secondary mb-0 lh-base">{data.metricName}</h4>
                                                    <p className="text-body fs-5 fw-bold mb-0 lh-sm">{data.currentValue}</p>
                                                </div>
                                                <div className="e-card-content px-4 pb-4 pt-2">
                                                    <span className={`fw-medium ${data.currentPercentage > 0 ? 'text-success' : 'text-danger'}`}>{data.currentPercentage > 0 ? '+' : ''}{data.currentPercentage}&#37;</span>
                                                    <span className="ms-2 text-body-secondary">vs previous 27 days</span>
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