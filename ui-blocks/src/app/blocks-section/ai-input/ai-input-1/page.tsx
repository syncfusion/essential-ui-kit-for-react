'use client';

import { useEffect, useState, useRef } from "react";
import { TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIInput1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [promptMessage, setPromptMessage] = useState('');
    const textareaRef = useRef<TextAreaComponent | null>(null);
    
    const adjustHeight = (): void => {
        const textarea = textareaRef.current?.element as HTMLTextAreaElement;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
            setPromptMessage(textarea.value);
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-input-1' && blockData.theme) {
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
                        <div id={styles["compact-prompt"]} className="py-20 px-4 sm:px-6" style={{ minHeight: '36rem' }}>
                            <div className="flex flex-col-reverse px-0 lg:px-28 mx-auto" style={{ minHeight: '16rem', maxWidth: '720px' }}>
                                <div className="bg-white dark:bg-gray-800 rounded-md py-3 px-3 flex flex-col-reverse">
                                    <span className="e-input-group !border-0 !shadow-none">
                                        <TextAreaComponent ref={textareaRef} value={promptMessage} placeholder="Enter prompt" rows={1} cols={300} resizeMode="None" input={adjustHeight} style={{ maxHeight: '14rem' }}></TextAreaComponent>
                                        <span style={{ bottom: "4px", position: "absolute", right: "5px" }}>
                                            <ButtonComponent className="!border-0 e-flat" iconCss="e-icons e-assist-send" disabled={!promptMessage} type="submit" style={{ pointerEvents: 'none' }}></ButtonComponent>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["compact-prompt"]} className="py-5 px-4 px-sm-5" style={{ minHeight: '36rem' }}>
                            <div className="d-flex flex-column-reverse px-0 px-lg-5 mx-auto" style={{ minHeight: '18rem', maxWidth: '720px' }}>
                                <div className="bg-body rounded py-3 px-3 d-flex flex-column-reverse position-relative">
                                    <span className="e-input-group border-0 shadow-none">
                                        <TextAreaComponent ref={textareaRef} value={promptMessage} placeholder="Enter prompt" rows={1} cols={300} resizeMode="None" input={adjustHeight} style={{ maxHeight: '15rem' }}></TextAreaComponent>
                                        <span style={{ bottom: '2px', position: 'absolute', right: '5px' }}>
                                            <ButtonComponent className="border-0 e-outline" iconCss="e-icons e-assist-send" disabled={!promptMessage} type="submit" style={{ pointerEvents: 'none' }}></ButtonComponent>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
