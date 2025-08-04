'use client';

import { useEffect, useState } from "react";
import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function TileView5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const jobDetails: any[] = [
        {
            id: 1,
            title: "Embedded Power Electronics Design Engineer (Entry-Level)",
            company: "Nokia Solutions Pvt. Ltd",
            reviews: 343,
            experience: "0-2 yrs",
            salary: "8-12 Lacs PA",
            location: "USA",
            posted: "2 days ago",
            openings: 1,
            applicants: 927,
            logo: "nokia.png"
        },
        {
            id: 2,
            title: "Walk in Interview_Salesforce Developer",
            company: "Delta Solutions Pvt. Ltd",
            reviews: 4567,
            experience: "0-5 yrs",
            salary: "6-10 Lacs PA",
            location: "UK",
            posted: "4 days ago",
            openings: 4,
            applicants: 234,
            logo: "salesforce.png"
        },
        {
            id: 3,
            title: "Walk in Interview_Salesforce Developer",
            company: "Cisco Solutions Pvt. Ltd",
            reviews: 4567,
            experience: "2-5 yrs",
            salary: "10-16 Lacs PA",
            location: "France",
            posted: "8 days ago",
            openings: 2,
            applicants: 12,
            logo: "cisco.png"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-5' && blockData.theme) {
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
                        <div id={styles["job-details"]}>
                            <AppBarComponent className="shadow-none px-0 py-3 h-auto" style={{ minHeight: "78px" }}>
                                <div className="flex flex-wrap gap-x-4 gap-y-3 px-6 xl:px-10">
                                    <DropDownButtonComponent cssClass="e-primary" content="All jobs" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent content="Any time" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent content="Any experience" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent content="Any company" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent content="Any location" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                </div>
                            </AppBarComponent>
                            <div className="border-t border-gray-200 dark:border-gray-600">
                                <div className="flex flex-col py-6 px-4 sm:px-6 xl:px-10">
                                    <div className="flex justify-between mb-6 dark:text-gray-50">
                                        <p className="text-xl font-semibold">250 jobs found</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <SwitchComponent cssClass="w-9" checked={true}></SwitchComponent>
                                            <span>Remote Only</span>
                                        </div>
                                    </div>
                                    <div className="e-input-group mb-6">
                                        <span className="e-input-group-icon e-icons e-search"></span>
                                        <input className="e-input !pl-0" type="text" placeholder="Search Jobs" />
                                    </div>
                                    <ListViewComponent className="!border-0 mb-2" cssClass="e-list-template" dataSource={jobDetails} template={(data: any) => (
                                        <div className="e-card flex-col gap-4 p-4 rounded-2xl sm:pr-5 sm:p-6 sm:flex-row">
                                            <span className="e-avatar e-avatar-xlarge e-avatar-circle shrink-0 bg-transparent">
                                                <img src={"/react/essential-ui-kit/blocks/assets/images/tile-view/job-site/" + data.logo} width={56} height={56} alt="company logo" />
                                            </span>
                                            <div className="e-card-stacked grow space-y-3 px-1">
                                                <div className="e-card-header !flex-col gap-2 !p-0">
                                                    <div className="e-card-header-title">
                                                        <p className="text-base font-medium text-wrap sm:w-11/12 text-gray-900 dark:text-gray-50">{data.title}</p>
                                                    </div>
                                                    <div className="e-card-sub-title text-nowrap !flex items-center gap-1.5">
                                                        <p className="border-e text-sm text-gray-500 pr-3 dark:border-gray-600 dark:text-gray-400 text-truncate">{data.company}</p>
                                                        <div className="flex items-center gap-1">
                                                            <ButtonComponent cssClass="e-flat e-small" iconCss="e-icons e-star-filled !text-yellow-300" type="button"></ButtonComponent>
                                                            <span className="text-xs text-gray-700 dark:text-gray-200">{data.reviews} reviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content flex flex-wrap gap-3 !px-0 !pb-1 text-gray-700 dark:text-gray-200">
                                                    <span className="flex items-center gap-1"><span className="sf-icon-laptop text-sm mx-2 text-gray-500 dark:text-gray-300"></span>{data.experience}</span>
                                                    <div className="border-e dark:border-gray-600 my-1"></div>
                                                    <span className="flex items-center gap-1"><span className="sf-icon-dollar text-base mx-2 text-gray-500 dark:text-gray-300"></span>{data.salary}</span>
                                                    <div className="border-e dark:border-gray-600 my-1"></div>
                                                    <span className="flex items-center gap-1"><span className="e-icons e-location mx-2 text-gray-500 dark:text-gray-300"></span>{data.location}</span>
                                                </div>
                                                <div className="e-card-actions !px-0 !pb-1 !flex flex-col gap-6 sm:flex-row">
                                                    <div className="flex items-center flex-wrap gap-x-3 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <p className="border-e pr-2 dark:border-gray-600">Posted: {data.posted}</p>
                                                        <p className="border-e pr-2 dark:border-gray-600">Openings: 1</p>
                                                        <p>Applicants: {data.applicants}</p>
                                                    </div>
                                                    <ButtonComponent className="e-primary ml-auto w-full sm:w-fit" content="Apply" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                            <ButtonComponent className="e-flat e-round absolute top-6 right-4 sm:right-6" iconCss="e-icons e-bookmark" type="button"></ButtonComponent>
                                        </div>)}
                                    ></ListViewComponent>
                                    <ButtonComponent className="mx-auto !px-11" content="Load More Jobs" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["job-details"]}>
                            <AppBarComponent className="px-0 py-3 h-auto" style={{ minHeight: "78px" }}>
                                <div className="d-flex flex-wrap gap-3 px-3 px-sm-4 px-xl-5">
                                    <DropDownButtonComponent cssClass="e-primary" content="All jobs" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent cssClass="e-outline" content="Any time" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent cssClass="e-outline" content="Any experience" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent cssClass="e-outline" content="Any company" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent cssClass="e-outline" content="Any location" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                </div>
                            </AppBarComponent>
                            <div className="border-top border-light-subtle">
                                <div className="d-flex flex-column px-3 py-4 px-sm-4 px-xl-5">
                                    <div className="d-flex justify-content-between text-body mb-4">
                                        <h5 className="fw-bold mb-0">250 jobs found</h5>
                                        <div className="d-flex align-items-center gap-2">
                                            <SwitchComponent checked={true} style={{ width: "36px" }}></SwitchComponent>
                                            <span>Remote Only</span>
                                        </div>
                                    </div>
                                    <div className="e-input-group mb-4">
                                        <span className="e-input-group-icon e-icons e-search border-0"></span>
                                        <input className="e-input" type="text" placeholder="Search Jobs" />
                                    </div>
                                    <ListViewComponent className="border-0 mb-1" cssClass="e-list-template" dataSource={jobDetails} template={(data: any) => (
                                        <div className="e-card d-flex flex-column gap-3 flex-md-row rounded-4 p-3 ps-4">
                                            <span className="e-avatar e-avatar-xlarge e-avatar-circle flex-shrink-0 bg-transparent">
                                                <img src={"/react/essential-ui-kit/blocks/assets/images/tile-view/job-site/" + data.logo} width={56} height={56} alt="company logo" />
                                            </span>
                                            <div className="e-card-stacked flex-grow-1 pe-1 py-1">
                                                <div className="e-card-header flex-column mb-2 p-0">
                                                    <div className="e-card-header-title pt-1">
                                                        <h6 className="lh-base text-body mb-sm-1">{data.title}</h6>
                                                    </div>
                                                    <div className="e-card-sub-title d-flex align-items-center gap-2 mb-1">
                                                        <p className="border-end text-body-secondary pe-3 mb-0 border-light-subtle text-truncate">{data.company}</p>
                                                        <div className="d-flex align-items-center gap-1 ms-1">
                                                            <ButtonComponent className="e-flat" iconCss="e-icons e-star-filled text-warning" type="button"></ButtonComponent>
                                                            <span className="small text-body-secondary mb-0 text-nowrap">{data.reviews} reviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content p-0 d-flex flex-wrap gap-2 mb-3 text-body-secondary">
                                                    <span className="d-flex align-items-center gap-1"><span className="sf-icon-laptop fs-6 mx-1"></span>{data.experience}</span>
                                                    <div className="border-end border-light-subtle m-1"></div>
                                                    <span className="d-flex align-items-center gap-1"><span className="sf-icon-dollar fs-6 mx-1"></span>{data.salary}</span>
                                                    <div className="border-end border-light-subtle m-1"></div>
                                                    <span className="d-flex align-items-center gap-1"><span className="e-icons e-location mx-1"></span>{data.location}</span>
                                                </div>
                                                <div className="e-card-actions d-flex flex-column gap-3 justify-content-between flex-sm-row lh-sm p-1 ps-0 text-body-secondary">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 lh-base">
                                                        <p className="border-end pe-2 mb-0">Posted: {data.posted}</p>
                                                        <p className="border-end pe-2 mb-0">Openings: {data.openings}</p>
                                                        <p className="mb-0">Applicants: {data.applicants}</p>
                                                    </div>
                                                    <ButtonComponent className="e-primary col-12 col-sm-auto" content="Apply" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                            <ButtonComponent className="e-flat e-round position-absolute" iconCss="e-icons e-bookmark" type="button" style={{ right: "24px", top: "24px" }}></ButtonComponent>
                                        </div>)}
                                    ></ListViewComponent>
                                    <ButtonComponent className="e-outline mx-auto px-5" content="Load More Jobs" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
