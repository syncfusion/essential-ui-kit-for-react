'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

export default function List8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const chatMessages: any[] = [
        {
            id: 1,
            time: "12:00 PM",
            name: "Robert Darlen",
            message: "It was worth watching. I had the most fun out today.",
            image: "avatar-1.jpg",
            badge: "7",
            status: { isViewed: false }
        },
        {
            id: 2,
            time: "10:56 AM",
            name: "Arlene McCoy",
            message: "How many NPCs are there?",
            image: "avatar-8.jpg",
            badge: "",
            status: { isViewed: true, isUnRead: true }
        },
        {
            id: 3,
            time: "Yesterday",
            name: "Theresa Webb",
            message: "Same here! Work has been a whirlwind. I just got back from a project in Seattle. The coffee there is amazing!",
            image: "avatar-9.jpg",
            badge: "",
            status: { isViewed: false, isUnRead: true }
        },
        {
            id: 4,
            time: "24 Sep",
            name: "Kristina Watson",
            message: "Actually, I started taking a pottery class! It's so much fun. What about you?",
            image: "avatar-10.jpg",
            badge: "",
            status: { isViewed: false }
        },
        {
            id: 5,
            time: "22 Sep",
            name: "Floyd Miles",
            message: "Hey, Jamie! It's been ages! How have you been?",
            image: "avatar-4.jpg",
            badge: "",
            status: { isViewed: false, isUnRead: true }
        },
        {
            id: 6,
            time: "20 Sep",
            name: "Jane Cooper",
            message: "That sounds awesome! I've been getting into hiking. There's a great trail near my place.",
            image: "avatar-11.jpg",
            badge: "",
            status: { isViewed: true, isUnRead: true }
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
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-8' && blockData.theme) {
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
                            <div className="max-w-none lg:max-w-2xl w-full m-auto p-4 md:py-8 lg:px-14">
                                <div className="e-input-group e-bigger flex w-full">
                                    <span className="e-input-group-icon e-icons e-search !text-base"></span>
                                    <input className="e-input !pl-0" type="text" placeholder="People, chat, keywords" />
                                </div>
                                <ListViewComponent className="!border-0 mt-4" cssClass="e-list-template" dataSource={chatMessages} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line border-b border-gray-200 dark:border-gray-600 !py-4 !px-1 sm:!px-3">
                                        <div className="flex justify-between">
                                            <div className="flex items-center grow">
                                                <img className="e-avatar e-avatar-circle e-avatar-large shrink-0" src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} width={48} height={48} alt="profile picture" />
                                                <div className="ml-3 w-11/12">
                                                    <div className="flex justify-between w-full relative">
                                                        <span className="e-list-item-header flex items-center !text-base !font-medium !text-wrap !line-clamp-2 w-3/5 sm:w-4/5 truncate !text-gray-900 dark:!text-gray-200">{data.name}</span>
                                                        <span className={`absolute right-0 top-0 ${data.badge ? 'text-primary-600 dark:text-primary-400 m-0' : 'text-gray-500 m-0'}`}>{data.time}</span>
                                                    </div>
                                                    <div className="flex !pt-1">
                                                        {data.status.isUnRead && <span className={`sf-icon-double-check-01 text-base me-1 ${data.status.isViewed ? "text-primary-600 dark:text-primary-400" : "text-gray-500 dark:!text-gray-300"}`}></span>}
                                                        <span className="e-list-content !text-sm !text-gray-700 dark:!text-gray-200 !whitespace-normal !truncate w-full md:w-full !line-clamp-1">{data.message}</span>
                                                        <div className="flex justify-end">
                                                            {data.badge && <span className="e-badge e-badge-primary e-badge-pill">{data.badge}</span>}
                                                        </div>
                                                    </div>
                                                </div>
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
                                <div className="e-input-group e-bigger d-flex w-100">
                                    <span className="e-input-group-icon e-icons e-search border-0 !pr-3"></span>
                                    <input className="e-input ps-0" type="text" placeholder="People, chat, keywords" />
                                </div>
                                <ListViewComponent className="border-0 mt-2" cssClass="e-list-template" dataSource={chatMessages} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line py-3 px-1 px-sm-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex w-100">
                                                <img className="e-avatar e-avatar-circle e-avatar-large flex-shrink-0" src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} width={48} height={48} alt="profile picture" />
                                                <span className="ms-3 w-100">
                                                    <div className="d-flex justify-content-between position-relative">
                                                        <span className="e-list-item-header text-wrap fs-6 fw-medium text-truncate col-6 col-sm-12" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minWidth: "150px", maxWidth: "350px" }}>{data.name}</span>
                                                        <span className={`m-0 position-absolute top-0 end-0 ${data.badge ? 'text-info' : ''}`}>{data.time}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center pt-1">{data.status.isUnRead && (
                                                        <span className={`sf-icon-double-check-01 fs-6 me-1 mt-1 ${data.status.isViewed ? 'text-info' : 'text-secondary-subtle'}`}></span>)}
                                                        <span className="e-list-content text-wrap text-truncate w-100" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{data.message}</span>
                                                        <div className="d-flex justify-content-end">{data.badge &&
                                                            <span className="e-badge e-badge-info e-badge-pill d-flex align-items-center" style={{ padding: "0 10px" }}>{data.badge}</span>}
                                                        </div>
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
        }
    };

    return getContent();
}
