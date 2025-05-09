'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function List3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const messages: any[] = [
        {
            id: '1',
            name: 'Wade Warren',
            content: 'Hey team, I’ve updated the project timeline. Please review the new deadlines and provide feedback by tomorrow.',
            avatar: 'avatar-3.jpg',
            time: '5 min ago'
        },
        {
            id: '2',
            name: 'Albert Flores',
            content: 'The client has approved the initial design draft. Let’s move forward with the next phase of development.',
            avatar: 'avatar-4.jpg',
            time: '32 min ago'
        },
        {
            id: '3',
            name: 'Ralph Edwards',
            content: 'Reminder: Our weekly project sync is scheduled for 10 AM tomorrow. Please come prepared with your progress updates.',
            avatar: 'avatar-5.jpg',
            time: '45 min ago'
        },
        {
            id: '4',
            name: 'Annette Black',
            content: 'We’ve encountered an issue with the current build. I’ll need everyone’s input to troubleshoot and find a quick solution.',
            avatar: 'avatar-14.jpg',
            time: '48 min ago'
        },
        {
            id: '5',
            name: 'Kristin Watson',
            content: 'Great news! We’ve hit the project milestone ahead of schedule. Let’s keep this momentum going for the final phase.',
            avatar: 'avatar-13.jpg',
            time: '1 hr ago'
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
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-3' && blockData.theme) {
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
                            <div className="lg:max-w-2xl w-full m-auto p-2 md:p-6 lg:py-8 lg:px-14">
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={messages} template={(data: any) => (
                                    <div className="e-list-wrapper !px-1 sm:!px-3 border-b border-gray-200 dark:border-gray-600 !py-3 flex items-start">
                                        <span className="e-avatar e-avatar-circle shrink-0">
                                            <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar}`} width={40} height={40} alt="profile picture" />
                                        </span>
                                        <span className="ml-3 flex flex-col items-start">
                                            <div className="flex justify-between items-center">
                                                <span className="e-list-item-header text-base font-semibold text-gray-900 dark:text-white">{data.name}</span>
                                                <span className="e-badge e-badge-pill ml-2 !px-1.5 border border-gray-200 dark:border-gray-600 flex items-center">{data.time}</span>
                                            </div>
                                            <span className="!text-sm !text-gray-700 dark:!text-gray-200 !whitespace-normal !mt-1 !truncate w-full md:w-full !line-clamp-1">{data.content}</span>
                                            <span className="flex items-center space-x-4 mt-2">
                                                <ButtonComponent cssClass="e-flat e-lib" iconCss="e-icons sf-icon-message-circle-reply text-base" type="button" content="Reply"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat e-lib" iconCss="e-icons e-eye e-medium" type="button" content="Mark as read"></ButtonComponent>
                                            </span>
                                        </span>
                                        <span className="ml-auto">
                                            <ButtonComponent cssClass="e-icons e-medium e-more-horizontal-1 e-flat !px-2" type="button"></ButtonComponent>
                                        </span>
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
                            <div className="container-lg w-100 m-auto p-2 p-md-4" style={width}>
                                <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={messages} template={(data: any) => (
                                    <div className="e-list-wrapper px-1 px-sm-3 d-flex align-items-start w-100">
                                        <span className="e-avatar e-avatar-circle flex-shrink-0">
                                            <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar}`} width={40} height={40} alt="profile picture" />
                                        </span>
                                        <div className="ms-2 ps-1 d-flex flex-column flex-grow-1 align-items-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="e-list-item-header fs-6 fw-bold">{data.name}</span>
                                                <span className="e-badge e-badge-pill d-flex align-items-center ms-2 px-2 border border-light-subtle">{data.time}</span>
                                            </div>
                                            <span className="mt-1 text-wrap overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{data.content}</span>
                                            <span className="d-flex align-items-center gap-4 mt-2">
                                                <ButtonComponent cssClass="e-flat e-lib e-inherit" iconCss="e-icons sf-icon-message-circle-reply" type="button" content="Reply"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat e-lib e-inherit" iconCss="e-icons e-eye e-medium" type="button" content="Mark as read"></ButtonComponent>
                                            </span>
                                        </div>
                                        <ButtonComponent cssClass="e-icons e-medium e-more-horizontal-1 e-flat px-2" type="button"></ButtonComponent>
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
