'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';

export default function PricingCard2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pricing-card-2' && blockData.theme) {
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
                        <div className="py-20">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Pricing Plans</h1>
                                <p className="mt-4 px-4 text-lg font-normal mb-8 sm:max-w-xl lg:max-w-full w-full mx-auto text-center text-gray-700 dark:text-gray-200">Get started in complete confidence. Our 30-day money-back guarantee means it’s risk-free.</p>
                                <div className="flex items-center justify-center gap-3 mb-12 text-base font-medium text-gray-700 dark:text-gray-200">
                                    <p>Monthly</p>
                                    <SwitchComponent cssClass="e-bigger" checked={true} style={{ width: '44px !important' }}></SwitchComponent>
                                    <p>Yearly</p>
                                </div>
                            </div>
                            <div className="flex justify-center px-4">
                                <div className="rounded-3xl overflow-hidden mx-4 md:mx-6 bg-white dark:bg-gray-900 shadow-none border border-gray-200 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="sm:w-4/5 px-6 py-8 mb-4 md:mb-0 text-gray-900 dark:text-white">
                                            <h2 className="text-2xl font-medium mb-2">Lifetime Membership</h2>
                                            <div className="text-base mb-5 md:pr-6">
                                                <p className="mb-5 text-gray-700 dark:text-gray-200">A great solution for beginners</p>
                                                <p>Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                            </div>
                                            <div className="text-base text-gray-700 dark:text-gray-200">
                                                <ul className="flex flex-col lg:flex-row gap-y-4 sm:gap-x-6">
                                                    <div className="grow">
                                                        <li className="mb-4 flex items-start">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>1 Website</span>
                                                        </li>
                                                        <li className="mb-4 flex items-start">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>~10000 visits monthly</span>
                                                        </li>
                                                        <li className="mb-4 flex items-start">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>50 GB SSD storage</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>Free CDN</span>
                                                        </li>
                                                    </div>
                                                    <div className="grow">
                                                        <li className="flex items-start mb-4">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>200,000 files and directories</span>
                                                        </li>
                                                        <li className="mb-4 flex items-start">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>Free pre-built templates</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="e-icons e-circle-check mr-3 text-lg text-green-700 dark:text-green-500"></span>
                                                            <span>Free domain ($79.00 value)</span>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 px-6 py-8 sm:w-96 border-gray-200 dark:border-gray-600 flex items-center">
                                            <div className="text-center grow">
                                                <span className="text-5xl font-bold leading-tight text-gray-900 dark:text-white mr-2">$149</span>
                                                <span className="text-3xl text-gray-700 dark:text-gray-300 line-through">$599</span>
                                                <div className="text-base text-gray-700 dark:text-gray-300 mt-2">
                                                    <p className="mb-6">per month $1,788 billed yearly</p>
                                                    <p className="mb-8 max-w-48 mx-auto">No monthly subscription, you only pay once.</p>
                                                    <ButtonComponent className="e-primary w-full text-lg" content="Choose a plan" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="mx-auto py-5">
                            <div className="text-center mb-5 px-3">
                                <h1 className="fw-bold mb-3 text-body">Pricing Plans</h1>
                                <p className="mb-4 mx-3 px-1 px-md-5 px-lg-0 text-light-emphasis">Get started in complete confidence. Our 30-day money-back guarantee means it’s risk-free.</p>
                                <div className="d-flex justify-content-center align-items-center gap-2 mb-5 pt-2">
                                    <p className="m-0 small text-light-emphasis">Monthly</p>
                                    <SwitchComponent cssClass="e-bigger" checked={true} style={{ width: "37px" }}></SwitchComponent>
                                    <p className="m-0 small text-light-emphasis">Yearly</p>
                                </div>
                            </div>
                            <div className="px-md-4 px-xl-5 px-3">
                                <div className="d-flex flex-column flex-sm-row border border-secondary-subtle rounded-4 overflow-hidden mx-xxl-5">
                                    <div className="col-sm-7 col-lg-8 pt-4 pb-4 px-3 px-md-4">
                                        <h4 className="mb-1 text-body fw-bold">Lifetime Membership</h4>
                                        <p className="mb-3 text-light-emphasis">A great solution for beginners</p>
                                        <div className="row">
                                            <span className="mb-4 d-block fs-6 col-xl-10 col-lg-11 pe-lg-0">Create one end product for a client, transfer that end product to your client, charge them for your services.</span>
                                        </div>
                                        <div className="fs-6 col-md-12">
                                            <ul className="d-flex flex-column flex-lg-row p-0">
                                                <div className="flex-grow-1">
                                                    <li className="d-flex align-items-start mb-3 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>1 Website</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-3 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>~10,000 visits monthly</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-3 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>50 GB SSD storage</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-3 mb-lg-0 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>Free CDN</span>
                                                    </li>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <li className="d-flex align-items-start mb-3 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>200,000 files and directories</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-3 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>Free pre-built templates</span>
                                                    </li>
                                                    <li className="d-flex align-items-start mb-3 text-light-emphasis">
                                                        <span className="e-icons e-circle-check me-2 text-success e-large"></span>
                                                        <span>Free domain ($79.00 value)</span>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-body-tertiary col-sm-5 col-lg-4 px-4 py-4 flex-grow-1 d-flex align-items-center justify-content-center">
                                        <div className="text-center w-100 my-2">
                                            <div className="mb-2 d-flex justify-content-center">
                                                <p className="mb-0 me-2 fw-bold text-body fs-1">$149</p>
                                                <span className="text-body-tertiary fw-normal fs-4 text-decoration-line-through mb-1 align-self-end">$599</span>
                                            </div>
                                            <p className="mb-4 text-light-emphasis">per month $1,788 billed yearly</p>
                                            <p className="mb-4 px-5 px-md-4 px-lg-5 mx-auto text-light-emphasis">No monthly subscription, you only pay once.</p>
                                            <div className="e-bigger">
                                                <ButtonComponent className="e-primary e-block" content="Choose a plan" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
