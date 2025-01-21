'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-react-navigations";

export default function ReturnBlock4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const stepper = useRef<StepperComponent | null>(null);
    const [stepperStyle, setStepperStyle] = useState({});

    const checkWindowSize = (): void => {
        if (!stepper.current) return;
        
        const isVertical = window.innerWidth <= 640;
        stepper.current.orientation = isVertical ? 'vertical' : 'horizontal';
        stepper.current.labelPosition = isVertical ? 'end' : 'bottom';
        setStepperStyle(isVertical ? { minHeight: '286px' } : {});
    };
    
    /* SB Code - Start */
    const refreshStepper = (): void => {
        stepper.current?.refresh();
    };
    /* SB Code - End */

    const handleResize = (): void => {
        checkWindowSize();
        /* SB Code - Start */
        refreshStepper();
        /* SB Code - End */
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'returns-4' && blockData.theme) {
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
        handleResize();
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-5 sm:pt-20" style={{ minHeight: "36rem" }}>
                            <p className="text-lg font-medium text-gray-900 dark:text-white mb-5 sm:mb-6">Product Return Request</p>
                            <div className="sm:mb-8 mb-5" style={stepperStyle}>
                                <StepperComponent ref={stepper} labelPosition="bottom" activeStep={3}>
                                    <StepsDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"My Products"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Return Reason"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Pickup Option"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Refund Choice"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Confirmation"}></StepDirective>
                                    </StepsDirective>
                                </StepperComponent>
                            </div>
                            <p className="font-medium text-gray-900 dark:text-white mb-4 sm:mb-5">Choose the method for returning the product</p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 e-bigger">
                                <div className="e-card pt-3 rounded-lg shadow-none border-transparent">
                                    <div className="e-card-content grow !pt-1">
                                        <RadioButtonComponent label="I want a shop voucher" checked={true} name="refundOptions"></RadioButtonComponent>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mt-1">Get an immediate voucher for use on new orders.</p>
                                    </div>
                                </div>
                                <div className="e-card pt-3 rounded-lg shadow-none border-transparent">
                                    <div className="e-card-content grow !pt-1">
                                        <RadioButtonComponent label="I want my money back" name="refundOptions"></RadioButtonComponent>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mt-1">We will refund your original method of payment. This can take up to 7 business days.</p>
                                    </div>
                                </div>
                                <div className="e-card pt-3 rounded-lg shadow-none border-transparent">
                                    <div className="e-card-content grow !pt-1">
                                        <RadioButtonComponent label="I want another product" name="refundOptions"></RadioButtonComponent>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 ml-7 mt-1">We will exchange your product for a new one.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-4 lg:gap-3">
                                <ButtonComponent className="grow sm:grow-0" type="button">Previous</ButtonComponent>
                                <ButtonComponent isPrimary={true} className="grow sm:grow-0" type="button">Submit to Return</ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="container-lg py-4 px-3 px-sm-4" style={{ minHeight: "36rem", maxWidth: "896px" }}>
                            <p className="h5 fw-bold mb-3 mb-sm-4 text-body">Product Return Request</p>
                            <div className="mb-4" style={stepperStyle}>
                                <StepperComponent ref={stepper} labelPosition="bottom" activeStep={3}>
                                    <StepsDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"My Products"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Return Reason"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Pickup Option"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Refund Choice"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Confirmation"}></StepDirective>
                                    </StepsDirective>
                                </StepperComponent>
                            </div>
                            <p className="h6 fw-bold mb-3 text-body">Choose the method for returning the product</p>
                            <div className="d-flex flex-column flex-sm-row gap-3 mb-4 e-bigger">
                                <div className="e-card rounded shadow-none">
                                    <div className="e-card-content flex-grow-1">
                                        <RadioButtonComponent label="I want a shop voucher" checked={true} name="refundOptions"></RadioButtonComponent>
                                        <p className="ms-4 mt-2 mb-0 ps-1 text-body-secondary">Get an immediate voucher for use on new orders.</p>
                                    </div>
                                </div>
                                <div className="e-card rounded shadow-none">
                                    <div className="e-card-content flex-grow-1">
                                        <RadioButtonComponent label="I want my money back" name="refundOptions"></RadioButtonComponent>
                                        <p className="ms-4 mt-2 mb-0 ps-1 text-body-secondary">We will refund your original method of payment. This can take up to 7 business days.</p>
                                    </div>
                                </div>
                                <div className="e-card rounded shadow-none">
                                    <div className="e-card-content flex-grow-1">
                                        <RadioButtonComponent label="I want another product" name="refundOptions"></RadioButtonComponent>
                                        <p className="ms-4 mt-2 mb-0 ps-1 text-body-secondary">We will exchange your product for a new one.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end gap-1">
                                <ButtonComponent className="e-outline flex-grow-1 flex-sm-grow-0 me-2" type="button">Previous</ButtonComponent>
                                <ButtonComponent isPrimary={true} className="flex-grow-1 flex-sm-grow-0" type="button">Submit to Return</ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
