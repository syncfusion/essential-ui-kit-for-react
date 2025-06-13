'use client';

import { useEffect, useRef, useState } from "react";
import { ToastComponent } from "@syncfusion/ej2-react-notifications";

export default function AINotification1() {
    const toastRef = useRef<ToastComponent>(null);
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-notification-1' && blockData.theme) {
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
                        <div key={'notification-tw'} className="w-full px-4 sm:px-0 h-screen">
                            <div id="toast" className="mx-auto" style={{ maxWidth: '327px' }}>
                                <ToastComponent ref={toastRef} cssClass="!w-full !m-0 !p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                    content={() => (
                                        <div className="flex items-center gap-4 px-4 py-3">
                                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-100 dark:bg-green-600">
                                                <span className="e-icons e-check !text-xl !text-green-600 dark:!text-green-200"></span>
                                            </div>
                                            <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                                                <p className="text-sm font-semibold">File uploaded</p>
                                                <p className="text-xs">Your file has been successfully uploaded.</p>
                                            </div>
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
                        <div key={'notification-bs'} className="w-100 px-3 px-sm-0 vh-100">
                            <div id="toast" className="mx-auto" style={{ maxWidth: '327px' }}>
                                <ToastComponent ref={toastRef} cssClass="w-100 m-0 p-0" position={{ X: 'Center' }} width="100%" timeOut={0} target="#toast" newestOnTop={true} created={() => toastRef.current?.show()}
                                    content={() => (
                                        <div className="d-flex align-items-center gap-3 px-1">
                                            <div className="d-flex justify-content-center align-items-center rounded-circle bg-success-subtle" style={{width: '40px',height: '40px'}}>
                                                <span className="e-icons e-check fs-5 text-success"></span>
                                            </div>
                                            <div className="d-flex flex-column gap-1 text-body-secondary">
                                                <p className="fw-semibold mb-0">File uploaded</p>
                                                <p className="small mb-0">Your file has been successfully uploaded.</p>
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
