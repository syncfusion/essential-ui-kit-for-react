'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import Image from "next/image";

export default function Card1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-1' && blockData.theme) {
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
                            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-10">
                                <div className="e-card rounded-lg gap-6 e-bigger">
                                    <div className="e-card-image h-56">
                                        <Image src="/assets/images/card/image-button-card/adventure-awaits.jpg" layout="fill" objectFit="cover" alt="adventure awaits" />
                                    </div>
                                    <div className="e-card-stacked grow">
                                        <div className="e-card-content text-center grow">
                                            <h2 className="text-xl font-semibold mb-3 text-gray-950 dark:text-gray-50 line-clamp-2">Adventure Awaits</h2>
                                            <p className="text-base mb-2 dark:text-gray-200">Discover exciting travel destinations that offer unique experiences and breathtaking landscapes, from serene beaches to rugged mountains.</p>
                                        </div>
                                        <div className="e-card-actions leading-9 w-full">
                                            <ButtonComponent cssClass="e-block" type="button">View Details</ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg gap-6 e-bigger">
                                    <div className="e-card-image h-56">
                                        <Image src="/assets/images/card/image-button-card/gourmet-delights.jpg" layout="fill" objectFit="cover" alt="gourmet delights" />
                                    </div>
                                    <div className="e-card-stacked grow">
                                        <div className="e-card-content text-center grow">
                                            <h2 className="text-xl font-semibold mb-3 text-gray-950 dark:text-gray-50 line-clamp-2">Gourmet Delights</h2>
                                            <p className="text-base mb-2 dark:text-gray-200">Dive into a world of culinary delights with our selection of gourmet recipes and cooking tips, great for both seasoned chefs and home cooks.</p>
                                        </div>
                                        <div className="e-card-actions leading-9 w-full">
                                            <ButtonComponent cssClass="e-block" type="button">View Details</ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg gap-6 e-bigger">
                                    <div className="e-card-image h-56">
                                        <Image src="/assets/images/card/image-button-card/productivity-boost.jpg" layout="fill" objectFit="cover" alt="productivity boost" />
                                    </div>
                                    <div className="e-card-stacked grow">
                                        <div className="e-card-content text-center grow">
                                            <h2 className="text-xl font-semibold mb-3 text-gray-950 dark:text-gray-50 line-clamp-2">Productivity Boost</h2>
                                            <p className="text-base mb-2 dark:text-gray-200">Unlock the secrets to enhanced productivity with practical tips and tools designed to help you stay organized and focused.</p>
                                        </div>
                                        <div className="e-card-actions leading-9 w-full">
                                            <ButtonComponent cssClass="e-block" type="button">View Details</ButtonComponent>
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
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-image" style={{ height: "232px" }}>
                                            <Image src="/assets/images/card/image-button-card/adventure-awaits.jpg" layout="fill" objectFit="cover" alt="adventure awaits" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content text-center flex-grow-1 py-4 text-body">
                                                <h4 className="mb-3 fw-bold lh-sm text-truncate">Adventure Awaits</h4>
                                                <p className="fs-6 mb-0">Discover exciting travel destinations that offer unique experiences and breathtaking landscapes, from serene beaches to rugged mountains.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger pb-4 w-100 lh-lg">
                                                <ButtonComponent cssClass="e-block e-outline" type="button">View Details</ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-image" style={{ height: "232px" }}>
                                            <Image src="/assets/images/card/image-button-card/gourmet-delights.jpg" layout="fill" objectFit="cover" alt="gourmet delights" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content text-center flex-grow-1 py-4 text-body">
                                                <h4 className="mb-3 fw-bold lh-sm text-truncate">Gourmet Delights</h4>
                                                <p className="fs-6 mb-0">Dive into a world of culinary delights with our selection of gourmet recipes and cooking tips, great for both seasoned chefs and home cooks.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger pb-4 w-100 lh-lg">
                                                <ButtonComponent cssClass="e-block e-outline" type="button">View Details</ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3">
                                        <div className="e-card-image" style={{ height: "232px" }}>
                                            <Image src="/assets/images/card/image-button-card/productivity-boost.jpg" layout="fill" objectFit="cover" alt="productivity boost" />
                                        </div>
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-content text-center flex-grow-1 py-4 text-body">
                                                <h4 className="mb-3 fw-bold lh-sm text-truncate">Productivity Boost</h4>
                                                <p className="fs-6 mb-0">Unlock the secrets to enhanced productivity with practical tips and tools designed to help you stay organized and focused.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger pb-4 w-100 lh-lg">
                                                <ButtonComponent cssClass="e-block e-outline" type="button">View Details</ButtonComponent>
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
