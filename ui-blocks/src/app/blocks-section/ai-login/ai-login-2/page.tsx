'use client';

import { useEffect, useRef, useState } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function AILogin2() {
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
                if (blockData.name === 'ai-login-2' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-800">
                        <div className="relative flex items-center justify-center h-screen">
                            <div className="absolute top-0 left-0" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/ai/login/ai-login/top-curve.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100%", height: "28%" }}></div>
                            <div className="w-full max-w-md rounded-lg px-4 py-14 md:px-6 md:py-20">
                                <div className="flex justify-center mb-4">
                                    <h2 className="text-center text-gray-900 dark:text-white text-2xl font-semibold">Login</h2>
                                </div>
                                <p className="text-base text-center font-normal text-gray-900 dark:text-white">Please enter your login Id and password</p>
                                <form action="#" className="mt-4 mb-6" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-4">
                                        <TextBoxComponent ref={userName} cssClass="e-normal text-base text-gray-500 !border-0 shadow-sm !bg-gray-50 dark:!bg-gray-700" placeholder="Username or email" created={() => userName.current?.addIcon("prepend", "e-icons e-user e-small")} floatLabelType="Never" type="email"></TextBoxComponent>
                                    </div>
                                    <div className="mb-3 relative">
                                        <TextBoxComponent ref={password} cssClass="e-normal text-base text-gray-500 !border-0 shadow-sm !bg-gray-50 dark:!bg-gray-700" placeholder="Password" created={() => password.current?.addIcon("prepend", "e-icons e-lock e-small")} floatLabelType="Never" type="password"></TextBoxComponent>
                                    </div>
                                    <div className="flex items-center justify-end mb-6">
                                        <a href="#" className="font-normal text-xs text-primary-600 dark:text-primary-400">Forgot password?</a>
                                    </div>
                                    <div className="mt-6">
                                        <ButtonComponent cssClass="w-full e-primary" content="Login" type="submit"></ButtonComponent>
                                    </div>
                                </form>
                                <div className="flex items-center justify-center gap-4 flex-col">
                                    <ButtonComponent cssClass="w-full flex items-center justify-center px-4 py-1 e-outline" type="submit">
                                        <img className="w-4" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" alt="google logo" />
                                        <span className="text-sm font-medium pl-1.5">Continue with Google</span>
                                    </ButtonComponent>
                                </div>
                                <div>
                                    <span className="flex items-center justify-center gap-1 font-normal text-xs mt-4">
                                        <p className="text-center text-gray-900 dark:text-white">Not a member yet?</p>
                                        <a href="#" className="text-primary-600 dark:text-primary-400 z-10">Register</a>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/ai/login/ai-login/bottom-curve.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", width: "100%", height: "28%" }}></div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="position-relative d-flex justify-content-center align-items-center min-vh-100">
                            <div className="position-absolute top-0 start-0" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/ai/login/ai-login/top-curve.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100%", height: "28%" }}></div>
                            <div key={"ailogin-2-bs"} className="w-100 rounded-lg px-3 py-5 py-md-5" style={{ maxWidth: "448px" }}>
                                <div className="d-flex justify-content-center mb-3">
                                    <h2 className="text-center text-body fs-4 fw-bold">Login</h2>
                                </div>
                                <p className="fs-6 text-center fw-normal text-body">Please enter your login Id and password</p>
                                <form action="#" className="mt-3 mb-3" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-3">
                                        <TextBoxComponent ref={userName} cssClass="e-normal small text-secondary border-0 bg-body-tertiary" placeholder="Username or email" created={() => userName.current?.addIcon("prepend", "e-icons e-user e-small border-0")} floatLabelType="Never" type="email"></TextBoxComponent>
                                    </div>
                                    <div className="mb-2 position-relative">
                                        <TextBoxComponent ref={password} cssClass="e-normal small text-secondary border-0 bg-body-tertiary" placeholder="Password" created={() => password.current?.addIcon("prepend", "e-icons e-lock e-small border-0")} floatLabelType="Never" type="password"></TextBoxComponent>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end mb-3">
                                        <a href="#" className="fw-normal small text-primary text-decoration-none">Forgot password?</a>
                                    </div>
                                    <div className="mt-3">
                                        <ButtonComponent cssClass="w-100 e-primary" content="Login" type="submit"></ButtonComponent>
                                    </div>
                                </form>
                                <div className="d-flex align-items-center justify-content-center gap-3 flex-column">
                                    <ButtonComponent cssClass="w-100 d-flex align-items-center justify-content-center px-3 py-1 e-outline" type="submit">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" width="18px" alt="google logo" />
                                        <span className="fw-normal ps-1">Continue with Google</span>
                                    </ButtonComponent>
                                </div>
                                <div>
                                    <span className="d-flex align-items-center justify-content-center gap-1 fw-normal small mt-3">
                                        <p className="text-center text-body mb-0">Not a member yet?</p>
                                        <a href="#" className="text-primary text-decoration-none z-1">Register</a>
                                    </span>
                                </div>
                            </div>
                            <div className="position-absolute bottom-0 end-0" style={{ backgroundImage: "url('/react/essential-ui-kit/blocks/assets/images/ai/login/ai-login/bottom-curve.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", width: "100%", height: "28%" }}></div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
