'use client';

import { useEffect, useState } from 'react';

export default function Statistics12() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const metricsData: any[] = [
        {
            id: 1,
            metricName: 'Dream Car',
            currentValue: 26008,
            goal: 34678
        },
        {
            id: 2,
            metricName: 'House Savings',
            currentValue: 12567,
            goal: 25000
        },
        {
            id: 3,
            metricName: 'Motorcycle',
            currentValue: 12567,
            goal: 25000
        },
        {
            id: 4,
            metricName: 'Laptop',
            currentValue: 12567,
            goal: 25000
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-12' && blockData.theme) {
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
                                    <div key={index} className="e-card e-bigger rounded-lg shadow-none">
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !flex-col !pb-1">
                                                <span className={`e-avatar e-avatar-circle ${data.metricName === "Laptop" ? "bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400" : data.metricName === "House Savings" ? "bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-500" : data.metricName === "Motorcycle" ? "bg-cyan-100 dark:bg-sky-800 text-cyan-700 dark:text-sky-400" : "bg-primary-100 text-primary-600 dark:bg-primary-600 dark:text-primary-400"}`}>
                                                    <span className={`text-lg ${data.metricName === "Laptop" ? "sf-icon-laptop-01" : data.metricName === "House Savings" ? "e-home" : data.metricName === "Motorcycle" ? "sf-icon-motor-bike" : "e-travel-and-places"} ${["House Savings", "Dream Car"].includes(data.metricName) ? "e-icons" : ""}`}></span>
                                                </span>
                                                <div className="e-card-header-title">
                                                    <h3 className="text-base font-medium text-gray-700 dark:text-gray-200 mt-3">{data.metricName}</h3>
                                                </div>
                                            </div>
                                            <div className="e-card-content !pb-6">
                                            <p className="text-sm text-gray-700 dark:text-gray-200">{data.currentValue.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}{" "}of{" "}{data.goal.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</p>
                                                <div id={data.id} className="mt-4 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1 overflow-hidden">
                                                    <div className={`h-full rounded-full transition-all ${data.metricName === "Dream Car" ? "bg-primary-600 dark:bg-primary-400" : data.metricName === "House Savings" ? "bg-orange-700 dark:bg-orange-500" : data.metricName === "Motorcycle" ? "bg-cyan-700 dark:bg-sky-400" : "bg-red-600 dark:bg-red-400"}`} style={{ width: data.currentValue && data.goal ? `${(data.currentValue / data.goal) * 100}%` : "0%" }}></div>
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
                                        <div className="e-card rounded-3">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header d-flex flex-column pb-1 px-4 pt-4">
                                                    <span className={`e-avatar e-avatar-circle ${data.metricName === "Laptop" ? "bg-danger-subtle text-danger" : data.metricName === "House Savings" ? "bg-warning-subtle text-warning-emphasis" : data.metricName === "Motorcycle" ? "bg-info-subtle text-info-emphasis" : "bg-primary-subtle text-primary"}`}>
                                                        <span className={`fs-6 ${data.metricName === "Laptop" ? "sf-icon-laptop-01" : data.metricName === "House Savings" ? "e-home" : data.metricName === "Motorcycle" ? "sf-icon-motor-bike" : "e-travel-and-places"} ${["House Savings", "Dream Car"].includes(data.metricName) ? "e-icons" : ""}`}></span>
                                                    </span>
                                                    <div className="e-card-header-title">
                                                        <h3 className="fs-6 fw-medium text-body mt-3 mb-0 lh-base">{data.metricName}</h3>
                                                    </div>
                                                </div>
                                                <div className="e-card-content pt-0 px-4 pb-4">
                                                    <p className="text-body-secondary">{data.currentValue.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}{" "}of{" "}{data.goal.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</p>
                                                    <div id={data.id} className="mt-3 w-100 bg-body-secondary rounded overflow-hidden" style={{ height: "4px" }}>
                                                        <div className={`h-100 rounded transition-all ${data.metricName === "Dream Car" ? "bg-primary" : data.metricName === "House Savings" ? "bg-warning" : data.metricName === "Motorcycle" ? "bg-info" : "bg-danger"}`} style={{ width: data.currentValue && data.goal ? (data.currentValue / data.goal) * 100 + "%" : "0%" }}></div>
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