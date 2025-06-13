'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function AIPricingTable1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const pricing = useRef<DialogComponent>(null);

    const handleResize = (): void => {
        pricing.current?.refresh();
        pricing.current?.show(window.innerWidth <= 640);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-pricing-table-1' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        handleResize();
                    }, 100);
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
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id="dialog-container" className="relative flex justify-center items-center" style={{ minHeight: "580px" }}>
                            <DialogComponent ref={pricing} className="absolute sm:rounded-lg py-3" target="#dialog-container" visible={true} beforeOpen={(event) => { event.maxHeight = '100%'; }} showCloseIcon={true} width="537px" height="460px" closeOnEscape={true} open={(event) => (event.preventFocus = true)}
                                header={() => {
                                    return (<span className="text-base">Select plan</span>)
                                }}
                            >
                                <div className="max-w-2xl px-1 sm:rounded-lg text-gray-700 dark:text-gray-300">
                                   <div className="sm:px-1.5">
                                        <div>
                                            <p className="mb-3">Upgrade to access</p>
                                            <div className="text-base text-gray-700 dark:text-gray-200">
                                                <ul className="grid gap-3 sm:grid-cols-2">
                                                    <div className="grow">
                                                        <li className="flex items-start mb-3">
                                                            <span className="e-icons e-circle-check mr-2 text-xl !leading-5 text-primary-600 dark:text-primary-400"></span>
                                                            <span className="text-xs !leading-5">Unlimited searches, interactions, and history</span>
                                                        </li>
                                                        <li className="flex items-start mb-3">
                                                            <span className="e-icons e-circle-check mr-2 text-xl !leading-5 text-primary-600 dark:text-primary-400"></span>
                                                            <span className="text-xs !leading-5">Access to our GPT 3.5 model</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="e-icons e-circle-check mr-2 text-xl !leading-5 text-primary-600 dark:text-primary-400"></span>
                                                            <span className="text-xs !leading-5">Access to web, ios, and Android apps</span>
                                                        </li>
                                                    </div>
                                                    <div className="grow">
                                                        <li className="flex items-start mb-3">
                                                            <span className="e-icons e-circle-check mr-2 text-xl !leading-5 text-primary-600 dark:text-primary-400"></span>
                                                            <span className="text-xs !leading-5">Mobile accessibility</span>
                                                        </li>
                                                        <li className="flex items-start mb-3">
                                                            <span className="e-icons e-circle-check mr-2 text-xl !leading-5 text-primary-600 dark:text-primary-400"></span>
                                                            <span className="text-xs !leading-5">Standard customer support</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="e-icons e-circle-check mr-2 text-xl !leading-5 text-primary-600 dark:text-primary-400"></span>
                                                            <span className="text-xs !leading-5">Basic reporting and analytics</span>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr className="my-6" />
                                        <div className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2 box-border">
                                            <div className="e-card rounded-none bg-gray-50 dark:bg-gray-900 border-none shadow-none">
                                                <div className="e-card-header !pt-3 !px-3">
                                                    <div className="e-card-header-caption">
                                                        <div className="e-card-title font-medium text-xs text-gray-700 dark:text-white">Free</div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !pb-1 mt-3 !px-3">
                                                    <h2 className="text-2xl flex items-center text-gray-700 dark:text-white leading-tight font-medium">$0
                                                        <span className="font-normal text-gray-700 dark:text-gray-200 text-xs ml-1">/ month</span>
                                                    </h2>
                                                </div>
                                                <div className="e-card-actions !px-3 py-3 leading-9">
                                                    <ButtonComponent cssClass="e-primary e-outline w-full" content="Current plan" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                            <div className="e-card rounded-none bg-gray-50 dark:bg-gray-900 border-none shadow-none">
                                                <div className="e-card-header !pt-3 !px-3">
                                                    <div className="e-card-header-caption">
                                                        <div className="e-card-title font-medium text-xs text-gray-700 dark:text-white">Standard</div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !pb-1 mt-3 !px-3">
                                                    <h2 className="text-2xl flex items-center text-gray-700 dark:text-white leading-tight font-medium">$28
                                                        <span className="font-normal text-gray-700 dark:text-gray-200 text-xs ml-1">/ month</span>
                                                    </h2>
                                                </div>
                                                <div className="e-card-actions !px-3 py-3 leading-9">
                                                    <ButtonComponent cssClass="e-primary w-full" content="Upgrade" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                            <div className="e-card rounded-none bg-gray-50 dark:bg-gray-900 border-none shadow-none">
                                                <div className="e-card-header !pt-3 !px-3">
                                                    <div className="e-card-header-caption">
                                                        <div className="e-card-title font-medium text-xs text-gray-700 dark:text-white">Pro</div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !pb-1 mt-3 !px-3">
                                                    <h2 className="text-2xl flex items-center text-gray-700 dark:text-white leading-tight font-medium">$48
                                                        <span className="font-normal text-gray-700 dark:text-gray-200 text-xs ml-1">/ month</span>
                                                    </h2>
                                                </div>
                                                <div className="e-card-actions !px-3 py-3 leading-9">
                                                    <ButtonComponent cssClass="e-primary w-full" content="Upgrade" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 flex w-full absolute">
                            <ButtonComponent className="h-fit mx-auto my-5" type="button" onClick={() => pricing.current?.show()}>Pricing Table</ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-center justify-content-center" style={{ minHeight: "580px" }}>
                            <DialogComponent key={"pricing-table-bs"} ref={pricing} className="position-absolute py-3" target="#dialog-container" visible={true} showCloseIcon={true} width="537px" height="480px" closeOnEscape={true} open={(event) => (event.preventFocus = true)}
                                header={() => {
                                    return (<span className="text-base">Select plan</span>)
                                }}
                            >
                                <div className="container px-1 rounded text-body-secondary">
                                    <div className="px-sm-2">
                                        <div>
                                            <p className="mb-3">Upgrade to access</p>
                                            <div className="fs-6 text-body-secondary">
                                                <ul className="row g-3 row-cols-sm-2 list-unstyled">
                                                    <div className="flex-grow-1">
                                                        <li className="d-flex align-items-start mb-3">
                                                            <span className="e-icons e-circle-check me-2 fs-5 lh-sm text-primary"></span>
                                                            <span className="small lh-base">Unlimited searches, interactions, and history</span>
                                                        </li>
                                                        <li className="d-flex align-items-start mb-3">
                                                            <span className="e-icons e-circle-check me-2 fs-5 lh-sm text-primary"></span>
                                                            <span className="small lh-base">Access to our GPT 3.5 model</span>
                                                        </li>
                                                        <li className="d-flex align-items-start">
                                                            <span className="e-icons e-circle-check me-2 fs-5 lh-sm text-primary"></span>
                                                            <span className="small lh-base">Access to web, ios, and Android apps</span>
                                                        </li>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <li className="d-flex align-items-start mb-3">
                                                            <span className="e-icons e-circle-check me-2 fs-5 lh-sm text-primary"></span>
                                                            <span className="small lh-base">Mobile accessibility</span>
                                                        </li>
                                                        <li className="d-flex align-items-start mb-3">
                                                            <span className="e-icons e-circle-check me-2 fs-5 lh-sm text-primary"></span>
                                                            <span className="small lh-base">Standard customer support</span>
                                                        </li>
                                                        <li className="d-flex align-items-start">
                                                            <span className="e-icons e-circle-check me-2 fs-5 lh-sm text-primary"></span>
                                                            <span className="small lh-base">Basic reporting and analytics</span>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="row g-3">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="e-card rounded-0 bg-body-tertiary border-0 shadow-none">
                                                    <div className="e-card-header pt-3 px-3">
                                                        <div className="e-card-header-caption">
                                                        <div className="e-card-title fw-medium small text-body-secondary">Free</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content pb-1 pt-4 px-3">
                                                        <div className="fs-6 d-flex align-items-center text-body-secondary fw-medium mb-0">
                                                            <h2 className="fs-4 mb-0">$0</h2>
                                                            <span className="small ms-1">/ month</span>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-actions px-3 pt-0 py-3 lh-lg">
                                                        <ButtonComponent cssClass="e-primary e-outline w-100" content="Current plan" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="e-card rounded-0 bg-body-tertiary border-0 shadow-none">
                                                    <div className="e-card-header pt-3 px-3">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title fw-medium small text-body-secondary">Standard</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content pb-1 pt-4 px-3">
                                                        <div className="fs-6 d-flex align-items-center text-body-secondary fw-medium mb-0">
                                                            <h2 className="fs-4 mb-0">$28</h2>
                                                            <span className="small ms-1">/ month</span>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-actions px-3 pt-0 py-3 lh-lg">
                                                        <ButtonComponent cssClass="e-primary w-100" content="Upgrade" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="e-card rounded-0 bg-body-tertiary border-0 shadow-none">
                                                    <div className="e-card-header pt-3 px-3">
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-title fw-medium small text-body-secondary">pro</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content pb-1 pt-4 px-3">
                                                        <div className="fs-6 d-flex align-items-center text-body-secondary fw-medium mb-0">
                                                            <h2 className="fs-4 mb-0">$48</h2>
                                                            <span className="small ms-1">/ month</span>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-actions px-3 pt-0 py-3 lh-lg">
                                                        <ButtonComponent cssClass="e-primary w-100" content="Upgrade" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" type="button" onClick={() => pricing.current?.show()}>Pricing Table</ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
