'use client';

import { useEffect, useRef, useState } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function AILogin1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const userName = useRef<TextBoxComponent | null>(null);
    const password = useRef<TextBoxComponent | null>(null);

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-login-1' && blockData.theme) {
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
                    <section className="bg-primary-600 dark:bg-primary-400 relative overflow-hidden">
                        <div className="absolute pointer-events-none" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/ai/login/ai-login/ai-circles.png')", backgroundSize: "70%", backgroundRepeat: "no-repeat", backgroundPosition: "left top", width: "100%", height: "100%" }}></div>
                        <div className="w-full p-4 sm:p-6 lg:p-2 text-white flex items-center">
                            <div className="flex flex-wrap mx-0 w-full">
                                <div className="w-full lg:w-2/5 pt-12 sm:pt-10 lg:pt-14 pl-2 sm:pl-0 lg:pl-14 dark:text-black">
                                    <h1 className="w-80 font-semibold text-4xl">Unlock the power of AI</h1>
                                    <p className="w-80 text-lg font-normal pt-8 pb-12">Experience the power of AI with us.</p>
                                </div>
                                <div className="w-full lg:w-3/5 relative">
                                    <div className="bg-white dark:bg-gray-800 rounded-xl">
                                        <div className="flex items-center justify-center">
                                            <div className="w-full max-w-md rounded-lg px-3 py-8 md:px-6 md:py-20">
                                                <div className="flex justify-center gap-3 mb-8">
                                                    <span className="e-icons e-ai-chat text-2xl text-primary-600 dark:text-primary-400"></span>
                                                    <h2 className="text-center font-semibold text-gray-900 dark:text-white text-2xl">Fusion AI</h2>
                                                </div>
                                                <form action="#" className="mt-6" onSubmit={(event) => event.preventDefault()}>
                                                    <div className="w-full border border-gray-200 dark:border-gray-600 rounded-lg p-1 flex gap-3">
                                                        <ButtonComponent cssClass="w-1/2 bg-gray-200 dark:bg-gray-600 text-xs font-normal border-0" content="Sign in" type="button"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat w-1/2 text-xs font-normal border-0" content="Create account" type="button"></ButtonComponent>
                                                    </div>
                                                    <div className="flex items-center justify-center pt-6 gap-3 flex-col">
                                                        <ButtonComponent cssClass="w-full flex items-center justify-center px-4 py-1 e-outline e-normal" type="submit">
                                                            <img className="w-4" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" alt="google logo" />
                                                            <span className="text-sm font-medium pl-1.5">Continue with Google</span>
                                                        </ButtonComponent>
                                                        <ButtonComponent cssClass="w-full flex items-center justify-center px-4 py-1 e-outline e-normal" type="submit">
                                                            <img className="w-4" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/apple-2.png" alt="apple logo" />
                                                            <span className="text-sm font-medium pl-1.5">Continue with Apple</span>
                                                        </ButtonComponent>
                                                    </div>
                                                    <div className="relative flex justify-center items-center mt-6">
                                                        <span className="bg-white dark:bg-gray-800 px-2.5 z-10 absolute text-sm text-gray-700 dark:text-gray-300">Or</span>
                                                        <hr className="w-full absolute border-gray-200 dark:border-gray-600" />
                                                    </div>
                                                    <div className="mt-6 mb-4">
                                                        <TextBoxComponent ref={userName} cssClass="e-normal !border-0 shadow-sm !bg-gray-50 dark:!bg-gray-700" type="email" placeholder="Username or email" created={() => userName.current?.addIcon("prepend", "e-icons e-user e-small")} floatLabelType="Never"></TextBoxComponent>
                                                    </div>
                                                    <div className="mb-6 relative">
                                                        <TextBoxComponent ref={password} cssClass="e-normal !border-0 shadow-sm !bg-gray-50 dark:!bg-gray-700" type="password" placeholder="Password" created={() => password.current?.addIcon("prepend", "e-icons e-lock e-small")} floatLabelType="Never"></TextBoxComponent>
                                                    </div>
                                                    <div className="mb-4">
                                                        <ButtonComponent cssClass="e-normal w-full e-primary" content="Sign in with Fusion AI" type="submit"></ButtonComponent>
                                                    </div>
                                                </form>
                                                <div>
                                                    <p className="w-80 sm:w-96 text-xs font-normal text-center text-gray-700 dark:text-gray-300">
                                                        By creating an account, you agree to our <span className="font-medium text-gray-900 dark:text-white">terms of service</span> and
                                                        <span className="font-medium text-gray-900 dark:text-white"> privacy & cookie statement.</span>
                                                    </p>
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
                    <section className="bg-primary position-relative overflow-hidden">
                        <div className="position-absolute pointer-events-none" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/ai/login/ai-login/ai-circles.png')", backgroundSize: "70%", backgroundRepeat: "no-repeat", backgroundPosition: "left top", width: "100%", height: "100%" }}></div>
                        <div className="w-100 p-3 p-lg-2 text-white d-flex align-items-center">
                            <div className="d-flex flex-wrap mx-0 w-100">
                                <div className="col-12 col-lg-5 pt-5 ps-2 ps-sm-0 ps-lg-5">
                                    <h1 className="fs-2 fw-semibold mt-lg-2" style={{ maxWidth: "275px", fontSize: "32px" }}>Unlock the power of AI</h1>
                                    <p className="fw-normal pt-4 pb-5 mb-0" style={{ maxWidth: "275px" }}>Experience the power of AI with us.</p>
                                </div>
                                <div key={"ailogin-1-bs"} className="col-12 col-lg-7 position-relative">
                                    <div className="bg-body rounded-3">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="w-100 rounded-lg px-3 py-5 px-md-4 px-md-5" style={{ maxWidth: "448px" }}>
                                                <div className="d-flex justify-content-center gap-2 mb-4">
                                                    <span className="e-icons e-ai-chat fs-4 text-primary"></span>
                                                    <h2 className="text-center fw-semibold text-body fs-4">Fusion AI</h2>
                                                </div>
                                                <form action="#" className="mt-4" onSubmit={(event) => event.preventDefault()}>
                                                    <div className="w-100 border border-light-subtle dark:border-secondary rounded-3 p-1 d-flex gap-3">
                                                        <ButtonComponent cssClass="w-50 bg-secondary small fw-normal border-0" content="Sign in" type="button"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat w-50 small fw-normal border-0" content="Create account" type="button"></ButtonComponent>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-center pt-4 gap-3 flex-column">
                                                        <ButtonComponent cssClass="w-100 d-flex align-items-center justify-content-center px-3 py-1 e-outline" type="submit">
                                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" width="18px" alt="google logo" />
                                                            <span className="fw-normal ps-1">Continue with Google</span>
                                                        </ButtonComponent>
                                                        <ButtonComponent cssClass="w-100 d-flex align-items-center justify-content-center px-3 py-1 e-outline" type="submit">
                                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/apple-2.png" width="18px" alt="apple logo" />
                                                            <span className="fw-normal ps-1">Continue with Apple</span>
                                                        </ButtonComponent>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center position-relative mt-4">
                                                        <span className="bg-body px-2 z-1 position-absolute text-light-emphasis small">Or</span>
                                                        <hr className="w-100 border-light-subtle opacity-100" />
                                                    </div>
                                                    <div className="mt-4 mb-3">
                                                        <TextBoxComponent ref={userName} cssClass="e-normal small text-secondary border-0 bg-body-tertiary" type="email" placeholder="Username or email" created={() => userName.current?.addIcon("prepend", "e-icons e-user e-small border-0")} floatLabelType="Never"></TextBoxComponent>
                                                    </div>
                                                    <div className="mb-4 position-relative">
                                                        <TextBoxComponent ref={password} cssClass="e-normal small text-secondary border-0 bg-body-tertiary" type="password" placeholder="Password" created={() => password.current?.addIcon("prepend", "e-icons e-lock e-small border-0")} floatLabelType="Never"></TextBoxComponent>
                                                    </div>
                                                    <div className="mb-3">
                                                        <ButtonComponent cssClass="e-normal w-100 e-primary" content="Sign in with Fusion AI" type="submit"></ButtonComponent>
                                                    </div>
                                                </form>
                                                <div>
                                                    <p className="w-100 small fw-normal text-center text-body-secondary">
                                                        By creating an account, you agree to our <span className="fw-medium text-body">terms of service</span> and
                                                        <span className="fw-medium text-body"> privacy & cookie statement.</span>
                                                    </p>
                                                </div>
                                            </div>
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
