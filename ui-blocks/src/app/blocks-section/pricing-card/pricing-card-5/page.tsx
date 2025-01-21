'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';

export default function PricingCard5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pricing-card-5' && blockData.theme) {
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
                        <div className="max-w-screen-xl mx-auto py-20">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Pricing Plans</h1>
                                <p className="mt-4 px-4 text-lg font-normal mb-8 sm:max-w-xl lg:max-w-full w-full mx-auto text-center text-gray-700 dark:text-gray-200">Get started in complete confidence. Our 30-day money-back guarantee means it’s risk-free.</p>
                                <div className="flex items-center justify-center gap-3 mb-12">
                                    <p className="text-gray-700 dark:text-gray-200 text-base font-medium">Monthly</p>
                                    <SwitchComponent cssClass="e-bigger" checked={true} style={{ width: "44px !important" }}></SwitchComponent>
                                    <p className="text-gray-700 dark:text-gray-200 text-base font-medium">Yearly</p>
                                </div>
                            </div>
                            <div className="grid gap-6 mx-4 md:mx-0 md:px-6 lg:grid-cols-3 sm:grid-cols-2 xl:w-11/12 xl:mx-auto box-border">
                                <div className="e-card e-bigger pb-2 pt-8 rounded-3xl shadow-none hover:border-primary-600 dark:hover:border-primary-400">
                                    <div className="e-card-content">
                                        <div>
                                            <div className="flex flex-wrap justify-between">
                                                <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-5 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900"></span>
                                            </div>
                                            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Single</h1>
                                            <p className="mt-2 text-gray-700 dark:text-gray-200 text-base font-normal truncate">A great solution for beginners</p>
                                        </div>
                                        <div className="my-5 text-gray-900 dark:text-white">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h2 className="text-5xl font-bold leading-tight">$69</h2>
                                                <span className="line-through text-gray-500 dark:text-gray-400 font-normal text-3xl mt-1">$199</span>
                                            </div>
                                            <p className="text-base font-normal text-gray-700 dark:text-gray-200">per month $828 billed yearly</p>
                                        </div>
                                        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-200">Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent className="w-full text-lg" cssClass="e-outline e-primary" content="Choose a plan" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-bigger pb-2 pt-8 rounded-3xl shadow-none hover:border-primary-600 dark:hover:border-primary-400">
                                    <div className="e-card-content">
                                        <div>
                                            <div className="flex flex-wrap justify-between">
                                                <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-5 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900"></span>
                                                <span className="e-badge e-badge-pill e-bigger bg-orange-100 dark:bg-orange-100 text-orange-700 dark:text-orange-600">Most popular</span>
                                            </div>
                                            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Premium</h1>
                                            <p className="mt-2 text-gray-700 dark:text-gray-200 text-base font-normal truncate">All you need to create your website</p>
                                        </div>
                                        <div className="my-5 text-gray-900 dark:text-white">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h2 className="text-5xl font-bold leading-tight">$149</h2>
                                                <span className="line-through text-gray-500 dark:text-gray-400 font-normal text-3xl mt-1">$599</span>
                                            </div>
                                            <p className="text-base font-normal text-gray-700 dark:text-gray-200">per month $1,788 billed yearly</p>
                                        </div>
                                        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-200">Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent className="w-full text-lg" cssClass="e-primary" content="Choose a plan" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-bigger pb-2 pt-8 rounded-3xl shadow-none hover:border-primary-600 dark:hover:border-primary-400">
                                    <div className="e-card-content">
                                        <div>
                                            <div className="flex flex-wrap justify-between">
                                                <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-5 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900"></span>
                                            </div>
                                            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Business</h1>
                                            <p className="mt-2 text-gray-700 dark:text-gray-200 text-base font-normal truncate">Level up with more powerful features</p>
                                        </div>
                                        <div className="my-5 text-gray-900 dark:text-white">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h2 className="text-5xl font-bold leading-tight">$249</h2>
                                                <span className="line-through text-gray-500 dark:text-gray-400 font-normal text-3xl mt-1">$699</span>
                                            </div>
                                            <p className="text-base font-normal text-gray-700 dark:text-gray-200">per month $2,988 billed yearly</p>
                                        </div>
                                        <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-200">Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent className="w-full text-lg" cssClass="e-outline e-primary" content="Choose a plan" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="container-xl m-xl-auto px-3 px-md-4 py-5">
                            <div className="text-center">
                                <h1 className="fw-bold fs-1 mb-3 text-body">Pricing Plans</h1>
                                <p className="mb-4 mx-3 px-1 px-md-5 px-lg-0 text-light-emphasis">Get started in complete confidence. Our 30-day money-back guarantee means it’s risk-free.</p>
                                <div className="d-flex justify-content-center align-items-center gap-2 mb-5 pt-2">
                                    <p className="m-0 small text-light-emphasis">Monthly</p>
                                    <SwitchComponent cssClass="e-bigger" checked={true} style={{ width: "37px" }} ></SwitchComponent>
                                    <p className="m-0 small text-light-emphasis">Yearly</p>
                                </div>
                            </div>
                            <div className="row card-container">
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
                                    <div className="e-card e-bigger px-2 lh-base rounded-4 py-4">
                                        <div className="e-card-content my-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-3 text-primary-emphasis bg-body-tertiary"></span>
                                                </div>
                                                <h5 className="fs-4 fw-bold mb-1 text-body">Single</h5>
                                                <p className="m-0 text-light-emphasis fs-6 text-truncate">A great solution for beginners</p>
                                            </div>
                                            <div className="my-3">
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <h2 className="fs-1 fw-bolder text-body">$69</h2>
                                                    <span className="fs-4 text-body-tertiary text-decoration-line-through mt-1">$199</span>
                                                </div>
                                                <p className="m-0 text-light-emphasis fs-6">per month $828 billed yearly</p>
                                            </div>
                                            <p className="mt-1 text-light-emphasis m-0 fs-6">Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                        </div>
                                        <div className="e-card-actions e-bigger mb-2">
                                            <ButtonComponent className="e-primary e-outline e-block" content="Choose a plan" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
                                    <div className="e-card e-bigger px-2 lh-base rounded-4 py-4">
                                        <div className="e-card-content my-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-3 text-primary-emphasis bg-body-tertiary"></span>
                                                    <span className="e-badge bg-warning-subtle text-warning-emphasis e-badge-pill e-bigger">Most popular</span>
                                                </div>
                                                <h5 className="fs-4 fw-bold mb-1 text-body">Premium</h5>
                                                <p className="m-0 text-light-emphasis fs-6 text-truncate">All you need to create your website</p>
                                            </div>
                                            <div className="my-3">
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <h2 className="fs-1 fw-bolder mb-1 text-body">$149</h2>
                                                    <span className="fs-4 text-body-tertiary text-decoration-line-through mt-1">$599</span>
                                                </div>
                                                <p className="m-0 text-light-emphasis fs-6">per month $1,788 billed yearly</p>
                                            </div>
                                            <p className="mt-1 text-light-emphasis m-0 fs-6">Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                        </div>
                                        <div className="e-card-actions e-bigger mb-2">
                                            <ButtonComponent className="e-primary e-block" content="Choose a plan" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0 pt-0 pt-md-4 pt-lg-0">
                                    <div className="e-card e-bigger px-2 lh-base rounded-4 py-4">
                                        <div className="e-card-content my-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-3 text-primary-emphasis bg-body-tertiary"></span>
                                                </div>
                                                <h5 className="fs-4 fw-bold mb-1 text-body">Business</h5>
                                                <p className="m-0 text-light-emphasis fs-6 text-truncate">Level up with more powerful features</p>
                                            </div>
                                            <div className="my-3">
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <h2 className="fs-1 fw-bolder mb-1 text-body">$249</h2>
                                                    <span className="fs-4 text-body-tertiary text-decoration-line-through mt-1">$699</span>
                                                </div>
                                                <p className="m-0 text-light-emphasis fs-6">per month $2,988 billed yearly</p>
                                            </div>
                                            <p className="mt-1 text-light-emphasis m-0 fs-6">Create one end product for a client, transfer that end product to your client, charge them for your services.</p>
                                        </div>
                                        <div className="e-card-actions e-bigger mb-2">
                                            <ButtonComponent className="e-primary e-outline e-block" content="Choose a plan" type="button"></ButtonComponent>
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
