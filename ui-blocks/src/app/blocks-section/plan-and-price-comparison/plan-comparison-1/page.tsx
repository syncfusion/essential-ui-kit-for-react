'use client';

import { useEffect, useState } from 'react';

export default function PlanComparison1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'plan-comparison-1' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div className="container overflow-x-auto m-auto" style={{ minHeight: '36rem' }}>
                            <div className="m-6 flex justify-center" style={{ minWidth: '700px' }}>
                                <table className="table w-full text-gray-900 dark:text-white table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="w-1/4 py-2 text-left text-xl font-medium">
                                                <h2>Compare Plans</h2>
                                            </th>
                                            <th className="py-2 px-4 w-1/4"></th>
                                            <th className="py-2 px-4 w-1/4"></th>
                                            <th className="py-2 px-4 w-1/4"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h2 className="my-4 font-semibold">Features</h2>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">Only 1 User</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">10 Projects</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">Agents Count</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3 font-normal text-sm">24</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3 font-normal text-sm">32</td>
                                            <td className="text-center py-3 font-normal text-sm">100</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">Unlimited Bandwidth</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">Unlimited Data</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                        </tr>
                                        <tr className="border-none">
                                            <td>
                                                <h2 className="my-4 font-semibold">Storage & Security</h2>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">5 GB Storage</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 py-3 text-sm font-normal px-2">Fully Security Suite</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                            <td className="text-center py-3"><span className="e-icons e-circle-check text-gray-700 dark:text-white w-6 h-6 mx-auto"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="table-responsive">
                            <div className="d-flex justify-content-center m-auto px-5 py-4" style={{ minWidth: "760px" }}>
                                <table className="table">
                                    <thead>
                                        <tr className="border-0">
                                            <th className="border-0 p-0 fs-4 fw-medium w-25 pb-3 font-semibold text-nowrap text-left text-body">
                                                Compare Plans
                                            </th>
                                            <th className="border-0 py-2 px-4 w-25"></th>
                                            <th className="border-0 py-2 px-4 w-25"></th>
                                            <th className="border-0 py-2 px-4 w-25"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-0">
                                        <tr className="border-0">
                                            <td className="border-0">
                                                <h2 className="my-3 fs-6 fw-bold text-body">Features</h2>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-0">
                                            <td className="border-0 border-end py-3 text-sm px-2 small text-body" style={{ width: "200px" }}>Only 1 User</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border py-3 text-sm px-2 small text-body">10 Projects</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 small text-body">Agents Count</td>
                                            <td className="text-center border-end py-3 text-body small">24</td>
                                            <td className="text-center border-end py-3 text-body small">32</td>
                                            <td className="text-center border-end-0 py-3 text-body small">100</td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 small text-body">Unlimited Bandwidth</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 small text-body">Unlimited Data</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-0">
                                            <td className="border-0">
                                                <h2 className="my-3 fs-6 fw-bold text-body">Storage & Security</h2>
                                            </td>
                                        </tr>
                                        <tr className="border-0 border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 small text-body">5 GB Storage</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 small text-body">Fully Security Suite</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
