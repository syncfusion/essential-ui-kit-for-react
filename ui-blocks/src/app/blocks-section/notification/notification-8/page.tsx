'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ToastComponent } from "@syncfusion/ej2-react-notifications";

export default function Notification8() {
    const toastRef = useRef<ToastComponent>(null);
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-8' && blockData.theme) {
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
                        <div key={"notification-8-tw"} className="w-full px-4 sm:px-0 h-screen">
                            <div id="toast" className="mx-auto" style={{ maxWidth: '420px' }}>
                                <ToastComponent ref={toastRef} cssClass="!w-full !m-0 !p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                    content={() => (
                                        <div className="flex justify-between items-center px-4 py-3">
                                            <div className="flex items-center">
                                                <span className="text-green-700 dark:text-green-500 e-icons e-circle-check e-medium"></span>
                                                <span className="text-gray-900 dark:text-white text-base font-medium ml-2">Message sent</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="flex items-center gap-2">
                                                    <ButtonComponent cssClass="e-flat !px-2" content="View" type="button"></ButtonComponent>
                                                    <ButtonComponent cssClass="e-flat !px-2" content="Undo" type="button"></ButtonComponent>
                                                </div>
                                                <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-close !text-sm !leading-4" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    )}
                                ></ToastComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"notification-8-bs"} className="w-100 px-3 px-sm-0 vh-100">
                            <div id="toast" className="mx-auto" style={{ maxWidth: '420px' }}>
                                <ToastComponent ref={toastRef} cssClass="w-100 m-0 p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                    content={() => (
                                        <div className="d-flex justify-content-between align-items-center px-1">
                                            <div className="d-flex align-items-center">
                                                <span className="text-success e-icons e-circle-check e-medium"></span>
                                                <span className="text-body fs-6 fw-medium ms-2">Message sent</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <ButtonComponent cssClass="e-flat px-2" content="View" type="button"></ButtonComponent>
                                                    <ButtonComponent cssClass="e-flat px-2" content="Undo" type="button"></ButtonComponent>
                                                </div>
                                                <ButtonComponent cssClass="e-flat e-round ms-sm-1" iconCss="e-icons e-close fs-6" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    )}
                                >
                                </ToastComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
