'use client';

import { useRef, useEffect, useState } from 'react';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Calendar5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const sidebar = useRef<SidebarComponent | null>(null);
    const [width, setWidth] = useState("310px");

    const handleResize = () => {
        setWidth(window.innerWidth < 540 ? '100%' : '310px');
    };

    const [data, setdata] = useState(
        [
            {
                id: 1,
                header: 'Read a book about UI',
                date: '09:00 AM - 11:00 AM',
                completed: true
            },
            {
                id: 2,
                header: 'Meeting with client',
                date: '12:00 AM - 12:30 PM',
                completed: true
            },
            {
                id: 3,
                header: 'Hangout with friends',
                date: '01:00 PM - 02:00 PM',
                completed: true
            },
            {
                id: 4,
                header: 'Coffee break',
                date: '04:00 PM - 04:30 PM',
                completed: false
            },
            {
                id: 5,
                header: 'Dinner with family',
                date: '08:00 PM - 09:00 PM',
                completed: false
            }
        ]);
        
    const handleCheckboxChange = (id: number) => {
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
                if (blockData.name === 'calendar-5' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    }
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);
        /* SB Code - End */
        window.addEventListener('resize', handleResize);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["calendar-todo-list"]} style={{ height: "752px", width: width, float: "right" }}>
                            <SidebarComponent className="w-full h-full flex flex-col bg-white dark:bg-gray-900" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: "block" }}>
                                <div className="flex-none border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900">
                                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">To-Do List</h2>
                                        <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" onClick={() => sidebar.current?.toggle()} content=" " type="button"></ButtonComponent>
                                    </div>
                                    <div className="p-4 flex justify-center">
                                        <CalendarComponent className="e-bigger shadow-none border-none"></CalendarComponent>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-y-auto bg-white dark:bg-gray-900">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white p-4 pt-6">Sep 22</p>
                                    <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={data} template={(data: any) => (
                                        <div className="flex px-4 py-2">
                                            <span>
                                                <CheckBoxComponent checked={data.completed} onChange={() => handleCheckboxChange(data.id)}></CheckBoxComponent>
                                            </span>
                                            <div className="ml-2.5">
                                                <p className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${data.completed ? "line-through" : ""}`}>{data.header}</p>
                                                <p className="mt-1 text-gray-500 dark:text-gray-400 text-xs">{data.date}</p>
                                            </div>
                                        </div>
                                    )}>
                                    </ListViewComponent>
                                </div>
                                <div className="flex-none px-3 py-2 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                                    <ButtonComponent className="e-primary e-flat text-xs" iconCss="e-icons e-plus" content="Create New" type="button"></ButtonComponent>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["calendar-todo-list"]} style={{ height: '778px', width: width, float: 'right' }}>
                            <SidebarComponent className="d-flex flex-column bg-body" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="bg-body">
                                    <div className="border-bottom flex-shrink-0 border-light-subtle">
                                        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom border-light-subtle">
                                            <h2 className="mb-0 fs-6 fw-bold text-body">To-Do List</h2>
                                            <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-close" onClick={() => sidebar.current?.hide()} content=" " type="button"></ButtonComponent>
                                        </div>
                                        <div className="pb-0 d-flex justify-content-center align-items-center">
                                            <CalendarComponent className="e-bigger shadow-none w-100 border-0"></CalendarComponent>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-auto">
                                        <p className="mb-0 fw-bold text-body-emphasis p-3 pt-4">Sep 22</p>
                                        <ListViewComponent className="border-0 py-1" cssClass="e-list-template" dataSource={data}
                                            template={(data: any) => (
                                                <div className="d-flex px-3 py-2">
                                                    <span>
                                                        <CheckBoxComponent checked={data.completed} onChange={() => handleCheckboxChange(data.id)}></CheckBoxComponent>
                                                    </span>
                                                    <div className="ms-2">
                                                        <p className={`mb-1 fw-medium text-body-emphasis ${data.completed ? "text-decoration-line-through" : ""}`}>{data.header}</p>
                                                        <p className="mt-1 mb-0 text-body-secondary">{data.date}</p>
                                                    </div>
                                                </div>
                                            )}>
                                        </ListViewComponent>
                                    </div>
                                    <div className="flex-shrink-0 px-3 py-2 border-top border-light-subtle bg-body-tertiary">
                                        <ButtonComponent className="e-primary e-flat" content="Create New" iconCss="e-icons e-plus" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-left e-round" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
