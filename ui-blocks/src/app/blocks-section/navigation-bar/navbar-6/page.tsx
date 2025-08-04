'use client';

import { useEffect, useRef, useState } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import styles from './page.module.css';

export default function Navbar6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const profileDropdown = useRef<DropDownButtonComponent | null>(null);

    const handleResize = (): void => {
        if (profileDropdown.current) {
            closeDropdown(profileDropdown.current);
        }
    };

    const closeDropdown = (dropDown: DropDownButtonComponent): void => {
        if (dropDown && dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'navbar-6' && blockData.theme) {
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
                                <div className="ms-6 me-2 lg:me-6 my-2 flex items-center justify-between">
                                    <div className="flex items-center mr-6">
                                        <span className="flex items-center">
                                            <img className="mr-3 h-7" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={28} height={28} alt="company logo" />
                                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Company Name</span>
                                        </span>
                                        <div className="flex items-center ms-5">
                                            <div className="hidden sm:flex mr-2">
                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                                </span>
                                            </div>
                                            <div>
                                                <DropDownButtonComponent ref={profileDropdown} className="pr-2 md:pr-4 hidden sm:block" cssClass="e-flat" items={[{ text: 'Michael Gough', iconCss: 'e-icons e-folder' }, { text: 'Roberta Cases', iconCss: 'e-icons e-folder' }]} type="button">Bonnie Crane</DropDownButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block">
                                        <ButtonComponent className="py-2 mr-2" cssClass="e-flat" content="Changelog" type="button"></ButtonComponent>
                                        <ButtonComponent className="py-2 mr-2" cssClass="e-flat" content="Support" type="button"></ButtonComponent>
                                        <ButtonComponent className="py-2 mr-2" cssClass="e-flat" content="Documentation" type="button"></ButtonComponent>
                                        <ButtonComponent className="py-2 mr-2 bg-transparent" content="Feedback" type="button"></ButtonComponent>
                                    </div>
                                    <span id={styles["menu"]} className="lg:hidden">
                                        <MenuComponent items={[{ text: 'Portfolio' }, { text: 'Blog' }, { text: 'Shop' }, { text: 'Elements' }, { text: 'Forum' }, { text: 'Support' }, { text: 'Others', items: [{ text: 'Changelog' }, { text: 'Support' }, { text: 'Docs' }, { text: 'Feedback' }] }]} hamburgerMode={true} title="" showItemOnClick={true}></MenuComponent>
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 py-1 bg-gray-100 dark:bg-gray-700 border border-t-0 border-gray-200 dark:border-gray-600 hidden lg:flex">
                                <MenuComponent items={[{ text: 'Portfolio' }, { text: 'Blog' }, { text: 'Shop' }, { text: 'Elements' }, { text: 'Forum' }, { text: 'Support' }]}></MenuComponent>
                            </div>
                            <div className="border border-t-0 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 block mx-auto px-0 py-3">
                                <div className="flex items-center flex-col lg:flex-row">
                                    <div className="flex items-center w-full lg:w-max lg:pl-6 lg:pr-3 pl-6 pr-6">
                                        <div className="e-input-group w-full lg:w-max">
                                            <input className="e-input" type="text" placeholder="Search" />
                                            <span className="e-input-group-icon e-icons e-search"></span>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-full lg:w-max mt-3 lg:mt-0 pl-6 pr-6 lg:pl-0 lg:pr-0">
                                        <div className="w-4/5 mr-3 lg:mt-0">
                                            <ButtonComponent cssClass="w-full" iconCss="e-icons e-user" iconPosition="Left" content="Create Team" type="button"></ButtonComponent>
                                        </div>
                                        <div className="w-4/5 p-0 lg:mt-0">
                                            <ButtonComponent cssClass="w-full e-primary" iconCss="e-icons e-plus" iconPosition="Left" content="New Project" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div className="border border-light-subtle bg-body-tertiary py-1">
                            <div className="ps-4 pe-2 pe-lg-4 my-2 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center me-4">
                                    <span className="d-flex align-items-center">
                                        <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <h5 className="fw-bold text-body fs-5 mb-0">Company Name</h5>
                                    </span>
                                    <div className="d-flex align-items-center ms-3 ps-1">
                                        <div className="d-flex align-items-center d-none d-sm-flex me-2">
                                            <span className="e-avatar e-avatar-xsmall e-avatar-circle">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                            </span>
                                        </div>
                                        <div>
                                            <DropDownButtonComponent ref={profileDropdown} className="pe-2 pe-md-4 d-none d-sm-block" cssClass="e-flat" items={[{ text: "Michael Gough", iconCss: "e-icons e-folder" }, { text: "Roberta Cases", iconCss: "e-icons e-folder" }]} type="button">Bonnie Crane</DropDownButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block">
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" content="Changelog" type="button"></ButtonComponent>
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" content="Support" type="button"></ButtonComponent>
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" content="Documentation" type="button"></ButtonComponent>
                                    <ButtonComponent className="py-2 me-2" content="Feedback" type="button"></ButtonComponent>
                                </div>
                                <span id={styles["menu"]} className="d-lg-none">
                                    <MenuComponent className="bg-body-tertiary" hamburgerMode={true} title="" showItemOnClick={true} items={[{ text: "Portfolio" }, { text: "Blog" }, { text: "Shop" }, { text: "Elements" }, { text: "Forum" }, { text: "Support" }, { text: "Others", items: [{ text: "Changelog" }, { text: "Support" }, { text: "Docs" }, { text: "Feedback" }] }]}></MenuComponent>
                                </span>
                            </div>
                        </div>
                        <div className="border border-top-0 border-light-subtle">
                            <div className="px-3 py-1 bg-body-tertiary border-top-0 border-light-subtle d-none d-lg-flex" style={{ height: "40px", display: "flex", alignItems: "center" }}>
                                <MenuComponent items={[{ text: "Portfolio" }, { text: "Blog" }, { text: "Shop" }, { text: "Elements" }, { text: "Forum" }, { text: "Support" }]}></MenuComponent>
                            </div>
                        </div>
                        <div className="border border-top-0 border-light-subtle bg-body-tertiary h-100 d-block d-sm-flex mx-auto py-3">
                            <div className="row w-100 p-0 mx-auto px-4 gap-3">
                                <div className="align-items-center col-xl-2 col-lg-3 p-0">
                                    <div className="e-input-group w-100">
                                        <input className="e-input" type="text" placeholder="Search" />
                                        <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center col-xl-3 col-lg-4 p-0 overflow-hidden">
                                    <div className="w-50 me-3">
                                        <ButtonComponent className="w-100" cssClass="e-outline e-secondary" iconCss="e-icons e-user" iconPosition="Left" content="Create Team" type="button"></ButtonComponent>
                                    </div>
                                    <div className="w-50">
                                        <ButtonComponent className="w-100" cssClass="e-primary" iconCss="e-icons e-plus" iconPosition="Left" content="New Project" type="button"></ButtonComponent>
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
