'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function Notification2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialogRef = useRef<DialogComponent>(null);
    const buttonRef = useRef<ButtonComponent>(null);
    const progressbarRef = useRef<ProgressBarComponent>(null);
    const isToggleRef = useRef(false);

    const notificationData: any[] = [
        {
            id: 1,
            avatar: 'avatar-2.jpg',
            sender: 'Lucas Robinson',
            content: 'Hey, can you check the latest documents posted in the group?',
            time: '1 day'
        },
        {
            id: 2,
            avatar: 'avatar-5.jpg',
            sender: 'David Clark',
            content: 'Hey, can you check the latest documents posted in the group?',
            time: '4 day'
        }
    ];

    const setDialogPosition = (event: any): void => {
        if (!buttonRef.current || !dialogRef.current) return;

        const position = buttonRef.current.element.getBoundingClientRect();
        const isMobileView = window.innerWidth < 400;
        dialogRef.current.width = isMobileView ? 328 : 448;
        dialogRef.current.position = { X: position.x - (dialogRef.current.width - 32), Y: position.y + 37 };

        setTimeout(() => {
            progressbarRef.current?.refresh();
        }, 200);
        event.preventFocus = true;
    };

    const toggleDialog = (): void => {
        if (dialogRef.current) {
            isToggleRef.current = !isToggleRef.current;
            if (isToggleRef.current) {
                dialogRef.current.hide();
            } else {
                dialogRef.current.show();
            }
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-2' && blockData.theme) {
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
                            <div key={"notification-2-tw"} className="w-full flex justify-end p-4" style={{ minHeight: '580px' }}>
                                <div className="relative w-8 h-8">
                                    <ButtonComponent ref={buttonRef} cssClass="e-outline e-round" iconCss="sf-icon-notification-bell-02" type="button" onClick={toggleDialog}></ButtonComponent>
                                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle mt-1 mr-2">4</span>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles["notification"]} className="!bg-white dark:!bg-gray-800 rounded-lg overflow-hidden !border" width="448px" created={() => dialogRef.current?.show()} open={setDialogPosition}
                                    header={() => (
                                        <div className="flex justify-between items-center p-4 md:py-2.5">
                                            <p className="text-base md:text-lg text-gray-900 dark:text-white font-medium">Notifications</p>
                                            <ButtonComponent cssClass="e-flat e-small" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                        </div>
                                    )}
                                    footerTemplate={() => (
                                        <div className="py-3 sm:py-2.5 flex justify-center bg-gray-200 dark:bg-gray-700">
                                            <ButtonComponent cssClass="e-outline e-primary border-0 !ml-0" content="View all notification" type="button"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                    <div className="flex gap-3 p-3 sm:p-3 sm:pr-6 border-b border-gray-200 dark:border-gray-600">
                                        <span className="e-icons e-file-document text-2xl !text-gray-500 dark:!text-gray-300"></span>
                                        <div className="flex flex-col gap-1 mt-0.5" style={{ width: 'calc(100% - 36px)' }}>
                                            <p className="font-semibold text-gray-900 dark:text-white leading-5">Uploading 'Image 123-Finalbatch.exe'</p>
                                            <p className="text-xs text-gray-900 dark:text-white">Please wait while we are uploading your file</p>
                                            <div className="pt-2.5 w-full">
                                                <ProgressBarComponent ref={progressbarRef} type="Linear" width="100%" height="2px" cornerRadius="Round" value={50} progressColor="#4F46E5" animation={{ enable: true, duration: 2000, delay: 0 }}></ProgressBarComponent>
                                                <p className="text-xs text-gray-900 dark:text-white ml-auto mt-1 mr-3 w-max">50% uploaded..</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <ButtonComponent cssClass="e-flat" content="Cancel" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-primary e-flat" content="Upload Another" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <ListViewComponent cssClass="border-0" dataSource={notificationData}
                                        template={(data: any) => (
                                            <div className="flex gap-2 p-4 sm:p-3 border-b border-gray-200 dark:border-gray-600">
                                                <div className="shrink-0">
                                                    {data.avatar && (<span className="e-avatar e-avatar-circle" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>)}
                                                </div>
                                                <div className="flex justify-between w-full">
                                                    <div className="flex flex-col gap-1 pr-3">
                                                        <p className="text-gray-900 dark:text-white font-medium">{data.sender}</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{data.content}</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-end w-10 shrink-0">{data.time}</p>
                                                </div>
                                            </div>
                                        )}
                                    ></ListViewComponent>
                                </DialogComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="position-relative vh-100 mx-auto" style={{ maxWidth: '480px' }}>
                            <div key={"notification-2-bs"} className="w-100 d-flex justify-content-end p-3" style={{ minHeight: '580px' }}>
                                <div className="position-relative" style={{width: '32px',height: '32px'}}>
                                    <ButtonComponent ref={buttonRef} cssClass="e-outline e-round" iconCss="sf-icon-notification-bell-02" type="button" onClick={toggleDialog}></ButtonComponent>
                                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle mt-1 me-2">4</span>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles["notification"]} className="bg-body rounded overflow-hidden border" width="448px" created={() => dialogRef.current?.show()} open={setDialogPosition}
                                    header={() => (
                                        <div className="d-flex justify-content-between align-items-center px-3 py-2 my-1 border-bottom border-light-subtle">
                                            <p className="text-body fs-5 lh-base fw-medium mb-0">Notifications</p>
                                            <ButtonComponent cssClass="e-flat e-small e-inherit" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                        </div>
                                    )}
                                    footerTemplate={() => (
                                        <div className="py-3 d-flex justify-content-center bg-body-tertiary">
                                            <ButtonComponent cssClass="e-outline e-primary border-0 ms-0" content="View all notification" type="button"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                    <div className="d-flex gap-2 p-3 p-sm-3 pe-sm-4 border-bottom">
                                        <span className="e-icons e-file-document fs-4 text-body-secondary"></span>
                                        <div className="d-flex flex-column gap-1" style={{ width: 'calc(100% - 36px)' }}>
                                            <p className="fw-semibold text-body m-0">Uploading 'Image 123-Finalbatch.exe'</p>
                                            <p className="small text-body-secondary m-0">Please wait while we are uploading your file</p>
                                            <div className="pt-2 w-100">
                                                <ProgressBarComponent ref={progressbarRef} type="Linear" width="100%" height="6px" cornerRadius="Round" trackThickness={6} progressThickness={6} value={50} progressColor="#0D6EFD" animation={{ enable: true, duration: 2000, delay: 0 }}></ProgressBarComponent>
                                                <p className="small ms-auto mt-1 me-3 mb-0 text-body-secondary" style={{ width: 'fit-content' }}>50% uploaded..</p>
                                            </div>
                                            <div className="d-flex gap-3">
                                                <ButtonComponent cssClass="e-flat" content="Cancel" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-primary e-flat" content="Upload Another" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <ListViewComponent cssClass="border-0 rounded-0" dataSource={notificationData}
                                        template={(data: any) => (
                                            <div className="d-flex gap-2 p-3">
                                                <div className="flex-shrink-0">
                                                    {data.avatar && (<span className="e-avatar e-avatar-circle" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})`}}></span>)}
                                                </div>
                                                <div className="d-flex justify-content-between w-100">
                                                    <div className="d-flex flex-column gap-1 pe-3">
                                                        <p className="fw-medium m-0">{data.sender}</p>
                                                        <p className="small m-0">{data.content}</p>
                                                    </div>
                                                    <p className="small text-end flex-shrink-0 m-0">{data.time}</p>
                                                </div>
                                            </div>
                                        )}
                                    ></ListViewComponent>
                                </DialogComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
