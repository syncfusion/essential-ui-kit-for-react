'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Card8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-8' && blockData.theme) {
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
                            <div className="px-4 py-10 sm:px-6" style={{ minHeight: '49.5rem' }}>
                                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-10">
                                    <div className="e-card rounded-lg sm:flex-row e-bigger">
                                        <div className="relative sm:w-64 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/majestic-mountains.jpg" alt="majestic mountains" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Majestic Mountains</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content">
                                                <p className="text-base mb-1 dark:text-gray-200">Experience the awe of towering peaks and rugged terrains. Whether you're hiking through lush valleys or conquering challenging summits, the majestic mountains offer breathtaking views.</p>
                                            </div>
                                            <div className="e-card-actions leading-9 w-full">
                                                <ButtonComponent cssClass="e-outline e-primary w-full md:w-fit xl:w-full" content="View Details" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg sm:flex-row e-bigger">
                                        <div className="relative sm:w-64 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/serene-beaches.jpg" alt="serene beaches" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Serene Beaches</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content">
                                                <p className="text-base mb-1 dark:text-gray-200">Unwind on sun-kissed shores with pristine sands and crystal-clear waters. Enjoy swimming, sunbathing, and beachside strolls while savoring the calming rhythm of the ocean.</p>
                                            </div>
                                            <div className="e-card-actions leading-9 w-full">
                                                <ButtonComponent cssClass="e-outline e-primary w-full md:w-fit xl:w-full" content="View Details" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg sm:flex-row e-bigger">
                                        <div className="relative sm:w-64 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/charming-villages.jpg" alt="charming villages" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Charming Villages</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content">
                                                <p className="text-base mb-1 dark:text-gray-200">Immerse yourself in the cozy atmosphere of picturesque villages. Explore cobblestone streets, quaint shops, and friendly local cafes, where each village offers a unique blend of heritage.</p>
                                            </div>
                                            <div className="e-card-actions leading-9 w-full">
                                                <ButtonComponent cssClass="e-outline e-primary w-full md:w-fit xl:w-full" content="View Details" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg sm:flex-row e-bigger">
                                        <div className="relative sm:w-64 h-52 sm:h-auto shrink-0">
                                            <img className="object-cover w-full h-full" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/bustling-metropolises.jpg" alt="bustling metropolises" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header">
                                                <div className="e-card-header-caption">
                                                    <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 !truncate">Bustling Metropolises</h1>
                                                </div>
                                            </div>
                                            <div className="e-card-content">
                                                <p className="text-base mb-1 dark:text-gray-200">Engage with the dynamic energy of major cities where iconic landmarks, diverse cuisines, and vibrant nightlife await. From skyscrapers and shopping districts to cultural attractions, the entertainment is endless.</p>
                                            </div>
                                            <div className="e-card-actions leading-9 w-full">
                                                <ButtonComponent cssClass="e-outline e-primary w-full md:w-fit xl:w-full" content="View Details" type="button"></ButtonComponent>
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
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/majestic-mountains.jpg" alt="majestic mountains" />
                                        </div>
                                        <div className="e-card-stacked pt-2 p-sm-2">
                                            <div className="e-card-header mb-2">
                                                <div className="e-card-header-caption text-body">
                                                    <h4 className="mb-0 fw-bold lh-sm text-truncate">Majestic Mountains</h4>
                                                </div>
                                            </div>
                                            <div className="e-card-content pt-0 text-body">
                                                <p className="fs-6 mb-2">Experience the awe of towering peaks and rugged terrains. Whether you're hiking through lush valleys or conquering challenging summits, the majestic mountains offer breathtaking views.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger d-flex lh-lg">
                                                <ButtonComponent cssClass="e-outline e-primary flex-grow-1 flex-md-grow-0 flex-xl-grow-1" content="View Details" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/serene-beaches.jpg" alt="serene beaches" />
                                        </div>
                                        <div className="e-card-stacked pt-2 p-sm-2">
                                            <div className="e-card-header mb-2">
                                                <div className="e-card-header-caption text-body">
                                                    <h4 className="mb-0 fw-bold lh-sm text-truncate">Serene Beaches</h4>
                                                </div>
                                            </div>
                                            <div className="e-card-content pt-0 text-body">
                                                <p className="fs-6 mb-2">Unwind on sun-kissed shores with pristine sands and crystal-clear waters. Enjoy swimming, sunbathing, and beachside strolls while savoring the calming rhythm of the ocean.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger d-flex lh-lg">
                                                <ButtonComponent cssClass="e-outline e-primary flex-grow-1 flex-md-grow-0 flex-xl-grow-1" content="View Details" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/charming-villages.jpg" alt="charming villages" />
                                        </div>
                                        <div className="e-card-stacked pt-2 p-sm-2">
                                            <div className="e-card-header mb-2">
                                                <div className="e-card-header-caption text-body">
                                                    <h4 className="mb-0 fw-bold lh-sm text-truncate">Charming Villages</h4>
                                                </div>
                                            </div>
                                            <div className="e-card-content pt-0 text-body">
                                                <p className="fs-6 mb-2">Immerse yourself in the cozy atmosphere of picturesque villages. Explore cobblestone streets, quaint shops, and friendly local cafes, where each village offers a unique blend of heritage.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger d-flex lh-lg">
                                                <ButtonComponent cssClass="e-outline e-primary flex-grow-1 flex-md-grow-0 flex-xl-grow-1" content="View Details" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="e-card e-bigger rounded-3 d-flex flex-sm-row flex-col">
                                        <div className="position-relative" style={{ minWidth: "266px", minHeight: "266px" }}>
                                            <img className="object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/card/split-image-card/bustling-metropolises.jpg" alt="bustling metropolises" />
                                        </div>
                                        <div className="e-card-stacked pt-2 p-sm-2">
                                            <div className="e-card-header mb-2">
                                                <div className="e-card-header-caption text-body">
                                                    <h4 className="mb-0 fw-bold lh-sm text-truncate">Bustling Metropolises</h4>
                                                </div>
                                            </div>
                                            <div className="e-card-content pt-0 text-body">
                                                <p className="fs-6 mb-2">Engage with the dynamic energy of major cities where iconic landmarks, diverse cuisines, and vibrant nightlife await. From skyscrapers and shopping districts to cultural attractions, the entertainment is endless.</p>
                                            </div>
                                            <div className="e-card-actions e-bigger d-flex lh-lg">
                                                <ButtonComponent cssClass="e-outline e-primary flex-grow-1 flex-md-grow-0 flex-xl-grow-1" content="View Details" type="button"></ButtonComponent>
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
