'use client';

import { useEffect, useRef, useState } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import Image from 'next/image';
import styles from './page.module.css';

export default function Navbar3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const stateDropdown = useRef<DropDownButtonComponent | null>(null);
    const addressDropdown = useRef<DropDownButtonComponent | null>(null);

    const handleResize = (): void => {
        if (stateDropdown.current && addressDropdown.current) {
            closeDropdown(stateDropdown.current);
            closeDropdown(addressDropdown.current);
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
                if (blockData.name === 'navbar-3' && blockData.theme) {
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
                            <div className="border border-r-0 border-l-0 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
                                <div className="flex items-center justify-between ms-6 me-2 lg:me-3 py-1">
                                    <div className="flex items-center">
                                        <Image className="mr-3 h-7" src="/assets/images/common/brand-logos/svg/vector.svg" width={28} height={28} alt="company logo" />
                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Company Name</span>
                                    </div>
                                    <div className="flex items-center">
                                        <ButtonComponent className="sf-icon-notification-bell-02 leading-3 text-base mr-1 sm:mr-2" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 hidden sm:block mr-2"></div>
                                        <ButtonComponent className="e-icons e-grid-view hidden sm:block" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 hidden sm:block mx-2"></div>
                                        <ButtonComponent className="e-icons e-people hidden sm:block" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 hidden lg:block mx-2"></div>
                                        <span className="hidden lg:block py-2">
                                            <DropDownButtonComponent ref={stateDropdown} cssClass="e-flat" items={[{ text: 'New York', iconCss: 'e-icons e-folder' }, { text: 'N. Virginia', iconCss: 'e-icons e-folder' }, { text: 'Washington DC', iconCss: 'e-icons e-folder' }]} type="button">N.Virginia</DropDownButtonComponent>
                                        </span>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 mx-2 hidden lg:block"></div>
                                        <span className="hidden lg:block py-2">
                                            <DropDownButtonComponent ref={addressDropdown} cssClass="e-flat" items={[{ text: 'Michael Gough @ 1234-567-935' }, { text: 'Roberta Cases @ 1234-567-292' }]} type="button">Bonnie Green @ 1234-567-890</DropDownButtonComponent>
                                        </span>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 block lg:hidden ms-2"></div>
                                        <span id={styles.menu} className="block lg:hidden">
                                            <MenuComponent hamburgerMode={true} title="" items={[{ text: 'Home' }, { text: 'Demo' }, { text: 'Features' }, { text: 'Shop' }, { text: 'Pages' }, { text: 'Blogs' }]}></MenuComponent>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex px-4 py-1 bg-gray-100 dark:bg-gray-700 border border-t-0 border-r-0 border-l-0 border-gray-200 dark:border-gray-600">
                                <MenuComponent items={[{ text: 'Home' }, { text: 'Demo' }, { text: 'Features' }, { text: 'Shop' }, { text: 'Pages' }, { text: 'Blogs' }]}></MenuComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div className="border border-start-0 border-end-0 border-light-subtle bg-body-tertiary">
                            <div className="d-flex align-items-center justify-content-between py-1 ps-4 pe-2 pe-lg-4">
                                <div className="d-flex align-items-center">
                                    <Image className="me-2" src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    <h5 className="fw-bold text-body fs-5 mb-0">Company Name</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <ButtonComponent className="sf-icon-notification-bell-01 fs-6 me-0 me-sm-3" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block me-3" style={{ height: "24px" }}></div>
                                    <ButtonComponent className="e-icons e-grid-view d-none d-sm-block e-medium" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-md-block mx-3" style={{ height: "24px" }}></div>
                                    <ButtonComponent className="e-icons e-people d-none d-md-block e-medium" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-lg-block mx-3" style={{ height: "24px" }}></div>
                                    <span className="d-none d-lg-block py-2">
                                        <DropDownButtonComponent ref={stateDropdown} cssClass="e-flat" items={[{ text: "New York", iconCss: "e-icons e-folder" }, { text: "N. Virginia", iconCss: "e-icons e-folder" }, { text: "Washington DC", iconCss: "e-icons e-folder" }]} type="button">N.Virginia</DropDownButtonComponent>
                                    </span>
                                    <div className="border-end border-secondary-subtle ms-2 ms-sm-3 me-0 me-sm-1" style={{ height: "24px" }}></div>
                                    <span className="d-none d-lg-block ms-2">
                                        <DropDownButtonComponent ref={addressDropdown} cssClass="e-flat" items={[{ text: "Michael Gough @ 1234-567-935" }, { text: "Roberta Cases @ 1234-567-292" }]} type="button">Bonnie Green @ 1234-567-890</DropDownButtonComponent>
                                    </span>
                                    <span id={styles.menu} className="block d-lg-none">
                                        <MenuComponent items={[{ text: "Home" }, { text: "Demo" }, { text: "Features" }, { text: "Shop" }, { text: "Pages" }, { text: "Blogs" }]} hamburgerMode={true} title=""></MenuComponent>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-flex px-3 bg-body-tertiary border border-light-subtle border-top-0 border-start-0 border-end-0" style={{ height: "40px", display: "flex", alignItems: "center" }}>
                            <MenuComponent items={[{ text: "Home" }, { text: "Demo" }, { text: "Features" }, { text: "Shop" }, { text: "Pages" }, { text: "Blogs" }]}></MenuComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
