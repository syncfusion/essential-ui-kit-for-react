'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, CheckBoxComponent, RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-react-navigations";
import { MessageComponent } from "@syncfusion/ej2-react-notifications";

export default function ReturnBlock2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const stepper = useRef<StepperComponent | null>(null);
    const [stepperStyle, setStepperStyle] = useState({});

    const data: any[] = [
        {
            product: {
                productName: "Apple iPhone 15 Pro Max (256 GB) - Blue Titanium",
                productImage: "apple-iphone-15-pro"
            },
            orderNumber: "#49463",
            returnTerm: new Date(2017, 7, 15)
        },
        {
            product: {
                productName: "Apple MacBook Air 2022 (13.6-inch, M2, 8GB, 256GB, macOS, Midnight)",
                productImage: "apple-macbook-air-2022"
            },
            orderNumber: "#40938",
            returnTerm: new Date(2022, 9, 28)
        },
        {
            product: {
                productName: "Apple AirPods Pro (2nd Generation - USB-C) TWS Earbuds with Active Noise",
                productImage: "apple-airpods-pro"
            },
            orderNumber: "#50929",
            returnTerm: new Date(2020, 5, 12)
        }
    ];

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
                if (blockData.name === 'returns-2' && blockData.theme) {
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
                        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-5 sm:pt-20">
                            <p className="text-lg font-medium sm:mb-6 mb-5 text-gray-900 dark:text-white">Product Return Request</p>
                            <div className="sm:mb-8 mb-5" style={stepperStyle}>
                                <StepperComponent ref={stepper} labelPosition="bottom" activeStep={1}>
                                    <StepsDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"My Products"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Return Reason"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Pickup Option"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Refund Choice"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Confirmation"}></StepDirective>
                                    </StepsDirective>
                                </StepperComponent>
                            </div>
                            <div>
                                <p className="mb-3 font-medium text-gray-900 dark:text-white">Choose the reason for your return</p>
                                <p className="mb-4 text-sm text-gray-900 dark:text-white">To assist us in addressing your request promptly, please respond to the following questions.</p>
                                <div className="mb-5">
                                    <GridComponent dataSource={data} key={"grid-1-tw"} width="100%" rowHeight={60} gridLines="None" allowTextWrap={true} className="e-bigger" textWrapSettings={{ wrapMode: "Content" }}>
                                        <ColumnsDirective>
                                            <ColumnDirective type="checkbox" width="40"></ColumnDirective>
                                            <ColumnDirective field="product" headerText="Product" width="488" template={(data: any) => (
                                                <div className="flex items-center">
                                                    <div className="e-avatar e-avatar-small mr-6 shrink-0">
                                                        <img src={"/react/essential-ui-kit/blocks/assets/images/return-block/return-reasons/" + data.product.productImage + ".png"} width={32} height={32} alt={data.product.productName.toLowerCase()} />
                                                    </div>
                                                    <p className="text-base text-gray-900 dark:text-white line-clamp-2">{data.product.productName}</p>
                                                </div>)}
                                            ></ColumnDirective>
                                            <ColumnDirective field="orderNumber" headerText="Order Number" width="150"></ColumnDirective>
                                            <ColumnDirective field="returnTerm" headerText="Return Term" width="150" format="dd/MM/y"></ColumnDirective>
                                        </ColumnsDirective>
                                    </GridComponent>
                                </div>
                            </div>
                            <div className="flex justify-between sm:gap-5 gap-6 mb-6 flex-col sm:flex-row">
                                <div className="flex flex-col justify-between sm:w-1/2 md:w-auto">
                                    <div className="flex flex-col gap-4 lg:mb-5 mb-4 e-bigger">
                                        <p className="text-base font-medium text-gray-900 dark:text-white">What is the current state of the product?</p>
                                        <div className="leading-6">
                                            <RadioButtonComponent label="I want to return a sealed product" name="condition"></RadioButtonComponent>
                                        </div>
                                        <div className="leading-6">
                                            <RadioButtonComponent label="I want to return a functional but unsealed product" name="condition"></RadioButtonComponent>
                                        </div>
                                        <div className="leading-6">
                                            <RadioButtonComponent label="I want to return a non-functional but unsealed product" name="condition"></RadioButtonComponent>
                                        </div>
                                        <div className="leading-6">
                                            <RadioButtonComponent label="The product was not delivered" name="condition"></RadioButtonComponent>
                                        </div>
                                        <div className="leading-6">
                                            <RadioButtonComponent label="The product was not dispatched" name="condition"></RadioButtonComponent>
                                        </div>
                                    </div>
                                    <ButtonComponent className="self-start" type="button">Other Condition</ButtonComponent>
                                </div>
                                <div className="flex flex-col justify-between sm:w-1/2 md:w-auto">
                                    <div className="flex flex-col gap-4 lg:mb-5 mb-4 e-bigger">
                                        <p className="text-base font-medium text-gray-900 dark:text-white">What is the main reason for returning the product?</p>
                                        <div className="leading-6">
                                            <CheckBoxComponent label="Defective or damaged product" name="reason"></CheckBoxComponent>
                                        </div>
                                        <div className="leading-6">
                                            <CheckBoxComponent label="Incorrect product received" name="reason"></CheckBoxComponent>
                                        </div>
                                        <div className="leading-6">
                                            <CheckBoxComponent label="Unsatisfactory quality" name="reason"></CheckBoxComponent>
                                        </div>
                                        <div className="leading-6">
                                            <CheckBoxComponent label="Changed mind/not as expected" name="reason"></CheckBoxComponent>
                                        </div>
                                        <div className="leading-6">
                                            <CheckBoxComponent label="Misleading product information" name="reason"></CheckBoxComponent>
                                        </div>
                                    </div>
                                    <ButtonComponent className="self-start" type="button">I have other reason</ButtonComponent>
                                </div>
                            </div>
                            <MessageComponent
                                className="mb-6 items-center"
                                severity="Info"
                                showIcon={false}
                                showCloseIcon={true}
                                content="Please carefully select your reasons for returning the product, as this will help us process your request more efficiently and ensure your satisfaction with your purchase experience."
                            ></MessageComponent>
                            <div className="flex justify-end lg:gap-3 gap-4">
                                <ButtonComponent className="grow sm:grow-0" type="button">Previous</ButtonComponent>
                                <ButtonComponent isPrimary={true} className="grow sm:grow-0" type="button">Next</ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="container-lg py-4 px-3 px-sm-4" style={{ maxWidth: "896px" }}>
                            <p className="h5 fw-bold mb-3 mb-sm-4 text-body">Product Return Request</p>
                            <div className="mb-4" style={stepperStyle}>
                                <StepperComponent ref={stepper} labelPosition="bottom" activeStep={1}>
                                    <StepsDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"My Products"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Return Reason"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Pickup Option"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Refund Choice"}></StepDirective>
                                        <StepDirective iconCss={"e-icons e-circle-check"} label={"Confirmation"}></StepDirective>
                                    </StepsDirective>
                                </StepperComponent>
                            </div>
                            <div>
                                <p className="h6 mb-2 fw-bold text-body">Choose the reason for your return</p>
                                <p className="mb-4 text-body">To assist us in addressing your request promptly, please respond to the following questions.</p>
                                <div className="mb-4">
                                    <GridComponent dataSource={data} key={"grid-1-bs"} width="100%" rowHeight={60} gridLines="None" allowTextWrap={true} className="e-bigger" textWrapSettings={{ wrapMode: "Content" }}>
                                        <ColumnsDirective>
                                            <ColumnDirective type="checkbox" width="40"></ColumnDirective>
                                            <ColumnDirective field="product" headerText="Product" width="488" template={(data: any) => (
                                                <div className="d-flex align-items-center">
                                                    <div className="e-avatar e-avatar-small flex-shrink-0 rounded-1 me-4">
                                                        <img src={"/react/essential-ui-kit/blocks/assets/images/return-block/return-reasons/" + data.product.productImage + ".png"} width={32} height={32} alt={data.product.productName.toLowerCase()} />
                                                    </div>
                                                    <p className="fs-6 mb-0 lh-base text-body">{data.product.productName}</p>
                                                </div>)}
                                            ></ColumnDirective>
                                            <ColumnDirective field="orderNumber" headerText="Order Number" width="150"></ColumnDirective>
                                            <ColumnDirective field="returnTerm" headerText="Return Term" width="150" format="dd/MM/y"></ColumnDirective>
                                        </ColumnsDirective>
                                    </GridComponent>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between gap-4 mb-4 mb-sm-5 flex-column flex-md-row">
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-column gap-3 mb-4 mb-md-3 e-bigger">
                                        <p className="h-6 lh-sm mb-0 fw-bold text-body">What is the current state of the product?</p>
                                        <RadioButtonComponent label="I want to return a sealed product" name="condition"></RadioButtonComponent>
                                        <RadioButtonComponent label="I want to return a functional but unsealed product" name="condition"></RadioButtonComponent>
                                        <RadioButtonComponent label="I want to return a non-functional but unsealed product" name="condition"></RadioButtonComponent>
                                        <RadioButtonComponent label="The product was not delivered" name="condition"></RadioButtonComponent>
                                        <RadioButtonComponent label="The product was not dispatched" name="condition"></RadioButtonComponent>
                                    </div>
                                    <ButtonComponent className="e-outline align-self-start" type="button">Other Condition</ButtonComponent>
                                </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-column gap-3 mb-4 mb-md-3 e-bigger">
                                        <p className="h-6 lh-sm mb-0 fw-bold text-body">What is the main reason for returning the product?</p>
                                        <CheckBoxComponent label="Defective or damaged product" name="reason"></CheckBoxComponent>
                                        <CheckBoxComponent label="Incorrect product received" name="reason"></CheckBoxComponent>
                                        <CheckBoxComponent label="Unsatisfactory quality" name="reason"></CheckBoxComponent>
                                        <CheckBoxComponent label="Changed mind/not as expected" name="reason"></CheckBoxComponent>
                                        <CheckBoxComponent label="Misleading product information" name="reason"></CheckBoxComponent>
                                    </div>
                                    <ButtonComponent className="e-outline align-self-start" type="button">I have other reason</ButtonComponent>
                                </div>
                            </div>
                            <MessageComponent
                                className="mb-4 align-items-center"
                                severity="Info"
                                showIcon={false}
                                showCloseIcon={true}
                                content="Please carefully select your reasons for returning the product, as this will help us process your request more efficiently and ensure your satisfaction with your purchase experience."
                            ></MessageComponent>
                            <div className="d-flex justify-content-end gap-1">
                                <ButtonComponent className="e-outline flex-grow-1 flex-sm-grow-0 me-2" type="button">Previous</ButtonComponent>
                                <ButtonComponent isPrimary={true} className="flex-grow-1 flex-sm-grow-0" type="button">Next</ButtonComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
