'use client';

import { useEffect, useRef, useState } from "react";
import { BreadcrumbComponent, BreadcrumbOverflowMode } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Header7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const breadcrumb = useRef<BreadcrumbComponent | null>(null);
    const [maxItems, setMaxItems] = useState<number>(2);
    const [overflowMode, setOverflowMode] = useState<BreadcrumbOverflowMode>(BreadcrumbOverflowMode.None);

    const handleResize = (): void => {
        const width = window.innerWidth;
        updateBreadcrumbItems(width);
    };

    const updateBreadcrumbItems = (width: number): void => {
        if (width < 640) {
            setMaxItems(1);
        } else {
            setMaxItems(2);
        }
        setOverflowMode(maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None);
        setTimeout(() => {
            breadcrumb.current?.refresh();
        }, 200);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-7' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        breadcrumb.current?.refresh();
                    }, 250);
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
        /* SB Code - End */
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-7-tw"} style={{ minHeight: "36rem" }}>
                            <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-600">
                                <div id={styles.breadcrumb}>
                                    <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={overflowMode} maxItems={maxItems} items={[{ iconCss: "e-icons e-folder", text: "Reports" }, { text: "Business Metrics" }]}></BreadcrumbComponent>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center -space-x-3 mr-1">
                                        <span className="e-avatar e-avatar-small e-avatar-circle z-30">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <span className="e-avatar e-avatar-small e-avatar-circle z-20 hidden sm:block">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <span className="e-avatar e-avatar-small e-avatar-circle z-10 hidden sm:block">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <span className="e-avatar e-avatar-small e-avatar-circle z-0 block sm:hidden text-sm bg-gray-700 dark:bg-gray-200 text-white dark:text-black pl-1">+ 2</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <ButtonComponent cssClass="e-flat hidden sm:block" type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="sf-icon-share-arrow-04 text-base"></span>
                                                <span className="ml-1 hidden lg:block">Share</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent cssClass="e-flat mx-2 hidden sm:block" iconCss="e-icons e-comment-show" type="button" ></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat" iconCss=" e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 sm:px-6 py-4 sm:py-3">
                                <div className="flex justify-between gap-3 sm:gap-6">
                                    <div className="block">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Metrics</h3>
                                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">Overview of our sales pipeline, customer demographics, product subscriptions, and more.</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <ButtonComponent type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="e-icons e-refresh e-medium"></span>
                                                <span className="ml-1 hidden lg:block">Refresh data</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="e-icons e-plus e-medium"></span>
                                                <span className="ml-1 hidden lg:block">Add Report</span>
                                            </div>
                                        </ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-7-bs"} style={{ minHeight: "36rem" }}>
                            <div className="d-flex justify-content-between align-items-center px-3 px-sm-4 py-2 border-bottom">
                                <div>
                                    <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={overflowMode} maxItems={maxItems} items={[{ iconCss: "e-icons e-folder", text: "Reports" }, { text: "Business Metrics" }]}></BreadcrumbComponent>
                                </div>
                                <div className="d-flex my-1">
                                    <div className="d-flex align-items-center position-relative mx-3 mx-sm-0 px-4 px-sm-5" style={{ marginBottom: "32px" }}>
                                        <span className="e-avatar e-avatar-small e-avatar-circle position-absolute start-0 top-0 ms-4 d-block d-sm-none fs-6 fw-normal bg-secondary text-white ps-1">+2</span>
                                        <span className="e-avatar e-avatar-small e-avatar-circle position-absolute start-0 top-0 ms-2 ms-sm-5 d-none d-sm-block">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <span className="e-avatar e-avatar-small e-avatar-circle position-absolute start-0 top-0 ms-4 d-none d-sm-block">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <span className="e-avatar e-avatar-small e-avatar-circle position-absolute start-0 top-0 ms-2">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                    </div>
                                    <div className="d-flex gap-1">
                                        <ButtonComponent className="d-none d-sm-block e-flat" cssClass="e-flat" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="sf-icon-share-arrow-04 fs-6"></span>
                                                <span className="ms-1 d-none d-lg-block">Share</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent className="e-flat e-icons e-comment-show mx-2 d-none d-sm-block" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 px-sm-4 py-3">
                                <div className="d-flex justify-content-between gap-3 gap-sm-5">
                                    <div className="d-block">
                                        <h3 className="fs-6 fw-bold text-body mb-0">Business Metrics</h3>
                                        <p className="mt-1 mb-0 small text-body">Overview of our sales pipeline, customer demographics, product subscriptions, and more.</p>
                                    </div>
                                    <div className="d-flex align-items-start gap-3">
                                        <ButtonComponent cssClass="e-outline" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="e-icons e-refresh e-medium"></span>
                                                <span className="ms-1 d-none d-lg-block">Refresh data</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="e-icons e-plus e-medium"></span>
                                                <span className="ms-1 d-none d-lg-block">Add Report</span>
                                            </div>
                                        </ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}