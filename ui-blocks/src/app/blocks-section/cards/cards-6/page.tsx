'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Card6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-6' && blockData.theme) {
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
                        <div className="w-full lg:max-w-4xl px-4 sm:px-6 lg:px-0 lg:w-11/12 mx-auto py-20" style={{ minHeight: "36rem" }}>
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-6">
                                <div className="e-card e-bigger rounded-lg w-full sm:w-3/6 justify-start">
                                    <div className="e-card-header items-center !w-full">
                                        <span className="e-avatar e-avatar-large e-icons e-group-icon e-avatar-circle text-primary-600 bg-primary-100"></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-950 dark:text-gray-50">Amazing Destinations</p>
                                            </div>
                                            <div className="e-card-sub-title !text-wrap">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Stunning locations for your next adventure.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        <div className="mt-2 mb-2">
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Benefits</h2>
                                            <ul className="flex flex-col gap-3 mt-4">
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Enjoy breathtaking landscapes and views.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Immerse yourself in unique local traditions.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Engage in exciting outdoor activities.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Find serene locations perfect for unwinding.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Authentic dishes from various regions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent cssClass="e-primary e-outline w-full" content="Get Started Now" iconCss="e-icons e-chevron-right-double" iconPosition="Right" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg w-full sm:w-3/6 justify-start">
                                    <div className="e-card-header items-center !w-full">
                                        <span className="e-avatar e-avatar-large e-icons e-group-icon e-avatar-circle text-primary-600 bg-primary-100"></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-950 dark:text-gray-50">Smart Home</p>
                                            </div>
                                            <div className="e-card-sub-title !text-wrap">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Deliver personalised experiences at scale.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        <div className="mt-2 mb-2">
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Benefits</h2>
                                            <ul className="flex flex-col gap-3 mt-4">
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Protect your home with advanced security.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Control devices remotely with ease.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Optimize energy use and reduce utility bills.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Lighting and settings to your preferences.</li>
                                                <li className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"><span className="e-icons e-circle-check text-green-700 dark:text-green-500 my-1"></span>Connect and manage various smart devices.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent cssClass="e-primary e-outline w-full" content="Get Started Now" iconCss="e-icons e-chevron-right-double" iconPosition="Right" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-dark-subtle">
                        <div className="container-xxl px-3 px-sm-4 mx-auto py-5" style={{ minHeight: "36rem" }}>
                            <div className="row justify-content-center g-xl-5 g-4 e-bigger w-full">
                                <div className="col-sm-6 col-lg-5 col-xl-4">
                                    <div className="e-card e-bigger shadow p-2 h-100 justify-content-start">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-icons e-group-icon e-avatar-circle text-primary-emphasis bg-body-tertiary"></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Amazing Destinations</p>
                                                </div>
                                                <div className="e-card-sub-title text-secondary text-wrap">
                                                    <p className="small mb-0">Stunning locations for your next adventure</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            <div className="my-2">
                                                <h2 className="fs-6 fw-bolder mb-3">Benefits</h2>
                                                <ul className="d-flex flex-column gap-2 m-0 p-0 text-body">
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Enjoy breathtaking landscapes and views.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Immerse yourself in unique local traditions.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Engage in exciting outdoor activities.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Find serene locations perfect for unwinding.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Authentic dishes from various regions.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="e-card-actions lh-lg">
                                            <ButtonComponent cssClass="e-primary e-outline e-block" content="Get Started Now" iconCss="e-icons e-chevron-right-double fs-6" iconPosition="Right" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-5 col-xl-4">
                                    <div className="e-card shadow p-0 p-2 h-100 justify-content-start">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-icons e-group-icon e-avatar-circle text-primary-emphasis bg-body-tertiary"></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Smart Home</p>
                                                </div>
                                                <div className="e-card-sub-title text-secondary text-wrap">
                                                    <p className="small mb-0">Deliver personalised experiences at scale.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            <div className="my-2">
                                                <h2 className="fs-6 fw-bolder mb-3">Benefits</h2>
                                                <ul className="d-flex flex-column gap-2 m-0 p-0 text-body">
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Protect your home with advanced security.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Control devices remotely with ease.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Optimize energy use and reduce utility bills.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Lighting and settings to your preferences.</li>
                                                    <li className="d-flex align-items-start gap-2 fs-6 m-0"><span className="e-icons e-circle-check text-success my-1"></span>Connect and manage various smart devices.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="e-card-actions lh-lg">
                                            <ButtonComponent cssClass="e-primary e-outline e-block" content="Get Started Now" iconCss="e-icons e-chevron-right-double fs-6" iconPosition="Right" type="button"></ButtonComponent>
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
