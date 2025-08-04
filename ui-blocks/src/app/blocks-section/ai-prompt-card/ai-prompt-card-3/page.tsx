'use client';

import { useEffect, useState } from "react";

export default function AIPromptCard3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-prompt-card-3' && blockData.theme) {
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
                        <div className="px-4 py-20 sm:px-6 m-auto" style={{ maxWidth: "1062px" }}>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="flex justify-between">
                                        <div className="p-4 !pr-0 flex items-center">
                                            <span className="e-icons e-edit text-2xl text-gray-500 dark:text-gray-200"></span>
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Screenwriter</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as a screenwriter. You will develop engaging and creative scripts for movies or TV shows based on the themes, characters, and plot lines I provide.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="flex justify-between">
                                        <div className="p-4 !pr-0 flex items-center">
                                            <span className="e-icons e-edit text-2xl text-gray-500 dark:text-gray-200"></span>
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Debater</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as a debater. I will provide you with a topic, and you will present arguments for both sides, offering well-reasoned points and counterpoints.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="flex justify-between">
                                        <div className="p-4 !pr-0 flex items-center">
                                            <span className="e-icons e-edit text-2xl text-gray-500 dark:text-gray-200"></span>
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                <div className="e-card-header-caption">
                                                    <div className="e-card-header-title">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Cyber security specialist</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as a cyber security specialist. I will describe a digital security scenario, and you will suggest strategies to protect systems, identify vulnerabilities, and respond to threats.</p>
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
                        <div className="px-4 py-5 px-sm-5 mx-auto" style={{ maxWidth: "1062px" }}>
                            <div className="row g-3">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="d-flex">
                                            <div className="p-3 pe-0 d-flex align-items-center">
                                                <span className="e-icons e-edit fs-4 text-body-secondary"></span>
                                            </div>
                                            <div className="e-card-stacked">
                                                <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                    <div className="e-card-header-caption">
                                                        <div className="e-card-header-title">
                                                            <p className="small mb-0 fw-medium text-body">Screenwriter</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                    <p className="text-body-secondary mb-0 small text-truncate">I want you to act as a screenwriter. You will develop engaging and creative scripts for movies or TV shows based on the themes, characters, and plot lines I provide.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="d-flex">
                                            <div className="p-3 pe-0 d-flex align-items-center">
                                                <span className="e-icons e-edit fs-4 text-body-secondary"></span>
                                            </div>
                                            <div className="e-card-stacked">
                                                <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                    <div className="e-card-header-caption">
                                                        <div className="e-card-header-title">
                                                            <p className="small mb-0 fw-medium text-body">Debater</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                    <p className="text-body-secondary mb-0 small text-truncate">I want you to act as a debater. I will provide you with a topic, and you will present arguments for both sides, offering well-reasoned points and counterpoints.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="d-flex">
                                            <div className="p-3 pe-0 d-flex align-items-center">
                                                <span className="e-icons e-edit fs-4 text-body-secondary"></span>
                                            </div>
                                            <div className="e-card-stacked">
                                                <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                    <div className="e-card-header-caption">
                                                        <div className="e-card-header-title">
                                                            <p className="small mb-0 fw-medium text-body">Cyber security specialist</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                    <p className="text-body-secondary mb-0 small text-truncate">I want you to act as a cyber security specialist. I will describe a digital security scenario, and you will suggest strategies to protect systems, identify vulnerabilities, and respond to threats.</p>
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
