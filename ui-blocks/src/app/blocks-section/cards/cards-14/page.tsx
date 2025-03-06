'use client';

import { useEffect, useState } from "react";

export default function Card14() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-14' && blockData.theme) {
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
                        <div className="px-4 sm:px-6 py-20" style={{ minHeight: "36rem" }}>
                            <div className="grid gap-6 lg:gap-10 lg:grid-cols-3 sm:grid-cols-2">
                                <div className="e-card rounded-lg e-bigger relative pt-6 pb-2 justify-start">
                                    <div className="e-card-content">
                                        <div>
                                            <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 truncate">Enchanting Forests</h1>
                                            <p className="text-base mt-3 mb-5">Wander through lush, green forests where towering trees and vibrant wildlife await. Discover serene trails, picturesque streams, and the calming sounds of nature.</p>
                                        </div>
                                        <a href="#" className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2.5 w-max py-1 text-lg">
                                            View More
                                            <span className="e-icons e-chevron-right-double text-xl"></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg e-bigger relative pt-6 pb-2 justify-start">
                                    <div className="e-card-content">
                                        <div>
                                            <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 truncate">Cultural Capitals</h1>
                                            <p className="text-base mt-3 mb-5">Dive into the rich cultural tapestry of world-renowned cities. Explore museums, historical sites, and vibrant neighborhoods that offer a deep dive into art and history.</p>
                                        </div>
                                        <a href="#" className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2.5 w-max py-1 text-lg">
                                            View More
                                            <span className="e-icons e-chevron-right-double text-xl"></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg e-bigger relative pt-6 pb-2 justify-start">
                                    <div className="e-card-content">
                                        <div>
                                            <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 truncate">Sunny Islands</h1>
                                            <p className="text-base mt-3 mb-5">Escape to idyllic islands where turquoise waters and sandy beaches create a tropical paradise. Enjoy water sports, beach lounging, and local cuisine.</p>
                                        </div>
                                        <a href="#" className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2.5 w-max py-1 text-lg">
                                            View More
                                            <span className="e-icons e-chevron-right-double text-xl"></span>
                                        </a>
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
                                        <div className="e-card-header">
                                            <h1 className="fs-5 fw-bolder text-truncate m-0 w-100 lh-base">Enchanting Forests</h1>
                                        </div>
                                        <div className="e-card-content pt-2">
                                            <p className="fs-6 mb-4">Wander through lush, green forests where towering trees and vibrant wildlife await. Discover serene trails, picturesque streams, and the calming sounds of nature.</p>
                                            <a href="#" className="text-decoration-none d-flex align-items-center fs-6 gap-2 fw-medium">
                                                Learn More
                                                <span className="e-icons e-chevron-right-double fs-6"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow p-2 h-100 justify-content-start">
                                        <div className="e-card-header">
                                            <h1 className="fs-5 fw-bolder text-truncate m-0 w-100 lh-base">Cultural Capitals</h1>
                                        </div>
                                        <div className="e-card-content pt-2">
                                            <p className="fs-6 mb-4">Dive into the rich cultural tapestry of world-renowned cities. Explore museums, historical sites, and vibrant neighborhoods that offer a deep dive into art and history.</p>
                                            <a href="#" className="text-decoration-none d-flex align-items-center fs-6 gap-2 fw-medium">
                                                Learn More
                                                <span className="e-icons e-chevron-right-double fs-6"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow p-2 h-100 justify-content-start">
                                        <div className="e-card-header">
                                            <h1 className="fs-5 fw-bolder text-truncate m-0 w-100 lh-base">Sunny Islands</h1>
                                        </div>
                                        <div className="e-card-content pt-2">
                                            <p className="fs-6 mb-4">Escape to idyllic islands where turquoise waters and sandy beaches create a tropical paradise. Enjoy water sports, beach lounging, and local cuisine.</p>
                                            <a href="#" className="text-decoration-none d-flex align-items-center fs-6 gap-2 fw-medium">
                                                Learn More
                                                <span className="e-icons e-chevron-right-double fs-6"></span>
                                            </a>
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
