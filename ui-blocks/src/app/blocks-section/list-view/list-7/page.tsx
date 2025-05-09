'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function List7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const notifications: any[] = [
        {
            id: "1",
            name: "Kristina",
            date: "02:25 PM on 29, July 2024",
            type: "sent you a photo",
            image: "avatar-10.jpg",
            letter: "",
            tag: ""
        },
        {
            id: "2",
            name: "Report created successfully",
            date: "02:25 PM on 29, July 2024",
            letter: "PM",
            tag: "report",
            type: "",
            image: ""
        },
        {
            id: "3",
            name: "Alex Johnson",
            date: "02:25 PM on 29, July 2024",
            type: "sent you a photo",
            image: "avatar-4.jpg",
            letter: "",
            tag: ""
        },
        {
            id: "4",
            name: "Reminder: Employee Welfare Meeting today!",
            date: "02:25 PM on 29, July 2024",
            letter: "HR",
            tag: "remainder",
            type: "",
            image: ""
        },
        {
            id: "5",
            name: "Floyd Miles",
            date: "02:25 PM on 29, July 2024",
            type: "sent you a photo",
            image: "avatar-6.jpg",
            letter: "",
            tag: ""
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
                if (blockData.name === 'list-7' && blockData.theme) {
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
                            <div className="max-w-none lg:max-w-2xl w-full m-auto p-2 md:py-8 lg:px-14">
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={notifications} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line border-b border-gray-200 dark:border-gray-600 !pt-5 !pb-6 !px-1 sm:!px-3">
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                {data.letter ? (
                                                    <span className={`e-avatar e-avatar-large shrink-0 !text-base ${data.tag === "report" ? "bg-indigo-100 text-indigo-600" : "bg-orange-100 text-orange-700"}`}>{data.letter}</span>
                                                ) : (
                                                    <span className="e-avatar e-avatar-large shrink-0">
                                                        <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} width={48} height={48} alt="profile picture" />
                                                    </span>
                                                )}
                                                <span className="ml-3">
                                                    <div className="flex">
                                                        <span className="e-list-item-header !text-base !font-medium flex items-center !text-wrap">{data.name}</span>
                                                        {data.type && <span className="pl-1 text-sm font-normal flex items-center text-gray-700 dark:text-gray-200">{data.type}</span>}
                                                    </div>
                                                    <span className="e-list-content !text-gray-700 dark:!text-gray-200 !pt-1">{data.date}</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <ButtonComponent cssClass="e-icons e-more-horizontal-1 e-outline w-8 h-8 !flex items-center" type="button"></ButtonComponent>
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
                                <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={notifications} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line py-3 px-1 px-sm-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                {data.letter ? (
                                                    <span className={`e-avatar e-avatar-large fw-normal fs-5 flex-shrink-0 ${data.tag === "report" ? "bg-primary-subtle text-primary" : "bg-warning-subtle text-warning-emphasis"}`}>{data.letter}</span>
                                                ) : (
                                                    <span className="e-avatar e-avatar-large flex-shrink-0">
                                                        <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} width={48} height={48} alt="profile picture" />
                                                    </span>
                                                )}
                                                <span className="ms-3">
                                                    <div className="d-flex">
                                                        <span className="e-list-item-header fs-6 fw-medium d-flex align-items-center text-wrap">{data.name}</span>
                                                        {data.type && <span className="ps-1 fw-normal d-flex align-items-center text-nowrap">{data.type}</span>}
                                                    </div>
                                                    <span className="e-list-content">{data.date}</span>
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <ButtonComponent cssClass="e-icons e-more-horizontal-1 e-outline d-flex align-items-center py-2" type="button"></ButtonComponent>
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
