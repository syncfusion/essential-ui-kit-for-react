'use client';

import { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Image from 'next/image';

export default function Signin3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signin-3' && blockData.theme) {
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
                        <div className="flex flex-col lg:flex-row mx-auto p-0" style={{ minHeight: '770px' }}>
                            <div className="w-full lg:w-7/12 px-6 py-14 bg-green-600 text-white flex items-center" style={{ backgroundImage: "url('/assets/images/authentication/feature-list/feature-list.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <div className="flex flex-wrap mx-0 w-full sm:p-6 xl:p-0 md:p-8 lg:px-6">
                                    <div className="hidden xl:block xl:w-1/6"></div>
                                    <div className="w-full xl:w-2/3">
                                        <h1 className="font-bold xl:text-5xl md:text-4xl text-3xl">Welcome to our design system</h1>
                                        <p className="my-6 md:text-lg text-base">
                                            The Tailwind Design System helps developers build organized and well-coded dashboards full of beautiful and rich modules.
                                            Join us and start building your application today.</p>
                                        <ul className="list-none md:text-lg text-base">
                                            <li className="flex items-center gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>70+ components</span>
                                            </li>
                                            <li className="flex items-center gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>Light and dark theme supported</span>
                                            </li>
                                            <li className="flex items-center gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>100% auto layouts</span>
                                            </li>
                                            <li className="flex lg:items-start gap-3 mb-3">
                                                <span className="e-icons e-circle-check text-xl"></span>
                                                <span>200+ reusable blocks to easily build templates</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden xl:block xl:w-1/6"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="bg-gray-50 dark:bg-gray-950">
                                    <div className="flex items-center justify-center">
                                        <div className="w-full max-w-md rounded-lg px-4 py-14 md:px-6 md:py-20">
                                            <div className="flex justify-center mb-6">
                                                <Image className="mr-2" src="/assets/images/common/brand-logos/svg/vector.svg" alt="company logo" width={32} height={32} />
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
                                                    <ButtonComponent className="w-full e-primary" type="submit">Sign in</ButtonComponent>
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
                                                        <Image src="/assets/images/common/brand-logos/png/google.png" alt="google logo" width={16} height={16} />
                                                        <span className="text-base pl-2.5">Sign in with Google</span>
                                                    </ButtonComponent>
                                                    <ButtonComponent className="w-full flex items-center justify-center px-4 py-2 e-outline" type="submit">
                                                        <Image src="/assets/images/common/brand-logos/png/microsoft.png" alt="microsoft logo" width={16} height={16} />
                                                        <span className="text-base pl-2.5">Sign in with Microsoft</span>
                                                    </ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="container-fluid d-md-flex d-block flex-wrap mx-auto p-0" style={{ minHeight: '770px' }}>
                        <div className="col-12 col-lg-7 d-flex align-items-center bg-success p-4 p-lg-4" style={{ backgroundImage: "url('/assets/images/authentication/feature-list/feature-list.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
                        <div className="col-12 col-lg-5 p-0">
                            <div className="d-flex justify-content-center align-items-center bg-body">
                                <div className="max-w-lg bg-body rounded-lg p-4 p-md-5 w-100" style={{ maxWidth: '508px' }}>
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <Image className="me-2" src="/assets/images/common/brand-logos/svg/vector.svg" alt="company logo" width={32} height={32} />
                                        <h5 className="text-center fw-bold mb-0 fs-5 text-body">Company Name</h5>
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
                                            <TextBoxComponent cssClass="e-bigger" className=" py-2" type="password" placeholder="Password" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <CheckBoxComponent cssClass="e-bigger" label="Remember me"></CheckBoxComponent>
                                            <a href="javascript:void(0);" className="text-primary fs-6 fw-medium text-decoration-none" style={{ paddingRight: '0 !important', paddingTop: '4px !important' }}>Forgot password?</a>
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
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
