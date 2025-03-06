'use client';

import { useEffect, useState } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

export default function Statistics2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState(0);

    const metricsData: any[] = [
        {
            metricName: 'Website Visits',
            currentValue: '756',
            contextInfo: '',
            currentPercentage: '0.02%',
            total: '221,314'
        },
        {
            metricName: 'Bounce Rate',
            currentValue: '36.7%',
            contextInfo: 'Percentage of visitors who leave after viewing one page.',
            currentPercentage: '3.31',
            total: '34.12%'

        },
        {
            metricName: 'Page Views',
            currentValue: '1,593',
            contextInfo: '',
            currentPercentage: '0.02%',
            total: '651,029'
        },
        {
            metricName: 'Session',
            currentValue: '5.6',
            contextInfo: '',
            currentPercentage: '0.01%',
            total: '4,231'
        },
        {
            metricName: 'Per Visit Value',
            currentValue: '36.7%',
            contextInfo: 'Average revenue generated per visit.',
            currentPercentage: '3.31',
            total: '34,12%'
        }
    ];

    const isLastRowAndColumn = (index: number, length: number): any => {
        const columnCount = width < 576 ? 1 : width < 1024 ? 3 : 5;
        return {
            isLastRow: Math.floor(index / columnCount) === Math.ceil(length / columnCount) - 1,
            isLastColumn: (index + 1) % columnCount === 0
        };
    };

    const checkWidth = (): void => {
        setWidth(window.innerWidth);
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-2' && blockData.theme) {
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
        /* SB Code - End */
        setWidth(window.innerWidth);
        window.addEventListener('resize', checkWidth);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', checkWidth);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="px-4 sm:px-6 xl:px-11 py-12">
                            <div className="e-card rounded-lg grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 shadow-none !border-gray-300 dark:!border-gray-600">
                                {metricsData.map((data, index) => {
                                    const { isLastRow, isLastColumn } = isLastRowAndColumn(index, metricsData.length);
                                    return (
                                        <div key={index} className={`border-gray-200 dark:border-gray-600 ${!isLastRow ? 'border-b' : ''} ${!isLastColumn ? 'sm:border-r' : ''}`}>
                                            <div className="py-6 md:py-5">
                                                <div className="e-card-stacked">
                                                    <div className="e-card-header !justify-start !pt-0 !pb-2 space-x-1 !px-4 items-center">
                                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{data.metricName}</h3>
                                                        {data.contextInfo && (
                                                            <div className="flex items-center">
                                                                <TooltipComponent opensOn='Hover' content={data.contextInfo} width={210} style={{ height: '16px' }}>
                                                                    <span className="e-icons e-circle-info e-medium text-gray-500 dark:text-gray-400"></span>
                                                                </TooltipComponent>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="e-card-content !px-4 !pb-0">
                                                        <p className="text-xl !leading-7 font-semibold text-gray-900 dark:text-white">{data.currentValue}</p>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                                                            {data.currentPercentage} of Total:
                                                            <span className="font-medium text-gray-900 dark:text-white ml-1">{data.total}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="px-3 px-sm-4 px-xl-5 py-5">
                            <div className="e-card rounded-3">
                                <div className="row g-0 justify-content-start">
                                    {metricsData.map((data, index) => {
                                        const { isLastRow, isLastColumn } = isLastRowAndColumn(index, metricsData.length);
                                        return (
                                            <div key={index} className={`col-12 col-sm-4 col-lg-auto flex-lg-grow-1 ${!isLastRow ? 'border-bottom' : ''} ${!isLastColumn ? 'border-end' : ''}`}>
                                                <div className="p-4">
                                                    <div className="e-card-stacked">
                                                        <div className="e-card-header d-flex align-items-center justify-content-start pt-0 pb-2 px-0 gap-1">
                                                            <h3 className="small fw-medium text-body-secondary mb-0 lh-base">{data.metricName}</h3>
                                                            {data.contextInfo && (
                                                                <div className="d-flex align-items-center">
                                                                    <TooltipComponent opensOn='Hover' content={data.contextInfo} width={210} style={{ height: '16px' }}>
                                                                        <span className="e-icons e-circle-info e-medium text-secondary"></span>
                                                                    </TooltipComponent>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="e-card-content px-0 pb-0 pt-0">
                                                            <p className="fs-5 fw-bold text-body mb-2 lh-sm">{data.currentValue}</p>
                                                            <div className="text-body text-opacity-50">
                                                                {data.currentPercentage} of Total:
                                                                <span className="fw-medium text-body text-opacity-100 ms-1">{data.total}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}