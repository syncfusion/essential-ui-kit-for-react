'use client';

import { useEffect, useRef, useState } from "react";
import { BreadcrumbComponent, BreadcrumbOverflowMode } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Header10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const breadcrumb = useRef<BreadcrumbComponent | null>(null);
    const dropdown = useRef<DropDownButtonComponent | null>(null);
    const [maxItems, setMaxItems] = useState<number>(3);
    const [overflowMode, setOverflowMode] = useState<BreadcrumbOverflowMode>(BreadcrumbOverflowMode.None);

    const handleResize = (): void => {
        const width = window.innerWidth;
        updateBreadcrumbItems(width);
        if (dropdown.current) {
            closeDropdown(dropdown.current);
        }
    };

    const updateBreadcrumbItems = (width: number): void => {
        if (width < 640) {
            setMaxItems(1);
        } else {
            setMaxItems(3);
        }
        setOverflowMode(maxItems <= 3 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None);
        setTimeout(() => {
            breadcrumb.current?.refresh();
        }, 200);
    };

    const closeDropdown = (dropDown: DropDownButtonComponent): void => {
        if (dropDown && dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-10' && blockData.theme) {
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
                        <div key={"header-10-tw"} style={{ minHeight: "36rem" }}>
                            <div className="py-3 px-4 sm:px-6 flex justify-between border-b border-gray-200 dark:border-gray-600">
                                <div id={styles.breadcrumb} className="flex items-center">
                                    <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={overflowMode} maxItems={maxItems} items={[{ text: "Analytics Hub" }, { text: "Metrics" }, { text: "Performance Monitor" }]} separatorTemplate={() => <span className="text-base e-icons e-chevron-right"></span>}></BreadcrumbComponent>
                                </div>
                                <div>
                                    <div className="hidden sm:flex gap-3">
                                        <ButtonComponent className="e-flat" type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="sf-icon-api-document text-base"></span>
                                                <span className="ml-1 hidden lg:block">API Documentation</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent className="e-flat" type="button">
                                            <div className="flex items-center gap-1">
                                                <span className="e-icons e-comment-show e-medium"></span>
                                                <span className="ml-1 hidden lg:block">Feedback</span>
                                            </div>
                                        </ButtonComponent>
                                    </div>
                                    <DropDownButtonComponent ref={dropdown} className="block sm:hidden e-flat e-caret-hide" iconCss="e-icons e-more-vertical-1" items={[{ text: 'API Documentation' }, { text: 'Feedback' }]} type="button" ></DropDownButtonComponent>
                                </div>
                            </div>
                            <div className="flex justify-between gap-3 px-4 sm:px-6 py-4 sm:py-3">
                                <div className="flex items-center">
                                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor:
                                        <span className="text-gray-700 dark:text-gray-300"> User_engagement</span>
                                    </h1>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <ButtonComponent className="hidden sm:block" content="View report history" type="button"></ButtonComponent>
                                    <ButtonComponent className="block sm:hidden e-flat" iconCss="sf-icon-clock-fast-backward" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-10-bs"} style={{ minHeight: "36rem" }}>
                            <div className="py-2 px-3 px-sm-4 d-flex justify-content-between border-bottom">
                                <div className="d-flex align-items-center">
                                    <BreadcrumbComponent ref={breadcrumb} enableNavigation={false} overflowMode={overflowMode} maxItems={maxItems} items={[{ text: "Analytics Hub" }, { text: "Metrics" }, { text: "Performance Monitor" }]}></BreadcrumbComponent>
                                </div>
                                <div>
                                    <div className="d-none d-sm-flex gap-3">
                                        <ButtonComponent cssClass="e-flat" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="sf-icon-api-document fs-6"></span>
                                                <span className="ms-1 d-none d-lg-block">API Documentation</span>
                                            </div>
                                        </ButtonComponent>
                                        <ButtonComponent cssClass="e-flat" type="button">
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="e-icons e-comment-show e-medium"></span>
                                                <span className="ms-1 d-none d-lg-block">Feedback</span>
                                            </div>
                                        </ButtonComponent>
                                    </div>
                                    <DropDownButtonComponent ref={dropdown} className="d-block d-sm-none" cssClass="e-flat e-caret-hide" iconCss="e-icons e-more-vertical-1" items={[{ text: "API Documentation" }, { text: "Feedback" }]} type="button"></DropDownButtonComponent>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between gap-3 px-3 px-sm-4 py-3">
                                <div className="d-flex align-items-center">
                                    <h1 className="fs-6 fw-bold text-body mb-0">Performance Monitor:
                                        <span className="text-body-tertiary text-opacity-50">{" "}User_engagement</span>
                                    </h1>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View report history" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-flat d-block d-sm-none" iconCss="sf-icon-clock-fast-backward" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}