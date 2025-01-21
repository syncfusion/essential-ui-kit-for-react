'use client';

import { useRef, useEffect, useState } from 'react';
import { MaskedTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { RadioButtonComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

export default function Checkout5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const checkout = useRef<DialogComponent>(null);

    const handleResize = () => {
        checkout.current?.refresh();
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-5' && blockData.theme) {
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
                    <section>
                        <div id="dialog-container" className="relative" style={{ minHeight: "1375px" }}>
                            <DialogComponent target="#dialog-container" ref={checkout} key={"checkout-5-tw"} visible={true} showCloseIcon={true} width="662px" height="100%" closeOnEscape={true} open={(event) => (event.preventFocus = true)}
                                header={() => {
                                    return (
                                        <span className="text-lg">My shopping cart</span>
                                    )
                                }}
                                footerTemplate={() =>
                                    <div>
                                        <div className="e-bigger mb-4 text-right">
                                            <ButtonComponent className="md:mr-4 !ml-0 w-full md:w-fit e-primary" type="submit">Proceed to checkout</ButtonComponent>
                                            <ButtonComponent className="dark:text-white w-full md:w-fit !ml-0 mt-4 md:mt-0 e-outline" type="submit">Continue shopping</ButtonComponent>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="max-w-2xl px-1 text-gray-700 dark:text-gray-300">
                                    <div>
                                        <div className="p-3 mt-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
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
                                                <hr className="w-full border-gray-200 dark:border-gray-600" />
                                                <div className="flex justify-between">
                                                    <div className="text-base font-semibold text-gray-700 dark:text-gray-300">Total</div>
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">$9,599.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <form action="#" className="mt-5 md:mt-4 mb-6" onSubmit={(event) => event.preventDefault()}>
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
                                        </form>
                                        <div>
                                            <div>
                                                <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-white">Payments</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-4">
                                                    <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Credit card" name="payment"></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Pay with your credit card</div>
                                                        </div>
                                                        <div className="e-card-actions">
                                                            <ButtonComponent cssClass="e-flat mr-3" type="button" iconCss="e-icons e-trash mr-1.5 e-medium" content="Delete"></ButtonComponent>
                                                            <ButtonComponent cssClass="e-flat" type="button" iconCss="e-icons e-edit mr-1.5 e-medium" content="Edit"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                    <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Payment on delivery" name="payment" checked={true}></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">+ $12 payment processing fee</div>
                                                        </div>
                                                        <div className="e-card-actions">
                                                            <ButtonComponent cssClass="e-flat mr-3" type="button" iconCss="e-icons e-trash mr-1.5 e-medium" content="Delete"></ButtonComponent>
                                                            <ButtonComponent cssClass="e-flat" type="button" iconCss="e-icons e-edit mr-1.5 e-medium" content="Edit"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                    <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="PayPal account" name="payment"></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Connect to your account</div>
                                                        </div>
                                                        <div className="e-card-actions">
                                                            <ButtonComponent cssClass="e-flat mr-3" type="button" iconCss="e-icons e-trash mr-1.5 e-medium" content="Delete"></ButtonComponent>
                                                            <ButtonComponent cssClass="e-flat" type="button" iconCss="e-icons e-edit mr-1.5 e-medium" content="Edit"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-white">Delivery methods</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-4">
                                                    <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="$15 - DHL fast delivery" name="delivery"></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Pay with your credit card</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="Free delivery - FedEx" name="delivery" checked={true}></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">+ $12 payment processing fee</div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card pt-4 shadow-none border-transparent hover:border-primary-600 dark:hover:border-primary-400">
                                                        <div className="e-card-content">
                                                            <div className="e-bigger">
                                                                <RadioButtonComponent label="$49 - Express delivery" name="delivery"></RadioButtonComponent>
                                                            </div>
                                                            <div className="mt-1 ml-7 text-gray-500 dark:text-gray-400">Connect to your account</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "1340px" }}>
                            <DialogComponent target="#dialog-container" ref={checkout} key={"checkout-5-bs"} visible={true} showCloseIcon={true} width="662px" height="100%"  closeOnEscape={true} open={(event) => (event.preventFocus = true)}
                                header={() => {
                                    return (
                                        <span style={{ fontSize: "18px" }}>My shopping cart</span>
                                    )
                                }}
                                footerTemplate={() =>
                                    <div className="e-bigger row justify-content-lg-center justify-content-xl-end flex-column flex-md-row px-2 text-right">
                                        <div className="col-12 col-md-6 col-xl-5 m-0 mb-3 mb-md-0">
                                            <ButtonComponent cssClass="e-primary e-block m-0" type="submit">Proceed to checkout</ButtonComponent>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-5 ps-md-1">
                                            <ButtonComponent cssClass="e-secondary e-block m-0" type="submit">Continue shopping</ButtonComponent>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="mx-md-2">
                                    <div className="border border-light-subtle bg-light-subtle rounded-3 p-2 mt-2">
                                        <div className="d-flex flex-column gap-4">
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
                                        <hr className="border-secondary" />
                                        <div className="d-flex justify-content-between">
                                            <div className="fs-6 fw-medium text-dark-emphasis">Total</div>
                                            <div className="fs-6 fw-medium text-body">$9,599.00</div>
                                        </div>
                                    </div>
                                    <form action="#" className="my-4" onSubmit={(event) => event.preventDefault()}>
                                        <h2 className="fw-semibold fs-5 mb-3">Delivery details</h2>
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
                                    </form>
                                    <div>
                                        <h2 className="fw-medium fs-5 text-body mb-3">Payments</h2>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="e-card h-100">
                                                    <div className="e-card-content pb-2">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Credit card" name="payment"></RadioButtonComponent>
                                                        </div>
                                                        <div className="text-dark-emphasis mt-1 ps-1 ms-4">Pay with your credit card</div>
                                                    </div>
                                                    <div className="e-card-actions">
                                                        <ButtonComponent cssClass="e-flat me-3" iconCss="e-icons e-trash" type="button" content="Delete"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit" type="button" content="Edit"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="e-card h-100">
                                                    <div className="e-card-content pb-2">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Payment on delivery" name="payment" checked={true}></RadioButtonComponent>
                                                        </div>
                                                        <div className="text-dark-emphasis mt-1 ms-4 ps-1">+ $12 payment processing fee</div>
                                                    </div>
                                                    <div className="e-card-actions">
                                                        <ButtonComponent cssClass="e-flat me-3" iconCss="e-icons e-trash" type="button" content="Delete"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit" type="button" content="Edit"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="e-card h-100">
                                                    <div className="e-card-content pb-2">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="PayPal account" name="payment"></RadioButtonComponent>
                                                        </div>
                                                        <div className="text-dark-emphasis mt-1 ms-4 ps-1">Connect to your account</div>
                                                    </div>
                                                    <div className="e-card-actions">
                                                        <ButtonComponent cssClass="e-flat me-3" iconCss="e-icons e-trash" type="button" content="Delete"></ButtonComponent>
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-edit" type="button" content="Edit"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-2">
                                        <h2 className="fw-medium fs-5 text-body mb-3">Delivery methods</h2>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="e-card h-100">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="$15 - DHL fast delivery" name="delivery"></RadioButtonComponent>
                                                        </div>
                                                        <div className="text-dark-emphasis mt-1 ms-4 ps-1">Get it by tomorrow</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="e-card h-100">
                                                    <div className="e-card-content">
                                                        <div className="e-bigger">
                                                            <RadioButtonComponent label="Free delivery - FedEx" name="delivery" checked={true}></RadioButtonComponent>
                                                        </div>
                                                        <div className="text-dark-emphasis mt-1 ms-4 ps-1">Get it by Friday, 13 Dec 2023</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="e-card h-100">
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
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
