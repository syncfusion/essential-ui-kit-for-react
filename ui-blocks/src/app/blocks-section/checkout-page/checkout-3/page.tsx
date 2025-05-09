'use client';

import { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent, TextAreaComponent, MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent, RadioButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

export default function Checkout3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const products: any[] = [
        {
            image: "apple-magsafe.png",
            description: "Apple MagSafe Charger (for iPhone, AirPods Pro, AirPods with Wireless Charging Case)",
            quantity: 1,
            amount: "$2,000"
        },
        {
            image: "apple-iPad.png",
            description: "Apple iPad (10th Generation): With A14 Bionic Chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP Front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue",
            quantity: 1,
            amount: "$2,000"
        },
        {
            image: "apple-macbook-air.png",
            description: "Apple MacBook Air Laptop: M1 Chip, 13.3-Inch (33.74 cm) Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
            quantity: 1,
            amount: "$1,000"
        },
        {
            image: "apple-magic-keyboard.png",
            description: "Apple Magic Keyboard - US English – Silver (For Mac with macOS 11.3 or later, iPad running iPadOS 14.5 or later)",
            quantity: 1,
            amount: "$1,000"
        },
        {
            image: "apple-magic-mouse.png",
            description: "Apple Magic Mouse (For Bluetooth-Enabled Mac with OS X 10.11 or later, iPad with iPadOS 13.4 or later)",
            quantity: 1,
            amount: "$1,000"
        },
        {
            image: "apple-iphone-charger.png",
            description: "Original iPhone Charger: 20W Fast USB Type-C Adapter for iPhone 15/15 Plus/15 Pro/15 Pro Max, iPhone 14/14 Plus/14 Pro/14 Pro Max, iPhone 13/12/11 & Others. PD 3.0, 20 Watt, BIS Certified, 2 Years Warranty",
            quantity: 1,
            amount: "$1,900"
        }
      ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-3' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <h4 className="py-5 px-4 md:px-6 text-xl font-semibold text-gray-900 dark:text-white">Checkout</h4>
                        <div className="grid grid-cols-1 gap-6 px-4 md:px-6 lg:px-6 xl:px-11 pb-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                            <div className="order-1 lg:order-2 bg-gray-50 dark:bg-gray-950 md:border rounded-lg md:border-gray-200 md:dark:border-gray-600">
                                <h6 className="px-0 md:p-6 pb-0 text-lg font-semibold text-gray-900 dark:text-white">Product summary</h6>
                                <GridComponent className="pt-4 sm:pt-0" dataSource={products} rowHeight={68} gridLines="None" width="100%" style={{ maxWidth: "1280px", border: "none" }}>
                                    <ColumnsDirective>
                                        <ColumnDirective field="Items" width="56" textAlign="Center" template={({ image })=> (
                                            <div className="flex items-center justify-center">
                                                <img className="rounded-lg" src={`/react/essential-ui-kit/blocks/assets/images/checkout/checkout-product-list/${image}`} width={32} height={32} alt="product image" />
                                            </div>
                                            )}
                                        />
                                        <ColumnDirective field="description" width="173" clipMode="EllipsisWithTooltip" />
                                        <ColumnDirective field="quantity" width="80" clipMode="EllipsisWithTooltip" textAlign="Center" template={({ quantity })=> <span>x{quantity}</span>} />
                                        <ColumnDirective field="amount" width="83" textAlign="Center" format="C0" />
                                    </ColumnsDirective>
                                </GridComponent>
                            </div>
                            <div className="order-2 lg:order-1 md:border rounded-lg px-0 md:p-6 md:border-gray-200 md:dark:border-gray-600">
                                <form action="#" onSubmit={(event) => event.preventDefault()}>
                                    <div className="grid gap-5">
                                        <div className="grid grid-cols-1 gap-5 w-full">
                                            <h5 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Billing address</h5>
                                            <div className="e-bigger">
                                                <RadioButtonComponent name="billingType" value="individual" label="Individual" checked={true}></RadioButtonComponent>
                                                <RadioButtonComponent cssClass="ml-6" name="billingType" value="company" label="Company"></RadioButtonComponent>
                                            </div>
                                            <div className="w-full">
                                                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Saved address</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="Saved address"></DropDownListComponent>
                                            </div>
                                            <div className="flex flex-col justify-between gap-5 w-full md:flex-row">
                                                <div className="w-full md:w-1/2">
                                                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">First name</label>
                                                    <TextBoxComponent cssClass="e-bigger" type="text" name="firstName" placeholder="First name" floatLabelType="Never"></TextBoxComponent>
                                                </div>
                                                <div className="w-full md:w-1/2">
                                                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Last name</label>
                                                    <TextBoxComponent cssClass="e-bigger" type="text" name="lastName" placeholder="Last name" floatLabelType="Never"></TextBoxComponent>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-5 w-full">
                                            <div className="w-full">
                                                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Phone number</label>
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
                                        <div className="grid grid-cols-1">
                                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Shipping address</label>
                                            <TextAreaComponent cssClass="e-bigger" placeholder="Shipping address" resizeMode="Vertical"></TextAreaComponent>
                                        </div>
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="Country"></DropDownListComponent>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="City"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <div className="e-bigger">
                                            <CheckBoxComponent label="Save the data in the address list"></CheckBoxComponent>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="order-3 w-full">
                                <div className="md:border rounded-lg px-0 md:p-6 md:border-gray-200 md:dark:border-gray-600">
                                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Delivery address</div>
                                    <div className="flex flex-col gap-4 pt-4 e-bigger">
                                        <RadioButtonComponent label="Delivery to the same address" name="deliveryType" value="same address" checked={true}></RadioButtonComponent>
                                        <RadioButtonComponent label="Delivery to another address" name="deliveryType" value="another address"></RadioButtonComponent>
                                        <RadioButtonComponent label="Store pickup" name="deliveryType" value="store pickup"></RadioButtonComponent>
                                    </div>
                                </div>
                                <div className="md:border rounded-lg px-0 md:p-6 mt-6 md:border-gray-200 md:dark:border-gray-600">
                                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Payment details</div>
                                    <div className="flex flex-col gap-4 pt-4 e-bigger">
                                        <RadioButtonComponent label="Debit card" name="paymentdetails" value="bank" checked={true}></RadioButtonComponent>
                                        <RadioButtonComponent label="Credit card" name="paymentdetails" value="payments"></RadioButtonComponent>
                                        <RadioButtonComponent label="Net banking" name="paymentdetails" value="banking"></RadioButtonComponent>
                                        <RadioButtonComponent label="UPI transaction" name="paymentdetails" value="UPI transaction"></RadioButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="order-4 rounded-lg px-0 md:p-6 md:border md:border-gray-200 md:dark:border-gray-600">
                                <div className="w-full">
                                    <h6 className="pb-4 text-lg text-left font-semibold text-gray-900 dark:text-white">Order summary</h6>
                                    <div className="grid grid-cols-1 gap-6">
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
                                    <div className="flex flex-col md:flex-row items-center justify-center pt-8 gap-4 sm:gap-4 md:gap-0 lg:gap-0 xl:gap-0">
                                        <div className="w-full md:w-1/2 md:pr-3">
                                            <ButtonComponent className="w-full text-base e-primary" type="submit">Proceed to payment</ButtonComponent>
                                        </div>
                                        <div className="w-full md:w-1/2 md:pl-3">
                                            <ButtonComponent className="w-full text-base e-outline" type="submit">Return to shopping</ButtonComponent>
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
                        <div className="p-3 p-md-4">
                            <h1 className="py-2 fs-4 fw-bold text-body">Checkout</h1>
                            <div className="d-lg-flex mx-0 gap-4 mb-sm-4 pe-lg-4">
                                <div className="col-md-12 col-lg-6 order-lg-2 bg-body border border-light-subtle rounded px-0">
                                    <h6 className="fs-5 fw-medium text-body pb-2 p-4 mb-0">Product summary</h6>
                                    <GridComponent className="border-0 pt-3" dataSource={products} rowHeight={68} gridLines="None" width="100%" style={{ maxWidth: "1280px", border: "none" }}>
                                        <ColumnsDirective>
                                            <ColumnDirective field="Items" width="56" textAlign="Center" template={({ image })=> (
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <img className="rounded-3 ms-1" src={`/react/essential-ui-kit/blocks/assets/images/checkout/checkout-product-list/${image}`} width={32} height={32} alt="product image" />
                                                </div>
                                                )}
                                            />
                                            <ColumnDirective field="Description" width="173" clipMode="EllipsisWithTooltip" />
                                            <ColumnDirective field="Quantity" width="80" clipMode="EllipsisWithTooltip" textAlign="Center" template={({ quantity })=> <span>x{quantity}</span>} />
                                            <ColumnDirective field="Amount" width="83" textAlign="Center" format="C0" />
                                        </ColumnsDirective>
                                    </GridComponent>
                                </div>
                                <div className="col-md-12 col-lg-6 order-lg-1 border border-light-subtle rounded p-3 p-md-4 mt-4 mt-lg-0">
                                    <form action="#" onSubmit={(event) => event.preventDefault()}>
                                        <div className="mb-3">
                                            <h5 className="mb-3 fs-5 fw-medium text-body">Billing address</h5>
                                            <div className="mb-3 e-bigger">
                                                <RadioButtonComponent name="billingType" value="individual" label="Individual" checked={true}></RadioButtonComponent>
                                                <RadioButtonComponent cssClass="ms-3" name="billingType" value="company" label="Company"></RadioButtonComponent>
                                            </div>
                                            <div className="mb-3">
                                                <label className="fs-6 fw-medium text-dark-emphasis mb-1">Saved address</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="Saved address"></DropDownListComponent>
                                            </div>
                                            <div className="row g-3">
                                                <div className="col-md-6 pe-lg-2">
                                                    <label className="fs-6 fw-medium text-dark-emphasis mb-1">First name</label>
                                                    <TextBoxComponent cssClass="e-bigger" type="text" name="firstName" placeholder="First name" floatLabelType="Never"></TextBoxComponent>
                                                </div>
                                                <div className="col-md-6 ps-lg-2">
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
                                            <div className="col-12 col-md-6 pe-lg-2">
                                                <label className="fs-6 fw-medium text-dark-emphasis mb-1">Country</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="Country"></DropDownListComponent>
                                            </div>
                                            <div className="col-12 col-md-6 ps-lg-2">
                                                <label className="fs-6 fw-medium text-dark-emphasis mb-1">City</label>
                                                <DropDownListComponent cssClass="e-bigger" placeholder="City"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <div className="mb-3 e-bigger">
                                            <CheckBoxComponent label="Save the data in the address list"></CheckBoxComponent>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="d-lg-flex gap-4 mt-4 mb-sm-4 pe-lg-4">
                                <div className="col-md-12 col-lg-6 order-lg-3 px-0">
                                    <div className="col-lg-12 border border-light-subtle rounded p-3 p-md-4">
                                        <h6 className="fs-5 fw-medium text-body mb-0">Delivery address</h6>
                                        <div className="e-bigger d-flex flex-column gap-3 pt-3">
                                            <RadioButtonComponent label="Delivery to the same address" name="deliveryType" value="same address" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="Delivery to another address" name="deliveryType" value="another address"></RadioButtonComponent>
                                            <RadioButtonComponent label="Store pickup" name="deliveryType" value="store pickup"></RadioButtonComponent>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 border border-light-subtle rounded p-3 p-md-4 mt-4">
                                        <h6 className="fs-5 fw-medium text-body mb-0">Payment details</h6>
                                        <div className="e-bigger d-flex flex-column gap-3 pt-3">
                                            <RadioButtonComponent label="Debit card" name="paymentdetails" value="bank" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="Credit card" name="paymentdetails" value="payments"></RadioButtonComponent>
                                            <RadioButtonComponent label="Net banking" name="paymentdetails" value="banking"></RadioButtonComponent>
                                            <RadioButtonComponent label="UPI transaction" name="paymentdetails" value="UPI transaction"></RadioButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 order-lg-4 border border-light-subtle rounded p-3 p-md-4 mt-4 mt-lg-0">
                                    <h6 className="fs-5 fw-medium text-body mb-0 pb-3">Order summary</h6>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between pb-4">
                                            <div className="fs-6 text-dark-emphasis">Subtotal</div>
                                            <div className="fs-6 fw-medium text-body">$8,900.00</div>
                                        </div>
                                        <div className="d-flex justify-content-between pb-4">
                                            <div className="fs-6 text-dark-emphasis">Savings</div>
                                            <div className="fs-6 fw-medium text-success">-$299.00</div>
                                        </div>
                                        <div className="d-flex justify-content-between pb-4">
                                            <div className="fs-6 text-dark-emphasis">Store pickup</div>
                                            <div className="fs-6 fw-medium text-body">$99.00</div>
                                        </div>
                                        <div className="d-flex justify-content-between pb-2">
                                            <div className="fs-6 text-dark-emphasis">Tax</div>
                                            <div className="fs-6 fw-medium text-body">$899.00</div>
                                        </div>
                                    </div>
                                    <div>
                                        <hr className="border-secondary" />
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div className="fs-6 fw-medium text-dark-emphasis">Total</div>
                                        <div className="fs-6 fw-medium text-body">$9,599.00</div>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-4">
                                        <ButtonComponent className="e-primary e-block mb-3 mb-md-0 me-md-3" type="submit">Proceed to payment</ButtonComponent>
                                        <ButtonComponent className="e-secondary e-block" type="submit">Return to shopping</ButtonComponent>
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
