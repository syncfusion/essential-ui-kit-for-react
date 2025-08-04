'use client';

import { useEffect, useState } from "react";

export default function AICard3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-card-3' && blockData.theme) {
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
                        <div className="px-4 sm:px-6 lg:px-32 py-20" style={{ minHeight: '36rem' }}>
                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-5 xl:grid-cols-4">
                                <div className="e-card rounded-md border-0 h-72 shadow-md">
                                    <div className="e-card-content">
                                        <div className="flex flex-col items-center">
                                            <span className="e-avatar e-avatar-circle e-icons e-paste text-3xl bg-cyan-100 dark:bg-sky-800 text-cyan-700 dark:text-sky-400" style={{ width: '76px', height: '76px' }}></span>
                                            <h2 className="text-sm font-medium pt-6 text-gray-900 dark:text-white">Project management</h2>
                                            <p className="text-xs text-center pt-4 px-7 lg:px-0 w-11/12 text-gray-700 dark:text-gray-300">Create tasks, track time, and update progress all in one place.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-md border-0 h-72 shadow-md">
                                    <div className="e-card-content">
                                        <div className="flex flex-col items-center">
                                            <span className="e-avatar e-avatar-circle e-icons e-clock text-3xl bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-500" style={{ width: '76px', height: '76px' }}></span>
                                            <h2 className="text-sm font-medium pt-6 text-gray-900 dark:text-white">Time tracking</h2>
                                            <p className="text-xs text-center pt-4 px-7 w-11/12 lg:px-0 text-gray-700 dark:text-gray-300">Discover how much time your team is spending on their work.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-md border-0 h-72 shadow-md">
                                    <div className="e-card-content">
                                        <div className="flex flex-col items-center">
                                            <span className="e-avatar e-avatar-circle e-icons e-day text-3xl bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-500" style={{ width: '76px', height: '76px' }}></span>
                                            <h2 className="text-sm font-medium pt-6 text-gray-900 dark:text-white">Resource planning</h2>
                                            <p className="text-xs text-center pt-4 px-7 lg:px-0 w-11/12 text-gray-700 dark:text-gray-300">Monitor how your resources are utilized across projects.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-md border-0 h-72 shadow-md">
                                    <div className="e-card-content">
                                        <div className="flex flex-col items-center">
                                            <span className="e-avatar e-avatar-circle e-icons e-border-shadow-2 text-3xl bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-400" style={{ width: '76px', height: '76px' }}></span>
                                            <h2 className="text-sm font-medium pt-6 text-gray-900 dark:text-white">Invoicing</h2>
                                            <p className="text-xs text-center pt-4 px-7 lg:px-0 w-11/12 text-gray-700 dark:text-gray-300">Invoice based on reported time for accurate billing.</p>
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
                        <div className="mx-auto px-3 px-sm-4 py-5" style={{ minHeight: '36rem', maxWidth: '70rem' }}>
                            <div className="row g-4 mx-lg-2">
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 shadow px-1" style={{ height: '298px' }}>
                                        <div className="e-card-content">
                                            <div className="d-flex flex-column align-items-center">
                                                <span className="e-avatar e-avatar-circle e-icons e-paste fs-3 bg-info-subtle text-info" style={{ width: '76px', height: '76px' }}></span>
                                                <p className="fw-medium pt-4 mb-3 text-body">Project management</p>
                                                <p className="small text-center px-4 px-lg-0 text-body-secondary">Create tasks, track time, and update progress all in one place.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 shadow px-1" style={{ height: '298px' }}>
                                        <div className="e-card-content">
                                            <div className="d-flex flex-column align-items-center">
                                                <span className="e-avatar e-avatar-circle e-icons e-clock fs-3 bg-warning-subtle text-warning" style={{ width: '76px', height: '76px' }}></span>
                                                <p className="fw-medium pt-4 mb-3 text-body">Time tracking</p>
                                                <p className="small text-center px-4 px-lg-0 text-body-secondary">Discover how much time your team is spending on their work.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 shadow px-1" style={{ height: '298px' }}>
                                        <div className="e-card-content">
                                            <div className="d-flex flex-column align-items-center">
                                                <span className="e-avatar e-avatar-circle e-icons e-agenda-date-range fs-3 bg-success-subtle text-success" style={{ width: '76px', height: '76px' }}></span>
                                                <p className="fw-medium pt-4 mb-3 text-body">Resource planning</p>
                                                <p className="small text-center px-4 px-lg-0 text-body-secondary">Monitor how your resources are utilized across projects.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 shadow px-1" style={{ height: '298px' }}>
                                        <div className="e-card-content">
                                            <div className="d-flex flex-column align-items-center">
                                                <span className="e-avatar e-avatar-circle e-icons e-border-shadow-2 fs-3 bg-danger-subtle text-danger" style={{ width: '76px', height: '76px' }}></span>
                                                <p className="fw-medium pt-4 mb-3 text-body">Invoicing</p>
                                                <p className="small text-center px-4 px-lg-0 text-body-secondary">Invoice based on reported time for accurate billing.</p>
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
