'use client';

import { useEffect, useState } from "react";
import { AppBarComponent, BreadcrumbComponent, BreadcrumbItemsDirective, BreadcrumbItemDirective } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import Image from "next/image";
import styles from "./page.module.css";

export default function TileView3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const transactionDetails: any[] = [
        {
            transactionId: 'TXN000245',
            title: 'Payment for project management services',
            company: 'Cisco Solutions Pvt. Ltd',
            amount: 25000,
            currency: 'USD',
            paymentType: 'Wire Transfer',
            category: 'Consulting',
            status: 'Completed'
        },
        {
            transactionId: 'TXN000246',
            title: 'Advance payment for Q3 contract',
            company: 'Client John Chris',
            amount: 100000,
            currency: 'USD',
            paymentType: 'Deposit',
            category: 'Income',
            status: 'Completed'
        },
        {
            transactionId: 'TXN000247',
            title: 'Purchase of new office equipment',
            company: 'Office Supplies Inc',
            amount: 7500,
            currency: 'USD',
            paymentType: 'Credit Card',
            category: 'Supplies',
            status: 'Completed'
        },
        {
            transactionId: 'TXN000248',
            title: 'Payment for invoice #9876',
            company: 'Delta Supplier',
            amount: 15000,
            currency: 'USD',
            paymentType: 'ACH Transfer',
            category: 'Supplies',
            status: 'Pending'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-3' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["transaction-details"]}>
                            <AppBarComponent className="shadow-none px-0">
                                <div className="px-4 sm:px-6 xl:px-10">
                                    <div className="e-input-group w-full sm:max-w-lg">
                                        <span className="e-input-group-icon e-icons e-search"></span>
                                        <input className="e-input !pl-0" type="text" placeholder="Search" />
                                    </div>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent cssClass="e-flat sf-icon-notification-bell-01 text-base ml-2" type="button"></ButtonComponent>
                                    <span className="e-avatar e-avatar-circle e-avatar-small shrink-0 ml-3">
                                        <Image src="/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                </div>
                            </AppBarComponent>
                            <div className="border-t border-gray-200 dark:border-gray-600">
                                <div className="flex flex-col gap-3 p-4 sm:px-6 xl:px-10">
                                    <BreadcrumbComponent enableNavigation={false} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}>
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective iconCss="e-icons e-home" text="Dashboard"></BreadcrumbItemDirective>
                                            <BreadcrumbItemDirective iconCss="sf-icon-dollar" text="Transactions"></BreadcrumbItemDirective>
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                    <div className="flex flex-col justify-between gap-4 mb-3 text-gray-900 dark:text-gray-50 md:flex-row">
                                        <div className="flex justify-between">
                                            <p className="text-xl font-medium">Transactions</p>
                                            <ButtonComponent cssClass="e-primary sm:hidden e-icons e-plus" type="button"></ButtonComponent>
                                        </div>
                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <div className="flex items-center gap-2 text-sm">
                                                <SwitchComponent cssClass="w-9"></SwitchComponent>
                                                <span>Show pending only</span>
                                            </div>
                                            <DropDownButtonComponent cssClass="w-fit" content="This week" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                            <ButtonComponent cssClass="e-primary hidden sm:inline-block" type="button">Add New Transaction</ButtonComponent>
                                        </div>
                                    </div>
                                    <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={transactionDetails} template={(data: any) => (
                                        <div className="e-card flex-row gap-1 rounded-lg sm:gap-0 p-4">
                                            <span className={`e-avatar e-avatar-large e-avatar-circle shrink-0 mr-2 sm:mr-4 ${data.paymentType === "Credit Card" ? "bg-green-100 text-green-700 dark:text-green-500" : data.paymentType === "Wire Transfer" ? "bg-indigo-100 dark:bg-cyan-800 text-indigo-600 dark:text-cyan-400" : data.paymentType === "Deposit" ? "bg-orange-100 text-orange-500 dark:text-orange-700" : "bg-cyan-100 dark:bg-sky-100 text-cyan-700 dark:text-cyan-600"}`}>
                                                <i className="sf-icon-dollar text-2xl"></i>
                                            </span>
                                            <div className="e-card-stacked grow sm:space-y-3">
                                                <div className="e-card-header !flex-col gap-2 sm:!flex-row items-start !p-0">
                                                    <div className="e-card-header-title">
                                                        <p className="text-sm sm:text-base xl:text-lg font-medium text-gray-900 dark:text-gray-50">{data.title}</p>
                                                        <p className="text-xs sm:text-sm text-gray-500 mt-1 dark:text-gray-400">{data.company}</p>
                                                    </div>
                                                    <div className="e-card-sub-title !flex flex-row-reverse grow gap-2 justify-between items-center sm:flex-row sm:mr-4">
                                                        <span className={`e-bigger e-badge e-badge-pill ${data.status === "Completed" ? "e-badge-success" : "e-badge-danger"}`}>{data.status}</span>
                                                        <p className="text-base sm:text-lg xl:text-xl font-medium text-gray-900 dark:text-gray-50">{data.amount.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</p>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !p-0 text-gray-700 dark:text-gray-200">
                                                    <div className="hidden items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 sm:flex flex-wrap">
                                                        <p className="flex items-center gap-2">
                                                            Transaction ID:<a className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="javascript:void(0);">{data.transactionId}</a>
                                                        </p>
                                                        <p className="flex gap-2">Payment Type:<span className="text-gray-700 dark:text-gray-200">{data.paymentType}</span></p>
                                                        <p className="flex gap-2">Category:<span className="text-gray-700 dark:text-gray-200">{data.category}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-actions self-start !p-0 leading-none">
                                                <ButtonComponent className="e-round e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["transaction-details"]}>
                            <AppBarComponent className="px-0">
                                <div className="justify-content-between gap-4 px-3 px-sm-4 px-xl-5">
                                    <div className="e-input-group" style={{ maxWidth: "514px" }}>
                                        <span className="e-input-group-icon e-icons e-search border-0"></span>
                                        <input className="e-input ps-0" type="text" placeholder="Search" />
                                    </div>
                                    <div className="d-flex gap-2">
                                        <ButtonComponent cssClass="e-flat sf-icon-notification-bell-01 fs-6" type="button"></ButtonComponent>
                                        <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0 ms-1">
                                            <Image src="/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                    </div>
                                </div>
                            </AppBarComponent>
                            <div className="border-top border-light-subtle">
                                <div className="p-3 px-sm-4 px-xl-5">
                                    <BreadcrumbComponent enableNavigation={false} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}>
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective iconCss="e-icons e-home" text="Dashboard"></BreadcrumbItemDirective>
                                            <BreadcrumbItemDirective iconCss="sf-icon-dollar" text="Transactions"></BreadcrumbItemDirective>
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                    <div className="d-flex flex-column justify-content-between gap-4 mt-2 pt-1 flex-md-row">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 fw-medium lh-base text-body">Transactions</h5>
                                            <ButtonComponent cssClass="e-primary d-sm-none e-icons e-plus" type="button"></ButtonComponent>
                                        </div>
                                        <div className="d-flex flex-column align-items-start align-items-sm-center gap-3 flex-sm-row">
                                            <div className="d-flex align-items-center gap-2 fs-6 text-body">
                                                <SwitchComponent cssClass="me-1" style={{ width: "36px" }}></SwitchComponent>
                                                <span>Show pending only</span>
                                            </div>
                                            <DropDownButtonComponent cssClass="e-outline" content="This week" type="button" beforeOpen={(e) => (e.cancel = true)}></DropDownButtonComponent>
                                            <ButtonComponent cssClass="e-primary d-none d-sm-inline-block" type="button">Add New Transaction</ButtonComponent>
                                        </div>
                                    </div>
                                    <ListViewComponent className="border-0 mt-4" cssClass="e-list-template" dataSource={transactionDetails} template={(data: any) => (
                                        <div className="e-card d-flex flex-row gap-2 gap-sm-0 lh-base px-2 py-3 rounded-3 px-sm-3">
                                            <span className={`e-avatar e-avatar-large e-avatar-circle flex-shrink-0 me-2 me-sm-3 ${data.paymentType === "Deposit" ? "bg-warning-subtle text-warning-emphasis" : data.paymentType === "Wire Transfer" ? "bg-success-subtle text-success-emphasis" : data.paymentType === "Credit Card" ? "bg-info-subtle text-info-emphasis" : "bg-primary-subtle text-primary"}`}>
                                                <i className="sf-icon-dollar fs-3"></i>
                                            </span>
                                            <div className="e-card-stacked flex-grow-1">
                                                <div className="e-card-header flex-column gap-2 flex-sm-row align-items-start p-0 mb-sm-2">
                                                    <div className="e-card-header-title">
                                                        <h6 className="fw-medium mb-0 text-body">{data.title}</h6>
                                                        <p className="fs-6 text-body-secondary my-1">{data.company}</p>
                                                    </div>
                                                    <div className="e-card-sub-title d-flex flex-row-reverse gap-2 justify-content-between flex-sm-row align-items-center flex-grow-1 me-sm-3">
                                                        <span className={`e-bigger e-badge e-badge-pill ${data.status === "Completed" ? "e-badge-success" : "e-badge-danger"}`}>{data.status}</span>
                                                        <p className="fw-medium text-body fs-5 mb-0 lh-sm">{data.amount.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</p>
                                                    </div>
                                                </div>
                                                <div className="e-card-content p-0">
                                                    <div className="d-none d-sm-flex align-items-center gap-4 fs-6 text-body-secondary flex-wrap row-gap-2">
                                                        <p className="d-flex align-items-center gap-2 mb-0">
                                                            Transaction ID:<a className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium" href="javascript:void(0);">{data.transactionId}</a>
                                                        </p>
                                                        <p className="d-flex gap-2 mb-0">Payment Type:<span className="fw-medium">{data.paymentType}</span></p>
                                                        <p className="d-flex gap-2 mb-0">Category:<span className="fw-medium">{data.category}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-actions align-self-start p-0">
                                                <ButtonComponent className="e-round e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
