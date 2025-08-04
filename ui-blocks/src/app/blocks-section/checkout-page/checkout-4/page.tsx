'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent, RadioButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent,TextAreaComponent, MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default function Checkout4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState('540px');
    const sidebar = useRef<SidebarComponent | null>(null);

    const handleResize = (): void => {
        setWidth(window.innerWidth < 540 ? '100%' : '540px')
        sidebar.current?.refresh();
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-4' && blockData.theme) {
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
                    <section className="bg-gray-100 dark:bg-gray-900">
                        <div style={{ height: "1298px", width: width, float: "right" }}>
                            <SidebarComponent key={"checkout-4-tw"} ref={sidebar} className="w-full" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="p-4 md:p-6 bg-gray-100 dark:bg-gray-900">
                                    <div className="flex justify-between items-center mb-5">
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">My shopping cart</h2>
                                        <ButtonComponent className="e-icons e-flat text-xl" iconCss="e-icons e-close" onClick={() => sidebar.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                    <div className="rounded-lg p-3 bg-gray-200 dark:bg-gray-800">
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="grid grid-cols-1 gap-6">
                                                <div className="flex justify-between">
                                                    <div className="text-base text-gray-700 dark:text-gray-300">Subtotal</div>
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">$8,900.00</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="text-base text-gray-700 dark:text-gray-300">Savings</div>
                                                    <div className="text-base font-semibold text-green-700 dark:text-green-500">-$299.00</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="text-base text-gray-700 dark:text-gray-300">Store pickup</div>
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">$99.00</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="text-base text-gray-700 dark:text-gray-300">Tax</div>
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">$899.00</div>
                                                </div>
                                            </div>
                                            <div>
                                                <hr className="w-full border-gray-300 dark:border-gray-600" />
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Total</div>
                                                <div className="text-base font-semibold text-gray-900 dark:text-white">$9,599.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <form action="#" onSubmit={(event) => event.preventDefault()}>
                                            <div className="grid gap-5">
                                                <div className="grid grid-cols-1 gap-5 w-full">
                                                    <h5 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Billing address</h5>
                                                    <div className="e-bigger">
                                                        <RadioButtonComponent name="billingType" value="individual" label="Individual" checked={true}></RadioButtonComponent>
                                                        <RadioButtonComponent cssClass="ml-6" name="billingType" value="company" label="Company"></RadioButtonComponent>
                                                    </div>
                                                    <div className="grid grid-cols-1 w-full">
                                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Saved address</label>
                                                        <DropDownListComponent cssClass="e-bigger" placeholder="Saved address"></DropDownListComponent>
                                                    </div>
                                                    <div className="flex justify-between gap-4 w-full flex-col md:flex-row lg:flex-row xl:flex-row">
                                                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                                                            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">First name</label>
                                                            <TextBoxComponent cssClass="e-bigger" type="text" name="firstName" placeholder="First name" floatLabelType="Never"></TextBoxComponent>
                                                        </div>
                                                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                                                            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Last name</label>
                                                            <TextBoxComponent cssClass="e-bigger" type="text" name="lastName" placeholder="Last name" floatLabelType="Never"></TextBoxComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-5 w-full">
                                                    <div className="w-full">
                                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Phone number</label>
                                                        <div className="flex space-x-2">
                                                            <div className="w-2/5 sm:w-1/5 md:w-1/5 lg:1/5 xl:w-1/5">
                                                                <DropDownListComponent cssClass="e-bigger" placeholder="+1"></DropDownListComponent>
                                                            </div>
                                                            <div className="w-3/5 sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5">
                                                                <MaskedTextBoxComponent cssClass="e-bigger" mask="9999999999" placeholder="432 432 4321" promptChar=" "></MaskedTextBoxComponent>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 w-full">
                                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Shipping address</label>
                                                    <TextAreaComponent cssClass="e-bigger" placeholder="Shipping address" resizeMode="Vertical"></TextAreaComponent>
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
                                                <div className="e-bigger">
                                                    <CheckBoxComponent label="Save the data in the address list"></CheckBoxComponent>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="py-6">
                                        <div className="w-full">
                                            <div>
                                                <h6 className="font-semibold text-lg text-gray-900 dark:text-white">Delivery address</h6>
                                                <div className="flex flex-col gap-4 pt-4 e-bigger">
                                                    <RadioButtonComponent label="Delivery to the same address" name="deliveryType" value="same address" checked={true}></RadioButtonComponent>
                                                    <RadioButtonComponent label="Delivery to another address" name="deliveryType" value="another address"></RadioButtonComponent>
                                                    <RadioButtonComponent label="Store pickup" name="deliveryType" value="store pickup"></RadioButtonComponent>
                                                </div>
                                            </div>
                                            <div className="pt-6">
                                                <h6 className="font-semibold text-lg text-gray-900 dark:text-white">Payment details</h6>
                                                <div className="flex flex-col gap-4 pt-4 e-bigger">
                                                    <RadioButtonComponent label="Debit card" name="paymentdetails" value="bank card" checked={true}></RadioButtonComponent>
                                                    <RadioButtonComponent label="Credit card" name="paymentdetails" value="online payments"></RadioButtonComponent>
                                                    <RadioButtonComponent label="Net banking" name="paymentdetails" value="net banking"></RadioButtonComponent>
                                                    <RadioButtonComponent label="UPI transaction" name="paymentdetails" value="UPI transaction"></RadioButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-2">
                                        <div className="w-full md:w-1/2 e-bigger">
                                            <ButtonComponent className="w-full e-primary text-lg" content="Proceed to checkout" type="submit"></ButtonComponent>
                                        </div>
                                        <div className="w-full md:w-1/2 e-bigger">
                                            <ButtonComponent className="w-full e-outline text-lg" content="Continue shopping" type="submit"></ButtonComponent>
                                        </div>
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
                    <section className="bg-light-subtle">
                        <div style={{ height: "1298px", width: width, float: "right" }}>
                            <SidebarComponent key={"checkout-4-bs"} ref={sidebar} position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div className="p-3 p-md-4 bg-light-subtle">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h2 className="h5 fs-5 fw-bold text-body mb-0">My shopping cart</h2>
                                        <ButtonComponent className="e-flat" iconCss="e-icons e-close" onClick={() => sidebar.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                    <div className="rounded p-3 px-2 bg-body-tertiary">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-between pb-4 px-2">
                                                    <div className="fs-6 text-dark-emphasis">Subtotal</div>
                                                    <div className="fs-6 fw-medium text-body">$8,900.00</div>
                                                </div>
                                                <div className="d-flex justify-content-between pb-4 px-2">
                                                    <div className="fs-6 text-dark-emphasis">Savings</div>
                                                    <div className="fs-6 fw-medium text-success">-$299.00</div>
                                                </div>
                                                <div className="d-flex justify-content-between pb-4 px-2">
                                                    <div className="fs-6 text-dark-emphasis">Store pickup</div>
                                                    <div className="fs-6 fw-medium text-body">$99.00</div>
                                                </div>
                                                <div className="d-flex justify-content-between px-2">
                                                    <div className="fs-6 text-dark-emphasis">Tax</div>
                                                    <div className="fs-6 fw-medium text-body">$899.00</div>
                                                </div>
                                            </div>
                                            <div className="mt-0 px-3">
                                                <hr className="border-secondary" />
                                            </div>
                                            <div className="col-12 d-flex justify-content-between mt-0 px-3">
                                                <div className="fs-6 fw-medium text-dark-emphasis">Total</div>
                                                <div className="fs-6 fw-medium text-body">$9,599.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <form action="#" onSubmit={(event) => event.preventDefault()}>
                                            <div className="mb-3">
                                                <h5 className="mb-3 fs-5 fw-medium text-body">Billing address</h5>
                                                <div className="mb-3 e-bigger">
                                                    <RadioButtonComponent name="billingType" value="individual" label="Individual" checked></RadioButtonComponent>
                                                    <RadioButtonComponent cssClass="ms-3" name="billingType" value="company" label="Company"></RadioButtonComponent>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-6 fw-medium text-dark-emphasis mb-1">Saved address </label>
                                                    <DropDownListComponent cssClass="e-bigger" placeholder="Saved address"></DropDownListComponent>
                                                </div>
                                                <div className="row g-3">
                                                    <div className="col-md-6 pe-lg-2">
                                                        <label className="fs-6 fw-medium text-dark-emphasis mb-1">First name</label>
                                                        <TextBoxComponent cssClass="e-bigger" type="text" name="firstName" placeholder="First name" floatLabelType="Never"></TextBoxComponent>
                                                    </div>
                                                    <div className="col-md-6 ps-md-2">
                                                        <label className="fs-6 fw-medium text-dark-emphasis mb-1">Last name</label>
                                                        <TextBoxComponent cssClass="e-bigger" type="text" name="lastName" placeholder="Last name" floatLabelType="Never"></TextBoxComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="fs-6 fw-medium text-dark-emphasis mb-1">Phone number</label>
                                                <div className="row">
                                                    <div className="col-4 col-sm-3 pe-0">
                                                        <DropDownListComponent cssClass="e-bigger" placeholder="+1"></DropDownListComponent>
                                                    </div>
                                                    <div className="col-8 col-sm-9 ps-2">
                                                        <MaskedTextBoxComponent cssClass="e-bigger" mask="9999999999" placeholder="432 432 4321" promptChar=" "></MaskedTextBoxComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="fs-6 fw-medium text-dark-emphasis d-block mb-1">Shipping address</label>
                                                <TextAreaComponent cssClass="e-bigger" placeholder="Shipping address" resizeMode="Vertical"></TextAreaComponent>
                                            </div>
                                            <div className="row g-3 mb-3">
                                                <div className="col-md-6 pe-md-2">
                                                    <label className="fs-6 fw-medium text-dark-emphasis mb-1">Country</label>
                                                    <DropDownListComponent cssClass="e-bigger" placeholder="Country"></DropDownListComponent>
                                                </div>
                                                <div className="col-md-6 ps-md-2 pt-md-0">
                                                    <label className="fs-6 fw-medium text-dark-emphasis mb-1">City</label>
                                                    <DropDownListComponent cssClass="e-bigger" placeholder="City"></DropDownListComponent>
                                                </div>
                                            </div>
                                            <div className="mb-3 e-bigger">
                                                <CheckBoxComponent label="Save the data in the address list"></CheckBoxComponent>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="py-4">
                                        <div>
                                            <h6 className="fs-5 fw-medium text-body mb-0">Delivery address</h6>
                                            <div className="d-flex flex-column gap-3 pt-3 e-bigger">
                                                <RadioButtonComponent label="Delivery to the same address" name="deliveryType" value="same address" checked></RadioButtonComponent>
                                                <RadioButtonComponent label="Delivery to the another address" name="deliveryType" value="another address"></RadioButtonComponent>
                                                <RadioButtonComponent label="Store pickup" name="deliveryType" value="store pickup"></RadioButtonComponent>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <h6 className="fs-5 fw-medium text-body mb-0">Payment details</h6>
                                            <div className="d-flex flex-column gap-3 pt-3 e-bigger">
                                                <RadioButtonComponent label="Debit card" name="paymentType" value="visa" checked></RadioButtonComponent>
                                                <RadioButtonComponent label="Credit card" name="paymentType" value="mastercard"></RadioButtonComponent>
                                                <RadioButtonComponent label="Net banking" name="paymentdetails" value="net banking"></RadioButtonComponent>
                                                <RadioButtonComponent label="UPI transaction" name="paymentdetails" value="UPI transaction"></RadioButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                                        <div className="w-100 e-bigger">
                                            <ButtonComponent cssClass="e-primary e-block" content="Proceed to checkout" type="submit"></ButtonComponent>
                                        </div>
                                        <div className="w-100 e-bigger">
                                            <ButtonComponent cssClass="e-secondary e-block" content="Continue shopping" type="submit"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
