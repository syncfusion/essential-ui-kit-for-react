'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

export default function List9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const data: any[] = [
        {
            id: 1,
            time: "Just now",
            title: "Great News: Your salary has been deposited!",
            message: "Your salary for the month September 2024 is credited to your account. Check your balance to ensure everything is accurate!",
            tag: "financial"
        },
        {
            id: 2,
            time: "7 hours ago",
            title: "Friendly reminder: Rent payment due soon!",
            message: "Just a heads-up that your rent payment is due soon. Please make sure to pay on time to avoid any late fees!",
            tag: "remainder"
        },
        {
            id: 3,
            time: "Yesterday",
            title: "Scheduled maintenance notification",
            message: "We’ll be conducting maintenance in your apartment on Wednesday at 10.00 AM. Please ensure access to your unit.",
            tag: "maintenance"
        },
        {
            id: 4,
            time: "20 Sep",
            title: "Don’t forget: Grocery shopping time!",
            message: "Time to stock up on groceries! Check your pantry for essentials and make your shopping list to save time.",
            tag: "shopping"
        },
        {
            id: 5,
            time: "20 Sep",
            title: "Heads Up: Your utility bill is due soon!",
            message: "Just a reminder that your utility bill is due in one week. Please make sure to pay on time to avoid any interruptions in service!",
            tag: "financial"
        }
    ];

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
    };

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '610px' });
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-9' && blockData.theme) {
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
                            <div className="max-w-none lg:max-w-2xl w-full m-auto p-4 md:py-8 lg:px-14">
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line border-b border-gray-200 dark:border-gray-600 !py-4 !px-1 sm:!px-3">
                                        <div className="flex justify-between contents">
                                            <div className="flex">
                                                <span className={`e-avatar e-avatar-large ${data.tag === "financial" ? "bg-green-100 text-green-700 dark:text-green-500" : data.tag === "remainder" ? "bg-orange-100 text-orange-700 dark:text-orange-500" : data.tag === "maintenance" ? "bg-cyan-100 text-cyan-700 dark:text-cyan-600" : "bg-indigo-100 text-indigo-700 dark:text-indigo-600"}`}>
                                                    <span className={`text-2xl ${data.tag === "financial" ? "sf-icon-dollar" : data.tag === "remainder" ? "sf-icon-clock-rewind" : data.tag === "maintenance" ? "sf-icon-home-settings-03" : "sf-icon-cart"}`}></span>
                                                </span>
                                                <span className="ml-6 w-11/12">
                                                    <div className="flex justify-between relative">
                                                        <span className="e-list-item-header flex items-center !text-base !font-medium !text-wrap !line-clamp-2 w-3/5 sm:w-4/5 !truncate !text-gray-900 dark:!text-gray-200">
                                                            {data.title}
                                                        </span>
                                                        <span className="text-gray-700 dark:text-gray-200 absolute right-0 top-0">{data.time}</span>
                                                    </div>
                                                    <span className="e-list-content !text-sm !text-gray-700 dark:!text-gray-200 !whitespace-normal !pt-2 !truncate w-full md:w-full !line-clamp-3">
                                                        {data.message}
                                                    </span>
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
                                <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line py-3 px-1 px-sm-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex w-100">
                                                <span className={`e-avatar e-avatar-large flex-shrink-0 ${data.tag === 'financial' ? 'bg-success-subtle text-success' : data.tag === 'remainder' ? 'bg-warning-subtle text-warning' : data.tag === 'maintenance' ? 'bg-info-subtle text-cyan' : data.tag === 'shopping' ? 'bg-primary-subtle text-primary' : ''}`}>
                                                    <span className={`fs-4 ${data.tag === 'financial' ? 'sf-icon-dollar' : data.tag === 'remainder' ? 'sf-icon-clock-rewind' : data.tag === 'maintenance' ? 'sf-icon-home-settings-03' : data.tag === 'shopping' ? 'sf-icon-cart' : ''}`}></span>
                                                </span>
                                                <span className="ms-4 w-100">
                                                    <div className="d-flex justify-content-between position-relative">
                                                        <span className="e-list-item-header text-wrap fs-6 fw-medium text-truncate col-8 col-sm-12" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minWidth: "170px", maxWidth: "350px" }}>{data.title}</span>
                                                        <span className='position-absolute top-0 end-0'>{data.time}</span>
                                                    </div>
                                                    <span className="e-list-content text-wrap pt-2 text-truncate w-100" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{data.message}</span>
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
