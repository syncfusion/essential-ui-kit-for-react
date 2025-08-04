'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, ChipListComponent, ChipDirective, ChipsDirective } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function Notification3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isToggleState, setIsToggleState] = useState(false);
    const dialogRef = useRef<DialogComponent>(null);
    const buttonRef = useRef<ButtonComponent>(null);
    const dropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chatData = [
        {
            id: 1,
            initial: 'LG',
            sender: 'Lisa Green',
            colorTheme: 'Green',
            content: 'Hi, Rachael Lee',
            time: '9:46 AM'
        },
        {
            id: 2,
            initial: 'OA',
            sender: 'Oliva Adams',
            colorTheme: 'Orange',
            content: 'Hi, David Clark',
            time: '9:46 AM'
        },
        {
            id: 3,
            initial: 'SM',
            sender: 'Sophia Martinez',
            colorTheme: 'Green',
            content: 'Hi, John wilson',
            time: '9:46 AM'
        },
        {
            id: 4,
            initial: 'TH',
            sender: 'Tom Harris',
            colorTheme: 'Red',
            content: 'Hi, Oliva Adams',
            time: '9:46 AM'
        },
        {
            id: 5,
            initial: 'SM',
            sender: 'Sophia Martinez',
            colorTheme: 'Green',
            content: 'Hi, Lucas Robinson',
            time: '9:46 AM'
        }
    ];

    const setDialogPosition = (event: any): void => {
        if (!buttonRef.current || !dialogRef.current) return;

        const position = buttonRef.current.element.getBoundingClientRect();
        const isMobileView = window.innerWidth < 400;
        dialogRef.current.width = isMobileView ? 328 : 448;
        dialogRef.current.position = { X: position.x - (dialogRef.current.width - 32), Y: position.y + 37 };

        if (dropdownRef.current && dropdownRef.current.element?.classList.contains('e-active')) {
            dropdownRef.current.toggle();
        }
        
        event.preventFocus = true;
    };

    const toggleDialog = (): void => {
        if (dialogRef.current) {
            if (isToggleState) {
                dialogRef.current.hide();
            } else {
                dialogRef.current.show();
            }
            setIsToggleState(!isToggleState);
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-3' && blockData.theme) {
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
        window.addEventListener('resize', setDialogPosition);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', setDialogPosition);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div className="relative h-screen mx-auto" style={{ maxWidth: '480px' }}>
                            <div key={"notification-3-tw"} className="w-full flex justify-end p-4" style={{ minHeight: '730px' }}>
                                <div className="relative w-8 h-8">
                                    <ButtonComponent ref={buttonRef} cssClass="e-outline e-round" iconCss="sf-icon-notification-bell-02" type="button" onClick={toggleDialog}></ButtonComponent>
                                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle mt-1 mr-2">4</span>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles["notification"]} cssClass="!bg-white dark:!bg-gray-800 rounded-lg overflow-hidden !border" width="443px" open={setDialogPosition}>
                                    <div className="flex justify-between items-center p-4 md:py-2.5">
                                        <div className="flex items-center gap-2 h-6">
                                            <span className="e-icons e-arrow-left !text-2xl !text-gray-500 dark:!text-gray-300"></span>
                                            <h1 className="text-base md:text-lg text-gray-900 dark:text-white font-medium">Notifications</h1>
                                        </div>
                                        <DropDownButtonComponent ref={dropdownRef} cssClass="e-flat e-small e-caret-hide" iconCss="e-icons e-more-vertical-1" items={[{ text: 'Mark all as read', iconCss: 'e-icons e-link' }, { text: 'Notification settings', iconCss: 'e-icons e-settings' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                    <TabComponent>
                                        <TabItemsDirective>
                                            <TabItemDirective
                                                header={{ text: 'Messages' }}
                                                content={() => (
                                                    <div>
                                                        <div className="px-3 py-2 mt-2 border-b border-gray-200 dark:border-gray-600">
                                                            <ChipListComponent className="flex items-center gap-2" selection="Single" selectedChips={[0]}>
                                                                <ChipsDirective>
                                                                    <ChipDirective cssClass="e-outline !rounded !m-0" text="All"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline !rounded !m-0" text="Unread"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline !rounded !m-0" text="@mentions"></ChipDirective>
                                                                </ChipsDirective>
                                                            </ChipListComponent>
                                                        </div>
                                                        <div className="p-3 sm:py-2">
                                                            <p className="text-sm md:text-xs font-medium text-gray-900 dark:text-white">Important</p>
                                                        </div>
                                                        <ListViewComponent cssClass="border-0" dataSource={chatData} height={445}
                                                            template={(data: any) => (
                                                                <div className="flex gap-2 py-3 px-4 sm:px-3 border-b border-gray-200 dark:border-gray-600">
                                                                    <div className="shrink-0">
                                                                        <span className={`e-avatar e-avatar-circle ${data.colorTheme === 'Red' ? '!bg-red-100 dark:!bg-red-800 !text-red-700 dark:!text-red-400' : data.colorTheme === 'Green' ? '!bg-green-100 dark:!bg-green-800 !text-green-700 dark:!text-green-500' : data.colorTheme === 'Blue' ? '!bg-cyan-100 dark:!bg-cyan-800 !text-cyan-700 dark:!text-cyan-600' : data.colorTheme === 'Orange' ? '!bg-orange-100 dark:!bg-orange-800 !text-orange-700 dark:!text-orange-500' : ''}`}>{data.initial}</span>
                                                                    </div>
                                                                    <div className="w-full flex justify-between">
                                                                        <div className="flex flex-col gap-0.5 text-sm text-gray-900 dark:text-white">
                                                                            <p><span className="font-medium">{data.sender}</span> messaged you</p>
                                                                            <p>{data.content}</p>
                                                                            <p>In chat with you.</p>
                                                                        </div>
                                                                        <p className="text-xs text-gray-500 dark:text-gray-400 text-end w-14 shrink-0">{data.time}</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        ></ListViewComponent>
                                                    </div>
                                                )}
                                            ></TabItemDirective>
                                            <TabItemDirective header={{ text: 'Calls' }} content={() => <div className="text-center py-6" style={{minHeight: '340px'}}>No record found.</div>}></TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </DialogComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="position-relative vh-100 mx-auto" style={{ maxWidth: '480px' }}>
                            <div key={"notification-3-bs"} className="w-100 d-flex justify-content-end p-3" style={{ minHeight: '830px' }}>
                                <div className="position-relative" style={{width: '32px',height: '32px'}}>
                                    <ButtonComponent ref={buttonRef} cssClass="e-outline e-round" iconCss="sf-icon-notification-bell-02" type="button" onClick={toggleDialog}></ButtonComponent>
                                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle mt-1 me-2">4</span>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles["notification"]} cssClass="bg-body rounded overflow-hidden border" width="443px" open={setDialogPosition}>
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="e-icons e-arrow-left fs-5 text-body-secondary"></span>
                                            <h1 className="fs-6 text-body fw-medium m-0">Notifications</h1>
                                        </div>
                                        <DropDownButtonComponent ref={dropdownRef} cssClass="e-flat e-small e-caret-hide e-inherit" iconCss="e-icons e-more-vertical-1" items={[{ text: 'Mark all as read', iconCss: 'e-icons e-link' }, { text: 'Notification settings', iconCss: 'e-icons e-settings' }]} type="button"></DropDownButtonComponent>
                                    </div>
                                    <TabComponent cssClass="mt-3">
                                        <TabItemsDirective>
                                            <TabItemDirective
                                                header={{ text: 'Messages' }}
                                                content={() => (
                                                    <div>
                                                        <div className="gap-2 px-3 py-2 mt-3">
                                                            <ChipListComponent className="d-flex align-items-center gap-2" selection="Single" selectedChips={[0]}>
                                                                <ChipsDirective>
                                                                    <ChipDirective cssClass="e-outline rounded m-0" text="All"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline rounded m-0" text="Unread"></ChipDirective>
                                                                    <ChipDirective cssClass="e-outline rounded m-0" text="@mentions"></ChipDirective>
                                                                </ChipsDirective>
                                                            </ChipListComponent>
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <p className="small fw-medium text-body m-0">Important</p>
                                                        </div>
                                                        <ListViewComponent cssClass="border-0 rounded-0" dataSource={chatData} height={520}
                                                            template={(data: any) => (
                                                                <div className="d-flex gap-2 p-3">
                                                                    <div className="flex-shrink-0">
                                                                        <span className={`e-avatar e-avatar-circle ${data.colorTheme === 'Red' ? 'bg-danger-subtle text-danger' : data.colorTheme === 'Green' ? 'bg-success-subtle text-success' : data.colorTheme === 'Blue' ? 'bg-info-subtle text-info' : data.colorTheme === 'Orange' ? 'bg-warning-subtle text-warning' : ''}`}>{data.initial}</span>
                                                                    </div>
                                                                    <div className="w-100 d-flex justify-content-between">
                                                                        <div className="d-flex flex-column gap-1 lh-base">
                                                                            <p className="m-0"><span className="fw-medium">{data.sender}</span> messaged you</p>
                                                                            <p className="m-0">{data.content}</p>
                                                                            <p className="m-0">In chat with you.</p>
                                                                        </div>
                                                                        <p className="small text-end flex-shrink-0 m-0">{data.time}</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        ></ListViewComponent>
                                                    </div>
                                                )}
                                            ></TabItemDirective>
                                            <TabItemDirective header={{ text: 'Calls' }} content={() => <div className="text-center py-4" style={{minHeight: '340px'}}>No record found.</div>}></TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </DialogComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
