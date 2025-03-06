'use client';

import { useEffect, useState } from 'react';
import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function SigninOTP2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signin-otp-2' && blockData.theme) {
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
                        <div className="flex flex-col lg:flex-row" style={{ minHeight: '580px' }}>
                            <div className="w-full lg:w-7/12 p-0">
                                <img className="w-full h-full object-cover" src="/react/essential-ui-kit/blocks/assets/images/authentication/split-screen/split-screen.png" alt="image" width={32} height={32} sizes="100vw" />
                            </div>
                            <div className="w-full lg:w-5/12 p-0">
                                <div className="bg-gray-50 dark:bg-gray-950">
                                    <div className="flex justify-center py-12">
                                        <div className="w-full max-w-md rounded-lg p-4">
                                            <div className="flex justify-center mb-6">
                                                <img className="mr-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                                <h2 className="text-center text-gray-900 dark:text-white text-xl font-semibold">Company Name</h2>
                                            </div>
                                            <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-2">Enter OTP</h2>
                                            <p className="text-md text-center text-gray-700 dark:text-gray-300">We have sent an OTP to your mobile number</p>
                                            <form action="#" className="mt-6" onSubmit={(event) => event.preventDefault()}>
                                                <div className="flex justify-evenly e-bigger">
                                                    <OtpInputComponent></OtpInputComponent>
                                                </div>
                                                <div className="e-bigger mt-6">
                                                    <ButtonComponent className="e-primary w-full" type="submit">Verify</ButtonComponent>
                                                </div>
                                            </form>
                                            <span className="flex items-center justify-center gap-2 mt-7">
                                                <p className="text-center text-gray-900 dark:text-white">Not yet received?</p>
                                                <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base !p-0">Resend OTP</a>
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
                    <section>
                        <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '580px' }}>
                            <div className="col-12 col-lg-7 p-0">
                                <img className="img-fluid w-100 h-100 object-fit-cover" src="/react/essential-ui-kit/blocks/assets/images/authentication/split-screen/split-screen.png" alt="image" width={32} height={32} sizes="100vw" />
                            </div>
                            <div className="col-12 col-lg-5 p-0">
                                <div className="d-flex justify-content-center bg-body">
                                    <div className="bg-body rounded-lg p-4 py-5 w-100" style={{ maxWidth: '450px' }}>
                                        <div className="d-flex justify-content-center align-items-center mb-4">
                                            <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                            <h2 className="text-center text-body fs-5 fw-bold mb-0">Company Name</h2>
                                        </div>
                                        <h2 className="text-center fs-4 text-body fw-bold mb-2">Enter OTP</h2>
                                        <p className="text-center text-light-emphasis mb-0">We have sent an OTP to your mobile number</p>
                                        <form action="#" className="mt-4" onSubmit={(event) => event.preventDefault()}>
                                            <div className="d-flex justify-content-evenly e-bigger">
                                                <OtpInputComponent></OtpInputComponent>
                                            </div>
                                            <div className="mt-4 e-bigger">
                                                <ButtonComponent className="e-block e-primary" type="submit">Verify</ButtonComponent>
                                            </div>
                                        </form>
                                        <div className="d-flex align-items-center justify-content-center gap-2 mt-4">
                                            <p className="text-center text-body mb-0">Not yet received?</p>
                                            <a href="#" className="text-primary p-0 text-decoration-none fs-6 fw-medium">Resend OTP</a>
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
