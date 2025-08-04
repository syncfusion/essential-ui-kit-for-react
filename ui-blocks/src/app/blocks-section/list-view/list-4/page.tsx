'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default function List4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const shoes: any[] = [
        {
            id: 1,
            header: 'Nike Air Max 270',
            size: '8',
            color: 'White',
            seller: 'Meyaar',
            amount: '$150.00',
            badge: '10% off',
            pic: 'nike-white.png'
        },
        {
            id: 2,
            header: 'Adidas Ultraboost 22',
            size: '8',
            color: 'Red',
            seller: 'Meyaar',
            amount: '$180.00',
            badge: '',
            pic: 'adidas-red.png'
        },
        {
            id: 3,
            header: 'Puma RS-X3 Super',
            size: '8',
            color: 'Mixed',
            seller: 'Meyaar',
            amount: '$120.00',
            badge: '10% off',
            pic: 'puma-mixed.png'
        },
        {
            id: 4,
            header: 'New Balance 574 Classic',
            size: '8',
            color: 'Black',
            seller: 'Meyaar',
            amount: '$100.00',
            badge: '',
            pic: 'puma-black.png'
        },
        {
            id: 5,
            header: 'Reebok Zig Kinetica II',
            size: '8',
            color: 'Green',
            seller: 'Meyaar',
            amount: '$140.00',
            badge: '10% off',
            pic: 'reebok-green.png'
        }
    ]; 

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
    }; 

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '608px' });
    }; 
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-4' && blockData.theme) {
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
        checkWindowSize(window.innerWidth);
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
                    <section className="bg-white dark:bg-gray-900">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="lg:max-w-2xl w-full m-auto p-4 md:p-6 lg:py-8 lg:px-14">
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={shoes} template={(data: any) => (
                                    <div className="e-list-wrapper !px-1 sm:!px-3 border-b border-gray-200 dark:border-gray-600 !py-4 flex flex-col">
                                        <span className="flex">
                                            <div className="shrink-0 bg-gray-50 dark:bg-gray-700 rounded">
                                                <img className="rounded-lg" src={`/react/essential-ui-kit/blocks/assets/images/listview/carts/${data.pic}`} width={80} height={80} alt="product image" />
                                            </div>
                                            <span className="ml-4 flex flex-col">
                                                <span className="e-list-item-header text-sm font-medium text-gray-900 dark:text-white !text-wrap !line-clamp-1 w-full truncate">{data.header}</span>
                                                <p className="flex space-x-3 mt-1">
                                                    <span className="text-xs text-gray-700 dark:text-gray-200">Size : {data.size}</span>
                                                    <span className="text-xs text-gray-700 dark:text-gray-200">Color : {data.color}</span>
                                                </p>
                                                <span className="mt-0.5 text-xs text-gray-700 dark:text-gray-200">Seller : {data.seller}</span>
                                            </span>
                                            <div className="ml-auto text-end">
                                                <div className="text-gray-900 dark:text-white text-lg font-semibold">{data.amount}</div>
                                                {data.badge && (
                                                    <span className="e-badge e-badge-pill e-badge-success !px-1.5">{data.badge}</span>
                                                )}
                                            </div>
                                        </span>
                                        <div className="flex items-center mt-4 sm:mt-0 ml-0 sm:ml-24">
                                            <div className="flex items-center">
                                                <span className="e-small">
                                                    <ButtonComponent className="e-round mr-2" iconCss="e-icons e-plus !text-sm" type="button"></ButtonComponent>
                                                </span>
                                                <TextBoxComponent className="text-center !pl-0" cssClass="e-small" width="50px" value='1'></TextBoxComponent>
                                                <span className="e-small">
                                                    <ButtonComponent className="e-round ml-2" iconCss="e-icons e-intermediate-state !text-sm" type="button"></ButtonComponent>
                                                </span>
                                            </div>
                                            <div className="flex items-center ml-4">
                                                <span className="e-small border-r border-gray-200 dark:border-gray-600 px-2">
                                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-trash e-medium" type="button"></ButtonComponent>
                                                </span>
                                                <span className="e-small border-r border-gray-200 dark:border-gray-600 px-2">
                                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-medium e-bookmark" type="button"></ButtonComponent>
                                                </span>
                                                <span className="e-small px-2">
                                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons text-sm sf-icon-share-arrow-02" type="button"></ButtonComponent>
                                                </span>
                                            </div>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="d-flex align-items-center justify-content-center min-vh-100">
                            <div className="container-lg w-100 m-auto p-3 p-md-4" style={width}>
                                <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={shoes} template={(data: any)=> (
                                    <div className="e-list-wrapper px-1 px-sm-3 py-3 d-flex flex-column">
                                        <span className="d-flex">
                                            <div className="flex-shrink-0 bg-body-tertiary rounded-1">
                                                <img className="rounded" src={`/react/essential-ui-kit/blocks/assets/images/listview/carts/${data.pic}`} width={80} height={80} alt="product image" />
                                            </div>
                                            <span className="ms-2 ps-1 d-flex flex-column">
                                                <p className="e-list-item-header fw-medium mb-0 w-100 text-wrap overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{data.header}</p>
                                                <p className="mt-1 mb-0">
                                                    <span className="small pe-2 me-1">Size : {data.size}</span>
                                                    <span className="small">Color : {data.color}</span>
                                                </p>
                                                <span className="mt-1 small">Seller : {data.seller}</span>
                                            </span>
                                            <div className="ms-auto text-end ps-2">
                                                <div className="fs-5 fw-bold">{data.amount}</div>
                                                {data.badge && (
                                                    <span className="e-badge e-badge-pill e-badge-success px-2">{data.badge}</span>
                                                )}
                                            </div>
                                        </span>
                                        <div className="d-flex align-items-center mt-3 mt-sm-0 ms-0 ms-sm-5 ps-sm-5">
                                            <div className="d-flex align-items-center">
                                                <span className="e-small">
                                                    <ButtonComponent className="e-round e-outline me-2" iconCss="e-icons e-plus" type="button"></ButtonComponent>
                                                </span>
                                                <TextBoxComponent className="ps-0 text-center" cssClass="e-small" width="50px" value='1'></TextBoxComponent>
                                                <span className="e-small">
                                                    <ButtonComponent className="e-round e-outline ms-2" iconCss="e-icons e-intermediate-state-2" type="button"></ButtonComponent>
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center ms-4">
                                                <span className="border-end px-2">
                                                    <ButtonComponent className="e-flat" iconCss="e-icons e-trash e-medium" type="button"></ButtonComponent>
                                                </span>
                                                <span className="border-end px-2">
                                                    <ButtonComponent className="e-flat" iconCss="e-icons e-medium e-bookmark" type="button"></ButtonComponent>
                                                </span>
                                                <span className="px-2">
                                                    <ButtonComponent className="e-flat" iconCss="e-icons small sf-icon-share-arrow-02" type="button"></ButtonComponent>
                                                </span>
                                            </div>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
