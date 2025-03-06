'use client';

import { useEffect, useState } from "react";

export default function Card2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-2' && blockData.theme) {
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
                                <div className="e-card rounded-lg gap-2 pb-2 e-bigger justify-start">
                                    <div className="e-card-header">
                                        <div className="e-card-image overflow-hidden rounded-lg h-52">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-title-description-card/fashion-trends.jpg" alt="fashion trends" />
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <h2 className="text-xl font-semibold mb-3 text-gray-950 dark:text-gray-50 line-clamp-2">Fashion Trends</h2>
                                        <p className="text-base dark:text-gray-200">Discover the latest trends in spring fashion that are taking the world by storm. From vibrant floral prints to chic pastels, this season's styles will refresh your look and keep you on-trend.</p>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg gap-2 pb-2 e-bigger justify-start">
                                    <div className="e-card-header">
                                        <div className="e-card-image overflow-hidden rounded-lg h-52">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-title-description-card/ultimate-workouts.jpg" alt="ultimate workouts" />
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <h2 className="text-xl font-semibold mb-3 text-gray-950 dark:text-gray-50 line-clamp-2">Ultimate Workouts</h2>
                                        <p className="text-base dark:text-gray-200">Transform your fitness routine with our collection of ultimate workouts designed to build strength and endurance, whether you're looking for high-intensity interval training.</p>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg gap-2 pb-2 e-bigger justify-start">
                                    <div className="e-card-header">
                                        <div className="e-card-image overflow-hidden rounded-lg h-52">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/image-title-description-card/tech-innovations.jpg" alt="tech innovations" />
                                        </div>
                                    </div>
                                    <div className="e-card-content flex-1">
                                        <h2 className="text-xl font-semibold mb-3 text-gray-950 dark:text-gray-50 line-clamp-2">Tech Innovations</h2>
                                        <p className="text-base dark:text-gray-200">Explore the latest advancements in technology that are reshaping our world. From groundbreaking gadgets to revolutionary software, stay informed about the innovations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-dark-subtle">
                        <div className="py-5 px-3 px-md-4" style={{ minHeight: '36rem' }}>
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 justify-content-start">
                                        <div className="e-card-header">
                                            <div className="e-card-image rounded-3 overflow-hidden justify-content-start" style={{ height: "198px" }}>
                                                <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-title-description-card/fashion-trends.jpg" alt="fashion trends" />
                                            </div>
                                        </div>
                                        <div className="e-card-stacked flex-grow-1 p-2">
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h4 className="mb-3 fw-bold lh-sm text-truncate">Fashion Trends</h4>
                                                <p className="fs-6 m-0">Discover the latest trends in spring fashion that are taking the world by storm. From vibrant floral prints to chic pastels, this season's styles will refresh your look and keep you on-trend.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 justify-content-start">
                                        <div className="e-card-header">
                                            <div className="e-card-image rounded-3 overflow-hidden justify-content-start" style={{ height: "198px" }}>
                                                <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-title-description-card/ultimate-workouts.jpg" alt="ultimate workouts" />
                                            </div>
                                        </div>
                                        <div className="e-card-stacked flex-grow-1 p-2">
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h4 className="mb-3 fw-bold lh-sm text-truncate">Ultimate Workouts</h4>
                                                <p className="fs-6 m-0">Transform your fitness routine with our collection of ultimate workouts designed to build strength and endurance, whether you're looking for high-intensity interval training.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 d-flex">
                                    <div className="e-card e-bigger rounded-3 justify-content-start">
                                        <div className="e-card-header">
                                            <div className="e-card-image rounded-3 overflow-hidden justify-content-start" style={{ height: "198px" }}>
                                                <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/image-title-description-card/tech-innovations.jpg" alt="tech innovations" />
                                            </div>
                                        </div>
                                        <div className="e-card-stacked flex-grow-1 p-2">
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h4 className="mb-3 fw-bold lh-sm text-truncate">Tech Innovations</h4>
                                                <p className="fs-6 m-0">Explore the latest advancements in technology that are reshaping our world. From groundbreaking gadgets to revolutionary software, stay informed about the innovations.</p>
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
