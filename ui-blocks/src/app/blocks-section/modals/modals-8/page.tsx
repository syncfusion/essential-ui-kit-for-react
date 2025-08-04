'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { TextBoxComponent, TextAreaComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import styles from './page.module.css';

export default function Modals8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);
    const uploaders = useRef<UploaderComponent>(null);

    const checkWindowSize = (): void => {
        const isMobile = window.innerWidth <= 640;
        dialog.current?.show(isMobile);
    };

    /* SB Code - Start */
    const refreshDialog = (timeout: number): void => {
        setTimeout(() => {
            dialog.current?.show(window.innerWidth <= 640);
        }, timeout);
    };

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-8' && blockData.theme) {
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
                        <div id="dialog-container" className="relative" style={{ minHeight: "750px" }}>
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="rounded-none sm:rounded-lg sm:m-4" target="#dialog-container" height="645px" beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="644px" isModal={true}
                                header={() => (
                                    <p className="font-semibold leading-normal">My Settings</p>
                                )}
                                footerTemplate={() =>
                                    <div className="flex justify-end gap-2 sm:gap-1 py-2">
                                        <ButtonComponent cssClass="w-1/2 sm:w-fit !ml-0" content="Discard" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-1/2 sm:w-fit" content="Save Changes" type="button"></ButtonComponent>
                                    </div>
                                }
                            >
                                <TabComponent>
                                    <TabItemsDirective>
                                        <TabItemDirective header={{ text: 'Profile' }}
                                            content={() => (
                                                <div className="pt-5">
                                                    <h3 className="text-sm font-medium mb-1">Your photo</h3>
                                                    <div className="flex items-center gap-4 mb-6 sm:mb-5">
                                                        <span className="e-avatar e-avatar-large e-avatar-circle shrink-0 border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
                                                            <i className="e-icons e-user text-3xl dark:text-gray-300"></i>
                                                        </span>
                                                        <div id={styles["upload-template"]} className="grow">
                                                            <a href="#" className="font-medium text-primary-600 dark:text-primary-400" onClick={() => uploaders.current?.element?.click()}>Choose a profile image</a>
                                                            <p className="text-xs text-gray-700 dark:text-gray-200 mt-1">Choose a high-quality photo to help teammates recognize you.</p>
                                                            <UploaderComponent ref={uploaders} multiple={false} allowedExtensions='image/*' maxFileSize={2000000} selected={(e) => e.cancel = true}></UploaderComponent>
                                                        </div>
                                                    </div>
                                                    <form action="#" className="flex flex-col gap-4 sm:gap-3 text-xs font-medium leading-normal text-gray-700 dark:text-gray-200" onSubmit={(e) => e.preventDefault()}>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div className="flex flex-col gap-1">
                                                                <label>First Name</label>
                                                                <TextBoxComponent placeholder="Enter your first name" type="text"></TextBoxComponent>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <label>Last Name</label>
                                                                <TextBoxComponent placeholder="Enter your last name" type="text"></TextBoxComponent>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-3">
                                                            <div className="flex flex-col gap-1">
                                                                <label>Job Title</label>
                                                                <TextBoxComponent placeholder="Enter your designation" type="text"></TextBoxComponent>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <label>Team Name</label>
                                                                <TextBoxComponent placeholder="Enter your team name" type="text"></TextBoxComponent>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <label>Email Address</label>
                                                                <TextBoxComponent placeholder="Enter your email address" type="email"></TextBoxComponent>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-1 col-span-2">
                                                            <label>Details</label>
                                                            <TextAreaComponent placeholder="Enter your details" width="100%" rows={4} resizeMode="None"></TextAreaComponent>
                                                        </div>
                                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-2 font-medium">
                                                            <div className="flex gap-3 sm:gap-2">
                                                                <SwitchComponent cssClass="w-10"></SwitchComponent>
                                                                <label className="text-sm font-normal text-gray-900 dark:text-white">Enable or disable the feature</label>
                                                            </div>
                                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                                                <label>Out of Office Date</label>
                                                                <div className="sm:w-44">
                                                                    <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Notifications' }}
                                            content={() => (
                                                <div className="flex flex-col gap-3 pt-6">
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Comments</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Get notified when someone comments on your posts or replies to your comments</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Mentions</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Receive alerts when someone mentions you in a post or comment</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0" checked={true}></SwitchComponent>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Follows</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Be notified when someone starts following your profile</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Direct messages</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Get instant notifications for new direct messages</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0" checked={true}></SwitchComponent>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Newsletter</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Weekly digest of the best content, features, and updates</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Account updates</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Important notifications about your account, security, and privacy</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Product updates</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Be the first to know about new features, improvements, and tips</p>
                                                        </div>
                                                        <SwitchComponent cssClass="w-10 shrink-0"></SwitchComponent>
                                                    </div>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Email forwarding' }}
                                            content={() => (
                                                <div>
                                                    <div className="mb-5 pt-4">
                                                        <p className="font-medium mb-2">Email Forwarding</p>
                                                        <p className="text-xs text-gray-700 dark:text-gray-300">Configure your email preferences and setup your email forwarding to other addresses.</p>
                                                    </div>
                                                    <div className="e-card p-3 shadow-none mb-4">
                                                        <div className="e-card-header-title !px-1 !py-1">
                                                            <p className="font-medium">Primary email</p>
                                                        </div>
                                                        <div className="e-card-content !px-1 !pb-1 !pt-0">
                                                            <p className="text-xs text-gray-700 dark:text-gray-300 mb-3">Your main email address for receiving forwarded message</p>
                                                            <TextBoxComponent type="email" value="james@company.com"></TextBoxComponent>
                                                        </div>
                                                    </div>
                                                    <div className="e-card p-3 shadow-none">
                                                        <div className="e-card-header-title !flex !justify-between gap-2 !px-1 !py-1">
                                                            <p className="font-medium">Forwarding emails</p>
                                                            <span className="e-badge e-badge-pill e-badge-info">2/5</span>
                                                        </div>
                                                        <div className="e-card-content !px-1 !pb-1 !pt-0">
                                                            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">Add upto 5 email addresses to forwarding</p>
                                                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                                                                <TextBoxComponent className="grow" placeholder="Add forwarding emails" type="email"></TextBoxComponent>
                                                                <ButtonComponent cssClass="w-fit" iconCss="e-icons e-plus" content="Add" type="button"></ButtonComponent>
                                                            </div>
                                                            <div className="border-t border-gray-200 dark:border-gray-600 mt-4 md:mt-3 pt-4 md:pt-3">
                                                                <div className="flex gap-3 items-center py-1.5">
                                                                    <div className="text-gray-900 dark:text-white grow">john.wick&#64;company.com</div>
                                                                    <ButtonComponent cssClass="e-danger e-flat e-small" iconCss="e-icons e-trash" type="button"></ButtonComponent>
                                                                </div>
                                                                <div className="flex gap-3 items-center py-1.5">
                                                                    <div className="text-gray-900 dark:text-white grow">charles.kri&#64;company.com</div>
                                                                    <ButtonComponent cssClass="e-danger e-flat e-small" iconCss="e-icons e-trash" type="button"></ButtonComponent>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Account' }}
                                            content={() => (
                                                <div>
                                                    <h2 className="font-medium text-base mt-6 mb-3">Security</h2>
                                                    <div className="e-card shadow-none px-4 py-2 mb-4">
                                                        <div className="e-card-content flex flex-col sm:flex-row gap-3 justify-between sm:items-center !p-0 !py-1">
                                                            <div className="flex gap-3 items-center">
                                                                <span className="text-base e-icons e-eye text-gray-500 dark:text-gray-300"></span>
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-0.5">Change password</p>
                                                                    <p className="text-xs text-wrap text-gray-700 dark:text-gray-300">Update your password regularly to maintain account security</p>
                                                                </div>
                                                            </div>
                                                            <ButtonComponent className="w-fit ml-7 sm:ml-0 mr-1" content="Update" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                    <div className="e-card shadow-none px-4 py-2 mb-6">
                                                        <div className="e-card-content flex flex-col sm:flex-row gap-3 justify-between sm:items-center !p-0 !py-1">
                                                            <div className="flex gap-3 items-center">
                                                                <span className="text-base sf-icon-mobile-01 text-gray-500 dark:text-gray-300"></span>
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-0.5">Two-Factor Authentication</p>
                                                                    <p className="text-xs text-wrap text-gray-700 dark:text-gray-300">Add an extra layer of security to your account</p>
                                                                </div>
                                                            </div>
                                                            <ButtonComponent className="w-fit ml-7 sm:ml-0 mr-1" content="Enable" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                    <h2 className="font-medium text-base mb-3">Accounts</h2>
                                                    <div className="e-card shadow-none px-4 py-2 mb-4">
                                                        <div className="e-card-content flex items-start sm:items-center !p-0 !py-1">
                                                            <img className="w-6 shrink-0 mr-3 mt-2 sm:mt-0" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/microsoft.svg" alt="microsoft logo" />
                                                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 grow">
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-0.5">Microsoft</p>
                                                                    <p className="text-xs text-wrap text-gray-700 dark:text-gray-300">Access Microsoft services and single sign-on</p>
                                                                </div>
                                                                <ButtonComponent className="w-fit mr-1" content="Disconnect" type="button"></ButtonComponent>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card shadow-none px-4 py-2 mb-5">
                                                        <div className="e-card-content flex items-start sm:items-center !p-0 !py-1">
                                                            <img className="w-6 shrink-0 mr-3 mt-2 sm:mt-0" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/twitter.svg" alt="twitter logo" />
                                                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 grow">
                                                                <div>
                                                                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-0.5">Twitter</div>
                                                                    <div className="text-xs text-wrap text-gray-700 dark:text-gray-300">Connect to share updates and manage social features</div>
                                                                </div>
                                                                <ButtonComponent className="w-fit mr-1" content="Connect" type="button"></ButtonComponent>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ButtonComponent cssClass="e-danger e-outline" content="Delete Account" type="button"></ButtonComponent>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Display' }}
                                            content={() => (
                                                <div className="flex flex-col gap-4 pt-6">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Theme</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Choose your preferred system theme</p>
                                                        </div>
                                                        <DropDownButtonComponent className="w-fit" content="System Theme" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                        <div>
                                                            <p className="font-medium mb-0.5">Layout</p>
                                                            <p className="text-xs text-gray-700 dark:text-gray-300">Select a layout that suits your preference</p>
                                                        </div>
                                                        <DropDownButtonComponent className="w-fit" content="Compact" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                                    </div>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                    </TabItemsDirective>
                                </TabComponent>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" content="My Settings" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "750px" }}>
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="rounded-3 m-sm-2" target="#dialog-container" height="650px" beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="644px" isModal={true}
                                header={() => (
                                    <p className="fw-bold text-body mb-0 lh-sm">My Settings</p>
                                )}
                                footerTemplate={() =>
                                    <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent className="col col-sm-auto ms-0" content="Discard" type="button"></ButtonComponent>
                                        <ButtonComponent className="col col-sm-auto e-primary" content="Save Changes" type="button"></ButtonComponent>
                                    </div>
                                }
                            >
                                <TabComponent>
                                    <TabItemsDirective>
                                        <TabItemDirective header={{ text: 'Profile' }}
                                            content={() => (
                                                <div className="pt-3">
                                                    <h3 className="fs-6 fw-medium mb-1 text-body lh-base">Your photo</h3>
                                                    <div className="d-flex align-items-center gap-3 mb-4">
                                                        <span className="e-avatar e-avatar-large e-avatar-circle flex-shrink-0 bg-body-secondary">
                                                            <i className="e-icons e-user fs-3"></i>
                                                        </span>
                                                        <div id={styles["upload-template"]} className="flex-grow-1">
                                                            <a href="#" className="fw-medium text-primary text-decoration-none" onClick={() => uploaders.current?.element?.click()}>Choose a profile image</a>
                                                            <p className="text-body-secondary mt-1 mb-0">Choose a high-quality photo to help teammates recognize you.</p>
                                                            <UploaderComponent ref={uploaders} multiple={false} allowedExtensions='image/*' maxFileSize={2000000} selected={(e) => e.cancel = true}></UploaderComponent>
                                                        </div>
                                                    </div>
                                                    <form action="#" className="small d-flex flex-column gap-3 gap-sm-2 text-body-secondary" onSubmit={(e) => e.preventDefault()}>
                                                        <div className="row gx-3 gy-sm-1 row-gap-3 row-gap-sm-2">
                                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                                <label>First Name</label>
                                                                <TextBoxComponent placeholder="Enter your first name" type="text"></TextBoxComponent>
                                                            </div>
                                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                                <label>Last Name</label>
                                                                <TextBoxComponent placeholder="Enter your last name" type="text"></TextBoxComponent>
                                                            </div>
                                                        </div>
                                                        <div className="row gx-3 gy-sm-1 row-gap-3 row-gap-sm-2 mt-sm-1">
                                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                                <label>Job Title</label>
                                                                <TextBoxComponent placeholder="Enter your designation" type="text"></TextBoxComponent>
                                                            </div>
                                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                                <label>Team Name</label>
                                                                <TextBoxComponent placeholder="Enter your team name" type="text"></TextBoxComponent>
                                                            </div>
                                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                                <label>Email Address</label>
                                                                <TextBoxComponent placeholder="Enter your email address" type="email"></TextBoxComponent>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column gap-1 mt-sm-1">
                                                            <label>Details</label>
                                                            <TextAreaComponent placeholder="Enter your details" width="100%" resizeMode="Vertical" rows={4}></TextAreaComponent>
                                                        </div>
                                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-sm-2">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <SwitchComponent className="flex-shrink-0"></SwitchComponent>
                                                                <label>Enable or disable the feature</label>
                                                            </div>
                                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                                                <label>Out of Office Date</label>
                                                                <div className="w-auto">
                                                                    <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Notifications' }}
                                            content={() => (
                                                <div className="d-flex flex-column gap-3 pt-3">
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Comments</p>
                                                            <p className="small text-secondary mb-0">Get notified when someone comments on your posts or replies to your comments</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent></SwitchComponent></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Mentions</p>
                                                            <p className="small text-secondary mb-0">Receive alerts when someone mentions you in a post or comment</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent checked={true}></SwitchComponent></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Follows</p>
                                                            <p className="small text-secondary mb-0">Be notified when someone starts following your profile</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent></SwitchComponent></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Direct messages</p>
                                                            <p className="small text-secondary mb-0">Get instant notifications for new direct messages</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent checked={true}></SwitchComponent></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Newsletter</p>
                                                            <p className="small text-secondary mb-0">Weekly digest of the best content, features, and updates</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent></SwitchComponent></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Account updates</p>
                                                            <p className="small text-secondary mb-0">Important notifications about your account, security, and privacy</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent></SwitchComponent></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                                                        <div>
                                                            <p className="fw-medium mb-1 text-body">Product updates</p>
                                                            <p className="small text-secondary mb-0">Be the first to know about new features, improvements, and tips</p>
                                                        </div>
                                                        <span className="flex-shrink-0"><SwitchComponent></SwitchComponent></span>
                                                    </div>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Email forwarding' }}
                                            content={() => (
                                                <div>
                                                    <div className="py-4">
                                                        <p className="fw-medium mb-1 text-body">Email Forwarding</p>
                                                        <p className="small text-secondary mb-0">Configure your email preferences and setup your email forwarding to other addresses.</p>
                                                    </div>
                                                    <div className="e-card rounded-2 p-3 mb-3">
                                                        <div className="e-card-header-title p-0">
                                                            <p className="fw-medium text-body mb-1">Primary email</p>
                                                        </div>
                                                        <div className="e-card-content p-1">
                                                            <p className="small text-secondary mb-2 pb-1">Your main email address for receiving forwarded message</p>
                                                            <TextBoxComponent type="email" value="james@company.com"></TextBoxComponent>
                                                        </div>
                                                    </div>
                                                    <div className="e-card rounded-2 p-3">
                                                        <div className="e-card-header-title d-flex justify-content-between gap-2 p-0">
                                                            <p className="fw-medium mb-0">Forwarding emails</p>
                                                            <span className="e-badge e-badge-pill e-badge-info">2/5</span>
                                                        </div>
                                                        <div className="e-card-content p-0">
                                                            <p className="text-muted small pt-1">Add up to 5 email addresses to forwarding</p>
                                                            <div className="d-flex flex-column flex-sm-row gap-3">
                                                                <TextBoxComponent className="flex-grow-1 mx-1" placeholder="Add forwarding emails" type="email"></TextBoxComponent>
                                                                <ButtonComponent iconCss="e-icons e-plus" content="Add" type="button" style={{ width:"fit-content" }}></ButtonComponent>
                                                            </div>
                                                            <div className="border-top mt-3 pt-3">
                                                                <div className="d-flex gap-3 align-items-center py-1">
                                                                    <div className="text-body fw-medium flex-grow-1">john.wick&#64;company.com</div>
                                                                    <ButtonComponent cssClass="e-danger e-flat e-small" iconCss="e-icons e-trash" type="button"></ButtonComponent>
                                                                </div>
                                                                <div className="d-flex gap-3 align-items-center py-1">
                                                                    <div className="text-body fw-medium flex-grow-1">charles.kri&#64;company.com</div>
                                                                    <ButtonComponent cssClass="e-danger e-flat e-small" iconCss="e-icons e-trash" type="button"></ButtonComponent>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Account' }}
                                            content={() => (
                                                <div>
                                                    <h2 className="fw-medium fs-6 mt-4 mb-2">Security</h2>
                                                    <div className="e-card px-3 py-2 mb-3">
                                                        <div className="e-card-content d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-center p-0">
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <span className="fs-6 e-icons e-eye text-secondary"></span>
                                                                <div className="ms-1">
                                                                    <div className="text-body fw-medium">Change password</div>
                                                                    <div className="small text-secondary">Update your password regularly to maintain account security</div>
                                                                </div>
                                                            </div>
                                                            <ButtonComponent className="w-auto ms-4 ms-sm-0" content="Update" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                    <div className="e-card px-3 py-2 mb-4">
                                                        <div className="e-card-content d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-center p-0">
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <span className="fs-6 sf-icon-mobile-01 text-secondary"></span>
                                                                <div className="ms-1">
                                                                    <div className="fw-medium text-body">Two-Factor Authentication</div>
                                                                    <div className="small text-secondary">Add an extra layer of security to your account</div>
                                                                </div>
                                                            </div>
                                                            <ButtonComponent className="ms-4 ms-sm-0" content="Enable" type="button"></ButtonComponent>
                                                        </div>
                                                    </div>
                                                    <h2 className="fw-medium fs-6 mb-2">Accounts</h2>
                                                    <div className="e-card px-3 py-2 mb-3">
                                                        <div className="e-card-content d-flex align-items-start align-items-sm-center gap-2 p-0">
                                                            <img className="lex-shrink-0 mt-2 mt-sm-0 me-3" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/microsoft.svg" width="24" height="24" alt="microsoft logo" />
                                                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 flex-grow-1 ms-1">
                                                                <div>
                                                                    <div className="d-flex align-items-center fs-6 text-body">Microsoft</div>
                                                                    <div className="d-flex align-items-center text-wrap small text-body-secondary">Access Microsoft services and single sign-on</div>
                                                                </div>
                                                                <ButtonComponent content="Disconnect" type="button"></ButtonComponent>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="e-card px-3 py-2 mb-4">
                                                        <div className="e-card-content d-flex align-items-start align-items-sm-center gap-2 p-0">
                                                            <img className="flex-shrink-0 mt-2 mt-sm-0 me-3" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/twitter.svg" width="24" height="24" alt="twitter logo" />
                                                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 flex-grow-1 ms-1">
                                                                <div>
                                                                    <div className="d-flex align-items-center fs-6 text-body">Twitter</div>
                                                                    <div className="d-flex align-items-center text-wrap small text-body-secondary">Connect to share updates and manage social features</div>
                                                                </div>
                                                                <ButtonComponent content="Connect" type="button"></ButtonComponent>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ButtonComponent className="e-danger e-outline" content="Delete Account" type="button"></ButtonComponent>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                        <TabItemDirective header={{ text: 'Display' }}
                                            content={() => (
                                                <div className="d-flex flex-column gap-3 pt-4">
                                                    <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
                                                        <div className="mb-1 mb-sm-0">
                                                            <p className="fw-medium mb-1 text-body">Theme</p>
                                                            <p className="small text-secondary mb-0">Choose your preferred system theme</p>
                                                        </div>
                                                        <DropDownButtonComponent type="button" content="System Theme" beforeOpen={(event) => (event.cancel = true)} style={{ width:"fit-content" }}></DropDownButtonComponent>
                                                    </div>
                                                    <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
                                                        <div className="mb-1 mb-sm-0">
                                                            <p className="fw-medium mb-1 text-body">Layout</p>
                                                            <p className="small text-secondary mb-0">Select a layout that suits your preference</p>
                                                        </div>
                                                        <DropDownButtonComponent type="button" content="Compact" beforeOpen={(event) => (event.cancel = true)} style={{ width:"fit-content"}}></DropDownButtonComponent>
                                                    </div>
                                                </div>
                                            )}
                                        ></TabItemDirective>
                                    </TabItemsDirective>
                                </TabComponent>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" content="My Settings" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}
