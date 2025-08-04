'use client';

import { useEffect, useState } from "react";

export default function Card13() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-13' && blockData.theme) {
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
                                <div className="grid gap-8 lg:grid-cols-2 xl:gap-10">
                                    <div className="e-card rounded-lg sm:flex-row-reverse e-bigger">
                                        <div className="relative sm:w-52 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/urban-oasis.jpg" alt="urban oasis" />
                                        </div>
                                        <div className="e-card-stacked pb-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="text-sm mb-2 text-primary-600 !truncate">Corporate Template</p>
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Urban Oasis</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content grow">
                                                <p className="text-base dark:text-gray-200">Discover tranquil retreats right in the middle of bustling cityscapes. Enjoy peaceful parks, serene rooftop gardens, and cozy spots that offer a calm escape from urban life.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg sm:flex-row-reverse e-bigger">
                                        <div className="relative sm:w-52 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/exotic-wildlife.jpg" alt="exotic wildlife safaris" />
                                        </div>
                                        <div className="e-card-stacked pb-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="text-sm mb-2 text-primary-600 !truncate">Nature Template</p>
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Exotic Wildlife Safaris</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content grow">
                                                <p className="text-base dark:text-gray-200">Embark on thrilling safaris to witness exotic wildlife in their natural habitats. Experience close encounters with majestic animals and stunning landscapes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg sm:flex-row-reverse e-bigger">
                                        <div className="relative sm:w-52 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/island-getaways.jpg" alt="island getaways" />
                                        </div>
                                        <div className="e-card-stacked pb-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="text-sm mb-2 text-primary-600 !truncate">Nature Template</p>
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Island Getaways</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content grow">
                                                <p className="text-base dark:text-gray-200">Relish the beauty of idyllic islands with pristine beaches, clear blue waters, and luxurious resorts. Perfect for relaxation, adventure, and exploring vibrant marine life.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg sm:flex-row-reverse e-bigger">
                                        <div className="relative sm:w-52 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/boutique-hotels.jpg" alt="boutique hotels" />
                                        </div>
                                        <div className="e-card-stacked pb-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="text-sm mb-2 text-primary-600 !truncate">Corporate Template</p>
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Boutique Hotels</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content grow">
                                                <p className="text-base dark:text-gray-200">Enjoy a unique lodging experience at boutique hotels known for their distinctive charm and personalized service. Each hotel offers stylish rooms and exclusive amenities.</p>
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
                        <div className="py-5 px-3 px-md-4 overflow-hidden">
                            <div className="row g-xl-5 g-4">
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row-reverse flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/urban-oasis.jpg" alt="urban oasis" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="small fw-bold text-primary m-0 text-truncate">Corporate Template</p>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h5 className="mb-2 fw-bold lh-sm text-truncate">Urban Oasis</h5>
                                                <p className="fs-6 mb-0">Discover tranquil retreats right in the middle of bustling cityscapes. Enjoy peaceful parks, serene rooftop gardens, and cozy spots that offer a calm escape from urban life.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row-reverse flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/exotic-wildlife.jpg" alt="exotic wildlife safaris" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="small fw-bold text-primary m-0 text-truncate">Nature Template</p>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h5 className="mb-2 fw-bold lh-sm text-truncate">Exotic Wildlife Safaris</h5>
                                                <p className="fs-6 mb-0">Embark on thrilling safaris to witness exotic wildlife in their natural habitats. Experience close encounters with majestic animals, stunning landscapes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row-reverse flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/island-getaways.jpg" alt="island getaways" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="small fw-bold text-primary m-0 text-truncate">Nature Template</p>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h5 className="mb-2 fw-bold lh-sm text-truncate">Island Getaways</h5>
                                                <p className="fs-6 mb-0">Relish the beauty of idyllic islands with pristine beaches, clear blue waters, and luxurious resorts. Perfect for relaxation, adventure, and exploring vibrant marine life.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row-reverse flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/highlighted-feature-card/boutique-hotels.jpg" alt="boutique hotels" />
                                        </div>
                                        <div className="e-card-stacked p-2">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <p className="small fw-bold text-primary m-0 text-truncate">Corporate Template</p>
                                                </div>
                                            </div>
                                            <div className="e-card-content flex-grow-1 text-body">
                                                <h5 className="mb-2 fw-bold lh-sm text-truncate">Boutique Hotels</h5>
                                                <p className="fs-6 mb-0">Enjoy a unique lodging experience at boutique hotels known for their distinctive charm and personalized service. Each hotel offers stylish rooms, exclusive amenities.</p>
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
