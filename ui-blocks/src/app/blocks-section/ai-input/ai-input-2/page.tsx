'use client';

import { useEffect, useState, useRef } from "react";
import { TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent, ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIInput2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const textareaRef = useRef<TextAreaComponent | null>(null);

    const adjustHeight = (): void => {
        const textarea = textareaRef.current?.element as HTMLTextAreaElement;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-input-2' && blockData.theme) {
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
        adjustHeight();
        window.addEventListener('resize', adjustHeight);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', adjustHeight);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id={styles["enhanced-prompt"]} key={"input-2-tw"} className="py-20" style={{ minHeight: '36rem' }}>
                            <div className="px-4 sm:px-6 flex flex-col-reverse" style={{ minHeight: '20rem' }}>
                                <div className="bg-white dark:bg-gray-800 rounded-md pt-2 pb-3 px-3 mx-auto flex flex-col-reverse" style={{ maxWidth: '705px' }}>
                                    <span className="e-input-group mt-1 !border-0 !shadow-none">
                                        <TextAreaComponent ref={textareaRef} placeholder="Enter prompt" rows={1} cols={300} resizeMode="None" input={adjustHeight} style={{ maxHeight: '10rem' }}></TextAreaComponent>
                                        <span style={{ bottom: "7px", position: "absolute", right: "5px" }}>
                                            <ButtonComponent className="e-flat e-icons e-assist-send !border-0" type="submit" style={{ pointerEvents: 'none' }}></ButtonComponent>
                                        </span>
                                    </span>
                                    <ChipListComponent className="gap-1">
                                        <ChipsDirective>
                                            <ChipDirective cssClass="e-outline !rounded-md !mx-0" text="Regenerate response"></ChipDirective>
                                            <ChipDirective cssClass="e-outline !rounded-md !mx-0" text="Use prompt suggestions"></ChipDirective>
                                            <ChipDirective cssClass="e-outline !rounded-md !mx-0" text="Toggle web search"></ChipDirective>
                                            <ChipDirective cssClass="e-outline !rounded-md !mx-0" text="Select a tone"></ChipDirective>
                                            <ChipDirective cssClass="e-outline !rounded-md !mx-0" text="Improve"></ChipDirective>
                                        </ChipsDirective>
                                    </ChipListComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["enhanced-prompt"]} key={"input-2-bs"} className="py-5" style={{ minHeight: '36rem' }}>
                            <div className="d-flex flex-column-reverse px-4 px-sm-5" style={{ minHeight: '22rem' }}>
                                <div className="bg-body rounded py-3 px-3 mx-auto d-flex flex-column-reverse position-relative" style={{ maxWidth: '675px' }}>
                                    <span className="e-input-group mt-1 border-0 shadow-none">
                                        <TextAreaComponent ref={textareaRef} placeholder="Enter prompt" rows={1} cols={300} resizeMode="None" input={adjustHeight} style={{ maxHeight: '10rem' }}></TextAreaComponent>
                                        <span style={{ bottom: '7px', position: 'absolute', right: '5px' }}>
                                            <ButtonComponent className="e-flat e-icons e-assist-send border-0" type="submit" style={{ pointerEvents: 'none' }}></ButtonComponent>
                                        </span>
                                    </span>
                                    <ChipListComponent className="gap-1">
                                        <ChipsDirective>
                                            <ChipDirective cssClass="e-outline rounded mx-0" text="Regenerate response"></ChipDirective>
                                            <ChipDirective cssClass="e-outline rounded mx-0" text="Use prompt suggestions"></ChipDirective>
                                            <ChipDirective cssClass="e-outline rounded mx-0" text="Toggle web search"></ChipDirective>
                                            <ChipDirective cssClass="e-outline rounded mx-0" text="Select a tone"></ChipDirective>
                                            <ChipDirective cssClass="e-outline rounded mx-0" text="Improve"></ChipDirective>
                                        </ChipsDirective>
                                    </ChipListComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
