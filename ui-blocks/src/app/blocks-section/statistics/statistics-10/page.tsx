'use client';

import { useEffect, useState } from "react";

export default function Statistics10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            metricName: 'Total Income',
            currentValue: '$480,500',
            currentPercentage: 12.95,
            trend: 'up',
            metricAssets: 'total-income.png'
        },
        {
            metricName: 'Total Profit',
            currentValue: '$72,375',
            currentPercentage: 12.95,
            trend: 'up',
            metricAssets: 'total-profit.png'
        },
        {
            metricName: 'Total Revenue',
            currentValue: '$425,000',
            currentPercentage: 5.18,
            trend: 'down',
            metricAssets: 'total-revenue.png'
        },
        {
            metricName: 'Total Conversion',
            currentValue: '10.87%',
            currentPercentage: 12.95,
            trend: 'up',
            metricAssets: 'total-conversion.png'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-10' && blockData.theme) {
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
                                    <div key={index} className="e-card e-bigger rounded-lg shadow-none !border-gray-300 dark:!border-gray-600">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !flex-col !pb-2 !pt-5">
                                                <span className={`e-avatar e-avatar-circle shrink-0 mb-6 h-11 w-11 ${data.metricAssets === "total-income.png" ? "bg-green-100 dark:bg-green-800" : ["total-profit.png", "total-revenue.png"].includes(data.metricAssets) ? "bg-orange-100 dark:bg-orange-800" : data.metricAssets === "total-conversion.png" ? "bg-cyan-100 dark:bg-sky-800" : ""}`}>
                                                    <img className="!h-6 !w-6" src={`/react/essential-ui-kit/blocks/assets/images/stats/financial-performance/${data.metricAssets}`} alt="financial logo" />
                                                </span>
                                                <div className="e-card-header-title">
                                                    <h3 className="font-medium text-gray-800 dark:text-gray-300 text-sm">{data.metricName}</h3>
                                                </div>
                                            </div>
                                            <div className="e-card-content !pb-5">
                                                <div className="gap-1 flex items-center">
                                                    <span className="text-2xl font-semibold text-gray-900 dark:text-white">{data.currentValue}</span>
                                                    <span className={`flex items-center font-medium e-badge e-badge-pill ${data.trend === "up" ? "e-badge-success" : "e-badge-danger"}`}>
                                                        <span className={`mr-1 e-icons ${data.trend === "up" ? "e-chevron-up-fill" : "e-chevron-down-fill"}`}></span>
                                                        {data.currentPercentage}&#37;
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Compared to last month</p>
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
                                                <div className="e-card-header d-flex flex-column pb-2 px-4 pt-0">
                                                    <span className={`e-avatar e-avatar-circle flex-shrink-0 mb-4 d-flex align-items-center justify-content-center ${data.metricAssets === 'total-income.png' ? 'bg-success-subtle' : ['total-profit.png', 'total-revenue.png'].includes(data.metricAssets) ? 'bg-warning-subtle' : data.metricAssets === 'total-conversion.png'? 'bg-info-subtle' : ''}`} style={{ height: '44px', width: '44px' }}>
                                                        <img src={`/react/essential-ui-kit/blocks/assets/images/stats/financial-performance/${data.metricAssets}`} alt="financial logo"style={{ height: '24px', width: '24px' }} />
                                                    </span>
                                                    <div className="e-card-header-title">
                                                        <h3 className="small fw-medium text-body-secondary mb-0 lh-base">{data.metricName}</h3>
                                                    </div>
                                                </div>
                                                <div className="e-card-content pb-4 px-4 pt-0">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="fs-4 lh-sm fw-bold text-body">{data.currentValue}</span>
                                                        <span className={`d-flex align-items-center font-medium e-badge e-badge-pill ${data.trend === 'up' ? 'e-badge-success' : 'e-badge-danger'}`}>
                                                            <span className={`${data.trend === 'up'? 'e-icons e-chevron-up-fill' : 'e-icons e-chevron-down-fill'} me-1`}></span>
                                                            {data.currentPercentage}&#37;
                                                        </span>
                                                    </div>
                                                    <p className="text-body text-opacity-50 mb-0 mt-2">Compared to last month</p>
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