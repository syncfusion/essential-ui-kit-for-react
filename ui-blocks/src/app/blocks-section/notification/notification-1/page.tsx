'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TabComponent, TabItemDirective, TabItemsDirective, SelectEventArgs } from "@syncfusion/ej2-react-navigations";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function Notification1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialogRef = useRef<DialogComponent>(null);
    const buttonRef = useRef<ButtonComponent>(null);
    const tabRef = useRef<TabComponent>(null);
    const listviewRef = useRef<ListViewComponent>(null);
    const toggleRef = useRef(false);

    const messageData: any = [
        {
            id: 1,
            avatar: 'avatar-8.jpg',
            initial: '',
            name: 'Jane Smith',
            content: 'wants to edit the Design System',
            time: '5 min ago',
            category: 'following'
        },
        {
            id: 2,
            avatar: 'avatar-5.jpg',
            initial: '',
            name: 'David Clark',
            content: 'added a file to Dark Mode',
            time: '1 hour ago',
            category: 'following'
        },
        {
            id: 3,
            avatar: '',
            initial: 'RL',
            colorTheme: 'Orange',
            name: 'Rachel Lee',
            content: 'finished created new component',
            time: '1:12 pm',
            category: 'archive'
        },
        {
            id: 4,
            avatar: '',
            initial: 'LG',
            colorTheme: 'Green',
            name: 'Lisa Green',
            content: 'mentioned you in Rewrite Button component',
            time: '1:52 pm',
            category: 'archive'
        }
    ];

    const setDialogPosition = (event: any) => {
        if (!buttonRef.current || !dialogRef.current) return;

        const position = buttonRef.current.element.getBoundingClientRect();
        const isMobileView = window.innerWidth < 400;
        dialogRef.current.width = isMobileView ? 328 : 448;
        dialogRef.current.position = { X: position.x - (dialogRef.current.width - 32), Y: position.y + 37 };
        tabRef.current?.refreshActiveTabBorder();
        event.preventFocus = true;
    };

    const onTabSelected = (args: SelectEventArgs): void => {
        args.previousItem?.querySelector(".e-badge")?.classList.remove("e-badge-primary");
        args.selectedItem?.querySelector(".e-badge")?.classList.add("e-badge-primary");

        const selectedText = args.selectedItem?.querySelector('.e-tab-text')?.firstElementChild?.firstElementChild?.children?.[0]?.textContent?.trim().toLowerCase() ?? 'all';
        const filteredData = selectedText === 'all' ? messageData : messageData.filter((e: any) => e.category === selectedText);
        if (listviewRef.current) {
            listviewRef.current.dataSource = filteredData;
            listviewRef.current.dataBind();
        }
    };

    const onTabCreated = (): void => {
        setTimeout(() => {
            const badge = tabRef.current?.element.querySelector(".e-toolbar-item.e-active")?.querySelector(".e-badge");
            if (badge) {
                badge.classList.add("e-badge-primary");
            }
        }, 50);
    };

    const toggleDialog = (): void => {
        if (dialogRef.current) {
            toggleRef.current = !toggleRef.current;
            if (toggleRef.current) {
                dialogRef.current.hide();
            } else {
                dialogRef.current.show();
            }
        }
    };
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-1' && blockData.theme) {
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
                            <div key={'notification-1-tw'} className="w-full flex justify-end p-4" style={{ minHeight: '680px' }}>
                                <div className="relative w-8 h-8">
                                    <ButtonComponent ref={buttonRef} cssClass="e-outline e-round" iconCss="sf-icon-notification-bell-02" type="button" onClick={toggleDialog}></ButtonComponent>
                                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle mt-1 mr-2">4</span>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles.notification} cssClass="!bg-white dark:!bg-gray-800 rounded-lg overflow-hidden !border" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                    header={() => (
                                        <div className="flex justify-between items-center p-4 md:px-3 md:py-2">
                                            <h1 className="text-base md:text-lg text-gray-900 dark:text-white font-medium">Notifications</h1>
                                            <div className="flex items-center gap-3">
                                                <ButtonComponent cssClass="e-flat e-small block sm:hidden" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat e-small e-round" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                        </div>
                                    )}
                                    footerTemplate={() => (
                                        <div className="py-3 sm:py-2.5 flex justify-center bg-gray-200 dark:bg-gray-700">
                                            <ButtonComponent cssClass="e-flat w-max !ml-0" content="View all notifications" type="button"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                    <div id={styles.tab} className="relative">
                                        <ButtonComponent cssClass="e-link !text-gray-700 dark:!text-white absolute right-3 top-1 z-50 hidden sm:block" content="Mark all as read" type="button"></ButtonComponent>
                                        <TabComponent ref={tabRef} created={onTabCreated} selected={onTabSelected} overflowMode={"Scrollable"}>
                                            <TabItemsDirective>
                                                <TabItemDirective
                                                    headerTemplate={() => (
                                                        <div className="flex items-center gap-2">
                                                            <p>All</p>
                                                            <span className="e-badge e-badge-circle">2</span>
                                                        </div>
                                                    )}
                                                ></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div><p>Following</p></div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div><p>Archive</p></div>}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                        <ListViewComponent ref={listviewRef} cssClass="border-0" dataSource={messageData}
                                            template={(data: any) => (
                                                <div className="flex gap-2 p-4 sm:p-3 sm:!pr-5 border-b border-gray-200 dark:border-gray-600">
                                                    <div className="shrink-0">
                                                        {data.avatar ? (
                                                            <span className="e-avatar e-avatar-circle" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>
                                                        ) : (
                                                            <span className={`e-avatar e-avatar-circle ${data.colorTheme === 'Green' ? '!bg-green-100 !text-green-700 dark:!text-green-500' : '!bg-orange-100 !text-orange-700 dark:!text-orange-500'}`}>{data.initial}</span>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-gray-900 dark:text-white"><span className="font-medium">{data.name}</span> {data.content.length > 36 ? `${data.content.slice(0, 36)}...` : data.content}</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{data.time}</p>
                                                        {(data.id === 1 || data.id === 2) && (
                                                            <div className="flex gap-4 items-center mt-1">
                                                                <ButtonComponent cssClass="e-primary" content="Accept" type="button"></ButtonComponent>
                                                                <ButtonComponent cssClass="e-outline" content="Deny" type="button"></ButtonComponent>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            >
                                            </ListViewComponent>
                                    </div>
                                </DialogComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="position-relative vh-100 mx-auto" style={{ maxWidth: '480px' }}>
                            <div key={'notification-1-bs'} className="w-100 d-flex justify-content-end p-3" style={{ minHeight: '680px' }}>
                                <div className="position-relative" style={{width: '32px',height: '32px'}}>
                                    <ButtonComponent ref={buttonRef} cssClass="e-outline e-round" iconCss="sf-icon-notification-bell-02" type="button" onClick={toggleDialog}></ButtonComponent>
                                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle mt-1 me-2">4</span>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles.notification} cssClass="bg-body rounded overflow-hidden border" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                    header={() => (
                                        <div className="d-flex justify-content-between align-items-center p-3">
                                            <h1 className="fs-5 text-body fw-medium m-0">Notifications</h1>
                                            <div className="d-flex align-items-center gap-3">
                                                <ButtonComponent cssClass="e-flat e-small d-block d-sm-none e-inherit" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-flat e-small e-round e-inherit" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                        </div>
                                    )}
                                    footerTemplate={() => (
                                        <div className="py-3 d-flex justify-content-center bg-body-tertiary">
                                            <ButtonComponent cssClass="e-outline w-auto ms-0" content="View all notifications" type="button"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                    <div className="position-relative mt-1">
                                        <ButtonComponent cssClass="e-link text-secondary position-absolute top-0 end-0 z-1 d-none d-sm-block me-2" content="Mark all as read" type="button"></ButtonComponent>
                                        <TabComponent ref={tabRef} created={onTabCreated} selected={onTabSelected} overflowMode={"Scrollable"}>
                                            <TabItemsDirective>
                                                <TabItemDirective
                                                    headerTemplate={() => (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <p className="mb-0">All</p>
                                                            <span className="e-badge e-badge-circle">2</span>
                                                        </div>
                                                    )}
                                                ></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div><p className="mb-0">Following</p></div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div><p className="mb-0">Archive</p></div>}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                        <ListViewComponent ref={listviewRef} cssClass="border-0 rounded-0" dataSource={messageData}
                                            template={(data: any) => (
                                                <div className="d-flex gap-2 p-3 pe-sm-4">
                                                    <div className="flex-shrink-0">
                                                        {data.avatar ? (
                                                            <span className="e-avatar e-avatar-circle" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>
                                                        ) : (
                                                            <span className={`e-avatar e-avatar-circle ${data.colorTheme === 'Green' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>{data.initial}</span>
                                                        )}
                                                    </div>
                                                    <div className="d-flex flex-column gap-1">
                                                        <p className="m-0"><span className="fw-medium">{data.name}</span> {data.content.length > 36 ? `${data.content.slice(0, 36)}...` : data.content}</p>
                                                        <p className="small m-0">{data.time}</p>
                                                        {(data.id === 1 || data.id === 2) && (
                                                            <div className="d-flex gap-2 align-items-center mt-1">
                                                                <ButtonComponent cssClass="e-primary" content="Accept" type="button"></ButtonComponent>
                                                                <ButtonComponent cssClass="e-outline e-inherit" content="Deny" type="button"></ButtonComponent>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        >
                                        </ListViewComponent>
                                    </div>
                                </DialogComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
