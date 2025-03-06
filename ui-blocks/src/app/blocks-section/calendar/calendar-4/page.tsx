'use client';

import { useRef, useEffect, useState } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Calendar4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("310px");
    const sidebar = useRef<SidebarComponent | null>(null);

    const handleResize = () => {
        setWidth(window.innerWidth < 540 ? '100%' : '310px');
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-4' && blockData.theme) {
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
        /* SB Code - End */
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div style={{ height: '685px', width: width, float: 'right' }}>
                            <SidebarComponent className="w-full bg-white dark:bg-gray-900" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="bg-white dark:bg-gray-900 min-h-screen">
                                    <div className="border-b border-gray-200 dark:border-gray-600">
                                        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                                            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Meetings</h2>
                                            <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" onClick={() => sidebar.current?.show()} content=" " type="button"></ButtonComponent>
                                        </div>
                                        <div className="p-4 flex justify-center items-center">
                                            <CalendarComponent className="e-bigger shadow-none border-none"></CalendarComponent>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-4 bg-white dark:bg-gray-900">
                                        <div className="flex items-center flex-wrap space-y-5 pt-2 rounded-lg">
                                            <div className="w-full">
                                                <div className="flex">
                                                    <div className="w-10 py-1">
                                                        <p className="text-sm text-gray-900 dark:text-white">10:00</p>
                                                        <span className="text-xs text-gray-700 dark:text-gray-300">1 hour</span>
                                                    </div>
                                                    <div className="w-1 h-100 rounded-lg bg-cyan-500 ml-2 mr-4"></div>
                                                    <div className="py-1">
                                                        <h5 className="font-medium text-gray-700 dark:text-gray-300">Project Kickoff</h5>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="flex">
                                                    <div className="w-10 py-1">
                                                        <p className="text-sm text-gray-900 dark:text-white">11:00</p>
                                                        <span className="text-xs text-gray-700 dark:text-gray-300">1 hour</span>
                                                    </div>
                                                    <div className="w-1 h-100 rounded-lg bg-red-500 ml-2 mr-4"></div>
                                                    <div className="py-1">
                                                        <h5 className="font-medium text-gray-700 dark:text-gray-300">Marketing Strategy</h5>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="flex">
                                                    <div className="w-10 py-1">
                                                        <p className="text-sm text-gray-900 dark:text-white">12:00</p>
                                                        <span className="text-xs text-gray-700 dark:text-gray-300">1 hour</span>
                                                    </div>
                                                    <div className="w-1 h-100 rounded-lg bg-orange-500 ml-2 mr-4"></div>
                                                    <div className="py-1">
                                                        <h5 className="font-medium text-gray-700 dark:text-gray-300">Product Design Review</h5>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div style={{ height: '702px', width: width, float: 'right' }}>
                            <SidebarComponent className="bg-body" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="bg-body">
                                    <div className="border-bottom border-light-subtle">
                                        <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-light-subtle">
                                            <div className="text-body fw-bold fs-6 mb-0">Meetings</div>
                                            <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-close" onClick={() => sidebar.current?.show()} content=" " type="button"></ButtonComponent>
                                        </div>
                                        <div className="p-3 pb-0 d-flex justify-content-center align-items-center">
                                            <CalendarComponent className="e-bigger shadow-none border-0"></CalendarComponent>
                                        </div>
                                    </div>
                                    <div className="p-3 pt-3 bg-body">
                                        <div className="row gap-4 pt-2 rounded">
                                            <div className="w-100">
                                                <div className="d-flex">
                                                    <div className="border-end border-info border-2 pe-3">
                                                        <p className="fw-normal text-body-emphasis mb-1">10:00</p>
                                                        <span className="text-body-secondary">1 hour</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="fw-medium text-body-emphasis mb-1">Project Kickoff</p>
                                                        <p className="text-body-secondary mb-0">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex">
                                                    <div className="border-end border-danger border-2 pe-3">
                                                        <p className="fw-normal text-body-emphasis mb-1">11:00</p>
                                                        <span className="text-body-secondary">1 hour</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="fw-medium text-body-emphasis mb-1">Marketing Strategy</p>
                                                        <p className="text-body-secondary mb-0">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex">
                                                    <div className="border-end border-warning border-2 pe-3">
                                                        <p className="fw-normal text-body-emphasisk mb-1">12:00</p>
                                                        <span className="text-body-secondary">1 hour</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="fw-medium text-body-emphasis mb-1">Product Design Review</p>
                                                        <p className="text-body-secondary mb-0">Online</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
