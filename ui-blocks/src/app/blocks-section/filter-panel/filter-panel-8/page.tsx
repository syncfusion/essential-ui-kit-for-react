'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, CheckBoxComponent, RadioButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, SidebarComponent } from "@syncfusion/ej2-react-navigations";

export default function FilterPanel8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebar = useRef<SidebarComponent | null>(null);
    const gettingStartedAccordion = useRef<AccordionComponent | null>(null);
    const billingAccordion = useRef<AccordionComponent | null>(null);
    const supportAccordion = useRef<AccordionComponent | null>(null);

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */
    const refreshDialog = (timeout: number) => {
        setTimeout(() => {
            gettingStartedAccordion.current?.refresh();
            billingAccordion.current?.refresh();
            supportAccordion.current?.refresh();
        }, timeout);
    }

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-8' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshDialog(200);
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
        refreshDialog(1000);
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
                        <div style={{ height: "1450px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="flex flex-col bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center p-4">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Knowledge Base</h2>
                                    </div>
                                    <div className="pt-0 p-4">
                                        <AccordionComponent ref={gettingStartedAccordion} className="bg-transparent mt-2 mb-3 rounded-sm" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => (
                                                        <div className="font-medium text-gray-900 dark:text-white">Getting Started</div>
                                                    )}
                                                    content={() => (
                                                        <div className="flex flex-col gap-5 px-1 pb-1">
                                                            <h6 className="text-sm font-medium text-gray-900 dark:text-white">Topics</h6>
                                                            <CheckBoxComponent label="Platform basics" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Account setup" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Quick start"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Best practices"></CheckBoxComponent>
                                                            <div className="flex items-center justify-between py-2">
                                                                <h6 className="text-sm font-medium text-gray-900 dark:text-white">Recently updated only</h6>
                                                                <SwitchComponent cssClass="mr-2" checked={true}></SwitchComponent>
                                                            </div>
                                                            <RadioButtonComponent label="Welcome guide" name="guidelines" value="welcome-guide" checked={true}></RadioButtonComponent>
                                                            <RadioButtonComponent label="Creating your first project" name="guidelines" value="creating-project"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Understanding the dashboard" name="guidelines" value="understanding-dashboard"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Basic configuration steps" name="guidelines" value="basic-configuration"></RadioButtonComponent>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={billingAccordion} className="bg-transparent my-3 rounded-sm" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => (
                                                        <div className="font-medium text-gray-900 dark:text-white">Billing</div>
                                                    )}
                                                    content={() => (
                                                        <div className="flex flex-col gap-5 px-1 pb-1">
                                                            <h6 className="text-sm font-medium text-gray-900 dark:text-white">Topics</h6>
                                                            <CheckBoxComponent label="Subscriptions" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Invoices" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Payment methods"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Usage plans"></CheckBoxComponent>
                                                            <div className="flex items-center justify-between py-2">
                                                                <h6 className="text-sm font-medium text-gray-900 dark:text-white">Recently updated only</h6>
                                                                <SwitchComponent cssClass="mr-2" checked={true}></SwitchComponent>
                                                            </div>
                                                            <RadioButtonComponent label="Subscription overview" name="billing" value="subscription-overview" checked={true}></RadioButtonComponent>
                                                            <RadioButtonComponent label="Managing payment method" name="billing" value="managing-payment"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Understanding your invoice" name="billing" value="understanding-invoice"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Usage calculations" name="billing" value="usage-calculations"></RadioButtonComponent>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={supportAccordion} className="bg-transparent my-3 rounded-sm" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => (
                                                        <div className="font-medium text-gray-900 dark:text-white">Technical Support</div>
                                                    )}
                                                    content={() => (
                                                        <div className="flex flex-col gap-5 px-1 pb-1">
                                                            <h6 className="text-sm font-medium text-gray-900 dark:text-white">Topics</h6>
                                                            <CheckBoxComponent label="API" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Integration" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Troubleshooting"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Security"></CheckBoxComponent>
                                                            <div className="flex items-center justify-between py-2">
                                                                <h6 className="text-sm font-medium text-gray-900 dark:text-white">Recently updated only</h6>
                                                                <SwitchComponent cssClass="mr-2" checked={true}></SwitchComponent>
                                                            </div>
                                                            <RadioButtonComponent label="API documentation" name="support" value="API-documentation" checked={true}></RadioButtonComponent>
                                                            <RadioButtonComponent label="Common error codes" name="support" value="common-error"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Integration guide" name="support" value="integration-guide"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Security best practices" name="support" value="security-practices"></RadioButtonComponent>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body" key={"filter-8-bs"}>
                        <div style={{ height: "1450px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebar} className="d-flex flex-column bg-body" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <h2 className="h6 mb-0 fw-bold text-body">Knowledge Base</h2>
                                    </div>
                                    <div className="pt-0 p-3">
                                        <AccordionComponent ref={gettingStartedAccordion} className="bg-transparent mt-2 mb-3 rounded-1" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => (
                                                        <div className="fw-medium text-body">Getting Started</div>
                                                    )}
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 px-1 pb-1">
                                                            <h6 className="fw-medium text-body">Topics</h6>
                                                            <CheckBoxComponent label="Platform basics" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Account setup" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Quick start"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Best practices"></CheckBoxComponent>
                                                            <div className="d-flex align-items-center justify-content-between py-2">
                                                                <h6 className="mb-0 fw-medium text-body">Recently updated only</h6>
                                                                <SwitchComponent className="me-2" checked={true}></SwitchComponent>
                                                            </div>
                                                            <RadioButtonComponent label="Welcome guide" name="guidelines" value="welcome-guide" checked={true}></RadioButtonComponent>
                                                            <RadioButtonComponent label="Creating your first project" name="guidelines" value="creating-project"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Understanding the dashboard" name="guidelines" value="understanding-dashboard"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Basic configuration steps" name="guidelines" value="basic-configuration"></RadioButtonComponent>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={billingAccordion} className="bg-transparent my-3 rounded-1" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => (
                                                        <div className="fw-medium text-body">Billing</div>
                                                    )}
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 px-1 pb-1">
                                                            <h6 className="fw-medium text-body">Topics</h6>
                                                            <CheckBoxComponent label="Subscriptions" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Invoices" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Payment methods"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Usage plans"></CheckBoxComponent>
                                                            <div className="d-flex align-items-center justify-content-between py-2">
                                                                <h6 className="mb-0 fw-medium text-body">Recently updated only</h6>
                                                                <SwitchComponent className="me-2" checked={true}></SwitchComponent>
                                                            </div>
                                                            <RadioButtonComponent label="Subscription overview" name="billing" value="subscription-overview" checked={true}></RadioButtonComponent>
                                                            <RadioButtonComponent label="Managing payment method" name="billing" value="managing-payment"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Understanding your invoice" name="billing" value="understanding-invoice"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Usage calculations" name="billing" value="usage-calculations"></RadioButtonComponent>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                        <AccordionComponent ref={supportAccordion} className="bg-transparent my-3 rounded-1" expandMode="Single">
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective expanded={true}
                                                    header={() => (
                                                        <div className="fw-medium text-body">Technical Support</div>
                                                    )}
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 px-1 pb-1">
                                                            <h6 className="fw-medium text-body">Topics</h6>
                                                            <CheckBoxComponent label="API" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Integration" checked={true}></CheckBoxComponent>
                                                            <CheckBoxComponent label="Troubleshooting"></CheckBoxComponent>
                                                            <CheckBoxComponent label="Security"></CheckBoxComponent>
                                                            <div className="d-flex align-items-center justify-content-between py-2">
                                                                <h6 className="mb-0 fw-medium text-body">Recently updated only</h6>
                                                                <SwitchComponent className="me-2" checked={true}></SwitchComponent>
                                                            </div>
                                                            <RadioButtonComponent label="API documentation" name="support" value="API-documentation" checked={true}></RadioButtonComponent>
                                                            <RadioButtonComponent label="Common error codes" name="support" value="common-error"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Integration guide" name="support" value="integration-guide"></RadioButtonComponent>
                                                            <RadioButtonComponent label="Security best practices" name="support" value="security-practices"></RadioButtonComponent>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent className="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>

                );
        };
    };

    return getContent();
}
