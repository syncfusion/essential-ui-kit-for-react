'use client';

import { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Unlocksession3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'unlock-session-3' && blockData.theme) {
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
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div className="flex flex-col lg:flex-row mx-auto p-0" style={{ minHeight: '580px' }}>
                            <div className="w-full order-2 lg:order-1 lg:w-7/12 px-6 py-14 bg-green-600 text-white flex items-center" style={{ backgroundImage: 'url("/react/essential-ui-kit/blocks/assets/images/authentication/feature-list/feature-list.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <div className="flex flex-wrap mx-0 w-full sm:p-6 xl:p-0 md:p-8 lg:px-6">
                                    <div className="hidden xl:block xl:w-1/6"></div>
                                    <div className="w-full xl:w-2/3">
                                        <h1 className="font-bold xl:text-5xl md:text-4xl text-3xl">Welcome to our design system</h1>
                                        <p className="my-6 md:text-lg text-base">
                                            The Tailwind Design System helps developers build organized and well-coded dashboards full of beautiful and rich modules.
                                            Join us and start building your application today.
                                        </p>
                                        <ul className="list-none md:text-lg text-base">
                                            <li className="flex items-center gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>70+ components</span>
                                            </li>
                                            <li className="flex items-center gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>Light and dark themes supported</span>
                                            </li>
                                            <li className="flex items-center gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>100% automatic layouts</span>
                                            </li>
                                            <li className="flex lg:items-start gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>200+ reusable blocks to build templates easily</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden xl:block xl:w-1/6"></div>
                                </div>
                            </div>
                            <div className="w-full order-1 lg:order-2 lg:w-5/12">
                                <div className="bg-gray-50 dark:bg-gray-950">
                                    <div className="flex justify-center">
                                        <div className="w-full max-w-md rounded-lg p-6 py-12">
                                            <div className="flex justify-center mb-6">
                                                <div className="flex items-center justify-center">
                                                    <img className="mr-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                                    <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white">Company Name</h2>
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Unlock your session</h2>
                                            <p className="text-md text-center text-gray-700 dark:text-gray-300">Your session is locked due to inactivity</p>
                                            <form action="#" className="mt-6 mb-6" onSubmit={(event) => event.preventDefault()}>
                                                <div className="mb-4">
                                                    <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
                                                    <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                                </div>
                                            </form>
                                            <div className="e-bigger">
                                                <ButtonComponent cssClass="e-primary w-full text-lg" content="Unlock your session" type="submit"></ButtonComponent>
                                            </div>
                                            <span className="flex items-center justify-center gap-2 mt-7">
                                                <p className="text-center text-gray-900 dark:text-white">Return to</p>
                                                <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">Sign in</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="container-fluid row d-flex flex-wrap mx-auto p-0" style={{ minHeight: '580px' }}>
                        <div className="col-12 col-lg-7 order-2 order-lg-1 d-flex align-items-center bg-success p-4 p-lg-4" style={{ backgroundImage: 'url("/react/essential-ui-kit/blocks/assets/images/authentication/feature-list/feature-list.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className="row mx-0 w-100 py-5">
                                <div className="col-xl-2 d-lg-block"></div>
                                <div className="col-xl-8">
                                    <h1 className="fw-bold display-6 text-light">Welcome to our design system</h1>
                                    <p className="my-4 fw-normal text-light m-0">
                                        The Bootstrap Design System helps developers build organized and well-coded dashboards full of beautiful and rich modules.
                                        Join us and start building your application today.
                                    </p>
                                    <ul className="list-unstyled text-light">
                                        <li className="d-flex align-items-center gap-3 mb-3 fw-normal">
                                            <span className="e-icons e-circle-check fs-5"></span>
                                            <span>70+ components</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 mb-3 fw-normal">
                                            <span className="e-icons e-circle-check fs-5"></span>
                                            <span>Light and dark themes supported</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 mb-3 fw-normal">
                                            <span className="e-icons e-circle-check fs-5"></span>
                                            <span>100% automatic layouts</span>
                                        </li>
                                        <li className="d-flex align-items-start gap-3 mb-3 fw-normal">
                                            <span className="e-icons e-circle-check fs-5 mt-1"></span>
                                            <span>200+ reusable blocks to build templates easily</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-2 d-lg-block"></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 order-1 order-lg-2 p-0">
                            <div className="d-flex justify-content-center bg-body">
                                <div className="bg-body rounded-lg p-4 py-5 w-100" style={{ maxWidth: '450px' }}>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" alt="company logo" width={32} height={32} />
                                            <h2 className="text-center fs-5 text-body fw-bold mb-0">Company Name</h2>
                                        </div>
                                    </div>
                                    <h2 className="text-center text-body fs-4 fw-bold mb-2">Unlock your session</h2>
                                    <p className="text-center text-light-emphasis m-0">Your session is locked due to inactivity</p>
                                    <form action="#" className="mt-4 mb-4" onSubmit={(event) => event.preventDefault()}>
                                        <div className="mb-3">
                                            <label className="form-label mb-1 fw-medium text-dark-emphasis small">Email</label>
                                            <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                    </form>
                                    <div className="e-bigger">
                                        <ButtonComponent className="e-block e-primary" content="Unlock your session" type="submit"></ButtonComponent>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center gap-1 mt-4">
                                        <p className="text-center mb-0 text-body">Return to</p>
                                        <a href="#" className="text-primary p-0 text-decoration-none fs-6 fw-medium">Sign in</a>
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
