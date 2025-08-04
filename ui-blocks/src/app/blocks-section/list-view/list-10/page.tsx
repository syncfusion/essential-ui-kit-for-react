'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function List10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const data: any[] = [
        {
            id: 1,
            date: new Date("2024-10-05"),
            content: "Refactor primary components to align with system version 1.4.",
            image: "avatar-12.jpg",
            logo: "figma.png"
        },
        {
            id: 2,
            date: new Date("2024-10-18"),
            content: "Design and schedule the monthly newsletter in MailChimp to keep subscribers informed.",
            image: "avatar-14.jpg",
            logo: "mailchimp.png"
        },
        {
            id: 3,
            date: new Date("2024-10-25"),
            content: "Organize a team meeting in Microsoft Teams",
            image: "avatar-7.jpg",
            logo: "microsoft.png"
        },
        {
            id: 4,
            date: new Date("2024-11-08"),
            content: "Design a visually appealing promotional poster for an upcoming event or product launch using Adobe InDesign.",
            image: "avatar-4.jpg",
            logo: "adobe.png"
        },
        {
            id: 5,
            date: new Date("2024-12-15"),
            content: "Create and structure a collaborative document for your team to brainstorm ideas for an upcoming project",
            image: "avatar-13.jpg",
            logo: "google.png"
        }
    ];

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
    };

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '512px' });
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-10' && blockData.theme) {
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
                            <div className="max-w-none lg:max-w-2xl w-full m-auto p-4 md:py-8 lg:px-24">
                                <ListViewComponent key={"list-10-tw"} id={styles["task-list"]} className="!border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                    <div className="border border-gray-200 dark:border-gray-600 !py-4 px-4 my-4" style={{ borderRadius: '8px' }}>
                                        <div className="flex justify-between">
                                            <div className="flex w-full">
                                                <span className="shrink-0">
                                                    <img className="rounded-md" src={`/react/essential-ui-kit/blocks/assets/images/listview/task-management/${data.logo}`} width={48} height={48} alt="brand logo" />
                                                </span>
                                                <span className="ml-4 w-11/12">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <span className="e-list-item-header flex items-center !text-sm !font-medium !text-wrap !line-clamp-2 sm:!line-clamp-3 w-full truncate !text-gray-900 dark:!text-gray-200">{data.content}</span>
                                                            <span className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 w-44 mt-3 sm:mt-2 text-nowrap">
                                                                <span className="text-sm font-normal">Due Date</span>
                                                                <span className="text-sm font-normal e-icons e-day text-xl text-gray-700 dark:text-gray-200"></span>
                                                                <span className="text-sm font-normal pt-0.5 sm:pt-0">{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(data.date))}</span>
                                                            </span>
                                                        </div>
                                                        <span className="e-avatar e-avatar-circle shrink-0 ml-4">
                                                            <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} width={40} height={40} alt="brand logo" />
                                                        </span>
                                                    </div>
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
                            <div className="container-xl w-100 m-auto p-3 p-md-4" style={width}>
                                <ListViewComponent key={"list-10-bs"} id={styles["task-list"]} cssClass="e-list-template" dataSource={data} style={{ borderWidth: '0px' }} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line border px-2 px-sm-3 py-3 mt-3" style={{borderRadius: '8px'}}>
                                        <div className="d-flex justify-content-between">
                                            <span className="flex-shrink-0">
                                                <img className="rounded-2" src={`/react/essential-ui-kit/blocks/assets/images/listview/task-management/${data.logo}`} width={48} height={48} alt="brand logo" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <span className="e-list-item-header text-wrap fw-medium mx-3" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{data.content}</span>
                                                        <span className="d-flex align-items-center gap-2 ms-3 mt-2 text-nowrap">
                                                            <span>Due Date</span>
                                                            <span className="e-icons e-day text-xl"></span>
                                                            <span>{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(data.date))}</span>
                                                        </span>
                                                    </div>
                                                    <span className="e-avatar e-avatar-circle flex-shrink-0">
                                                        <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} width={40} height={40} alt="profile" />
                                                    </span>
                                                </div>
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
