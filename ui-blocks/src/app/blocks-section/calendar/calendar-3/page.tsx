'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Calendar3() {
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
                if (blockData.name === 'calendar-3' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-900" key={"calendar-3-tw"}>
                        <div style={{ height: "752px", width: width, float: "right" }}>
                            <SidebarComponent className="w-full h-full flex flex-col bg-white dark:bg-gray-900" position="Right" type="Push" width={width} ref={sidebar} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="flex-none bg-white dark:bg-gray-900">
                                    <div className="flex justify-between items-center px-4 border-gray-200 dark:border-gray-600">
                                        <div className="py-3 pe-10">
                                            <h2 className="text-xs mb-1 text-gray-700 dark:text-gray-300">CALENDAR</h2>
                                            <DatePickerComponent cssClass="shadow-none border-none" placeholder="Enter date"></DatePickerComponent>
                                        </div>
                                        <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" onClick={() => sidebar.current?.hide()} content=" " type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-y-auto bg-white dark:bg-gray-900">
                                    <div className="flex justify-between border-b border-t border-gray-200 dark:border-gray-600 p-4 py-3">
                                        <ButtonComponent className="e-outline w-16 text-xs py-1 px-3" type="button">Today</ButtonComponent>
                                        <ButtonComponent className="e-flat e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                    <div className="space-y-3 p-4">
                                        <h6 className="text-xs text-gray-500">SEPTEMBER</h6>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mon, Sep 2</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">Labor Day</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm text-primary-600 dark:text-primary-400 mb-1">Wed, Sep 11</h5>
                                            <p className="w-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded pl-3 p-1">Patriot Day (Remembrance)</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Fri, Sep 13</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">National Grandparents Day</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Fri, Sep 20</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">POW/MIA Recognition Day</p>
                                        </div>
                                        <h6 className="text-xs text-gray-500 pt-2">OCTOBER</h6>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Tue, Oct 8</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">Yom Kippur (Jewish Holiday)</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Mon, Oct 14</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">Columbus Day (Federal)</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Fri, Oct 18</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">Alaska Day</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Thu, Oct 31</h5>
                                            <p className="w-full text-cyan-700 dark:text-cyan-50 bg-cyan-100 dark:bg-cyan-800 rounded pl-3 p-1">Halloween (Cultural, not federal)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none py-2 px-4 w-full border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                                    <ButtonComponent className="e-flat e-primary" type="button" content="Create an event" iconCss="e-icons e-plus"></ButtonComponent>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent className="e-large e-icons e-chevron-left e-round" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body" key={"calendar-3-bs"}>
                        <div style={{ height: "798px", width: width, float: 'right' }}>
                            <SidebarComponent className="h-100 d-flex flex-column bg-body sidebar-1" position="Right" type="Push" width={width} ref={sidebar} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="bg-body">
                                    <div className="flex-shrink-0">
                                        <div className="d-flex justify-content-between align-items-center px-3 border-bottom border-light-subtle">
                                            <div className="py-2 pe-5 pt-2">
                                                <h2 className="small text-muted mb-1">CALENDAR</h2>
                                                <DatePickerComponent className="shadow-none border-0" placeholder="Enter date"></DatePickerComponent>
                                            </div>
                                            <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-close" onClick={() => sidebar.current?.hide()} content=" " type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-auto bg-body">
                                        <div className="d-flex justify-content-between border-bottom border-light-subtle p-3">
                                            <ButtonComponent cssClass="e-outline px-2 p-1" type="button">Today</ButtonComponent>
                                            <ButtonComponent cssClass="e-flat e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        </div>
                                        <div className="px-3 py-3">
                                            <h6 className="small text-muted">SEPTEMBER</h6>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Mon, Sep 2</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1">Labor Day</p>
                                            </div>
                                            <div>
                                                <h5 className="fs-6 text-primary">Wed, Sep 11</h5>
                                                <p className="w-100 text-body-secondary bg-body-secondary rounded ps-3 p-1">Patriot Day (Remembrance)</p>
                                            </div>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Fri, Sep 13</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1">National Grandparents Day</p>
                                            </div>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Fri, Sep 20</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1">POW/MIA Recognition Day</p>
                                            </div>
                                            <h6 className="small text-muted pt-2">OCTOBER</h6>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Tue, Oct 8</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1">Yom Kippur (Jewish Holiday)</p>
                                            </div>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Mon, Oct 14</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1">Columbus Day (Federal)</p>
                                            </div>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Fri, Oct 18</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1">Alaska Day</p>
                                            </div>
                                            <div>
                                                <h5 className="fs-6 text-body-secondary">Thu, Oct 31</h5>
                                                <p className="w-100 text-info bg-info-subtle rounded ps-3 p-1 mb-0">Halloween (Cultural, not federal)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 py-2 px-4 w-100 border-top border-light-subtle bg-body-tertiary">
                                        <ButtonComponent cssClass="e-flat e-primary" content="Create an event" iconCss="e-icons e-plus" type="button"></ButtonComponent>
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
