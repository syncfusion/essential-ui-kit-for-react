'use client';

import { useEffect, useState } from 'react';
import { AppBarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent, CheckBoxComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function TileView1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const ticketDetails: any[] = [
        {
            ticketId: 98724,
            dueDate: new Date(2024, 7, 15),
            createdTime: 'Creates 3 hrs ago',
            title: 'Update payment gateway integration',
            category: 'Development',
            requester: 'Emma Thompson',
            assignee: 'Michael Chen',
            status: 'Open',
            priorityLevel: 'High',
            commentCount: 0
        },
        {
            ticketId: 98725,
            dueDate: new Date(2024, 8, 30),
            createdTime: 'Creates 5 hrs ago',
            title: 'Create onboarding email sequence',
            category: 'Marketing',
            requester: 'Sophie Martin',
            assignee: 'Alex Johnson',
            status: 'In-progress',
            priorityLevel: 'Medium',
            commentCount: 5
        },
        {
            ticketId: 98726,
            dueDate: new Date(2024, 7, 10),
            createdTime: 'Creates 1 day ago',
            title: 'Fix mobile responsiveness issues',
            category: 'UX/UI Design',
            requester: 'David Lee',
            assignee: 'Emily Wang',
            status: 'Open',
            priorityLevel: 'High',
            commentCount: 0
        },
        {
            ticketId: 98727,
            dueDate: new Date(2024, 7, 5),
            createdTime: 'Creates 2 day ago',
            title: 'Implement two-factor authentication',
            category: 'Security',
            requester: 'Robert Brown',
            assignee: 'Sarah Davis',
            status: 'Closed',
            priorityLevel: 'Low',
            commentCount: 7
        }
    ];
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-1' && blockData.theme) {
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

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);
    
    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["ticket-details"]} key={"tile-1-tw"} className="h-screen sm:h-full">
                            <AppBarComponent className="shadow-none px-0" style={{ height: "54px" }}>
                                <div className="w-full px-4 md:px-6 xl:px-10">
                                    <span className="text-xl font-semibold text-gray-900 dark:text-gray-50">All Tickets</span>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent className="e-primary !hidden md:!block" iconCss="e-icons e-plus e-medium" content="Create Ticket" type="button"></ButtonComponent>
                                    <ButtonComponent className="e-primary !block md:!hidden" iconCss="e-icons e-plus e-medium" type="button"></ButtonComponent>
                                </div>
                            </AppBarComponent>
                            <div className="border-t border-gray-200 dark:border-gray-600">
                                <div className="xl:px-10 md:px-6 px-4 py-6 w-full">
                                    <div className="md:flex justify-between space-y-6 md:space-y-0">
                                        <div className="e-input-group md:w-72 w-full">
                                            <span className="e-input-group-icon e-icons e-search border-0"></span>
                                            <input className="e-input !pl-0" type="text" placeholder="Search Ticket ID" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center">
                                                <SwitchComponent cssClass="w-9" checked={true}></SwitchComponent>
                                                <span className="text-base md:text-sm text-gray-900 dark:text-gray-50 ml-2 md:mr-4">Show Closed Tickets</span>
                                            </span>
                                            <ButtonComponent className="!hidden md:!block" iconCss="e-icons e-filter e-medium" content="Filter" type="button"></ButtonComponent>
                                            <ButtonComponent className="e-icons e-filter e-medium !block md:!hidden" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <hr className="my-4 border-gray-200 dark:border-gray-600" />
                                    <ListViewComponent cssClass="e-list-template !border-0" dataSource={ticketDetails} template={(data: any) => (
                                        <div className="e-card">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header items-start md:items-center">
                                                    <div className="flex e-card-header-title mr-1">
                                                        <span><CheckBoxComponent></CheckBoxComponent></span>
                                                        <span className="text-base font-medium text-gray-900 dark:text-gray-50 ml-3">{data.title}</span>
                                                    </div>
                                                    <div className="e-card-sub-title flex items-center space-x-3 ml-auto">
                                                        <span className="e-small flex items-center">
                                                            <ButtonComponent cssClass="e-flat" iconCss="sf-icon-message-text-01 !text-base" content={data.commentCount || '0'} type="button"></ButtonComponent>
                                                        </span>
                                                        <span className="e-small">
                                                            <ButtonComponent cssClass="e-flat !text-base" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="e-card-content md:flex items-center flex-col md:flex-row ml-7">
                                                    <span className="text-sm text-gray-700 dark:text-gray-200">{'\u0023'}{data.ticketId}</span>
                                                    <span className="text-sm hidden md:block ml-6 text-gray-700 dark:text-gray-200">{data.category}</span>
                                                    <div className="md:flex hidden md:block ml-6 text-gray-700 dark:text-gray-200">
                                                        <span className="sf-icon-user-circle text-sm"></span>
                                                        <span className="ml-2 text-sm">Requester: {data.requester}</span>
                                                    </div>
                                                    <div className="flex mt-4 md:mt-0 ml-0 md:ml-6 text-gray-700 dark:text-gray-200">
                                                        <span className="sf-icon-clock-02 text-sm"></span>
                                                        <span className="pl-2 text-sm">{data.createdTime}</span>
                                                    </div>
                                                </div>
                                                <div className="e-card-separator"></div>
                                                <div className="e-card-actions !py-3 !flex">
                                                    <span className="e-small block md:hidden ml-3">
                                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-grid-view !text-base" type="button"></ButtonComponent>
                                                        <ButtonComponent cssClass="ml-9 e-flat" iconCss="sf-icon-calendar-check-01 !text-base" type="button"></ButtonComponent>
                                                    </span>
                                                    <span className="hidden md:block flex items-center">
                                                        <DropDownButtonComponent cssClass="e-flat mr-6" iconCss="e-icons e-grid-view !text-base" content={data.category} type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                        <DropDownButtonComponent cssClass="e-flat mr-6" content={data.assignee} type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                        <DropDownButtonComponent className="e-flat mr-6 !hidden lg:!inline-block" iconCss={`sf-icon-${data.priorityLevel === 'Medium' ? 'normal' : data.priorityLevel.toLowerCase()} !text-base`} cssClass={data.priorityLevel === 'Medium' ? 'e-success' : data.priorityLevel === 'High' ? 'e-danger' : data.priorityLevel === 'Low' ? 'e-info' : ''} content={data.priorityLevel} beforeOpen={(event) => { event.cancel = true; }} type="button"></DropDownButtonComponent>
                                                        <DropDownButtonComponent cssClass="e-flat" iconCss="sf-icon-calendar-check-01 !text-base" content={new Date(data.dueDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })} beforeOpen={(event) => { event.cancel = true; }}  type="button"></DropDownButtonComponent>
                                                    </span>
                                                    <DropDownButtonComponent className="w-32 ml-auto" cssClass={`${data.status === 'In-progress' ? 'e-info' : data.status === 'Open' ? 'e-primary' : data.status === 'Closed' ? 'e-success' : ''} e-outline`} content={data.status} beforeOpen={(event) => (event.cancel = true)} type="button"></DropDownButtonComponent>
                                                </div>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["ticket-details"]} key={"tile-1-bs"}>
                            <AppBarComponent className="shadow-none px-0" style={{ height: "56px" }}>
                                <div className="px-3 px-md-4 px-xl-5">
                                    <span className="h5 mb-0 fw-bold text-body">All Tickets</span>
                                    <div className="e-appbar-spacer"></div>
                                    <ButtonComponent cssClass="e-primary d-none d-md-block" iconCss="e-icons e-plus e-medium" content="Create Ticket" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary d-block d-md-none" iconCss="e-icons e-plus e-medium" type="button"></ButtonComponent>
                                </div>
                            </AppBarComponent>
                            <div className="border-top border-light-subtle">
                                <div className="p-3 px-md-4 px-xl-5">
                                    <div className="d-md-flex justify-content-between">
                                        <div className="col-12 col-md-4">
                                            <div className="e-input-group">
                                                <span className="e-input-group-icon e-icons e-search border-0"></span>
                                                <input className="e-input" type="text" placeholder="Search Ticket ID" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-3 mt-md-0">
                                            <span className="d-flex align-items-center">
                                                <SwitchComponent checked={true} style={{ width: '36px' }}></SwitchComponent>
                                                <span className="text-body ms-2 me-3 small">Show Closed Tickets</span>
                                            </span>
                                            <ButtonComponent className="d-none d-md-block e-outline" iconCss="e-icons e-filter e-medium" content="Filter" type="button"></ButtonComponent>
                                            <ButtonComponent className="e-outline d-block d-md-none" iconCss="e-icons e-filter e-medium" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <hr className="border-light-subtle opacity-100 my-4" />
                                    <ListViewComponent cssClass="e-list-template border-0" dataSource={ticketDetails} template={(data: any) => (
                                        <div className="e-card rounded-3">
                                            <div className="e-card-stacked">
                                                <div className="e-card-header d-flex flex-row pt-3 px-3 align-items-start align-items-sm-center">
                                                    <div className="d-flex e-card-header-title me-1">
                                                        <span><CheckBoxComponent></CheckBoxComponent></span>
                                                        <span className="fs-6 fw-medium text-body ms-2 ps-1 e-card-header-title">{data.title}</span>
                                                    </div>
                                                    <div className="e-card-sub-title d-flex align-items-center gap-3 ms-auto justify-content-end">
                                                        <span className="e-small d-flex align-items-center">
                                                            <ButtonComponent className="e-flat" iconCss="sf-icon-message-text-01 fs-6" content={data.commentCount || '0'} type="button"></ButtonComponent>
                                                        </span>
                                                        <span className="e-small">
                                                            <ButtonComponent className="e-flat py-1" iconCss="e-icons e-more-vertical-1 fs-6" type="button"></ButtonComponent>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="e-card-content d-md-flex ms-4 gap-sm-5 py-2 mb-1 px-3">
                                                    <span className="text-body-secondary">{'\u0023'}{data.ticketId}</span>
                                                    <span className="d-none d-md-block text-body-secondary">{data.category}</span>
                                                    <div className="d-md-flex d-none d-md-block align-items-center">
                                                        <span className="sf-icon-user-circle fs-6"></span>
                                                        <span className="ms-2 text-body-secondary">Requester: {data.requester}</span>
                                                    </div>
                                                    <div className="d-flex mt-3 mt-md-0 align-items-center">
                                                        <span className="sf-icon-clock-02 fs-6"></span>
                                                        <span className="ms-2 text-body-secondary">{data.createdTime}</span>
                                                    </div>
                                                </div>
                                                <div className="e-card-separator"></div>
                                                <div className="e-card-actions px-3 py-2 d-flex">
                                                    <span className="e-small d-block d-md-none ms-3">
                                                        <ButtonComponent className="e-flat" iconCss="e-icons e-grid-view fs-6" type="button"></ButtonComponent>
                                                        <ButtonComponent className="ms-5 e-flat" iconCss="sf-icon-calendar-check-01 fs-6" type="button"></ButtonComponent>
                                                    </span>
                                                    <span className="d-none d-md-flex align-items-center gap-4">
                                                        <DropDownButtonComponent className="e-flat" iconCss="e-icons e-grid-view fs-6" content={data.category} type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                        <DropDownButtonComponent className="e-flat" content={data.assignee} type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                        <DropDownButtonComponent className="e-flat d-none d-lg-inline-block" iconCss={`sf-icon-${data.priorityLevel === 'Medium' ? 'normal' : data.priorityLevel.toLowerCase()} fs-6`} cssClass={data.priorityLevel === 'Medium' ? 'e-success' : data.priorityLevel === 'High' ? 'e-danger' : data.priorityLevel === 'Low' ? 'e-info' : ''} content={data.priorityLevel} type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                        <DropDownButtonComponent className="e-flat" iconCss="sf-icon-calendar-check-01 fs-6" content={new Date(data.dueDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })} type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                    </span>
                                                    <DropDownButtonComponent className="ms-auto" cssClass={`${data.status === 'In-progress' ? 'e-info' : data.status === 'Open' ? 'e-primary' : data.status === 'Closed' ? 'e-success' : ''} e-outline`} content={data.status} type="button" beforeOpen={(event) => (event.cancel = true)} style={{ width: '114px' }}></DropDownButtonComponent>
                                                </div>
                                            </div>
                                        </div>)}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
