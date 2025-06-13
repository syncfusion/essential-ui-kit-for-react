'use client';

import { useEffect, useRef, useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-react-navigations";
import { TextAreaComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIDialog1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent | null>(null);
    const uploader = useRef<UploaderComponent | null>(null);
    const stepper = useRef<StepperComponent | null>(null);

    const checkWindowSize = (): void => {
        if (dialog && stepper) {
            dialog.current?.show(window.innerWidth <= 640);
            setTimeout(()=>{
                stepper.current?.refresh();
            }, 300);
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-dialog-1' && blockData.theme) {
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
                        <div id="dialog-container" style={{ minHeight: "580px" }}>
                            <DialogComponent id={styles["dialog"]} ref={dialog} className="rounded-none sm:rounded-lg overflow-hidden" target="#dialog-container" isModal={true} width="357px" beforeOpen={(event) => (event.maxHeight = '100%')} open={(event) => (event.preventFocus = true)}>
                                <div className="flex flex-col h-full">
                                    <div className="border-b py-6 dark:border-gray-600">
                                        <StepperComponent ref={stepper} cssClass="e-small mx-auto" labelPosition="End" activeStep={1} style={{ maxWidth: "256px" }}>
                                            <StepsDirective>
                                                <StepDirective iconCss="e-icons e-check-small" label="Basic info"></StepDirective>
                                                <StepDirective text="2" label="AI prompt"></StepDirective>
                                            </StepsDirective>
                                        </StepperComponent>
                                    </div>
                                    <div className="flex flex-col gap-6 grow px-4 py-6 sm:pt-4">
                                        <div className="flex flex-col gap-1 text-xs">
                                            <label className="font-medium">Upload image reference</label>
                                            <div id={styles["upload-template"]} key={"dialog-1-tw"} className="flex flex-col items-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-lg pt-6 drop-area">
                                                <ButtonComponent className="!px-1.5 mb-2 md:mb-3" iconCss="e-icons e-align-top" onClick={() => uploader.current?.element.click()} type="button"></ButtonComponent>
                                                <p>Drag & drop or <a href="#" className="font-medium underline text-primary-600 dark:text-primary-400" onClick={() => uploader.current?.element.click()}>choose file</a> to upload.</p>
                                                <p className="mb-6">Image format: JPG, PNG, & SVG, Max 5.0MB</p>
                                                <UploaderComponent ref={uploader} className="w-full" dropArea=".drop-area"></UploaderComponent>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 grow text-xs">
                                            <label className="font-medium">Describe to AI</label>
                                            <TextAreaComponent value="I want to have modern and clean looking workspace with minimal and bright accent colors. Completed with natural wood color and beige furniture." resizeMode="None" rows={5} style={{ height: "112px" }}></TextAreaComponent>
                                        </div>
                                        <ButtonComponent cssClass="e-primary sm:self-center" iconCss="e-icons e-ai-chat" type="button">Generate design</ButtonComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" style={{ minHeight: "580px" }}>
                            <DialogComponent id={styles["dialog"]} ref={dialog} className="rounded-2" target="#dialog-container" isModal={true} width="357px" beforeOpen={(event) => (event.maxHeight = '100%')} open={(event) => (event.preventFocus = true)}>
                                <div className="d-flex flex-column h-100">
                                    <div className="border-bottom py-4 border-light-subtle">
                                        <StepperComponent ref={stepper} cssClass="e-small mx-auto" labelPosition="End" activeStep={1} style={{ maxWidth: "256px" }}>
                                            <StepsDirective>
                                                <StepDirective iconCss="e-icons e-check-small" label="Basic info"></StepDirective>
                                                <StepDirective text="2" label="AI prompt"></StepDirective>
                                            </StepsDirective>
                                        </StepperComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-4 flex-grow-1 px-3 py-4 pt-sm-3">
                                        <div className="d-flex flex-column gap-1">
                                            <label className="fw-medium small">Upload image reference</label>
                                            <div id={styles["upload-template"]} key={"dialog-1-bs"} className="d-flex flex-column align-items-center small text-body-tertiary bg-body-tertiary border rounded-1 pt-4 drop-area">
                                                <ButtonComponent className="e-outline px-2 mb-2 mb-md-3" iconCss="e-icons e-align-top" onClick={() => uploader.current?.element.click()} type="button"></ButtonComponent>
                                                <p className="mb-0">Drag & drop or <a href="#" className="fw-medium text-primary" onClick={() => uploader.current?.element.click()}>choose file</a> to upload.</p>
                                                <p className="mb-4">Image format: JPG, PNG, & SVG, Max 5.0MB</p>
                                                <UploaderComponent ref={uploader} className="w-100" dropArea=".drop-area"></UploaderComponent>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-1 flex-grow-1">
                                            <label className="fw-medium small">Describe to AI</label>
                                            <TextAreaComponent value="I want to have modern and clean looking workspace with minimal and bright accent colors. Completed with natural wood color and beige furniture." resizeMode="None" rows={5} style={{ height: "112px" }}></TextAreaComponent>
                                        </div>
                                        <ButtonComponent cssClass="e-primary align-self-sm-center" iconCss="e-icons e-ai-chat" type="button">Generate design</ButtonComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
