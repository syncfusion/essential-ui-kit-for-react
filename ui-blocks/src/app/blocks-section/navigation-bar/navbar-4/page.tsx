'use client';

import { useEffect, useRef, useState } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import styles from './page.module.css';

export default function Navbar4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const resourcesDropdown = useRef<DropDownButtonComponent | null>(null);
    const brandDropdown = useRef<DropDownButtonComponent | null>(null);

    const handleResize = (): void => {
        if (resourcesDropdown.current && brandDropdown.current) {
            closeDropdown(resourcesDropdown.current);
            closeDropdown(brandDropdown.current);
        }
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
                if (blockData.name === 'navbar-4' && blockData.theme) {
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
                                <div className="flex items-center justify-between ms-6 me-2.5 lg:me-6 py-2">
                                    <div className="flex items-center">
                                        <img className="mr-3 h-7" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={28} height={28} alt="company logo" />
                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Company Name</span>
                                        <div className="flex pl-4 hidden lg:block">
                                            <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Home</ButtonComponent>
                                            <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Products</ButtonComponent>
                                            <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Company</ButtonComponent>
                                            <DropDownButtonComponent ref={resourcesDropdown} className="py-2 mr-1.5" cssClass="e-flat" items={[{ text: "Dashboard" }, { text: "Earnings" }, { text: "Support" }]} type="button">Resources</DropDownButtonComponent>
                                            <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Contact</ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <ButtonComponent className="sf-icon-notification-bell-02 leading-3 text-base hidden sm:block mr-2" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 hidden xl:block mr-2 h-7"></div>
                                        <ButtonComponent className="e-icons e-grid-view hidden xl:block mr-2" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 hidden lg:block mr-2 h-7"></div>
                                        <DropDownButtonComponent ref={brandDropdown} className="me-2 hidden lg:block" cssClass="e-flat" items={[{ text: "React" }, { text: "Vue.js" }, { text: "Angular" }]} type="button">CompanyName.com</DropDownButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 hidden sm:block h-7"></div>
                                        <span className="e-avatar e-avatar-small e-avatar-circle ml-4">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 block lg:hidden ms-3"></div>
                                        <span id={styles.menu} className="block lg:hidden">
                                            <MenuComponent hamburgerMode={true} title="" showItemOnClick={true} items={[{ text: 'Home' }, { text: 'Products' }, { text: 'Company' }, { text: 'Resources', items: [{ text: 'Dashboard' }, { text: 'Earnings' }, { text: 'Support' }] }, { text: 'Contact' }]}></MenuComponent>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-t-0 border-gray-200 dark:border-gray-600 py-2 bg-gray-100 dark:bg-gray-700">
                                <div className="flex items-center w-full px-6">
                                    <div className="e-input-group flex w-full lg:w-96">
                                        <input className="e-input" type="text" placeholder="Search" />
                                        <span className="e-input-group-icon e-icons e-search"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div className="border border-light-subtle bg-body-tertiary">
                            <div className="d-flex align-items-center justify-content-between ps-4 pe-2 pe-lg-4 py-1">
                                <div className="d-flex align-items-center">
                                    <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    <h5 className="fw-bold text-body fs-5 mb-0">Company Name</h5>
                                    <div className="d-flex ps-3 d-none d-lg-block">
                                        <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Home</ButtonComponent>
                                        <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Products</ButtonComponent>
                                        <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Company</ButtonComponent>
                                        <DropDownButtonComponent ref={resourcesDropdown} className='py-2 me-2' cssClass="e-flat" items={[{ text: "Dashboard" }, { text: "Earnings" }, { text: "Support" }]} type="button">Resources</DropDownButtonComponent>
                                        <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Contact</ButtonComponent>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <ButtonComponent className="sf-icon-notification-bell-01 fs-6 d-none d-sm-block me-3" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-xl-block me-3" style={{ height: "24px" }}></div>
                                    <ButtonComponent className="e-icons e-grid-view d-none d-xl-block me-3 e-medium" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-lg-block me-3" style={{ height: "24px" }}></div>
                                    <DropDownButtonComponent ref={brandDropdown} className="me-3 d-none d-lg-block" cssClass="e-flat" items={[{ text: "React" }, { text: "Vue.js" }, { text: "Angular" }]} type="button">CompanyName.com</DropDownButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block" style={{ height: "24px" }}></div>
                                    <span className="e-avatar e-avatar-small e-avatar-circle ms-3">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                    <div className="border-end border-secondary-subtle d-block d-lg-none ms-3" style={{ height: "24px" }}></div>
                                    <span id={styles.menu} className="d-block d-lg-none">
                                        <MenuComponent className="bg-body-tertiary" hamburgerMode={true} title="" showItemOnClick={true} items={[{ text: "Home" }, { text: "Products" }, { text: "Company" }, { text: "Resources", items: [{ text: "Dashboard" }, { text: "Earnings" }, { text: "Support" }] }, { text: "Contact" }]}></MenuComponent>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-top-0 border-light py-2 border-light-subtle bg-body-tertiary">
                            <div className="d-flex align-items-center px-4 col col-lg-4">
                                <div className="e-input-group d-flex w-100">
                                    <input className="e-input" type="text" placeholder="Search" />
                                    <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
