'use client';

import { useEffect, useRef, useState } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import Image from 'next/image';
import styles from './page.module.css';

export default function Navbar5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const breadcrumb = useRef<BreadcrumbComponent | null>(null);
    const moreOptionsDropdown = useRef<DropDownButtonComponent | null>(null);

    const handleResize = (): void => {
        if (moreOptionsDropdown.current) {
            closeDropdown(moreOptionsDropdown.current);
            closeMainDropdown();
        }
    };

    const closeDropdown = (dropDown: DropDownButtonComponent): void => {
        if (dropDown && dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    };

    const closeMainDropdown = (): void => {
        const popup = document.querySelector('#mainDropdown-popup.e-dropdown-popup.e-popup-open');
        if (popup) {
            popup.remove();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'navbar-5' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div>
                            <div className="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
                                <div className="flex items-center justify-between py-2 ms-6 me-1 sm:me-2.5 lg:me-6">
                                    <div className="flex items-center">
                                        <Image className="mr-3 h-7" src="/assets/images/common/brand-logos/svg/vector.svg" width={28} height={28} alt="company logo" />
                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Company Name
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="hidden lg:block mr-4">
                                            <div className="e-input-group flex">
                                                <input className="e-input" type="text" placeholder="Search" />
                                                <span className="e-input-group-icon e-icons e-search"></span>
                                            </div>
                                        </div>
                                        <ButtonComponent className="sf-icon-notification-bell-02 leading-3 text-base mr-1 sm:mr-2" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 hidden sm:block mr-2 h-7"></div>
                                        <ButtonComponent className="e-icons e-grid-view hidden sm:block mr-2" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 hidden sm:block mr-2 h-7"></div>
                                        <span className="e-avatar e-avatar-small e-avatar-circle hidden sm:block ml-2 mr-2 lg:mr-0">
                                            <Image src="/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 block lg:hidden ms-1  h-7"></div>
                                        <span id={styles.menu} className="block lg:hidden">
                                            <MenuComponent items={[{ text: 'Builders' }, { text: 'Features' }, { text: 'Websites' }, { text: 'Elements' }, { text: 'Pricing' }]} hamburgerMode={true} title=""></MenuComponent>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-t-0 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 block sm:h-auto mx-auto">
                                <div className="flex flex-col sm:flex-row justify-between px-0 sm:px-6 py-2.5">
                                    <div className="flex items-center sm:col-span-8 md:col-span-8 lg:col-span-10 xl:col-span-10 self-start px-6 sm:px-0">
                                        <BreadcrumbComponent ref={breadcrumb} separatorTemplate={() => (<span className="text-base e-icons e-chevron-right"></span>)}
                                            itemTemplate={
                                                (data: any) => data.text == "Personal" ? (
                                                    <div className="flex items-center">
                                                        <span className="e-avatar e-avatar-xsmall e-avatar-circle me-1">
                                                            <Image src="/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                                        </span>
                                                        <DropDownButtonComponent id="mainDropdown" className="pe-2 pe-md-4" cssClass="e-flat" content={data.text} items={[{ text: "CompanyName.com" }]} type="button" select={() => {
                                                            if (breadcrumb.current) {
                                                                breadcrumb.current.activeItem = "CompanyName.com";
                                                            }
                                                        }}></DropDownButtonComponent>
                                                    </div>
                                                ) : <ButtonComponent cssClass="e-flat" content={data.text} type="button"></ButtonComponent>
                                            }
                                        >
                                            <BreadcrumbItemsDirective>
                                                <BreadcrumbItemDirective text="Personal" />
                                                <BreadcrumbItemDirective text="CompanyName.com" />
                                            </BreadcrumbItemsDirective>
                                        </BreadcrumbComponent>
                                    </div>
                                    <div className="flex items-center gap-2 w-full sm:w-max px-6 sm:px-0">
                                        <div className="w-1/2 mt-3 sm:mt-0">
                                            <ButtonComponent cssClass="e-primary w-full" type="button">Open App</ButtonComponent>
                                        </div>
                                        <div className="w-1/2 md:w-full mt-3 sm:mt-0 p-0">
                                            <DropDownButtonComponent ref={moreOptionsDropdown} className="e-outline e-primary w-full" items={[{ text: 'Create new app', iconCss: 'e-icons e-folder' }, { text: 'Inbox', iconCss: 'e-icons e-folder' }, { text: 'App info', iconCss: 'e-icons e-folder' }, { text: 'Edit app', iconCss: 'e-icons e-folder' }]} type="button">More</DropDownButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex px-4 py-1 bg-gray-100 dark:bg-gray-700 border border-t-0 border-gray-200 dark:border-gray-600">
                                <MenuComponent items={[{ text: 'Builders' }, { text: 'Features' }, { text: 'Websites' }, { text: 'Elements' }, { text: 'Pricing' }]}></MenuComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div className="border border-light-subtle bg-body-tertiary py-2 ps-4 pe-2 pe-lg-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <Image className="me-2" src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    <h5 className="fw-bold text-body fs-5 mb-0">Company Name</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-none d-lg-block me-3">
                                        <div className="e-input-group d-flex">
                                            <input className="e-input" type="text" placeholder="Search" />
                                            <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                        </div>
                                    </div>
                                    <ButtonComponent className="sf-icon-notification-bell-01 fs-6 me-0 me-sm-3" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block me-3" style={{ height: "24px" }}></div>
                                    <ButtonComponent className="e-icons e-grid-view d-none d-sm-block me-3 e-medium" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block" style={{ height: "24px" }}></div>
                                    <span className="e-avatar e-avatar-small e-avatar-circle d-none d-sm-block ms-3">
                                        <Image src="/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                    <div className="border-end border-secondary-subtle d-block d-lg-none ms-2 ms-sm-3" style={{ height: "24px" }}></div>
                                    <span id={styles.menu} className="d-block d-lg-none">
                                        <MenuComponent className="bg-body-tertiary" hamburgerMode={true} title="" items={[{ text: "Builders" }, { text: "Features" }, { text: "Websites" }, { text: "Elements" }, { text: "Pricing" }]}></MenuComponent>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-light-subtle bg-body-tertiary border-top-0 d-block mx-auto">
                            <div className="px-4 py-3 d-flex m-0 row justify-content-between">
                                <div className="d-flex align-items-center justify-content-sm-start col-sm-8 col-md-8 col-lg-10 col-xl-10 m-0 p-0">
                                    <BreadcrumbComponent ref={breadcrumb} separatorTemplate={() => (<span className="text-base e-icons e-chevron-right"></span>)}
                                        itemTemplate={
                                            (data: any) => data.text == "Personal" ? (
                                                <div className="d-flex align-items-center">
                                                    <span className="e-avatar e-avatar-small e-avatar-circle me-1">
                                                        <Image src="/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                                    </span>
                                                    <DropDownButtonComponent id="mainDropdown" cssClass="e-flat" content={data.text} items={[{ text: "CompanyName.com" }]} type="button" select={() => {
                                                        if (breadcrumb.current) {
                                                            breadcrumb.current.activeItem = "CompanyName.com";
                                                        }
                                                    }}></DropDownButtonComponent>
                                                </div>
                                            ) : <ButtonComponent cssClass="e-flat" content={data.text} type="button"></ButtonComponent>
                                        }
                                    >
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective text="Personal" />
                                            <BreadcrumbItemDirective text="CompanyName.com" />
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                </div>
                                <div className="d-flex p-0 pe-2 pe-md-2 gap-2 col-sm-4 col-md-4 col-lg-2 col-xl-2 m-0">
                                    <div className="col-6 mt-3 mt-sm-0">
                                        <ButtonComponent className="e-primary p-lg-1 px-2 w-100" type="button">Open App</ButtonComponent>
                                    </div>
                                    <div className="p-0 col-6 mt-3 mt-sm-0">
                                        <DropDownButtonComponent ref={moreOptionsDropdown} className="e-outline e-primary w-100" items={[{ text: "Create new app", iconCss: "e-icons e-folder" }, { text: "Inbox", iconCss: "e-icons e-folder" }, { text: "App info", iconCss: "e-icons e-folder" }, { text: "Edit app", iconCss: "e-icons e-folder" }]} type="button">More</DropDownButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-flex ps-3 pe-4 bg-body-tertiary border border-top-0 border-light-subtle bg-body-tertiary" style={{ height: "40px", display: "flex", alignItems: "center" }}>
                            <MenuComponent items={[{ text: "Builders" }, { text: "Features" }, { text: "Websites" }, { text: "Elements" }, { text: "Pricing" }]}></MenuComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
