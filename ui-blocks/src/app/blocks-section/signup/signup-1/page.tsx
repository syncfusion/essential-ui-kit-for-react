'use client';

import { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function SignUp1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signup-1' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950 min-h-screen flex items-center justify-center">
                        <div className="w-full max-w-md rounded-lg p-4 py-12">
                            <div className="flex justify-center mb-6">
                                <img className="mr-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white">Company Name</h2>
                            </div>
                            <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Sign up</h2>
                            <p className="text-md text-center text-gray-700 dark:text-gray-300">Enter your information to sign up</p>
                            <div className="mt-6">
                                <form action="#" className="mb-6" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-4">
                                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                        <TextBoxComponent cssClass="e-bigger" type="text" placeholder="Name" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                        <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-4 relative">
                                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                        <TextBoxComponent cssClass="e-bigger" type="password" placeholder="Password" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="flex items-start md:items-center justify-start mb-6">
                                        <CheckBoxComponent cssClass="e-bigger md:mt-0 mt-1"></CheckBoxComponent>
                                        <span className="pl-3 text-base text-gray-900 dark:text-white">I agree with{" "}
                                            <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">terms</a>{" "}and{" "}
                                            <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">privacy policy</a>
                                        </span>
                                    </div>
                                    <div className="e-bigger">
                                        <ButtonComponent cssClass="w-full text-base e-primary" content="Sign up" type="submit"></ButtonComponent>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-10">
                                <div className="relative flex justify-center items-center">
                                    <span className="bg-gray-50 dark:bg-gray-950 px-2 z-10 absolute text-gray-700 dark:text-gray-300 text-sm">Or sign up with</span>
                                    <hr className="w-full absolute border-gray-200 dark:border-gray-600" />
                                </div>
                                <div className="flex items-center justify-center pt-10 space-x-4">
                                    <ButtonComponent cssClass="e-outline flex items-center justify-center px-4 py-2" type="submit">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" width={20} height={20} alt="google logo" />
                                    </ButtonComponent>
                                    <ButtonComponent cssClass="e-outline flex items-center justify-center px-4 py-2" type="submit">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/facebook.png" width={20} height={20} alt="facebook logo" />
                                    </ButtonComponent>
                                    <ButtonComponent cssClass="e-outline flex items-center justify-center px-4 py-2" type="submit">
                                        <svg className="svg-icon" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0.617188L5.81975 8.93442L0.302812 15.3829H2.26965L6.70223 10.1918L10.3302 15.3829H16L9.81975 6.53788L14.8724 0.617188H12.9373L8.94593 5.28337L5.68709 0.617188H0ZM2.75415 2.07645H4.94881L13.2632 13.9236H11.0541L2.75415 2.07645Z" />
                                        </svg>
                                    </ButtonComponent>
                                    <ButtonComponent cssClass="e-outline flex items-center justify-center px-4 py-2" type="submit">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/microsoft.png" width={20} height={20} alt="microsoft logo" />
                                    </ButtonComponent>
                                </div>
                                <span className="flex items-center justify-center gap-2 mt-5">
                                    <p className="text-center text-base text-gray-900 dark:text-white">Already have an account?</p>
                                    <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">Sign in</a>
                                </span>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="d-flex justify-content-center align-items-center bg-body min-vh-100">
                        <div className="bg-body rounded-lg p-4 py-5 w-100" style={{ maxWidth: '450px' }}>
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <img className="me-2" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                <h5 className="text-center text-body fw-bold mb-0 fs-5">Company Name</h5>
                            </div>
                            <h4 className="fw-bold text-body text-center mb-2 fs-4">Sign up</h4>
                            <p className="text-center text-light-emphasis m-0">Enter your information to sign up</p>
                            <form action="#" className="mt-4 mb-4" onSubmit={(event) => event.preventDefault()}>
                                <div className="mb-3">
                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Name</label>
                                    <TextBoxComponent cssClass="e-bigger" type="text" placeholder="Name" floatLabelType="Never"></TextBoxComponent>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Email</label>
                                    <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mb-1 fw-medium text-dark-emphasis small">Password</label>
                                    <TextBoxComponent cssClass="e-bigger" type="password" placeholder="Password" floatLabelType="Never"></TextBoxComponent>
                                </div>
                                <div className="mb-4">
                                    <CheckBoxComponent cssClass="e-bigger"></CheckBoxComponent>
                                    <span className="ms-2 text-body">I agree with{" "}
                                        <a href="#" className="text-primary fs-6 px-0 text-decoration-none" style={{ paddingTop: '1px' }}>terms</a>{" "}and{" "}
                                        <a href="#" className="text-primary fs-6 px-0 text-decoration-none" style={{ paddingTop: '1px' }}>privacy policy</a>
                                    </span>
                                </div>
                                <div className="e-bigger">
                                    <ButtonComponent className="w-100" cssClass="e-primary" content="Sign up" type="submit"></ButtonComponent>
                                </div>
                            </form>
                            <div className="d-flex justify-content-center align-items-center position-relative mt-4">
                                <span className="bg-body px-2 z-1 position-absolute text-light-emphasis small">Or sign up with</span>
                                <hr className="w-100 border-light-subtle opacity-100" />
                            </div>
                            <div className="d-flex justify-content-center mt-3 gap-3">
                                <ButtonComponent cssClass="e-outline" type="submit">
                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" width={24} height={24} alt="google logo" />
                                </ButtonComponent>
                                <ButtonComponent cssClass="e-outline" type="submit">
                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/facebook.png" width={24} height={24} alt="facebook logo" />
                                </ButtonComponent>
                                <ButtonComponent cssClass="e-outline" type="submit">
                                    <svg className="svg-icon" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.617188L5.81975 8.93442L0.302812 15.3829H2.26965L6.70223 10.1918L10.3302 15.3829H16L9.81975 6.53788L14.8724 0.617188H12.9373L8.94593 5.28337L5.68709 0.617188H0ZM2.75415 2.07645H4.94881L13.2632 13.9236H11.0541L2.75415 2.07645Z" />
                                    </svg>
                                </ButtonComponent>
                                <ButtonComponent cssClass="e-outline" type="submit">
                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/microsoft.png" width={24} height={24} alt="microsoft logo" />
                                </ButtonComponent>
                            </div>
                            <span className="d-flex align-items-center justify-content-center gap-1 mt-3">
                                <p className="text-center justify-center text-body mb-0">Already have an account?</p>
                                <a href="#" className="text-primary py-0 text-decoration-none fs-6 fw-medium">Sign in</a>
                            </span>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
