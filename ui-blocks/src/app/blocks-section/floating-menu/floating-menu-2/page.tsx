'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { RatingComponent, TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import styles from "./page.module.css";

export default function FloatingMenu2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isToggleState, setIsToggleState] = useState(true);
    const [isMobileView, setIsMobileView] = useState(false);
    const textboxRef = useRef<TextBoxComponent | null>(null);
    const dialogRef = useRef<DialogComponent | null>(null);
    const fabRef = useRef<FabComponent | null>(null);
    let isTextboxIconAdded: boolean = false;

    const data: any[] = [
        {
            id: 1,
            time: "12:12 PM",
            contact: "ChatBot",
            chat: "Hello! How can I help you?"
        },
        {
            id: 2,
            time: "12:12 PM",
            contact: "You",
            chat: "Hi, I'm having trouble accessing the company VPN."
        },
        {
            id: 3,
            time: "12:12 PM",
            contact: "ChatBot",
            chat: "I can help with that. Are you seeing any error messages?"
        }
    ];

    const toggleDialog = (): void => {
        setIsToggleState(!isToggleState);
    };

    const setDialogPosition = (event: any): void => {
        if (fabRef.current && dialogRef.current) {
            const position = fabRef.current.element.getBoundingClientRect();
            const dialogBounds = dialogRef.current.element.getBoundingClientRect();
            setIsMobileView(position.width === 0);
            dialogRef.current.position = position.width === 0
                ? { X: 0, Y: 0 }
                : {
                    X: position.x - (dialogBounds.width - 52),
                    Y: position.y - (dialogBounds.height + 18)
                };
        }
        event.preventFocus = true;
    };

    const addTextBoxIcon = (): void => {
        if (isTextboxIconAdded) return;

        textboxRef.current?.addIcon("append", "sf-icon-navigation-right-up border-0");
        isTextboxIconAdded = true;
    };
       
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'floating-menu-2' && blockData.theme) {
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
        if (dialogRef.current) {
            if (isToggleState) {
                dialogRef.current.show();
            } else {
                dialogRef.current.hide();
            }
        }

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', setDialogPosition);
        }
    }, [isToggleState]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id="target" className="w-full" style={{ height: isMobileView ? "580px" : "720px" }}>
                            <div className="flex items-center justify-center pt-4 block sm:hidden">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-message-chat-circle !text-xl" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-chat"]} className="sm:!rounded-t !rounded-none overflow-hidden !border-0" width="400px" minHeight="580px" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => {
                                    return (
                                        <div className="flex justify-between items-center bg-primary-600 dark:bg-primary-400 py-4 px-4 sm:px-6">
                                            <div className="flex gap-4 items-center">
                                                <div className="relative">
                                                    <span className="e-avatar e-avatar-circle e-icons e-user text-2xl"></span>
                                                    <div className="w-3 h-3 rounded-full bg-green-700 dark:bg-green-500 absolute right-0 bottom-0.5 border border-white dark:border-black"></div>
                                                </div>
                                                <p className="text-white font-semibold dark:text-gray-900">ChatBot</p>
                                            </div>
                                            <div className="flex justify-end block sm:hidden">
                                                <ButtonComponent className="e-primary e-round" iconCss="e-icons e-close text-white dark:text-black !text-base" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                        </div>
                                    );
                                }}
                                footerTemplate={() => {
                                    return (
                                        <div className="pt-2 pb-6 px-4 sm:px-6">
                                            <div className="e-card bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
                                                <div className="e-card-content text-center">
                                                    <p className="pt-4 pb-2.5">How would you rate our support?</p>
                                                    <RatingComponent value={0.5} precision="Exact"></RatingComponent>
                                                </div>
                                            </div>
                                            <div className="e-bigger mt-3">
                                                <TextBoxComponent ref={textboxRef} type="text" placeholder="Enter a message" created={addTextBoxIcon}></TextBoxComponent>
                                            </div>
                                        </div>
                                    );
                                }}
                            >
                                <ListViewComponent className="border-0 px-1 sm:px-3 py-4" dataSource={data} width="100%" height="100%"
                                    template={(data: any) => {
                                        const senderTemplate = (
                                            <div className="flex justify-end items-end flex-col">
                                                <div className="bg-gray-300 dark:bg-gray-700 px-3 py-2 rounded-lg rounded-se-none w-11/12">
                                                    <div className="dark:text-gray-50">{data.chat}</div>
                                                </div>
                                                <p className="text-gray-500 dark:text-gray-400 mt-1 text-xs">{data.contact}</p>
                                            </div>
                                        );
                                        const receiverTemplate = (
                                            <div className="flex justify-start gap-3 w-full">
                                                <div>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small e-icons e-user !text-xl bg-gray-300 dark:bg-gray-700"></span>
                                                </div>
                                                <div className="w-full">
                                                    <div className="px-3 py-2 rounded-lg rounded-ss-none bg-gray-100 dark:bg-gray-800">
                                                        <div className="dark:text-gray-50">{data.chat}</div>
                                                    </div>
                                                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-xs">{data.contact}</p>
                                                </div>
                                            </div>
                                        );
                                        return <div>{data.contact !== "ChatBot" ? senderTemplate : receiverTemplate}</div>;
                                    }}
                                ></ListViewComponent>
                            </DialogComponent>
                            <FabComponent ref={fabRef} cssClass="e-primary e-round e-bigger !hidden sm:!block" iconCss={!isToggleState ? "sf-icon-message-chat-circle !text-2xl" : "e-icons e-close !text-2xl"} position="BottomRight" target="#target" type="button" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id="target" className="w-100" style={{ height: isMobileView ? "580px" : "720px" }}>
                            <div className="d-flex align-items-center justify-content-center pt-4 d-block d-sm-none">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-message-chat-circle fs-5 lh-base" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-chat"]} className="rounded-1 overflow-hidden border-0" width="400px" minHeight="580px" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => {
                                    return (
                                        <div className="d-flex justify-content-between align-items-center bg-primary py-3 px-4">
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="position-relative">
                                                    <span className="e-avatar e-avatar-circle e-icons e-user fs-4"></span>
                                                    <div className="position-absolute end-0 bottom-0 border rounded-circle bg-success" style={{ width: "12px", height: "12px" }}></div>
                                                </div>
                                                <p className="text-white fw-semibold fs-6 lh-sm m-0">ChatBot</p>
                                            </div>
                                            <div className="d-flex justify-content-end d-block d-sm-none">
                                                <ButtonComponent className="e-primary e-round" iconCss="e-icons e-close text-white" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                        </div>
                                    );
                                }}
                                footerTemplate={() => {
                                    return (
                                        <div className="px-3 px-sm-4 pb-4">
                                            <div className="e-card bg-body-tertiary">
                                                <div className="e-card-content p-3 text-center">
                                                    <p className="mb-1 fs-6 opacity-75">How would you rate our support?</p>
                                                    <RatingComponent value={0.5} precision="Exact"></RatingComponent>
                                                </div>
                                            </div>
                                            <div className="e-bigger mt-3">
                                                <TextBoxComponent ref={textboxRef} type="text" placeholder="Enter a message" created={addTextBoxIcon}></TextBoxComponent>
                                            </div>
                                        </div>
                                    );
                                }}
                            >
                                <ListViewComponent className="border-0 px-2 px-sm-3 py-4" dataSource={data} width="100%" height="100%"
                                    template={(data: any) => {
                                        const senderTemplate = (
                                            <div className="d-flex justify-content-end flex-column align-items-end ps-5">
                                                <div className="bg-body-secondary px-3 py-2" style={{ borderRadius: "8px 0px 8px 8px" }}>
                                                    <div className="text-body">{data.chat}</div>
                                                </div>
                                                <p className="text-body-secondary small m-0">{data.contact}</p>
                                            </div>
                                        );
                                        const receiverTemplate = (
                                            <div className="d-flex justify-content-start gap-3">
                                                <span className="e-avatar e-avatar-circle e-avatar-small bg-body-tertiary e-icons e-user fs-5"></span>
                                                <div>
                                                    <div className="px-3 py-2 bg-body-tertiary" style={{ borderRadius: "0px 8px 8px 8px" }}>
                                                        <div className="text-body">{data.chat}</div>
                                                    </div>
                                                    <p className="text-body-secondary small m-0">{data.contact}</p>
                                                </div>
                                            </div>
                                        );
                                        return <div>{data.contact !== "ChatBot" ? senderTemplate : receiverTemplate}</div>;
                                    }}
                                ></ListViewComponent>
                            </DialogComponent>
                            <FabComponent ref={fabRef} cssClass="e-primary e-bigger e-round d-none d-sm-block" iconCss={!isToggleState ? "sf-icon-message-chat-circle fs-4" : "e-icons e-close fs-5"} position="BottomRight" target="#target" type="button" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}