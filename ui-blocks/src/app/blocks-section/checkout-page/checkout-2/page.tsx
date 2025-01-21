'use client';

import { useEffect, useRef, useState } from 'react';
import { MaskedTextBoxComponent, TextAreaComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { RadioButtonComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';

export default function Checkout2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    const accordion = useRef<AccordionComponent | null>(null);

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-2' && blockData.theme) {
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
        setTimeout(() => {
            accordion.current?.refresh();
        }, 300);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);
    
    
    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id="checkout-accordion" className="container-lg px-4 md:px-6 text-gray-700 dark:text-gray-300 py-20" style={{ minHeight: "1145px" }}>
                            <div className="m-auto w-full max-w-3xl">
                                <h2 className="font-semibold text-xl">Checkout</h2>
                                <div className="e-bigger mt-4 mb-6">
                                    <AccordionComponent className="border-t-0 border-l-0 border-r-0 border-b border-gray-200 dark:border-gray-600" ref={accordion} expandMode="Single">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective header="Delivery information" expanded={true} content={() =>
                                                <div>
                                                    <div className="e-card pt-3 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content !pt-1 !px-4">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Trig Yellow - (+1) 432 434 2345" name="delivery"></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">68 Dakota St, San Francisco, California 94107.</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card pt-3 mt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content !pt-1 !px-4">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="G8 - (+1) 432 000 2245" name="delivery" checked={true}></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">1 Dakota St, San Francisco, California 94107.</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-bigger mt-5">
                                                        <ButtonComponent className="e-flat m-1" type="button" content="Add new delivery information" iconCss="e-icons e-plus"></ButtonComponent>
                                                    </div>
                                                </div>}
                                            ></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                                <form action="#" onSubmit={(event) => event.preventDefault()}>
                                    <div className="grid gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">First name</label>
                                                <TextBoxComponent cssClass="e-bigger" type="text" placeholder="First name" floatLabelType="Never"></TextBoxComponent>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Last name</label>
                                                <TextBoxComponent cssClass="e-bigger" type="text" placeholder="Last name" floatLabelType="Never"></TextBoxComponent>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Country</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="Country"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">City</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="City"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Phone number</label>
                                                <div className="flex space-x-2">
                                                    <div className="w-2/5">
                                                        <DropDownListComponent cssClass="e-bigger" placeholder="+1"></DropDownListComponent>
                                                    </div>
                                                    <div className="w-4/5">
                                                        <MaskedTextBoxComponent cssClass="e-bigger" mask="9999999999" promptChar=" " placeholder="432 432 4321"></MaskedTextBoxComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                                                <TextBoxComponent cssClass="e-bigger" type="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Company name</label>
                                                <TextBoxComponent cssClass="e-bigger" type="text" placeholder="Company name" floatLabelType="Never"></TextBoxComponent>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">VAT number</label>
                                                <TextBoxComponent cssClass="e-bigger" type="text" placeholder="VAT number" floatLabelType="Never"></TextBoxComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="e-bigger mt-5">
                                        <label className="block text-sm mb-1">Additional info</label>
                                        <TextAreaComponent placeholder="Enter additional information here" floatLabelType="Never" resizeMode="Vertical"></TextAreaComponent>
                                    </div>
                                    <div className="mt-5">
                                        <ButtonComponent className="w-full border-gray-300 dark:border-gray-500" type="button" content="Add new info" iconCss="e-icons e-plus"></ButtonComponent>
                                    </div>
                                </form>
                                <div className="e-bigger mt-8">
                                    <AccordionComponent className="border-0 border-b rounded-0 border-light-subtle">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective header="Payment methods" content=" "></AccordionItemDirective>
                                            <AccordionItemDirective header="Product" content=" "></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id="checkout-accordion" className="mx-auto row px-3 px-md-4 py-5" style={{ minHeight: "1076px" }}>
                            <div className="mx-auto px-0 col-md-12 col-xl-6 col-lg-9">
                                <h2 className="fw-semibold fs-4">Checkout</h2>
                                <div className="e-bigger my-4">
                                    <AccordionComponent className="border-0 border-bottom rounded-0 border-light-subtle" ref={accordion} expandMode="Single">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective header="Delivery information" expanded={true} content={() =>
                                                <div>
                                                    <div className="e-card">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Trig Yellow - (+1) 432 434 2345" name="delivery"></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ms-4 text-light-emphasis">68 Dakota St, San Francisco, California 94107.</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card mt-3">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="G8 - (+1) 432 000 2245" name="delivery" checked={true}></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ms-4 text-light-emphasis">1 Dakota St, San Francisco, California 94107.</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-bigger mt-3">
                                                        <ButtonComponent cssClass="e-flat" content="Add new delivery information" type="button" iconCss="e-icons e-plus"></ButtonComponent>
                                                    </div>
                                                </div>}
                                            ></AccordionItemDirective>   
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                                <form action="#" onSubmit={(event) => event.preventDefault()}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">First name</label>
                                            <TextBoxComponent cssClass="e-bigger" type="text" name="firstName" placeholder="First name" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">Last name</label>
                                            <TextBoxComponent cssClass="e-bigger" type="text" name="lastName" placeholder="Last name" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-0">
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">Country</label>
                                            <DropDownListComponent cssClass="e-bigger" placeholder="Country"></DropDownListComponent>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">City</label>
                                            <DropDownListComponent cssClass="e-bigger" placeholder="City"></DropDownListComponent>
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-0">
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">Phone number</label>
                                            <div className="d-flex gap-2">
                                                <div className="w-25">
                                                    <DropDownListComponent cssClass="e-bigger" placeholder="+1"></DropDownListComponent>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <MaskedTextBoxComponent cssClass="e-bigger" mask="9999999999" promptChar=" " placeholder="432 432 4321"></MaskedTextBoxComponent>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">Email</label>
                                            <TextBoxComponent cssClass="e-bigger" type="email" name="email" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                    </div>
                                    <div className="row g-3 mt-0">
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">Company name</label>
                                            <TextBoxComponent cssClass="e-bigger" type="text" name="companyName" placeholder="Company name" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-dark-emphasis fw-medium small mb-1">VAT number</label>
                                            <TextBoxComponent cssClass="e-bigger" type="text" name="vatNumber" placeholder="VAT number" floatLabelType="Never"></TextBoxComponent>
                                        </div>
                                    </div>
                                    <div className="e-bigger mt-3">
                                        <label className="text-dark-emphasis fw-medium d-block mb-1">Additional info</label>
                                        <TextAreaComponent placeholder="Enter additional information here" resizeMode="Vertical"></TextAreaComponent>
                                    </div>
                                    <div className="mt-3">
                                        <ButtonComponent cssClass="e-block e-secondary" content="Add new info" type="button" iconCss="e-icons e-plus"></ButtonComponent>
                                    </div>
                                </form>
                                <div className="e-bigger mt-4">
                                    <AccordionComponent className="border-0 border-bottom rounded-0 border-light-subtle">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective header="Payment methods" content=" "></AccordionItemDirective>
                                            <AccordionItemDirective header="Product" content=" "></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
