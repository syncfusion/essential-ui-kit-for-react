'use client';

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { AIAssistViewComponent } from "@syncfusion/ej2-react-interactive-chat";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIFloatingMenu1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [toggleState, setToggleState] = useState(true);
    const [isMobileView, setIsMobileView] = useState(false);
    const dialogRef = useRef<DialogComponent | null>(null);
    const aiAssistViewRef = useRef<AIAssistViewComponent | null>(null);
    const fabRef = useRef<FabComponent | null>(null);

    const promptMessages: any[] = [
        {
            response: "Hi there. I'm the AI Assistant. How can I help you today?"
        }
    ];

    const promptRequest = (): void => {
        setTimeout(() => {
            const defaultResponse = "For real-time prompt processing, connect AI AssistView to your AI service, such as OpenAI or Azure Cognitive Services, using API credentials.";
            if (aiAssistViewRef.current) {
                aiAssistViewRef.current.addPromptResponse(defaultResponse);
            }
        }, 1000);
    };

    const toggleDialog = (): void => {
        setToggleState(!toggleState);
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
                    Y: position.y - (dialogBounds.height + 18),
                };
        }
        event.preventFocus = true;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-floating-menu-1' && blockData.theme) {
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
            if (toggleState) {
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
    }, [toggleState]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id="target" className="w-full" style={{ height: isMobileView ? "580px" : "690px" }}>
                            <div className="flex items-center justify-center pt-4 block sm:hidden">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-help-circle !text-xl" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-chat"]} className="sm:!rounded-2xl !rounded-none overflow-hidden !border-0" width={isMobileView ? "400px" : "350px"} open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => (
                                    <div className="pt-4 pb-5 bg-primary-600 dark:bg-primary-400">
                                        <div className="flex justify-end block sm:hidden px-4 absolute right-0">
                                            <ButtonComponent cssClass="e-primary e-round" iconCss="e-icons e-close text-white dark:text-black !leading-5" type="button" onClick={toggleDialog}></ButtonComponent>
                                        </div>
                                        <div className="flex flex-col items-center pt-2">
                                            <h2 className="text-white dark:text-black font-semibold text-sm">Chat with our AI</h2>
                                            <p className="pt-2 pb-4 text-center text-wrap w-44 text-xs font-medium text-white dark:text-black">Ask any question and our AI will answer</p>
                                            <ButtonComponent className="rounded-2xl !border !border-white dark:!border-black" cssClass="e-primary" content="New Chat" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                            >
                                <div id={styles["assistview-tw"]} className="bg-primary-600 dark:bg-primary-400 px-4 pb-4">
                                    <div className="bg-white dark:bg-gray-800 flex flex-col rounded-2xl px-3" style={{ height: "410px" }}>
                                        <AIAssistViewComponent ref={aiAssistViewRef} cssClass="rounded-lg" promptPlaceholder="Type your message here..." prompts={promptMessages} promptRequest={promptRequest}></AIAssistViewComponent>
                                        <p className="text-center text-xs font-normal mt-2 mb-3 text-gray-700 dark:text-gray-300">
                                            Powered by <span className="font-semibold dark:text-white">Remall</span>
                                        </p>
                                    </div>
                                </div>
                            </DialogComponent>
                            <FabComponent ref={fabRef} className="!hidden sm:!block" cssClass="e-primary e-round e-bigger" iconCss={!toggleState ? "sf-icon-help-circle !text-2xl" : "e-icons e-close !text-2xl"} type="button" position="BottomRight" target="#target" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id="target" className="w-100" style={{ height: isMobileView ? '580px' : '690px' }}>
                            <div className="d-flex align-items-center justify-content-center pt-4 d-block d-sm-none">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-help-circle fs-5 lh-base" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-chat"]} className="rounded-4 overflow-hidden border-0" width={isMobileView ? '400px' : '350px'} open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => (
                                    <div className="py-4 bg-primary">
                                        <div className="d-flex justify-content-end d-block d-sm-none px-3 top-0 pt-3 position-absolute end-0">
                                            <ButtonComponent className="e-primary e-round" iconCss="e-icons e-close text-white" type="button" onClick={toggleDialog}></ButtonComponent>
                                        </div>
                                        <div className="d-flex flex-column align-items-center">
                                            <h2 className="text-white fw-bold small mb-0">Chat with our AI</h2>
                                            <p className="pt-2 pb-3 text-center text-wrap mb-0 w-50 text-white small fw-medium">
                                                Ask any question and our AI will answer
                                            </p>
                                            <ButtonComponent className="rounded-5 px-3 border border-white" cssClass="e-primary rounded-5 px-3" content="New Chat" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                            >
                                <div id={styles["assistview-bs"]} className="bg-primary px-3 pb-3">
                                    <div className="bg-body d-flex flex-column rounded-4 px-3" style={{ height: '398px' }}>
                                        <AIAssistViewComponent ref={aiAssistViewRef} cssClass="rounded" promptPlaceholder="Type your message here..." prompts={promptMessages} promptRequest={promptRequest}></AIAssistViewComponent>
                                        <p className="text-center small fw-normal mt-2 mb-3 text-body-secondary">
                                            Powered by <span className="fw-medium text-body">Remall</span>
                                        </p>
                                    </div>
                                </div>
                            </DialogComponent>
                            <FabComponent ref={fabRef} className="d-none d-sm-block" cssClass="e-primary e-round e-bigger" iconCss={!toggleState ? 'sf-icon-help-circle fs-5 lh-base' : 'e-icons e-close fs-5 lh-base'} type="button" position="BottomRight" target="#target" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
