'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ToastComponent } from "@syncfusion/ej2-react-notifications";

export default function Notification4() {
    const toastRef = useRef<ToastComponent>(null);
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-4' && blockData.theme) {
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
                        <div key={'notification-4-tw'} id="toast" className="mx-4 sm:mx-auto h-screen" style={{ maxWidth: '520px' }}>
                            <ToastComponent ref={toastRef} cssClass="!w-full" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                content={() => (
                                    <div className="flex gap-4">
                                        <div className="w-12 sm:w-2/6 shrink-0">
                                            <img className="w-full rounded" src="/react/essential-ui-kit/blocks/assets/images/notification/feature.jpg" alt="features picture"/>
                                        </div>
                                        <div className="flex flex-col justify-between w-auto sm:w-4/6">
                                            <div className="flex flex-col gap-2 text-gray-900 dark:text-white">
                                                <h1 className="text-sm sm:text-xl font-semibold">Hey! Did you see new features?</h1>
                                                <p className="leading-5">Check out the latest updates to enhance your experience. Explore them now or view them later.</p>
                                            </div>
                                            <div className="flex justify-end sm:justify-start gap-2.5 pb-1 pr-1 mt-3 sm:mt-0">
                                                <ButtonComponent cssClass="e-primary e-flat" content="Let’s see" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat" content="Not now" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            >
                            </ToastComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'notification-4-bs'} id="toast" className="mx-3 mx-sm-auto vh-100" style={{ maxWidth: '522px' }}>
                            <ToastComponent ref={toastRef} cssClass="w-100" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                content={() => (
                                    <div className="d-flex gap-3 p-1">
                                        <div className="col-2 col-sm-4 flex-shrink-0">
                                            <img className="rounded w-100" src="/react/essential-ui-kit/blocks/assets/images/notification/feature.jpg" alt="features picture" />
                                        </div>
                                        <div className="d-flex flex-column justify-content-between col-9 col-sm-8">
                                            <div className="d-flex flex-column gap-2 text-body">
                                                <h1 className="fs-6 fw-bold m-0">Hey! Did you see new features?</h1>
                                                <p className="lh-base m-0">Check out the latest updates to enhance your experience. Explore them now or view them later.</p>
                                            </div>
                                            <div className="d-flex justify-content-end justify-content-sm-start gap-3 gap-sm-2 mt-3 mt-sm-0">
                                                <ButtonComponent cssClass="e-primary e-flat" content="Let’s see" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat ms-sm-1" content="Not now" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            >
                            </ToastComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
