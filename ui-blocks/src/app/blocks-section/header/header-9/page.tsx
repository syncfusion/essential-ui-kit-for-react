'use client';

import { useRef, useState, useEffect } from "react";
import { BreadcrumbComponent, BreadcrumbOverflowMode } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent, SplitButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Header9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const additionalOptionDropdown = useRef<DropDownButtonComponent | null>(null);
    const newCourseDropdown = useRef<SplitButtonComponent | null>(null);
    const breadcrumb = useRef<BreadcrumbComponent | null>(null);
    const [maxItems, setMaxItems] = useState<number>(2);
    const [overflowMode, setOverflowMode] = useState<BreadcrumbOverflowMode>(BreadcrumbOverflowMode.None);

    const handleResize = (): void => {
        const width = window.innerWidth;
        updateBreadcrumbItems(width);
        closeDropdown();
        newCourseDropdown.current?.refresh();
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

    const closeDropdown = (): void => {
        if (newCourseDropdown.current?.activeElem[1]?.classList.contains("e-active")) {
            newCourseDropdown.current.toggle();
        }
        if (additionalOptionDropdown.current?.element?.classList.contains("e-active")) {
            additionalOptionDropdown.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-9' && blockData.theme) {
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
                        <div key={"header-9-tw"} style={{ minHeight: "36rem" }}>
                            <div className="py-3 px-4 sm:px-6 flex justify-between border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center">
                                    <div id={styles.breadcrumb}>
                                        <BreadcrumbComponent ref={breadcrumb} className="flex items-center" overflowMode={overflowMode} maxItems={maxItems} items={[{ text: "Learning Portal" }, { text: "Current Term" }]} separatorTemplate={() => <span className="text-base e-icons e-chevron-right"></span>}></BreadcrumbComponent>
                                    </div>
                                    <ButtonComponent className="ml-3" type="button">
                                        <div className="flex items-center gap-1">
                                            <span className="e-icons e-filter e-medium"></span>
                                            <span className="ml-1 hidden lg:block">Filter</span>
                                        </div>
                                    </ButtonComponent>
                                </div>
                                <div className="flex gap-3">
                                    <div className="hidden sm:flex">
                                        <span className="hidden md:block">
                                            <SplitButtonComponent ref={newCourseDropdown} iconCss="e-icons e-plus" content="New Course" items={[{ text: 'Create Course' }, { text: 'Import Course' }, { text: 'Course Template' }]} ></SplitButtonComponent>
                                        </span>
                                        <ButtonComponent cssClass="ml-3 e-flat" iconCss="e-icons e-settings" type="button"></ButtonComponent>
                                    </div>
                                    <DropDownButtonComponent ref={additionalOptionDropdown} cssClass="block sm:hidden e-flat e-caret-hide" iconCss="e-icons e-more-vertical-1" items={[{ text: 'New Course' }, { text: 'Create Course' }, { text: 'Import Course' }, { text: 'Course Template' }, { text: 'Settings' }]} type="button"></DropDownButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-9-bs"} style={{ minHeight: "36rem" }}>
                            <div className="py-2 px-3 px-sm-4 d-flex justify-content-between border-bottom">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <BreadcrumbComponent ref={breadcrumb} className="d-flex align-items-center" overflowMode={overflowMode} maxItems={maxItems} items={[{ text: "Learning Portal" }, { text: "Current Term" }]} separatorTemplate={() => <span className="fs-6 e-icons e-chevron-right px-2"></span>}></BreadcrumbComponent>
                                    </div>
                                    <ButtonComponent className="ms-3" cssClass="e-outline" type="button">
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="e-icons e-filter e-medium"></span>
                                            <span className="ms-1 d-none d-lg-block">Filter</span>
                                        </div>
                                    </ButtonComponent>
                                </div>
                                <div className="d-flex gap-3">
                                    <div className="d-none d-sm-flex">
                                        <span className="d-none d-sm-block">
                                            <SplitButtonComponent ref={newCourseDropdown} iconCss="e-icons e-plus" content="New Course" items={[{ text: "Create Course" }, { text: "Import Course" }, { text: "Course Template" }]}></SplitButtonComponent>
                                        </span>
                                        <ButtonComponent className="ms-3" cssClass="e-flat" iconCss="e-icons e-settings" type="button"></ButtonComponent>
                                    </div>
                                    <DropDownButtonComponent ref={additionalOptionDropdown} className="d-block d-sm-none" cssClass="e-flat e-caret-hide" iconCss="e-icons e-more-vertical-1" items={[{ text: "New Course" }, { text: "Create Course" }, { text: "Import Course" }, { text: "Course Template" }, { text: "Settings" }]} type="button"></DropDownButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}