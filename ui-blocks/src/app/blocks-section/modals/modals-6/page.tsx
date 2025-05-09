'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import styles from './page.module.css';

export default function Modals6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);

    const data: any[] = [
        {
            id: 1,
            transactionId: "TRX202401",
            customerDetails: {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                avatar: "avatar-8.jpg"
            },
            invoiceNumber: "INV202401",
            description: "Payment for invoice"
        },
        {
            id: 2,
            transactionId: "TRX202402",
            customerDetails: {
                name: "Mark Johnson",
                email: "mark.johnson@example.com",
                avatar: "avatar-1.jpg"
            },
            invoiceNumber: "INV202402",
            description: "Subscription renewal"
        },
        {
            id: 3,
            transactionId: "TRX202403",
            customerDetails: {
                name: "Emily White",
                email: "emily.white@example.com",
                avatar: "avatar-9.jpg"
            },
            invoiceNumber: "INV202403",
            description: "Consulting services"
        },
        {
            id: 4,
            transactionId: "TRX202404",
            customerDetails: {
                name: "Tom Harris",
                email: "tom.harris@example.com",
                avatar: "avatar-4.jpg"
            },
            invoiceNumber: "INV202404",
            description: "Equipment purchase"
        },
        {
            id: 5,
            transactionId: "TRX202405",
            customerDetails: {
                name: "Lisa Green",
                email: "lisa.green@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceNumber: "INV202405",
            description: "Event sponsorship"
        },
        {
            id: 6,
            transactionId: "TRX202406",
            customerDetails: {
                name: "David Clark",
                email: "david.clark@example.com",
                avatar: "avatar-5.jpg"
            },
            invoiceNumber: "INV202406",
            description: "Online course registration"
        }
    ];

    const checkWindowSize = () => {
        const isMobile = window.innerWidth <= 640;
        dialog.current?.show(isMobile);
    };

    /* SB Code - Start */
    const refreshDialog = (timeout: number) => {
        setTimeout(() => {
            dialog.current?.show(window.innerWidth <= 640);
        }, timeout);
    };
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-6' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshDialog(200);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener("message", handleMessageEvent);
        /* SB Code - End */
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener("message", handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: "764px" }}>
                            <ButtonComponent className="h-fit my-5" type="button" onClick={() => dialog.current?.show()}>Transaction Details</ButtonComponent>
                            <DialogComponent id={styles["dialogs"]} ref={dialog} key={"modal-7-tw"} className="rounded-none sm:rounded-lg sm:m-4 overflow-hidden" target="#dialog-container" beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="835px" isModal={true}
                                header={() => (
                                    <p className="font-semibold leading-normal">Transaction Details</p>
                                )}
                            >
                                <div>
                                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center mb-5 sm:mb-6">
                                        <CheckBoxComponent label="Export time fields in minutes formats"></CheckBoxComponent>
                                        <div className="flex flex-row justify-end gap-3">
                                            <ButtonComponent cssClass="w-1/2 sm:w-fit e-outline" iconCss="e-icons e-export" type="button">Export</ButtonComponent>
                                            <DropDownButtonComponent cssClass="w-1/2 sm:w-fit e-outline" iconCss="e-icons e-user" beforeOpen={(e) => e.cancel = true} type="button">Contact</DropDownButtonComponent>
                                        </div>
                                    </div>
                                    <GridComponent cssClass="e-bigger mb-1.5" dataSource={data} width="100%" allowSorting={true} allowFiltering={true} filterSettings={{ type: 'Menu' }} gridLines="None" rowHeight={44}>
                                        <ColumnsDirective>
                                            <ColumnDirective field="transactionId" headerText="Transaction ID" width={165} template={(data: any) => (
                                                <p className="text-sm text-gray-700 dark:text-gray-200">{data.transactionId}</p>
                                            )}></ColumnDirective>
                                            <ColumnDirective field="customerDetails" headerText="Customer Name" textAlign="Left" width={260} allowFiltering={false} template={(data: any) => (
                                                <div className="flex gap-2 items-center py-1.5">
                                                    <div className="w-8 h-8">
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url("/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.customerDetails.avatar}")` }}></span>
                                                    </div>
                                                    <div className="flex flex-col text-sm">
                                                        <p className="text-gray-900 dark:text-white">{data.customerDetails.name}</p>
                                                        <p className="text-gray-700 dark:text-gray-200">{data.customerDetails.email}</p>
                                                    </div>
                                                </div>
                                            )}></ColumnDirective>
                                            <ColumnDirective field="invoiceNumber" headerText="Invoice Number" width={170} template={(data: any) => (
                                                <a href="#" className="text-sm text-primary-700 dark:text-primary-500 font-medium underline">{data.invoiceNumber}</a>
                                            )}></ColumnDirective>
                                            <ColumnDirective field="description" headerText="Description" width={190} template={(data: any) => (
                                                <p className="text-sm text-gray-700 dark:text-gray-200">{data.description}</p>
                                            )}></ColumnDirective>
                                        </ColumnsDirective>
                                        <Inject services={[Sort, Filter]} />
                                    </GridComponent>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                ); 
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-start" style={{ minHeight: "764px" }}>
                            <ButtonComponent className="mx-auto my-3 e-outline" type="button" onClick={() => dialog.current?.show()}>Transaction Details</ButtonComponent>
                            <DialogComponent id={styles["dialogs"]} key={"modal-7-bs"} ref={dialog} className="rounded-3 m-sm-2 overflow-hidden" target="#dialog-container" beforeOpen={(e) => { e.maxHeight = '100%' }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="865px" isModal={true}
                                header={() => (
                                    <p className="fw-bold text-body mb-0 lh-sm">Transaction Details</p>
                                )}
                            >
                                <div>
                                    <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 align-items-sm-center mb-4 mb-sm-3">
                                        <CheckBoxComponent label="Export time fields in minutes formats"></CheckBoxComponent>
                                        <div className="d-flex flex-row justify-content-end gap-3 gap-sm-2">
                                            <ButtonComponent className="col col-sm-auto e-outline" iconCss="e-icons e-export" type="button">Export</ButtonComponent>
                                            <DropDownButtonComponent className="col col-sm-auto e-outline ms-sm-1" iconCss="e-icons e-user" beforeOpen={(e) => e.cancel = true} type="button">Contact</DropDownButtonComponent>
                                        </div>
                                    </div>
                                    <GridComponent cssClass="e-bigger mb-1" dataSource={data} width="100%" allowSorting={true} allowFiltering={true} filterSettings={{ type: 'Menu' }} gridLines="None" rowHeight={44}>
                                        <ColumnsDirective>
                                            <ColumnDirective field="transactionId" headerText="Transaction ID" width={168} template={(data: any) => (
                                                <p className="text-body mb-0">{data.transactionId}</p>
                                            )}></ColumnDirective>
                                            <ColumnDirective field="customerDetails" headerText="Customer Name" textAlign="Left" width={260} allowFiltering={false} template={(data: any) => (
                                                <div className="d-flex gap-2 align-items-center py-1">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0" style={{ backgroundImage: `url("/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.customerDetails.avatar}")` }}></span>
                                                    <div className="small ms-1 lh-base">
                                                        <p className="text-body mb-0">{data.customerDetails.name}</p>
                                                        <p className="text-body-secondary mb-0">{data.customerDetails.email}</p>
                                                    </div>
                                                </div>
                                            )}></ColumnDirective>
                                            <ColumnDirective field="invoiceNumber" headerText="Invoice Number" width={186} template={(data: any) => (
                                                <a className="small text-primary fw-medium text-decoration-underline" href="#">{data.invoiceNumber}</a>
                                            )}></ColumnDirective>
                                            <ColumnDirective field="description" headerText="Description" width={200} template={(data: any) => (
                                                <p className="text-body mb-0">{data.description}</p>
                                            )}></ColumnDirective>
                                        </ColumnsDirective>
                                        <Inject services={[Sort, Filter]} />
                                    </GridComponent>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}