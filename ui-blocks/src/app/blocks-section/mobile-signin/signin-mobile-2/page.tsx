'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default function SigninMobile2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signin-mobile-2' && blockData.theme) {
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
                        <div className="flex flex-col lg:flex-row" style={{ minHeight: "580px" }}>
                            <div className="w-full lg:w-7/12 p-0">
                                <div className="w-full h-60 lg:h-full" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/authentication/split-screen/split-screen.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="flex justify-center">
                                    <div className="w-full max-w-md rounded-lg p-4 py-12">
                                        <div className="flex justify-center mb-6">
                                            <img className="mr-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                            <h2 className="text-center text-xl text-gray-900 dark:text-white font-semibold">Company Name</h2>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-2">Login with mobile number</h2>
                                        <p className="text-md text-center text-gray-700 px-5 dark:text-gray-300">Please confirm your country code and enter your mobile number</p>
                                        <form action="#" className="mt-6" onSubmit={(event) => event.preventDefault()}>
                                            <div className="flex space-x-4">
                                                <div className="w-1/3">
                                                    <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300">Country code</label>
                                                    <DropDownListComponent cssClass="e-bigger" placeholder="+1"></DropDownListComponent>
                                                </div>
                                                <div className="w-2/3">
                                                    <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300">Mobile number</label>
                                                    <MaskedTextBoxComponent cssClass="e-bigger" mask="9999999999" promptChar=" " placeholder="432 432 4321"></MaskedTextBoxComponent>
                                                </div>
                                            </div>
                                            <div className="e-bigger mt-6">
                                                <ButtonComponent className="w-full text-lg e-primary" type="submit">Continue</ButtonComponent>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div className="d-flex flex-column flex-lg-row" style={{ minHeight: "580px" }}>
                            <div className="col-12 col-lg-7 p-0">
                                <div className="w-100 h-100" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/authentication/split-screen/split-screen.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", minHeight: "240px" }}></div>
                            </div>
                            <div className="col-12 col-lg-5 p-0">
                                <div className="d-flex justify-content-center bg-body">
                                    <div className="w-100 max-w-md bg-body rounded-lg p-4 py-5" style={{ maxWidth: "450px" }}>
                                        <div>
                                            <div className="d-flex justify-content-center mb-4">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                                    <h2 className="text-center text-body fs-5 fw-bold mb-0">Company Name</h2>
                                                </div>
                                            </div>
                                            <h2 className="text-center fs-4 text-body fw-bold mb-2">Login with mobile number</h2>
                                            <p className="text-center text-light-emphasis px-3">Please confirm your country code and enter your mobile number</p>
                                        </div>
                                        <form action="#" className="mt-4" onSubmit={(event) => event.preventDefault()}>
                                            <div className="d-flex justify-content-center gap-3 row p-0">
                                                <div className="col-4 col-lg-3 p-0">
                                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Country code</label>
                                                    <DropDownListComponent cssClass="e-bigger" placeholder="+1" beforeOpen={(event) => (event.cancel = true)}></DropDownListComponent>
                                                </div>
                                                <div className="col-7 col-lg-8 m-0">
                                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Mobile number</label>
                                                    <MaskedTextBoxComponent cssClass="e-bigger" mask="9999999999" promptChar=" " placeholder="432 432 4321"></MaskedTextBoxComponent>
                                                </div>
                                            </div>
                                            <div className="mt-4 e-bigger">
                                                <ButtonComponent className="e-block e-primary" type="submit">Continue</ButtonComponent>
                                            </div>
                                        </form>
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
