'use client';

import { useEffect, useState, useRef } from 'react';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent, TabComponent, TabItemsDirective, TabItemDirective, OverflowMode } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import styles from './page.module.css';

export default function Notification6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [overflowMode, setOverflowMode] = useState<OverflowMode>('Popup');
    const [width, setWidth] = useState('540px');
    const tab = useRef<TabComponent | null>(null);
    const sidebarRef = useRef<SidebarComponent | null>(null);
    const listviewRef = useRef<ListViewComponent | null>(null);

    const ticketData: any[] = [
        {
            id: 98724,
            title: 'Resolution SLA Escalation',
            content: 'Due on Dec 16, 2024 10:58 AM (IST) for "Hover and selection color are inconsistent across all themes- Gantt".',
            avatar: 'JS',
            tag: 'warning',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'others'
        },
        {
            id: 98725,
            title: 'Reply Added',
            content: 'Tom Harris added a reply to "Can you suggest providing the icon shown when we drop as child in Tree Grid?".',
            avatar: 'MJ',
            tag: 'warning',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'focused'
        },
        {
            id: 98726,
            title: 'Ticket Assigned to You',
            content: 'Oliva Adams assigned "Can you suggest providing the icon shown when we drop as child in Tree Grid?" to you.',
            avatar: 'DC',
            tag: 'danger',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'others'
        },
        {
            id: 98727,
            title: 'Resolution SLA Escalation',
            content: 'Due on Dec 16, 2024 10:58 AM (IST) for "Hover and selection color are inconsistent across all themes- Gantt".',
            avatar: 'LR',
            tag: 'warning',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'others'
        },
        {
            id: 98728,
            title: 'Public Note Added',
            content: 'System Automation added a public note to "Review the Tailwind theme for File Manager team components".',
            avatar: 'DC',
            tag: 'danger',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'focused'
        }
    ];

    const tabCreated = (): void => {
        if (tab.current) {
            updateListView(tab.current?.selectedItem)
        }
    }

    const tabSelected = (): void => {
        if (tab.current) {
            updateListView(tab.current?.selectedItem);
        }
    }

    const updateListView = (index: number): void => {
        const headers = tab.current?.element.querySelectorAll('.e-tab-header .e-tab-text');
        const selectedText = headers?.[index]?.textContent?.split(' ')[0]?.trim().toLowerCase() ?? 'all';
        const filteredData = selectedText === 'all' ? ticketData : ticketData.filter((e) => e.category?.toLowerCase() === selectedText);

        if (listviewRef.current) {
            listviewRef.current.dataSource = filteredData;
            listviewRef.current.dataBind();
        }
    };

    const handleResize = (): void => {
        if (window.innerWidth < 640) {
            setOverflowMode('Popup');
            setWidth('100%');
        } else {
            setOverflowMode('Extended');
            setWidth('540px');
        }
        setTimeout(() => {
            tab.current?.refresh();
        }, 200);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-6' && blockData.theme) {
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
        handleResize();
        tab.current?.refresh();
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
                        <div id={styles["notification"]} style={{ height: '793px', width: width, float: 'right' }}>
                            <SidebarComponent key={"notification-6-tw"} ref={sidebarRef} className="flex flex-col bg-white dark:bg-gray-900" position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: 'block' }}>
                                <div className="flex-none bg-white dark:bg-gray-900">
                                    <div className="flex justify-between items-center px-3 py-2">
                                        <div className="flex items-center gap-1">
                                            <p className="text-base font-medium text-gray-900 dark:text-white">Notifications</p>
                                            <span className="e-bigger e-badge e-badge-warning ml-1">Beta</span>
                                            <ButtonComponent cssClass="e-round e-flat hidden sm:block ml-1" iconCss="e-icons e-refresh text-base" type="button"></ButtonComponent>
                                        </div>
                                        <div className="flex gap-1.5">
                                            <ButtonComponent cssClass="e-round e-flat font-semibold block sm:hidden" iconCss="e-icons e-more-vertical-2" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-round e-flat font-semibold hidden sm:block" iconCss="e-icons e-settings" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-round e-flat" iconCss="e-icons e-close" onClick={() => sidebarRef.current?.toggle()} type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <div id={styles["tab-container"]} className="mt-3">
                                        <TabComponent ref={tab} heightAdjustMode="Auto" overflowMode={overflowMode} created={tabCreated} selected={tabSelected}>
                                            <TabItemsDirective>
                                                <TabItemDirective header={{ text: 'All (1)' }}></TabItemDirective>
                                                <TabItemDirective header={{ text: 'Focused (1)' }}></TabItemDirective>
                                                <TabItemDirective header={{ text: 'Others' }}></TabItemDirective>
                                                <TabItemDirective header={{ text: '&commat; Mentioned' }}></TabItemDirective>
                                                <TabItemDirective header={{ text: 'Watching' }}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                        <div>
                                            <div className="flex justify-between p-3">
                                                <DropDownButtonComponent cssClass="e-flat" content="All Modules" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <div className="hidden sm:block">
                                                        <CheckBoxComponent label="Unread"></CheckBoxComponent>
                                                    </div>
                                                    <div className="border-e border-s hidden sm:block px-2 border-gray-200 dark:border-gray-600 leading-6">
                                                        <ButtonComponent cssClass="e-primary e-flat" content="Mark all as read" type="button"></ButtonComponent>
                                                    </div>
                                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-y-auto bg-white dark:bg-gray-900">
                                                <p className="text-sm text-gray-700 dark:text-gray-200 pl-4 sm:pl-6 pb-4 font-medium">Notification for the last 30 days</p>
                                            </div>
                                            <ListViewComponent ref={listviewRef} cssClass="!border-0" dataSource={ticketData}
                                                template={(data: any) => (
                                                    <div className="flex items-start gap-3 sm:gap-2 !p-4 !pr-13 sm:!px-6 sm:!pr-6 !py-3 border-b border-gray-200 dark:border-gray-600">
                                                        <span className={`e-avatar e-avatar-circle shrink-0 ${data.tag === 'warning' ? 'bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300' : data.tag === 'danger' ? 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300' : ''}`}>{data.avatar}</span>
                                                        <span className="flex flex-col items-start gap-2 sm:gap-1">
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">{data.title}</div>
                                                            <div className="text-sm">
                                                                <a className="text-primary-600 dark:text-primary-400">{'\u0023'}{data.id}</a>
                                                                <span className="text-gray-900 dark:text-white"> - {data.content}</span>
                                                            </div>
                                                            <span className="text-sm text-gray-500 dark:text-gray-400">{data.date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).replace(/(\d{4}),/, '$1')}</span>
                                                        </span>
                                                    </div>
                                                )}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
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
                        <div id={styles["notification"]} style={{ height: "765px", width: width, float: "right" }}>
                            <SidebarComponent key={"notification-6-bs"} ref={sidebarRef} className="bg-body d-flex flex-column border-0" position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: "block" }}>
                                <div className="flex-shrink-0">
                                    <div className="d-flex justify-content-between align-items-center px-3 py-2">
                                        <div className="d-flex align-items-center gap-1">
                                            <p className="fs-6 fw-medium text-body m-0">Notifications</p>
                                            <span className="e-bigger e-badge e-badge-warning ms-1">Beta</span>
                                            <ButtonComponent cssClass="e-round e-flat d-none d-sm-inline-block ms-1" iconCss="e-icons e-refresh fs-6" type="button"></ButtonComponent>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <ButtonComponent cssClass="e-round e-flat fw-semibold d-block d-sm-none" iconCss="e-icons e-more-vertical-2" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-round e-flat fw-semibold d-none d-sm-block" iconCss="e-icons e-settings" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-round e-flat" iconCss="e-icons e-close" onClick={() => sidebarRef.current?.toggle()} type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <div id={styles["tab-container"]} className="mt-2">
                                        <TabComponent ref={tab} heightAdjustMode="Auto" overflowMode={overflowMode} created={tabCreated} selected={tabSelected}>
                                            <TabItemsDirective>
                                                <TabItemDirective header={{ text: "All (1)" }}></TabItemDirective>
                                                <TabItemDirective header={{ text: "Focused (1)" }}></TabItemDirective>
                                                <TabItemDirective header={{ text: "Others" }}></TabItemDirective>
                                                <TabItemDirective header={{ text: "&commat; Mentioned" }}></TabItemDirective>
                                                <TabItemDirective header={{ text: "Watching" }}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                        <div>
                                            <div className="d-flex justify-content-between p-3 pe-2">
                                                <DropDownButtonComponent cssClass="e-flat" content="All Modules" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                <div className="d-flex flex-wrap align-items-center gap-2 text-secondary">
                                                    <div className="d-none d-sm-block">
                                                        <CheckBoxComponent label="Unread"></CheckBoxComponent>
                                                    </div>
                                                    <div className="border-start border-end d-none d-sm-block px-2">
                                                        <ButtonComponent cssClass="e-primary e-flat" content="Mark all as read" type="button"></ButtonComponent>
                                                    </div>
                                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-auto">
                                                <p className="text-body-secondary ps-3 pb-2 m-0 fw-medium">Notification for the last 30 days</p>
                                            </div>
                                            <ListViewComponent ref={listviewRef} id={styles["list-bs"]} cssClass="border-0 rounded-0" dataSource={ticketData}
                                                template={(data: any) => (
                                                    <div className="px-4 py-2 my-1 d-flex align-items-start gap-3 gap-sm-2">
                                                        <span className={`e-avatar e-avatar-circle flex-shrink-0 ${data.tag === 'warning' ? 'bg-warning-subtle text-warning-emphasis' : data.tag === 'danger' ? 'bg-danger-subtle text-danger' : ''}`}>{data.avatar}</span>
                                                        <span className="d-flex flex-column align-items-start gap-1 lh-base">
                                                            <div className="fw-medium">{data.title}</div>
                                                            <div>
                                                                <a className="fw-medium text-decoration-none">{'\u0023'}{data.id}</a>
                                                                <span> - {data.content}</span>
                                                            </div>
                                                            <span>{data.date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).replace(/(\d{4}),/, '$1')}</span>
                                                        </span>
                                                    </div>
                                                )}
                                            ></ListViewComponent>
                                        </div>
                                    </div>
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
