'use client';

import { useEffect, useState, useRef } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import styles from './page.module.css';

export default function Notification7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState('420px');
    const sidebarRef = useRef<SidebarComponent | null>(null);
    const dropdownRef = useRef<DropDownButtonComponent | null>(null);
    
    const transactionData: any[] = [
        {
            id: 1,
            name: 'Gift Card Sale Confirmation',
            content: 'Your sale UK Steam card worth $200 has been successfully completed, funds are now in your wallet.',
            avatar: 'avatar-3.jpg',
            date: new Date(2024, 1, 10, 9, 32, 12)
        },
        {
            id: 2,
            name: 'BTC Transaction Confirmation',
            content: 'Your BTC transaction of 0.00008 BTC has been successfully processed, funds are now in your wallet.',
            avatar: 'avatar-4.jpg',
            date: new Date(2024, 1, 10, 8, 16, 12)
        },
        {
            id: 3,
            name: 'Failed Transactions',
            content: 'We were unable to process your PayPal payment of N600. Please try again.',
            avatar: 'avatar-5.jpg',
            date: new Date(2024, 1, 10, 8, 0, 12)
        },
        {
            id: 4,
            name: 'BTC Transaction Confirmation',
            content: 'Your BTC transaction of 0.00008 BTC has been successfully processed, funds are now in your wallet.',
            avatar: 'avatar-14.jpg',
            date: new Date(2024, 1, 10, 7, 46, 12)
        }
    ];

    const items: object[] = [
        { text: 'All Transactions' },
        { text: 'Successful Transactions' },
        { text: 'Pending Transactions' },
        { text: 'Refunds and Reversals' }
    ];

    const updateWidth = () : void => {
        setWidth(window.innerWidth <= 576 ? '100%' : '420px');
    };

    const handleResize = () : void => {
        updateWidth();
        if (dropdownRef.current && dropdownRef.current.element?.classList.contains('e-active')) {
            dropdownRef.current.toggle();
        }
    };
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-7' && blockData.theme) {
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
        updateWidth();
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
                        <div style={{ height: '875px', width: width, float: 'right' }}>
                            <SidebarComponent key={"notification-7-tw"} ref={sidebarRef} className="bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} closeOnDocumentClick={false} style={{ display: 'block' }}>
                                <div className="flex-none">
                                    <div>
                                        <div className="flex items-center gap-3 px-4 sm:px-3 py-2 border-b border-gray-200 dark:border-gray-600">
                                            <span className="e-icons e-arrow-left !text-2xl !leading-6 !text-gray-500 dark:!text-gray-300"></span>
                                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Notifications</h2>
                                        </div>
                                        <div className="flex justify-between items-center p-4">
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">Today</p>
                                            <DropDownButtonComponent ref={dropdownRef} className="e-primary" items={items} content="Transactions" type="button"></DropDownButtonComponent>
                                        </div>
                                    </div>
                                    <ListViewComponent id={styles["list"]} cssClass="!border-0 px-4 h-full" dataSource={transactionData}
                                        template={(data: any) => (
                                            <div className="e-card shadow-none rounded-lg flex-row !p-4 !pb-2 sm:!pb-1 flex items-start">
                                                <span className="e-avatar e-avatar-circle shrink-0" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>
                                                <div className="e-card-stacked">
                                                    <span className="flex flex-col items-start ml-3 text-gray-900 dark:text-white">
                                                        <span className="text-sm font-semibold">{data.name}</span>
                                                        <span className="!text-xs !mt-1">{data.content}</span>
                                                        <div className="text-xs sm:hidden flex items-center gap-3 mt-2">
                                                            <span>{data.date.toLocaleDateString('en-GB')}</span>
                                                            <span>{data.date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                                                        </div>
                                                        <div className="w-full flex justify-between items-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-600 p-1">
                                                            <span className="text-xs hidden sm:flex items-center gap-3">
                                                                <span>{data.date.toLocaleDateString('en-GB')}</span>
                                                                <span>{data.date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                                                            </span>
                                                            <ButtonComponent cssClass="e-primary e-flat" iconCss="e-icons e-chevron-right text-xl" iconPosition="Right" content="View details" type="button"></ButtonComponent>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    ></ListViewComponent>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebarRef.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div style={{ height: '940px', width: width, float: 'right' }}>
                            <SidebarComponent key={"notification-7-bs"} ref={sidebarRef} className="d-flex flex-column" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="flex-shrink-0">
                                    <div className="d-flex align-items-center gap-2 p-3 border-bottom">
                                        <span className="e-icons e-arrow-left fs-5 text-secondary"></span>
                                        <h2 className="fs-5 fw-medium text-body m-0">Notifications</h2>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center p-3 pb-4">
                                        <p className="fs-6 fw-medium text-body m-0">Today</p>
                                        <DropDownButtonComponent ref={dropdownRef} className="e-primary" items={items} content="Transactions" type="button"></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div>
                                    <ListViewComponent id={styles["list"]} cssClass="border-0 px-3" dataSource={transactionData}
                                        template={(data: any) => (
                                            <div className="e-card rounded-3 lh-base p-3 pb-2 d-flex flex-row align-items-start">
                                                <span className="e-avatar e-avatar-circle flex-shrink-0" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>
                                                <div className="e-card-stacked">
                                                    <span className="d-flex flex-column align-items-start ms-2">
                                                        <span className="fw-medium">{data.name}</span>
                                                        <span className="small mt-1">{data.content}</span>
                                                        <div className="small d-sm-none d-flex align-items-center gap-2 mt-2">
                                                            <span>{data.date.toLocaleDateString('en-GB', { day: '2-digit', month: 'numeric', year: 'numeric' })}</span>
                                                            <span className="ms-1">{data.date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                                                        </div>
                                                        <div className="w-100 d-flex justify-content-between align-items-center mt-2 pt-2 border-top">
                                                            <span className="small d-none d-sm-flex align-items-center gap-2">
                                                                <span>{data.date.toLocaleDateString('en-GB', { day: '2-digit', month: 'numeric', year: 'numeric' })}</span>
                                                                <span className="ms-1">{data.date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                                                            </span>
                                                            <ButtonComponent cssClass="e-primary e-flat" iconCss="e-icons e-chevron-right" iconPosition="Right" content="View details" type="button"></ButtonComponent>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    ></ListViewComponent>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebarRef.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
