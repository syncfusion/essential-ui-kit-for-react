'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Statistics6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Followers',
            currentValue: 6025,
            previousValue: 6780,
            currentPercentage: 10.32,
            trend: 'up'
        },
        {
            metricName: 'Likes',
            currentValue: 72094,
            previousValue: 78001,
            currentPercentage: 7.57,
            trend: 'down'
        },
        {
            metricName: 'Comments',
            currentValue: 16009,
            previousValue: 14911,
            currentPercentage: 7.36,
            trend: 'up'
        },
        {
            metricName: 'Reach',
            currentValue: 890121,
            previousValue: 501780,
            currentPercentage: 77.39,
            trend: 'up'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-6' && blockData.theme) {
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
                                    <div key={index} className="e-card rounded-lg !border-gray-300 dark:!border-gray-600">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !justify-between items-center !py-3 !px-6 bg-gray-50 dark:bg-gray-700">
                                                <div className="e-card-header-title">
                                                    <h3 className="text-base font-medium text-gray-500 dark:text-gray-400">{data.metricName}</h3>
                                                </div>
                                                <ButtonComponent cssClass="e-flat e-icons e-more-horizontal-1 e-medium" type="button"></ButtonComponent>
                                            </div>
                                            <div className="e-card-content !py-6 !px-6">
                                                <p className="text-3xl !leading-10 font-semibold mb-4 xl:mb-6 text-gray-900 dark:text-white">{data.currentValue.toLocaleString()}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 dark:text-gray-400 mt-1 xl:mt-0">{data.previousValue.toLocaleString()} last month</span>
                                                    <div className={`e-badge flex items-center w-fit ${data.trend === 'up' ? 'e-badge-success' : 'e-badge-danger'}`}>
                                                        <span className={`e-icons mr-1 ${data.trend === 'up' ? 'e-arrow-up' : 'e-arrow-down'}`}></span>
                                                        <span>{data.currentPercentage}&#37;</span>
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
                                        <div className="e-card rounded-3 e-bigger shadow-lg">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header d-flex justify-content-between align-items-center py-3 px-4 bg-body-tertiary">
                                                    <div className="e-card-header-title">
                                                        <h3 className="fs-6 fw-medium text-body text-opacity-50 mb-0 lh-base">{data.metricName}</h3>
                                                    </div>
                                                    <ButtonComponent className="e-flat e-icons e-more-horizontal-1 e-medium" type="button"></ButtonComponent>
                                                </div>
                                                <div className="e-card-content p-4">
                                                    <p className="fs-3 lh-sm fw-bold text-body">{data.currentValue.toLocaleString()}</p>
                                                    <div className="d-flex justify-content-between w-auto align-items-center">
                                                        <span className="text-body text-opacity-50 mt-2 mt-xl-0">{data.previousValue.toLocaleString()} last month</span>
                                                        <span className={`e-badge d-flex flex-row align-items-center justify-content-start flex-grow-0 ${data.trend === 'up' ? 'e-badge-success' : 'e-badge-danger'}`} style={{ width: 'fit-content' }}>
                                                            <span className={`e-icons me-1 ${data.trend === 'up' ? 'e-arrow-up' : 'e-arrow-down'}`}></span>
                                                            <span>{data.currentPercentage}&#37;</span>
                                                        </span>
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