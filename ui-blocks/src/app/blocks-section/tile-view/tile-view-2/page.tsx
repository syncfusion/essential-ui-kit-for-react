'use client';

import { useEffect, useState } from 'react';
import { AppBarComponent, BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function TileView2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const productDetails: any[] = [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro (256GB) - Deep Purple',
            description: '5000+ bought last month',
            price: 1099,
            originalPrice: 1199,
            discount: '10% OFF',
            status: 'Available',
            deliveryType: 'Free delivery',
            image: 'apple-iphone-14-deep-purple.png'
        },
        {
            id: 2,
            name: 'Apple iPad Air (5th Generation) Wi-Fi, 64GB - Space Gray',
            description: '3000+ bought last month',
            price: 559,
            originalPrice: 599,
            discount: '10% OFF',
            status: 'Available',
            deliveryType: 'Free delivery',
            image: 'apple-ipad-air-space-gray.png'
        },
        {
            id: 3,
            name: 'Apple MacBook Air Laptop M2 chip, 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage - Midnight',
            description: '2000+ bought last month',
            price: 1049,
            originalPrice: 1199,
            discount: '13% OFF',
            status: 'Available',
            deliveryType: 'Free delivery',
            image: 'apple-macbook-midnight.png'
        }
    ];
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-2' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["product-details"]}>
                            <AppBarComponent className="shadow-none px-0">
                                <div className="w-full px-4 sm:px-6 xl:px-10">
                                    <BreadcrumbComponent enableNavigation={false} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}>
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective iconCss="e-icons e-home" text="Dashboard"></BreadcrumbItemDirective>
                                            <BreadcrumbItemDirective iconCss="sf-icon-dollar" text="Transactions"></BreadcrumbItemDirective>
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent className="e-flat sf-icon-notification-bell-01 e-small !text-base ml-1" type="button"></ButtonComponent>
                                    <span className="e-avatar e-avatar-circle e-avatar-small shrink-0 ml-2 sm:ml-3">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                </div>
                            </AppBarComponent>
                            <div className="border-t border-gray-200 dark:border-gray-600">
                                <div className="px-4 sm:px-6 py-4 xl:px-10 w-full">
                                    <div className="sm:flex items-center justify-between w-full gap-4">
                                        <h4 className="text-xl font-medium text-gray-900 dark:text-gray-50 shrink-0">Shopping cart</h4>
                                        <div className="e-input-group mt-3 sm:mt-0" style={{ maxWidth: "517px" }}>
                                            <span className="e-input-group-icon e-icons e-search border-0"></span>
                                            <input className="e-input !pl-0" type="text" placeholder="Search product" />
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:flex items-center justify-between w-full">
                                        <span className="flex items-center">
                                            <SwitchComponent cssClass="w-9" checked={true}></SwitchComponent>
                                            <span className="text-base sm:text-sm text-gray-900 dark:text-gray-50 ml-2">Show only discounted items</span>
                                        </span>
                                        <DropDownButtonComponent className="mt-3 sm:mt-0" content="All Categories" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    </div>
                                    <ListViewComponent cssClass="e-list-template !border-0 mt-6" dataSource={productDetails} template={(data: any) => (
                                        <div className="e-card flex flex-row p-4 sm:py-5 sm:px-5">
                                            <div className="e-card-image flex items-center !w-auto shrink-0 bg-gray-50 dark:bg-gray-700 rounded">
                                                <img className="!w-28 h-24 sm:h-28" src={`/react/essential-ui-kit/blocks/assets/images/tile-view/shopping-cart/${data.image}`} width={112} height={108} alt="product picture" />
                                            </div>
                                            <div className="e-card-stacked ml-3 flex sm:!flex-row flex-col w-full sm:!justify-between">
                                                <div className="e-card-header !p-0 !flex !flex-col !justify-start">
                                                    <div className="e-card-header-title mb-1">
                                                        <p className="text-sm md:text-lg xl:text-xl font-medium text-gray-900 dark:text-gray-50 !whitespace-normal !text-wrap !line-clamp-2 truncate">{data.name}</p>
                                                    </div>
                                                    <span className="e-card-sub-title text-gray-500 dark:text-gray-400">{data.description}</span>
                                                    <div className="mt-3 hidden sm:block">
                                                        <span className="e-badge e-badge-pill e-badge-success e-bigger">{data.status}</span>
                                                        <span className="e-badge e-badge-pill e-badge-info e-bigger ml-2">{data.deliveryType}</span>
                                                    </div>
                                                </div>
                                                <div className="e-card-content !px-0 mt-2 sm:mt-0 shrink-0 ml-0 sm:ml-2">
                                                    <div className="flex items-center sm:justify-end flex-wrap">
                                                        <span className="pr-1 text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50">{data.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                                                        <span className="pr-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">{data.originalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                                                        <span className="font-medium text-xs text-primary-600 dark:text-primary-400">({data.discount})</span>
                                                    </div>
                                                    <div className="mt-3 sm:justify-end sm:flex items-center hidden sm:block pr-1">
                                                        <span className="text-gray-500 dark:text-gray-400 mr-2">Quantity</span>
                                                        <NumericTextBoxComponent format="###.##" value={1} width="130px"></NumericTextBoxComponent>
                                                    </div>
                                                    <div className="mt-3 text-end flex px-1">
                                                        <ButtonComponent className="e-primary sm:w-44 w-full" iconCss="sf-icon-cart !text-base" content="Add to Cart" type="button"></ButtonComponent>
                                                        <ButtonComponent className="text-base sm:!flex sm:!items-center ml-2 h-8 px-2 !hidden" iconCss="sf-icon-heart" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["product-details"]}>
                            <AppBarComponent className="px-0">
                                <div className="px-3 px-sm-4 px-xl-5">
                                    <BreadcrumbComponent enableNavigation={false} separatorTemplate={() => <span className="e-icons e-chevron-right"></span>}>
                                        <BreadcrumbItemsDirective>
                                            <BreadcrumbItemDirective iconCss="e-icons e-home" text="Dashboard"></BreadcrumbItemDirective>
                                            <BreadcrumbItemDirective iconCss="sf-icon-dollar" text="Transactions"></BreadcrumbItemDirective>
                                        </BreadcrumbItemsDirective>
                                    </BreadcrumbComponent>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent className="e-icons e-flat sf-icon-notification-bell-01 fs-6" type="button"></ButtonComponent>
                                    <span className="e-avatar e-avatar-circle e-avatar-small ms-3">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" width={32} height={32} alt="profile picture" />
                                    </span>
                                </div>
                            </AppBarComponent>
                            <div className="border-top border-light-subtle">
                                <div className="p-3 px-sm-4 px-xl-5">
                                    <div className="d-sm-flex align-items-center justify-content-between">
                                        <h4 className="fs-5 fw-medium text-body mb-0">Shopping cart</h4>
                                        <div className="col-12 col-sm-5 mt-3 mt-sm-0">
                                            <div className="e-input-group">
                                                <span className="e-input-group-icon e-icons e-search border-0"></span>
                                                <input className="e-input ps-0" type="text" placeholder="Search product" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-sm-flex align-items-center justify-content-between">
                                        <span className="d-flex align-items-center">
                                            <SwitchComponent checked={true} style={{ width: "36px" }}></SwitchComponent>
                                            <span className="fs-6 text-body ms-2 ps-1">Show only discounted items</span>
                                        </span>
                                        <DropDownButtonComponent className="mt-3 mt-sm-0 e-outline" content="All Categories" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    </div>
                                    <ListViewComponent cssClass="border-0 mt-4 e-list-template" dataSource={productDetails} template={(data: any) => (
                                        <div className="e-card d-flex flex-row p-2 rounded-3">
                                            <div className="e-card-image d-flex align-items-center w-auto bg-body-tertiary rounded-1">
                                                <img src={`/react/essential-ui-kit/blocks/assets/images/tile-view/shopping-cart/${data.image}`} width={112} height={108} alt="product picture" />
                                            </div>
                                            <div className="e-card-stacked ms-2 ps-1 py-1 d-flex flex-column flex-sm-row w-100 justify-content-between">
                                                <div className="e-card-header flex flex-column p-0 justify-content-start">
                                                    <div className="e-card-header-title mb-1">
                                                        <p className="fs-5 fw-medium text-body mb-0 line-clamp-2 text-truncate text-wrap overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{data.name}</p>
                                                    </div>
                                                    <span className="e-card-sub-title text-body-secondary">{data.description}</span>
                                                    <div className="mt-2 pt-1 d-none d-sm-block">
                                                        <span className="e-badge e-badge-pill e-badge-success e-bigger">{data.status}</span>
                                                        <span className="e-badge e-badge-pill e-badge-info e-bigger ms-2">{data.deliveryType}</span>
                                                    </div>
                                                </div>
                                                <div className="e-card-content p-0 pe-1 mt-2 mt-sm-0 flex-shrink-0 ms-0 ms-sm-2 col-sm-5 col-md-4 col-lg-3 ps-xl-3">
                                                    <div className="d-flex justify-content-sm-end align-items-center flex-wrap">
                                                        <span className="fs-5 fw-medium text-body me-1">{data.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                                                        <span className="me-1 fs-6 text-body-secondary text-decoration-line-through">{data.originalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                                                        <span className="fw-medium text-primary">({data.discount})</span>
                                                    </div>
                                                    <div className="mt-2 pt-1 d-none d-sm-flex justify-content-sm-end align-items-center flex-wrap">
                                                        <span className="text-body-secondary me-2">Quantity</span>
                                                        <NumericTextBoxComponent format="###.##" value={1} width="130px"></NumericTextBoxComponent>
                                                    </div>
                                                    <div className="mt-2 pt-1 d-flex justify-content-sm-end">
                                                        <ButtonComponent className="e-primary w-100 w-sm-25" iconCss="sf-icon-cart" content="Add to Cart" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline fs-6 ms-2 d-none d-sm-block" iconCss="sf-icon-heart" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
