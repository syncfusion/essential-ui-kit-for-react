'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Card7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-7' && blockData.theme) {
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
                        <div className="px-4 py-20 sm:px-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 sm:gap-8">
                                <div className="e-card rounded-lg gap-6 e-bigger">
                                    <div className="e-card-image h-56">
                                        <Image src="/assets/images/card/image-tags-card/gem-cities.jpg" layout="fill" objectFit="cover" alt="gem cities" />
                                    </div>
                                    <div className="e-card-stacked grow">
                                        <div className="e-card-content grow">
                                            <h2 className="text-xl mb-3 font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Gem Cities</h2>
                                            <p className="text-base mb-1 dark:text-gray-200">Explore lesser-known cities that offer hidden treasures and unique experiences. From charming alleyways and local markets to vibrant cultural scenes and historic landmarks, get exploring!</p>
                                        </div>
                                        <div className="e-card-actions w-full leading-5">
                                            <span className="e-badge e-badge-pill">#Gem Cities</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg gap-6 e-bigger">
                                    <div className="e-card-image h-56">
                                        <Image src="/assets/images/card/image-tags-card/natural-wonders.jpg" layout="fill" objectFit="cover" alt="natural wonders" />
                                    </div>
                                    <div className="e-card-stacked grow">
                                        <div className="e-card-content grow">
                                            <h2 className="text-xl mb-3 font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Natural Wonders</h2>
                                            <p className="text-base mb-1 dark:text-gray-200">Witness the awe-inspiring natural wonders that showcase the planet’s incredible diversity. From majestic waterfalls and towering mountain ranges to expansive deserts, the choice is endless.</p>
                                        </div>
                                        <div className="e-card-actions w-full leading-5">
                                            <span className="e-badge e-badge-pill">#Natural Wonders</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg gap-6 e-bigger">
                                    <div className="e-card-image h-56">
                                        <Image src="/assets/images/card/image-tags-card/historic-landmarks.jpg" layout="fill" objectFit="cover" alt="historic landmarks" />
                                    </div>
                                    <div className="e-card-stacked grow">
                                        <div className="e-card-content grow">
                                            <h2 className="text-xl mb-3 font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Historic Landmarks</h2>
                                            <p className="text-base mb-1 dark:text-gray-200">Visit historic landmarks that tell the stories of the past and offer glimpses into different eras. Explore ancient ruins, grand monuments, and iconic structures that have shaped history.</p>
                                        </div>
                                        <div className="e-card-actions w-full leading-5">
                                            <span className="e-badge e-badge-pill">#Historic Landmarks</span>
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
                        <div className="py-5 px-3 px-md-4" style={{ minHeight: "36rem" }}>
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-image" style={{ height: "232px" }}>
                                            <Image src="/assets/images/card/image-tags-card/gem-cities.jpg" layout="fill" objectFit="cover" alt="gem cities" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 py-4 text-body">
                                                <h4 className="mb-2 fw-bold lh-sm text-truncate">Gem Cities</h4>
                                                <p className="fs-6 mb-0">Explore lesser-known cities that offer hidden treasures and unique experiences. From charming alleyways and local markets to vibrant cultural scenes and historic landmarks, get exploring!</p>
                                            </div>
                                            <div className="e-card-actions e-bigger pb-4 w-100 lh-sm">
                                                <span className="e-badge e-badge-pill">#Gem Cities</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-image" style={{ height: "232px" }}>
                                            <Image src="/assets/images/card/image-tags-card/natural-wonders.jpg" layout="fill" objectFit="cover" alt="natural wonders" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 py-4 text-body">
                                                <h4 className="mb-2 fw-bold lh-sm text-truncate">Natural Wonders</h4>
                                                <p className="fs-6 mb-0">Witness the awe-inspiring natural wonders that showcase the planet’s incredible diversity. From majestic waterfalls and towering mountain ranges to expansive deserts, the choice is endless.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger pb-4 w-100 lh-sm">
                                                <span className="e-badge e-badge-pill">#Natural Wonders</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-image" style={{ height: "232px" }}>
                                            <Image src="/assets/images/card/image-tags-card/historic-landmarks.jpg" layout="fill" objectFit="cover" alt="historic landmarks" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 py-4 text-body">
                                                <h4 className="mb-2 fw-bold lh-sm text-truncate">Historic Landmarks</h4>
                                                <p className="fs-6 mb-0">Visit historic landmarks that tell the stories of the past and offer glimpses into different eras. Explore ancient ruins, grand monuments, and iconic structures that have shaped history.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger pb-4 w-100 lh-sm">
                                                <span className="e-badge e-badge-pill">#Historic Landmarks</span>
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
