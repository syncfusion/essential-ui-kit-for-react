'use client';

import { useEffect, useState } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function Navbar2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'navbar-2' && blockData.theme) {
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
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div>
                            <div className="border border-r-0 border-l-0 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
                                <div className="flex items-center justify-between ms-6 me-2 lg:me-6 py-2">
                                    <div className="flex items-center">
                                        <img className="mr-3 h-7" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={28} height={28} alt="company logo" />
                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Company Name
                                        </span>
                                    </div>
                                    <div className="flex hidden lg:block px-4">
                                        <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Home</ButtonComponent>
                                        <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Clients</ButtonComponent>
                                        <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Marketing</ButtonComponent>
                                        <ButtonComponent className="py-2 mr-1.5" cssClass="e-flat" type="button">Contacts</ButtonComponent>
                                    </div>
                                    <div className="flex items-center">
                                        <ButtonComponent className="mr-2 hidden sm:block" cssClass="e-primary" iconCss="e-icons e-plus" iconPosition="Left" type="button">Upgrade</ButtonComponent>
                                        <div className="border border-gray-200 dark:border-gray-600 h-7 hidden sm:block mx-2"></div>
                                        <ButtonComponent className="sf-icon-notification-bell-02 leading-3 text-base hidden sm:block" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 hidden sm:block mx-2"></div>
                                        <ButtonComponent className="e-icons e-grid-view hidden sm:block mr-2" cssClass="e-flat" type="button"></ButtonComponent>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 hidden sm:block mr-2"></div>
                                        <span className="e-avatar e-avatar-small e-avatar-circle ml-1.5 mr-1.5 lg:mr-0">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                        <div className="border border-r border-gray-200 dark:border-gray-600 h-7 block lg:hidden ml-2"></div>
                                        <span id={styles.menu} className="block lg:hidden">
                                            <MenuComponent items={[{ text: 'Home' }, { text: 'Clients' }, { text: 'Marketing' }, { text: 'Contacts' }, { text: 'Others', items: [{ text: 'Demos' }, { text: 'Features' }, { text: 'Video Tutorials' }, { text: 'Support Center' }, { text: 'Forum' }] }]} hamburgerMode={true} title="" showItemOnClick={true}></MenuComponent>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-between ps-4 pe-6 py-1 bg-gray-100 dark:bg-gray-700 border border-t-0 border-r-0 border-l-0 border-gray-200 dark:border-gray-600">
                                <MenuComponent items={[{ text: 'Demos' }, { text: 'Features' }, { text: 'Video Tutorials' }, { text: 'Support Center' }, { text: 'Forum' }]}></MenuComponent>
                                <div className="flex items-center">
                                    <div className="e-input-group w-72">
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
                        <div className="border border-light-subtle">
                            <div className="d-flex align-items-center justify-content-between bg-body-tertiary ps-4 pe-2 pe-lg-4 py-2">
                                <div className="d-flex align-items-center">
                                    <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    <h5 className="fw-bold text-body fs-5 mb-0">Company Name</h5>
                                </div>
                                <div className="d-none d-lg-flex px-3">
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Home</ButtonComponent>
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Clients</ButtonComponent>
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Marketing</ButtonComponent>
                                    <ButtonComponent className="py-2 me-2" cssClass="e-flat" type="button">Contacts</ButtonComponent>
                                </div>
                                <div className="d-flex align-items-center">
                                    <ButtonComponent className="me-3 d-none d-sm-block" cssClass="e-primary" iconCss="e-icons e-plus" iconPosition="Left" type="button">Upgrade</ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block me-3" style={{ height: '24px' }}></div>
                                    <ButtonComponent className="sf-icon-notification-bell-01 fs-6 d-none d-sm-block me-3" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block me-3" style={{ height: '24px' }}></div>
                                    <ButtonComponent className="e-icons e-grid-view d-none d-sm-block me-3 e-medium" cssClass="e-flat" type="button"></ButtonComponent>
                                    <div className="border-end border-secondary-subtle d-none d-sm-block me-3" style={{ height: '24px' }}></div>
                                    <span className="e-avatar e-avatar-small e-avatar-circle">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                    <div className="border-end border-secondary-subtle d-block d-lg-none ms-3" style={{ height: '24px' }}></div>
                                    <span id={styles.menu} className="d-lg-none">
                                        <MenuComponent className="bg-body-tertiary" items={[{ text: 'Home' }, { text: 'Clients' }, { text: 'Marketing' }, { text: 'Contacts' }, { text: 'Others', items: [{ text: 'Demos' }, { text: 'Features' }, { text: 'Video Tutorials' }, { text: 'Support Center' }, { text: 'Forum' }] }]} hamburgerMode={true} title="" showItemOnClick={true}></MenuComponent>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-block border border-top-0 border-light-subtle bg-body-tertiary py-1 ps-3 pe-4">
                            <div className="justify-content-between" style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                                <MenuComponent items={[{ text: 'Demos' }, { text: 'Features' }, { text: 'Video Tutorials' }, { text: 'Support Center' }, { text: 'Forum' }]}></MenuComponent>
                                <div className="d-flex align-items-center w-md-auto col-6 col-xl-2 col-lg-3 col-md-2">
                                    <div className="e-input-group">
                                        <input className="e-input" type="text" placeholder="Search" />
                                        <span className="e-input-group-icon e-icons e-search border-start-0"></span>
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
