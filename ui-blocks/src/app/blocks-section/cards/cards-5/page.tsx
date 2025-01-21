'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Card5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-5' && blockData.theme) {
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
                        <div className="py-20 px-4 sm:px-6" style={{ minHeight: "36rem" }}>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                                <div className="e-card e-bigger rounded-lg justify-start">
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">Kristin Watson</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">Content Creator</p>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-round e-flat e-icons e-edit" type="button"></ButtonComponent>
                                    </div>
                                    <div className="e-card-content">
                                        <h2 className="pt-2 text-xl font-semibold text-gray-900 dark:text-white truncate">Travel Destinations</h2>
                                        <p className="mt-3 pb-2 text-base">Discover the most exciting travel destinations around the globe. From picturesque beaches to bustling cities, our curated list of must-visit locations will help you plan your perfect getaway.</p>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg justify-start">
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-4.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">Brooklyn Simmons</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">Story Writer</p>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-round e-flat e-icons e-edit" type="button"></ButtonComponent>
                                    </div>
                                    <div className="e-card-content">
                                        <h2 className="pt-2 text-xl font-semibold text-gray-900 dark:text-white truncate">Healthy Lifestyle</h2>
                                        <p className="mt-3 pb-2 text-base">Embrace a healthier lifestyle with our easy-to-follow tips and advice. From nutritious meal ideas to effective exercise routines, find practical strategies to improve life.</p>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg justify-start">
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-12.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">Annie Amber</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">Script Writer</p>
                                            </div>
                                        </div>
                                        <ButtonComponent cssClass="e-round e-flat e-icons e-edit" type="button"></ButtonComponent>
                                    </div>
                                    <div className="e-card-content">
                                        <h2 className="pt-2 text-xl font-semibold text-gray-900 dark:text-white truncate">Tech Gadget</h2>
                                        <p className="mt-3 pb-2 text-base">Stay up-to-date with the latest tech gadgets and innovations. Our in-depth reviews and comparisons will help you make informed decisions on the best devices for your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-dark-subtle">
                        <div className="px-3 px-sm-4 py-5" style={{ minHeight: "36rem" }}>
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card shadow p-2 e-bigger h-100 justify-content-start">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Kristin Watson</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Content Creator</p>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-round e-flat e-icons e-edit" type="button"></ButtonComponent>
                                        </div>
                                        <div className="e-card-content text-body">
                                            <h2 className="fs-5 fw-bolder mb-2 text-truncate">Travel Destinations</h2>
                                            <p className="fs-6 m-0">Discover the most exciting travel destinations around the globe. From picturesque beaches to bustling cities, our curated list of must-visit locations will help you plan your perfect getaway.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card shadow p-2 e-bigger h-100 justify-content-start">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-4.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Brooklyn Simmons</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Story Writer</p>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-round e-flat e-icons e-edit" type="button"></ButtonComponent>
                                        </div>
                                        <div className="e-card-content text-body">
                                            <h2 className="fs-5 fw-bolder mb-2 text-truncate">Healthy Lifestyle</h2>
                                            <p className="fs-6 m-0">Embrace a healthier lifestyle with our easy-to-follow tips and advice. From nutritious meal ideas to effective exercise routines, find practical strategies to improve life.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card shadow p-2 e-bigger h-100 justify-content-start">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-12.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Annie Amber</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Script Writer</p>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-round e-flat e-icons e-edit" type="button"></ButtonComponent>
                                        </div>
                                        <div className="e-card-content text-body">
                                            <h2 className="fs-5 fw-bolder mb-2 text-truncate">Tech Gadget</h2>
                                            <p className="fs-6 m-0">Stay up-to-date with the latest tech gadgets and innovations. Our in-depth reviews and comparisons will help you make informed decisions on the best devices for your needs.</p>
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
