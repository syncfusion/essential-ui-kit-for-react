'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, CheckBoxComponent, RadioButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

export default function FilterPanel5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const tooltipInfo = { isVisible: true };

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-5' && blockData.theme) {
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
        window.addEventListener('resize', setSidebarWidth);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', setSidebarWidth);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div style={{ height: "730px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="flex flex-col bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Filters</h2>
                                        <ButtonComponent cssClass="e-flat text-base" iconCss=" e-icons e-close" content=" " type="button" onClick={() => sidebar.current?.toggle()}></ButtonComponent>
                                    </div>
                                    <div className="p-4">
                                        <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                                            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Active Users</h6>
                                            <div className="flex items-center space-x-2">
                                                <SwitchComponent></SwitchComponent>
                                                <p className="text-sm text-gray-900 dark:text-white">Only show active users</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 py-4 border-b border-gray-200 dark:border-gray-600">
                                            <h6 className="text-sm mb-1 font-medium text-gray-900 dark:text-white">Features Set</h6>
                                            <CheckBoxComponent label="Project Management" checked={true}></CheckBoxComponent>
                                            <CheckBoxComponent label="CRM" checked={true}></CheckBoxComponent>
                                            <CheckBoxComponent label="Analytics"></CheckBoxComponent>
                                            <CheckBoxComponent label="HR tools"></CheckBoxComponent>
                                            <CheckBoxComponent label="Marketing"></CheckBoxComponent>
                                        </div>
                                        <div className="flex flex-col gap-4 py-4 border-b border-gray-200 dark:border-gray-600">
                                            <h6 className="text-sm mb-1 font-medium text-gray-900 dark:text-white">Subscription Type</h6>
                                            <RadioButtonComponent label="Free" name="subscriptiontype" value="free"></RadioButtonComponent>
                                            <RadioButtonComponent label="Basic" name="subscriptiontype" value="basic" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="Premium" name="subscriptiontype" value="premium"></RadioButtonComponent>
                                            <RadioButtonComponent label="Enterprise" name="subscriptiontype" value="enterprise"></RadioButtonComponent>
                                        </div>
                                        <div className="my-4">
                                            <label className="text-sm font-medium text-gray-900 dark:text-white">User Ratings</label>
                                            <div className="px-3">
                                                <SliderComponent type="Range" value={[0, 4.5]} min={0} max={5} step={1} ticks={{ placement: 'After', largeStep: 5}} tooltip={tooltipInfo} style={{ width:'256px', left:'5px' }}></SliderComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3 w-full p-4 border-t border-gray-200 dark:border-gray-600">
                                        <ButtonComponent cssClass="e-outline" content="Clear" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" content="Apply" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-round" iconCss="e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div style={{ height: "750px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="d-flex flex-column bg-body" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <h2 className="h6 mb-0 fw-bold">Filters</h2>
                                        <ButtonComponent cssClass="e-flat fs-6" iconCss="e-icons e-close" content=" " onClick={() => sidebar.current?.toggle()}></ButtonComponent>
                                    </div>
                                    <div className="p-3">
                                        <div className="border-bottom pb-3">
                                            <h6 className="mb-3 text-body fw-medium">Active Users</h6>
                                            <div className="d-flex align-items-center gap-2">
                                                <SwitchComponent></SwitchComponent>
                                                <p className="text-body mb-0 fs-6">Only show active users</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-3 py-3 border-bottom">
                                            <h6 className="text-body fw-medium">Features Set</h6>
                                            <CheckBoxComponent label="Project Management" checked={true}></CheckBoxComponent>
                                            <CheckBoxComponent label="CRM" checked={true}></CheckBoxComponent>
                                            <CheckBoxComponent label="Analytics"></CheckBoxComponent>
                                            <CheckBoxComponent label="HR tools"></CheckBoxComponent>
                                            <CheckBoxComponent label="Marketing"></CheckBoxComponent>
                                        </div>
                                        <div className="d-flex flex-column gap-3 py-3 border-bottom">
                                            <h6 className="text-body fw-medium">Subscription Type</h6>
                                            <RadioButtonComponent label="Free" name="subscriptiontype" value="free"></RadioButtonComponent>
                                            <RadioButtonComponent label="Basic" name="subscriptiontype" value="basic" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="Premium" name="subscriptiontype" value="premium"></RadioButtonComponent>
                                            <RadioButtonComponent label="Enterprise" name="subscriptiontype" value="enterprise"></RadioButtonComponent>
                                        </div>
                                        <div className="my-3">
                                            <label className="text-body fs-6 fw-medium">User Ratings</label>
                                            <div className="px-2">
                                                <SliderComponent type="Range" value={[0, 4.5]} tooltip={tooltipInfo} min={0} max={5} step={1} ticks={{ placement: 'After', largeStep: 5 }} style={{ width:'256px', left:'5px' }}></SliderComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end gap-2 p-3 border-top">
                                        <ButtonComponent cssClass="e-outline" content="Clear"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" content="Apply"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-round" iconCss="e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}