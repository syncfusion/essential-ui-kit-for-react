'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-react-navigations";
import Image from "next/image";

export default function ReturnBlock1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const stepper = useRef<StepperComponent | null>(null);
    const [stepperStyle, setStepperStyle] = useState({});

    const data: any[] = [
        {
            product: {
                productName: "Apple iPhone 15 Pro Max (256 GB) - Blue Titanium",
                productImage: "apple-iphone-15"
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
        },
        {
            product: {
                productName: "Apple AirPods (2nd Generation) with Charging Case",
                productImage: "apple-airpods"
            },
            orderNumber: "#50924",
            returnTerm: new Date(2016, 8, 18)
        },
        {
            product: {
                productName: "Apple Watch SE GPS with Starlight Sport Band - S/M (40mm Display, Starlight Aluminium Case)",
                productImage: "apple-watch"
            },
            orderNumber: "#19340",
            returnTerm: new Date(2016, 4, 7)
        },
        {
            product: {
                productName: "Apple MacBook Air 2024 (13.6-inch, M3, 8GB, 256GB, macOS, Space Grey)",
                productImage: "apple-macbook-air-2024"
            },
            orderNumber: "#36101",
            returnTerm: new Date(2024, 7, 16)
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
                if (blockData.name === 'returns-1' && blockData.theme) {
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
                        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-5 sm:pt-20">
                            <p className="text-lg font-medium sm:mb-6 mb-5 text-gray-900 dark:text-white">Product Return Request</p>
                            <div className="sm:mb-8 mb-5" style={stepperStyle}>
                                <StepperComponent ref={stepper} labelPosition="bottom">
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
                                <p className="mb-4 text-gray-900 font-medium dark:text-white">Select the product you want to return:</p>
                                <div className="mb-6">
                                    <GridComponent dataSource={data} key={"grid-1-tw"} width="100%" rowHeight={60} gridLines="None" className="e-bigger" allowTextWrap={true} textWrapSettings={{ wrapMode: "Content" }}>
                                        <ColumnsDirective>
                                            <ColumnDirective type="checkbox" width="40"></ColumnDirective>
                                            <ColumnDirective field="product" headerText="Product" width="488" template={(data: any) => (
                                                <div className="flex items-center">
                                                    <div className="e-avatar e-avatar-small mr-6 shrink-0">
                                                        <Image src={"/assets/images/return-block/return-form/" + data.product.productImage + ".png"} width={32} height={32} alt={data.product.productName.toLowerCase()} />
                                                    </div>
                                                    <p className="text-base text-gray-900 dark:text-white line-clamp-2">{data.product.productName}</p>
                                                </div>)}
                                            ></ColumnDirective>
                                            <ColumnDirective field="orderNumber" headerText="Order Number" width="150"></ColumnDirective>
                                            <ColumnDirective field="returnTerm" headerText="Return Term" width="150" format="dd/MM/y"></ColumnDirective>
                                        </ColumnsDirective>
                                    </GridComponent>
                                </div>
                                <div className="flex justify-end lg:gap-3 gap-4">
                                    <ButtonComponent className="grow sm:grow-0" type="button">Cancel</ButtonComponent>
                                    <ButtonComponent isPrimary={true} className="grow sm:grow-0" type="button">Next</ButtonComponent>
                                </div>
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
                                <StepperComponent ref={stepper} labelPosition="bottom">
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
                                <p className="h6 mb-4 fw-bold text-body">Select the product you want to return:</p>
                                <div className="mb-4">
                                    <GridComponent dataSource={data} key={"grid-1-bs"} width="100%" rowHeight={60} gridLines="None" className="e-bigger" allowTextWrap={true} textWrapSettings={{ wrapMode: "Content" }}>
                                        <ColumnsDirective>
                                            <ColumnDirective type="checkbox" width="40"></ColumnDirective>
                                            <ColumnDirective field="product" headerText="Product" width="438" template={(data: any) => (
                                                <div className="d-flex align-items-center">
                                                    <div className="e-avatar e-avatar-small flex-shrink-0 rounded-1 me-4">
                                                        <Image src={"/assets/images/return-block/return-form/" + data.product.productImage + ".png"} width={32} height={32} alt={data.product.productName.toLowerCase()} />
                                                    </div>
                                                    <p className="fs-6 mb-0 lh-base text-body">{data.product.productName}</p>
                                                </div>)}
                                            ></ColumnDirective>
                                            <ColumnDirective field="orderNumber" headerText="Order Number" width="155"></ColumnDirective>
                                            <ColumnDirective field="returnTerm" headerText="Return Term" width="155" format="dd/MM/y"></ColumnDirective>
                                        </ColumnsDirective>
                                    </GridComponent>
                                </div>
                                <div className="d-flex justify-content-end gap-1">
                                    <ButtonComponent className="e-outline flex-grow-1 flex-sm-grow-0 me-2" type="button">Cancel</ButtonComponent>
                                    <ButtonComponent isPrimary={true} className="flex-grow-1 flex-sm-grow-0" type="button">Next</ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
