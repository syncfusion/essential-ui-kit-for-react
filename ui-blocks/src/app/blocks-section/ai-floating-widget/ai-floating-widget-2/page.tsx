'use client';

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent, TextAreaComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIFloatingWidget2() {
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
            dialogRef.current.height = position.width === 0 ? "580px" : "510px";
            dialogRef.current.position = position.width === 0
                ? { X: 0, Y: 0 }
                : {
                    X: position.x - (dialogBounds.width - 52),
                    Y: position.y - (dialogBounds.height + 18)
                };
            if (containerRef.current) {
                containerRef.current.style.minHeight = position.width === 0 ? "579px" : "690px";
            }
        }
        event.preventFocus = true;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-floating-widget-2' && blockData.theme) {
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
        if (dialogRef.current) {
            if (isToggleState) {
                dialogRef.current.show();
            } else {
                dialogRef.current.hide();
            }
        }
        window.addEventListener('resize', setDialogPosition);

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
                        <div key={"floating-2-tw"} ref={containerRef} id="target" className="w-full px-4" style={{ minHeight: '690px' }}>
                            <div >
                                <div className="flex items-center justify-center pt-4">
                                    <ButtonComponent className="block sm:hidden" cssClass="e-primary e-round e-bigger" iconCss="sf-icon-message-chat-circle !text-xl" type="button" onClick={toggleDialog}></ButtonComponent>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles["floating-contact"]} className="sm:rounded-lg rounded-none overflow-hidden !border-0" width="400px" height={"510px"} open={setDialogPosition} created={() => dialogRef.current?.show()}
                                    header={() => (
                                        <div className="flex flex-col bg-primary-100 dark:bg-primary-800 pb-5 px-6 pt-4">
                                            <div className="flex justify-end block sm:hidden px-4 absolute right-0">
                                                <ButtonComponent className="e-flat e-round" iconCss="e-icons e-close !leading-5" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                            <span className="e-icons e-comment-show pt-3 text-xl text-gray-500 dark:text-gray-200 flex justify-center"></span>
                                            <div className="text-center mt-3">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">Contact Us</p>
                                                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1 font-normal">Reach out to us for any inquiry</p>
                                            </div>
                                        </div>
                                    )}
                                    footerTemplate={() => (
                                        <div className="sm:px-6 px-4 py-6">
                                            <ButtonComponent className="w-full !ml-0" cssClass="e-primary" content="Send" type="submit"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                    <div className="sm:px-6 px-4 pt-6 flex flex-col">
                                        <TextBoxComponent className="w-full" type="text" placeholder="Name" floatLabelType="Never"></TextBoxComponent>
                                        <span className="mt-4">
                                            <TextBoxComponent className="w-full" type="text" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                        </span>
                                        <span className="mt-4">
                                            <TextAreaComponent placeholder="Your message" rows={5} cols={100}></TextAreaComponent>
                                        </span>
                                        <div className="w-full flex flex-col gap-1.5 mt-3">
                                            <UploaderComponent key={`uploader-1-${isToggleState}`} multiple={false} allowedExtensions="pdf/*" maxFileSize={2000000} buttons={{ browse: 'Upload' }} selected={(e) => { e.cancel = true; }}></UploaderComponent>
                                            <p className="text-xs text-gray-700 dark:text-gray-300">Supported formats: Doc/Pdf</p>
                                        </div>
                                    </div>
                                </DialogComponent>
                                <FabComponent ref={fabRef} className="!hidden sm:!block" cssClass="e-primary e-round e-bigger" iconCss={!isToggleState ? 'sf-icon-message-chat-circle !text-2xl' : 'e-icons e-close !text-2xl'} type="button" position="BottomRight" target="#target" onClick={toggleDialog}></FabComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"floating-2-bs"} ref={containerRef} id="target" className="w-100 px-3" style={{ minHeight: '690px' }}>
                            <div >
                                <div className="d-flex align-items-center justify-content-center pt-3">
                                    <ButtonComponent className="d-block d-sm-none" cssClass="e-primary e-round e-bigger" iconCss="sf-icon-message-chat-circle fs-5 lh-base" type="button" onClick={toggleDialog}></ButtonComponent>
                                </div>
                                <DialogComponent ref={dialogRef} id={styles["floating-contact"]} className="rounded-3 shadow overflow-hidden" width="400px" height={"510px"} open={setDialogPosition} created={() => dialogRef.current?.show()}
                                    header={() => (
                                        <div className="d-flex flex-column justify-content-between align-items-center bg-primary-subtle p-4">
                                            <div className="d-flex justify-content-end d-block d-sm-none px-3 top-0 pt-3 position-absolute end-0">
                                                <ButtonComponent cssClass="e-flat e-round e-small e-inherit" iconCss="e-icons e-close lh-base" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                            <span className="e-icons e-comment-show fs-5 text-body-secondary"></span>
                                            <div className="text-center mt-2 pt-1">
                                                <p className="small fw-medium lh-sm text-body m-0">Contact Us</p>
                                                <p className="small mt-1 mb-0 text-body-tertiary fw-normal">Reach out to us for any inquiry</p>
                                            </div>
                                        </div>
                                    )}
                                    footerTemplate={() => (
                                        <div className="py-4 px-3 px-sm-4">
                                            <ButtonComponent className="w-100 m-0" cssClass="e-primary" content="Send" type="button"></ButtonComponent>
                                        </div>
                                    )}
                                >
                                    <div className="py-4 px-3 px-sm-4 pb-0 d-flex flex-column gap-3">
                                        <TextBoxComponent className="w-100" type="text" placeholder="Name" floatLabelType="Never"></TextBoxComponent>
                                        <TextBoxComponent className="w-100" type="text" placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                        <TextAreaComponent className="w-100" placeholder="Your message" rows={5} cols={100}></TextAreaComponent>
                                        <div>
                                            <UploaderComponent key={`uploader-2-${isToggleState}`} multiple={false} allowedExtensions="pdf/*" maxFileSize={2000000} buttons={{ browse: 'Upload' }} selected={(e) => { e.cancel = true; }}></UploaderComponent>
                                            <p className="small m-0 mt-1 text-body-secondary">Supported formats: Doc/Pdf</p>
                                        </div>
                                    </div>
                                </DialogComponent>
                                <FabComponent ref={fabRef} cssClass="e-primary e-bigger e-round d-none d-sm-block" iconCss={!isToggleState ? "sf-icon-message-chat-circle fs-5 lh-base" : "e-icons e-close fs-5 lh-base"} position="BottomRight" type="button" target="#target" onClick={toggleDialog}></FabComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
