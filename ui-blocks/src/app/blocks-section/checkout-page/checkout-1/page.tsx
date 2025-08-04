'use client';

import { useEffect, useState } from 'react';
import { MaskedTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { RadioButtonComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { StepperComponent, StepDirective, StepsDirective } from '@syncfusion/ej2-react-navigations';

export default function Checkout1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-1' && blockData.theme) {
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

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div key={"checkout-1-tw"} className="flex">
                            <div className="w-full m-auto text-gray-700 dark:text-gray-300">
                                <div className="lg:flex container-lg">
                                    <div className="lg:w-8/12 px-4 pt-8 pb-6 md:px-6 lg:pb-8 xl:pl-11 xl:pt-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
                                        <div>
                                            <div>
                                                <StepperComponent activeStep={1}>
                                                    <StepsDirective>
                                                        <StepDirective label="Cart" iconCss="e-icons e-circle-check"></StepDirective>
                                                        <StepDirective label="Checkout" iconCss="e-icons e-circle-check"></StepDirective>
                                                        <StepDirective label="Order summary" iconCss="e-icons e-circle-check"></StepDirective>
                                                    </StepsDirective>
                                                </StepperComponent>
                                            </div>
                                        </div>
                                        <form action="#" className="mt-6 xl:my-10 mb-8 md:mb-10 lg:mb-5" onSubmit={(event) => event.preventDefault()}>
                                            <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-white">Delivery details</h2>
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
                                            <div className="mt-5">
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-plus" content="Add new address" type="button"></ButtonComponent>
                                            </div>
                                        </form>
                                        <div>
                                            <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-white">Payments</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-4">
                                                <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400 bg-gray-100 dark:bg-gray-800">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Credit card" name="payment"></RadioButtonComponent>
                                                        </div>
                                                        <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Pay with your credit card</div>
                                                    </div>
                                                    <div className="e-card-actions">
                                                        <ButtonComponent cssClass="e-flat mr-3" iconCss="e-icons e-trash e-medium" content="Delete" type="button"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit e-medium" content="Edit" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                                <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400 bg-gray-100 dark:bg-gray-800">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Payment on delivery" name="payment" checked={true}></RadioButtonComponent>
                                                        </div>
                                                        <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">+ $12 payment processing fee</div>
                                                    </div>
                                                    <div className="e-card-actions">
                                                        <ButtonComponent cssClass="e-flat mr-3" iconCss="e-icons e-trash e-medium" content="Delete" type="button"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit e-medium" content="Edit" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                                <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400 bg-gray-100 dark:bg-gray-800">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="PayPal account" name="payment"></RadioButtonComponent>
                                                        </div>
                                                        <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Connect to your account</div>
                                                    </div>
                                                    <div className="e-card-actions">
                                                        <ButtonComponent cssClass="e-flat mr-3" iconCss="e-icons e-trash e-medium" content="Delete" type="button"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit e-medium" content="Edit" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 mb-5 xl:mb-8">
                                            <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-white">Delivery methods</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-4">
                                                <div className="e-card pt-4 pb-1 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400 bg-gray-100 dark:bg-gray-800">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="$15 - DHL fast delivery" name="delivery"></RadioButtonComponent>
                                                        </div>
                                                        <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Pay with your credit card</div>
                                                    </div>
                                                </div>
                                                <div className="e-card pt-4 pb-1 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400 bg-gray-100 dark:bg-gray-800">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Free delivery - FedEx" name="delivery" checked={true}></RadioButtonComponent>
                                                        </div>
                                                        <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">+ $12 payment processing fee</div>
                                                    </div>
                                                </div>
                                                <div className="e-card pt-4 pb-1 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400 bg-gray-100 dark:bg-gray-800">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Express delivery" name="delivery"></RadioButtonComponent>
                                                        </div>
                                                        <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Connect to your account</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Enter a gift card, voucher or promotional code</label>
                                            <div className="grid md:flex gap-4 md:gap-6 w-full">
                                                <div className="lg:w-full sm:w-full md:w-11/12">
                                                    <TextBoxComponent cssClass="e-bigger" type="text" placeholder="Promo Code" floatLabelType="Never"></TextBoxComponent>
                                                </div>
                                                <div className="e-bigger">
                                                    <ButtonComponent cssClass="w-full md:w-max e-outline" content="Apply" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 px-4 py-5 md:px-6 lg:pt-8 xl:pl-8 xl:pr-11 bg-gray-100 dark:bg-gray-800">
                                        <div>
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
                                                    <hr className="w-full border-gray-200 dark:border-gray-600" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Total</div>
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">$9,599.00</div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <ButtonComponent cssClass="w-full e-primary" content="Proceed to payment" type="sublit"></ButtonComponent>
                                            </div>
                                            <p className="text-center text-sm mt-3 text-gray-500 dark:text-gray-400">
                                                One or more items in your cart require an account{" "}
                                                <a href="#" className="text-primary-600 dark:text-primary-400 font-normal text-sm p-0 underline">Sign in or Create an account now</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="d-flex" key={"checkout-1-bs"}>
                            <div className="w-100 mx-auto">
                                <div className="d-lg-flex">
                                    <div className="col-lg-8 bg-body border-end border-light-subtle px-3 pt-5 pb-4 px-md-4 pb-lg-5 ps-xl-5">
                                        <div>
                                            <StepperComponent activeStep={1}>
                                                <StepsDirective>
                                                    <StepDirective label="Cart" iconCss="e-icons e-circle-check"></StepDirective>
                                                    <StepDirective label="Checkout" iconCss="e-icons e-circle-check"></StepDirective>
                                                    <StepDirective label="Order summary" iconCss="e-icons e-circle-check"></StepDirective>
                                                </StepsDirective>
                                            </StepperComponent>
                                        </div>
                                        <form action="#" className="my-4" onSubmit={(event) => event.preventDefault()}>
                                            <h2 className="fw-semibold fs-5 text-body mb-3">Delivery details</h2>
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
                                            <div className="mt-3">
                                                <ButtonComponent cssClass="e-flat" iconCss="e-icons e-plus" content="Add new address" type="button"></ButtonComponent>
                                            </div>
                                        </form>
                                        <div>
                                            <h2 className="fw-medium fs-5 text-body mb-3">Payments</h2>
                                            <div className="row g-3">
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="e-card h-100 bg-body-tertiary">
                                                        <div className="e-card-content pb-2">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Credit card" name="payment"></RadioButtonComponent>
                                                            </div>
                                                            <div className="text-dark-emphasis mt-1 ps-1 ms-4">Pay with your credit card</div>
                                                        </div>
                                                        <div className="e-card-actions">
                                                            <ButtonComponent cssClass="e-flat me-3" iconCss="e-icons e-trash" content="Delete" type="button"></ButtonComponent>
                                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit" content="Edit" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="e-card h-100 bg-body-tertiary">
                                                        <div className="e-card-content pb-2">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Payment on delivery" name="payment" checked={true}></RadioButtonComponent>
                                                            </div>
                                                            <div className="text-dark-emphasis mt-1 ms-4 ps-1">+ $12 payment processing fee</div>
                                                        </div>
                                                        <div className="e-card-actions">
                                                            <ButtonComponent cssClass="e-flat me-3" iconCss="e-icons e-trash" content="Delete" type="button"></ButtonComponent>
                                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit" content="Edit" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="e-card h-100 bg-body-tertiary">
                                                        <div className="e-card-content pb-2">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="PayPal account" name="payment"></RadioButtonComponent>
                                                            </div>
                                                            <div className="text-dark-emphasis mt-1 ms-4 ps-1">Connect to your account</div>
                                                        </div>
                                                        <div className="e-card-actions">
                                                            <ButtonComponent cssClass="e-flat me-3" iconCss="e-icons e-trash" content="Delete" type="button"></ButtonComponent>
                                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit" content="Edit" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-4 mb-xl-5">
                                            <h2 className="fw-medium fs-5 text-body mb-3">Delivery methods</h2>
                                            <div className="row g-3">
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="e-card h-100 bg-body-tertiary">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="$15 - DHL fast delivery" name="delivery"></RadioButtonComponent>
                                                            </div>
                                                            <div className="text-dark-emphasis mt-1 ms-4 ps-1">Get it by tomorrow</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="e-card h-100 bg-body-tertiary">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Free delivery - FedEx" name="delivery" checked={true}></RadioButtonComponent>
                                                            </div>
                                                            <div className="text-dark-emphasis mt-1 ms-4 ps-1">Get it by Friday, 13 Dec 2023</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="e-card h-100 bg-body-tertiary">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="$49 - Express delivery" name="delivery"></RadioButtonComponent>
                                                            </div>
                                                            <div className="text-dark-emphasis mt-1 ms-4 ps-1">Get it today</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-dark-emphasis fw-medium small mb-1">Enter a gift card, voucher or promotional code</label>
                                            <div className="row g-3 d-md-flex">
                                                <div className="col-md-10">
                                                    <TextBoxComponent cssClass="e-bigger" type="text" placeholder="Promo Code" floatLabelType="Never"></TextBoxComponent>
                                                </div>
                                                <div className="col-md-auto e-bigger">
                                                    <ButtonComponent cssClass="e-secondary e-block px-4" content="Apply" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light-subtle pt-4 p-3 p-md-4 py-lg-5 pe-xl-5 col-lg-4">
                                        <div>
                                            <div>
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="fs-6 text-dark-emphasis">Subtotal</div>
                                                        <div className="fs-6 fw-medium text-body">$8,900.00</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="fs-6 text-dark-emphasis">Savings</div>
                                                        <div className="fs-6 fw-medium text-success">-$299.00</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="fs-6 text-dark-emphasis">Store pickup</div>
                                                        <div className="fs-6 fw-medium text-body">$99.00</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="fs-6 text-dark-emphasis">Tax</div>
                                                        <div className="fs-6 fw-medium text-body">$899.00</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <hr className="border-secondary" />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="fs-6 fw-medium text-dark-emphasis">Total</div>
                                                    <div className="fs-6 fw-medium text-body">$9,599.00</div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <ButtonComponent cssClass="e-block e-primary" content="Proceed to payment" type="submit"></ButtonComponent>
                                            </div>
                                            <p className="text-center text-sm text-dark-emphasis mt-3">
                                                One or more items in your cart require an account{" "}
                                                <a href="#" className="text-primary text-decoration-underline p-0 underline">Sign in or Create an account now</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
