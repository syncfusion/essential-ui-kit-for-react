'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ToastComponent } from "@syncfusion/ej2-react-notifications";

export default function Notification9() {
    const toastRef = useRef<ToastComponent>(null);
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-9' && blockData.theme) {
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
                        <div key={'notification-9-tw'} className="w-full px-4 sm:px-0 h-screen">
                            <div id="toast" className="mx-auto" style={{ maxWidth: '328px' }}>
                                <ToastComponent ref={toastRef} cssClass="!w-full !m-0 !p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                    content={() => (
                                        <div className="flex justify-between items-center px-4 py-3">
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 rounded-full bg-green-700 dark:bg-green-500 !text-white dark:!text-gray-800 e-icons e-check !text-xs flex items-center justify-center"></div>
                                                <span className="text-base text-gray-900 dark:text-white font-medium ml-2">Email sent</span>
                                            </div>
                                            <ButtonComponent cssClass="e-flat !px-3" content="Close" type="button"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                </ToastComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'notification-9-bs'} className="w-100 px-3 px-sm-0 vh-100">
                            <div id="toast" className="mx-auto" style={{ maxWidth: '328px' }}>
                                <ToastComponent ref={toastRef} cssClass="w-100 m-0 p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                    content={() => (
                                        <div className="d-flex justify-content-between align-items-center px-1">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex align-items-center justify-content-center bg-success text-white rounded-circle e-icons e-check" style={{ width: '1rem', height: '1rem', fontSize: '0.75rem' }}></div>
                                                <span className="text-body fs-6 fw-medium ms-2">Email sent</span>
                                            </div>
                                            <ButtonComponent cssClass="e-flat px-3" content="Close" type="button"></ButtonComponent>
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
