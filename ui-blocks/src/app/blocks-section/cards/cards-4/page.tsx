'use client';

import { useEffect, useState } from "react";

export default function Card4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-4' && blockData.theme) {
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
                        <div className="px-4 py-20 sm:px-6">
                            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-10">
                                <div className="e-card e-bigger rounded-lg pb-2 justify-start">
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-950 dark:text-gray-50 truncate">John Wick</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Content Writer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <div className="e-card-image mb-6 overflow-hidden rounded-lg h-52">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/author-highlight-card/local-gems.jpg" alt="local gems" />
                                        </div>
                                        <h1 className="mb-3 text-xl font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Local Gems</h1>
                                        <p className="text-base dark:text-gray-200">Uncover the best-kept secrets in your area with our guide to local hotspots. Whether it's a cozy cafe, a charming bookstore, or a hidden park, find new places to explore and enjoy.</p>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg pb-2 justify-start">
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-950 dark:text-gray-50 truncate">Anthony Star</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Traveler</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <div className="e-card-image mb-6 overflow-hidden rounded-lg h-52">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/author-highlight-card/quick-recipes.jpg" alt="quick recipes" />
                                        </div>
                                        <h1 className="mb-3 text-xl font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Quick Recipes</h1>
                                        <p className="text-base dark:text-gray-200">Whip up tasty meals with minimal effort using our quick and easy recipes. Ideal for busy weeknights or last-minute dinners, these recipes feature simple ingredients.</p>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg pb-2 justify-start">
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-4.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-950 dark:text-gray-50 truncate">Patrick Mullan</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Professor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <div className="e-card-image mb-6 overflow-hidden rounded-lg h-52">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/author-highlight-card/effective-study.jpg" alt="effective study" />
                                        </div>
                                        <h1 className="mb-3 text-xl font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Effective Study</h1>
                                        <p className="text-base dark:text-gray-200">Enhance your study sessions with proven strategies to improve focus and retention. Learn time management techniques and active learning methods.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-dark-subtle">
                        <div className="py-5 px-3 px-md-4" style={{ minHeight: "36rem" }}>
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">John Wick</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Content Creator</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content flex-grow-1 text-body">
                                            <div className="e-card-image mb-4 rounded-3 overflow-hidden" style={{ height: "198px" }}>
                                                <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/author-highlight-card/local-gems.jpg" alt="local gems" />
                                            </div>
                                            <h4 className="fw-bold mb-2 px-2 lh-sm text-truncate">Local Gems</h4>
                                            <p className="fs-6 mb-2 px-2">Uncover the best-kept secrets in your area with our guide to local hotspots. Whether it's a cozy cafe, a charming bookstore, or a hidden park, find new places to explore and enjoy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Anthony Star</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Traveler</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content flex-grow-1 text-body">
                                            <div className="e-card-image mb-4 rounded-3 overflow-hidden" style={{ height: "198px" }}>
                                                <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/author-highlight-card/quick-recipes.jpg" alt="quick recipes" />
                                            </div>
                                            <h4 className="fw-bold mb-2 px-2 lh-sm text-truncate">Quick Recipes</h4>
                                            <p className="fs-6 mb-2 px-2">Whip up tasty meals with minimal effort using our quick and easy recipes. Ideal for busy weeknights or last-minute dinners, these recipes feature simple ingredients.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-4.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Patrick Mullan</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Professor</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content flex-grow-1 text-body">
                                            <div className="e-card-image mb-4 rounded-3 overflow-hidden" style={{ height: "198px" }}>
                                                <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/author-highlight-card/effective-study.jpg" alt="effective study" />
                                            </div>
                                            <h4 className="fw-bold mb-2 px-2 lh-sm text-truncate">Effective Study</h4>
                                            <p className="fs-6 mb-2 px-2">Enhance your study sessions with proven strategies to improve focus and retention. Learn time management techniques and active learning methods.</p>
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
