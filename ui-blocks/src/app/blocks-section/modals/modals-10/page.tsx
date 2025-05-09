'use client';

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { SidebarComponent, SidebarType, EventArgs } from "@syncfusion/ej2-react-navigations";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { ButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { MessageComponent } from "@syncfusion/ej2-react-notifications";
import styles from "./page.module.css";

export default function Modals10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);
    const sidebar = useRef<SidebarComponent>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [backDrop, setBackDrop] = useState(false);
    const [sidebarType, setSidebarType] = useState<SidebarType>("Auto");

    const navigationMenu: any[] = [
        { categoryName: "Account Settings", field: "My Account", fontIcon: "e-user" },
        { categoryName: "Account Settings", field: "Subscription", fontIcon: "sf-icon-star-02" },
        { categoryName: "General Preferences", field: "Appearance", fontIcon: "e-brightness" },
        { categoryName: "General Preferences", field: "Advanced", fontIcon: "e-adjustment" },
        { categoryName: "General Preferences", field: "About", fontIcon: "e-circle-info" },
    ];

    const checkWindowSize = () => {
        const mobile = window.innerWidth <= 640;
        setIsMobile(mobile);
        setBackDrop(mobile);
        setSidebarType(mobile ? "Over" : "Auto");

        if (!mobile) {
            const element = document.querySelector('.e-sidebar-overlay');
            if (element) {
                element.remove();
            }
        }

        dialog.current?.show(mobile);
    };

    const onSidebarClose = (args: EventArgs) => {
        if(!isMobile){
            args.cancel = true;
        }
    }

    /* SB Code - Start */
    const refreshDialog = (timeout: number) => {
        setTimeout(() => {
            dialog.current?.show(window.innerWidth <= 640);
        }, timeout);
    };

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-10' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshDialog(200);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener("message", handleMessageEvent);
        /* SB Code - End */
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener("message", handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: "665px" }}>
                            <ButtonComponent className="h-fit my-5" onClick={() => dialog.current?.show()} type="button">Account Settings</ButtonComponent>
                            <DialogComponent ref={dialog} key={"modal-1-tw"} id={styles["dialog"]} className="rounded-none sm:rounded-lg overflow-hidden sm:m-4" target="#dialog-container" isModal={true} width="788px" height="565px" open={(e) => { e.preventFocus = true; }}>
                                <div className="flex h-full">
                                    <div className="shrink-0 relative">
                                        <SidebarComponent ref={sidebar} className="!border-r !border-gray-200 dark:!border-gray-600 bg-gray-50 dark:bg-gray-700" target="#sidebar-container" width="256px" closeOnDocumentClick={true} showBackdrop={backDrop} type={sidebarType} close={onSidebarClose}>
                                            <div className="flex gap-3 items-center p-4">
                                                <span className="e-avatar e-avatar-circle bg-primary-600 text-white dark:text-black dark:bg-primary-400 shrink-0">MJ</span>
                                                <div>
                                                    <p className="text-base font-semibold mb-0.5">Mark Johnson</p>
                                                    <p className="text-xs leading-normal text-gray-700 dark:text-gray-200">markjohnson@example.com</p>
                                                </div>
                                            </div>
                                            <ListViewComponent className="!border-0" cssClass="e-list-template" dataSource={navigationMenu} fields={{ groupBy: 'categoryName', text: 'field', iconCss: 'fontIcon' }}
                                                groupTemplate={(data: any) =>
                                                    <p className="text-base text-gray-700 dark:text-gray-200 px-1 py-1.5">{data.items[0].categoryName}</p>
                                                }
                                                template={(data: any) =>
                                                    <div className="e-list-wrapper e-list-multi-line flex gap-3 items-center !px-4 !py-3">
                                                        <span className={`e-icons ${data.fontIcon} text-xl leading-none`}></span>
                                                        <span className="text-base">{data.field}</span>
                                                    </div>
                                                }
                                            ></ListViewComponent>
                                        </SidebarComponent>
                                    </div>
                                    <div id="sidebar-container">
                                        <div className="h-full">
                                            <div className="flex justify-between p-4 border-b dark:border-gray-600">
                                                <div className="flex gap-3">
                                                    <ButtonComponent cssClass="e-icons e-menu sm:hidden" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                                                    <h3 className="text-base font-semibold">My Account</h3>
                                                </div>
                                                <ButtonComponent cssClass="e-flat e-small !leading-none" iconCss="e-icons e-close" onClick={() => dialog.current?.hide()} type="button"></ButtonComponent>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex flex-col gap-1 mb-4 sm:mb-3">
                                                    <label className="text-xs font-medium text-gray-700 dark:text-gray-200">Full Name <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                                                        <TextBoxComponent className="grow" type="text" placeholder="Enter your full name"></TextBoxComponent>
                                                        <ButtonComponent className="w-fit" type="button" disabled={true}>Change</ButtonComponent>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1 mb-4">
                                                    <label className="text-xs font-medium text-gray-700 dark:text-gray-200">Email <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                                                        <TextBoxComponent className="grow" type="email" placeholder="Enter a valid email address"></TextBoxComponent>
                                                        <ButtonComponent className="w-fit" type="button" disabled={true}>Change</ButtonComponent>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between gap-1 text-sm text-gray-700 dark:text-gray-200 border-t dark:border-gray-600 py-4">
                                                    <div>
                                                        <p className="font-semibold mb-1">Two Factor Authentication</p>
                                                        <p>Enable or disable two-factor authentication</p>
                                                    </div>
                                                    <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                </div>
                                                <div className="border-t py-4 dark:border-gray-600">
                                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Account Deletion</p>
                                                    <MessageComponent className="border-0 bg-transparent p-0" showIcon={false}>
                                                        <p className="text-gray-700 dark:text-gray-200 mb-4 sm:mb-3"><span className="font-medium text-red-600 dark:text-red-400">Warning: </span> Deleting your account will permanently delete all your documents. This action can't be undone.</p>
                                                        <ButtonComponent cssClass="e-danger e-outline" type="button">Delete Account</ButtonComponent>
                                                    </MessageComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-start" style={{ minHeight: '665px' }}>
                            <ButtonComponent className="mx-auto my-3 e-outline" type="button" onClick={() => dialog.current?.show()}>Account Settings</ButtonComponent>
                            <DialogComponent ref={dialog} key={"modal-1-bs"} id={styles["dialog"]} className="rounded-3 m-sm-2" target="#dialog-container" isModal={true} width="788px" height="565px" open={(e) => (e.preventFocus = true)}>
                                <div className="d-flex h-100">
                                    <div className="flex-shrink-0 position-relative">
                                        <SidebarComponent ref={sidebar} target="#sidebar-container" width="256px" closeOnDocumentClick={true} showBackdrop={backDrop} type={sidebarType} close={onSidebarClose}>
                                            <div className="d-flex gap-2 align-items-center p-3 pb-0">
                                                <span className="e-avatar e-avatar-circle bg-primary text-white fs-6 fw-normal">MJ</span>
                                                <div className="ms-1">
                                                    <p className="fs-6 fw-medium mb-0 text-body">Mark Johnson</p>
                                                    <p className="text-body-secondary mb-0">markjohnson@example.com</p>
                                                </div>
                                            </div>
                                            <ListViewComponent className="border-0" cssClass="e-list-template" dataSource={navigationMenu} fields={{ groupBy: 'categoryName', text: 'field', iconCss: 'fontIcon' }}
                                                groupTemplate={(data: any) => 
                                                    <p className="fw-normal text-body-secondary px-1 py-2 mb-0">{data.items[0].categoryName}</p>
                                                }
                                                template={(data: any) =>
                                                    <div className="e-list-wrapper e-list-multi-line d-flex gap-2 align-items-center px-3 py-2">
                                                        <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                        <span className="fw-normal fs-6 ms-1">{data.field}</span>
                                                    </div>
                                                }
                                            ></ListViewComponent>
                                        </SidebarComponent>
                                    </div>
                                    <div id="sidebar-container" className="flex-grow-1">
                                        <div className="h-100">
                                            <div className="d-flex justify-content-between p-3 border-bottom">
                                                <div className="d-flex gap-3">
                                                    <ButtonComponent cssClass="e-icons e-menu d-sm-none" onClick={() => sidebar.current?.show()} type="button"></ButtonComponent>
                                                    <h3 className="fs-6 fw-bold mb-0 text-body">My Account</h3>
                                                </div>
                                                <ButtonComponent cssClass="e-flat e-small" iconCss="e-icons e-close" onClick={() => dialog.current?.hide()} type="button"></ButtonComponent>
                                            </div>
                                            <div className="p-3">
                                                <div className="d-flex flex-column gap-1 mb-2">
                                                    <label className="small text-body-secondary">Full Name <span className="text-danger">*</span></label>
                                                    <div className="d-flex flex-column flex-sm-row align-items-start gap-2">
                                                        <TextBoxComponent className="w-100" type="text" placeholder="Enter your full name"></TextBoxComponent>
                                                        <ButtonComponent className="mt-1 mt-sm-0 ms-sm-1 ms-md-0" type="button" disabled={true}>Change</ButtonComponent>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column gap-1 mb-3 pt-2 pt-sm-1">
                                                    <label className="small text-body-secondary">Email <span className="text-danger">*</span></label>
                                                    <div className="d-flex flex-column flex-sm-row align-items-start gap-2">
                                                        <TextBoxComponent className="w-100" type="email" placeholder="Enter a valid email address"></TextBoxComponent>
                                                        <ButtonComponent className="mt-1 mt-sm-0 ms-sm-1 ms-md-0" type="button" disabled={true}>Change</ButtonComponent>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-sm-center text-body-secondary border-top py-3">
                                                    <div>
                                                        <p className="fw-bold mb-1">Two Factor Authentication</p>
                                                        <p className="mb-0">Enable or disable two-factor authentication</p>
                                                    </div>
                                                    <SwitchComponent style={{ width: '36px' }}></SwitchComponent>
                                                </div>
                                                <div className="border-top py-3">
                                                    <p className="fw-bold text-body-secondary mb-1">Account Deletion</p>
                                                    <MessageComponent className="border-0 bg-transparent p-0" showIcon={false}>
                                                        <p className="text-body-secondary mb-2"><span className="fw-medium text-danger">Warning: </span> Deleting your account will permanently delete all your documents. This action can't be undone.</p>
                                                        <ButtonComponent cssClass="e-danger e-outline" className="mt-2 mt-sm-1" type="button">Delete Account</ButtonComponent>
                                                    </MessageComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}
