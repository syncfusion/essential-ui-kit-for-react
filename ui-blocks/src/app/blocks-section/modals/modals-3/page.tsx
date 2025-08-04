'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { StepperComponent, StepDirective, StepsDirective, AccordionComponent, AccordionItemDirective, AccordionItemsDirective} from '@syncfusion/ej2-react-navigations';
import styles from './page.module.css';

export default function Modals3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [stepperStyle, setStepperStyle] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const stepper = useRef<StepperComponent | null>(null);
    const dialog = useRef<DialogComponent>(null);
    const accordions = useRef<AccordionComponent>(null);

    const checkWindowSize = (): void => {
        if (!stepper.current) return;
        const isVertical = window.innerWidth <= 640;
        stepper.current.orientation = isVertical ? 'vertical' : 'horizontal';
        stepper.current.labelPosition = isVertical ? 'end' : 'bottom';
        setStepperStyle(isVertical ? { minHeight: '286px' } : {});
        setTimeout(()=>{
            stepper.current?.refresh();
        }, 300);
        dialog.current?.show(isVertical);
    }

   /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-3' && blockData.theme) {
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
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
       
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener("resize", checkWindowSize);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id="dialog-container" className="relative" style={{ minHeight: "600px" }}>
                            <DialogComponent ref={dialog} id={styles["dialogs"]} className="rounded-none sm:rounded-lg sm:m-4 overflow-hidden" width="545px" isModal={true} target="#dialog-container" showCloseIcon={true} open={(e) => { e.preventFocus = true; }}
                                header={() => (
                                    <div>
                                        <p className="mb-0.5 font-semibold leading-normal">Add Team Member</p>
                                        <p className="text-xs leading-normal text-gray-500 dark:text-gray-400 text-wrap">Complete all sections to add a new team member.</p>
                                    </div>
                                )}
                                footerTemplate={() =>
                                    <div className="flex justify-end gap-2 sm:gap-1 py-2">
                                        <ButtonComponent cssClass="w-1/2 sm:w-fit !ml-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-1/2 sm:w-fit" content="Add Member" type="button"></ButtonComponent>
                                    </div>
                                }
                            >
                                <div className="space-y-5 sm:space-y-4">
                                    <div className="py-2" style={stepperStyle}>
                                        <StepperComponent ref={stepper} cssClass="e-small" stepChanged={(e) => setActiveStep(e.activeStep)} labelPosition="bottom">
                                            <StepsDirective>
                                                <StepDirective iconCss="e-icons" label="User Information"></StepDirective>
                                                <StepDirective iconCss="e-icons" label="Workspace Access"></StepDirective>
                                                <StepDirective iconCss="e-icons" label="Security Settings"></StepDirective>
                                                <StepDirective iconCss="e-icons" label="Resource Access"></StepDirective>
                                            </StepsDirective>
                                        </StepperComponent>
                                    </div>
                                    <div className="sm:overflow-y-scroll" style={{ height: "298px", scrollbarWidth: "none" }}>
                                        <AccordionComponent ref={accordions} expandMode="Single" className="border-0" expanding={(e) => {if (stepper?.current) {stepper.current.activeStep = e.index;}}}>
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective cssClass="mb-3 !border !rounded-lg" expanded={activeStep === 0}
                                                    header={() =>
                                                        <div className="flex gap-2.5 items-center mr-4">
                                                            <span className="e-avatar rounded-lg border bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"><i className="e-icons sf-icon-users text-xl"></i></span>
                                                            <div className="flex flex-col gap-0.5">
                                                                <p className="text-base">User Information</p>
                                                                <p className="text-gray-500 font-normal dark:text-gray-400 text-wrap line-clamp-1">Basic details about the team member</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    content={() =>
                                                        <div className="flex flex-col gap-3 p-1 pt-3">
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                <div className="flex flex-col gap-1">
                                                                    <label className="text-xs font-medium text-gray-700 dark:text-gray-200">
                                                                        First Name <span className="text-red-600 font-normal dark:text-red-400">*</span>
                                                                    </label>
                                                                    <TextBoxComponent type="text" placeholder="Enter first name"></TextBoxComponent>
                                                                </div>
                                                                <div className="flex flex-col gap-1">
                                                                    <label className="text-xs font-medium text-gray-700 dark:text-gray-200">
                                                                        Last Name <span className="text-red-600 font-normal dark:text-red-400">*</span>
                                                                    </label>
                                                                    <TextBoxComponent type="text" placeholder="Enter last name"></TextBoxComponent>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <label className="text-xs font-medium text-gray-700 dark:text-gray-200">
                                                                    Work Email <span className="text-red-600 font-normal dark:text-red-400">*</span>
                                                                </label>
                                                                <TextBoxComponent type="email" placeholder="name@company.com"></TextBoxComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                                <AccordionItemDirective cssClass="mb-3 !border !rounded-lg" expanded={activeStep === 1}
                                                    header={() =>
                                                        <div className="flex gap-2.5 items-center mr-4">
                                                            <span className="e-avatar rounded-lg border bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"><i className="e-icons sf-icon-building-03 text-xl"></i></span>
                                                            <div className="flex flex-col gap-0.5">
                                                                <p className="text-base">Workspace Access</p>
                                                                <p className="text-gray-500 font-normal dark:text-gray-400 text-wrap line-clamp-1">Workspace and role assignment</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    content={() =>
                                                        <div className="grid grid-cols-1 gap-3 p-1 pt-3">
                                                            <div className="flex flex-col gap-1">
                                                                <label className="text-xs font-medium text-gray-700 dark:text-gray-200">
                                                                Workspace <span className="text-red-600 font-normal dark:text-red-400">*</span>
                                                                </label>
                                                                <DropDownListComponent placeholder="Select a workspace"></DropDownListComponent>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <label className="text-xs font-medium text-gray-700 dark:text-gray-200">
                                                                    Role <span className="text-red-600 font-normal dark:text-red-400">*</span>
                                                                </label>
                                                                <DropDownListComponent dataSource={[{ Id: "value1", value: "Select role" }]} fields={{ text: "value", value: "Id" }} value="value1"></DropDownListComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                                <AccordionItemDirective cssClass="mb-3 !border !rounded-lg" expanded={stepper.current?.activeStep === 2}
                                                    header={() =>
                                                        <div className="flex gap-2.5 items-center mr-4">
                                                            <span className="e-avatar rounded-lg border bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"><i className="e-icons sf-icon-shield text-xl"></i></span>
                                                            <div className="flex flex-col gap-0.5">
                                                                <p className="text-base">Security Settings</p>
                                                                <p className="text-gray-500 font-normal dark:text-gray-400 text-wrap line-clamp-1">Configure security and authentication</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    content={() =>
                                                        <div className="p-1 pt-1.5 space-y-5">
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">SSO Authentication</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Enable single sign-on access</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0" checked={true}></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">Two-Factor Authentication</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Require 2FA for account access</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0" checked={true}></SwitchComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                                <AccordionItemDirective cssClass="mb-3 !border !rounded-lg" expanded={stepper.current?.activeStep === 3}
                                                    header={() =>
                                                        <div className="flex gap-2.5 items-center mr-4">
                                                            <span className="e-avatar rounded-lg border bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"><i className="e-icons sf-icon-laptop-01 text-xl"></i></span>
                                                            <div className="flex flex-col gap-0.5">
                                                                <p className="text-base">Resource Access</p>
                                                                <p className="text-gray-500 font-normal dark:text-gray-400 text-wrap line-clamp-1">Configure access to various tools</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    content={() =>
                                                        <div className="p-1 pt-1.5 space-y-5">
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">GitHub Access</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to code repositories and version control.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">AWS Console</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to cloud computing services and resources.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">Slack Access</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to team communication and collaboration tools.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">JIRA Access</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to project management and issue tracking.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">Google Drive Access</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to cloud storage and shared documents.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">Salesforce Access</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to customer relationship management tools.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                            <div className="flex items-center justify-between gap-4">
                                                                <div>
                                                                    <p className="font-medium mb-1">VPN Access</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">Access to secure internal networks.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" content="Add Team Member" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "600px" }}>
                            <DialogComponent ref={dialog} id={styles["dialogs"]} className="rounded-3 m-sm-2" isModal={true} showCloseIcon={true} width="545px" target="#dialog-container" open={(e) => { e.preventFocus = true; }}
                                header={() => (
                                    <div>
                                        <p className="fw-bold text-body mb-0">Add Team Member</p>
                                        <p className="small fw-normal text-body text-opacity-50 text-wrap mb-0">Complete all sections to add a new team member.</p>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-end gap-2 py-1">
                                        <ButtonComponent className="col col-sm-auto ms-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary col col-sm-auto" content="Add Member" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <div className="d-flex flex-column gap-4 mt-2">
                                    <div className="mt-sm-1 mb-2 mb-sm-0 mb-md-3" style={stepperStyle}>
                                        <StepperComponent ref={stepper} cssClass="e-small" stepChanged={(e) => setActiveStep(e.activeStep)} labelPosition="bottom">
                                            <StepsDirective>
                                                <StepDirective iconCss="e-icons" label="User Information"></StepDirective>
                                                <StepDirective iconCss="e-icons" label="Workspace Access"></StepDirective>
                                                <StepDirective iconCss="e-icons" label="Security Settings"></StepDirective>
                                                <StepDirective iconCss="e-icons" label="Resource Access"></StepDirective>
                                            </StepsDirective>
                                        </StepperComponent>
                                    </div>
                                    <div className="overflow-auto" style={{ height: "298px", scrollbarWidth: "none" }}>
                                        <AccordionComponent ref={accordions} className="border-0" expandMode="Single" expanding={(e) => {if (stepper?.current) {stepper.current.activeStep = e.index;}}}>
                                            <AccordionItemsDirective>
                                                <AccordionItemDirective cssClass="mb-3 border rounded-3 overflow-hidden" expanded={activeStep === 0} 
                                                    header={() =>
                                                        <div className="d-flex gap-2 align-items-center me-3">
                                                            <span className="e-avatar rounded-3 border bg-body-secondary"><i className="e-icons sf-icon-users fs-4"></i></span>
                                                            <div className="d-flex flex-column ms-1">
                                                                <p className="fs-6 fw-medium mb-0">User Information</p>
                                                                <p className="text-body text-wrap text-opacity-50 text-truncate mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>Basic details about the team member</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    content={() =>
                                                        <div className="d-flex flex-column gap-2 p-1 mt-1 small text-body-secondary">
                                                            <div className="row gap-1 gap-sm-0 gy-2 gy-sm-0 gx-3">
                                                                <div className="col-sm-6 d-flex flex-column gap-1">
                                                                    <label>First Name <span className="text-danger">*</span></label>
                                                                    <TextBoxComponent type="text" placeholder="Enter first name"></TextBoxComponent>
                                                                </div>
                                                                <div className="col-sm-6 d-flex flex-column gap-1">
                                                                    <label>Last Name <span className="text-danger">*</span></label>
                                                                    <TextBoxComponent type="text" placeholder="Enter last name"></TextBoxComponent>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-column gap-1 mt-1">
                                                                <label>Work Email <span className="text-danger">*</span></label>
                                                                <TextBoxComponent type="email" placeholder="name@company.com"></TextBoxComponent>
                                                            </div>
                                                        </div>
                                                    } 
                                                ></AccordionItemDirective>
                                                <AccordionItemDirective cssClass="mb-3 border rounded-3 overflow-hidden" expanded={activeStep === 1}
                                                    header={() =>
                                                        <div className="d-flex gap-2 align-items-center me-3">
                                                            <span className="e-avatar rounded-3 border bg-body-secondary"><i className="e-icons sf-icon-building-03 fs-4"></i></span>
                                                            <div className="d-flex flex-column ms-1">
                                                                <p className="fs-6 fw-medium mb-0">Workspace Access</p>
                                                                <p className="text-body text-wrap text-opacity-50 text-truncate mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>Workspace and role assignment</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    content={() =>
                                                        <div className="d-flex flex-column gap-2 p-1 mt-1 small text-body-secondary">
                                                            <div className="d-flex flex-column gap-1 mt-1">
                                                                <label>Workspace <span className="text-danger">*</span></label>
                                                                <DropDownListComponent placeholder="Select a workspace"></DropDownListComponent>
                                                            </div>
                                                            <div className="d-flex flex-column gap-1 mt-1">
                                                                <label>Role <span className="text-danger">*</span></label>
                                                                <DropDownListComponent dataSource={[{ Id: "value1", value: "Select role" }]} fields={{ text: "value", value: "Id" }} value="value1"></DropDownListComponent>
                                                            </div>
                                                        </div>
                                                    }
                                                ></AccordionItemDirective>
                                                <AccordionItemDirective cssClass="mb-3 border rounded-3 overflow-hidden" expanded={activeStep === 2}
                                                    header={() => (
                                                        <div className="d-flex gap-2 align-items-center me-3">
                                                            <span className="e-avatar rounded-3 border bg-body-secondary">
                                                                <i className="e-icons sf-icon-shield fs-4"></i>
                                                            </span>
                                                            <div className="d-flex flex-column ms-1">
                                                                <p className="fs-6 fw-medium mb-0">Security Settings</p>
                                                                <p className="text-body text-wrap text-opacity-50 text-truncate mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>Configure security and authentication</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 p-1 mt-1">
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">SSO Authentication</p>
                                                                    <p className="text-body-secondary mb-0">Enable single sign-on access</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" checked={true} style={{ width: 36 }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">Two-Factor Authentication</p>
                                                                    <p className="text-body-secondary mb-0">Require 2FA for account access</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" checked={true} style={{ width: 36 }}></SwitchComponent>
                                                            </div>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                                <AccordionItemDirective cssClass="border rounded-3 overflow-hidden" expanded={activeStep === 3}
                                                    header={() => (
                                                        <div className="d-flex gap-2 align-items-center me-3">
                                                            <span className="e-avatar rounded-3 border bg-body-secondary">
                                                                <i className="e-icons sf-icon-laptop-01 fs-4"></i>
                                                            </span>
                                                            <div className="d-flex flex-column ms-1">
                                                                <p className="fs-6 fw-medium mb-0">Resource Access</p>
                                                                <p className="text-body text-wrap text-opacity-50 text-truncate mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>Configure access to various tools</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                    content={() => (
                                                        <div className="d-flex flex-column gap-3 p-1 mt-1">
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">GitHub Access</p>
                                                                    <p className="text-body-secondary mb-0">Access to code repositories and version control.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">AWS Console</p>
                                                                    <p className="text-body-secondary mb-0">Access to cloud computing services and resources.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">Slack Access</p>
                                                                    <p className="text-body-secondary mb-0">Access to team communication and collaboration tools.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">JIRA Access</p>
                                                                    <p className="text-body-secondary mb-0">Access to project management and issue tracking.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">Google Drive Access</p>
                                                                    <p className="text-body-secondary mb-0">Access to cloud storage and shared documents.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">Salesforce Access</p>
                                                                    <p className="text-body-secondary mb-0">Access to customer relationship management tools.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                                <div>
                                                                    <p className="fw-medium text-body mb-1">VPN Access</p>
                                                                    <p className="text-body-secondary mb-0">Access to secure internal networks.</p>
                                                                </div>
                                                                <SwitchComponent cssClass="flex-shrink-0" style={{ width: "36px" }}></SwitchComponent>
                                                            </div>
                                                        </div>
                                                    )}
                                                ></AccordionItemDirective>
                                            </AccordionItemsDirective>
                                        </AccordionComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" content="Add Team Member" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };
 
    return getContent();
}