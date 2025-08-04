'use client';

import { useEffect, useState } from 'react';
import { AppBarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Navbar1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'navbar-1' && blockData.theme) {
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
            case "tailwind":
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div>
                            <div className="border border-r-0 border-l-0 border-gray-200 dark:border-gray-600">
                                <AppBarComponent className="shadow-none">
                                    <div className="px-4 py-5 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img className="mr-3 h-7" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={28} height={28} alt="company logo" />
                                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Company Name</span>
                                        </div>
                                        <div className="e-appbar-spacer"></div>
                                        <div className="hidden lg:block flex items-center pr-4">
                                            <div className="e-input-group">
                                                <input className="e-input" type="text" placeholder="Search" />
                                                <span className="e-input-group-icon e-icons e-search"></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <ButtonComponent className="mr-2.5 hidden sm:block" cssClass="e-primary" iconCss="e-icons e-plus" iconPosition="Left" content="New Widget" type="button"></ButtonComponent>
                                            <ButtonComponent className="hidden sm:block lg:hidden mr-2.5" cssClass="e-flat" iconCss="e-icons e-search !text-base" type="button"></ButtonComponent>
                                            <ButtonComponent className="leading-3 mr-2.5" cssClass="e-flat" iconCss="sf-icon-notification-bell-02 !text-base" type="button"></ButtonComponent>
                                            <ButtonComponent className="hidden sm:block mr-2.5" cssClass="e-flat" iconCss="e-icons e-grid-view !text-base" type="button"></ButtonComponent>
                                            <div className="e-avatar e-avatar-small e-avatar-circle">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                            </div>
                                        </div>
                                    </div>
                                </AppBarComponent>
                            </div>
                        </div>
                    </section>
                );
            case "bootstrap5":
                return (
                    <section>
                        <div className="border border-light-subtle">
                            <AppBarComponent className="shadow-none">
                                <div className="px-3 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <h5 className="fw-bold text-body fs-5 mb-0">Company Name</h5>
                                    </div>
                                    <div className="e-appbar-spacer"></div>
                                    <div className="d-none d-lg-flex align-items-center pe-3">
                                        <div className="e-input-group">
                                            <input className="e-input" type="text" placeholder="Search" />
                                            <span className="e-input-group-icon e-icons e-search border-start-0"></span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ButtonComponent className="me-3 d-none d-sm-block" cssClass="e-primary" iconCss="e-icons e-plus" iconPosition="Left" content="New Widget" type="button"></ButtonComponent>
                                        <ButtonComponent className="d-none d-sm-block d-lg-none me-3 e-medium" cssClass="e-flat" iconCss="e-icons e-search" type="button"></ButtonComponent>
                                        <ButtonComponent className="fs-6 me-3" cssClass="e-flat" iconCss="sf-icon-notification-bell-01" type="button"></ButtonComponent>
                                        <ButtonComponent className="d-none d-sm-block me-3 e-medium" cssClass="e-flat" iconCss="e-icons e-grid-view" type="button"></ButtonComponent>
                                        <span className="e-avatar e-avatar-small e-avatar-circle">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg" width={32} height={32} alt="profile picture" />
                                        </span>
                                    </div>
                                </div>
                            </AppBarComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
