'use client';

import { useEffect, useState } from "react";

export default function Card11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-11' && blockData.theme) {
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
                        <div className="h-screen sm:h-full">
                            <div className="px-4 py-10 sm:px-6">
                                <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 sm:grid-cols-2 xl:gap-10">
                                    <div className="e-card rounded-lg pb-2 pt-6 e-bigger">
                                        <div className="e-card-content flex-1">
                                            <div className="e-card-image mb-6 overflow-hidden rounded-lg h-52">
                                                <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/featured-card/mountain-cabins.jpg" alt="mountain cabins" />
                                            </div>
                                            <h1 className="text-xl mb-3 font-semibold text-gray-950 dark:text-white line-clamp-2">Mountain Cabins</h1>
                                            <p className="text-base mb-1 dark:text-gray-200">Experience the warmth and charm of rustic mountain cabins. Nestled in scenic landscapes, these cozy retreats offer a perfect getaway with stunning views, comfortable amenities.</p>
                                        </div>
                                        <div className="e-card-header items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                            <div className="e-card-header-caption mr-2">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-950 dark:text-white font-semibold truncate">Hughie Snow</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-xs text-gray-700 dark:text-gray-200 truncate">Graphics Designer</p>
                                                </div>
                                            </div>
                                            <div className="self-end text-right">
                                                <p className="mb-0.5 text-base font-medium text-gray-950 dark:text-white">Date</p>
                                                <p className="text-xs text-gray-700 dark:text-gray-200">17 April, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg pb-2 pt-6 e-bigger">
                                        <div className="e-card-content flex-1">
                                            <div className="e-card-image mb-6 overflow-hidden rounded-lg h-52">
                                                <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/featured-card/bustling-city-streets.jpg" alt="bustling city streets" />
                                            </div>
                                            <h1 className="text-xl mb-3 font-semibold text-gray-950 dark:text-white line-clamp-2">Bustling City Streets</h1>
                                            <p className="text-base mb-1 dark:text-gray-200">Dive into the vibrant life of city streets filled with shops, cafes, and entertainment. Discover the dynamic pulse of urban environments full of culture, cuisine.</p>
                                        </div>
                                        <div className="e-card-header items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg)" }}></span>
                                            <div className="e-card-header-caption mr-2">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-950 dark:text-white font-semibold truncate">Jeffrey Stark</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-xs text-gray-700 dark:text-gray-200 truncate">Web Developer</p>
                                                </div>
                                            </div>
                                            <div className="self-end text-right">
                                                <p className="mb-0.5 text-base font-medium text-gray-950 dark:text-white">Date</p>
                                                <p className="text-xs text-gray-700 dark:text-gray-200">23 April, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg pb-2 pt-6 e-bigger">
                                        <div className="e-card-content flex-1">
                                            <div className="e-card-image mb-6 overflow-hidden rounded-lg h-52">
                                                <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/featured-card/seaside-resorts.jpg" alt="seaside resorts" />
                                            </div>
                                            <h1 className="text-xl mb-3 font-semibold text-gray-950 dark:text-white line-clamp-2">Seaside Resorts</h1>
                                            <p className="text-base mb-1 dark:text-gray-200">Enjoy luxury and relaxation at seaside resorts with stunning ocean views and top-notch amenities. Unwind with beachside activities, gourmet dining, and the soothing sounds of the waves.</p>
                                        </div>
                                        <div className="e-card-header items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                            <div className="e-card-header-caption mr-2">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-950 dark:text-white font-semibold truncate">Toni Potts</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-xs text-gray-700 dark:text-gray-200 truncate">Content Creator</p>
                                                </div>
                                            </div>
                                            <div className="self-end text-right">
                                                <p className="mb-0.5 text-base font-medium text-gray-950 dark:text-white">Date</p>
                                                <p className="text-xs text-gray-700 dark:text-gray-200">09 April, 2024</p>
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
                    <section className="bg-dark-subtle">
                        <div className="py-5 px-3 px-md-4">
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 p-3">
                                        <div className="e-card-image rounded-3 overflow-hidden" style={{ height: "198px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/featured-card/mountain-cabins.jpg" alt="mountain cabins" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 text-body px-0">
                                                <h4 className="my-2 fw-bold lh-sm text-truncate">Mountain Cabins</h4>
                                                <p className="fs-6 mb-0">Experience the warmth and charm of rustic mountain cabins. Nestled in scenic landscapes, these cozy retreats offer a perfect getaway with stunning views, comfortable amenities.</p>
                                            </div>
                                            <div className="e-card-header align-items-center px-0 pt-3">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                                <div className="e-card-header-caption me-2">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-bold mb-0 text-truncate">Hughie Snow</p>
                                                    </div>
                                                    <div className="e-card-sub-title pt-0 text-body-secondary">
                                                        <p className="small mb-0 text-truncate">Graphics Designer</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="fs-6 fw-bold lh-base mb-0 text-body">Date</p>
                                                    <p className="small mb-0 text-body-secondary">17 April, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 p-3">
                                        <div className="e-card-image rounded-3 overflow-hidden" style={{ height: "198px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/featured-card/bustling-city-streets.jpg" alt="bustling city streets" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 text-body px-0">
                                                <h4 className="my-2 fw-bold lh-sm text-truncate">Bustling City Streets</h4>
                                                <p className="fs-6 mb-0">Dive into the vibrant life of city streets filled with shops, cafes, and entertainment. Discover the dynamic pulse of urban environments full of culture, cuisine.</p>
                                            </div>
                                            <div className="e-card-header align-items-center px-0 pt-3">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg)" }}></span>
                                                <div className="e-card-header-caption me-2">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-bold mb-0 text-truncate">Jeffrey Stark</p>
                                                    </div>
                                                    <div className="e-card-sub-title pt-0 text-body-secondary">
                                                        <p className="small mb-0 text-truncate">Web Developer</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="fs-6 fw-bold lh-base mb-0 text-body">Date</p>
                                                    <p className="small mb-0 text-body-secondary">23 April, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 p-3">
                                        <div className="e-card-image rounded-3 overflow-hidden" style={{ height: "198px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/featured-card/seaside-resorts.jpg" alt="seaside resorts" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 text-body px-0">
                                                <h4 className="my-2 fw-bold lh-sm text-truncate">Seaside Resorts</h4>
                                                <p className="fs-6 mb-0">Enjoy luxury and relaxation at seaside resorts with stunning ocean views and top-notch amenities. Unwind with beachside activities, gourmet dining, and the soothing sounds of the waves.</p>
                                            </div>
                                            <div className="e-card-header align-items-center px-0 pt-3">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                <div className="e-card-header-caption me-2">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-bold mb-0 text-truncate">Toni Potts</p>
                                                    </div>
                                                    <div className="e-card-sub-title pt-0 text-body-secondary">
                                                        <p className="small mb-0 text-truncate">Content Writer</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="fs-6 fw-bold lh-base mb-0 text-body">Date</p>
                                                    <p className="small mb-0 text-body-secondary">09 April, 2024</p>
                                                </div>
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
