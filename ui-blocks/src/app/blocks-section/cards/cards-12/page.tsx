'use client';

import { useEffect, useState } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

export default function Card12() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-12' && blockData.theme) {
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
                            <div className="px-4 py-10 sm:px-6" style={{ minHeight: "36rem" }}>
                                <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 sm:grid-cols-2 xl:gap-10">
                                    <div className="e-card rounded-lg gap-1 e-bigger justify-start">
                                        <div className="e-card-content flex-1">
                                            <span className="e-avatar e-avatar-large e-avatar-circle text-primary-600 bg-primary-100 mt-6 mb-5">
                                                <span className="e-icons e-group-icon text-2xl"></span>
                                            </span>
                                            <h2 className="text-xl mb-3 font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Adventure Parks</h2>
                                            <p className="text-base dark:text-gray-200">Dive into exhilarating experiences at adventure parks with thrilling rides, obstacle courses, and outdoor challenges. Perfect for families and adrenaline seekers.</p>
                                        </div>
                                        <div className="e-card-actions leading-9">
                                            <div className="flex justify-between h-10">
                                                <div className="relative">
                                                    <span className="e-avatar e-avatar-circle absolute" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle absolute left-7" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle bg-primary-600 text-white absolute left-14">2+</span>
                                                </div>
                                                <RatingComponent cssClass="e-small" precision="Exact" value={3.5} readOnly={true}></RatingComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg gap-1 e-bigger justify-start">
                                        <div className="e-card-content flex-1">
                                            <span className="e-avatar e-avatar-large e-avatar-circle text-primary-600 bg-primary-100 mt-6 mb-5">
                                                <span className="e-icons e-group-icon text-2xl"></span>
                                            </span>
                                            <h2 className="text-xl mb-3 font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Urban Hotels</h2>
                                            <p className="text-base dark:text-gray-200">Stay in style at sophisticated urban hotels offering top-notch amenities and exceptional service. Enjoy chic accommodations, fine dining, and convenient city access.</p>
                                        </div>
                                        <div className="e-card-actions leading-9">
                                            <div className="flex justify-between h-10">
                                                <div className="relative">
                                                    <span className="e-avatar e-avatar-circle absolute" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle absolute left-7" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle bg-primary-600 text-white absolute left-14">2+</span>
                                                </div>
                                                <RatingComponent cssClass="e-small" precision="Exact" value={3.5} readOnly={true}></RatingComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-card rounded-lg gap-1 e-bigger justify-start">
                                        <div className="e-card-content flex-1">
                                            <span className="e-avatar e-avatar-large e-avatar-circle text-primary-600 bg-primary-100 mt-6 mb-5">
                                                <span className="e-icons e-group-icon text-2xl"></span>
                                            </span>
                                            <h2 className="text-xl mb-3 font-semibold text-gray-950 dark:text-gray-50 line-clamp-2">Coastal Towns</h2>
                                            <p className="text-base dark:text-gray-200">Explore picturesque coastal towns with charming streets, beautiful beaches, and vibrant local culture. Relax by the shore, enjoy fresh seafood, and take in the ocean views.</p>
                                        </div>
                                        <div className="e-card-actions leading-9">
                                            <div className="flex justify-between h-10">
                                                <div className="relative">
                                                    <span className="e-avatar e-avatar-circle absolute" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle absolute left-7" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle bg-primary-600 text-white absolute left-14">2+</span>
                                                </div>
                                                <RatingComponent cssClass="e-small" precision="Exact" value={3.5} readOnly={true}></RatingComponent>
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
                                    <div className="e-card e-bigger shadow h-100 p-2 justify-content-start">
                                        <div className="e-card-content flex-1">
                                            <span className="e-avatar e-avatar-large e-avatar-circle text-primary-emphasis bg-body-tertiary">
                                                <span className="e-icons e-group-icon fs-5 fw-medium"></span>
                                            </span>
                                            <h2 className="fs-4 fw-bolder lh-sm text-truncate mt-3">Adventure Parks</h2>
                                            <p className="fs-6 my-2">Dive into exhilarating experiences at adventure parks with thrilling rides, obstacle courses, and outdoor challenges. Perfect for families and adrenaline seekers.</p>
                                        </div>
                                        <div className="e-card-actions">
                                            <div className="d-flex w-100 align-items-center justify-content-between flex-row">
                                                <div className="position-relative px-5 py-4">
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute start-0 top-0" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute ms-4 start-0 top-0" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute ms-5 start-0 top-0 bg-primary text-white">2+</span>
                                                </div>
                                                <RatingComponent cssClass="e-small align-self-start" precision="Exact" value={3.5} readOnly={true}></RatingComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow h-100 p-2 justify-content-start">
                                        <div className="e-card-content flex-1">
                                            <span className="e-avatar e-avatar-large e-avatar-circle text-primary-emphasis bg-body-tertiary">
                                                <span className="e-icons e-group-icon fs-5 fw-medium"></span>
                                            </span>
                                            <h2 className="fs-4 fw-bolder lh-sm text-truncate mt-3">Urban Hotels</h2>
                                            <p className="fs-6 my-2">Stay in style at sophisticated urban hotels offering top-notch amenities and exceptional service. Enjoy chic accommodations, fine dining, and convenient.</p>
                                        </div>
                                        <div className="e-card-actions">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div className="position-relative px-5 py-4">
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute start-0 top-0" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute ms-4 start-0 top-0" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute ms-5 start-0 top-0 bg-primary text-white">2+</span>
                                                </div>
                                                <RatingComponent cssClass="e-small align-self-start" precision="Exact" value={3.5} readOnly={true}></RatingComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card e-bigger shadow h-100 p-2 justify-content-start">
                                        <div className="e-card-content flex-1">
                                            <span className="e-avatar e-avatar-large e-avatar-circle text-primary-emphasis bg-body-tertiary">
                                                <span className="e-icons e-group-icon fs-5 fw-medium"></span>
                                            </span>
                                            <h2 className="fs-4 fw-bolder lh-sm text-truncate mt-3">Coastal Towns</h2>
                                            <p className="fs-6 my-2">Explore picturesque coastal towns with charming streets, beautiful beaches, and vibrant local culture. Relax by the shore, enjoy fresh seafood.</p>
                                        </div>
                                        <div className="e-card-actions">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <div className="position-relative px-5 py-4">
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute start-0 top-0" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute ms-4 start-0 top-0" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-13.jpg)" }}></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-large position-absolute ms-5 start-0 top-0 bg-primary text-white">2+</span>
                                                </div>
                                                <RatingComponent cssClass="e-small align-self-start" precision="Exact" value={3.5} readOnly={true}></RatingComponent>
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
