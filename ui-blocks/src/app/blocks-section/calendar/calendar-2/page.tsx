'use client';

import { useRef, useEffect, useState } from 'react';
import { SidebarComponent, AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

export default function Calendar2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("310px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const accordion1 = useRef<AccordionComponent | null>(null);
    const accordion2 = useRef<AccordionComponent | null>(null);
    const tooltipInfo = { isVisible: true, format: 'c0' };

    const handleResize = () => {
        setWidth(window.innerWidth < 540 ? '100%' : '310px');
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-2' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
    }
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);
        setTimeout(() => {
            accordion1.current?.refresh();
            accordion2.current?.refresh();
        }, 500);
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
                        <div style={{ height: "945px", width: width, float: "right" }}>
                            <SidebarComponent className="w-full bg-white dark:bg-gray-900" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="bg-white dark:bg-gray-900">
                                    <div className="border-b border-gray-200 dark:border-gray-600">
                                        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                                            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Room Filters</h2>
                                            <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" onClick={() => sidebar.current?.toggle()} content=" " type="button"></ButtonComponent>
                                        </div>
                                        <div className="p-4 flex justify-center">
                                            <CalendarComponent className="e-bigger shadow-none border-none"></CalendarComponent>
                                        </div>
                                    </div>
                                    <div className="pt-4 px-1">
                                        <AccordionComponent className="border-0 bg-transparent" ref={accordion1} expandMode="Multiple">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => <div className="font-normal text-gray-500 dark:text-gray-400">Floors</div>}
                                                    content={() =>
                                                        <div>
                                                            <div className="grid gap-3 p-1">
                                                                <div className="flex justify-between">
                                                                    <CheckBoxComponent label="Ground Floor"></CheckBoxComponent>
                                                                    <span className="e-badge e-badge-pill e-badge-success e-bigger">12 Rooms</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <CheckBoxComponent label="First Floor"></CheckBoxComponent>
                                                                    <span className="e-badge e-badge-pill e-badge-danger e-bigger">Full</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <CheckBoxComponent label="Second Floor"></CheckBoxComponent>
                                                                    <span className="e-badge e-badge-pill e-badge-warning e-bigger">2 Rooms</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <div className="sliderwrap px-3 my-6">
                                            <label className="text-sm text-gray-500 dark:text-gray-400">
                                                Price Range
                                                <span className="e-icons e-circle-info ml-2"></span>
                                            </label>
                                            <div className="px-2">
                                                <SliderComponent type="Range" value={[2500, 4000]} tooltip={tooltipInfo} min={1000} max={5000} step={1} ticks={{ placement: 'After', largeStep: 4000, format: 'c0' }} style={{ width: '225px', left: '15px' }}></SliderComponent>
                                            </div>
                                        </div>
                                        <AccordionComponent className="border-0 bg-transparent" ref={accordion2} expandMode="Multiple">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => <div className="font-normal text-gray-500 dark:text-gray-400">Facility</div>}
                                                    content={() =>
                                                        <div className="grid gap-3 text-gray-500 p-1">
                                                            <div className="flex justify-between">
                                                                <CheckBoxComponent label="Air Conditioner"></CheckBoxComponent>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <CheckBoxComponent label="Swimming Pool"></CheckBoxComponent>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <CheckBoxComponent label="Television"></CheckBoxComponent>
                                                            </div>
                                                            <div>
                                                                <ButtonComponent cssClass="e-primary e-flat" content="Show more" iconCss="e-icons e-plus" type="button"></ButtonComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
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
                        <div style={{ height: "1010px", width: width, float: "right" }}>
                            <SidebarComponent className="bg-body" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: "block" }}>
                                <div className="bg-body">
                                    <div className="border-bottom border-light-subtle">
                                        <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-light-subtle">
                                            <h2 className="h6 fw-semibold text-body mb-0">Room Filters</h2>
                                            <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-close" onClick={() => sidebar.current?.toggle()} content=" " type="button"></ButtonComponent>
                                        </div>
                                        <div className="p-4 pb-0 d-flex justify-content-center align-items-center">
                                            <CalendarComponent className="e-bigger shadow-none border-0"></CalendarComponent>
                                        </div>
                                    </div>
                                    <div className="pt-2 px-1">
                                        <AccordionComponent className="border-0 bg-transparent" ref={accordion1} expandMode="Multiple">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => <div className="fw-medium text-body-secondary">Floors</div>}
                                                    content={() =>
                                                        <div className="row gap-3 p-1">
                                                            <div className="d-flex justify-content-between">
                                                                <CheckBoxComponent label="Ground Floor"></CheckBoxComponent>
                                                                <span className="e-badge e-badge-pill e-badge-success e-bigger">12 Rooms</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <CheckBoxComponent label="First Floor"></CheckBoxComponent>
                                                                <span className="e-badge e-badge-pill e-badge-danger e-bigger">Full</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <CheckBoxComponent label="Second Floor"></CheckBoxComponent>
                                                                <span className="e-badge e-badge-pill e-badge-warning e-bigger">2 Rooms</span>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <div className="sliderwrap px-3 my-4">
                                            <label className="fw-medium text-body-secondary">
                                                Price Range
                                                <span className="e-icons e-circle-info ms-2"></span>
                                            </label>
                                            <div className="px-2 w-4/5">
                                                <SliderComponent type="Range" value={[2500, 4000]} tooltip={tooltipInfo} min={1000} max={5000} step={1} ticks={{ placement: "After", largeStep: 4000, format: "C0" }}></SliderComponent>
                                            </div>
                                        </div>
                                        <AccordionComponent className="border-0 bg-transparent" ref={accordion2} expandMode="Multiple">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => <div className="fw-medium text-body-secondary">Facility</div>}
                                                    content={() =>
                                                        <div className="row gap-3 p-1">
                                                            <div className="d-flex justify-content-between">
                                                                <CheckBoxComponent label="Air Conditioner"></CheckBoxComponent>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <CheckBoxComponent label="Swimming Pool"></CheckBoxComponent>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <CheckBoxComponent label="Television"></CheckBoxComponent>
                                                            </div>
                                                            <div>
                                                                <ButtonComponent className="e-primary e-flat" iconCss="e-icons e-plus" content="Show more" type="button"></ButtonComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
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
