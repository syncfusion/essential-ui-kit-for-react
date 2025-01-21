'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Calendar1() {
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
                if (blockData.name === 'calendar-1' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
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
        };
    }, []);

    const getContent = () => { 
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div style={{ height: "815px", width: width, float: "right" }}>
                            <SidebarComponent className="w-full bg-white dark:bg-gray-800" width={width} position="Right" ref={sidebar} type="Push" isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
                                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Quick view</h2>
                                        <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" onClick={()=> sidebar.current?.hide()} content=" " type="button"></ButtonComponent>
                                    </div>
                                    <div className="p-4 flex justify-center items-center">
                                        <CalendarComponent className="e-bigger shadow-none border-none"></CalendarComponent>
                                    </div>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-800 pt-4">
                                    <h6 className="text-sm font-semibold text-gray-900 dark:text-white">Sep, 22</h6>
                                    <div className="flex items-center flex-wrap space-y-3 pt-3">
                                        <div className="e-card w-full !ml-0 pt-3">
                                            <div className="e-card-content !px-2">
                                                <div className="flex">
                                                    <div className="w-1 rounded-lg bg-cyan-500 mr-4"></div>
                                                    <div className="e-card-stacked">
                                                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Project Kickoff</h5>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">10:00 AM - 11:00 AM</p>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <span className="e-avatar e-avatar-xsmall e-avatar-circle bg-green-700 dark:bg-green-500 text-xs text-white dark:text-black flex items-center justify-center rounded-full">JB</span>
                                                            <span className="text-sm text-gray-700 dark:text-gray-300">Jerome Bell</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card w-full !ml-0 pt-3">
                                            <div className="e-card-content !px-2">
                                                <div className="flex">
                                                    <div className="w-1 rounded-lg bg-red-500 mr-4"></div>
                                                    <div className="e-card-stacked">
                                                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Marketing Strategy</h5>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">02:00 PM - 04:00 PM</p>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <span className="e-avatar e-avatar-xsmall e-avatar-circle bg-primary-600 dark:bg-primary-400 text-xs text-white dark:text-black flex items-center justify-center rounded-full">JP</span>
                                                            <span className="text-sm text-gray-700 dark:text-gray-300">John Peterson</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="e-card w-full !ml-0 pt-3">
                                            <div className="e-card-content !px-2">
                                                <div className="flex">
                                                    <div className="w-1 rounded-lg bg-orange-500 mr-4"></div>
                                                    <div className="e-card-stacked">
                                                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Product Design Review</h5>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">05:00 PM - 06:30 PM</p>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <span className="e-avatar e-avatar-xsmall e-avatar-circle bg-orange-700 dark:bg-orange-500 text-xs text-white dark:text-black flex items-center justify-center rounded-full">KW</span>
                                                            <span className="text-sm text-gray-700 dark:text-gray-300">Kristin Watson</span>
                                                        </div>
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
                        <div style={{ height: "930px", width: width, float: 'right' }}>
                            <SidebarComponent className="d-flex flex-column h-100 bg-body" width={width} position="Right" ref={sidebar} isOpen={true} type="Push" closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="bg-body">
                                    <div className="border-bottom">
                                        <div className="d-flex justify-content-between align-items-center px-3 py-2 pt-3 border-bottom">
                                            <h2 className="h6 text-body fw-bold mb-0">Quick view</h2>
                                            <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-close" onClick={()=> sidebar.current?.hide()} content=" " type="button"></ButtonComponent>
                                        </div>
                                        <div className="p-3 pb-0 d-flex justify-content-center align-items-center">
                                            <CalendarComponent className="e-bigger shadow-none border-0"></CalendarComponent>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="fs-6 fw-bold text-body">Sep, 22</h6>
                                        <div className="d-flex flex-column">
                                            <div className="e-card w-100 mt-2">
                                                <div className="e-card-content px-1">
                                                    <div className="d-flex">
                                                        <div className="bg-info rounded me-2" style={{ width: '4px', height: '98px' }}></div>
                                                        <div className="e-card-stacked">
                                                            <h5 className="fs-6 fw-medium text-body mb-1">Project Kickoff</h5>
                                                            <p className="fs-sm text-body-secondary mb-1">10:00 AM - 11:00 AM</p>
                                                            <div className="d-flex align-items-center mt-1">
                                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle bg-success text-white p-1 px-2 rounded-circle">JB</span>
                                                                <span className="fs-sm fw-medium text-body ms-2">Jerome Bell</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card w-100 mt-3">
                                                <div className="e-card-content px-1">
                                                    <div className="d-flex">
                                                        <div className="bg-danger rounded me-2" style={{ width: '4px', height: '98px' }}></div>
                                                        <div className="e-card-stacked">
                                                            <h5 className="fs-6 fw-medium text-body mb-1">Marketing Strategy</h5>
                                                            <p className="fs-sm text-body-secondary mb-1">02:00 PM - 04:00 PM</p>
                                                            <div className="d-flex align-items-center mt-1">
                                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle bg-info text-white p-1 px-2 rounded-circle">JP</span>
                                                                <span className="fs-sm fw-medium text-body ms-2">John Peterson</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="e-card w-100 mt-3">
                                                <div className="e-card-content px-1">
                                                    <div className="d-flex">
                                                        <div className="bg-success rounded me-2" style={{ width: '4px', height: '98px' }}></div>
                                                        <div className="e-card-stacked">
                                                            <h5 className="fs-6 fw-medium text-body mb-1">Product Design Review</h5>
                                                            <p className="fs-sm text-body-secondary mb-1">05:00 PM - 06:30 PM</p>
                                                            <div className="d-flex align-items-center mt-1">
                                                                <span className="e-avatar e-avatar-xsmall e-avatar-circle bg-warning text-white p-1 rounded-circle">KW</span>
                                                                <span className="fs-sm fw-medium text-body ms-2">Kristin Watson</span>
                                                            </div>
                                                        </div>
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
