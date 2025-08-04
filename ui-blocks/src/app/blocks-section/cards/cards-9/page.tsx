'use client';

import { useEffect, useState } from "react";

export default function Card9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-9' && blockData.theme) {
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
                        <div className="py-20 px-4 sm:px-6" style={{ minHeight: "36rem" }}>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                                <div className="e-card e-bigger rounded-lg pt-6 pb-2 justify-start">
                                    <div className="e-card-content">
                                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white truncate">Enchanting Forests</h1>
                                        <p className="mt-3 mb-2 text-base">Wander through lush, green forests where towering trees and vibrant wildlife await. Discover serene trails, picturesque streams, and the calming sounds of nature.</p>
                                    </div>
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-6.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">John Wick</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">Content Writer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg pt-6 pb-2 justify-start">
                                    <div className="e-card-content">
                                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white truncate">Sunny Islands</h1>
                                        <p className="mt-3 mb-2 text-base">Escape to idyllic islands where turquoise waters and sandy beaches create a tropical paradise. Enjoy water sports, beach lounging, and local cuisine while soaking up the sun.</p>
                                    </div>
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">Adam Smith</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">Script Writer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg pt-6 pb-2 justify-start">
                                    <div className="e-card-content">
                                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white truncate">Cultural Capitals</h1>
                                        <p className="mt-3 mb-2 text-base">Dive into the rich cultural tapestry of world-renowned cities. Explore museums, historical sites, and vibrant neighborhoods that offer a deep dive into art, history.</p>
                                    </div>
                                    <div className="e-card-header items-center">
                                        <span className="e-avatar e-avatar-circle e-avatar-large" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)" }}></span>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">Levi Ackerman</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">Director</p>
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
                        <div className="px-3 px-sm-4 py-5" style={{ minHeight: "36rem" }}>
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow p-2 h-100 justify-content-start">
                                        <div className="e-card-content">
                                            <h1 className="fs-5 fw-bolder text-truncate">Enchanting Forests</h1>
                                            <p className="fs-6 mb-2">Wander through lush, green forests where towering trees and vibrant wildlife await. Discover serene trails, picturesque streams, and the calming sounds of nature.</p>
                                        </div>
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-6.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">John Wick</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Content Creator</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow p-2 h-100 justify-content-start">
                                        <div className="e-card-content">
                                            <h1 className="fs-5 fw-bolder text-truncate">Sunny Islands</h1>
                                            <p className="fs-6 mb-2">Escape to idyllic islands where turquoise waters and sandy beaches create a tropical paradise. Enjoy water sports, beach lounging, and local cuisine while soaking up the sun.</p>
                                        </div>
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Adam Smith</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Script Writer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow p-2 h-100 justify-content-start">
                                        <div className="e-card-content">
                                            <h1 className="fs-5 fw-bolder text-truncate">Cultural Capitals</h1>
                                            <p className="fs-6 mb-2">Dive into the rich cultural tapestry of world-renowned cities. Explore museums, historical sites, and vibrant neighborhoods that offer a deep dive into art, history.</p>
                                        </div>
                                        <div className="e-card-header align-items-center mb-2">
                                            <span className="e-avatar e-avatar-large e-avatar-circle" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)" }}></span>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title text-body">
                                                    <p className="h6 fw-bold mb-0 text-truncate">Levi Ackerman</p>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary pt-0">
                                                    <p className="small mb-0 text-truncate">Director</p>
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
