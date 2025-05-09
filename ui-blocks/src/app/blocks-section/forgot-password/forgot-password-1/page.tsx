'use client';

import { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function ForgetPassword1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'forgot-password-1' && blockData.theme) {
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
                        <div className="flex justify-center min-h-screen">
                            <div className="w-full max-w-md rounded-lg p-4 py-12">
                                <div className="flex justify-center mb-6">
                                    <div className="flex items-center justify-center">
                                        <img className="mr-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white">Company Name</h2>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Forgot password?</h2>
                                <p className="text-md text-center text-gray-700 dark:text-gray-300">Enter your email address and we’ll send a link to reset your password</p>
                                <form action="#" className="mt-6 mb-6" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-4">
                                        <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
                                        <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                </form>
                                <div className="e-bigger">
                                    <ButtonComponent className="w-full e-primary" type="submit">Send Reset Link</ButtonComponent>
                                </div>
                                <span className="flex items-center justify-center gap-2 mt-6">
                                    <p className="text-center text-gray-900 dark:text-white">Return to</p>
                                    <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">Sign in</a>
                                </span>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="d-flex justify-content-center bg-body min-vh-100">
                        <div className="max-w-md bg-body rounded-lg p-4 py-5 w-100" style={{ maxWidth: '450px' }}>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="d-flex align-items-center">
                                    <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    <h2 className="text-center fs-5 fw-bold mb-0 text-body">Company Name</h2>
                                </div>
                            </div>
                            <h2 className="text-center fs-4 fw-bold mb-2 text-body">Forgot password?</h2>
                            <p className="text-center text-light-emphasis m-0">Enter your email address and we’ll send a link to reset your password</p>
                            <form action="#" className="mt-4 mb-4" onSubmit={(event) => event.preventDefault()}>
                                <div className="mb-3">
                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Email</label>
                                    <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                </div>
                            </form>
                            <div className="e-bigger">
                                <ButtonComponent className="e-block e-primary" type="submit">Send Reset Link</ButtonComponent>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-1 mt-4">
                                <p className="text-center text-body mb-0">Return to</p>
                                <a href="#" className="text-primary p-0 text-decoration-none fs-6 fw-medium">Sign in</a>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
