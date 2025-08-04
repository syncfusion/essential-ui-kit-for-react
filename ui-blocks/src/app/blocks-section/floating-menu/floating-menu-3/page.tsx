'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent, TextAreaComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import styles from "./page.module.css";

export default function FloatingMenu3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isToggleState, setIsToggleState] = useState(true);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const dialogRef = useRef<DialogComponent | null>(null);
    const fabRef = useRef<FabComponent | null>(null);

    const toggleDialog = (): void => {
        setIsToggleState(!isToggleState);
    };

    const setDialogPosition = (event: any): void => {
        if (fabRef.current && dialogRef.current) {
            const position = fabRef.current.element.getBoundingClientRect();
            const dialogBounds = dialogRef.current.element.getBoundingClientRect();
            if (containerRef.current) {
                containerRef.current.style.minHeight = position.width === 0 ? "624px" : "740px";
            }
            dialogRef.current.position = position.width === 0
                ? { X: 0, Y: 0 }
                : {
                    X: position.x - (dialogBounds.width - 52),
                    Y: position.y - (dialogBounds.height + 18),
                };
        }
        event.preventFocus = true;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'floating-menu-3' && blockData.theme) {
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
                        <div ref={containerRef} id="target" className="w-full" style={{ minHeight: "740px" }}>
                            <div className="flex items-center justify-center pt-4 block sm:hidden">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-message-chat-circle !text-xl" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-contact"]} className="sm:!rounded-t !rounded-none overflow-hidden !border-0" width="400px" minHeight="625px" height="625px" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => (
                                    <div className="flex flex-col justify-between items-center bg-primary-100 dark:bg-primary-800 py-12 px-6 relative">
                                        <span className="sf-icon-message-chat-circle text-3xl text-gray-500 dark:text-white"></span>
                                        <div className="text-center mt-3">
                                            <p className="text-xl font-semibold dark:text-gray-50">Contact Us</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-200 mt-2">Reach out to us for any inquiry</p>
                                        </div>
                                        <div className="flex justify-end block sm:hidden p-4 absolute right-0 top-0">
                                            <ButtonComponent className="e-flat e-round" iconCss="e-icons e-close !text-base" type="button" onClick={toggleDialog}></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="e-bigger sm:px-6 px-4 py-6">
                                        <ButtonComponent cssClass="e-primary w-full !ml-0" content="Send" type="submit"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <div className="sm:px-6 px-4 pt-6 flex flex-col gap-4">
                                    <TextBoxComponent cssClass="e-bigger w-full" type="text" placeholder="Name" floatLabelType="Never"></TextBoxComponent>
                                    <TextBoxComponent cssClass="e-bigger w-full" type="text" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    <TextAreaComponent cssClass="e-bigger" placeholder="Your message" rows={5} cols={100} resizeMode="None"></TextAreaComponent>
                                    <div className="w-full flex flex-col gap-1.5">
                                        <UploaderComponent key={`uploader-1-${isToggleState}`} allowedExtensions=".pdf,.doc,.docx"></UploaderComponent>
                                        <p className="text-xs text-gray-900 dark:text-gray-50">Supported formats: Docs / PDF</p>
                                    </div>
                                </div>
                            </DialogComponent>
                            <FabComponent ref={fabRef} cssClass="e-primary e-round e-bigger !hidden sm:!block" iconCss={!isToggleState ? "sf-icon-message-chat-circle !text-2xl" : "e-icons e-close !text-2xl"} position="BottomRight" target="#target" type="button" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div ref={containerRef} id="target" className="w-100" style={{ minHeight: "740px" }}>
                            <div className="d-flex align-items-center justify-content-center pt-4 d-block d-sm-none">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-message-chat-circle fs-5 lh-base" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-contact"]} className="rounded-1 border-0 overflow-hidden" width="400px" minHeight="625px" height="625px" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => (
                                    <div className="d-flex flex-column justify-content-between align-items-center bg-primary-subtle py-5 px-4 position-relative">
                                        <span className="sf-icon-message-chat-circle fs-4 text-secondary"></span>
                                        <div className="text-center mt-3">
                                            <p className="fs-5 fw-semibold lh-sm text-body m-0">Contact Us</p>
                                            <p className="mt-2 mb-0 text-body">Reach out to us for any inquiry</p>
                                        </div>
                                        <div className="d-flex justify-content-end d-block d-sm-none p-3 position-absolute top-0 end-0">
                                            <ButtonComponent className="e-flat e-round e-inherit" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="e-bigger py-4 px-3 px-sm-4">
                                        <ButtonComponent cssClass="e-primary w-100 m-0" content="Send" type="submit"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <div className="py-4 px-3 px-sm-4 pb-0 d-flex flex-column gap-3">
                                    <TextBoxComponent cssClass="e-bigger w-100" type="text" placeholder="Name" floatLabelType="Never"></TextBoxComponent>
                                    <TextBoxComponent cssClass="e-bigger w-100" type="text" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    <TextAreaComponent cssClass="e-bigger w-100" placeholder="Your message" rows={5} cols={100} resizeMode="None"></TextAreaComponent>
                                    <div>
                                        <UploaderComponent key={`uploader-2-${isToggleState}`} allowedExtensions=".pdf,.doc,.docx"></UploaderComponent>
                                        <p className="small m-0 mt-1 text-body-secondary">Supported formats: Docs / PDF</p>
                                    </div>
                                </div>
                            </DialogComponent>
                            <FabComponent ref={fabRef} cssClass="e-primary e-bigger e-round d-none d-sm-block" iconCss={!isToggleState ? "sf-icon-message-chat-circle fs-4" : "e-icons e-close fs-5"} position="BottomRight" target="#target" type="button" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}