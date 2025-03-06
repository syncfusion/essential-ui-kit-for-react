'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

export default function List1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});  

    const [data, setdata] = useState([
        {
            id: 1,
            name: 'Sarah Lee',
            header: 'Finalize Project Plan',
            content: 'Refine the project plan to ensure all phases are outlined clearly.',
            date: new Date(2024, 2, 15),
            completed: true
        },
        {
            id: 2,
            name: 'Alex Carter',
            header: 'Prepare Budget Report',
            content: 'Compile and review the budget report for stakeholder presentation.',
            date: new Date(2024, 3, 10),
            completed: true
        },
        {
            id: 3,
            name: 'Emily Brown',
            header: 'Schedule Team Meeting',
            content: 'Organize a meeting to discuss milestones and next steps for the project.',
            date: new Date(2024, 3, 18),
            completed: false
        },
        {
            id: 4,
            name: 'Michael Green',
            header: 'Client Feedback Review',
            content: 'Review the feedback provided by the client and identify actionable items.',
            date: new Date(2024, 3, 22),
            completed: false
        },
        {
            id: 5,
            name: 'David Smith',
            header: 'Update Documentation',
            content: 'Ensure all project documentation is up-to-date and accessible for the team.',
            date: new Date(2024, 3, 29),
            completed: false
        }
    ]);

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
    }; 

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '544px' });
    };
       
    const toggleItemCompletion = (id: number): void => {
        setdata((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };    

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-1' && blockData.theme) {
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
                            <div className="lg:max-w-xl w-full m-auto p-4 md:p-6 lg:p-8">
                                <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                    <div className="e-list-wrapper border-b border-gray-200 dark:border-gray-600 !px-1 sm:!px-3 !py-4 flex items-start">
                                        <CheckBoxComponent cssClass="pt-1" checked={data.completed} onChange={() => toggleItemCompletion(data.id)}></CheckBoxComponent>
                                        <div className="ml-3">
                                            <span className={`${data.completed ? "line-through text-gray-700 dark:text-gray-200" : "text-gray-900 dark:text-white"} e-list-item-header font-medium text-sm`}>{data.header}</span>
                                            {data.id === 3 && (
                                                <span className="e-badge e-badge-pill e-badge-success ml-2 !px-2">New</span>
                                            )}
                                            <span className="text-xs text-gray-700 dark:text-gray-200 pt-1 !text-wrap !line-clamp-1 w-full truncate">{data.content}</span>
                                            <span className="flex items-center space-x-4 mt-2">
                                                <span className="flex items-center space-x-2">
                                                    <span className="e-icons e-day text-xs"></span>
                                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{data.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                                                </span>
                                                <span className="flex items-center space-x-2">
                                                    <span className="e-icons e-user text-xs"></span>
                                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{data.name}</span>
                                                </span>
                                            </span>
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
                                    <div className="e-list-wrapper px-1 px-sm-2 py-3 d-flex align-items-start">
                                        <CheckBoxComponent cssClass="e-bigger pt-1" checked={data.completed} onChange={() => toggleItemCompletion(data.id)}></CheckBoxComponent>
                                        <div className="ms-2 ps-1 d-flex flex-column w-100">
                                            <span>
                                                <span className={`${data.completed ? "text-decoration-line-through" : ""} e-list-item-header fw-medium`}>{data.header}</span>
                                                {data.id === 3 && (
                                                    <span className="e-badge e-badge-pill e-badge-success ms-2 px-2">New</span>
                                                )}
                                            </span>
                                            <span className="mb-0 small pt-1 text-wrap overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{data.content}</span>
                                            <span className="d-flex align-items-center mt-2">
                                                <span className="d-flex align-items-center me-3 gap-2">
                                                    <span className="e-icons e-day"></span>
                                                    <span className="fw-medium small e-inherit">{data.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                </span>
                                                <span className="d-flex align-items-center gap-2">
                                                    <span className="e-icons e-user"></span>
                                                    <span className="fw-medium small e-inherit">{data.name}</span>
                                                </span>
                                            </span>
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
