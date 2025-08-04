'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function AIPromptCard1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-prompt-card-1' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="py-20 px-4 sm:px-0 m-auto" style={{ maxWidth: "572px" }}>
                            <div className="grid gap-6 sm:grid-cols-2 sm:gap-3">
                                <div className="e-card e-card-horizontal rounded-2xl gap-3 shadow-none">
                                    <div className="e-card-content flex items-center justify-between !pt-3 !px-4 text-center">
                                        <div className="flex items-center">
                                            <span className="e-avatar indent-0 rounded-lg mr-4 text-orange-700 bg-orange-50 dark:bg-orange-900 dark:text-orange-500">
                                                <span className="e-icons text-xl e-image"></span>
                                            </span>
                                            <h2 className="text-gray-900 text-base font-semibold dark:text-white">Image generation</h2>
                                        </div>
                                        <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-card-horizontal rounded-2xl gap-3 shadow-none">
                                    <div className="e-card-content flex items-center justify-between !pt-3 !px-4 text-center">
                                        <div className="flex items-center">
                                            <span className="e-avatar indent-0 rounded-lg mr-4 text-red-600 bg-red-50 dark:bg-red-900 dark:text-red-400">
                                                <span className="e-icons text-xl e-video"></span>
                                            </span>
                                            <h2 className="text-gray-900 text-base font-semibold dark:text-white">Video generation</h2>
                                        </div>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-card-horizontal rounded-2xl gap-3 shadow-none">
                                    <div className="e-card-content flex items-center justify-between !pt-3 !px-4 text-center">
                                        <div className="flex items-center">
                                            <span className="e-avatar indent-0 rounded-lg mr-4 text-cyan-700 bg-cyan-50 dark:bg-cyan-900 dark:text-sky-400">
                                                <span className="e-icons text-xl e-audio"></span>
                                            </span>
                                            <h2 className="text-gray-900 text-base font-semibold dark:text-white">Audio generation</h2>
                                        </div>
                                        <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-card-horizontal rounded-2xl gap-3 shadow-none">
                                    <div className="e-card-content flex items-center justify-between !pt-3 !px-4 text-center">
                                        <div className="flex items-center">
                                            <span className="e-avatar indent-0 rounded-lg mr-4 text-green-700 bg-green-50 dark:bg-green-900 dark:text-green-500">
                                                <span className="e-icons text-xl e-volume"></span>
                                            </span>
                                            <h2 className="text-gray-900 text-base font-semibold dark:text-white">Code generation</h2>
                                        </div>
                                        <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="py-5 px-3 mx-auto" style={{ maxWidth: "580px" }}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="e-card e-card-horizontal rounded-4 gap-3 shadow-none">
                                        <div className="e-card-content p-3 d-flex align-items-center justify-content-between text-center">
                                            <div className="d-flex align-items-center">
                                                <span className="e-avatar rounded-3 text-warning bg-warning-subtle me-3">
                                                    <span className="e-icons fs-4 e-image"></span>
                                                </span>
                                                <h2 className="text-body-secondary fs-6 fw-semibold mb-0">Image generation</h2>
                                            </div>
                                            <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="e-card e-card-horizontal rounded-4 gap-3 shadow-none">
                                        <div className="e-card-content p-3 d-flex align-items-center justify-content-between text-center">
                                            <div className="d-flex align-items-center">
                                                <span className="e-avatar rounded-3 text-danger bg-danger-subtle me-3">
                                                    <span className="e-icons fs-4 e-video"></span>
                                                </span>
                                                <h2 className="text-body-secondary fs-6 fw-semibold mb-0">Video generation</h2>
                                            </div>
                                            <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="e-card e-card-horizontal rounded-4 gap-3 shadow-none">
                                        <div className="e-card-content p-3 d-flex align-items-center justify-content-between text-center">
                                            <div className="d-flex align-items-center">
                                                <span className="e-avatar rounded-3 text-info bg-info-subtle me-3">
                                                    <span className="e-icons fs-4 e-audio"></span>
                                                </span>
                                                <h2 className="text-body-secondary fs-6 fw-semibold mb-0">Audio generation</h2>
                                            </div>
                                            <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="e-card e-card-horizontal rounded-4 gap-3 shadow-none">
                                        <div className="e-card-content p-3 d-flex align-items-center justify-content-between text-center">
                                            <div className="d-flex align-items-center">
                                                <span className="e-avatar rounded-3 text-success bg-success-subtle me-3">
                                                    <span className="e-icons fs-4 e-volume"></span>
                                                </span>
                                                <h2 className="text-body-secondary fs-6 fw-semibold mb-0">Code generation</h2>
                                            </div>
                                            <ButtonComponent className="e-flat" iconCss="e-icons e-arrow-right" type="button"></ButtonComponent>
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
