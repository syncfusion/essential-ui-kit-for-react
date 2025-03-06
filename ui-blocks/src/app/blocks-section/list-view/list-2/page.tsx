'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function List2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});
    const [selectedItem, setSelectedItem] = useState<string[]>([]);

    const data: any[] = [
        {
            id: '1',
            name: 'Esther Howard',
            content: 'New Product Launch: Get 20% Off!',
            subContent: 'Discover our latest product range and enjoy an exclusive discount for a limited time.',
            time: '02:13 PM',
            avatar: 'avatar-8.jpg',
            read: false
        },
        {
            id: '2',
            name: 'Jenny Wilson',
            content: 'Webinar Invite: Boost Your Sales in 2024',
            subContent: 'Join our free webinar and learn top strategies to enhance your marketing campaigns next year.',
            time: '03:15 PM',
            avatar: 'avatar-9.jpg',
            read: false
        },
        {
            id: '3',
            name: 'Eleanor Pena',
            content: 'Limited-Time Offer: Early Access to Premium Features',
            subContent: 'Be the first to try our premium marketing tools with this exclusive early access offer.',
            time: '03:25 PM',
            avatar: 'avatar-10.jpg',
            read: true
        },
        {
            id: '4',
            name: 'Brooklyn Simmons',
            content: 'Unlock Your Marketing Potential with Our New Toolkit',
            subContent: 'Discover how our comprehensive marketing toolkit can help you optimize campaigns and drive better results.',
            time: '04:00 PM',
            avatar: 'avatar-13.jpg',
            read: false
        },
        {
            id: '5',
            name: 'Jane Cooper',
            content: 'Special Event: Meet Us at Marketing Expo 2024',
            subContent: 'Don’t miss our booth at the Marketing Expo—get insights on the latest industry trends.',
            time: '04:14 PM',
            avatar: 'avatar-11.jpg',
            read: true
        },
        {
            id: '6',
            name: 'Floyd Miles',
            content: 'Case Study: How XYZ Company Increased ROI by 50%',
            subContent: 'Explore our latest case study on how targeted marketing helped boost ROI for a leading brand.',
            time: '06:12 PM',
            avatar: 'avatar-2.jpg',
            read: true
        }
    ];  

    const toggleSelectedItem = (id: string): void => {
        setSelectedItem((prevData) => 
            prevData.includes(id) ? prevData.filter(item => item !== id) : [...prevData, id]
        );
    };

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
                if (blockData.name === 'list-2' && blockData.theme) {
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
                        <div id={styles["inbox-list"]} className="flex items-center justify-center min-h-screen">
                            <div className="lg:max-w-2xl w-full m-auto p-4 md:p-6 lg:py-8 lg:px-14">
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                    <div className="e-list-wrapper flex items-start !px-1 sm:!px-3">
                                        <span className="flex items-center gap-4">
                                            <CheckBoxComponent cssClass="e-bigger hidden sm:block"></CheckBoxComponent>
                                            <span className="hidden sm:block">
                                                <a href="#" className={`flex items-center sf-icon-star-filled-01 text-base e-medium ${selectedItem.includes(data.id) ? "!text-orange-400" : "text-gray-400"}`} onClick={() => toggleSelectedItem(data.id)}></a>
                                            </span>
                                            <span className="e-avatar e-avatar-small e-avatar-circle">
                                                <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar}`} width={32} height={32} alt="profile picture" />
                                            </span>
                                        </span>
                                        <div className="ml-3 flex flex-col w-11/12">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`e-list-item-header text-base ${data.read ? 'text-gray-700 dark:text-gray-200' : 'font-semibold text-gray-900 dark:text-white'}`}>{data.name}</span>
                                                <span className={`text-xs ${data.read ? 'text-gray-700 dark:text-gray-200' : 'font-semibold text-gray-900 dark:text-white'}`}>{data.time}</span>
                                            </div>
                                            <span className={`!text-sm !text-wrap !line-clamp-1 w-full truncate ${data.read ? 'text-gray-700 dark:text-gray-200' : 'font-medium text-gray-900 dark:text-white'}`}>{data.content}</span>
                                            <span className="!text-sm !text-gray-700 dark:!text-gray-200 !whitespace-normal !mt-0.5 !truncate w-full !line-clamp-1">{data.subContent}</span>
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
                        <div id={styles["inbox-list"]} className="d-flex align-items-center justify-content-center min-vh-100">
                            <div className="container-lg w-100 m-auto p-3 p-md-4" style={width}>
                                <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                    <div className="e-list-wrapper d-flex align-items-start px-1 px-sm-3 py-2 w-100">
                                        <span className="d-flex align-items-center gap-3">
                                            <CheckBoxComponent cssClass="e-bigger d-none d-sm-inline-block"></CheckBoxComponent>
                                            <span className="d-none d-sm-inline-block">
                                                <a href="#" className={`text-secondary text-decoration-none d-flex align-items-center sf-icon-star-filled-01 fs-6 ${selectedItem.includes(data.id) ? 'text-warning' : 'text-secondary'}`} onClick={() => toggleSelectedItem(data.id)}></a>
                                            </span>
                                            <span className="e-avatar e-avatar-small e-avatar-circle">
                                                <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar}`} width={32} height={32} alt="profile picture" />
                                            </span>
                                        </span>
                                        <span className="ms-2 ps-1 flex-grow-1 w-75">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className={`e-list-item-header fs-6 ${data.read ? '' : 'fw-bold'}`}>{data.name}</span>
                                                <span className={`small ${data.read ? '' : 'fw-medium'}`}>{data.time}</span>
                                            </div>
                                            <div className="text-truncate" style={{ maxWidth: '580px' }}>
                                                <div className="text-truncate" style={{ minWidth: '100px', maxWidth: '580px' }}>
                                                    <span className={`mb-0 ${data.read ? '' : 'fw-medium'}`}>{data.content}</span>
                                                </div>
                                                <span className="mt-1 text-truncate col-4 col-sm-12">{data.subContent}</span>
                                            </div>
                                        </span>
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
