'use client';

import { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Image from 'next/image';

export default function Signin1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signin-1' && blockData.theme) {
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
                        <div className="flex items-center justify-center md:min-h-screen">
                            <div className="w-full max-w-md rounded-lg px-4 py-14 md:px-6 md:py-20">
                                <div className="flex justify-center mb-6">
                                    <Image className="mr-2" src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                    <h2 className="text-center text-gray-900 dark:text-white text-xl font-semibold">Company Name</h2>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-2">Sign in</h2>
                                <p className="text-md text-center text-gray-700 dark:text-gray-300">Enter your credentials to sign in</p>
                                <form action="#" className="mt-6 mb-6" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-4">
                                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                        <TextBoxComponent cssClass="e-bigger" className="py-2" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-5 relative">
                                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                        <TextBoxComponent cssClass="e-bigger" className="py-2" type="password" placeholder="Password" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="flex items-center justify-between mb-6">
                                        <CheckBoxComponent cssClass="e-bigger" label="Remember me"></CheckBoxComponent>
                                        <a href="javascript:void(0);" className="text-primary-600 dark:text-primary-400 font-medium text-base" style={{ paddingRight: 0 }}>Forgot password?</a>
                                    </div>
                                    <div className="e-bigger mt-6">
                                        <ButtonComponent className="w-full e-primary" type="submit" onClick={(event) => event.preventDefault()}>Sign in</ButtonComponent>
                                    </div>
                                </form>
                                <div>
                                    <span className="flex items-center justify-center gap-2">
                                        <p className="text-center text-base text-gray-900 dark:text-white">Don't have an account yet?</p>
                                        <a href="javascript:void(0);" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">Sign up</a>
                                    </span>
                                    <div className="relative flex justify-center items-center mt-10">
                                        <span className="bg-gray-50 dark:bg-gray-950 px-2 z-10 absolute text-sm text-gray-700 dark:text-gray-300">Or continue with</span>
                                        <hr className="w-full absolute border-gray-200 dark:border-gray-600" />
                                    </div>
                                    <div className="flex items-center justify-center pt-10 gap-4 flex-col">
                                        <ButtonComponent className="w-full flex items-center justify-center px-4 py-2 e-outline" type="submit">
                                            <Image src="/assets/images/common/brand-logos/png/google.png" width={16} height={16} alt="google image" />
                                            <span className="text-base pl-2.5">Sign in with Google</span>
                                        </ButtonComponent>
                                        <ButtonComponent className="w-full flex items-center justify-center px-4 py-2 e-outline" type="submit">
                                            <Image src="/assets/images/common/brand-logos/png/microsoft.png" width={16} height={16} alt="microsoft image" />
                                            <span className="text-base pl-2.5">Sign in with Microsoft</span>
                                        </ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="d-flex justify-content-center min-vh-100 bg-body">
                        <div className="max-w-lg bg-body rounded-lg p-4 py-5 w-100" style={{ maxWidth: '508px' }}>
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <Image className="me-2" src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="logo" />
                                <h5 className="text-center fw-bold mb-0 fs-5 text-body">Company name</h5>
                            </div>
                            <div className="mb-4 text-center">
                                <h4 className="fw-bold text-body fs-4 mb-2">Sign in</h4>
                                <p className="text-center text-light-emphasis">Enter your credentials to sign in</p>
                            </div>
                            <form action="#" onSubmit={(event) => event.preventDefault()}>
                                <div className="mb-3">
                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Email</label>
                                    <TextBoxComponent cssClass="e-bigger" className="py-2" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Password</label>
                                    <TextBoxComponent cssClass="e-bigger" className="py-2" type="password" placeholder="Password" floatLabelType="Never"></TextBoxComponent>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <CheckBoxComponent cssClass="e-bigger" label="Remember me"></CheckBoxComponent>
                                    <a href="javascript:void(0);" className="text-primary fs-6 fw-medium text-decoration-none" style={{ paddingRight: 0, paddingTop: '4px' }}>Forgot password?</a>
                                </div>
                                <div className="mt-4 e-bigger">
                                    <ButtonComponent className="e-block e-primary" type="submit">Sign in</ButtonComponent>
                                </div>
                            </form>
                            <div className="d-flex flex-wrap align-items-center justify-content-center mt-3 gap-1">
                                <p className="text-body w-sm-auto m-0">Don't have an account yet?</p>
                                <a href="javascript:void(0);" className="text-primary fs-6 fw-medium text-decoration-none">Sign up</a>
                            </div>
                            <div>
                                <div className="d-flex justify-content-center align-items-center position-relative mt-3">
                                    <span className="bg-body px-2 z-1 position-absolute text-light-emphasis small">Or continue with</span>
                                    <hr className="w-100 border-light-subtle opacity-100" />
                                </div>
                                <div className="d-flex flex-column mt-3 align-items-center justify-content-center gap-3">
                                    <ButtonComponent className="e-outline e-block d-flex align-items-center justify-content-center px-3 py-2" type="submit">
                                        <Image src="/assets/images/common/brand-logos/png/google.png" width={24} height={24} alt="google logo" />
                                        <span className="fs-6 fw-medium" style={{ paddingLeft: '8px' }}>Sign in with Google</span>
                                    </ButtonComponent>
                                    <ButtonComponent className="e-outline e-block d-flex align-items-center justify-content-center px-3 py-2" type="submit">
                                        <Image src="/assets/images/common/brand-logos/png/microsoft.png" width={24} height={24} alt="microsoft logo" />
                                        <span className="fs-6 fw-medium" style={{ paddingLeft: '8px' }}>Sign in with Microsoft</span>
                                    </ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
