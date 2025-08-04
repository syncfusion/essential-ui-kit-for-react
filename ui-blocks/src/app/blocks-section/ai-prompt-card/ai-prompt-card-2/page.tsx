'use client';

import { useEffect, useState } from "react";

export default function AIPromptCard2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-prompt-card-2' && blockData.theme) {
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
                        <div className="px-4 lg:px-0 py-20 mx-auto lg:max-w-6xl">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="e-card-stacked">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                    <div>
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-header-title">
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">Linux terminal</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                    <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as a Linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else.</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions !p-4">
                                                <div className="e-icons text-lg text-gray-500 dark:text-gray-200 e-bookmark mb-1"></div>
                                                <div className="text-gray-900 dark:text-white text-xs text-center">23</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="e-card-stacked">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                    <div>
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-header-title">
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">Travel guide</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                    <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as a travel guide. I will write you my location and you will suggest places to visit in and around my location. You will also suggest local foods to try and cultural experiences to explore.</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions !p-4">
                                                <div className="e-icons text-lg text-gray-500 dark:text-gray-200 e-bookmark mb-1"></div>
                                                <div className="text-gray-900 dark:text-white text-xs text-center">10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="e-card-stacked">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                    <div>
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-header-title">
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">Educational content creator</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                    <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as an educational content creator. You will need to create engaging and informative content on a given topic, suitable for a specific audience such as students, professionals, or general readers.</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions !p-4">
                                                <div className="e-icons text-lg text-gray-500 dark:text-gray-200 e-bookmark mb-1"></div>
                                                <div className="text-gray-900 dark:text-white text-xs text-center">0</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg border-none shadow-md w-full">
                                    <div className="e-card-stacked">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="e-card-header !px-4 !pt-4 !pb-2 !justify-between items-center !w-full">
                                                    <div>
                                                        <div className="e-card-header-caption">
                                                            <div className="e-card-header-title">
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">English pronunciation helper</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !px-4 !pb-4 !text-wrap">
                                                    <p className="text-xs text-gray-700 line-clamp-1 dark:text-gray-300">I want you to act as an English pronunciation assistant for Turkish-speaking people. I will write you phrases and you will provide phonetic transcriptions and audio examples to help with pronunciation.</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions !p-4">
                                                <div className="e-icons text-xl text-gray-500 dark:text-gray-200 e-bookmark mb-1"></div>
                                                <div className="text-gray-900 dark:text-white text-xs text-center">0</div>
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
                        <div className="px-3 py-5 mx-auto" style={{ maxWidth: "1140px" }}>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="e-card-stacked">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                        <div>
                                                            <div className="e-card-header-caption">
                                                                <div className="e-card-header-title">
                                                                    <p className="small fw-medium text-body mb-0">Linux terminal</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                        <p className="small mb-0 text-body-secondary" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                                            I want you to act as a Linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="e-card-actions p-3 text-center">
                                                    <div className="e-icons fs-5 text-body-secondary mb-1 e-bookmark"></div>
                                                    <div className="text-body small lh-base">23</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="e-card-stacked">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                        <div>
                                                            <div className="e-card-header-caption">
                                                                <div className="e-card-header-title">
                                                                    <p className="small fw-medium text-body mb-0">Travel guide</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                        <p className="small mb-0 text-body-secondary" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                                            I want you to act as a travel guide. I will write you my location and you will suggest places to visit in and around my location. You will also suggest local foods to try and cultural experiences to explore.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="e-card-actions p-3 text-center">
                                                    <div className="e-icons fs-5 text-body-secondary mb-1 e-bookmark"></div>
                                                    <div className="text-body small lh-base">10</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="e-card-stacked">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                        <div>
                                                            <div className="e-card-header-caption">
                                                                <div className="e-card-header-title">
                                                                    <p className="small fw-medium text-body mb-0">Educational content creator</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                        <p className="small mb-0 text-body-secondary" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                                            I want you to act as an educational content creator. You will need to create engaging and informative content on a given topic, suitable for a specific audience such as students, professionals, or general readers.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="e-card-actions p-3 text-center">
                                                    <div className="e-icons fs-5 text-body-secondary mb-1 e-bookmark"></div>
                                                    <div className="text-body small lh-base">0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="e-card rounded-3 border-0 shadow w-100">
                                        <div className="e-card-stacked">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <div className="e-card-header px-3 pt-3 d-flex justify-content-between align-items-center w-100">
                                                        <div>
                                                            <div className="e-card-header-caption">
                                                                <div className="e-card-header-title">
                                                                    <p className="small fw-medium text-body mb-0">English pronunciation helper
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card-content px-3 pb-3 pt-2 text-wrap">
                                                        <p className="small mb-0 text-body-secondary" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                                            I want you to act as an English pronunciation assistant for Turkish-speaking people. I will write you phrases and you will provide phonetic transcriptions and audio examples to help with pronunciation.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="e-card-actions p-3 text-center">
                                                    <div className="e-icons fs-5 text-body-secondary mb-1 e-bookmark"></div>
                                                    <div className="text-body small lh-base">0</div>
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
