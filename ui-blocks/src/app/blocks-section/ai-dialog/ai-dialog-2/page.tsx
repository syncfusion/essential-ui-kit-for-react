'use client';

import { useEffect, useRef, useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIDialog2() {
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
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-dialog-2' && blockData.theme) {
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
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="rounded-none sm:rounded-lg overflow-hidden" target="#dialog-container" isModal={true} width="400px" beforeOpen={(event) => (event.maxHeight = '100%')} open={(event) => (event.preventFocus = true)}
                                header={() =>
                                    <div className="flex justify-between items-center pt-3 mb-1 sm:px-1.5">
                                        <p className="font-medium text-lg">Feedback for improvement</p>
                                        <ButtonComponent cssClass="e-flat e-small me-1" iconCss="e-icons e-close" onClick={() => dialog.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                }
                                footerTemplate={() =>
                                    <div className="flex gap-3 sm:px-1.5 pt-1 pb-4">
                                        <ButtonComponent cssClass="w-1/2 !ml-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-1/2 !ml-0" content="Submit" type="submit"></ButtonComponent>
                                    </div>
                                }
                            >
                                <div className="flex flex-col gap-6 px-4 py-3 sm:px-6 h-full">
                                    <div className="flex flex-col gap-3" style={{ maxWidth: "fit-content" }}>
                                        <CheckBoxComponent label="Factually incorrect" checked={true}></CheckBoxComponent>
                                        <CheckBoxComponent label="Missing key information"></CheckBoxComponent>
                                        <CheckBoxComponent label="Ignored or refused instructions"></CheckBoxComponent>
                                    </div>
                                    <div className="flex flex-col gap-1 grow text-sm">
                                        <label className="font-medium">Others (Optional)</label>
                                        <TextAreaComponent placeholder="Please share your additional feedback to improvise" resizeMode="None" rows={6} style={{ height: "140px" }}></TextAreaComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" onClick={() => dialog.current?.show()} content="Feedback for Improvement" type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "580px" }}>
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="rounded-2" target="#dialog-container" isModal={true} width="400px" beforeOpen={(event) => (event.maxHeight = '100%')} open={(event) => (event.preventFocus = true)}
                                header={() =>
                                    <div className="d-flex justify-content-between align-items-center fs-5 px-sm-2 mx-1 pt-2">
                                        <p className="fw-medium small mb-0">Feedback for improvement</p>
                                        <ButtonComponent cssClass="e-flat e-small" iconCss="e-icons e-close" onClick={() => dialog.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                }
                                footerTemplate={() =>
                                    <div className="d-flex gap-3 pb-2 m-1 px-sm-2">
                                        <ButtonComponent cssClass="w-50 ms-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-50 ms-0" content="Submit" type="submit"></ButtonComponent>
                                    </div>
                                }
                            >
                                <div className="d-flex flex-column p-3 pb-2 px-sm-4 h-100">
                                    <div className="d-flex flex-column gap-3 mb-4 mb-md-3" style={{ maxWidth: "fit-content" }}>
                                        <CheckBoxComponent label="Factually incorrect" checked={true}></CheckBoxComponent>
                                        <CheckBoxComponent label="Missing key information"></CheckBoxComponent>
                                        <CheckBoxComponent label="Ignored or refused instructions"></CheckBoxComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1 flex-grow-1">
                                        <label className="fw-medium">Others <span className="text-body-tertiary">(Optional)</span></label>
                                        <TextAreaComponent placeholder="Please share your additional feedback to improvise" resizeMode="None" rows={6} style={{ height: "140px" }}></TextAreaComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="e-outline mx-auto my-3" content="Feedback for Improvement" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
