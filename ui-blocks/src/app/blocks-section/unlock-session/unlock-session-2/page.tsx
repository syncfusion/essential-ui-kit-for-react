'use client';

import { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Unlocksession2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'unlock-session-2' && blockData.theme) {
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
                        <div className="flex flex-col lg:flex-row" key={"unlock-2-tw"} style={{ minHeight: '580px' }}>
                            <div className="w-full lg:w-7/12 p-0">
                                <div className="w-full h-60 lg:h-full" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/authentication/split-screen/split-screen.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="bg-gray-50 dark:bg-gray-950 flex justify-center">
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
                                            <ButtonComponent cssClass="e-primary w-full text-lg" type="submit">Unlock your session</ButtonComponent>
                                        </div>
                                        <span className="flex items-center justify-center gap-2 mt-7">
                                            <p className="text-center text-gray-900 dark:text-white">Return to</p>
                                            <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">Sign in</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="d-flex flex-column flex-lg-row" key={"unlock-2-bs"} style={{ minHeight: '580px' }}>
                            <div className="col-12 col-lg-7 p-0">
                                <div className="w-100 h-100" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/authentication/split-screen/split-screen.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", minHeight: "240px" }}></div>
                            </div>
                            <div className="col-12 col-lg-5 p-0">
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
                                            <ButtonComponent className="e-block e-primary" type="submit">Unlock your session</ButtonComponent>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center gap-1 mt-4">
                                            <p className="text-center mb-0 text-body">Return to</p>
                                            <a href="#" className="text-primary p-0 text-decoration-none fs-6 fw-medium">Sign in</a>
                                        </div>
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
