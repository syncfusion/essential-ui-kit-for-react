'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function PlanComparison2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'plan-comparison-2' && blockData.theme) {
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
                        <div className="overflow-x-auto m-auto">
                            <div className="flex justify-center min-w-max m-6">
                                <table className="table w-full table-bordered">
                                    <thead className="bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900">
                                        <tr className="bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900">
                                            <th className="border-none w-52 align-baseline">
                                                <div className="align-baseline text-left font-medium p-5 text-lg text-gray-900 dark:text-white">Compare Plans</div>
                                            </th>
                                            <th className="text-center w-72 font-medium text-base border-l border-r border-gray-200 dark:border-gray-600">
                                                <div className="e-card rounded-none bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900 border-none shadow-none e-bigger py-2">
                                                    <div className="e-card-header">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title font-medium text-lg text-gray-900 dark:text-white">Single</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content mb-4 mt-2">
                                                        <div className="mt-3 mb-8">
                                                            <h2 className="text-5xl text-gray-900 dark:text-white leading-tight font-bold">$69<span className="font-normal text-gray-700 dark:text-gray-200 text-3xl ml-2 line-through">$199</span></h2>
                                                        </div>
                                                        <p className="text-gray-700 text-base px-6 font-normal dark:text-gray-200">No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions leading-9">
                                                        <ButtonComponent className="e-primary text-lg font-medium e-outline w-full" content="Choose a plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center w-72 font-medium text-base border-r border-gray-200 dark:border-gray-600">
                                                <div className="e-card bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900 rounded-none border-none shadow-none e-bigger py-2">
                                                    <div className="e-card-header">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title font-medium text-lg text-gray-900 dark:text-white">Premium</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content mb-4 mt-2">
                                                        <div className="mt-3 mb-8">
                                                            <h2 className="text-5xl leading-tight text-gray-900 dark:text-white font-bold">$149<span className="font-normal text-gray-700 dark:text-gray-200 text-3xl ml-2 line-through">$599</span></h2>
                                                        </div>
                                                        <p className="text-gray-700 text-base px-6 font-normal dark:text-gray-200">No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions leading-9">
                                                        <ButtonComponent className="e-primary text-lg font-medium w-full" content="Choose a plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center w-72 font-medium text-base">
                                                <div className="e-card rounded-none bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900 border-none shadow-none e-bigger py-2">
                                                    <div className="e-card-header">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title font-medium text-lg text-gray-900 dark:text-white">Business</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content mb-4 mt-2">
                                                        <div className="mt-3 mb-8">
                                                            <h2 className="text-5xl text-gray-900 dark:text-white leading-tight font-bold">$249<span className="font-normal text-gray-700 dark:text-gray-200 text-3xl ml-2 line-through">$699</span></h2>
                                                        </div>
                                                        <p className="text-gray-700 text-base px-6 font-normal dark:text-gray-200">No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions leading-9">
                                                        <ButtonComponent className="e-primary text-lg font-medium e-outline w-full" content="Choose a plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-600 border-none">
                                            <td><h2 className="my-4 font-semibold text-gray-900 dark:text-white">Features</h2></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">Only 1 User</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">10 Projects</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">Agents Count</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 font-normal text-sm">24</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 font-normal text-sm">32</td>
                                            <td className="text-center py-3 font-normal text-sm text-gray-900 dark:text-white">100</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">Unlimited Bandwidth</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">Unlimited Data</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600 border-none">
                                            <td><h2 className="my-4 font-semibold text-gray-900 dark:text-white">Storage & Security</h2></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">5 GB Storage</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2">Fully Security Suite</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
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
                            <div className="d-flex justify-content-center m-auto px-5 py-4" style={{ minWidth: '1050px' }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="align-baseline w-25 p-0 border-0 border-end">
                                                <div className="align-baseline text-left fw-medium lh-lg p-4 fs-6 text-body">
                                                    <div>Compare Plans</div>
                                                </div>
                                            </th>
                                            <th className="text-center fw-medium fs-5 w-25 p-0 border-0 border-end">
                                                <div className="e-card e-bigger lh-base border-0 shadow-none p-4">
                                                    <div className="e-card-header p-0">
                                                        <div className="e-card-header-caption">
                                                            <div className="card-title fw-medium fs-6">Single</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content p-0">
                                                        <h2 className="fs-1 my-3 fw-bold text-body">$69<span className="fw-normal text-body-tertiary fs-4 ms-2 text-decoration-line-through mt-1">$199</span></h2>
                                                        <p className="fs-6 w-75 mx-auto fw-normal text-center text-light-emphasis m-0">No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions p-0">
                                                        <div className="mt-4 e-bigger">
                                                            <ButtonComponent className="e-primary e-outline e-block" content="Choose a plan" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center fw-medium fs-5 w-25 p-0 border-0 border-end">
                                                <div className="e-card e-bigger lh-base border-0 shadow-none p-4">
                                                    <div className="e-card-header p-0">
                                                        <div className="e-card-header-caption">
                                                            <div className="card-title fw-medium fs-6 text-body">Premium</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content p-0">
                                                        <h2 className="fs-1 my-3 fw-bold text-body">$149<span className="fw-normal text-body-tertiary fs-4 ms-2 text-decoration-line-through mt-1">$599</span>
                                                        </h2>
                                                        <p className="fs-6 w-75 mx-auto fw-normal text-center text-light-emphasis m-0">No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions p-0">
                                                        <div className="mt-4 e-bigger">
                                                            <ButtonComponent className="e-primary e-block" content="Choose a plan" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center fw-medium fs-5 w-25 p-0 border-0">
                                                <div className="e-card e-bigger lh-base border-0 shadow-none p-4">
                                                    <div className="e-card-header p-0">
                                                        <div className="e-card-header-caption">
                                                            <div className="card-title fw-medium fs-6 text-body">Business</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content p-0">
                                                        <h2 className="fs-1 my-3 fw-bold text-body">$249<span className="fw-normal text-body-tertiary fs-4 ms-2 text-decoration-line-through mt-1">$699</span></h2>
                                                        <p className="fs-6 w-75 mx-auto fw-normal text-center text-light-emphasis m-0">No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions p-0">
                                                        <div className="mt-4 e-bigger">
                                                            <ButtonComponent className="e-outline e-primary e-block" content="Choose a plan" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-0">
                                        <tr className="border-0">
                                            <td className="border-0 ps-0"><h2 className="my-3 fs-6 fw-bold text-body">Features</h2></td>
                                        </tr>
                                        <tr className="border-bottom border-0">
                                            <td className="border-0 border-end py-3 text-sm px-2 text-body">Only 1 User</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border py-3 text-sm px-2 text-body">10 Projects</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 text-body">Agents Count</td>
                                            <td className="text-center border-end py-3 text-body">24</td>
                                            <td className="text-center border-end py-3 text-body">32</td>
                                            <td className="text-center border-end-0 py-3 text-body">100</td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 text-body">Unlimited Bandwidth</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 text-body">Unlimited Data</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-0">
                                            <td className="border-0 ps-0"><h2 className="my-3 fs-6 fw-bold text-body">Storage & Security</h2></td>
                                        </tr>
                                        <tr className="border-0 border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 text-body">5 GB Storage</td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                            <td className="text-center border-end-0 py-3"><span className="e-icons text-body-secondary e-circle-check"></span></td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="border-start-0 border-end py-3 text-sm px-2 text-body">Fully Security Suite</td>
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
