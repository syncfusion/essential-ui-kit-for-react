'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent, OpenEventArgs } from '@syncfusion/ej2-react-popups';
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar, Link, Image, Table, Count, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Modals11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [rteHeight, setRteHeight] = useState('325px');
    const dialog = useRef<DialogComponent>(null);
    const rte = useRef<RichTextEditorComponent>(null);

    const checkWindowSize = (): void => {
        const mobile = window.innerWidth <= 640;
        setRteHeight(mobile ? '100%' : '325px');

        if (dialog.current) {
            dialog.current.show(mobile);
        }
    };

    const dialogOpen = (args: OpenEventArgs): void => {
        args.preventFocus = true;
        setTimeout(() => {
            rte.current?.refresh();
        }, 150);
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
                if (blockData.name === 'modals-11' && blockData.theme) {
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
        window.addEventListener('message', handleMessageEvent);
        /* SB Code - End */
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener("resize", checkWindowSize);
        }
    }, []);
    
    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id="dialog-container" className="relative" style={{ minHeight: "580px" }}>
                            <DialogComponent ref={dialog} className="rounded-none sm:rounded-lg sm:m-4" target="#dialog-container" open={dialogOpen} showCloseIcon={true} width="660px" isModal={true}
                                header={() => (
                                    <p className="font-semibold leading-normal">Submit Feedback</p>
                                )}
                                footerTemplate={() =>
                                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 sm:gap-3 mb-2">
                                        <ButtonComponent cssClass="grow sm:grow-0 !ml-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary grow sm:grow-0 !ml-0" content="Submit Feedback" type="submit"></ButtonComponent>
                                    </div>
                                }
                            >
                                <div className="h-full">
                                    <form className="flex flex-col gap-1 text-xs font-medium leading-normal text-gray-700 dark:text-gray-200 h-full" onSubmit={(e) => e.preventDefault()}>
                                        <label>Comments <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <RichTextEditorComponent ref={rte} toolbarSettings={{ items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontColor', 'BackgroundColor', '|', 'CreateLink'] }} placeholder="Enter your comments" maxLength={500} showCharCount={true} height={rteHeight}>
                                            <p></p>
                                            <Inject services={[Toolbar, HtmlEditor, Link, Image, Table, Count, QuickToolbar]} />
                                        </RichTextEditorComponent>
                                    </form>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" content="Submit Feedback" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                ); 
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "580px" }}>
                            <DialogComponent ref={dialog} className="rounded-3 m-sm-2" target="#dialog-container" open={dialogOpen} showCloseIcon={true} width="660px" isModal={true}
                                header={() => (
                                    <p className="fw-bold mb-0 text-body">Submit Feedback</p>
                                )}
                                footerTemplate={() =>
                                    <div className="d-flex flex-column-reverse flex-sm-row justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent className="flex-grow-1 flex-sm-grow-0 ms-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-primary flex-grow-1 flex-sm-grow-0 ms-0 ms-sm-2" content="Submit Feedback" type="submit"></ButtonComponent>
                                    </div>
                                }
                            >
                                <div className="h-100">
                                    <form action="#" className="d-flex flex-column gap-1 text-body-secondary small h-100" onSubmit={(e) => e.preventDefault()}>
                                        <label>Comments <span className="text-danger">*</span></label>
                                        <RichTextEditorComponent ref={rte} toolbarSettings={{ items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontColor', 'BackgroundColor', '|', 'CreateLink'] }} placeholder="Enter your comments" maxLength={500} showCharCount={true} height={rteHeight}>
                                            <p></p>
                                            <Inject services={[Toolbar, HtmlEditor, Link, Image, Table, Count, QuickToolbar]} />
                                        </RichTextEditorComponent>
                                    </form>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" content="Submit Feedback" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}