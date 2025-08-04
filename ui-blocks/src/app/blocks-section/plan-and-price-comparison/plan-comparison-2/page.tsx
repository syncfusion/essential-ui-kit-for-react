'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function PlanComparison2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'plan-comparison-2' && blockData.theme) {
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
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id={styles["plan-comparison"]} className="overflow-x-auto m-auto">
                            <div className="flex justify-center min-w-max mx-1 my-6 sm:mx-6">
                                <table className="table w-full table-bordered">
                                    <thead className="bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900">
                                        <tr className="bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900">
                                            <th className="border-none align-baseline relative" style={{ width: '155px' }}>
                                                <div className="align-baseline text-left font-medium p-3 text-lg text-gray-900 dark:text-white bg-white dark:bg-gray-900 absolute top-0 left-0 right-0 bottom-0">Compare Plans</div>
                                            </th>
                                            <th className="text-center w-52 font-medium text-base border-l border-r border-gray-200 dark:border-gray-600">
                                                <div className="e-card rounded-none bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900 border-none shadow-none e-bigger py-2">
                                                    <div className="e-card-header !px-3">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title font-medium text-lg text-gray-900 dark:text-white">Single</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content mb-4 mt-2 !px-3">
                                                        <div className="mt-3 mb-8 flex justify-center">
                                                            <h2 className="text-4xl sm:text-5xl text-gray-900 dark:text-white leading-tight font-bold w-44 sm:w-56">$69<span className="font-normal text-gray-700 dark:text-gray-200 text-2xl sm:text-3xl ml-2 line-through">$199</span></h2>
                                                        </div>
                                                        <p className="text-gray-700 text-base font-normal dark:text-gray-200 mx-auto" style={{ maxWidth: '225px' }}>No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions leading-9 !px-3">
                                                        <ButtonComponent className="e-primary text-lg font-medium e-outline w-full" content="Choose a plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center w-52 font-medium text-base border-r border-gray-200 dark:border-gray-600">
                                                <div className="e-card bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900 rounded-none border-none shadow-none e-bigger py-2">
                                                    <div className="e-card-header !px-3">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title font-medium text-lg text-gray-900 dark:text-white">Premium</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content mb-4 mt-2 !px-3">
                                                        <div className="mt-3 mb-8 flex justify-center">
                                                            <h2 className="text-4xl sm:text-5xl leading-tight text-gray-900 dark:text-white font-bold w-44 sm:w-56">$149<span className="font-normal text-gray-700 dark:text-gray-200 text-2xl sm:text-3xl ml-2 line-through">$599</span></h2>
                                                        </div>
                                                        <p className="text-gray-700 text-base font-normal dark:text-gray-200 mx-auto" style={{ maxWidth: '225px' }}>No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions leading-9 !px-3">
                                                        <ButtonComponent className="e-primary text-lg font-medium w-full" content="Choose a plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center w-52 font-medium text-base">
                                                <div className="e-card rounded-none bg-white dark:bg-gray-900 hover:bg-white hover:dark:bg-gray-900 border-none shadow-none e-bigger py-2">
                                                    <div className="e-card-header !px-3">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title font-medium text-lg text-gray-900 dark:text-white">Business</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content mb-4 mt-2 !px-3">
                                                        <div className="mt-3 mb-8 flex justify-center">
                                                            <h2 className="text-4xl sm:text-5xl text-gray-900 dark:text-white leading-tight font-bold w-44 sm:w-56">$249<span className="font-normal text-gray-700 dark:text-gray-200 text-2xl sm:text-3xl ml-2 line-through">$699</span></h2>
                                                        </div>
                                                        <p className="text-gray-700 text-base font-normal dark:text-gray-200 mx-auto" style={{ maxWidth: '225px' }}>No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions leading-9 !px-3">
                                                        <ButtonComponent className="e-primary text-lg font-medium e-outline w-full" content="Choose a plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-600 border-none">
                                            <td><h2 className="my-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 pl-2">Features</h2></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">Only 1 User</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">10 Projects</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">Agents Count</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 font-normal text-sm">24</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 font-normal text-sm">32</td>
                                            <td className="text-center py-3 font-normal text-sm text-gray-900 dark:text-white">100</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">Unlimited Bandwidth</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">Unlimited Data</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600 border-none">
                                            <td><h2 className="my-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 pl-2">Storage & Security</h2></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">5 GB Storage</td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center border-r border-gray-200 dark:border-gray-600 py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                            <td className="text-center py-3"><span className="e-icons text-gray-700 dark:text-white e-circle-check e-medium"></span></td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-600">
                                            <td className="border-r border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white py-3 text-sm font-normal px-2 bg-gray-50 dark:bg-gray-950">Fully Security Suite</td>
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
                        <div id={styles["plan-comparison"]} className="table-responsive">
                            <div className="d-flex justify-content-center m-auto px-1 px-sm-3 py-4" style={{ minWidth: '740px' }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="align-baseline p-0 border-0 border-end" style={{ width: '165px' }}>
                                                <div className="align-baseline text-left fw-medium lh-lg p-2 fs-5 text-body">
                                                    <div className="small">Compare Plans</div>
                                                </div>
                                            </th>
                                            <th className="text-center fw-medium fs-5 p-0 border-0 border-end" style={{ width: '10rem' }}>
                                                <div className="e-card e-bigger lh-base border-0 shadow-none p-2 p-sm-3">
                                                    <div className="e-card-header p-0">
                                                        <div className="e-card-header-caption">
                                                            <div className="card-title fw-medium fs-6">Single</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content p-0">
                                                        <h2 className="fs-1 my-3 fw-bold text-body mx-auto" style={{ width: '153px' }}>$69<span className="fw-normal text-body-tertiary fs-4 ms-2 text-decoration-line-through mt-1">$199</span></h2>
                                                        <p className="fs-6 mx-auto fw-normal text-center text-light-emphasis m-0" style={{ maxWidth: '225px' }}>No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions p-0">
                                                        <div className="mt-4 e-bigger">
                                                            <ButtonComponent className="e-primary e-outline e-block" content="Choose a plan" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center fw-medium fs-5 p-0 border-0 border-end" style={{ width: '10rem' }}>
                                                <div className="e-card e-bigger lh-base border-0 shadow-none p-2 p-sm-3">
                                                    <div className="e-card-header p-0">
                                                        <div className="e-card-header-caption">
                                                            <div className="card-title fw-medium fs-6 text-body">Premium</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content p-0">
                                                        <h2 className="fs-1 my-3 fw-bold text-body mx-auto" style={{ width: '153px' }}>$149<span className="fw-normal text-body-tertiary fs-4 ms-2 text-decoration-line-through mt-1">$599</span>
                                                        </h2>
                                                        <p className="fs-6 mx-auto fw-normal text-center text-light-emphasis m-0" style={{ maxWidth: '225px' }}>No monthly subscription, you only pay once.</p>
                                                    </div>
                                                    <div className="e-card-actions p-0">
                                                        <div className="mt-4 e-bigger">
                                                            <ButtonComponent className="e-primary e-block" content="Choose a plan" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="text-center fw-medium fs-5 p-0 border-0" style={{ width: '10rem' }}>
                                                <div className="e-card e-bigger lh-base border-0 shadow-none p-2 p-sm-3">
                                                    <div className="e-card-header p-0">
                                                        <div className="e-card-header-caption">
                                                            <div className="card-title fw-medium fs-6 text-body">Business</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content p-0">
                                                        <h2 className="fs-1 my-3 fw-bold text-body mx-auto" style={{ width: '153px' }}>$249<span className="fw-normal text-body-tertiary fs-4 ms-2 text-decoration-line-through mt-1">$699</span></h2>
                                                        <p className="fs-6 mx-auto fw-normal text-center text-light-emphasis m-0" style={{ maxWidth: '225px' }}>No monthly subscription, you only pay once.</p>
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
                                            <td className="border-0 ps-0"><h2 className="my-3 fs-6 fw-bold text-body ps-2">Features</h2></td>
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
                                            <td className="border-0 ps-0"><h2 className="my-3 fs-6 fw-bold text-body ps-2">Storage & Security</h2></td>
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
