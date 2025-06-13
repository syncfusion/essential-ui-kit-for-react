'use client';

import { useEffect, useRef, useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIDialog3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent | null>(null);

    const checkWindowSize = (): void => {
        if (dialog) {
            dialog.current?.show(window.innerWidth <= 640);
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-dialog-3' && blockData.theme) {
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
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id="dialog-container" className="relative" style={{ minHeight: "580px" }}>
                            <DialogComponent id={styles["dialog"]} ref={dialog} className="rounded-none sm:rounded-lg overflow-hidden" target="#dialog-container" isModal={true} width="580px" minHeight="238px" beforeOpen={(event) => (event.maxHeight = '100%')} open={(event) => (event.preventFocus = true)}>
                                <div className="flex flex-col gap-6 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-medium">Create a public page to share</p>
                                        <ButtonComponent cssClass="e-flat e-small" iconCss="e-icons e-close" onClick={() => dialog.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <RadioButtonComponent name="shareOption" label="This prompt & response" checked={true}></RadioButtonComponent>
                                        <RadioButtonComponent name="shareOption" label="Entire chat"></RadioButtonComponent>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="e-bigger flex justify-between items-center shadow-sm border rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500">
                                            <TextBoxComponent className="grow" cssClass="!border-0 !rounded-3xl !shadow-none" type="url" placeholder="https://helpbot.boldsign.com/share/********"></TextBoxComponent>
                                            <ButtonComponent cssClass="e-primary !rounded-3xl m-1.5" iconCss="e-icons e-link" type="button">Create link</ButtonComponent>
                                        </div>
                                        <p className="flex justify-center gap-1 text-xs text-gray-500 dark:text-gray-400"><i className="e-icons e-circle-info text-base dark:text-gray-300 leading-none"></i>Anyone with the link can see or share it with others, so share responsibly.</p>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" onClick={() => dialog.current?.show()} type="button">Create Public Page</ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "580px" }}>
                            <DialogComponent id={styles["dialog"]} ref={dialog} className="rounded-2" target="#dialog-container" isModal={true} width="580px" minHeight="238px" beforeOpen={(event) => (event.maxHeight = '100%')} open={(event) => (event.preventFocus = true)}>
                                <div className="d-flex flex-column gap-4 px-3 py-4 px-sm-4">
                                    <div className="d-flex justify-content-between align-items-center fs-5">
                                        <p className="fw-medium small mb-0">Create a public page to share</p>
                                        <ButtonComponent cssClass="e-flat e-small" iconCss="e-icons e-close" onClick={() => dialog.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-3">
                                        <RadioButtonComponent name="shareOption" label="This prompt & response" checked={true}></RadioButtonComponent>
                                        <RadioButtonComponent name="shareOption" label="Entire chat"></RadioButtonComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="e-bigger d-flex justify-content-between align-items-center border bg-body rounded-pill overflow-hidden">
                                            <TextBoxComponent className="flex-grow-1" cssClass="border-0 rounded-pill shadow-none" type="url" placeholder="https://helpbot.boldsign.com/share/********"></TextBoxComponent>
                                            <ButtonComponent cssClass="e-primary rounded-pill m-1" iconCss="e-icons e-link" type="button">Create link</ButtonComponent>
                                        </div>
                                        <p className="d-flex justify-content-center gap-1 small text-body-secondary mb-0"><i className="e-icons e-circle-info lh-base"></i>Anyone with the link can see or share it with others, so share responsibly.</p>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="e-outline mx-auto my-3" onClick={() => dialog.current?.show()} type="button">Create Public Page</ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
