'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import Image from "next/image";

export default function Card3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-3' && blockData.theme) {
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
                        <div className="px-4 sm:px-6 py-20">
                            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                                <div className="e-card gap-2 rounded-lg e-bigger">
                                    <div className="e-card-header">
                                        <div className="e-card-image overflow-hidden rounded-lg h-56">
                                            <Image src="/assets/images/card/image-title-description-card-button/adventure-trails.jpg" layout="fill" objectFit="cover" alt="adventure trails" />
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <h2 className="text-xl mb-2 font-semibold text-gray-900 dark:text-white line-clamp-2">Adventure Trails</h2>
                                        <p className="text-base dark:text-gray-200">Explore scenic trails and hidden paths perfect for nature enthusiasts. Enjoy breathtaking views, fresh air, and the thrill of discovery along every step of the way.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent className="e-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="Get Started" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card gap-2 rounded-lg e-bigger">
                                    <div className="e-card-header">
                                        <div className="e-card-image overflow-hidden rounded-lg h-56">
                                            <Image src="/assets/images/card/image-title-description-card-button/historic-landmarks.jpg" layout="fill" objectFit="cover" alt="historic landmarks" />
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <h2 className="text-xl mb-2 font-semibold text-gray-900 dark:text-white line-clamp-2">Historic Landmarks</h2>
                                        <p className="text-base dark:text-gray-200">Visit iconic landmarks that tell the tales of past eras. These structures offer a glimpse into history, showcasing architectural beauty and timeless stories.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent className="e-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="Get Started" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card gap-2 rounded-lg e-bigger">
                                    <div className="e-card-header">
                                        <div className="e-card-image overflow-hidden rounded-lg h-56">
                                            <Image src="/assets/images/card/image-title-description-card-button/vibrant-street-markets.jpg" layout="fill" objectFit="cover" alt="vibrant street markets" />
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <h2 className="text-xl mb-2 font-semibold text-gray-900 dark:text-white line-clamp-2">Vibrant Street Markets</h2>
                                        <p className="text-base dark:text-gray-200">Stroll through lively markets filled with unique finds, delicious treats, and local crafts. Experience the vibrant atmosphere and immerse yourself in the local culture.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent className="e-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="Get Started" type="button"></ButtonComponent>
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
                                    <div className="e-card e-bigger rounded-3 p-2">
                                        <div className="e-card-header">
                                            <div className="e-card-image rounded-3 overflow-hidden mb-2" style={{ height: "232px" }}>
                                                <Image src="/assets/images/card/image-title-description-card-button/adventure-trails.jpg" layout="fill" objectFit="cover" alt="adventure trails" />
                                            </div>
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h4 className="mb-2 fw-bold lh-sm text-truncate">Adventure Trails</h4>
                                                <p className="fs-6 mb-2">Explore scenic trails and hidden paths perfect for nature enthusiasts. Enjoy breathtaking views, fresh air, and the thrill of discovery along every step of the way.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger w-100 lh-lg">
                                                <ButtonComponent className="e-block e-outline" iconCss="e-icons e-chevron-right-small" iconPosition="Right" content="Get Started" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 p-2">
                                        <div className="e-card-header">
                                            <div className="e-card-image rounded-3 overflow-hidden mb-2" style={{ height: "232px" }}>
                                                <Image src="/assets/images/card/image-title-description-card-button/historic-landmarks.jpg" layout="fill" objectFit="cover" alt="historic landmarks" />
                                            </div>
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h4 className="mb-2 fw-bold lh-sm text-truncate">Historic Landmarks</h4>
                                                <p className="fs-6 mb-2">Visit iconic landmarks that tell the tales of past eras. These structures offer a glimpse into history, showcasing architectural beauty and timeless stories.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger w-100 lh-lg">
                                                <ButtonComponent className="e-block e-outline" iconCss="e-icons e-chevron-right-small" iconPosition="Right" content="Get Started" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 p-2">
                                        <div className="e-card-header">
                                            <div className="e-card-image rounded-3 overflow-hidden mb-2" style={{ height: "232px" }}>
                                                <Image src="/assets/images/card/image-title-description-card-button/vibrant-street-markets.jpg" layout="fill" objectFit="cover" alt="vibrant street markets" />
                                            </div>
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h4 className="mb-2 fw-bold lh-sm text-truncate">Vibrant Street Markets</h4>
                                                <p className="fs-6 mb-2">Stroll through lively markets filled with unique finds, delicious treats, and local crafts. Experience the vibrant atmosphere and immerse yourself in the local culture.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger w-100 lh-lg">
                                                <ButtonComponent className="e-block e-outline" iconCss="e-icons e-chevron-right-small" iconPosition="Right" content="Get Started" type="button"></ButtonComponent>
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
