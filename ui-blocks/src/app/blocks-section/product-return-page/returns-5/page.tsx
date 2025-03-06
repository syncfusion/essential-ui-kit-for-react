'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-react-navigations";

export default function ReturnBlock5() {
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
                if (blockData.name === 'returns-5' && blockData.theme) {
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
                            <p className="text-lg font-medium sm:mb-6 mb-5 text-gray-900 dark:text-white">Product Return Request</p>
                            <div className="sm:mb-8 mb-5" style={stepperStyle}>
                                <StepperComponent ref={stepper} labelPosition="bottom" activeStep={4}>
                                    <StepsDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"My Products"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Return Reason"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Pickup Option"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Refund Choice"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Confirmation"}></StepDirective>
                                    </StepsDirective>
                                </StepperComponent>
                            </div>
                            <p className="mb-3 font-medium text-gray-900 dark:text-white">Your request has been successfully registered.</p>
                            <p className="sm:mb-6 mb-5 text-sm text-gray-700 dark:text-gray-300">We have successfully received your return request. As we process it, you can monitor the status of your order.</p>
                            <div className="flex justify-end">
                                <ButtonComponent className="w-full sm:max-w-max" type="button">View Status</ButtonComponent>
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
                                <StepperComponent ref={stepper} labelPosition="bottom" activeStep={4}>
                                    <StepsDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"My Products"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Return Reason"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Pickup Option"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Refund Choice"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Confirmation"}></StepDirective>
                                    </StepsDirective>
                                </StepperComponent>
                            </div>
                            <p className="h6 mb-2 fw-bold text-body">Your request has been successfully registered.</p>
                            <p className="mb-4 mb-sm-3 text-body-emphasis">We have successfully received your return request. As we process it, you can monitor the status of your order.</p>
                            <div className="d-flex justify-content-end">
                                <ButtonComponent className="e-outline flex-grow-1 flex-sm-grow-0" type="button">View Status</ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
