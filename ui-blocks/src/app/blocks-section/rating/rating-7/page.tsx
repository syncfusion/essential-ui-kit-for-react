'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Rating7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [satisfactoryLevel, setSatisfactoryLevel] = useState<boolean | null>(null);
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-7' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-800">
                            <div className="pt-4" style={{ minHeight: "36rem" }}>
                                <div className="flex flex-col gap-5 lg:flex-row items-center justify-center">
                                    <div className="p-6 border-0 sm:!rounded-lg sm:!border rounded-none bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500">
                                        <h3 className="font-semibold mb-6 text-base text-center text-gray-900 dark:text-white">Were you satisfied with our platform</h3>
                                        <div className="flex gap-10 justify-center">
                                            <div className="flex flex-col items-center" onClick={() => setSatisfactoryLevel(true)}>
                                                <div className={`e-avatar e-avatar-circle !w-16 !h-16 shrink-0 flex items-center justify-center ${ satisfactoryLevel === true ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-500" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300" }`}>
                                                    <span className="e-icons e-thumbs-up text-4xl"></span>
                                                </div>
                                                <span className={`mt-2 text-sm font-medium ${ satisfactoryLevel === true ? "text-green-700 dark:text-green-500" : "text-gray-900 dark:text-white" }`} >YES</span>
                                            </div>
                                            <div className="flex flex-col items-center" onClick={() => setSatisfactoryLevel(false)}>
                                                <div className={`e-avatar e-avatar-circle !w-16 !h-16 shrink-0 flex items-center justify-center ${ satisfactoryLevel === false ? "bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300" }`}>
                                                    <span className="e-icons e-thumbs-down text-4xl"></span>
                                                </div>
                                                <span className={`mt-2 text-sm font-medium ${ satisfactoryLevel === false ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-white" }`} >NO</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-sm h-full w-full border-0 sm:!rounded-lg sm:!border rounded-none py-6 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500">
                                        <h3 className="font-semibold text-base text-center text-gray-900 dark:text-white">Share your feedback</h3>
                                        <div className="mt-4 mx-auto">
                                            <div className="flex gap-4 justify-center">
                                                <p className="text-sm text-gray-700 dark:text-gray-100">Was this page helpful?</p>
                                                <div className="flex justify-center gap-3">
                                                <ButtonComponent cssClass="e-small" iconCss="e-icons e-thumbs-up" type="button">Yes</ButtonComponent>
                                                <ButtonComponent cssClass="e-small" iconCss="e-icons e-thumbs-down" type="button">No</ButtonComponent>
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
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5">
                                <div className="p-4 bg-white border rounded-3 text-center flex-grow-1 bg-body" style={{ maxWidth: "330px" }}>
                                    <h3 className="fw-semibold mb-4 fs-6 text-center text-body">Were you satisfied with our platform</h3>
                                    <div className="d-flex justify-content-center gap-5">
                                        <div className="d-flex flex-column align-items-center" onClick={() => setSatisfactoryLevel(true)}>
                                            <div className={`e-avatar e-avatar-circle d-flex align-items-center justify-content-center ${ satisfactoryLevel === true ? "bg-success-subtle text-success" : "bg-secondary-subtle text-body-secondary"}`} style={{ width: "64px", height: "64px" }}>
                                                <span className="e-icons e-thumbs-up fs-2"></span>
                                            </div>
                                            <span className={`mt-2 small fw-medium ${ satisfactoryLevel === true ? "text-success" : "text-body"}`}>YES</span>
                                        </div>
                                        <div className="d-flex flex-column align-items-center" onClick={() => setSatisfactoryLevel(false)}>
                                            <div className={`e-avatar e-avatar-circle d-flex align-items-center justify-content-center ${ satisfactoryLevel === false ? "bg-danger-subtle text-danger" : "bg-secondary-subtle text-body-secondary"}`} style={{ width: "64px", height: "64px" }}>
                                                <span className="e-icons e-thumbs-down fs-2"></span>
                                            </div>
                                            <span className={`mt-2 small fw-medium ${ satisfactoryLevel === false ? "text-danger" : "text-body"}`}>No</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border rounded-3 w-100 bg-body" style={{ maxWidth: "360px" }}>
                                    <h3 className="fw-semibold fs-6 text-center text-body">Share your feedback</h3>
                                    <div className="mt-3 d-flex flex-row justify-content-center align-item-center gap-3">
                                        <p className="small text-body-secondary mb-1">Was this page helpful?</p>
                                        <div className="d-flex justify-content-center gap-2 pl-1">
                                            <ButtonComponent iconCss="e-icons e-thumbs-up" cssClass="e-small e-outline">Yes</ButtonComponent>
                                            <ButtonComponent iconCss="e-icons e-thumbs-down" cssClass="e-small e-outline">No</ButtonComponent>
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
