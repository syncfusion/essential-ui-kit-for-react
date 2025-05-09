'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ToastComponent } from "@syncfusion/ej2-react-notifications";

export default function Notification5() {
    const toastRef = useRef<ToastComponent>(null);
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-5' && blockData.theme) {
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
                        <div key={'notification-5-tw'} id="toast" className="mx-4 sm:mx-auto h-screen" style={{ maxWidth: '379px' }}>
                            <ToastComponent ref={toastRef} cssClass="!w-full sm:!m-0 !p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                content={() => (
                                    <div className="flex flex-col justify-between items-center p-4">
                                        <div className="flex justify-between items-center w-full pb-4 sm:pb-3">
                                            <div className="flex items-center gap-2">
                                                <span className="sf-icon-clock-02 text-2xl !leading-6 !text-gray-500 dark:!text-gray-300"></span>
                                                <h1 className="text-sm text-gray-900 dark:text-white font-bold">Trial Ending Soon</h1>
                                            </div>
                                            <ButtonComponent cssClass="e-flat e-small e-round" iconCss="e-icons e-close" type="button"></ButtonComponent>
                                        </div>
                                        <div className="e-bigger flex flex-col gap-2">
                                            <p className="text-gray-700 dark:text-gray-300 leading-5 mb-1">Your free trial will end in two days. Upgrade now to keep your premium features!</p>
                                            <div className="h-32">
                                                <img className="w-full h-full object-cover rounded" src="/react/essential-ui-kit/blocks/assets/images/notification/feature.jpg" alt="feature image"/>
                                            </div>
                                            <ButtonComponent cssClass="e-primary w-max ml-auto" content="Upgrade Now" type="button"></ButtonComponent>
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
                        <div key={'notification-5-bs'} id="toast" className="mx-3 mx-sm-auto vh-100" style={{ maxWidth: '379px' }}>
                            <ToastComponent ref={toastRef} cssClass="w-100 m-0 p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                content={() => (
                                    <div className="d-flex flex-column gap-2 p-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="sf-icon-clock-02 fs-4 text-secondary"></span>
                                                <h1 className="fs-6 text-body fw-bold m-0">Trial Ending Soon</h1>
                                            </div>
                                            <ButtonComponent cssClass="e-flat e-small e-round" iconCss="e-icons e-close" type="button"></ButtonComponent>
                                        </div>
                                        <div className="e-bigger d-flex flex-column gap-2 p-1 pt-0">
                                            <p className="text-body m-0">Your free trial will end in two days. Upgrade now to keep your premium features!</p>
                                            <div style={{ height: '132px' }} >
                                                <img className="w-100 h-100 rounded" src="/react/essential-ui-kit/blocks/assets/images/notification/feature.jpg" style={{ objectFit: 'cover' }} alt="feature image" />
                                            </div>
                                            <ButtonComponent cssClass="e-primary w-max ms-auto mt-3 mt-sm-2" content="Upgrade Now" type="button"></ButtonComponent>
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
