'use client';

import { useEffect, useState } from "react";

export default function Card10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-10' && blockData.theme) {
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
                            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-10">
                                <div className="e-card rounded-lg sm:flex-row e-bigger">
                                    <div className="relative sm:w-72 h-60 sm:h-auto shrink-0">
                                        <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/ai-innovations.jpg" alt="AI innovations" />
                                    </div>
                                    <div className="e-card-stacked pb-2">
                                        <div className="e-card-header mb-1 items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg)" }}></span>
                                            <div className="e-card-header-caption !pl-3">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-900 dark:text-white font-semibold truncate">James Adam</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Content Writer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2 truncate">AI Innovations</h1>
                                            <p className="text-base dark:text-gray-200">Experience the future with AI-driven innovations transforming industries. From virtual assistants to automation, AI is reshaping how we live and work.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg sm:flex-row e-bigger">
                                    <div className="relative sm:w-72 h-60 sm:h-auto shrink-0">
                                        <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/cybersecurity-solutions.jpg" alt="cybersecurity solutions" />
                                    </div>
                                    <div className="e-card-stacked pb-2">
                                        <div className="e-card-header mb-1 items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-10.jpg)" }}></span>
                                            <div className="e-card-header-caption !pl-3">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-900 dark:text-white font-semibold truncate">Toni Potts</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Content Writer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2 truncate">Cybersecurity Solutions</h1>
                                            <p className="text-base dark:text-gray-200">Stay protected online with top-tier cybersecurity solutions. Safeguard your data, devices, and privacy from digital threats in an ever-connected world.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg sm:flex-row e-bigger">
                                    <div className="relative sm:w-72 h-60 sm:h-auto shrink-0">
                                        <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/virtual-reality.jpg" alt="virtual reality" />
                                    </div>
                                    <div className="e-card-stacked pb-2">
                                        <div className="e-card-header mb-1 items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)" }}></span>
                                            <div className="e-card-header-caption !pl-3">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-900 dark:text-white font-semibold truncate">Jeffrey Stark</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Content Writer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2 truncate">Virtual Reality</h1>
                                            <p className="text-base dark:text-gray-200">Step into immersive virtual worlds with advanced VR technology. Experience games, simulations, and learning environments like never before.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg sm:flex-row e-bigger">
                                    <div className="relative sm:w-72 h-60 sm:h-auto shrink-0">
                                        <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/smart-home-tech.jpg" alt="smart home tech" />
                                    </div>
                                    <div className="e-card-stacked pb-2">
                                        <div className="e-card-header mb-1 items-center">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-6.jpg)" }}></span>
                                            <div className="e-card-header-caption !pl-3">
                                                <div className="e-card-header-title">
                                                    <p className="text-base text-gray-900 dark:text-white font-semibold truncate">Adam Smith</p>
                                                </div>
                                                <div className="e-card-sub-title">
                                                    <p className="text-sm text-gray-700 dark:text-gray-200 truncate">Content Writer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2 truncate">Smart Home Tech</h1>
                                            <p className="text-base dark:text-gray-200">Upgrade your home with smart technology for convenience and security. Control lights, appliances, and more with simple voice commands or mobile apps.</p>
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
                            <div className="row g-4">
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/ai-innovations.jpg" alt="AI innovations" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header align-items-center">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg)" }}></span>
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-medium mb-0 text-truncate">James Adam</p>
                                                    </div>
                                                    <div className="e-card-sub-title text-light-emphasis pt-0">
                                                        <p className="small mb-0 text-truncate">Content Writer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1">
                                                <h5 className="mb-1 fw-medium text-body text-truncate">AI Innovations</h5>
                                                <p className="fs-6 mb-0 text-light-emphasis">Experience the future with AI-driven innovations transforming industries. From virtual assistants to automation, AI is reshaping how we live and work.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/cybersecurity-solutions.jpg" alt="cybersecurity solutions" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header align-items-center">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-10.jpg)" }}></span>
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-medium mb-0 text-truncate">Toni Potts</p>
                                                    </div>
                                                    <div className="e-card-sub-title text-light-emphasis pt-0">
                                                        <p className="small mb-0 text-truncate">Script Writer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1">
                                                <h5 className="mb-1 fw-medium text-body text-truncate">Cybersecurity Solutions</h5>
                                                <p className="fs-6 mb-0 text-light-emphasis">Stay protected online with top-tier cybersecurity solutions. Safeguard your data, devices, and privacy from digital threats in an ever-connected world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/virtual-reality.jpg" alt="virtual reality" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header align-items-center">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)" }}></span>
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-medium mb-0 text-truncate">Jeffrey Stark</p>
                                                    </div>
                                                    <div className="e-card-sub-title text-light-emphasis pt-0">
                                                        <p className="small mb-0 text-truncate">Content Creator</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1">
                                                <h5 className="mb-1 fw-medium text-body text-truncate">Virtual Reality</h5>
                                                <p className="fs-6 mb-0 text-light-emphasis">Step into immersive virtual worlds with advanced VR technology. Experience games, simulations, and learning environments like never before.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-author-info-card/smart-home-tech.jpg" alt="smart home tech" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header align-items-center">
                                                <span className="e-avatar e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-6.jpg)" }}></span>
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title text-body">
                                                        <p className="fs-6 fw-medium mb-0 text-truncate">Adam Smith</p>
                                                    </div>
                                                    <div className="e-card-sub-title text-light-emphasis pt-0">
                                                        <p className="small mb-0 text-truncate">Content Creator</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1">
                                                <h5 className="mb-1 fw-medium text-body text-truncate">Smart Home Tech</h5>
                                                <p className="fs-6 mb-0 text-light-emphasis">Upgrade your home with smart technology for convenience and security. Control lights, appliances, and more with simple voice commands or mobile apps.</p>
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
