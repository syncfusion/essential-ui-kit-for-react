'use client';

import { useEffect, useState } from "react";
import { AppBarComponent, BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function TileView4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const busDetails: any[] = [
        {
            id: 1,
            company: 'Skyline Travels',
            type: 'A/C Seater / Sleeper (2+1)',
            rating: 3,
            reviews: 4532,
            departureTime: '23:30',
            arrivalTime: '07:00',
            duration: '07:30',
            seats: 33,
            price: 34,
            logo: 'skyline-travels.png'
        },
        {
            id: 2,
            company: 'Delta Travels',
            type: 'A/C Seater',
            rating: 3,
            reviews: 123,
            departureTime: '20:30',
            arrivalTime: '03:30',
            duration: '07:00',
            seats: 20,
            price: 45,
            logo: 'delta-travels.png'
        },
        {
            id: 3,
            company: 'Naoka Travels',
            type: 'A/C Seater',
            rating: 4,
            reviews: 2344,
            departureTime: '19:00',
            arrivalTime: '03:00',
            duration: '07:00',
            seats: 18,
            price: 33,
            logo: 'naoka-travels.png'
        },
        {
            id: 4,
            company: 'Igloo Travels',
            type: 'A/C Seater',
            rating: 4.5,
            reviews: 23542,
            departureTime: '18:00',
            arrivalTime: '02:00',
            duration: '08:00',
            seats: 20,
            price: 30,
            logo: 'igloo-travels.png'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-4' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["bus-details"]}>
                            <AppBarComponent className="shadow-none px-0">
                                <div className="px-6 xl:px-10">
                                    <BreadcrumbComponent enableNavigation={false} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}>
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective iconCss="e-icons e-home" text="Home"></BreadcrumbItemDirective>
                                            <BreadcrumbItemDirective text="Buses"></BreadcrumbItemDirective>
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent className="e-flat sf-icon-notification-bell-ring-03 text-base" type="button"></ButtonComponent>
                                    <span className="e-avatar e-avatar-circle e-avatar-small shrink-0 ml-6">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                </div>
                            </AppBarComponent>
                            <div className="shadow-md border-y border-gray-200 dark:border-gray-600">
                                <div className="flex flex-col justify-between gap-4 p-4 sm:px-6 md:flex-row md:items-center xl:px-10">
                                    <p className="text-xl font-semibold dark:text-gray-50">NYC - Washington DC Buses</p>
                                    <div className="flex gap-3">
                                        <div className="e-input-group w-full md:w-72">
                                            <span className="e-input-group-icon e-icons e-search"></span>
                                            <input className="e-input !pl-0" type="text" placeholder="Search Buses" />
                                        </div>
                                        <ButtonComponent className="hidden sm:inline-block" iconCss="e-icons e-filter" content="Filter" type="button"></ButtonComponent>
                                        <ButtonComponent className="sm:hidden" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 py-6 px-4 sm:px-6 xl:px-10">
                                <p className="text-xl font-semibold text-gray-900 dark:text-gray-50">{busDetails.length} Buses Found</p>
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={busDetails} template={(data: any) => (
                                    <div className="e-card flex-col gap-3 p-6 rounded-2xl sm:flex-row">
                                        <span className="e-avatar e-avatar-xlarge e-avatar-circle shrink-0">
                                            <img src={"/react/essential-ui-kit/blocks/assets/images/tile-view/travels/" + data.logo} width={56} height={56} alt="company logo" />
                                        </span>
                                        <div className="e-card-stacked !justify-normal !flex-col gap-2 w-full">
                                            <div className="e-card-header gap-1 !flex-col !p-0">
                                                <div className="e-card-header-title">
                                                    <p className="text-lg font-semibold text-wrap sm:w-11/12 text-gray-900 dark:text-gray-50">{data.company}</p>
                                                </div>
                                                <div className="e-card-sub-title text-nowrap">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{data.type}</p>
                                                </div>
                                            </div>
                                            <div className="e-card-content !p-0 flex items-center flex-wrap gap-4 text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <RatingComponent cssClass="e-small" value={data.rating} precision="Exact"></RatingComponent>
                                                    <span>{data.reviews} reviews</span>
                                                </div>
                                                <span className="e-bigger e-badge e-badge-pill e-badge-success">Free date change</span>
                                            </div>
                                        </div>
                                        <div className="e-card-actions !p-0 !flex flex-col shrink-0 text-gray-500 mt-1 dark:text-gray-400 sm:text-end sm:basis-44 sm:mt-0">
                                            <p className="text-xl font-medium mb-1.5"><span className="font-semibold text-gray-900 dark:text-gray-50">{data.departureTime}</span> - {data.arrivalTime}</p>
                                            <div className="flex text-sm mb-2 gap-1.5 sm:justify-end">
                                                <p>{data.duration} hrs</p>
                                                <div className="border-s border-gray-500 dark:border-gray-400"></div>
                                                <p>{data.seats} seats</p>
                                            </div>
                                            <p className="text-base mb-4 sm:mb-3">Starting at <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">{data.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span></p>
                                            <ButtonComponent className="e-primary e-block" type="button">Show seats</ButtonComponent>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["bus-details"]}>
                            <AppBarComponent className="px-0">
                                <div className="px-3 px-sm-4 px-xl-5">
                                    <BreadcrumbComponent enableNavigation={false} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}>
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective iconCss="e-icons e-home" text="Home"></BreadcrumbItemDirective>
                                            <BreadcrumbItemDirective text="Buses"></BreadcrumbItemDirective>
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent className="e-flat sf-icon-notification-bell-ring-03 fs-6" type="button"></ButtonComponent>
                                    <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0 ms-4">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                </div>
                            </AppBarComponent>
                            <div className="shadow border-top border-bottom border-light-subtle bg-body">
                                <div className="d-flex flex-column justify-content-between gap-3 flex-md-row p-3 px-sm-4 px-xl-5">
                                    <h5 className="fw-bold mb-0 lh-base text-body">NYC - Washington DC Buses</h5>
                                    <div className="d-flex gap-2">
                                        <div className="e-input-group me-1 flex-grow-1 felx-sm-grow-0">
                                            <span className="e-input-group-icon e-icons e-search border-0"></span>
                                            <input className="e-input ps-0" type="text" placeholder="Search Buses" />
                                        </div>
                                        <ButtonComponent className="e-outline d-none d-sm-inline-block" iconCss="e-icons e-filter" content="Filter" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 py-4 px-3 px-sm-4 px-xl-5">
                                <h5 className="fw-bold mb-0 text-body">{busDetails.length} Buses Found</h5>
                                <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={busDetails} template={(data: any) => (
                                    <div className="e-card d-flex flex-column gap-3 p-4 rounded-4 flex-sm-row">
                                        <span className="e-avatar e-avatar-xlarge e-avatar-circle flex-shrink-0">
                                            <img src={"/react/essential-ui-kit/blocks/assets/images/tile-view/travels/" + data.logo} width={56} height={56} alt="company logo" />
                                        </span>
                                        <div className="e-card-stacked flex-column flex-grow-1 justify-content-start">
                                            <div className="e-card-header p-0 flex-column">
                                                <div className="e-card-header-title">
                                                    <h6 className="mb-1 fw-bold text-body">{data.company}</h6>
                                                </div>
                                                <div className="e-card-sub-title text-body-secondary">
                                                    <p className="mb-2">{data.type}</p>
                                                </div>
                                            </div>
                                            <div className="e-card-content p-0 d-flex align-items-center flex-wrap gap-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <RatingComponent cssClass="e-small" value={data.rating} precision="Exact"></RatingComponent>
                                                    <span className="text-body-secondary">{data.reviews} reviews</span>
                                                </div>
                                                <span className="e-bigger e-badge e-badge-pill e-badge-success">Free date change</span>
                                            </div>
                                        </div>
                                        <div className="e-card-actions p-0 d-flex flex-column lh-base text-sm-end flex-sm-shrink-0 col-md-3 col-lg-2">
                                            <p className="mb-1 fs-5 fw-medium text-body-secondary"><span className="text-body">{data.departureTime}</span> - {data.arrivalTime}</p>
                                            <div className="d-flex mb-2 gap-2 small text-body-secondary justify-content-sm-end">
                                                <p className="mb-0">{data.duration} hrs</p>
                                                <div className="border-start border-light-subtle"></div>
                                                <p className="mb-0">{data.seats} seats</p>
                                            </div>
                                            <p className="mb-2 pb-1 fs-6 fw-medium text-body-secondary">Starting at <span className="fs-5 fw-bold lh-sm text-body">{data.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span></p>
                                            <ButtonComponent className="e-primary e-block" type="button">Show seats</ButtonComponent>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
